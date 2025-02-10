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

export type StockInfoRawType = {
    종목코드: string;
    종목명: string;
    현재가: string;
    전일대비: string;
    등락율: string;
    매도호가: string;
    매수호가: string;
    거래량: string;
    시가: string;
    고가: string;
    저가: string;
    체결시간: string;
    체결강도: string;

}

export type StockInfoType = {
    code: string;
    name: string;
    price: number;
    price_delta: number;
    price_delta_ratio: number;
    ask_price: number;
    bid_price: number;
    opening_price: number;
    highest_price: number;
    lowest_price: number;
}

export type StockHoldingInfoType = {
    code: string;
    name: string;
    positions: {
        price: number;
        count: number;
    }[];
    total_buy_count: number;
    total_sell_count: number;
    total_buy_value: number;
    total_sell_value: number;
    current_count: number;
    current_price: number;
    current_value: number;
    trading_value: number;
    trading_value_ratio: number;
}
