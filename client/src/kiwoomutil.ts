import { normalize } from 'path';
import { IKiwoomEventHandler, KiwoomAPI } from './kiwoomapi';
import { TRBase, ITRInputBase, ITROutputBase, TR_OPW00007, TR_OPW00018, TR_OPW00007MultiItem } from './trinfo';
import { StockHoldingInfoType, StockInfoRawType, StockInfoType } from './types';
import { FIDList } from './types_fid';
import { RealList } from './types_real';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import chalk from 'chalk';

export type KiwoomConditionItem = { index: number; name: string };

export class KiwoomUtil {
    private kiwoom: KiwoomAPI;
    private event_handler: IKiwoomEventHandler;
    private waitingevent: {
        onReceiveConditionVer: IKiwoomEventHandler['onReceiveConditionVer'][]
        onReceiveTrCondition: IKiwoomEventHandler['onReceiveTrCondition'][]
        onReceiveTrData: { rqname: string, callback: IKiwoomEventHandler['onReceiveTrData'] }[]
    } = {
            onReceiveConditionVer: [],
            onReceiveTrCondition: [],
            onReceiveTrData: []
        };

    private account = '';
    private server_type: 'TEST' | 'REAL' = 'TEST';
    stockinfo_list: { [key: string]: StockInfoType } = {};
    stockholding_list: StockHoldingInfoType[] = [];

    private start_date = '2025-02-01';
    private data_dir = normalize(__dirname + '/../../data');

    constructor(kiwoom: KiwoomAPI, oninit: () => void) {
        this.kiwoom = kiwoom;
        this.event_handler = {
            onReceiveConditionVer: this.on_receive_condition_ver,
            onReceiveTrCondition: this.on_receive_tr_condition,
            onReceiveTrData: this.on_receive_tr_data,
            onReceiveRealData: this.on_receive_real_data,
            onReceiveChejanData: this.on_receive_chejan_data,
            onReceiveMsg: this.on_receive_msg,
        };
        this.kiwoom.SetRealRemove('ALL', 'ALL');
        this.kiwoom.setEventHandler(this.event_handler);

        this.init(oninit);
    }

    async init(oninit: () => void) {
        const accno = await this.kiwoom.GetLoginInfo('ACCNO');
        this.account = accno.split(';')[0];
        console.log(`${chalk.green('set default account')} : ${chalk.yellow(this.account)}`);

        const servertype = await this.kiwoom.GetLoginInfo('GetServerGubun');
        this.server_type = servertype === '1' ? 'TEST' : 'REAL';
        console.log(`${chalk.green('connected server type')} : ${chalk.yellow(this.server_type)}`);

        // await this.getAccountStatus();

        oninit();
    }

