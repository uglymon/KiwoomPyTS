export type KiwoomEventType = {
    name: 'on_event_connect';
    err_code: number;
} | {
    name: 'on_receive_msg';
    scr_no: string;
    rq_name: string;
    tr_code: string;
    msg: string;
} | {
    name: 'on_receive_tr_data';
    scr_no: string;
    rq_name: string;
    tr_code: string;
    record_name: string;
    prev_next: string;
    data_length: number;
    error_code: string;
    message: string;
    splm_msg: string;
} | {
    name: 'on_receive_real_data';
    code: string;
    real_type: string;
    real_data: string;
} | {
    name: 'on_receive_chejan_data';
    gubun: string;
    item_cnt: number;
    fid_list: string;
} | {
    name: 'on_receive_condition_ver';
    ret: number;
    msg: string;
} | {
    name: 'on_receive_real_condition';
    code: string;
    type: string;
    condition_name: string;
    condition_index: string;
} | {
    name: 'on_receive_tr_condition';
    scr_no: string;
    code_list: string;
    condition_name: string;
    index: number;
    next: number;
};

export type StockItemType = {
    종목코드: string;
    종목명: string;
    현재가: number;
    전일대비: number;
    등락율: number;
    매도호가: number;
    매수호가: number;
    거래량: number;
    시가: number;
    고가: number;
    저가: number;
    체결시간: string;
    체결강도: number;
}
