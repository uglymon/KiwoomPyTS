import { normalize } from 'path';
import { IKiwoomEventHandler, KiwoomAPI } from './kiwoomapi';
import { TRBase, ITRInputBase, ITROutputBase, TR_OPW00007, TR_OPW00018, TR_OPW00007MultiItem } from './trinfo';
import { StockHoldingInfoType, StockInfoType } from './types';
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
    stock_list: { [key: string]: StockInfoType } = {};

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

        await this.getAccountStatus();

        oninit();
    }

    async getAccountStatus() {
        // const result = await this.sendTR(TR_OPW00018, {
        //     계좌번호: this.account,
        //     비밀번호: '0000',
        //     비밀번호입력매체구분: '00',
        //     조회구분: '2',
        // });

        if (existsSync(this.data_dir) === false) {
            mkdirSync(this.data_dir, { recursive: true });
        }

        const startdate = new Date(this.start_date);
        const enddate = new Date();
        const enddate_str = `${enddate.getFullYear()}${(enddate.getMonth() + 1).toString().padStart(2, '0')}`
            + `${enddate.getDate().toString().padStart(2, '0')}`;
        // enddate.setHours(0, 0, 0, 0);
        const date = new Date(startdate);

        const holdingitems: StockHoldingInfoType[] = [];
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
                console.log(result);
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
                const index = holdingitems.findIndex(h => h.name === item.종목명);
                const holdingitem: StockHoldingInfoType = index > -1 ? holdingitems[index] : {
                    code: item.종목번호,
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
                if (index === -1) holdingitems.push(holdingitem);
                const newitem: StockHoldingInfoType['positions'][number] = {
                    count: parseInt(item.체결수량),
                    price: parseInt(item.체결단가),
                };
                if (item.주문구분.includes('매도')) newitem.count *= -1;
                holdingitem.positions.push(newitem);
            }
        }
        for (const item of holdingitems) {
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
        // for (const item of holdingitems.sort((a, b) => a.name.localeCompare(b.name))) {
        //     console.log(item);
        // }

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
            const info = holdingitems.find(h => h.name === item.종목명);
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
            console.log(info);

            total_buy_value += info.total_buy_value;
            total_sell_value += info.total_sell_value;
            total_current_value += info.current_value;
        }
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
                    const stockitem: StockInfoType = this.stock_list[code] ?? {
                        code: code,
                        name: '',
                        price: 0,
                        price_delta: 0,
                        price_delta_ratio: 0,
                        ask_price: 0,
                        bid_price: 0,
                        trading_vol: 0,
                        opening_price: 0,
                        highest_price: 0,
                        lowest_price: 0,
                        exec_time: '',
                        exec_strength: 0,
                    };
                    if (this.stock_list[code] === undefined) this.stock_list[code] = stockitem;
                    for (const fid of realinfo.fids) {
                        const fidname = FIDList[fid];
                        if (fidname !== undefined && fidname in stockitem) {
                            const data = await this.kiwoom.GetCommRealData(code, fid);
                            stockitem[fidname as keyof StockInfoType] = data.trim() as never;
                            console.log(fidname ?? fid, data);
                        }
                    }
                }
            }
        };


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
                resolve(code_list.split(';'));
            });
        });
    }

    async sendTR<T extends TRBase<ITRInputBase, ITROutputBase>>(
        trinfo: new (input: T['input']) => T, trdata: Omit<T['input'], 'tr_code'>): Promise<T['output']> {

        const input = { ...trdata, tr_code: '' } as T['input'];
        const tr = new trinfo(input);

        for (const key in input) {
            if (key === 'tr_code') continue;
            this.kiwoom.SetInputValue(key, input[key] as string);
        }
        const rqname = input.tr_code + '_req';
        this.kiwoom.CommRqData(rqname, input.tr_code, 0, '0101');
        return new Promise<T['output']>(resolve => {
            this.waitingevent.onReceiveTrData.push({
                rqname,
                callback: async (scr_no, rq_name, tr_code,
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    record_name, prev_next, data_length, error_code, message, splm_msg) => {
                    const result = tr.output;
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

                        } else if (key !== 'multiT') {
                            const value = await this.kiwoom.GetCommData(tr_code, rq_name, 0, key);
                            result[key as keyof typeof result] = value.trim() as never;
                        }

                    }
                    resolve(result);
                }
            });
        });
    }

    // async buy(code: string, qty: number, price: number) {
    //     this.kiwoom.SendOrder('buyorder', '2000', '8093398911', code, 1, '03', '00', qty, price, '');
    // }

    async test1() {
        const condlist = await this.getConditionList();
        console.log(condlist);

        const cond = condlist.find(c => c.name.startsWith('Real'));
        if (cond === undefined) return;

        const condresult = await this.getConditionResult(cond);
        console.log(condresult);

        const info = await this.kiwoom.GetLoginInfo('ACCNO');
        console.log(info);
    }

    async test2() {
        this.kiwoom.SetInputValue("계좌번호", '8093398911');
        this.kiwoom.SetInputValue("비밀번호", '0000');
        this.kiwoom.SetInputValue("비밀번호입력매체구분", '00');
        this.kiwoom.SetInputValue("조회구분", '2');
        this.kiwoom.CommRqData("a0001", "opw00001", 0, "0102");
    }

    async test3() {
        this.kiwoom.SetRealReg('0110', '005930', '10', '0');
    }
}