    async getAccountStatus() {
        if (existsSync(this.data_dir) === false) {
            mkdirSync(this.data_dir, { recursive: true });
        }
        this.stockholding_list.length = 0;

        const startdate = new Date(this.start_date);
        const enddate = new Date();
        const enddate_str = `${enddate.getFullYear()}${(enddate.getMonth() + 1).toString().padStart(2, '0')}`
            + `${enddate.getDate().toString().padStart(2, '0')}`;
        // enddate.setHours(0, 0, 0, 0);
        const date = new Date(startdate);

        while (date < enddate) {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const date_str = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
            date.setDate(date.getDate() + 1);

            const dateitems: TR_OPW00007MultiItem[] = [];
            if (existsSync(`${this.data_dir}/${date_str}.json`) === false) {
                const result = await this.sendTR(TR_OPW00007, {
                    주문일자: date_str, // YYYYMMDD
                    계좌번호: this.account, // 10자리
                    비밀번호: '', // 공백
                    비밀번호입력매체구분: '00', // 공백
                    조회구분: '4', // 1:주문순, 2:역순, 3:미체결, 4:체결내역만
                    주식채권구분: '1', // 0:전체, 1:주식, 2:채권
                    매도수구분: '0', // 0:전체, 1:매도, 2:매수
                    종목코드: '', // 공백일때 전체종목
                    시작주문번호: '', // 공백일때 전체주문
                });
                if (date_str !== enddate_str) {
                    writeFileSync(`${this.data_dir}/${date_str}.json`, JSON.stringify(result.multi_items));
                }
                dateitems.push(...result.multi_items);
                await new Promise(resolve => setTimeout(resolve, 300));

            } else {
                const file = readFileSync(`${this.data_dir}/${date_str}.json`, 'utf-8');
                dateitems.push(...JSON.parse(file) as TR_OPW00007MultiItem[]);
            }

            for (const item of dateitems) {
                const index = this.stockholding_list.findIndex(h => h.name === item.종목명);
                const holdingitem: StockHoldingInfoType = index > -1 ? this.stockholding_list[index] : {
                    code: item.종목번호.slice(-6),
                    name: item.종목명,
                    positions: [],
                    total_buy_count: 0,
                    total_sell_count: 0,
                    total_buy_value: 0,
                    total_sell_value: 0,
                    current_count: 0,
                    current_price: 0,
                    current_value: 0,
                    trading_value: 0,
                    trading_value_ratio: 0,
                }
                if (index === -1) this.stockholding_list.push(holdingitem);
                const newitem: StockHoldingInfoType['positions'][number] = {
                    count: parseInt(item.체결수량),
                    price: parseInt(item.체결단가),
                };
                if (item.주문구분.includes('매도')) newitem.count *= -1;
                holdingitem.positions.push(newitem);
            }
        }
        for (const item of this.stockholding_list) {
            item.total_buy_count = 0;
            item.total_sell_count = 0;
            item.total_buy_value = 0;
            item.total_sell_value = 0;
            item.current_count = 0;
            item.current_price = 0;
            item.current_value = 0;
            item.trading_value = 0;
            item.trading_value_ratio = 0;
            for (const position of item.positions) {
                if (position.count > 0) {
                    item.total_buy_count += position.count;
                    item.total_buy_value += position.count * position.price;
                } else {
                    item.total_sell_count += -position.count;
                    item.total_sell_value += -position.count * position.price;
                }
            }
            item.current_count = item.total_buy_count - item.total_sell_count;
        }

        const result = await this.sendTR(TR_OPW00018, {
            계좌번호: '8093398911',
            비밀번호: '0000',
            비밀번호입력매체구분: '00',
            조회구분: '2',
        });
        let total_buy_value = 0;
        let total_sell_value = 0;
        let total_current_value = 0;
        for (const item of result.multi_items.sort((a, b) => a.종목명.localeCompare(b.종목명))) {
            const info = this.stockholding_list.find(h => h.name === item.종목명);
            if (info === undefined) {
                console.error(`cannot find '${item.종목명}' from history!`);
                continue;
            }
            const current_count = parseInt(item.보유수량);
            if (current_count !== info.current_count) {
                console.error('cannot match current count!', item.종목명, current_count, info.current_count);
                continue;
            }
            info.current_price = parseInt(item.현재가);
            info.current_value = info.current_price * info.current_count;
            info.trading_value = info.current_value + info.total_sell_value;
            info.trading_value_ratio = info.trading_value / info.total_buy_value;

            total_buy_value += info.total_buy_value;
            total_sell_value += info.total_sell_value;
            total_current_value += info.current_value;
        }

        const codelist = this.stockholding_list.map(h => h.code);
        const infolist = await this.getStockInfo(codelist);
        for (const info of infolist) {
            await this.updateStockList(info);
        }
        this.kiwoom.SetRealReg('0022', codelist.join(';'), '10', '1');

        console.log('total_buy_value', total_buy_value);
        console.log('total_sell_value', total_sell_value);
        console.log('total_current_value', total_current_value);
        console.log('total_trading_value', total_current_value + total_sell_value);
        console.log('total_trading_value_ratio', (total_current_value + total_sell_value) / total_buy_value);
    }

