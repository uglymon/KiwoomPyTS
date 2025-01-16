import { IKiwoomEventHandler, KiwoomAPI } from './kiwoomapi';

class TestEventHandler implements IKiwoomEventHandler {
    onEventConnect(err_code: number) {
        console.log('** onEventConnect\n    err_code :', err_code, '\n');
    }
    onReceiveMsg(scr_no: string, rq_name: string, tr_code: string, msg: string) {
        console.log('** onReceiveMsg\n    scr_no :', scr_no, '');
        console.log('    rq_name: ', rq_name, '\n    tr_code: ', tr_code);
        console.log('    msg: ', msg, '\n');
    }
    onReceiveTrData(scr_no: string, rq_name: string, tr_code: string,
        record_name: string, prev_next: string, data_length: number,
        error_code: string, message: string, splm_msg: string) {
        console.log('** onReceiveTrData\n    scr_no :', scr_no, '');
        console.log('    rq_name: ', rq_name, '\n    tr_code: ', tr_code);
        console.log('    record_name: ', record_name, '\n    prev_next: ', prev_next);
        console.log('    data_length: ', data_length, '\n    error_code: ', error_code);
        console.log('    message: ', message, '\n    splm_msg: ', splm_msg, '\n');
    }
    onReceiveRealData(code: string, real_type: string, real_data: string) {
        console.log('** onReceiveRealData\n    code: ', code, '\n    real_type: ', real_type);
        console.log('    real_data: ', real_data, '\n');
    }
    onReceiveChejanData(gubun: string, item_cnt: number, fid_list: string) {
        console.log('** onReceiveChejanData\n    gubun: ', gubun, '\n    item_cnt: ', item_cnt);
        console.log('    fid_list: ', fid_list, '\n');
    }
    onReceiveConditionVer(ret: number, msg: string) {
        console.log('** onReceiveConditionVer\n    ret: ', ret, '\n    msg: ', msg, '\n');
    }
    onReceiveRealCondition(code: string, type: string, condition_name: string,
        condition_index: string) {
        console.log('** onReceiveRealCondition\n    code: ', code, '\n    type: ', type);
        console.log('    condition_name: ', condition_name, '\n    condition_index: ', condition_index, '\n');
    }
    onReceiveTrCondition(scr_no: string, code_list: string, condition_name: string,
        index: number, next: number) {
        console.log('** onReceiveTrCondition\n    scr_no: ', scr_no, '\n    code_list: ', code_list);
        console.log('    condition_name: ', condition_name, '\n    index: ', index, '\n    next: ', next, '\n');
    }
}

export class TestTrader {
    private kiwoom: KiwoomAPI;

    constructor(kiwoom: KiwoomAPI) {
        this.kiwoom = kiwoom;
        this.kiwoom.setEventHandler(new TestEventHandler());
    }

    async test() {
        await this.kiwoom.GetConditionLoad();

        const condlist_str = await this.kiwoom.GetConditionNameList();
        console.log(condlist_str);
        const condlist: { index: string; name: string }[] = [];

        condlist_str.split(';').forEach(str => {
            const [index, name] = str.split('^');
            if (index && name) condlist.push({ index, name });
        });
        console.log(condlist);

        const cond = condlist.find(c => c.name.startsWith('Real'));
        if (cond === undefined) return;

        await this.kiwoom.SendCondition('0101', cond.name, parseInt(cond.index), 0);
    }
}