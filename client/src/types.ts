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