    private on_receive_condition_ver: IKiwoomEventHandler['onReceiveConditionVer']
        = async (ret, msg) => {
            const callback = this.waitingevent.onReceiveConditionVer.shift();
            if (callback) await callback(ret, msg);
        };
    private on_receive_tr_condition: IKiwoomEventHandler['onReceiveTrCondition']
        = async (scr_no, code_list, condition_name, index, next) => {
            const callback = this.waitingevent.onReceiveTrCondition.shift();
            if (callback) await callback(scr_no, code_list, condition_name, index, next);
        };
    private on_receive_chejan_data: IKiwoomEventHandler['onReceiveChejanData']
        = async (gubun, item_cnt, fid_list) => {
            // gubun : 체결구분. 접수와 체결시 '0'값, 국내주식 잔고변경은 '1'값, 파생잔고변경은 '4'
            const fidlist = fid_list.split(';').map(fid => parseInt(fid));
            for (const fid of fidlist) {
                const fidname = FIDList[fid];
                if (fidname !== undefined) {
                    const data = (await this.kiwoom.GetChejanData(fid)).trim();
                    console.log(fidname, data);
                }
            }
        };
    private on_receive_tr_data: IKiwoomEventHandler['onReceiveTrData']
        = async (scr_no, rq_name, tr_code, record_name, prev_next, data_length, error_code, message, splm_msg) => {
            const index = this.waitingevent.onReceiveTrData.findIndex(cb => cb.rqname === rq_name);
            if (index !== -1) {
                const callback = this.waitingevent.onReceiveTrData[index].callback;
                this.waitingevent.onReceiveTrData.splice(index, 1);
                if (callback) await callback(scr_no, rq_name, tr_code, record_name, prev_next, data_length, error_code, message, splm_msg);
            }
        };
    private on_receive_real_data: IKiwoomEventHandler['onReceiveRealData']
        = async (code, real_type) => {
            const realinfo = RealList[real_type];
            if (realinfo !== undefined) {
                if (['주식시세', '주식체결'].includes(real_type)) {
                    const realitem: StockInfoRawType = {
                        종목코드: code,
                        종목명: await this.kiwoom.GetMasterCodeName(code),
                        현재가: '0',
                        전일대비: '0',
                        등락율: '0',
                        매도호가: '0',
                        매수호가: '0',
                        거래량: '0',
                        시가: '0',
                        고가: '0',
                        저가: '0',
                        체결시간: '',
                        체결강도: '0',
                    };

                    for (const fid of realinfo.fids) {
                        const fidname = FIDList[fid];
                        if (fidname !== undefined && fidname in realitem) {
                            const data = await this.kiwoom.GetCommRealData(code, fid);
                            realitem[fidname as keyof StockInfoRawType] = data.trim() as never;
                        }
                    };
                    await this.updateStockList(realitem);
                }
            }
        };

    private on_receive_msg: IKiwoomEventHandler['onReceiveMsg']
        = async (msg_type, msg) => {
            console.log('onReceiveMsg', msg_type, msg);
        };

    private async updateStockList(rawitem: StockInfoRawType) {
        const code = rawitem.종목코드;
        if (this.stockinfo_list[code] === undefined) {
            this.stockinfo_list[code] = {
                code,
                name: rawitem.종목명,
                price: parseInt(rawitem.현재가),
                price_delta: parseInt(rawitem.전일대비),
                price_delta_ratio: parseFloat(rawitem.등락율),
                ask_price: parseInt(rawitem.매도호가),
                bid_price: parseInt(rawitem.매수호가),
                opening_price: parseInt(rawitem.시가),
                highest_price: parseInt(rawitem.고가),
                lowest_price: parseInt(rawitem.저가),
            };

        } else {
            this.stockinfo_list[code].price = parseInt(rawitem.현재가);
            this.stockinfo_list[code].price_delta = parseInt(rawitem.전일대비);
            this.stockinfo_list[code].price_delta_ratio = parseFloat(rawitem.등락율);
            this.stockinfo_list[code].ask_price = parseInt(rawitem.매도호가);
            this.stockinfo_list[code].bid_price = parseInt(rawitem.매수호가);
            this.stockinfo_list[code].opening_price = parseInt(rawitem.시가);
            this.stockinfo_list[code].highest_price = parseInt(rawitem.고가);
            this.stockinfo_list[code].lowest_price = parseInt(rawitem.저가);
        }
    }

    async getConditionList(): Promise<KiwoomConditionItem[]> {
        this.kiwoom.GetConditionLoad();
        return new Promise<KiwoomConditionItem[]>(resolve => {
            this.waitingevent.onReceiveConditionVer.push(async (ret, msg) => {
                if (ret === 1) {
                    const condlist_str = await this.kiwoom.GetConditionNameList();
                    const condlist: KiwoomConditionItem[] = [];
                    condlist_str.split(';').forEach(str => {
                        const [index, name] = str.split('^');
                        if (index && name) condlist.push({ index: parseInt(index), name });
                    });
                    resolve(condlist);
                } else {
                    console.error('OnReceiveConditionVer', ret, msg);
                    resolve([]);
                }
            });
        });
    }

