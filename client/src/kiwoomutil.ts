import { IKiwoomEventHandler, KiwoomAPI } from './kiwoomapi';
import { StockItemType } from './types';
import { FIDList } from './types_fid';
import { RealList } from './types_real';

export type KiwoomConditionItem = { index: number; name: string };

export class KiwoomUtil {
    private kiwoom: KiwoomAPI;
    private event_handler: IKiwoomEventHandler;
    private waitingevent: {
        onReceiveConditionVer: IKiwoomEventHandler['onReceiveConditionVer'][]
        onReceiveTrCondition: IKiwoomEventHandler['onReceiveTrCondition'][]
    } = {
            onReceiveConditionVer: [],
            onReceiveTrCondition: []
        };

    stock_list: { [key: string]: StockItemType } = {};


    constructor(kiwoom: KiwoomAPI) {
        this.kiwoom = kiwoom;
        this.event_handler = {
            onReceiveConditionVer: this.on_receive_condition_ver,
            onReceiveTrCondition: this.on_receive_tr_condition,
            onReceiveTrData: this.on_receive_tr_data,
            onReceiveRealData: this.on_receive_real_data,
        };
        this.kiwoom.SetRealRemove('ALL', 'ALL');
        this.kiwoom.setEventHandler(this.event_handler);
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
    private on_receive_tr_data: IKiwoomEventHandler['onReceiveTrData']
        = async (scr_no, rq_name, tr_code, record_name, prev_next, data_length, error_code, message, splm_msg) => {
            console.log('onReceiveTrData', scr_no, rq_name, tr_code, record_name, prev_next, data_length, error_code, message, splm_msg);
            const data = await this.kiwoom.GetCommData(tr_code, rq_name, 0, "예수금");
            console.log(data);
        };
    private on_receive_real_data: IKiwoomEventHandler['onReceiveRealData']
        = async (code, real_type) => {
            const realinfo = RealList[real_type];
            if (realinfo !== undefined) {
                if (['주식시세', '주식체결'].includes(real_type)) {
                    const stockitem: StockItemType = this.stock_list[code] ?? {
                        종목코드: code,
                        종목명: '',
                        현재가: 0,
                        전일대비: 0,
                        등락율: 0,
                        매도호가: 0,
                        매수호가: 0,
                        거래량: 0,
                        시가: 0,
                        고가: 0,
                        저가: 0,
                        체결시간: '',
                        체결강도: 0,
                    };
                    if (this.stock_list[code] === undefined) this.stock_list[code] = stockitem;
                    for (const fid of realinfo.fids) {
                        const fidname = FIDList[fid];
                        if (fidname !== undefined && fidname in stockitem) {
                            const data = await this.kiwoom.GetCommRealData(code, fid);
                            stockitem[fidname as keyof StockItemType] = data as never;
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