    async getConditionResult(cond: KiwoomConditionItem) {
        this.kiwoom.SendCondition('0101', cond.name, cond.index, 0);
        return new Promise<string[]>(resolve => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.waitingevent.onReceiveTrCondition.push(async (scr_no, code_list, condition_name, index, next) => {
                resolve(code_list.split(';').filter(code => code !== ''));
            });
        });
    }

    async getStockInfo(codelist: string[]): Promise<StockInfoRawType[]> {
        this.kiwoom.CommKwRqData(codelist.join(';'), false, codelist.length, 0, 'get_items', '0300');
        return new Promise<StockInfoRawType[]>(resolve => {
            this.waitingevent.onReceiveTrData.push({
                rqname: 'get_items',
                callback: async (scr_no, rq_name, tr_code) => {
                    const result: StockInfoRawType[] = [];
                    const count = await this.kiwoom.GetRepeatCnt(tr_code, rq_name);
                    for (let i = 0; i < count; i++) {
                        const rawitem: StockInfoRawType = {
                            종목코드: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '종목코드')).trim(),
                            종목명: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '종목명')).trim(),
                            현재가: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '현재가')).trim(),
                            전일대비: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '전일대비')).trim(),
                            등락율: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '등락율')).trim(),
                            매도호가: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '매도호가')).trim(),
                            매수호가: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '매수호가')).trim(),
                            거래량: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '거래량')).trim(),
                            시가: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '시가')).trim(),
                            고가: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '고가')).trim(),
                            저가: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '저가')).trim(),
                            체결시간: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '체결시간')).trim(),
                            체결강도: (await this.kiwoom.GetCommData(tr_code, rq_name, i, '체결강도')).trim(),
                        }
                        result.push(rawitem);
                    }
                    resolve(result);
                }
            });
        });
    }

    async sendTR<T extends TRBase<ITRInputBase, ITROutputBase>>(
        trinfo: new (input: T['input']) => T, trdata: Omit<T['input'], 'tr_code'>, next = false): Promise<T['output']> {

        const input = { ...trdata, tr_code: '' } as T['input'];
        const tr = new trinfo(input);

        for (const key in input) {
            if (key === 'tr_code') continue;
            await this.kiwoom.SetInputValue(key, input[key] as string);
        }
        const rqname = input.tr_code + '_req';
        this.kiwoom.CommRqData(rqname, input.tr_code, next === true ? 2 : 0, '0101');
        return new Promise<T['output']>(resolve => {
            this.waitingevent.onReceiveTrData.push({
                rqname,
                callback: async (scr_no, rq_name, tr_code, record_name, prev_next,
                    /*data_length, error_code, message, splm_msg*/) => {
                    const result = tr.output;
                    if (prev_next === '2') result.next = true;
                    for (const key in result) {
                        if (key === 'multi_items') {
                            if (result.multiT === null || result.multi_items === undefined) continue;
                            const count = await this.kiwoom.GetRepeatCnt(tr_code, rq_name);
                            for (let i = 0; i < count; i++) {
                                const multi_item = new result.multiT() as T['output'];
                                for (const multikey in multi_item) {
                                    const value = await this.kiwoom.GetCommData(tr_code, rq_name, i, multikey);
                                    multi_item[multikey as keyof typeof multi_item] = value.trim() as never;
                                }
                                result.multi_items.push(multi_item);
                            }

                        } else if (key !== 'multiT' && key !== 'next') {
                            const value = await this.kiwoom.GetCommData(tr_code, rq_name, 0, key);
                            result[key as keyof typeof result] = value.trim() as never;
                        }

                    }
                    resolve(result);
                }
            });
        });
    }

    makePrice(price: number) {
        if (price <= 2000) return price;
        if (price <= 5000) return Math.floor(price / 5) * 5;
        if (price <= 20000) return Math.floor(price / 10) * 10;
        if (price <= 50000) return Math.floor(price / 50) * 50;
        if (price <= 200000) return Math.floor(price / 100) * 100;
        if (price <= 500000) return Math.floor(price / 500) * 500;
        return Math.floor(price / 1000) * 1000;
    }

    async buy(code: string, qty: number, price: number) {
        return this.kiwoom.SendOrder('buyorder', '2000', this.account, 1, code, qty, price, '00', '');
    }

    async buy_program() {
        const condlist = await this.getConditionList();
        const codelist = await this.getConditionResult(condlist.find(c => c.name.startsWith('Real_'))!);
        const infolist = await this.getStockInfo(codelist);
        for (const info of infolist) {
            await this.updateStockList(info);
        }
        // await this.kiwoom.SetRealReg('0022', codelist.join(';'), '10', '1');

        let count = 0;
        for (const code of codelist) {
            const item = this.stockinfo_list[code];
            const askprice = this.makePrice(Math.abs(item.price) * 0.99);
            const qty = Math.floor(100000 / askprice);
            console.log('buy', code, qty, askprice);
            await this.buy(code, qty, askprice);

            count++;
            if (count >= 30) break;
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }

    async getOrderInfo() {
        const d = new Date();
        const datestr = `${d.getFullYear()}${(d.getMonth() + 1).toString().padStart(2, '0')}${d.getDate().toString().padStart(2, '0')}`;
        const result = await this.sendTR(TR_OPW00007, {
            주문일자: datestr,
            계좌번호: this.account,
            비밀번호: '',
            비밀번호입력매체구분: '00',
            조회구분: '1',
            주식채권구분: '1',
            매도수구분: '0',
            종목코드: '',
            시작주문번호: '',
        });
        return result;
    }
}