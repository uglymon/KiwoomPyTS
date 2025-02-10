export interface ITRInputBase {
    tr_code: string;
}

export interface ITROutputBase {
    multiT: null | (new () => unknown);
    multi_items?: unknown[];
    next: boolean;
}
export class TRBase<InputT extends ITRInputBase, OutputT extends ITROutputBase> {
    input: InputT;
    output: OutputT;
    outputT: new () => OutputT;

    constructor(input: InputT, outputT: new () => OutputT) {
        this.input = input;
        this.outputT = outputT;
        this.output = new outputT();
    }
}

// DO NOT EDIT BELOW THIS LINE
// generated code starts here

export class TR_OPT10001Input implements ITRInputBase {
    tr_code: string = 'OPT10001';
    '종목코드': string = '';
};
export class TR_OPT10001Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '종목코드': string = '';
    '종목명': string = '';
    '결산월': string = '';
    '액면가': string = '';
    '자본금': string = '';
    '상장주식': string = '';
    '신용비율': string = '';
    '연중최고': string = '';
    '연중최저': string = '';
    '시가총액': string = '';
    '시가총액비중': string = '';
    '외인소진률': string = '';
    '대용가': string = '';
    'PER': string = '';
    'EPS': string = '';
    'ROE': string = '';
    'PBR': string = '';
    'EV': string = '';
    'BPS': string = '';
    '매출액': string = '';
    '영업이익': string = '';
    '당기순이익': string = '';
    '250최고': string = '';
    '250최저': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '상한가': string = '';
    '하한가': string = '';
    '기준가': string = '';
    '예상체결가': string = '';
    '예상체결수량': string = '';
    '250최고가일': string = '';
    '250최고가대비율': string = '';
    '250최저가일': string = '';
    '250최저가대비율': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '거래대비': string = '';
    '액면가단위': string = '';
    '유통주식': string = '';
    '유통비율': string = '';
};
/**
 * 주식기본정보요청
 */
export class TR_OPT10001 extends TRBase<TR_OPT10001Input, TR_OPT10001Output> {
    constructor(input: TR_OPT10001Input) {
        super(input, TR_OPT10001Output);
        this.input.tr_code = 'OPT10001';
    }
};

export class TR_OPT10002Input implements ITRInputBase {
    tr_code: string = 'OPT10002';
    '종목코드': string = '';
};
export class TR_OPT10002MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '등락부호': string = '';
    '기준가': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '매도거래원명1': string = '';
    '매도거래원1': string = '';
    '매도거래량1': string = '';
    '매수거래원명1': string = '';
    '매수거래원1': string = '';
    '매수거래량1': string = '';
    '매도거래원명2': string = '';
    '매도거래원2': string = '';
    '매도거래량2': string = '';
    '매수거래원명2': string = '';
    '매수거래원2': string = '';
    '매수거래량2': string = '';
    '매도거래원명3': string = '';
    '매도거래원3': string = '';
    '매도거래량3': string = '';
    '매수거래원명3': string = '';
    '매수거래원3': string = '';
    '매수거래량3': string = '';
    '매도거래원명4': string = '';
    '매도거래원4': string = '';
    '매도거래량4': string = '';
    '매수거래원명4': string = '';
    '매수거래원4': string = '';
    '매수거래량4': string = '';
    '매도거래원명5': string = '';
    '매도거래원5': string = '';
    '매도거래량5': string = '';
    '매수거래원명5': string = '';
    '매수거래원5': string = '';
    '매수거래량5': string = '';
};
export class TR_OPT10002Output implements ITROutputBase {
    multiT: new () => TR_OPT10002MultiItem;
    multi_items: TR_OPT10002MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10002MultiItem; }
    next: boolean = false;
};
/**
 * 주식거래원요청
 */
export class TR_OPT10002 extends TRBase<TR_OPT10002Input, TR_OPT10002Output> {
    constructor(input: TR_OPT10002Input) {
        super(input, TR_OPT10002Output);
        this.input.tr_code = 'OPT10002';
    }
};

export class TR_OPT10003Input implements ITRInputBase {
    tr_code: string = 'OPT10003';
    '종목코드': string = '';
};
export class TR_OPT10003MultiItem {
    '시간': string = '';
    '현재가': string = '';
    '전일대비': string = '';
    '대비율': string = '';
    '우선매도호가단위': string = '';
    '우선매수호가단위': string = '';
    '체결거래량': string = '';
    'sign': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '체결강도': string = '';
};
export class TR_OPT10003Output implements ITROutputBase {
    multiT: new () => TR_OPT10003MultiItem;
    multi_items: TR_OPT10003MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10003MultiItem; }
    next: boolean = false;
};
/**
 * 체결정보요청
 */
export class TR_OPT10003 extends TRBase<TR_OPT10003Input, TR_OPT10003Output> {
    constructor(input: TR_OPT10003Input) {
        super(input, TR_OPT10003Output);
        this.input.tr_code = 'OPT10003';
    }
};

export class TR_OPT10004Input implements ITRInputBase {
    tr_code: string = 'OPT10004';
    '종목코드': string = '';
};
export class TR_OPT10004MultiItem {
    '호가잔량기준시간': string = '';
    '매도10차선잔량대비': string = '';
    '매도10차선잔량': string = '';
    '매도10차선호가': string = '';
    '매도9차선잔량대비': string = '';
    '매도9차선잔량': string = '';
    '매도9차선호가': string = '';
    '매도8차선잔량대비': string = '';
    '매도8차선잔량': string = '';
    '매도8차선호가': string = '';
    '매도7차선잔량대비': string = '';
    '매도7차선잔량': string = '';
    '매도7차선호가': string = '';
    '매도6차선잔량대비': string = '';
    '매도6우선잔량': string = '';
    '매도6차선호가': string = '';
    '매도5차선잔량대비': string = '';
    '매도5차선잔량': string = '';
    '매도5차선호가': string = '';
    '매도4차선잔량대비': string = '';
    '매도4차선잔량': string = '';
    '매도4차선호가': string = '';
    '매도3차선잔량대비': string = '';
    '매도3차선잔량': string = '';
    '매도3차선호가': string = '';
    '매도2차선잔량대비': string = '';
    '매도2차선잔량': string = '';
    '매도2차선호가': string = '';
    '매도1차선잔량대비': string = '';
    '매도최우선잔량': string = '';
    '매도최우선호가': string = '';
    '매수최우선호가': string = '';
    '매수최우선잔량': string = '';
    '매수1차선잔량대비': string = '';
    '매수2차선호가': string = '';
    '매수2차선잔량': string = '';
    '매수2차선잔량대비': string = '';
    '매수3차선호가': string = '';
    '매수3차선잔량': string = '';
    '매수3차선잔량대비': string = '';
    '매수4차선호가': string = '';
    '매수4차선잔량': string = '';
    '매수4차선잔량대비': string = '';
    '매수5차선호가': string = '';
    '매수5차선잔량': string = '';
    '매수5차선잔량대비': string = '';
    '매수6우선호가': string = '';
    '매수6우선잔량': string = '';
    '매수6차선잔량대비': string = '';
    '매수7차선호가': string = '';
    '매수7차선잔량': string = '';
    '매수7차선잔량대비': string = '';
    '매수8차선호가': string = '';
    '매수8차선잔량': string = '';
    '매수8차선잔량대비': string = '';
    '매수9차선호가': string = '';
    '매수9차선잔량': string = '';
    '매수9차선잔량대비': string = '';
    '매수10차선호가': string = '';
    '매수10차선잔량': string = '';
    '매수10차선잔량대비': string = '';
    '총매도잔량직전대비': string = '';
    '총매도잔량': string = '';
    '총매수잔량': string = '';
    '총매수잔량직전대비': string = '';
    '시간외매도잔량대비': string = '';
    '시간외매도잔량': string = '';
    '시간외매수잔량': string = '';
    '시간외매수잔량대비': string = '';
};
export class TR_OPT10004Output implements ITROutputBase {
    multiT: new () => TR_OPT10004MultiItem;
    multi_items: TR_OPT10004MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10004MultiItem; }
    next: boolean = false;
};
/**
 * 주식호가요청
 */
export class TR_OPT10004 extends TRBase<TR_OPT10004Input, TR_OPT10004Output> {
    constructor(input: TR_OPT10004Input) {
        super(input, TR_OPT10004Output);
        this.input.tr_code = 'OPT10004';
    }
};

export class TR_OPT10005Input implements ITRInputBase {
    tr_code: string = 'OPT10005';
    '종목코드': string = '';
};
export class TR_OPT10005MultiItem {
    '날짜': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '종가': string = '';
    '대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '외인보유': string = '';
    '외인비중': string = '';
    '외인순매수': string = '';
    '기관순매수': string = '';
    '개인순매수': string = '';
    '외국계': string = '';
    '신용잔고율': string = '';
    '프로그램': string = '';
};
export class TR_OPT10005Output implements ITROutputBase {
    multiT: new () => TR_OPT10005MultiItem;
    multi_items: TR_OPT10005MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10005MultiItem; }
    next: boolean = false;
};
/**
 * 주식일주월시분요청
 */
export class TR_OPT10005 extends TRBase<TR_OPT10005Input, TR_OPT10005Output> {
    constructor(input: TR_OPT10005Input) {
        super(input, TR_OPT10005Output);
        this.input.tr_code = 'OPT10005';
    }
};

export class TR_OPT10006Input implements ITRInputBase {
    tr_code: string = 'OPT10006';
    '종목코드': string = '';
};
export class TR_OPT10006MultiItem {
    '날짜': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '종가': string = '';
    '대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '체결강도': string = '';
};
export class TR_OPT10006Output implements ITROutputBase {
    multiT: new () => TR_OPT10006MultiItem;
    multi_items: TR_OPT10006MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10006MultiItem; }
    next: boolean = false;
};
/**
 * 주식시분요청
 */
export class TR_OPT10006 extends TRBase<TR_OPT10006Input, TR_OPT10006Output> {
    constructor(input: TR_OPT10006Input) {
        super(input, TR_OPT10006Output);
        this.input.tr_code = 'OPT10006';
    }
};

export class TR_OPT10007Input implements ITRInputBase {
    tr_code: string = 'OPT10007';
    '종목코드': string = '';
};
export class TR_OPT10007MultiItem {
    '종목명': string = '';
    '종목코드': string = '';
    '날짜': string = '';
    '시간': string = '';
    '전일종가': string = '';
    '전일거래량': string = '';
    '상한가': string = '';
    '하한가': string = '';
    '전일거래대금': string = '';
    '상장주식수': string = '';
    '현재가': string = '';
    '부호': string = '';
    '등락률': string = '';
    '전일비': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '체결량': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '예상체결가': string = '';
    '예상체결량': string = '';
    '예상매도우선호가': string = '';
    '예상매수우선호가': string = '';
    '거래시작일': string = '';
    '행사가격': string = '';
    '최고가': string = '';
    '최저가': string = '';
    '최고가일': string = '';
    '최저가일': string = '';
    '매도1호가': string = '';
    '매도2호가': string = '';
    '매도3호가': string = '';
    '매도4호가': string = '';
    '매도5호가': string = '';
    '매도6호가': string = '';
    '매도7호가': string = '';
    '매도8호가': string = '';
    '매도9호가': string = '';
    '매도10호가': string = '';
    '매수1호가': string = '';
    '매수2호가': string = '';
    '매수3호가': string = '';
    '매수4호가': string = '';
    '매수5호가': string = '';
    '매수6호가': string = '';
    '매수7호가': string = '';
    '매수8호가': string = '';
    '매수9호가': string = '';
    '매수10호가': string = '';
    '매도1호가잔량': string = '';
    '매도2호가잔량': string = '';
    '매도3호가잔량': string = '';
    '매도4호가잔량': string = '';
    '매도5호가잔량': string = '';
    '매도6호가잔량': string = '';
    '매도7호가잔량': string = '';
    '매도8호가잔량': string = '';
    '매도9호가잔량': string = '';
    '매도10호가잔량': string = '';
    '매수1호가잔량': string = '';
    '매수2호가잔량': string = '';
    '매수3호가잔량': string = '';
    '매수4호가잔량': string = '';
    '매수5호가잔량': string = '';
    '매수6호가잔량': string = '';
    '매수7호가잔량': string = '';
    '매수8호가잔량': string = '';
    '매수9호가잔량': string = '';
    '매수10호가잔량': string = '';
    '매도1호가직전대비': string = '';
    '매도2호가직전대비': string = '';
    '매도3호가직전대비': string = '';
    '매도4호가직전대비': string = '';
    '매도5호가직전대비': string = '';
    '매도6호가직전대비': string = '';
    '매도7호가직전대비': string = '';
    '매도8호가직전대비': string = '';
    '매도9호가직전대비': string = '';
    '매도10호가직전대비': string = '';
    '매수1호가직전대비': string = '';
    '매수2호가직전대비': string = '';
    '매수3호가직전대비': string = '';
    '매수4호가직전대비': string = '';
    '매수5호가직전대비': string = '';
    '매수6호가직전대비': string = '';
    '매수7호가직전대비': string = '';
    '매수8호가직전대비': string = '';
    '매수9호가직전대비': string = '';
    '매수10호가직전대비': string = '';
    '매도1호가건수': string = '';
    '매도2호가건수': string = '';
    '매도3호가건수': string = '';
    '매도4호가건수': string = '';
    '매도5호가건수': string = '';
    '매수1호가건수': string = '';
    '매수2호가건수': string = '';
    '매수3호가건수': string = '';
    '매수4호가건수': string = '';
    '매수5호가건수': string = '';
    'LP매도1호가잔량': string = '';
    'LP매도2호가잔량': string = '';
    'LP매도3호가잔량': string = '';
    'LP매도4호가잔량': string = '';
    'LP매도5호가잔량': string = '';
    'LP매도6호가잔량': string = '';
    'LP매도7호가잔량': string = '';
    'LP매도8호가잔량': string = '';
    'LP매도9호가잔량': string = '';
    'LP매도10호가잔량': string = '';
    'LP매수1호가잔량': string = '';
    'LP매수2호가잔량': string = '';
    'LP매수3호가잔량': string = '';
    'LP매수4호가잔량': string = '';
    'LP매수5호가잔량': string = '';
    'LP매수6호가잔량': string = '';
    'LP매수7호가잔량': string = '';
    'LP매수8호가잔량': string = '';
    'LP매수9호가잔량': string = '';
    'LP매수10호가잔량': string = '';
    '총매수잔량': string = '';
    '총매도잔량': string = '';
    '총매수건수': string = '';
    '총매도건수': string = '';
};
export class TR_OPT10007Output implements ITROutputBase {
    multiT: new () => TR_OPT10007MultiItem;
    multi_items: TR_OPT10007MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10007MultiItem; }
    next: boolean = false;
};
/**
 * 시세표성정보요청
 */
export class TR_OPT10007 extends TRBase<TR_OPT10007Input, TR_OPT10007Output> {
    constructor(input: TR_OPT10007Input) {
        super(input, TR_OPT10007Output);
        this.input.tr_code = 'OPT10007';
    }
};

export class TR_OPT10008Input implements ITRInputBase {
    tr_code: string = 'OPT10008';
    '종목코드': string = '';
};
export class TR_OPT10008MultiItem {
    '일자': string = '';
    '종가': string = '';
    '전일대비': string = '';
    '거래량': string = '';
    '변동수량': string = '';
    '보유주식수': string = '';
    '비중': string = '';
    '취득가능주식수': string = '';
    '외국인한도': string = '';
    '외국인한도증감': string = '';
    '한도소진률': string = '';
};
export class TR_OPT10008Output implements ITROutputBase {
    multiT: new () => TR_OPT10008MultiItem;
    multi_items: TR_OPT10008MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10008MultiItem; }
    next: boolean = false;
};
/**
 * 주식외국인요청
 */
export class TR_OPT10008 extends TRBase<TR_OPT10008Input, TR_OPT10008Output> {
    constructor(input: TR_OPT10008Input) {
        super(input, TR_OPT10008Output);
        this.input.tr_code = 'OPT10008';
    }
};

export class TR_OPT10009Input implements ITRInputBase {
    tr_code: string = 'OPT10009';
    '종목코드': string = '';
};
export class TR_OPT10009MultiItem {
    '날짜': string = '';
    '종가': string = '';
    '대비': string = '';
    '기관기간누적': string = '';
    '기관일변순매매': string = '';
    '외국인일변순매매': string = '';
    '외국인지분율': string = '';
};
export class TR_OPT10009Output implements ITROutputBase {
    multiT: new () => TR_OPT10009MultiItem;
    multi_items: TR_OPT10009MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10009MultiItem; }
    next: boolean = false;
};
/**
 * 주식기관요청
 */
export class TR_OPT10009 extends TRBase<TR_OPT10009Input, TR_OPT10009Output> {
    constructor(input: TR_OPT10009Input) {
        super(input, TR_OPT10009Output);
        this.input.tr_code = 'OPT10009';
    }
};

export class TR_OPT10010Input implements ITRInputBase {
    tr_code: string = 'OPT10010';
    '종목코드': string = '';
};
export class TR_OPT10010MultiItem {
    '차익위탁매도수량': string = '';
    '차익위탁매도금액': string = '';
    '차익위탁매수수량': string = '';
    '차익위탁매수금액': string = '';
    '차익위탁순매수수량': string = '';
    '차익위탁순매수금액': string = '';
    '비차익위탁매도수량': string = '';
    '비차익위탁매도금액': string = '';
    '비차익위탁매수수량': string = '';
    '비차익위탁매수금액': string = '';
    '비차익위탁순매수수량': string = '';
    '비차익위탁순매수금액': string = '';
    '전체차익위탁매도수량': string = '';
    '전체차익위탁매도금액': string = '';
    '전체차익위탁매수수량': string = '';
    '전체차익위탁매수금액': string = '';
    '전체차익위탁순매수수량': string = '';
    '전체차익위탁순매수금액': string = '';
};
export class TR_OPT10010Output implements ITROutputBase {
    multiT: new () => TR_OPT10010MultiItem;
    multi_items: TR_OPT10010MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10010MultiItem; }
    next: boolean = false;
};
/**
 * 업종프로그램요청
 */
export class TR_OPT10010 extends TRBase<TR_OPT10010Input, TR_OPT10010Output> {
    constructor(input: TR_OPT10010Input) {
        super(input, TR_OPT10010Output);
        this.input.tr_code = 'OPT10010';
    }
};

export class TR_OPT10011Input implements ITRInputBase {
    tr_code: string = 'OPT10011';
    '신주인수권구분': string = '';
};
export class TR_OPT10011MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '최우선매도호가': string = '';
    '최우선매수호가': string = '';
    '누적거래량': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
};
export class TR_OPT10011Output implements ITROutputBase {
    multiT: new () => TR_OPT10011MultiItem;
    multi_items: TR_OPT10011MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10011MultiItem; }
    next: boolean = false;
};
/**
 * 신주인수권전체시세요청
 */
export class TR_OPT10011 extends TRBase<TR_OPT10011Input, TR_OPT10011Output> {
    constructor(input: TR_OPT10011Input) {
        super(input, TR_OPT10011Output);
        this.input.tr_code = 'OPT10011';
    }
};

export class TR_OPT10012Input implements ITRInputBase {
    tr_code: string = 'OPT10012';
    '계좌번호': string = '';
};
export class TR_OPT10012MultiItem {
    '주문수량': string = '';
    '주문가격': string = '';
    '미체결수량': string = '';
    '체결누계금액': string = '';
    '원주문번호': string = '';
    '주문구분': string = '';
    '매매구분': string = '';
    '매도수구분': string = '';
    '주문/체결시간': string = '';
    '체결가': string = '';
    '체결량': string = '';
    '주문상태': string = '';
    '단위체결가': string = '';
    '대출일': string = '';
    '신용구분': string = '';
    '만기일': string = '';
    '보유수량': string = '';
    '매입단가': string = '';
    '총매입가': string = '';
    '주문가능수량': string = '';
    '당일매도수량': string = '';
    '당일매도금액': string = '';
    '당일매수수량': string = '';
    '당일매수금액': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '당일hts매도수수료': string = '';
    '당일hts매수수수료': string = '';
    '당일매도손익': string = '';
    '당일순매수량': string = '';
    '매도/매수구분': string = '';
    '당일총매도손일': string = '';
    '예수금': string = '';
    '사용가능현금': string = '';
    '사용가능대용': string = '';
    '전일재사용': string = '';
    '당일재사용': string = '';
    '담보현금': string = '';
    '신용금액': string = '';
    '신용이자': string = '';
    '담보대출수량': string = '';
    '현물주문체결이상유무': string = '';
    '현물잔고이상유무': string = '';
    '현물예수금이상유무': string = '';
    '선물주문체결이상유무': string = '';
    '선물잔고이상유무': string = '';
    'D+1추정예수금': string = '';
    'D+2추정예수금': string = '';
    'D+1매수/매도정산금': string = '';
    'D+2매수/매도정산금': string = '';
    'D+1연체변제소요금': string = '';
    'D+2연체변제소요금': string = '';
    'D+1추정인출가능금': string = '';
    'D+2추정인출가능금': string = '';
    '현금증거금': string = '';
    '대용잔고': string = '';
    '대용증거금': string = '';
    '수표금액': string = '';
    '현금미수금': string = '';
    '신용설정보증금': string = '';
    '인출가능금액': string = '';
};
export class TR_OPT10012Output implements ITROutputBase {
    multiT: new () => TR_OPT10012MultiItem;
    multi_items: TR_OPT10012MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10012MultiItem; }
    next: boolean = false;
};
/**
 * 주문체결요청
 */
export class TR_OPT10012 extends TRBase<TR_OPT10012Input, TR_OPT10012Output> {
    constructor(input: TR_OPT10012Input) {
        super(input, TR_OPT10012Output);
        this.input.tr_code = 'OPT10012';
    }
};

export class TR_OPT10013Input implements ITRInputBase {
    tr_code: string = 'OPT10013';
    '종목코드': string = '';
    '일자': string = '';
    '조회구분': string = '';
};
export class TR_OPT10013MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
    '신규': string = '';
    '상환': string = '';
    '잔고': string = '';
    '금액': string = '';
    '대비': string = '';
    '공여율': string = '';
    '잔고율': string = '';
};
export class TR_OPT10013Output implements ITROutputBase {
    multiT: new () => TR_OPT10013MultiItem;
    multi_items: TR_OPT10013MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10013MultiItem; }
    next: boolean = false;
};
/**
 * 신용매매동향요청
 */
export class TR_OPT10013 extends TRBase<TR_OPT10013Input, TR_OPT10013Output> {
    constructor(input: TR_OPT10013Input) {
        super(input, TR_OPT10013Output);
        this.input.tr_code = 'OPT10013';
    }
};

export class TR_OPT10014Input implements ITRInputBase {
    tr_code: string = 'OPT10014';
    '종목코드': string = '';
    '시간구분': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
};
export class TR_OPT10014MultiItem {
    '일자': string = '';
    '종가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '공매도량': string = '';
    '매매비중': string = '';
    '공매도거래대금': string = '';
    '공매도평균가': string = '';
};
export class TR_OPT10014Output implements ITROutputBase {
    multiT: new () => TR_OPT10014MultiItem;
    multi_items: TR_OPT10014MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10014MultiItem; }
    next: boolean = false;
};
/**
 * 공매도추이요청
 */
export class TR_OPT10014 extends TRBase<TR_OPT10014Input, TR_OPT10014Output> {
    constructor(input: TR_OPT10014Input) {
        super(input, TR_OPT10014Output);
        this.input.tr_code = 'OPT10014';
    }
};

export class TR_OPT10015Input implements ITRInputBase {
    tr_code: string = 'OPT10015';
    '종목코드': string = '';
    '시작일자': string = '';
};
export class TR_OPT10015MultiItem {
    '일자': string = '';
    '종가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '장전거래량': string = '';
    '장전거래비중': string = '';
    '장중거래량': string = '';
    '장중거래비중': string = '';
    '장후거래량': string = '';
    '장후거래비중': string = '';
    '합계3': string = '';
    '기간중거래량': string = '';
    '외인보유': string = '';
    '외인비중': string = '';
    '외인순매수': string = '';
    '기관순매수': string = '';
    '개인순매수': string = '';
    '외국계': string = '';
    '신용잔고율': string = '';
    '프로그램': string = '';
    '장전거래대금': string = '';
    '장전거래대금비중': string = '';
    '장중거래대금': string = '';
    '장중거래대금비중': string = '';
    '장후거래대금': string = '';
    '장후거래대금비중': string = '';
};
export class TR_OPT10015Output implements ITROutputBase {
    multiT: new () => TR_OPT10015MultiItem;
    multi_items: TR_OPT10015MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10015MultiItem; }
    next: boolean = false;
};
/**
 * 일별거래상세요청
 */
export class TR_OPT10015 extends TRBase<TR_OPT10015Input, TR_OPT10015Output> {
    constructor(input: TR_OPT10015Input) {
        super(input, TR_OPT10015Output);
        this.input.tr_code = 'OPT10015';
    }
};

export class TR_OPT10016Input implements ITRInputBase {
    tr_code: string = 'OPT10016';
    '시장구분': string = '';
    '신고저구분': string = '';
    '고저종구분': string = '';
    '종목조건': string = '';
    '거래량구분': string = '';
    '신용조건': string = '';
    '상하한포함': string = '';
    '기간': string = '';
};
export class TR_OPT10016MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '전일거래량대비율': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '고가': string = '';
    '저가': string = '';
};
export class TR_OPT10016Output implements ITROutputBase {
    multiT: new () => TR_OPT10016MultiItem;
    multi_items: TR_OPT10016MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10016MultiItem; }
    next: boolean = false;
};
/**
 * 신고저가요청
 */
export class TR_OPT10016 extends TRBase<TR_OPT10016Input, TR_OPT10016Output> {
    constructor(input: TR_OPT10016Input) {
        super(input, TR_OPT10016Output);
        this.input.tr_code = 'OPT10016';
    }
};

export class TR_OPT10017Input implements ITRInputBase {
    tr_code: string = 'OPT10017';
    '시장구분': string = '';
    '상하한구분': string = '';
    '정렬구분': string = '';
    '종목조건': string = '';
    '거래량구분': string = '';
    '신용조건': string = '';
    '매매금구분': string = '';
};
export class TR_OPT10017MultiItem {
    '종목코드': string = '';
    '종목정보': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '전일거래량': string = '';
    '매도잔량': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '매수잔량': string = '';
    '횟수': string = '';
};
export class TR_OPT10017Output implements ITROutputBase {
    multiT: new () => TR_OPT10017MultiItem;
    multi_items: TR_OPT10017MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10017MultiItem; }
    next: boolean = false;
};
/**
 * 상하한가요청
 */
export class TR_OPT10017 extends TRBase<TR_OPT10017Input, TR_OPT10017Output> {
    constructor(input: TR_OPT10017Input) {
        super(input, TR_OPT10017Output);
        this.input.tr_code = 'OPT10017';
    }
};

export class TR_OPT10018Input implements ITRInputBase {
    tr_code: string = 'OPT10018';
    '고저구분': string = '';
    '근접율': string = '';
    '시장구분': string = '';
    '거래량구분': string = '';
    '종목조건': string = '';
    '신용조건': string = '';
};
export class TR_OPT10018MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '당일고가': string = '';
    '당일저가': string = '';
};
export class TR_OPT10018Output implements ITROutputBase {
    multiT: new () => TR_OPT10018MultiItem;
    multi_items: TR_OPT10018MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10018MultiItem; }
    next: boolean = false;
};
/**
 * 고저가근접요청
 */
export class TR_OPT10018 extends TRBase<TR_OPT10018Input, TR_OPT10018Output> {
    constructor(input: TR_OPT10018Input) {
        super(input, TR_OPT10018Output);
        this.input.tr_code = 'OPT10018';
    }
};

export class TR_OPT10019Input implements ITRInputBase {
    tr_code: string = 'OPT10019';
    '시장구분': string = '';
    '등락구분': string = '';
    '시간구분': string = '';
    '시간': string = '';
    '거래량구분': string = '';
    '종목조건': string = '';
    '신용조건': string = '';
    '가격조건': string = '';
    '상하한포함': string = '';
};
export class TR_OPT10019MultiItem {
    '종목코드': string = '';
    '종목분류': string = '';
    '종목명': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '기준가': string = '';
    '현재가': string = '';
    '기준대비': string = '';
    '거래량': string = '';
    '급등률': string = '';
};
export class TR_OPT10019Output implements ITROutputBase {
    multiT: new () => TR_OPT10019MultiItem;
    multi_items: TR_OPT10019MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10019MultiItem; }
    next: boolean = false;
};
/**
 * 가격급등락요청
 */
export class TR_OPT10019 extends TRBase<TR_OPT10019Input, TR_OPT10019Output> {
    constructor(input: TR_OPT10019Input) {
        super(input, TR_OPT10019Output);
        this.input.tr_code = 'OPT10019';
    }
};

export class TR_OPT10020Input implements ITRInputBase {
    tr_code: string = 'OPT10020';
    '시장구분': string = '';
    '정렬구분': string = '';
    '거래량구분': string = '';
    '종목조건': string = '';
    '신용조건': string = '';
};
export class TR_OPT10020MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
    '총매도잔량': string = '';
    '총매수잔량': string = '';
    '순매수잔량': string = '';
    '매수비율': string = '';
};
export class TR_OPT10020Output implements ITROutputBase {
    multiT: new () => TR_OPT10020MultiItem;
    multi_items: TR_OPT10020MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10020MultiItem; }
    next: boolean = false;
};
/**
 * 호가잔량상위요청
 */
export class TR_OPT10020 extends TRBase<TR_OPT10020Input, TR_OPT10020Output> {
    constructor(input: TR_OPT10020Input) {
        super(input, TR_OPT10020Output);
        this.input.tr_code = 'OPT10020';
    }
};

export class TR_OPT10021Input implements ITRInputBase {
    tr_code: string = 'OPT10021';
    '시장구분': string = '';
    '매매구분': string = '';
    '정렬구분': string = '';
    '시간구분': string = '';
    '거래량구분': string = '';
    '종목조건': string = '';
};
export class TR_OPT10021MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '기준률': string = '';
    '현재': string = '';
    '급증수량': string = '';
    '급증률': string = '';
    '총매수량': string = '';
};
export class TR_OPT10021Output implements ITROutputBase {
    multiT: new () => TR_OPT10021MultiItem;
    multi_items: TR_OPT10021MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10021MultiItem; }
    next: boolean = false;
};
/**
 * 호가잔량급증요청
 */
export class TR_OPT10021 extends TRBase<TR_OPT10021Input, TR_OPT10021Output> {
    constructor(input: TR_OPT10021Input) {
        super(input, TR_OPT10021Output);
        this.input.tr_code = 'OPT10021';
    }
};

export class TR_OPT10022Input implements ITRInputBase {
    tr_code: string = 'OPT10022';
    '시장구분': string = '';
    '비율구분': string = '';
    '시간구분': string = '';
    '거래량구분': string = '';
    '종목조건': string = '';
};
export class TR_OPT10022MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '기준률': string = '';
    '현재비율': string = '';
    '급증률': string = '';
    '총매도잔량': string = '';
    '총매수잔량': string = '';
};
export class TR_OPT10022Output implements ITROutputBase {
    multiT: new () => TR_OPT10022MultiItem;
    multi_items: TR_OPT10022MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10022MultiItem; }
    next: boolean = false;
};
/**
 * 잔량율급증요청
 */
export class TR_OPT10022 extends TRBase<TR_OPT10022Input, TR_OPT10022Output> {
    constructor(input: TR_OPT10022Input) {
        super(input, TR_OPT10022Output);
        this.input.tr_code = 'OPT10022';
    }
};

export class TR_OPT10023Input implements ITRInputBase {
    tr_code: string = 'OPT10023';
    '시장구분': string = '';
    '정렬구분': string = '';
    '시간구분': string = '';
    '거래량구분': string = '';
    '시간': string = '';
    '종목조건': string = '';
    '가격구분': string = '';
};
export class TR_OPT10023MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '이전거래량': string = '';
    '현재거래량': string = '';
    '급증량': string = '';
    '급증률': string = '';
};
export class TR_OPT10023Output implements ITROutputBase {
    multiT: new () => TR_OPT10023MultiItem;
    multi_items: TR_OPT10023MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10023MultiItem; }
    next: boolean = false;
};
/**
 * 거래량급증요청
 */
export class TR_OPT10023 extends TRBase<TR_OPT10023Input, TR_OPT10023Output> {
    constructor(input: TR_OPT10023Input) {
        super(input, TR_OPT10023Output);
        this.input.tr_code = 'OPT10023';
    }
};

export class TR_OPT10024Input implements ITRInputBase {
    tr_code: string = 'OPT10024';
    '시장구분': string = '';
    '주기구분': string = '';
    '거래량구분': string = '';
};
export class TR_OPT10024MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '이전거래량': string = '';
    '현재거래량': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
};
export class TR_OPT10024Output implements ITROutputBase {
    multiT: new () => TR_OPT10024MultiItem;
    multi_items: TR_OPT10024MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10024MultiItem; }
    next: boolean = false;
};
/**
 * 거래량갱신요청
 */
export class TR_OPT10024 extends TRBase<TR_OPT10024Input, TR_OPT10024Output> {
    constructor(input: TR_OPT10024Input) {
        super(input, TR_OPT10024Output);
        this.input.tr_code = 'OPT10024';
    }
};

export class TR_OPT10025Input implements ITRInputBase {
    tr_code: string = 'OPT10025';
    '시장구분': string = '';
    '매물집중비율': string = '';
    '현재가진입': string = '';
    '매물대수': string = '';
    '주기구분': string = '';
};
export class TR_OPT10025MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '현재거래량': string = '';
    '가격대시작': string = '';
    '가격대끝': string = '';
    '매물량': string = '';
    '매물비': string = '';
};
export class TR_OPT10025Output implements ITROutputBase {
    multiT: new () => TR_OPT10025MultiItem;
    multi_items: TR_OPT10025MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10025MultiItem; }
    next: boolean = false;
};
/**
 * 매물대집중요청
 */
export class TR_OPT10025 extends TRBase<TR_OPT10025Input, TR_OPT10025Output> {
    constructor(input: TR_OPT10025Input) {
        super(input, TR_OPT10025Output);
        this.input.tr_code = 'OPT10025';
    }
};

export class TR_OPT10026Input implements ITRInputBase {
    tr_code: string = 'OPT10026';
    '시장구분': string = '';
    'PER구분': string = '';
};
export class TR_OPT10026MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    'PER': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '현재거래량': string = '';
    '매도호가': string = '';
};
export class TR_OPT10026Output implements ITROutputBase {
    multiT: new () => TR_OPT10026MultiItem;
    multi_items: TR_OPT10026MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10026MultiItem; }
    next: boolean = false;
};
/**
 * 고저PER요청
 */
export class TR_OPT10026 extends TRBase<TR_OPT10026Input, TR_OPT10026Output> {
    constructor(input: TR_OPT10026Input) {
        super(input, TR_OPT10026Output);
        this.input.tr_code = 'OPT10026';
    }
};

export class TR_OPT10027Input implements ITRInputBase {
    tr_code: string = 'OPT10027';
    '시장구분': string = '';
    '정렬구분': string = '';
    '거래량조건': string = '';
    '종목조건': string = '';
    '신용조건': string = '';
    '상하한포함': string = '';
    '가격조건': string = '';
    '거래대금조건': string = '';
};
export class TR_OPT10027MultiItem {
    '종목분류': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '매도잔량': string = '';
    '매수잔량': string = '';
    '현재거래량': string = '';
    '체결강도': string = '';
    '횟수': string = '';
};
export class TR_OPT10027Output implements ITROutputBase {
    multiT: new () => TR_OPT10027MultiItem;
    multi_items: TR_OPT10027MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10027MultiItem; }
    next: boolean = false;
};
/**
 * 전일대비등락률상위요청
 */
export class TR_OPT10027 extends TRBase<TR_OPT10027Input, TR_OPT10027Output> {
    constructor(input: TR_OPT10027Input) {
        super(input, TR_OPT10027Output);
        this.input.tr_code = 'OPT10027';
    }
};

export class TR_OPT10028Input implements ITRInputBase {
    tr_code: string = 'OPT10028';
    '정렬구분': string = '';
    '거래량조건': string = '';
    '시장구분': string = '';
    '상하한포함': string = '';
    '종목조건': string = '';
    '신용조건': string = '';
    '거래대금조건': string = '';
    '등락조건': string = '';
};
export class TR_OPT10028MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '시가대비': string = '';
    '현재거래량': string = '';
    '체결강도': string = '';
};
export class TR_OPT10028Output implements ITROutputBase {
    multiT: new () => TR_OPT10028MultiItem;
    multi_items: TR_OPT10028MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10028MultiItem; }
    next: boolean = false;
};
/**
 * 시가대비등락률요청
 */
export class TR_OPT10028 extends TRBase<TR_OPT10028Input, TR_OPT10028Output> {
    constructor(input: TR_OPT10028Input) {
        super(input, TR_OPT10028Output);
        this.input.tr_code = 'OPT10028';
    }
};

export class TR_OPT10029Input implements ITRInputBase {
    tr_code: string = 'OPT10029';
    '시장구분': string = '';
    '정렬구분': string = '';
    '거래량조건': string = '';
    '종목조건': string = '';
    '신용조건': string = '';
    '가격조건': string = '';
};
export class TR_OPT10029MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '예상체결가': string = '';
    '기준가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '예상체결량': string = '';
    '매도잔량': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '매수잔량': string = '';
};
export class TR_OPT10029Output implements ITROutputBase {
    multiT: new () => TR_OPT10029MultiItem;
    multi_items: TR_OPT10029MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10029MultiItem; }
    next: boolean = false;
};
/**
 * 예상체결등락률상위요청
 */
export class TR_OPT10029 extends TRBase<TR_OPT10029Input, TR_OPT10029Output> {
    constructor(input: TR_OPT10029Input) {
        super(input, TR_OPT10029Output);
        this.input.tr_code = 'OPT10029';
    }
};

export class TR_OPT10030Input implements ITRInputBase {
    tr_code: string = 'OPT10030';
    '시장구분': string = '';
    '정렬구분': string = '';
    '관리종목포함': string = '';
    '신용구분': string = '';
    '거래량구분': string = '';
    '가격구분': string = '';
    '거래대금구분': string = '';
    '장운영구분': string = '';
};
export class TR_OPT10030MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '전일비': string = '';
    '거래회전율': string = '';
    '거래금액': string = '';
    '거래량(장중)': string = '';
    '전일비(장중)': string = '';
    '거래회전율(장중)': string = '';
    '거래금액(장중)': string = '';
    '거래량(장후)': string = '';
    '전일비(장후)': string = '';
    '거래회전율(장후)': string = '';
    '거래금액(장후)': string = '';
    '거래량(장전)': string = '';
    '전일비(장전)': string = '';
    '거래회전율(장전)': string = '';
    '거래금액(장전)': string = '';
};
export class TR_OPT10030Output implements ITROutputBase {
    multiT: new () => TR_OPT10030MultiItem;
    multi_items: TR_OPT10030MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10030MultiItem; }
    next: boolean = false;
};
/**
 * 당일거래량상위요청
 */
export class TR_OPT10030 extends TRBase<TR_OPT10030Input, TR_OPT10030Output> {
    constructor(input: TR_OPT10030Input) {
        super(input, TR_OPT10030Output);
        this.input.tr_code = 'OPT10030';
    }
};

export class TR_OPT10031Input implements ITRInputBase {
    tr_code: string = 'OPT10031';
    '시장구분': string = '';
    '조회구분': string = '';
    '순위시작': string = '';
    '순위끝': string = '';
};
export class TR_OPT10031MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
};
export class TR_OPT10031Output implements ITROutputBase {
    multiT: new () => TR_OPT10031MultiItem;
    multi_items: TR_OPT10031MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10031MultiItem; }
    next: boolean = false;
};
/**
 * 전일거래량상위요청
 */
export class TR_OPT10031 extends TRBase<TR_OPT10031Input, TR_OPT10031Output> {
    constructor(input: TR_OPT10031Input) {
        super(input, TR_OPT10031Output);
        this.input.tr_code = 'OPT10031';
    }
};

export class TR_OPT10032Input implements ITRInputBase {
    tr_code: string = 'OPT10032';
    '시장구분': string = '';
    '관리종목포함': string = '';
};
export class TR_OPT10032MultiItem {
    '종목코드': string = '';
    '현재순위': string = '';
    '전일순위': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '현재거래량': string = '';
    '전일거래량': string = '';
    '거래대금': string = '';
};
export class TR_OPT10032Output implements ITROutputBase {
    multiT: new () => TR_OPT10032MultiItem;
    multi_items: TR_OPT10032MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10032MultiItem; }
    next: boolean = false;
};
/**
 * 거래대금상위요청
 */
export class TR_OPT10032 extends TRBase<TR_OPT10032Input, TR_OPT10032Output> {
    constructor(input: TR_OPT10032Input) {
        super(input, TR_OPT10032Output);
        this.input.tr_code = 'OPT10032';
    }
};

export class TR_OPT10033Input implements ITRInputBase {
    tr_code: string = 'OPT10033';
    '시장구분': string = '';
    '거래량구분': string = '';
    '종목조건': string = '';
    '상하한포함': string = '';
    '신용조건': string = '';
};
export class TR_OPT10033MultiItem {
    '종목정보': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '신용비율': string = '';
    '매도잔량': string = '';
    '매수잔량': string = '';
    '현재거래량': string = '';
};
export class TR_OPT10033Output implements ITROutputBase {
    multiT: new () => TR_OPT10033MultiItem;
    multi_items: TR_OPT10033MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10033MultiItem; }
    next: boolean = false;
};
/**
 * 신용비율상위요청
 */
export class TR_OPT10033 extends TRBase<TR_OPT10033Input, TR_OPT10033Output> {
    constructor(input: TR_OPT10033Input) {
        super(input, TR_OPT10033Output);
        this.input.tr_code = 'OPT10033';
    }
};

export class TR_OPT10034Input implements ITRInputBase {
    tr_code: string = 'OPT10034';
    '시장구분': string = '';
    '매매구분': string = '';
    '기간': string = '';
};
export class TR_OPT10034MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '거래량': string = '';
    '순매수량': string = '';
    '취득가능주식수': string = '';
};
export class TR_OPT10034Output implements ITROutputBase {
    multiT: new () => TR_OPT10034MultiItem;
    multi_items: TR_OPT10034MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10034MultiItem; }
    next: boolean = false;
};
/**
 * 외인기간별매매상위요청
 */
export class TR_OPT10034 extends TRBase<TR_OPT10034Input, TR_OPT10034Output> {
    constructor(input: TR_OPT10034Input) {
        super(input, TR_OPT10034Output);
        this.input.tr_code = 'OPT10034';
    }
};

export class TR_OPT10035Input implements ITRInputBase {
    tr_code: string = 'OPT10035';
    '시장구분': string = '';
    '매매구분': string = '';
    '기준일구분': string = '';
};
export class TR_OPT10035MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    'D-1': string = '';
    'D-2': string = '';
    'D-3': string = '';
    '합계': string = '';
    '한도소진율': string = '';
    '전일대비1': string = '';
    '전일대비2': string = '';
    '전일대비3': string = '';
};
export class TR_OPT10035Output implements ITROutputBase {
    multiT: new () => TR_OPT10035MultiItem;
    multi_items: TR_OPT10035MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10035MultiItem; }
    next: boolean = false;
};
/**
 * 외인연속순매매상위요청
 */
export class TR_OPT10035 extends TRBase<TR_OPT10035Input, TR_OPT10035Output> {
    constructor(input: TR_OPT10035Input) {
        super(input, TR_OPT10035Output);
        this.input.tr_code = 'OPT10035';
    }
};

export class TR_OPT10036Input implements ITRInputBase {
    tr_code: string = 'OPT10036';
    '시장구분': string = '';
    '기간': string = '';
};
export class TR_OPT10036MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
    '보유주식수': string = '';
    '취득가능주식수': string = '';
    '기준한도소진율': string = '';
    '한도소진율': string = '';
    '소진율증가': string = '';
};
export class TR_OPT10036Output implements ITROutputBase {
    multiT: new () => TR_OPT10036MultiItem;
    multi_items: TR_OPT10036MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10036MultiItem; }
    next: boolean = false;
};
/**
 * 외인한도소진율증가상위
 */
export class TR_OPT10036 extends TRBase<TR_OPT10036Input, TR_OPT10036Output> {
    constructor(input: TR_OPT10036Input) {
        super(input, TR_OPT10036Output);
        this.input.tr_code = 'OPT10036';
    }
};

export class TR_OPT10037Input implements ITRInputBase {
    tr_code: string = 'OPT10037';
    '시장구분': string = '';
    '기간': string = '';
    '매매구분': string = '';
    '정렬구분': string = '';
    '현재가조건': string = '';
};
export class TR_OPT10037MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '매도거래량': string = '';
    '매수거래량': string = '';
    '순매수거래량': string = '';
    '순매수대금': string = '';
    '거래량': string = '';
    '거래대금': string = '';
};
export class TR_OPT10037Output implements ITROutputBase {
    multiT: new () => TR_OPT10037MultiItem;
    multi_items: TR_OPT10037MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10037MultiItem; }
    next: boolean = false;
};
/**
 * 외국계창구매매상위요청
 */
export class TR_OPT10037 extends TRBase<TR_OPT10037Input, TR_OPT10037Output> {
    constructor(input: TR_OPT10037Input) {
        super(input, TR_OPT10037Output);
        this.input.tr_code = 'OPT10037';
    }
};

export class TR_OPT10038Input implements ITRInputBase {
    tr_code: string = 'OPT10038';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '조회구분': string = '';
    '기간': string = '';
};
export class TR_OPT10038MultiItem {
    '순위': string = '';
    '회원사명': string = '';
    '매수수량': string = '';
    '매도수량': string = '';
    '누적순매수수량': string = '';
};
export class TR_OPT10038Output implements ITROutputBase {
    multiT: new () => TR_OPT10038MultiItem;
    multi_items: TR_OPT10038MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10038MultiItem; }
    next: boolean = false;
    '순위1': string = '';
    '순위2': string = '';
    '순위3': string = '';
    '기간중거래량': string = '';
};
/**
 * 종목별증권사순위요청
 */
export class TR_OPT10038 extends TRBase<TR_OPT10038Input, TR_OPT10038Output> {
    constructor(input: TR_OPT10038Input) {
        super(input, TR_OPT10038Output);
        this.input.tr_code = 'OPT10038';
    }
};

export class TR_OPT10039Input implements ITRInputBase {
    tr_code: string = 'OPT10039';
    '회원사코드': string = '';
    '거래량구분': string = '';
    '매매구분': string = '';
    '기간': string = '';
    '금액수량구분': string = '';
};
export class TR_OPT10039MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '기간중주가등락': string = '';
    '등락율': string = '';
    '기간중거래량': string = '';
    '순매수': string = '';
    '매수거래량': string = '';
    '매도거래량': string = '';
    '순매수금액': string = '';
    '매수금액': string = '';
    '매도금액': string = '';
};
export class TR_OPT10039Output implements ITROutputBase {
    multiT: new () => TR_OPT10039MultiItem;
    multi_items: TR_OPT10039MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10039MultiItem; }
    next: boolean = false;
};
/**
 * 증권사별매매상위요청
 */
export class TR_OPT10039 extends TRBase<TR_OPT10039Input, TR_OPT10039Output> {
    constructor(input: TR_OPT10039Input) {
        super(input, TR_OPT10039Output);
        this.input.tr_code = 'OPT10039';
    }
};

export class TR_OPT10040Input implements ITRInputBase {
    tr_code: string = 'OPT10040';
    '종목코드': string = '';
};
export class TR_OPT10040MultiItem {
    '매도이탈시간': string = '';
    '매도수량': string = '';
    '매도상위이탈원': string = '';
    '매수이탈시간': string = '';
    '매수수량': string = '';
    '매수상위이탈원': string = '';
    '조회일자': string = '';
    '조회시간': string = '';
};
export class TR_OPT10040Output implements ITROutputBase {
    multiT: new () => TR_OPT10040MultiItem;
    multi_items: TR_OPT10040MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10040MultiItem; }
    next: boolean = false;
    '매도거래원별증감1': string = '';
    '매도거래원수량1': string = '';
    '매도거래원1': string = '';
    '매도거래원코드1': string = '';
    '매수거래원1': string = '';
    '매수거래원코드1': string = '';
    '매수거래원수량1': string = '';
    '매수거래원별증감1': string = '';
    '매도거래원별증감2': string = '';
    '매도거래원수량2': string = '';
    '매도거래원2': string = '';
    '매도거래원코드2': string = '';
    '매수거래원2': string = '';
    '매수거래원코드2': string = '';
    '매수거래원수량2': string = '';
    '매수거래원별증감2': string = '';
    '매도거래원별증감3': string = '';
    '매도거래원수량3': string = '';
    '매도거래원3': string = '';
    '매도거래원코드3': string = '';
    '매수거래원3': string = '';
    '매수거래원코드3': string = '';
    '매수거래원수량3': string = '';
    '매수거래원별증감3': string = '';
    '매도거래원별증감4': string = '';
    '매도거래원수량4': string = '';
    '매도거래원4': string = '';
    '매도거래원코드4': string = '';
    '매수거래원4': string = '';
    '매수거래원코드4': string = '';
    '매수거래원수량4': string = '';
    '매수거래원별증감4': string = '';
    '매도거래원별증감5': string = '';
    '매도거래원수량5': string = '';
    '매도거래원5': string = '';
    '매도거래원코드5': string = '';
    '매수거래원5': string = '';
    '매수거래원코드5': string = '';
    '매수거래원수량5': string = '';
    '매수거래원별증감5': string = '';
    '외국계매도추정합변동': string = '';
    '외국계매도추정합': string = '';
    '외국계매수추정합': string = '';
    '외국계매수추정합변동': string = '';
};
/**
 * 당일주요거래원요청
 */
export class TR_OPT10040 extends TRBase<TR_OPT10040Input, TR_OPT10040Output> {
    constructor(input: TR_OPT10040Input) {
        super(input, TR_OPT10040Output);
        this.input.tr_code = 'OPT10040';
    }
};

export class TR_OPT10041Input implements ITRInputBase {
    tr_code: string = 'OPT10041';
    '종목코드': string = '';
    '영웅클럽구분': string = '';
};
export class TR_OPT10041MultiItem {
    '조기종료여부': string = '';
    '통화단위': string = '';
};
export class TR_OPT10041Output implements ITROutputBase {
    multiT: new () => TR_OPT10041MultiItem;
    multi_items: TR_OPT10041MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10041MultiItem; }
    next: boolean = false;
};
/**
 * 조기종료통화단위요청
 */
export class TR_OPT10041 extends TRBase<TR_OPT10041Input, TR_OPT10041Output> {
    constructor(input: TR_OPT10041Input) {
        super(input, TR_OPT10041Output);
        this.input.tr_code = 'OPT10041';
    }
};

export class TR_OPT10042Input implements ITRInputBase {
    tr_code: string = 'OPT10042';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '조회기간구분': string = '';
    '시점구분': string = '';
    '기간': string = '';
    '정렬기준': string = '';
};
export class TR_OPT10042MultiItem {
    '순위': string = '';
    '회원사코드': string = '';
    '회원사명': string = '';
};
export class TR_OPT10042Output implements ITROutputBase {
    multiT: new () => TR_OPT10042MultiItem;
    multi_items: TR_OPT10042MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10042MultiItem; }
    next: boolean = false;
};
/**
 * 순매수거래원순위요청
 */
export class TR_OPT10042 extends TRBase<TR_OPT10042Input, TR_OPT10042Output> {
    constructor(input: TR_OPT10042Input) {
        super(input, TR_OPT10042Output);
        this.input.tr_code = 'OPT10042';
    }
};

export class TR_OPT10043Input implements ITRInputBase {
    tr_code: string = 'OPT10043';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '조회기간구분': string = '';
    '시점구분': string = '';
    '기간': string = '';
    '정렬기준': string = '';
    '회원사코드': string = '';
};
export class TR_OPT10043MultiItem {
    '일자': string = '';
    '종가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '매도량': string = '';
    '매수량': string = '';
    '순매수수량': string = '';
    '거래량합': string = '';
    '거래비중': string = '';
};
export class TR_OPT10043Output implements ITROutputBase {
    multiT: new () => TR_OPT10043MultiItem;
    multi_items: TR_OPT10043MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10043MultiItem; }
    next: boolean = false;
};
/**
 * 거래원매물대분석요청
 */
export class TR_OPT10043 extends TRBase<TR_OPT10043Input, TR_OPT10043Output> {
    constructor(input: TR_OPT10043Input) {
        super(input, TR_OPT10043Output);
        this.input.tr_code = 'OPT10043';
    }
};

export class TR_OPT10044Input implements ITRInputBase {
    tr_code: string = 'OPT10044';
    '시작일자': string = '';
    '종료일자': string = '';
    '매매구분': string = '';
    '시장구분': string = '';
};
export class TR_OPT10044MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '순매수수량': string = '';
    '순매수금액': string = '';
    '추정평균가': string = '';
    '현재가': string = '';
    '평균가대비': string = '';
    '대비율': string = '';
};
export class TR_OPT10044Output implements ITROutputBase {
    multiT: new () => TR_OPT10044MultiItem;
    multi_items: TR_OPT10044MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10044MultiItem; }
    next: boolean = false;
};
/**
 * 일별기관매매종목요청
 */
export class TR_OPT10044 extends TRBase<TR_OPT10044Input, TR_OPT10044Output> {
    constructor(input: TR_OPT10044Input) {
        super(input, TR_OPT10044Output);
        this.input.tr_code = 'OPT10044';
    }
};

export class TR_OPT10045Input implements ITRInputBase {
    tr_code: string = 'OPT10045';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '기관추정단가구분': string = '';
    '외인추정단가구분': string = '';
    '누적기간': string = '';
    '기간구분': string = '';
};
export class TR_OPT10045MultiItem {
    '일자': string = '';
    '종가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '기관기간누적': string = '';
    '기관일별순매매수량': string = '';
    '외인기간누적': string = '';
    '외인일별순매매수량': string = '';
    '한도소진율': string = '';
};
export class TR_OPT10045Output implements ITROutputBase {
    multiT: new () => TR_OPT10045MultiItem;
    multi_items: TR_OPT10045MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10045MultiItem; }
    next: boolean = false;
    '기관추정평균가': string = '';
    '외인추정평균가': string = '';
};
/**
 * 종목별기관매매추이요청
 */
export class TR_OPT10045 extends TRBase<TR_OPT10045Input, TR_OPT10045Output> {
    constructor(input: TR_OPT10045Input) {
        super(input, TR_OPT10045Output);
        this.input.tr_code = 'OPT10045';
    }
};

export class TR_OPT10046Input implements ITRInputBase {
    tr_code: string = 'OPT10046';
    '종목코드': string = '';
    '틱구분': string = '';
    '체결강도구분': string = '';
};
export class TR_OPT10046MultiItem {
    '체결시간': string = '';
    '현재가': string = '';
    '전일대비': string = '';
    '전일대비기호': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '누적거래대금': string = '';
    '누적거래량': string = '';
    '체결강도': string = '';
    '체결강도5분': string = '';
    '체결강도20분': string = '';
    '체결강도60분': string = '';
};
export class TR_OPT10046Output implements ITROutputBase {
    multiT: new () => TR_OPT10046MultiItem;
    multi_items: TR_OPT10046MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10046MultiItem; }
    next: boolean = false;
};
/**
 * 체결강도추이시간별요청
 */
export class TR_OPT10046 extends TRBase<TR_OPT10046Input, TR_OPT10046Output> {
    constructor(input: TR_OPT10046Input) {
        super(input, TR_OPT10046Output);
        this.input.tr_code = 'OPT10046';
    }
};

export class TR_OPT10047Input implements ITRInputBase {
    tr_code: string = 'OPT10047';
    '종목코드': string = '';
    '틱구분': string = '';
    '체결강도구분': string = '';
};
export class TR_OPT10047MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '전일대비': string = '';
    '전일대비기호': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '누적거래대금': string = '';
    '누적거래량': string = '';
    '체결강도': string = '';
    '체결강도5분': string = '';
    '체결강도20분': string = '';
    '체결강도60분': string = '';
};
export class TR_OPT10047Output implements ITROutputBase {
    multiT: new () => TR_OPT10047MultiItem;
    multi_items: TR_OPT10047MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10047MultiItem; }
    next: boolean = false;
};
/**
 * 체결강도추이일별요청
 */
export class TR_OPT10047 extends TRBase<TR_OPT10047Input, TR_OPT10047Output> {
    constructor(input: TR_OPT10047Input) {
        super(input, TR_OPT10047Output);
        this.input.tr_code = 'OPT10047';
    }
};

export class TR_OPT10048Input implements ITRInputBase {
    tr_code: string = 'OPT10048';
    '종목코드': string = '';
};
export class TR_OPT10048MultiItem {
    '일자': string = '';
    'IV': string = '';
    '델타': string = '';
    '감마': string = '';
    '쎄타': string = '';
    '베가': string = '';
    '로': string = '';
    'LP': string = '';
};
export class TR_OPT10048Output implements ITROutputBase {
    multiT: new () => TR_OPT10048MultiItem;
    multi_items: TR_OPT10048MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10048MultiItem; }
    next: boolean = false;
};
/**
 * ELW일별민감도지표요청
 */
export class TR_OPT10048 extends TRBase<TR_OPT10048Input, TR_OPT10048Output> {
    constructor(input: TR_OPT10048Input) {
        super(input, TR_OPT10048Output);
        this.input.tr_code = 'OPT10048';
    }
};

export class TR_OPT10049Input implements ITRInputBase {
    tr_code: string = 'OPT10049';
    '연속구분': string = '';
    '연속키': string = '';
    '종목코드': string = '';
};
export class TR_OPT10049MultiItem {
    '시간': string = '';
    '패리티': string = '';
    '프리미엄': string = '';
    '기어링비율': string = '';
    '손익분기율': string = '';
    '현재가': string = '';
    '레버리지': string = '';
};
export class TR_OPT10049Output implements ITROutputBase {
    multiT: new () => TR_OPT10049MultiItem;
    multi_items: TR_OPT10049MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10049MultiItem; }
    next: boolean = false;
    '연속구분': string = '';
    '연속키': string = '';
};
/**
 * ELW투자지표요청
 */
export class TR_OPT10049 extends TRBase<TR_OPT10049Input, TR_OPT10049Output> {
    constructor(input: TR_OPT10049Input) {
        super(input, TR_OPT10049Output);
        this.input.tr_code = 'OPT10049';
    }
};

export class TR_OPT10050Input implements ITRInputBase {
    tr_code: string = 'OPT10050';
    '종목코드': string = '';
};
export class TR_OPT10050MultiItem {
    '체결시간': string = '';
    '현재가': string = '';
    'ELW이론가': string = '';
    'IV': string = '';
    '델타': string = '';
    '감마': string = '';
    '쎄타': string = '';
    '베가': string = '';
    '로': string = '';
    'LP': string = '';
};
export class TR_OPT10050Output implements ITROutputBase {
    multiT: new () => TR_OPT10050MultiItem;
    multi_items: TR_OPT10050MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10050MultiItem; }
    next: boolean = false;
};
/**
 * ELW민감도지표요청
 */
export class TR_OPT10050 extends TRBase<TR_OPT10050Input, TR_OPT10050Output> {
    constructor(input: TR_OPT10050Input) {
        super(input, TR_OPT10050Output);
        this.input.tr_code = 'OPT10050';
    }
};

export class TR_OPT10051Input implements ITRInputBase {
    tr_code: string = 'OPT10051';
    '시장구분': string = '';
    '금액수량구분': string = '';
    '기준일자': string = '';
};
export class TR_OPT10051MultiItem {
    '업종코드': string = '';
    '업종명': string = '';
    '현재가': string = '';
    '대비부호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '증권순매수': string = '';
    '보험순매수': string = '';
    '투신순매수': string = '';
    '은행순매수': string = '';
    '종신금순매수': string = '';
    '기금순매수': string = '';
    '기타법인순매수': string = '';
    '개인순매수': string = '';
    '외국인순매수': string = '';
    '내국인대우외국인순매수': string = '';
    '국가순매수': string = '';
    '사모펀드순매수': string = '';
    '기관계순매수': string = '';
};
export class TR_OPT10051Output implements ITROutputBase {
    multiT: new () => TR_OPT10051MultiItem;
    multi_items: TR_OPT10051MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10051MultiItem; }
    next: boolean = false;
};
/**
 * 업종별투자자순매수요청
 */
export class TR_OPT10051 extends TRBase<TR_OPT10051Input, TR_OPT10051Output> {
    constructor(input: TR_OPT10051Input) {
        super(input, TR_OPT10051Output);
        this.input.tr_code = 'OPT10051';
    }
};

export class TR_OPT10052Input implements ITRInputBase {
    tr_code: string = 'OPT10052';
    '회원사코드': string = '';
    '종목코드': string = '';
    '시장구분': string = '';
    '수량구분': string = '';
    '가격구분': string = '';
};
export class TR_OPT10052MultiItem {
    '시간': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '거래원명': string = '';
    '구분': string = '';
    '순간거래량': string = '';
    '누적순매수': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
};
export class TR_OPT10052Output implements ITROutputBase {
    multiT: new () => TR_OPT10052MultiItem;
    multi_items: TR_OPT10052MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10052MultiItem; }
    next: boolean = false;
};
/**
 * 거래원순간거래량요청
 */
export class TR_OPT10052 extends TRBase<TR_OPT10052Input, TR_OPT10052Output> {
    constructor(input: TR_OPT10052Input) {
        super(input, TR_OPT10052Output);
        this.input.tr_code = 'OPT10052';
    }
};

export class TR_OPT10053Input implements ITRInputBase {
    tr_code: string = 'OPT10053';
    '종목코드': string = '';
};
export class TR_OPT10053MultiItem {
    '매도이탈시간': string = '';
    '매도수량': string = '';
    '매도상위이탈원': string = '';
    '매수이탈시간': string = '';
    '매수수량': string = '';
    '매수상위이탈원': string = '';
    '조회일자': string = '';
    '조회시간': string = '';
};
export class TR_OPT10053Output implements ITROutputBase {
    multiT: new () => TR_OPT10053MultiItem;
    multi_items: TR_OPT10053MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10053MultiItem; }
    next: boolean = false;
};
/**
 * 당일상위이탈원요청
 */
export class TR_OPT10053 extends TRBase<TR_OPT10053Input, TR_OPT10053Output> {
    constructor(input: TR_OPT10053Input) {
        super(input, TR_OPT10053Output);
        this.input.tr_code = 'OPT10053';
    }
};

export class TR_OPT10054Input implements ITRInputBase {
    tr_code: string = 'OPT10054';
    '시장구분': string = '';
    '장전구분': string = '';
    '종목코드': string = '';
    '발동구분': string = '';
    '제외종목': string = '';
    '거래량구분': string = '';
    '최소거래량': string = '';
    '최대거래량': string = '';
    '거래대금구분': string = '';
    '최소거래대금': string = '';
    '최대거래대금': string = '';
    '발동방향': string = '';
};
export class TR_OPT10054MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '누적거래량': string = '';
    '발동가격': string = '';
    '동적괴리율': string = '';
    '매매체결처리시각': string = '';
    'VI해제시각': string = '';
    'VI적용구분': string = '';
    '동적기준가격': string = '';
    '정적기준가격': string = '';
    '정적괴리율': string = '';
    '시가대비등락률': string = '';
    'VI발동횟수': string = '';
};
export class TR_OPT10054Output implements ITROutputBase {
    multiT: new () => TR_OPT10054MultiItem;
    multi_items: TR_OPT10054MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10054MultiItem; }
    next: boolean = false;
};
/**
 * 변동성완화장치발동종목요청
 */
export class TR_OPT10054 extends TRBase<TR_OPT10054Input, TR_OPT10054Output> {
    constructor(input: TR_OPT10054Input) {
        super(input, TR_OPT10054Output);
        this.input.tr_code = 'OPT10054';
    }
};

export class TR_OPT10055Input implements ITRInputBase {
    tr_code: string = 'OPT10055';
    '종목코드': string = '';
    '당일전일': string = '';
};
export class TR_OPT10055MultiItem {
    '체결시간': string = '';
    '체결가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '체결량': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
};
export class TR_OPT10055Output implements ITROutputBase {
    multiT: new () => TR_OPT10055MultiItem;
    multi_items: TR_OPT10055MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10055MultiItem; }
    next: boolean = false;
};
/**
 * 당일전일체결대량요청
 */
export class TR_OPT10055 extends TRBase<TR_OPT10055Input, TR_OPT10055Output> {
    constructor(input: TR_OPT10055Input) {
        super(input, TR_OPT10055Output);
        this.input.tr_code = 'OPT10055';
    }
};

export class TR_OPT10058Input implements ITRInputBase {
    tr_code: string = 'OPT10058';
    '시작일자': string = '';
    '종료일자': string = '';
    '매매구분': string = '';
    '시장구분': string = '';
    '투자자구분': string = '';
};
export class TR_OPT10058MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '순매도수량': string = '';
    '순매도금액': string = '';
    '추정평균가': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '평균가대비': string = '';
    '대비율': string = '';
    '기간거래량': string = '';
};
export class TR_OPT10058Output implements ITROutputBase {
    multiT: new () => TR_OPT10058MultiItem;
    multi_items: TR_OPT10058MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10058MultiItem; }
    next: boolean = false;
};
/**
 * 투자자별일별매매종목요청
 */
export class TR_OPT10058 extends TRBase<TR_OPT10058Input, TR_OPT10058Output> {
    constructor(input: TR_OPT10058Input) {
        super(input, TR_OPT10058Output);
        this.input.tr_code = 'OPT10058';
    }
};

export class TR_OPT10059Input implements ITRInputBase {
    tr_code: string = 'OPT10059';
    '일자': string = '';
    '종목코드': string = '';
    '금액수량구분': string = '';
    '매매구분': string = '';
    '단위구분': string = '';
};
export class TR_OPT10059MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '개인투자자': string = '';
    '외국인투자자': string = '';
    '기관계': string = '';
    '금융투자': string = '';
    '보험': string = '';
    '투신': string = '';
    '기타금융': string = '';
    '은행': string = '';
    '연기금등': string = '';
    '사모펀드': string = '';
    '국가': string = '';
    '기타법인': string = '';
    '내외국인': string = '';
};
export class TR_OPT10059Output implements ITROutputBase {
    multiT: new () => TR_OPT10059MultiItem;
    multi_items: TR_OPT10059MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10059MultiItem; }
    next: boolean = false;
};
/**
 * 종목별투자자기관별요청
 */
export class TR_OPT10059 extends TRBase<TR_OPT10059Input, TR_OPT10059Output> {
    constructor(input: TR_OPT10059Input) {
        super(input, TR_OPT10059Output);
        this.input.tr_code = 'OPT10059';
    }
};

export class TR_OPT10060Input implements ITRInputBase {
    tr_code: string = 'OPT10060';
    '일자': string = '';
    '종목코드': string = '';
    '금액수량구분': string = '';
    '매매구분': string = '';
    '단위구분': string = '';
};
export class TR_OPT10060MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '전일대비': string = '';
    '누적거래대금': string = '';
    '개인투자자': string = '';
    '외국인투자자': string = '';
    '기관계': string = '';
    '금융투자': string = '';
    '보험': string = '';
    '투신': string = '';
    '기타금융': string = '';
    '은행': string = '';
    '연기금등': string = '';
    '사모펀드': string = '';
    '국가': string = '';
    '기타법인': string = '';
    '내외국인': string = '';
};
export class TR_OPT10060Output implements ITROutputBase {
    multiT: new () => TR_OPT10060MultiItem;
    multi_items: TR_OPT10060MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10060MultiItem; }
    next: boolean = false;
};
/**
 * 종목별투자자기관별차트요청
 */
export class TR_OPT10060 extends TRBase<TR_OPT10060Input, TR_OPT10060Output> {
    constructor(input: TR_OPT10060Input) {
        super(input, TR_OPT10060Output);
        this.input.tr_code = 'OPT10060';
    }
};

export class TR_OPT10061Input implements ITRInputBase {
    tr_code: string = 'OPT10061';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '금액수량구분': string = '';
    '매매구분': string = '';
    '단위구분': string = '';
};
export class TR_OPT10061MultiItem {
    '개인투자자': string = '';
    '외국인투자자': string = '';
    '기관계': string = '';
    '금융투자': string = '';
    '보험': string = '';
    '투신': string = '';
    '기타금융': string = '';
    '은행': string = '';
    '연기금등': string = '';
    '사모펀드': string = '';
    '국가': string = '';
    '기타법인': string = '';
    '내외국인': string = '';
};
export class TR_OPT10061Output implements ITROutputBase {
    multiT: new () => TR_OPT10061MultiItem;
    multi_items: TR_OPT10061MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10061MultiItem; }
    next: boolean = false;
};
/**
 * 종목별투자자기관별합계요청
 */
export class TR_OPT10061 extends TRBase<TR_OPT10061Input, TR_OPT10061Output> {
    constructor(input: TR_OPT10061Input) {
        super(input, TR_OPT10061Output);
        this.input.tr_code = 'OPT10061';
    }
};

export class TR_OPT10062Input implements ITRInputBase {
    tr_code: string = 'OPT10062';
    '시작일자': string = '';
    '종료일자': string = '';
    '시장구분': string = '';
    '매매구분': string = '';
    '정렬조건': string = '';
    '단위구분': string = '';
};
export class TR_OPT10062MultiItem {
    '종목코드': string = '';
    '순위': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '기관순매매수량': string = '';
    '기관순매매금액': string = '';
    '기관순매매평균가': string = '';
    '외인순매매수량': string = '';
    '외인순매매금액': string = '';
    '외인순매매평균가': string = '';
    '순매매수량': string = '';
    '순매매금액': string = '';
};
export class TR_OPT10062Output implements ITROutputBase {
    multiT: new () => TR_OPT10062MultiItem;
    multi_items: TR_OPT10062MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10062MultiItem; }
    next: boolean = false;
};
/**
 * 동일순매매순위요청
 */
export class TR_OPT10062 extends TRBase<TR_OPT10062Input, TR_OPT10062Output> {
    constructor(input: TR_OPT10062Input) {
        super(input, TR_OPT10062Output);
        this.input.tr_code = 'OPT10062';
    }
};

export class TR_OPT10063Input implements ITRInputBase {
    tr_code: string = 'OPT10063';
    '시장구분': string = '';
    '금액수량구분': string = '';
    '투자자별': string = '';
    '외국계전체': string = '';
    '동시순매수구분': string = '';
};
export class TR_OPT10063MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '순매수금액': string = '';
    '이전순매수금액': string = '';
    '순매수금액증감': string = '';
    '매수금액': string = '';
    '매수금액증감': string = '';
    '매도금액': string = '';
    '매도금액증감': string = '';
    '순매수수량': string = '';
    '이점시전순매수수량': string = '';
    '순매수증감': string = '';
    '매수수량': string = '';
    '매수수량증감': string = '';
    '매도수량': string = '';
    '매도수량증감': string = '';
};
export class TR_OPT10063Output implements ITROutputBase {
    multiT: new () => TR_OPT10063MultiItem;
    multi_items: TR_OPT10063MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10063MultiItem; }
    next: boolean = false;
};
/**
 * 장중투자자별매매요청
 */
export class TR_OPT10063 extends TRBase<TR_OPT10063Input, TR_OPT10063Output> {
    constructor(input: TR_OPT10063Input) {
        super(input, TR_OPT10063Output);
        this.input.tr_code = 'OPT10063';
    }
};

export class TR_OPT10064Input implements ITRInputBase {
    tr_code: string = 'OPT10064';
    '시장구분': string = '';
    '금액수량구분': string = '';
    '매매구분': string = '';
    '종목코드': string = '';
};
export class TR_OPT10064MultiItem {
    '시간': string = '';
    '외국인투자자': string = '';
    '기관계': string = '';
    '투신': string = '';
    '보험': string = '';
    '은행': string = '';
    '연기금등': string = '';
    '기타법인': string = '';
    '국가': string = '';
};
export class TR_OPT10064Output implements ITROutputBase {
    multiT: new () => TR_OPT10064MultiItem;
    multi_items: TR_OPT10064MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10064MultiItem; }
    next: boolean = false;
};
/**
 * 장중투자자별매매차트요청
 */
export class TR_OPT10064 extends TRBase<TR_OPT10064Input, TR_OPT10064Output> {
    constructor(input: TR_OPT10064Input) {
        super(input, TR_OPT10064Output);
        this.input.tr_code = 'OPT10064';
    }
};

export class TR_OPT10065Input implements ITRInputBase {
    tr_code: string = 'OPT10065';
    '매매구분': string = '';
    '시장구분': string = '';
    '기관구분': string = '';
};
export class TR_OPT10065MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '매도량': string = '';
    '매수량': string = '';
    '순매도': string = '';
};
export class TR_OPT10065Output implements ITROutputBase {
    multiT: new () => TR_OPT10065MultiItem;
    multi_items: TR_OPT10065MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10065MultiItem; }
    next: boolean = false;
};
/**
 * 장중투자자별매매상위요청
 */
export class TR_OPT10065 extends TRBase<TR_OPT10065Input, TR_OPT10065Output> {
    constructor(input: TR_OPT10065Input) {
        super(input, TR_OPT10065Output);
        this.input.tr_code = 'OPT10065';
    }
};

export class TR_OPT10066Input implements ITRInputBase {
    tr_code: string = 'OPT10066';
    '시장구분': string = '';
    '금액수량구분': string = '';
    '매매구분': string = '';
    '종목코드': string = '';
};
export class TR_OPT10066MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '개인투자자': string = '';
    '외국인투자자': string = '';
    '기관계': string = '';
    '금융투자': string = '';
    '보험': string = '';
    '투신': string = '';
    '기타금융': string = '';
    '은행': string = '';
    '연기금등': string = '';
    '사모펀드': string = '';
    '국가': string = '';
    '기타법인': string = '';
};
export class TR_OPT10066Output implements ITROutputBase {
    multiT: new () => TR_OPT10066MultiItem;
    multi_items: TR_OPT10066MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10066MultiItem; }
    next: boolean = false;
};
/**
 * 장중투자자별매매차트요청
 */
export class TR_OPT10066 extends TRBase<TR_OPT10066Input, TR_OPT10066Output> {
    constructor(input: TR_OPT10066Input) {
        super(input, TR_OPT10066Output);
        this.input.tr_code = 'OPT10066';
    }
};

export class TR_OPT10067Input implements ITRInputBase {
    tr_code: string = 'OPT10067';
    '기준일자': string = '';
    '시장구분': string = '';
};
export class TR_OPT10067MultiItem {
    '종목명': string = '';
    '종목코드': string = '';
    '대차거래체결주수': string = '';
    '대차거래상환주수': string = '';
    '잔고주수': string = '';
    '잔고금액': string = '';
};
export class TR_OPT10067Output implements ITROutputBase {
    multiT: new () => TR_OPT10067MultiItem;
    multi_items: TR_OPT10067MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10067MultiItem; }
    next: boolean = false;
};
/**
 * 대차거래내역요청
 */
export class TR_OPT10067 extends TRBase<TR_OPT10067Input, TR_OPT10067Output> {
    constructor(input: TR_OPT10067Input) {
        super(input, TR_OPT10067Output);
        this.input.tr_code = 'OPT10067';
    }
};

export class TR_OPT10068Input implements ITRInputBase {
    tr_code: string = 'OPT10068';
    '시작일자': string = '';
    '종료일자': string = '';
    '전체구분': string = '';
    '종목코드': string = '';
};
export class TR_OPT10068MultiItem {
    '일자': string = '';
    '대차거래체결주수': string = '';
    '대차거래상환주수': string = '';
    '대차거래증감': string = '';
    '잔고주수': string = '';
    '잔고금액': string = '';
};
export class TR_OPT10068Output implements ITROutputBase {
    multiT: new () => TR_OPT10068MultiItem;
    multi_items: TR_OPT10068MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10068MultiItem; }
    next: boolean = false;
};
/**
 * 대차거래추이요청
 */
export class TR_OPT10068 extends TRBase<TR_OPT10068Input, TR_OPT10068Output> {
    constructor(input: TR_OPT10068Input) {
        super(input, TR_OPT10068Output);
        this.input.tr_code = 'OPT10068';
    }
};

export class TR_OPT10069Input implements ITRInputBase {
    tr_code: string = 'OPT10069';
    '시작일자': string = '';
    '종료일자': string = '';
    '시장구분': string = '';
};
export class TR_OPT10069MultiItem {
    '종목명': string = '';
    '종목코드': string = '';
    '대차거래체결주수': string = '';
    '대차거래상환주수': string = '';
    '잔고주수': string = '';
    '잔고금액': string = '';
};
export class TR_OPT10069Output implements ITROutputBase {
    multiT: new () => TR_OPT10069MultiItem;
    multi_items: TR_OPT10069MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10069MultiItem; }
    next: boolean = false;
    '대차거래체결주수합': string = '';
    '대차거래상환주수합': string = '';
    '잔고주수합': string = '';
    '잔고금액합': string = '';
    '대차거래체결주수비율': string = '';
    '대차거래상환주수비율': string = '';
    '잔고주수비율': string = '';
    '잔고금액비율': string = '';
};
/**
 * 대차거래상위10종목요청
 */
export class TR_OPT10069 extends TRBase<TR_OPT10069Input, TR_OPT10069Output> {
    constructor(input: TR_OPT10069Input) {
        super(input, TR_OPT10069Output);
        this.input.tr_code = 'OPT10069';
    }
};

export class TR_OPT10070Input implements ITRInputBase {
    tr_code: string = 'OPT10070';
    '종목코드': string = '';
};
export class TR_OPT10070Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '매도거래원별증감1': string = '';
    '매도거래원수량1': string = '';
    '매도거래원1': string = '';
    '매도거래원코드1': string = '';
    '매수거래원1': string = '';
    '매수거래원코드1': string = '';
    '매수거래원수량1': string = '';
    '매수거래원별증감1': string = '';
    '매도거래원별증감2': string = '';
    '매도거래원수량2': string = '';
    '매도거래원2': string = '';
    '매도거래원코드2': string = '';
    '매수거래원2': string = '';
    '매수거래원코드2': string = '';
    '매수거래원수량2': string = '';
    '매수거래원별증감2': string = '';
    '매도거래원별증감3': string = '';
    '매도거래원수량3': string = '';
    '매도거래원3': string = '';
    '매도거래원코드3': string = '';
    '매수거래원3': string = '';
    '매수거래원코드3': string = '';
    '매수거래원수량3': string = '';
    '매수거래원별증감3': string = '';
    '매도거래원별증감4': string = '';
    '매도거래원수량4': string = '';
    '매도거래원4': string = '';
    '매도거래원코드4': string = '';
    '매수거래원4': string = '';
    '매수거래원코드4': string = '';
    '매수거래원수량4': string = '';
    '매수거래원별증감4': string = '';
    '매도거래원별증감5': string = '';
    '매도거래원수량5': string = '';
    '매도거래원5': string = '';
    '매도거래원코드5': string = '';
    '매수거래원5': string = '';
    '매수거래원코드5': string = '';
    '매수거래원수량5': string = '';
    '매수거래원별증감5': string = '';
    '외국계매도추정합변동': string = '';
    '외국계매도추정합': string = '';
    '외국계매수추정합': string = '';
    '외국계매수추정합변동': string = '';
};
/**
 * 당일주요거래원요청
 */
export class TR_OPT10070 extends TRBase<TR_OPT10070Input, TR_OPT10070Output> {
    constructor(input: TR_OPT10070Input) {
        super(input, TR_OPT10070Output);
        this.input.tr_code = 'OPT10070';
    }
};

export class TR_OPT10071Input implements ITRInputBase {
    tr_code: string = 'OPT10071';
    '종목코드': string = '';
    '시간구분': string = '';
};
export class TR_OPT10071MultiItem {
    '시간': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '대비율': string = '';
    '체결거래량': string = '';
    '누적거래량': string = '';
    '순간비율': string = '';
    '누적비율': string = '';
};
export class TR_OPT10071Output implements ITROutputBase {
    multiT: new () => TR_OPT10071MultiItem;
    multi_items: TR_OPT10071MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10071MultiItem; }
    next: boolean = false;
};
/**
 * 시간대별전일비거래비중요청
 */
export class TR_OPT10071 extends TRBase<TR_OPT10071Input, TR_OPT10071Output> {
    constructor(input: TR_OPT10071Input) {
        super(input, TR_OPT10071Output);
        this.input.tr_code = 'OPT10071';
    }
};

export class TR_OPT10072Input implements ITRInputBase {
    tr_code: string = 'OPT10072';
    '계좌번호': string = '';
    '종목코드': string = '';
    '시작일자': string = '';
};
export class TR_OPT10072MultiItem {
    '일자': string = '';
    '당일hts매도수수료': string = '';
    '종목명': string = '';
    '체결량': string = '';
    '매입단가': string = '';
    '체결가': string = '';
    '당일매도손익': string = '';
    '손익율': string = '';
    '종목코드': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '인출가능금액': string = '';
    '대출일': string = '';
    '신용구분': string = '';
    '종목코드1': string = '';
    '당일매도손익1': string = '';
};
export class TR_OPT10072Output implements ITROutputBase {
    multiT: new () => TR_OPT10072MultiItem;
    multi_items: TR_OPT10072MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10072MultiItem; }
    next: boolean = false;
};
/**
 * 일자별종목별실현손익요청
 */
export class TR_OPT10072 extends TRBase<TR_OPT10072Input, TR_OPT10072Output> {
    constructor(input: TR_OPT10072Input) {
        super(input, TR_OPT10072Output);
        this.input.tr_code = 'OPT10072';
    }
};

export class TR_OPT10073Input implements ITRInputBase {
    tr_code: string = 'OPT10073';
    '계좌번호': string = '';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
};
export class TR_OPT10073MultiItem {
    '일자': string = '';
    '당일hts매도수수료': string = '';
    '종목명': string = '';
    '체결량': string = '';
    '매입단가': string = '';
    '체결가': string = '';
    '당일매도손익': string = '';
    '손익율': string = '';
    '종목코드': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '인출가능금액': string = '';
    '대출일': string = '';
    '신용구분': string = '';
};
export class TR_OPT10073Output implements ITROutputBase {
    multiT: new () => TR_OPT10073MultiItem;
    multi_items: TR_OPT10073MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10073MultiItem; }
    next: boolean = false;
};
/**
 * 일자별종목별실현손익요청
 */
export class TR_OPT10073 extends TRBase<TR_OPT10073Input, TR_OPT10073Output> {
    constructor(input: TR_OPT10073Input) {
        super(input, TR_OPT10073Output);
        this.input.tr_code = 'OPT10073';
    }
};

export class TR_OPT10074Input implements ITRInputBase {
    tr_code: string = 'OPT10074';
    '계좌번호': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
};
export class TR_OPT10074MultiItem {
    '일자': string = '';
    '매수금액': string = '';
    '매도금액': string = '';
    '당일매도손익': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
};
export class TR_OPT10074Output implements ITROutputBase {
    multiT: new () => TR_OPT10074MultiItem;
    multi_items: TR_OPT10074MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10074MultiItem; }
    next: boolean = false;
    '총매수금액': string = '';
    '총매도금액': string = '';
    '실현손익': string = '';
    '매매수수료': string = '';
    '매매세금': string = '';
};
/**
 * 일자별실현손익요청
 */
export class TR_OPT10074 extends TRBase<TR_OPT10074Input, TR_OPT10074Output> {
    constructor(input: TR_OPT10074Input) {
        super(input, TR_OPT10074Output);
        this.input.tr_code = 'OPT10074';
    }
};

export class TR_OPT10075Input implements ITRInputBase {
    tr_code: string = 'OPT10075';
    '계좌번호': string = '';
    '전체종목구분': string = '';
    '매매구분': string = '';
    '종목코드': string = '';
    '체결구분': string = '';
};
export class TR_OPT10075MultiItem {
    '계좌번호': string = '';
    '주문번호': string = '';
    '관리사번': string = '';
    '종목코드': string = '';
    '업무구분': string = '';
    '주문상태': string = '';
    '종목명': string = '';
    '주문수량': string = '';
    '주문가격': string = '';
    '미체결수량': string = '';
    '체결누계금액': string = '';
    '원주문번호': string = '';
    '주문구분': string = '';
    '매매구분': string = '';
    '시간': string = '';
    '체결번호': string = '';
    '체결가': string = '';
    '체결량': string = '';
    '현재가': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '단위체결가': string = '';
    '단위체결량': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '개인투자자': string = '';
};
export class TR_OPT10075Output implements ITROutputBase {
    multiT: new () => TR_OPT10075MultiItem;
    multi_items: TR_OPT10075MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10075MultiItem; }
    next: boolean = false;
};
/**
 * 미체결요청
 */
export class TR_OPT10075 extends TRBase<TR_OPT10075Input, TR_OPT10075Output> {
    constructor(input: TR_OPT10075Input) {
        super(input, TR_OPT10075Output);
        this.input.tr_code = 'OPT10075';
    }
};

export class TR_OPT10076Input implements ITRInputBase {
    tr_code: string = 'OPT10076';
    '종목코드': string = '';
    '조회구분': string = '';
    '매도수구분': string = '';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '주문번호': string = '';
    '체결구분': string = '';
};
export class TR_OPT10076MultiItem {
    '주문번호': string = '';
    '종목명': string = '';
    '주문구분': string = '';
    '주문가격': string = '';
    '주문수량': string = '';
    '체결가': string = '';
    '체결량': string = '';
    '미체결수량': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '주문상태': string = '';
    '매매구분': string = '';
    '원주문번호': string = '';
    '주문시간': string = '';
    '종목코드': string = '';
};
export class TR_OPT10076Output implements ITROutputBase {
    multiT: new () => TR_OPT10076MultiItem;
    multi_items: TR_OPT10076MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10076MultiItem; }
    next: boolean = false;
};
/**
 * 체결요청
 */
export class TR_OPT10076 extends TRBase<TR_OPT10076Input, TR_OPT10076Output> {
    constructor(input: TR_OPT10076Input) {
        super(input, TR_OPT10076Output);
        this.input.tr_code = 'OPT10076';
    }
};

export class TR_OPT10077Input implements ITRInputBase {
    tr_code: string = 'OPT10077';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '종목코드': string = '';
};
export class TR_OPT10077MultiItem {
    '종목명': string = '';
    '체결량': string = '';
    '매입단가': string = '';
    '체결가': string = '';
    '당일매도손익': string = '';
    '손익율': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '종목코드': string = '';
};
export class TR_OPT10077Output implements ITROutputBase {
    multiT: new () => TR_OPT10077MultiItem;
    multi_items: TR_OPT10077MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10077MultiItem; }
    next: boolean = false;
    '당일실현손익': string = '';
};
/**
 * 당일실현손익상세요청
 */
export class TR_OPT10077 extends TRBase<TR_OPT10077Input, TR_OPT10077Output> {
    constructor(input: TR_OPT10077Input) {
        super(input, TR_OPT10077Output);
        this.input.tr_code = 'OPT10077';
    }
};

export class TR_OPT10078Input implements ITRInputBase {
    tr_code: string = 'OPT10078';
    '회원사코드': string = '';
    '종목코드': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
};
export class TR_OPT10078MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '순매수수량': string = '';
    '매수수량': string = '';
    '매도수량': string = '';
};
export class TR_OPT10078Output implements ITROutputBase {
    multiT: new () => TR_OPT10078MultiItem;
    multi_items: TR_OPT10078MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10078MultiItem; }
    next: boolean = false;
};
/**
 * 증권사별종목매매동향요청
 */
export class TR_OPT10078 extends TRBase<TR_OPT10078Input, TR_OPT10078Output> {
    constructor(input: TR_OPT10078Input) {
        super(input, TR_OPT10078Output);
        this.input.tr_code = 'OPT10078';
    }
};

export class TR_OPT10079Input implements ITRInputBase {
    tr_code: string = 'OPT10079';
    '종목코드': string = '';
    '틱범위': string = '';
    '수정주가구분': string = '';
};
export class TR_OPT10079MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가구분': string = '';
    '수정비율': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT10079Output implements ITROutputBase {
    multiT: new () => TR_OPT10079MultiItem;
    multi_items: TR_OPT10079MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10079MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
    '마지막틱갯수': string = '';
};
/**
 * 주식틱차트조회요청
 */
export class TR_OPT10079 extends TRBase<TR_OPT10079Input, TR_OPT10079Output> {
    constructor(input: TR_OPT10079Input) {
        super(input, TR_OPT10079Output);
        this.input.tr_code = 'OPT10079';
    }
};

export class TR_OPT10080Input implements ITRInputBase {
    tr_code: string = 'OPT10080';
    '종목코드': string = '';
    '틱범위': string = '';
    '수정주가구분': string = '';
};
export class TR_OPT10080MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가구분': string = '';
    '수정비율': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT10080Output implements ITROutputBase {
    multiT: new () => TR_OPT10080MultiItem;
    multi_items: TR_OPT10080MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10080MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
};
/**
 * 주식분봉차트조회요청
 */
export class TR_OPT10080 extends TRBase<TR_OPT10080Input, TR_OPT10080Output> {
    constructor(input: TR_OPT10080Input) {
        super(input, TR_OPT10080Output);
        this.input.tr_code = 'OPT10080';
    }
};

export class TR_OPT10081Input implements ITRInputBase {
    tr_code: string = 'OPT10081';
    '종목코드': string = '';
    '기준일자': string = '';
    '수정주가구분': string = '';
};
export class TR_OPT10081MultiItem {
    '종목코드': string = '';
    '현재가': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가구분': string = '';
    '수정비율': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT10081Output implements ITROutputBase {
    multiT: new () => TR_OPT10081MultiItem;
    multi_items: TR_OPT10081MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10081MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
};
/**
 * 주식일봉차트조회요청
 */
export class TR_OPT10081 extends TRBase<TR_OPT10081Input, TR_OPT10081Output> {
    constructor(input: TR_OPT10081Input) {
        super(input, TR_OPT10081Output);
        this.input.tr_code = 'OPT10081';
    }
};

export class TR_OPT10082Input implements ITRInputBase {
    tr_code: string = 'OPT10082';
    '종목코드': string = '';
    '기준일자': string = '';
    '끝일자': string = '';
    '수정주가구분': string = '';
};
export class TR_OPT10082MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가구분': string = '';
    '수정비율': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT10082Output implements ITROutputBase {
    multiT: new () => TR_OPT10082MultiItem;
    multi_items: TR_OPT10082MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10082MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
};
/**
 * 주식주봉차트조회요청
 */
export class TR_OPT10082 extends TRBase<TR_OPT10082Input, TR_OPT10082Output> {
    constructor(input: TR_OPT10082Input) {
        super(input, TR_OPT10082Output);
        this.input.tr_code = 'OPT10082';
    }
};

export class TR_OPT10083Input implements ITRInputBase {
    tr_code: string = 'OPT10083';
    '종목코드': string = '';
    '기준일자': string = '';
    '끝일자': string = '';
    '수정주가구분': string = '';
};
export class TR_OPT10083MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가구분': string = '';
    '수정비율': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT10083Output implements ITROutputBase {
    multiT: new () => TR_OPT10083MultiItem;
    multi_items: TR_OPT10083MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10083MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
};
/**
 * 주식월봉차트조회요청
 */
export class TR_OPT10083 extends TRBase<TR_OPT10083Input, TR_OPT10083Output> {
    constructor(input: TR_OPT10083Input) {
        super(input, TR_OPT10083Output);
        this.input.tr_code = 'OPT10083';
    }
};

export class TR_OPT10084Input implements ITRInputBase {
    tr_code: string = 'OPT10084';
    '종목코드': string = '';
    '당일전일': string = '';
    '틱분': string = '';
    '시간': string = '';
};
export class TR_OPT10084MultiItem {
    '시간': string = '';
    '현재가': string = '';
    '전일대비': string = '';
    '대비율': string = '';
    '우선매도호가단위': string = '';
    '우선매수호가단위': string = '';
    '체결거래량': string = '';
    'sign': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '체결강도': string = '';
};
export class TR_OPT10084Output implements ITROutputBase {
    multiT: new () => TR_OPT10084MultiItem;
    multi_items: TR_OPT10084MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10084MultiItem; }
    next: boolean = false;
};
/**
 * 당일전일체결요청
 */
export class TR_OPT10084 extends TRBase<TR_OPT10084Input, TR_OPT10084Output> {
    constructor(input: TR_OPT10084Input) {
        super(input, TR_OPT10084Output);
        this.input.tr_code = 'OPT10084';
    }
};

export class TR_OPT10085Input implements ITRInputBase {
    tr_code: string = 'OPT10085';
    '계좌번호': string = '';
};
export class TR_OPT10085MultiItem {
    '일자': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '매입가': string = '';
    '매입금액': string = '';
    '보유수량': string = '';
    '당일매도손익': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '신용구분': string = '';
    '대출일': string = '';
    '결제잔고': string = '';
    '청산가능수량': string = '';
    '신용금액': string = '';
    '신용이자': string = '';
    '만기일': string = '';
};
export class TR_OPT10085Output implements ITROutputBase {
    multiT: new () => TR_OPT10085MultiItem;
    multi_items: TR_OPT10085MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10085MultiItem; }
    next: boolean = false;
};
/**
 * 계좌수익률요청
 */
export class TR_OPT10085 extends TRBase<TR_OPT10085Input, TR_OPT10085Output> {
    constructor(input: TR_OPT10085Input) {
        super(input, TR_OPT10085Output);
        this.input.tr_code = 'OPT10085';
    }
};

export class TR_OPT10086Input implements ITRInputBase {
    tr_code: string = 'OPT10086';
    '종목코드': string = '';
    '조회일자': string = '';
    '표시구분': string = '';
};
export class TR_OPT10086MultiItem {
    '날짜': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '종가': string = '';
    '전일비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '금액(백만)': string = '';
    '신용비': string = '';
    '개인': string = '';
    '기관': string = '';
    '외인수량': string = '';
    '외국계': string = '';
    '프로그램': string = '';
    '외인비': string = '';
    '외인보유': string = '';
    '외인비중': string = '';
    '외인순매수': string = '';
    '기관순매수': string = '';
    '개인순매수': string = '';
    '신용잔고율': string = '';
};
export class TR_OPT10086Output implements ITROutputBase {
    multiT: new () => TR_OPT10086MultiItem;
    multi_items: TR_OPT10086MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10086MultiItem; }
    next: boolean = false;
};
/**
 * 일별주가요청
 */
export class TR_OPT10086 extends TRBase<TR_OPT10086Input, TR_OPT10086Output> {
    constructor(input: TR_OPT10086Input) {
        super(input, TR_OPT10086Output);
        this.input.tr_code = 'OPT10086';
    }
};

export class TR_OPT10087Input implements ITRInputBase {
    tr_code: string = 'OPT10087';
    '종목코드': string = '';
};
export class TR_OPT10087MultiItem {
    '호가잔량기준시간': string = '';
    '시간외단일가_매도호가직전대비5': string = '';
    '시간외단일가_매도호가직전대비4': string = '';
    '시간외단일가_매도호가직전대비3': string = '';
    '시간외단일가_매도호가직전대비2': string = '';
    '시간외단일가_매도호가직전대비1': string = '';
    '시간외단일가_매도호가수량5': string = '';
    '시간외단일가_매도호가수량4': string = '';
    '시간외단일가_매도호가수량3': string = '';
    '시간외단일가_매도호가수량2': string = '';
    '시간외단일가_매도호가수량1': string = '';
    '시간외단일가_매도호가5': string = '';
    '시간외단일가_매도호가4': string = '';
    '시간외단일가_매도호가3': string = '';
    '시간외단일가_매도호가2': string = '';
    '시간외단일가_매도호가1': string = '';
    '시간외단일가_매수호가1': string = '';
    '시간외단일가_매수호가2': string = '';
    '시간외단일가_매수호가3': string = '';
    '시간외단일가_매수호가4': string = '';
    '시간외단일가_매수호가5': string = '';
    '시간외단일가_매수호가수량1': string = '';
    '시간외단일가_매수호가수량2': string = '';
    '시간외단일가_매수호가수량3': string = '';
    '시간외단일가_매수호가수량4': string = '';
    '시간외단일가_매수호가수량5': string = '';
    '시간외단일가_매수호가직전대비1': string = '';
    '시간외단일가_매수호가직전대비2': string = '';
    '시간외단일가_매수호가직전대비3': string = '';
    '시간외단일가_매수호가직전대비4': string = '';
    '시간외단일가_매수호가직전대비5': string = '';
    '시간외단일가_매도호가총잔량': string = '';
    '시간외단일가_매수호가총잔량': string = '';
    '매도호가총잔량직전대비': string = '';
    '매도호가총잔량': string = '';
    '매수호가총잔량': string = '';
    '매수호가총잔량직전대비': string = '';
    '시간외매도호가총잔량직전대비': string = '';
    '시간외매도호가총잔량': string = '';
    '시간외매수호가총잔량': string = '';
    '시간외매수호가총잔량직전대비': string = '';
    '시간외단일가_현재가': string = '';
    '시간외단일가_전일대비기호': string = '';
    '시간외단일가_전일대비': string = '';
    '시간외단일가_등락률': string = '';
    '시간외단일가_누적거래량': string = '';
};
export class TR_OPT10087Output implements ITROutputBase {
    multiT: new () => TR_OPT10087MultiItem;
    multi_items: TR_OPT10087MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10087MultiItem; }
    next: boolean = false;
};
/**
 * 시간외단일가요청
 */
export class TR_OPT10087 extends TRBase<TR_OPT10087Input, TR_OPT10087Output> {
    constructor(input: TR_OPT10087Input) {
        super(input, TR_OPT10087Output);
        this.input.tr_code = 'OPT10087';
    }
};

export class TR_OPT10094Input implements ITRInputBase {
    tr_code: string = 'OPT10094';
    '종목코드': string = '';
    '기준일자': string = '';
    '끝일자': string = '';
    '수정주가구분': string = '';
};
export class TR_OPT10094MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가구분': string = '';
    '수정비율': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT10094Output implements ITROutputBase {
    multiT: new () => TR_OPT10094MultiItem;
    multi_items: TR_OPT10094MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10094MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
};
/**
 * 주식년봉차트조회요청
 */
export class TR_OPT10094 extends TRBase<TR_OPT10094Input, TR_OPT10094Output> {
    constructor(input: TR_OPT10094Input) {
        super(input, TR_OPT10094Output);
        this.input.tr_code = 'OPT10094';
    }
};

export class TR_OPT10098Input implements ITRInputBase {
    tr_code: string = 'OPT10098';
    '시장구분': string = '';
    '정렬기준': string = '';
    '종목조건': string = '';
    '거래량조건': string = '';
    '신용조건': string = '';
    '거래대금': string = '';
};
export class TR_OPT10098MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '매도총잔량': string = '';
    '매수총잔량': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '당일종가': string = '';
    '당일종가등락률': string = '';
};
export class TR_OPT10098Output implements ITROutputBase {
    multiT: new () => TR_OPT10098MultiItem;
    multi_items: TR_OPT10098MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10098MultiItem; }
    next: boolean = false;
};
/**
 * 시간외단일가등락율순위요청
 */
export class TR_OPT10098 extends TRBase<TR_OPT10098Input, TR_OPT10098Output> {
    constructor(input: TR_OPT10098Input) {
        super(input, TR_OPT10098Output);
        this.input.tr_code = 'OPT10098';
    }
};

export class TR_OPT10131Input implements ITRInputBase {
    tr_code: string = 'OPT10131';
    '기간': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '장구분': string = '';
    '순매도수구분': string = '';
    '종목업종구분': string = '';
    '금액수량구분': string = '';
};
export class TR_OPT10131MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '기간중주가등락률': string = '';
    '기관순매매금액': string = '';
    '기관순매매량': string = '';
    '기관계연속순매수일수': string = '';
    '기관계연속순매수량': string = '';
    '기관계연속순매수금액': string = '';
    '외국인순매매량': string = '';
    '외국인순매매액': string = '';
    '외국인연속순매수일수': string = '';
    '외국인연속순매수량': string = '';
    '외국인연속순매수금액': string = '';
    '순매매량': string = '';
    '순매매액': string = '';
    '합계연속순매수일수': string = '';
    '합계연속순매매수량': string = '';
    '합계연속순매수금액': string = '';
};
export class TR_OPT10131Output implements ITROutputBase {
    multiT: new () => TR_OPT10131MultiItem;
    multi_items: TR_OPT10131MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10131MultiItem; }
    next: boolean = false;
};
/**
 * 기관외국인연속매매현황요청
 */
export class TR_OPT10131 extends TRBase<TR_OPT10131Input, TR_OPT10131Output> {
    constructor(input: TR_OPT10131Input) {
        super(input, TR_OPT10131Output);
        this.input.tr_code = 'OPT10131';
    }
};

export class TR_OPT10170Input implements ITRInputBase {
    tr_code: string = 'OPT10170';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '기준일자': string = '';
    '단주구분': string = '';
    '현금신용구분': string = '';
};
export class TR_OPT10170MultiItem {
    '종목명': string = '';
    '매수평균가': string = '';
    '매수수량': string = '';
    '매도평균가': string = '';
    '매도수량': string = '';
    '수수료_제세금': string = '';
    '손익금액': string = '';
    '매도금액': string = '';
    '매수금액': string = '';
    '수익률': string = '';
    '종목코드': string = '';
};
export class TR_OPT10170Output implements ITROutputBase {
    multiT: new () => TR_OPT10170MultiItem;
    multi_items: TR_OPT10170MultiItem[] = [];
    constructor() { this.multiT = TR_OPT10170MultiItem; }
    next: boolean = false;
    '총매도금액': string = '';
    '총매수금액': string = '';
    '총수수료_세금': string = '';
    '총정산금액': string = '';
    '총손익금액': string = '';
    '총수익률': string = '';
};
/**
 * 당일매매일지요청
 */
export class TR_OPT10170 extends TRBase<TR_OPT10170Input, TR_OPT10170Output> {
    constructor(input: TR_OPT10170Input) {
        super(input, TR_OPT10170Output);
        this.input.tr_code = 'OPT10170';
    }
};

export class TR_OPT20001Input implements ITRInputBase {
    tr_code: string = 'OPT20001';
    '시장구분': string = '';
    '업종코드': string = '';
};
export class TR_OPT20001MultiItem {
    '시간n': string = '';
    '현재가n': string = '';
    '전일대비기호n': string = '';
    '전일대비n': string = '';
    '등락률n': string = '';
    '거래량n': string = '';
    '누적거래량n': string = '';
};
export class TR_OPT20001Output implements ITROutputBase {
    multiT: new () => TR_OPT20001MultiItem;
    multi_items: TR_OPT20001MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20001MultiItem; }
    next: boolean = false;
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '거래형성종목수': string = '';
    '거래형성비율': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '상한': string = '';
    '상승': string = '';
    '보합': string = '';
    '하락': string = '';
    '하한': string = '';
    '52주최고가': string = '';
    '52주최고가일': string = '';
    '52주최고가대비율': string = '';
    '52주최저가': string = '';
    '52주최저가일': string = '';
    '52주최저가대비율': string = '';
};
/**
 * 업종현재가요청
 */
export class TR_OPT20001 extends TRBase<TR_OPT20001Input, TR_OPT20001Output> {
    constructor(input: TR_OPT20001Input) {
        super(input, TR_OPT20001Output);
        this.input.tr_code = 'OPT20001';
    }
};

export class TR_OPT20002Input implements ITRInputBase {
    tr_code: string = 'OPT20002';
    '시장구분': string = '';
    '업종코드': string = '';
};
export class TR_OPT20002MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '현재거래량': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
};
export class TR_OPT20002Output implements ITROutputBase {
    multiT: new () => TR_OPT20002MultiItem;
    multi_items: TR_OPT20002MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20002MultiItem; }
    next: boolean = false;
};
/**
 * 업종별주가요청
 */
export class TR_OPT20002 extends TRBase<TR_OPT20002Input, TR_OPT20002Output> {
    constructor(input: TR_OPT20002Input) {
        super(input, TR_OPT20002Output);
        this.input.tr_code = 'OPT20002';
    }
};

export class TR_OPT20003Input implements ITRInputBase {
    tr_code: string = 'OPT20003';
    '업종코드': string = '';
};
export class TR_OPT20003MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '비중': string = '';
    '거래대금': string = '';
    '상한': string = '';
    '상승': string = '';
    '보합': string = '';
    '하락': string = '';
    '하한': string = '';
    '상장종목수': string = '';
};
export class TR_OPT20003Output implements ITROutputBase {
    multiT: new () => TR_OPT20003MultiItem;
    multi_items: TR_OPT20003MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20003MultiItem; }
    next: boolean = false;
};
/**
 * 전업종지수요청
 */
export class TR_OPT20003 extends TRBase<TR_OPT20003Input, TR_OPT20003Output> {
    constructor(input: TR_OPT20003Input) {
        super(input, TR_OPT20003Output);
        this.input.tr_code = 'OPT20003';
    }
};

export class TR_OPT20004Input implements ITRInputBase {
    tr_code: string = 'OPT20004';
    '업종코드': string = '';
    '틱범위': string = '';
};
export class TR_OPT20004MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '전일종가': string = '';
};
export class TR_OPT20004Output implements ITROutputBase {
    multiT: new () => TR_OPT20004MultiItem;
    multi_items: TR_OPT20004MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20004MultiItem; }
    next: boolean = false;
    '업종코드': string = '';
};
/**
 * 업종틱차트조회요청
 */
export class TR_OPT20004 extends TRBase<TR_OPT20004Input, TR_OPT20004Output> {
    constructor(input: TR_OPT20004Input) {
        super(input, TR_OPT20004Output);
        this.input.tr_code = 'OPT20004';
    }
};

export class TR_OPT20005Input implements ITRInputBase {
    tr_code: string = 'OPT20005';
    '업종코드': string = '';
    '틱범위': string = '';
};
export class TR_OPT20005MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '전일종가': string = '';
};
export class TR_OPT20005Output implements ITROutputBase {
    multiT: new () => TR_OPT20005MultiItem;
    multi_items: TR_OPT20005MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20005MultiItem; }
    next: boolean = false;
    '업종코드': string = '';
};
/**
 * 업종분봉조회요청
 */
export class TR_OPT20005 extends TRBase<TR_OPT20005Input, TR_OPT20005Output> {
    constructor(input: TR_OPT20005Input) {
        super(input, TR_OPT20005Output);
        this.input.tr_code = 'OPT20005';
    }
};

export class TR_OPT20006Input implements ITRInputBase {
    tr_code: string = 'OPT20006';
    '업종코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT20006MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '거래대금': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '전일종가': string = '';
};
export class TR_OPT20006Output implements ITROutputBase {
    multiT: new () => TR_OPT20006MultiItem;
    multi_items: TR_OPT20006MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20006MultiItem; }
    next: boolean = false;
    '업종코드': string = '';
};
/**
 * 업종일봉조회요청
 */
export class TR_OPT20006 extends TRBase<TR_OPT20006Input, TR_OPT20006Output> {
    constructor(input: TR_OPT20006Input) {
        super(input, TR_OPT20006Output);
        this.input.tr_code = 'OPT20006';
    }
};

export class TR_OPT20007Input implements ITRInputBase {
    tr_code: string = 'OPT20007';
    '업종코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT20007MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '거래대금': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '전일종가': string = '';
};
export class TR_OPT20007Output implements ITROutputBase {
    multiT: new () => TR_OPT20007MultiItem;
    multi_items: TR_OPT20007MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20007MultiItem; }
    next: boolean = false;
    '업종코드': string = '';
};
/**
 * 업종주봉조회요청
 */
export class TR_OPT20007 extends TRBase<TR_OPT20007Input, TR_OPT20007Output> {
    constructor(input: TR_OPT20007Input) {
        super(input, TR_OPT20007Output);
        this.input.tr_code = 'OPT20007';
    }
};

export class TR_OPT20008Input implements ITRInputBase {
    tr_code: string = 'OPT20008';
    '업종코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT20008MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '거래대금': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '전일종가': string = '';
};
export class TR_OPT20008Output implements ITROutputBase {
    multiT: new () => TR_OPT20008MultiItem;
    multi_items: TR_OPT20008MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20008MultiItem; }
    next: boolean = false;
    '업종코드': string = '';
};
/**
 * 업종월봉조회요청
 */
export class TR_OPT20008 extends TRBase<TR_OPT20008Input, TR_OPT20008Output> {
    constructor(input: TR_OPT20008Input) {
        super(input, TR_OPT20008Output);
        this.input.tr_code = 'OPT20008';
    }
};

export class TR_OPT20009Input implements ITRInputBase {
    tr_code: string = 'OPT20009';
    '시장구분': string = '';
    '업종코드': string = '';
};
export class TR_OPT20009MultiItem {
    '일자n': string = '';
    '현재가n': string = '';
    '전일대비기호n': string = '';
    '전일대비n': string = '';
    '등락률n': string = '';
    '누적거래량n': string = '';
};
export class TR_OPT20009Output implements ITROutputBase {
    multiT: new () => TR_OPT20009MultiItem;
    multi_items: TR_OPT20009MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20009MultiItem; }
    next: boolean = false;
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '거래형성종목수': string = '';
    '거래형성비율': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '상한': string = '';
    '상승': string = '';
    '보합': string = '';
    '하락': string = '';
    '하한': string = '';
    '52주최고가': string = '';
    '52주최고가일': string = '';
    '52주최고가대비율': string = '';
    '52주최저가': string = '';
    '52주최저가일': string = '';
    '52주최저가대비율': string = '';
};
/**
 * 업종현재가일별요청
 */
export class TR_OPT20009 extends TRBase<TR_OPT20009Input, TR_OPT20009Output> {
    constructor(input: TR_OPT20009Input) {
        super(input, TR_OPT20009Output);
        this.input.tr_code = 'OPT20009';
    }
};

export class TR_OPT20019Input implements ITRInputBase {
    tr_code: string = 'OPT20019';
    '업종코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT20019MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '거래대금': string = '';
    '대업종구분': string = '';
    '소업종구분': string = '';
    '종목정보': string = '';
    '전일종가': string = '';
};
export class TR_OPT20019Output implements ITROutputBase {
    multiT: new () => TR_OPT20019MultiItem;
    multi_items: TR_OPT20019MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20019MultiItem; }
    next: boolean = false;
    '업종코드': string = '';
};
/**
 * 업종년봉조회요청
 */
export class TR_OPT20019 extends TRBase<TR_OPT20019Input, TR_OPT20019Output> {
    constructor(input: TR_OPT20019Input) {
        super(input, TR_OPT20019Output);
        this.input.tr_code = 'OPT20019';
    }
};

export class TR_OPT20068Input implements ITRInputBase {
    tr_code: string = 'OPT20068';
    '시작일자': string = '';
    '종료일자': string = '';
    '전체구분': string = '';
    '종목코드': string = '';
};
export class TR_OPT20068MultiItem {
    '일자': string = '';
    '대차거래체결주수': string = '';
    '대차거래상환주수': string = '';
    '대차거래증감': string = '';
    '잔고주수': string = '';
    '잔고금액': string = '';
};
export class TR_OPT20068Output implements ITROutputBase {
    multiT: new () => TR_OPT20068MultiItem;
    multi_items: TR_OPT20068MultiItem[] = [];
    constructor() { this.multiT = TR_OPT20068MultiItem; }
    next: boolean = false;
};
/**
 * 대차거래추이요청(종목별)
 */
export class TR_OPT20068 extends TRBase<TR_OPT20068Input, TR_OPT20068Output> {
    constructor(input: TR_OPT20068Input) {
        super(input, TR_OPT20068Output);
        this.input.tr_code = 'OPT20068';
    }
};

export class TR_OPT30001Input implements ITRInputBase {
    tr_code: string = 'OPT30001';
    '등락구분': string = '';
    '시간구분': string = '';
    '시간': string = '';
    '거래량구분': string = '';
    '발행사코드': string = '';
    '기초자산코드': string = '';
    '권리구분': string = '';
    'LP코드': string = '';
    '거래종료ELW제외': string = '';
};
export class TR_OPT30001MultiItem {
    '종목코드': string = '';
    '순위': string = '';
    '종목명': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '거래종료ELW기준가': string = '';
    '현재가': string = '';
    '기준대비': string = '';
    '거래량': string = '';
    '급등율': string = '';
};
export class TR_OPT30001Output implements ITROutputBase {
    multiT: new () => TR_OPT30001MultiItem;
    multi_items: TR_OPT30001MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30001MultiItem; }
    next: boolean = false;
    '기준가시간': string = '';
};
/**
 * ELW가격급등락요청
 */
export class TR_OPT30001 extends TRBase<TR_OPT30001Input, TR_OPT30001Output> {
    constructor(input: TR_OPT30001Input) {
        super(input, TR_OPT30001Output);
        this.input.tr_code = 'OPT30001';
    }
};

export class TR_OPT30002Input implements ITRInputBase {
    tr_code: string = 'OPT30002';
    '발행사코드': string = '';
    '거래량구분': string = '';
    '매매구분': string = '';
    '기간': string = '';
    '거래종료ELW제외': string = '';
};
export class TR_OPT30002MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '주가등락': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '순매수': string = '';
    '매수거래량': string = '';
    '매도거래량': string = '';
};
export class TR_OPT30002Output implements ITROutputBase {
    multiT: new () => TR_OPT30002MultiItem;
    multi_items: TR_OPT30002MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30002MultiItem; }
    next: boolean = false;
};
/**
 * 거래원별ELW순매매상위요청
 */
export class TR_OPT30002 extends TRBase<TR_OPT30002Input, TR_OPT30002Output> {
    constructor(input: TR_OPT30002Input) {
        super(input, TR_OPT30002Output);
        this.input.tr_code = 'OPT30002';
    }
};

export class TR_OPT30003Input implements ITRInputBase {
    tr_code: string = 'OPT30003';
    '기초자산코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT30003MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '대비구분': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '변동수량': string = '';
    'LP보유수량': string = '';
    '비중': string = '';
};
export class TR_OPT30003Output implements ITROutputBase {
    multiT: new () => TR_OPT30003MultiItem;
    multi_items: TR_OPT30003MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30003MultiItem; }
    next: boolean = false;
};
/**
 * ELWLP보유일별추이요청
 */
export class TR_OPT30003 extends TRBase<TR_OPT30003Input, TR_OPT30003Output> {
    constructor(input: TR_OPT30003Input) {
        super(input, TR_OPT30003Output);
        this.input.tr_code = 'OPT30003';
    }
};

export class TR_OPT30004Input implements ITRInputBase {
    tr_code: string = 'OPT30004';
    '발행사코드': string = '';
    '기초자산코드': string = '';
    '권리구분': string = '';
    'LP코드': string = '';
    '거래종료ELW제외': string = '';
};
export class TR_OPT30004MultiItem {
    '종목코드': string = '';
    '발행사명': string = '';
    '회차': string = '';
    '기초자산명': string = '';
    '권리구분': string = '';
    '괴리율': string = '';
    '베이시스': string = '';
    '잔존일수': string = '';
    '이론가': string = '';
    '현재가': string = '';
    '대비구분': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '종목명': string = '';
};
export class TR_OPT30004Output implements ITROutputBase {
    multiT: new () => TR_OPT30004MultiItem;
    multi_items: TR_OPT30004MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30004MultiItem; }
    next: boolean = false;
};
/**
 * ELW괴리율요청
 */
export class TR_OPT30004 extends TRBase<TR_OPT30004Input, TR_OPT30004Output> {
    constructor(input: TR_OPT30004Input) {
        super(input, TR_OPT30004Output);
        this.input.tr_code = 'OPT30004';
    }
};

export class TR_OPT30005Input implements ITRInputBase {
    tr_code: string = 'OPT30005';
    '발행사코드': string = '';
    '기초자산코드': string = '';
    '권리구분': string = '';
    'LP코드': string = '';
    '정렬구분': string = '';
};
export class TR_OPT30005MultiItem {
    '종목코드': string = '';
    '발행사명': string = '';
    '회차': string = '';
    '기초자산명': string = '';
    '권리구분': string = '';
    '만기일': string = '';
    '현재가': string = '';
    '대비구분': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '거래량대비': string = '';
    '거래대금': string = '';
    '전일거래량': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '패리티': string = '';
    '기어링비율': string = '';
    '손익분기율': string = '';
    '자본지지점': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '델타': string = '';
    '레버리지': string = '';
    '행사가격': string = '';
    '전환비율': string = '';
    'LP보유비율': string = '';
    '손익분기점': string = '';
    '최종거래일': string = '';
    '상장일': string = '';
    'LP초종공급일': string = '';
    '종목명': string = '';
    '잔존일수': string = '';
    '괴리율': string = '';
    'LP회원사명': string = '';
    'LP회원사명1': string = '';
    'LP회원사명2': string = '';
    'Xray순간체결량정리매매구분': string = '';
    'Xray순간체결량증거금100구분': string = '';
};
export class TR_OPT30005Output implements ITROutputBase {
    multiT: new () => TR_OPT30005MultiItem;
    multi_items: TR_OPT30005MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30005MultiItem; }
    next: boolean = false;
};
/**
 * ELW조건검색요청
 */
export class TR_OPT30005 extends TRBase<TR_OPT30005Input, TR_OPT30005Output> {
    constructor(input: TR_OPT30005Input) {
        super(input, TR_OPT30005Output);
        this.input.tr_code = 'OPT30005';
    }
};

export class TR_OPT30006Input implements ITRInputBase {
    tr_code: string = 'OPT30006';
    '종목코드': string = '';
};
export class TR_OPT30006Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '조기종료여부': string = '';
    '이론가': string = '';
    '괴리율': string = '';
    '내재변동성': string = '';
    '손익분기율': string = '';
    '행사가격': string = '';
    '전환비율': string = '';
    '보상율': string = '';
    '가격상승참여율': string = '';
    '권리유형': string = '';
    '잔존일수': string = '';
    '주식수': string = '';
    'LP보유비율': string = '';
    'LP보유수량': string = '';
    '스프레드': string = '';
    '패리티': string = '';
    '기어링비율': string = '';
    '상장일': string = '';
    '최종거래일': string = '';
    '신주인수권행사종료일': string = '';
    '신주인수권행사게시일': string = '';
    'LP최종공급일': string = '';
    '지급일': string = '';
    '투자지표산출여부': string = '';
    '지급대리인': string = '';
    '결제방법': string = '';
    '권리행사방식': string = '';
    '한글발행기관명': string = '';
    '확정지급금액': string = '';
    'KO베리어': string = '';
    'XRay순간체결량증거금100%구분': string = '';
    '기초자산1': string = '';
    '기초자산구성비율1': string = '';
    '기초자산2': string = '';
    '기초자산구성비율2': string = '';
    '기초자산3': string = '';
    '기초자산구성비율3': string = '';
    '기초자산4': string = '';
    '기초자산구성비율4': string = '';
    '기초자산5': string = '';
    '기초자산구성비율5': string = '';
    '권리내용': string = '';
    '만기평가가격방식': string = '';
    '평가방식': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '기초자산종목코드': string = '';
    '기초자산명': string = '';
    'LP회원사명1': string = '';
    'LP회원사명4': string = '';
    'LP회원사명2': string = '';
    '평가시작일자': string = '';
    '평가종료일자': string = '';
    '예상평가가격': string = '';
    '평가와뇰여부': string = '';
    '평가시작시간': string = '';
    '평가종료시간': string = '';
    '평가기간최고가': string = '';
    '평가기간최저가': string = '';
    'XRay순간체결량체결구분': string = '';
    'XRay순간체결량동시구분': string = '';
    'XRay순간체결량관리구분': string = '';
    'XRay순간체결량투자유의구분': string = '';
};
/**
 * ELW종목상세요청
 */
export class TR_OPT30006 extends TRBase<TR_OPT30006Input, TR_OPT30006Output> {
    constructor(input: TR_OPT30006Input) {
        super(input, TR_OPT30006Output);
        this.input.tr_code = 'OPT30006';
    }
};

export class TR_OPT30007Input implements ITRInputBase {
    tr_code: string = 'OPT30007';
    '발행사코드': string = '';
    '기초자산코드': string = '';
    '권리구분': string = '';
    'LP코드': string = '';
    '정렬구분': string = '';
    '거래종료ELW제외': string = '';
};
export class TR_OPT30007MultiItem {
    '기초자산코드': string = '';
    '발행사명': string = '';
    '회차': string = '';
    '기초자산명': string = '';
    '콜풋구분': string = '';
    '신주인수권행사종료일': string = '';
    '잔존일수': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '거래량대비': string = '';
    '누적거래대금': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '패리티': string = '';
    '기어링비율': string = '';
    '손익분기율': string = '';
    '자본지지점': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '델타': string = '';
    '레버리지': string = '';
    'LP보유비율': string = '';
    '행사가격': string = '';
    '전환비율': string = '';
    '최종거래일': string = '';
    '종목명': string = '';
    '조기종료여부': string = '';
    'KO접근도': string = '';
};
export class TR_OPT30007Output implements ITROutputBase {
    multiT: new () => TR_OPT30007MultiItem;
    multi_items: TR_OPT30007MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30007MultiItem; }
    next: boolean = false;
};
/**
 * ELW종목상세요청
 */
export class TR_OPT30007 extends TRBase<TR_OPT30007Input, TR_OPT30007Output> {
    constructor(input: TR_OPT30007Input) {
        super(input, TR_OPT30007Output);
        this.input.tr_code = 'OPT30007';
    }
};

export class TR_OPT30008Input implements ITRInputBase {
    tr_code: string = 'OPT30008';
    '종목코드': string = '';
};
export class TR_OPT30008MultiItem {
    '체결시간': string = '';
    '내재변동성': string = '';
    '델타': string = '';
    '감마': string = '';
    '쎄타': string = '';
    '베가': string = '';
    '로': string = '';
    'X-Ray순간체결량증거금100%구분': string = '';
};
export class TR_OPT30008Output implements ITROutputBase {
    multiT: new () => TR_OPT30008MultiItem;
    multi_items: TR_OPT30008MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30008MultiItem; }
    next: boolean = false;
};
/**
 * ELW민감도지표요청
 */
export class TR_OPT30008 extends TRBase<TR_OPT30008Input, TR_OPT30008Output> {
    constructor(input: TR_OPT30008Input) {
        super(input, TR_OPT30008Output);
        this.input.tr_code = 'OPT30008';
    }
};

export class TR_OPT30009Input implements ITRInputBase {
    tr_code: string = 'OPT30009';
    '정렬구분': string = '';
    '권리구분': string = '';
    '거래종료제외': string = '';
};
export class TR_OPT30009MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '매도잔량': string = '';
    '매수잔량': string = '';
    '거래량': string = '';
    '거래대금': string = '';
};
export class TR_OPT30009Output implements ITROutputBase {
    multiT: new () => TR_OPT30009MultiItem;
    multi_items: TR_OPT30009MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30009MultiItem; }
    next: boolean = false;
};
/**
 * ELW등락율순위요청
 */
export class TR_OPT30009 extends TRBase<TR_OPT30009Input, TR_OPT30009Output> {
    constructor(input: TR_OPT30009Input) {
        super(input, TR_OPT30009Output);
        this.input.tr_code = 'OPT30009';
    }
};

export class TR_OPT30010Input implements ITRInputBase {
    tr_code: string = 'OPT30010';
    '정렬구분': string = '';
    '권리구분': string = '';
    '거래종료제외': string = '';
};
export class TR_OPT30010MultiItem {
    '종목코드': string = '';
    '순위': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락률': string = '';
    '거래량': string = '';
    '매도잔량': string = '';
    '매수잔량': string = '';
    '순매수잔량': string = '';
    '거래대금': string = '';
};
export class TR_OPT30010Output implements ITROutputBase {
    multiT: new () => TR_OPT30010MultiItem;
    multi_items: TR_OPT30010MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30010MultiItem; }
    next: boolean = false;
};
/**
 * ELW잔량순위요청
 */
export class TR_OPT30010 extends TRBase<TR_OPT30010Input, TR_OPT30010Output> {
    constructor(input: TR_OPT30010Input) {
        super(input, TR_OPT30010Output);
        this.input.tr_code = 'OPT30010';
    }
};

export class TR_OPT30011Input implements ITRInputBase {
    tr_code: string = 'OPT30011';
    '종목코드': string = '';
};
export class TR_OPT30011MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '근접율': string = '';
};
export class TR_OPT30011Output implements ITROutputBase {
    multiT: new () => TR_OPT30011MultiItem;
    multi_items: TR_OPT30011MultiItem[] = [];
    constructor() { this.multiT = TR_OPT30011MultiItem; }
    next: boolean = false;
};
/**
 * ELW근접율요청
 */
export class TR_OPT30011 extends TRBase<TR_OPT30011Input, TR_OPT30011Output> {
    constructor(input: TR_OPT30011Input) {
        super(input, TR_OPT30011Output);
        this.input.tr_code = 'OPT30011';
    }
};

export class TR_OPT30012Input implements ITRInputBase {
    tr_code: string = 'OPT30012';
    '종목코드': string = '';
};
export class TR_OPT30012Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '자산코드': string = '';
    '현재가': string = '';
    '전일대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    'LP회원사명': string = '';
    'LP회원사명1': string = '';
    'LP회원사명2': string = '';
    'ELW권리내용': string = '';
    'ELW만기평가가격': string = '';
    'ELW이론가': string = '';
    '괴리율': string = '';
    'ELW내재변동성': string = '';
    '예상권리가': string = '';
    'ELW손익분기율': string = '';
    'ELW행사가': string = '';
    'ELW전환비율': string = '';
    'ELW보상율': string = '';
    'ELW가격상승참여율': string = '';
    'ELW권리유형': string = '';
    'ELW잔존일수': string = '';
    '주식수': string = '';
    'ELW LP주문가능': string = '';
    'LP보유비율': string = '';
    'LP보유수량': string = '';
    'ELW스프레드': string = '';
    'ELW패리티': string = '';
    'ELW기어링': string = '';
    'ELW상장일': string = '';
    'ELW최종거래일': string = '';
    '만기일': string = '';
    '행사일': string = '';
    'LP공급종료일': string = '';
    'ELW지급일': string = '';
    'ELW투자지표산출': string = '';
    'ELW지급대리인': string = '';
    'ELW결재방법': string = '';
    'ELW권리행사방식': string = '';
    'ELW발행기관': string = '';
    '확정지급액': string = '';
    'KO베리어': string = '';
    'IV': string = '';
    '종기종료ELW발생': string = '';
    '기초자산1': string = '';
    '기초자산구성비율1': string = '';
    '기초자산2': string = '';
    '기초자산구성비율2': string = '';
    '기초자산3': string = '';
    '기초자산구성비율3': string = '';
    '기초자산4': string = '';
    '기초자산구성비율4': string = '';
    '기초자산5': string = '';
    '기초자산구성비율5': string = '';
    '평가시작일자': string = '';
    '평가종료일자': string = '';
    '평가시작시간': string = '';
    '평가종료시간': string = '';
    '평가가격': string = '';
    '평가완료여부': string = '';
    '전체최고가': string = '';
    '전체최저가': string = '';
    '직후최고가': string = '';
    '직후최저가': string = '';
    '후반장최고가': string = '';
    '후반장최저가': string = '';
};
/**
 * ELW종목상세정보요청
 */
export class TR_OPT30012 extends TRBase<TR_OPT30012Input, TR_OPT30012Output> {
    constructor(input: TR_OPT30012Input) {
        super(input, TR_OPT30012Output);
        this.input.tr_code = 'OPT30012';
    }
};

export class TR_OPT40001Input implements ITRInputBase {
    tr_code: string = 'OPT40001';
    '종목코드': string = '';
    '모름': string = '';
    '기간': string = '';
};
export class TR_OPT40001MultiItem {
    'ETF수익률': string = '';
    '체결수익률': string = '';
    '외인순매수수량': string = '';
    '기관순매수수량': string = '';
};
export class TR_OPT40001Output implements ITROutputBase {
    multiT: new () => TR_OPT40001MultiItem;
    multi_items: TR_OPT40001MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40001MultiItem; }
    next: boolean = false;
};
/**
 * ETF수익율요청
 */
export class TR_OPT40001 extends TRBase<TR_OPT40001Input, TR_OPT40001Output> {
    constructor(input: TR_OPT40001Input) {
        super(input, TR_OPT40001Output);
        this.input.tr_code = 'OPT40001';
    }
};

export class TR_OPT40002Input implements ITRInputBase {
    tr_code: string = 'OPT40002';
    '종목코드': string = '';
};
export class TR_OPT40002Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '종목명': string = '';
    'ETF대상지수명': string = '';
    '원주가격': string = '';
    'ETF과세유형': string = '';
    'ETN과세유형': string = '';
};
/**
 * ETF종목정보요청
 */
export class TR_OPT40002 extends TRBase<TR_OPT40002Input, TR_OPT40002Output> {
    constructor(input: TR_OPT40002Input) {
        super(input, TR_OPT40002Output);
        this.input.tr_code = 'OPT40002';
    }
};

export class TR_OPT40003Input implements ITRInputBase {
    tr_code: string = 'OPT40003';
    '종목코드': string = '';
};
export class TR_OPT40003MultiItem {
    '체결일자': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '대비율': string = '';
    '거래량': string = '';
    'NAV': string = '';
    '누적거래대금': string = '';
    'NAV/지수괴리율': string = '';
    'NAV/ETF괴리율': string = '';
    '추적오차율': string = '';
    '추적현재가': string = '';
    '추적전일대비': string = '';
    '추적대비기호': string = '';
};
export class TR_OPT40003Output implements ITROutputBase {
    multiT: new () => TR_OPT40003MultiItem;
    multi_items: TR_OPT40003MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40003MultiItem; }
    next: boolean = false;
};
/**
 * ETF일별추이요청
 */
export class TR_OPT40003 extends TRBase<TR_OPT40003Input, TR_OPT40003Output> {
    constructor(input: TR_OPT40003Input) {
        super(input, TR_OPT40003Output);
        this.input.tr_code = 'OPT40003';
    }
};

export class TR_OPT40004Input implements ITRInputBase {
    tr_code: string = 'OPT40004';
    '과세유형': string = '';
    'NAV대비': string = '';
    '운용사': string = '';
    '과세여부': string = '';
    '추적지수': string = '';
};
export class TR_OPT40004MultiItem {
    '종목코드': string = '';
    '종목분류': string = '';
    '종목명': string = '';
    '종가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '대비율': string = '';
    '거래량': string = '';
    'NAV': string = '';
    '추적오차율': string = '';
    '과표기준': string = '';
    '배당전기준': string = '';
    '전일배당금': string = '';
    '추적지수명': string = '';
    '배수': string = '';
    '추적지수코드': string = '';
    '추적지수': string = '';
    '추적등락율': string = '';
};
export class TR_OPT40004Output implements ITROutputBase {
    multiT: new () => TR_OPT40004MultiItem;
    multi_items: TR_OPT40004MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40004MultiItem; }
    next: boolean = false;
};
/**
 * ETF전체시세요청
 */
export class TR_OPT40004 extends TRBase<TR_OPT40004Input, TR_OPT40004Output> {
    constructor(input: TR_OPT40004Input) {
        super(input, TR_OPT40004Output);
        this.input.tr_code = 'OPT40004';
    }
};

export class TR_OPT40005Input implements ITRInputBase {
    tr_code: string = 'OPT40005';
    '종목코드': string = '';
};
export class TR_OPT40005MultiItem {
    '체결시간': string = '';
    '종가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '대비율': string = '';
    '거래량': string = '';
    'NAV': string = '';
    '누적거래대금': string = '';
    'NAV/지수괴리율': string = '';
    'NAV/ETF괴리율': string = '';
    '추적오차율': string = '';
    '추적지수': string = '';
    '추적대비기호': string = '';
    '추적전일대비': string = '';
};
export class TR_OPT40005Output implements ITROutputBase {
    multiT: new () => TR_OPT40005MultiItem;
    multi_items: TR_OPT40005MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40005MultiItem; }
    next: boolean = false;
};
/**
 * ETF일별추이요청
 */
export class TR_OPT40005 extends TRBase<TR_OPT40005Input, TR_OPT40005Output> {
    constructor(input: TR_OPT40005Input) {
        super(input, TR_OPT40005Output);
        this.input.tr_code = 'OPT40005';
    }
};

export class TR_OPT40006Input implements ITRInputBase {
    tr_code: string = 'OPT40006';
    '종목코드': string = '';
};
export class TR_OPT40006MultiItem {
    '시간': string = '';
    '종가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    'NAV': string = '';
    '거래대금': string = '';
    'NAV지수': string = '';
    'NAVETF': string = '';
    '추적': string = '';
    '추적지수': string = '';
    '추적지수전일대비': string = '';
    '추적지수전일대비기호': string = '';
};
export class TR_OPT40006Output implements ITROutputBase {
    multiT: new () => TR_OPT40006MultiItem;
    multi_items: TR_OPT40006MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40006MultiItem; }
    next: boolean = false;
    '종목명': string = '';
    'ETF대상지수명': string = '';
    '원주가격': string = '';
    'ETF과세유형': string = '';
    'ETN과세유형': string = '';
};
/**
 * ETF시간대별추이요청
 */
export class TR_OPT40006 extends TRBase<TR_OPT40006Input, TR_OPT40006Output> {
    constructor(input: TR_OPT40006Input) {
        super(input, TR_OPT40006Output);
        this.input.tr_code = 'OPT40006';
    }
};

export class TR_OPT40007Input implements ITRInputBase {
    tr_code: string = 'OPT40007';
    '종목코드': string = '';
};
export class TR_OPT40007MultiItem {
    '체결시간': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
};
export class TR_OPT40007Output implements ITROutputBase {
    multiT: new () => TR_OPT40007MultiItem;
    multi_items: TR_OPT40007MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40007MultiItem; }
    next: boolean = false;
    '종목분류': string = '';
    '종목명': string = '';
    'ETF대상지수명': string = '';
    'ETF대상지수코드': string = '';
    '대상지수대비율': string = '';
    '원주가격': string = '';
};
/**
 * ETF시간대별체결요청
 */
export class TR_OPT40007 extends TRBase<TR_OPT40007Input, TR_OPT40007Output> {
    constructor(input: TR_OPT40007Input) {
        super(input, TR_OPT40007Output);
        this.input.tr_code = 'OPT40007';
    }
};

export class TR_OPT40008Input implements ITRInputBase {
    tr_code: string = 'OPT40008';
    '종목코드': string = '';
};
export class TR_OPT40008MultiItem {
    '일자': string = '';
    '현재가n': string = '';
    '대비기호n': string = '';
    '전일대비n': string = '';
    '누적거래량': string = '';
    '외인순매수수량': string = '';
    '기관순매수수량': string = '';
};
export class TR_OPT40008Output implements ITROutputBase {
    multiT: new () => TR_OPT40008MultiItem;
    multi_items: TR_OPT40008MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40008MultiItem; }
    next: boolean = false;
    '체결시간': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
};
/**
 * ETF일자별체결요청
 */
export class TR_OPT40008 extends TRBase<TR_OPT40008Input, TR_OPT40008Output> {
    constructor(input: TR_OPT40008Input) {
        super(input, TR_OPT40008Output);
        this.input.tr_code = 'OPT40008';
    }
};

export class TR_OPT40009Input implements ITRInputBase {
    tr_code: string = 'OPT40009';
    '종목코드': string = '';
};
export class TR_OPT40009MultiItem {
    'NAV': string = '';
    'NAV전일대비': string = '';
    'NAV등락율': string = '';
    '추적오차율': string = '';
    '괴리율': string = '';
    '주식수': string = '';
    '기준가': string = '';
    '외인보유수량': string = '';
    '대용가': string = '';
    '모름': string = '';
    '환산가격': string = '';
    'DR/주': string = '';
    '원주가격': string = '';
};
export class TR_OPT40009Output implements ITROutputBase {
    multiT: new () => TR_OPT40009MultiItem;
    multi_items: TR_OPT40009MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40009MultiItem; }
    next: boolean = false;
};
/**
 * ETF시간대별체결요청
 */
export class TR_OPT40009 extends TRBase<TR_OPT40009Input, TR_OPT40009Output> {
    constructor(input: TR_OPT40009Input) {
        super(input, TR_OPT40009Output);
        this.input.tr_code = 'OPT40009';
    }
};

export class TR_OPT40010Input implements ITRInputBase {
    tr_code: string = 'OPT40010';
    '종목코드': string = '';
};
export class TR_OPT40010MultiItem {
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '거래량': string = '';
    '외인순매수': string = '';
};
export class TR_OPT40010Output implements ITROutputBase {
    multiT: new () => TR_OPT40010MultiItem;
    multi_items: TR_OPT40010MultiItem[] = [];
    constructor() { this.multiT = TR_OPT40010MultiItem; }
    next: boolean = false;
};
/**
 * ETF시간대별추이요청
 */
export class TR_OPT40010 extends TRBase<TR_OPT40010Input, TR_OPT40010Output> {
    constructor(input: TR_OPT40010Input) {
        super(input, TR_OPT40010Output);
        this.input.tr_code = 'OPT40010';
    }
};

export class TR_OPT50001Input implements ITRInputBase {
    tr_code: string = 'OPT50001';
    '종목코드': string = '';
};
export class TR_OPT50001MultiItem {
    '체결시간': string = '';
    '현재가n': string = '';
    '대비기호n': string = '';
    '전일대비n': string = '';
    '체결량': string = '';
    '미결제약정n': string = '';
    '코스피200': string = '';
    '시장베이시스n': string = '';
    '역사적변동성': string = '';
    '표면이자': string = '';
    '배당액지수': string = '';
    '기준가n': string = '';
    '등락율n': string = '';
    '누적거래량': string = '';
};
export class TR_OPT50001Output implements ITROutputBase {
    multiT: new () => TR_OPT50001MultiItem;
    multi_items: TR_OPT50001MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50001MultiItem; }
    next: boolean = false;
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '거래량대비': string = '';
    '기준가': string = '';
    '이론가': string = '';
    '이론베이시스': string = '';
    '괴리도': string = '';
    '괴리율': string = '';
    '시장베이시스': string = '';
    '누적거래대금': string = '';
    '상한가': string = '';
    '하한가': string = '';
    'CB상한가': string = '';
    'CB하한가': string = '';
    '대용가': string = '';
    '최종거래일': string = '';
    '잔존일수': string = '';
    '영업일기준잔존일': string = '';
    '상장중최고가': string = '';
    '상장중최고가대비율': string = '';
    '상장중최고가일': string = '';
    '상장중최저가': string = '';
    '상장중최저가대비율': string = '';
    '상장중최저가일': string = '';
    '종목명': string = '';
    '호가시간': string = '';
    '매도수익율5': string = '';
    '매도건수5': string = '';
    '매도수량5': string = '';
    '매도수익율4': string = '';
    '매도건수4': string = '';
    '매도수량4': string = '';
    '매도호가4': string = '';
    '매도호가5': string = '';
    '매도수익율3': string = '';
    '매도건수3': string = '';
    '매도수량3': string = '';
    '매도호가3': string = '';
    '매도수익율2': string = '';
    '매도건수2': string = '';
    '매도수량2': string = '';
    '매도호가2': string = '';
    '매도수익율1': string = '';
    '매도건수1': string = '';
    '매도수량1': string = '';
    '매도호가1': string = '';
    '매수호가1': string = '';
    '매수수량1': string = '';
    '매수건수1': string = '';
    '매수수익율1': string = '';
    '매수호가2': string = '';
    '매수수량2': string = '';
    '매수건수2': string = '';
    '매수수익율2': string = '';
    '매수호가3': string = '';
    '매수수량3': string = '';
    '매수건수3': string = '';
    '매수수익율3': string = '';
    '매수호가4': string = '';
    '매수수량4': string = '';
    '매수건수4': string = '';
    '매수수익율4': string = '';
    '매수호가5': string = '';
    '매수수량5': string = '';
    '매수건수5': string = '';
    '매수수익율5': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '2차저항': string = '';
    '1차저항': string = '';
    '피봇': string = '';
    '1차저지': string = '';
    '2차저지': string = '';
    '미결제약정': string = '';
    '미결제약정전일대비': string = '';
    '매도호가총건수': string = '';
    '매도호가총잔량': string = '';
    '순매수잔량': string = '';
    '매수호가총잔량': string = '';
    '매수호가총건수': string = '';
    '매도호가총잔량직전대비': string = '';
    '매수호가총잔량직전대비': string = '';
    '예상체결가': string = '';
    '예상체결가전일종가대비기호': string = '';
    '예상체결가전일종가대비': string = '';
    '예상체결가전일종가대비등락율': string = '';
    '이자율': string = '';
};
/**
 * 선옵현재가정보요청
 */
export class TR_OPT50001 extends TRBase<TR_OPT50001Input, TR_OPT50001Output> {
    constructor(input: TR_OPT50001Input) {
        super(input, TR_OPT50001Output);
        this.input.tr_code = 'OPT50001';
    }
};

export class TR_OPT50002Input implements ITRInputBase {
    tr_code: string = 'OPT50002';
    '종목코드': string = '';
};
export class TR_OPT50002MultiItem {
    '체결일자': string = '';
    '현재가n': string = '';
    '대비기호n': string = '';
    '전일대비n': string = '';
    '등락율n': string = '';
    '거래량': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '예상체결가': string = '';
    '미결제약정': string = '';
    '예상체결가전일종가대비기호': string = '';
    '예상체결가전일종가대비': string = '';
    '예상체결가전일종가대비등락율': string = '';
};
export class TR_OPT50002Output implements ITROutputBase {
    multiT: new () => TR_OPT50002MultiItem;
    multi_items: TR_OPT50002MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50002MultiItem; }
    next: boolean = false;
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
};
/**
 * 선옵일자별체결요청
 */
export class TR_OPT50002 extends TRBase<TR_OPT50002Input, TR_OPT50002Output> {
    constructor(input: TR_OPT50002Input) {
        super(input, TR_OPT50002Output);
        this.input.tr_code = 'OPT50002';
    }
};

export class TR_OPT50003Input implements ITRInputBase {
    tr_code: string = 'OPT50003';
    '종목코드': string = '';
};
export class TR_OPT50003Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '일자': string = '';
    '현재가': string = '';
    '기준가': string = '';
    '체결량': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '시초미결제약정수량': string = '';
    '최고미결제약정수량': string = '';
    '최저미결제약정수량': string = '';
    '미결제약정': string = '';
    '전일미결제약정': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '델타': string = '';
    '감마': string = '';
    '상한가': string = '';
    '하한가': string = '';
    '시장베이시스': string = '';
    '괴리율': string = '';
};
/**
 * 선옵시고저가요청
 */
export class TR_OPT50003 extends TRBase<TR_OPT50003Input, TR_OPT50003Output> {
    constructor(input: TR_OPT50003Input) {
        super(input, TR_OPT50003Output);
        this.input.tr_code = 'OPT50003';
    }
};

export class TR_OPT50004Input implements ITRInputBase {
    tr_code: string = 'OPT50004';
    '만기년월': string = '';
};
export class TR_OPT50004MultiItem {
    '종목코드': string = '';
    'ATM구분': string = '';
    '행사가': string = '';
};
export class TR_OPT50004Output implements ITROutputBase {
    multiT: new () => TR_OPT50004MultiItem;
    multi_items: TR_OPT50004MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50004MultiItem; }
    next: boolean = false;
};
/**
 * 콜옵션행사가요청
 */
export class TR_OPT50004 extends TRBase<TR_OPT50004Input, TR_OPT50004Output> {
    constructor(input: TR_OPT50004Input) {
        super(input, TR_OPT50004Output);
        this.input.tr_code = 'OPT50004';
    }
};

export class TR_OPT50005Input implements ITRInputBase {
    tr_code: string = 'OPT50005';
    '종목코드': string = '';
};
export class TR_OPT50005MultiItem {
    '체결시간': string = '';
    '미결제약정': string = '';
    '누적거래량': string = '';
    '체결량': string = '';
};
export class TR_OPT50005Output implements ITROutputBase {
    multiT: new () => TR_OPT50005MultiItem;
    multi_items: TR_OPT50005MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50005MultiItem; }
    next: boolean = false;
};
/**
 * 선옵시간별거래량요청
 */
export class TR_OPT50005 extends TRBase<TR_OPT50005Input, TR_OPT50005Output> {
    constructor(input: TR_OPT50005Input) {
        super(input, TR_OPT50005Output);
        this.input.tr_code = 'OPT50005';
    }
};

export class TR_OPT50006Input implements ITRInputBase {
    tr_code: string = 'OPT50006';
    '종목코드': string = '';
};
export class TR_OPT50006MultiItem {
    '체결시간': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '체결량': string = '';
    '누적거래량': string = '';
    '미결제약정': string = '';
    '미결제증감': string = '';
    '전일거래량대비': string = '';
    '전일거래량': string = '';
    '기준가': string = '';
};
export class TR_OPT50006Output implements ITROutputBase {
    multiT: new () => TR_OPT50006MultiItem;
    multi_items: TR_OPT50006MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50006MultiItem; }
    next: boolean = false;
    '종목명': string = '';
};
/**
 * 선옵체결추이요청
 */
export class TR_OPT50006 extends TRBase<TR_OPT50006Input, TR_OPT50006Output> {
    constructor(input: TR_OPT50006Input) {
        super(input, TR_OPT50006Output);
        this.input.tr_code = 'OPT50006';
    }
};

export class TR_OPT50007Input implements ITRInputBase {
    tr_code: string = 'OPT50007';
    '종목코드': string = '';
    '시간단위': string = '';
    '시간검색': string = '';
};
export class TR_OPT50007MultiItem {
    '체결시간': string = '';
    '시가n': string = '';
    '고가n': string = '';
    '저가n': string = '';
    '현재가n': string = '';
    '대비기호n': string = '';
    '전일대비n': string = '';
    '체결량': string = '';
    '누적거래량n': string = '';
    '미결제약정': string = '';
    '미결제증감': string = '';
    '시장베이시스': string = '';
    '코스피200': string = '';
    '종목명': string = '';
    '내재가치n': string = '';
};
export class TR_OPT50007Output implements ITROutputBase {
    multiT: new () => TR_OPT50007MultiItem;
    multi_items: TR_OPT50007MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50007MultiItem; }
    next: boolean = false;
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '내재가치': string = '';
    '시간가치': string = '';
    '이론가': string = '';
    '괴리율': string = '';
};
/**
 * 선물시세추이요청
 */
export class TR_OPT50007 extends TRBase<TR_OPT50007Input, TR_OPT50007Output> {
    constructor(input: TR_OPT50007Input) {
        super(input, TR_OPT50007Output);
        this.input.tr_code = 'OPT50007';
    }
};

export class TR_OPT50008Input implements ITRInputBase {
    tr_code: string = 'OPT50008';
    '종목코드': string = '';
    '시간구분': string = '';
};
export class TR_OPT50008MultiItem {
    '체결시간': string = '';
    '투자자별매도금액': string = '';
    '투자자별매수금액': string = '';
    '투자자별순매수금액': string = '';
};
export class TR_OPT50008Output implements ITROutputBase {
    multiT: new () => TR_OPT50008MultiItem;
    multi_items: TR_OPT50008MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50008MultiItem; }
    next: boolean = false;
};
/**
 * 프로그램매매추이차트요청
 */
export class TR_OPT50008 extends TRBase<TR_OPT50008Input, TR_OPT50008Output> {
    constructor(input: TR_OPT50008Input) {
        super(input, TR_OPT50008Output);
        this.input.tr_code = 'OPT50008';
    }
};

export class TR_OPT50009Input implements ITRInputBase {
    tr_code: string = 'OPT50009';
    '종목코드': string = '';
    '시간검색': string = '';
};
export class TR_OPT50009MultiItem {
    '호가시간': string = '';
    '매도호가총잔량': string = '';
    '매수호가총잔량': string = '';
    '순매수잔량': string = '';
};
export class TR_OPT50009Output implements ITROutputBase {
    multiT: new () => TR_OPT50009MultiItem;
    multi_items: TR_OPT50009MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50009MultiItem; }
    next: boolean = false;
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
};
/**
 * 선옵시간별잔량요청
 */
export class TR_OPT50009 extends TRBase<TR_OPT50009Input, TR_OPT50009Output> {
    constructor(input: TR_OPT50009Input) {
        super(input, TR_OPT50009Output);
        this.input.tr_code = 'OPT50009';
    }
};

export class TR_OPT50010Input implements ITRInputBase {
    tr_code: string = 'OPT50010';
    '종목코드': string = '';
    '시간검색': string = '';
};
export class TR_OPT50010MultiItem {
    '호가시간': string = '';
    '매도호가수량': string = '';
    '최우선매도호가': string = '';
    '매수호가수량': string = '';
    '최우선매수호가': string = '';
    '호가순잔량': string = '';
    '매도호가총잔량': string = '';
    '매수호가총잔량': string = '';
    '순매수잔량': string = '';
};
export class TR_OPT50010Output implements ITROutputBase {
    multiT: new () => TR_OPT50010MultiItem;
    multi_items: TR_OPT50010MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50010MultiItem; }
    next: boolean = false;
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
};
/**
 * 선옵호가잔량추이요청
 */
export class TR_OPT50010 extends TRBase<TR_OPT50010Input, TR_OPT50010Output> {
    constructor(input: TR_OPT50010Input) {
        super(input, TR_OPT50010Output);
        this.input.tr_code = 'OPT50010';
    }
};

export class TR_OPT50011Input implements ITRInputBase {
    tr_code: string = 'OPT50011';
    '종목코드': string = '';
    '시간단위': string = '';
    '시간검색': string = '';
};
export class TR_OPT50011MultiItem {
    '호가시간': string = '';
    '매도호가수량': string = '';
    '최우선매도호가': string = '';
    '매수호가수량': string = '';
    '최우선매수호가': string = '';
    '호가순잔량': string = '';
    '매도호가총잔량': string = '';
    '매수호가총잔량': string = '';
    '순매수잔량': string = '';
};
export class TR_OPT50011Output implements ITROutputBase {
    multiT: new () => TR_OPT50011MultiItem;
    multi_items: TR_OPT50011MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50011MultiItem; }
    next: boolean = false;
};
/**
 * 선옵호가잔량추이요청
 */
export class TR_OPT50011 extends TRBase<TR_OPT50011Input, TR_OPT50011Output> {
    constructor(input: TR_OPT50011Input) {
        super(input, TR_OPT50011Output);
        this.input.tr_code = 'OPT50011';
    }
};

export class TR_OPT50012Input implements ITRInputBase {
    tr_code: string = 'OPT50012';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50012MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
};
export class TR_OPT50012Output implements ITROutputBase {
    multiT: new () => TR_OPT50012MultiItem;
    multi_items: TR_OPT50012MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50012MultiItem; }
    next: boolean = false;
};
/**
 * 선옵타임스프레드차트요청
 */
export class TR_OPT50012 extends TRBase<TR_OPT50012Input, TR_OPT50012Output> {
    constructor(input: TR_OPT50012Input) {
        super(input, TR_OPT50012Output);
        this.input.tr_code = 'OPT50012';
    }
};

export class TR_OPT50013Input implements ITRInputBase {
    tr_code: string = 'OPT50013';
    '종목코드': string = '';
    '봉갯수': string = '';
};
export class TR_OPT50013MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
};
export class TR_OPT50013Output implements ITROutputBase {
    multiT: new () => TR_OPT50013MultiItem;
    multi_items: TR_OPT50013MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50013MultiItem; }
    next: boolean = false;
};
/**
 * 선물가격대별비중차트요청
 */
export class TR_OPT50013 extends TRBase<TR_OPT50013Input, TR_OPT50013Output> {
    constructor(input: TR_OPT50013Input) {
        super(input, TR_OPT50013Output);
        this.input.tr_code = 'OPT50013';
    }
};

export class TR_OPT50014Input implements ITRInputBase {
    tr_code: string = 'OPT50014';
    '종목코드': string = '';
    '봉갯수': string = '';
};
export class TR_OPT50014MultiItem {
    '구간구분': string = '';
    '거래량': string = '';
    '비중': string = '';
};
export class TR_OPT50014Output implements ITROutputBase {
    multiT: new () => TR_OPT50014MultiItem;
    multi_items: TR_OPT50014MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50014MultiItem; }
    next: boolean = false;
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '고가': string = '';
    '저가': string = '';
    '누적거래량': string = '';
    '미결제약정': string = '';
    '종목명': string = '';
    '누적거래대금': string = '';
};
/**
 * 선물가격대별비중차트요청
 */
export class TR_OPT50014 extends TRBase<TR_OPT50014Input, TR_OPT50014Output> {
    constructor(input: TR_OPT50014Input) {
        super(input, TR_OPT50014Output);
        this.input.tr_code = 'OPT50014';
    }
};

export class TR_OPT50015Input implements ITRInputBase {
    tr_code: string = 'OPT50015';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50015MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
    '미결제약정': string = '';
    '미결제증감': string = '';
};
export class TR_OPT50015Output implements ITROutputBase {
    multiT: new () => TR_OPT50015MultiItem;
    multi_items: TR_OPT50015MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50015MultiItem; }
    next: boolean = false;
    '현재가s': string = '';
    '대비기호s': string = '';
    '전일대비s': string = '';
    '등락율s': string = '';
    '고가s': string = '';
    '저가s': string = '';
    '누적거래량s': string = '';
    '미결제약정s': string = '';
    '종목명s': string = '';
};
/**
 * 선물미결제약정일차트요청
 */
export class TR_OPT50015 extends TRBase<TR_OPT50015Input, TR_OPT50015Output> {
    constructor(input: TR_OPT50015Input) {
        super(input, TR_OPT50015Output);
        this.input.tr_code = 'OPT50015';
    }
};

export class TR_OPT50016Input implements ITRInputBase {
    tr_code: string = 'OPT50016';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50016MultiItem {
    '체결시간': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '코스피200': string = '';
    '시장베이시스': string = '';
    '이론가': string = '';
    '괴리율': string = '';
    '거래량': string = '';
    '시가': string = '';
};
export class TR_OPT50016Output implements ITROutputBase {
    multiT: new () => TR_OPT50016MultiItem;
    multi_items: TR_OPT50016MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50016MultiItem; }
    next: boolean = false;
    '전일종가': string = '';
};
/**
 * 베이시스추이차트요청
 */
export class TR_OPT50016 extends TRBase<TR_OPT50016Input, TR_OPT50016Output> {
    constructor(input: TR_OPT50016Input) {
        super(input, TR_OPT50016Output);
        this.input.tr_code = 'OPT50016';
    }
};

export class TR_OPT50017Input implements ITRInputBase {
    tr_code: string = 'OPT50017';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50017MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
    '거래량': string = '';
    '시장베이시스': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '괴리율': string = '';
};
export class TR_OPT50017Output implements ITROutputBase {
    multiT: new () => TR_OPT50017MultiItem;
    multi_items: TR_OPT50017MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50017MultiItem; }
    next: boolean = false;
};
/**
 * 베이시스추이차트요청
 */
export class TR_OPT50017 extends TRBase<TR_OPT50017Input, TR_OPT50017Output> {
    constructor(input: TR_OPT50017Input) {
        super(input, TR_OPT50017Output);
        this.input.tr_code = 'OPT50017';
    }
};

export class TR_OPT50018Input implements ITRInputBase {
    tr_code: string = 'OPT50018';
    '시간단위': string = '';
};
export class TR_OPT50018MultiItem {
    '체결시간': string = '';
    '콜풋RATIO': string = '';
    '코스피200': string = '';
};
export class TR_OPT50018Output implements ITROutputBase {
    multiT: new () => TR_OPT50018MultiItem;
    multi_items: TR_OPT50018MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50018MultiItem; }
    next: boolean = false;
};
/**
 * 풋콜옵션비율차트요청
 */
export class TR_OPT50018 extends TRBase<TR_OPT50018Input, TR_OPT50018Output> {
    constructor(input: TR_OPT50018Input) {
        super(input, TR_OPT50018Output);
        this.input.tr_code = 'OPT50018';
    }
};

export class TR_OPT50019Input implements ITRInputBase {
    tr_code: string = 'OPT50019';
    '종목코드': string = '';
};
export class TR_OPT50019Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '내재가치': string = '';
    '시간가치': string = '';
    '이론가': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '누적거래량': string = '';
    '거래량전일대비': string = '';
    '누적거래대금': string = '';
    '거래대금증감': string = '';
    '미결제약정': string = '';
    '미결제약정전일대비': string = '';
    '역사적변동성': string = '';
    '표면이자': string = '';
    '배당액지수': string = '';
    '매도호가': string = '';
    '매도수량': string = '';
    '매수호가': string = '';
    '매수수량': string = '';
};
/**
 * 선물옵션현재가정보요청
 */
export class TR_OPT50019 extends TRBase<TR_OPT50019Input, TR_OPT50019Output> {
    constructor(input: TR_OPT50019Input) {
        super(input, TR_OPT50019Output);
        this.input.tr_code = 'OPT50019';
    }
};

export class TR_OPT50020Input implements ITRInputBase {
    tr_code: string = 'OPT50020';
    '만기년월': string = '';
};
export class TR_OPT50020MultiItem {
    '현재가': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '대비기호': string = '';
    '시간가치': string = '';
    '내재가치': string = '';
    '내재변동성': string = '';
    '이론가': string = '';
    '괴리율': string = '';
    '미결제약정전일대비': string = '';
    '미결제약정': string = '';
    '누적거래대금': string = '';
    '누적거래량': string = '';
    '매수호가총잔량': string = '';
    '매도호가총잔량': string = '';
    '매수호가수량': string = '';
    '매수호가': string = '';
    '매도호가수량': string = '';
    '매도호가': string = '';
    '기준가': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '기준가대비시가등락율': string = '';
    '기준가대비고가등락율': string = '';
    '기준가대비저가등락율': string = '';
    '지수환산': string = '';
    '예상체결가전일종가대비등락율': string = '';
    '예상체결가전일종가대비기호': string = '';
    '예상체결가전일종가대비': string = '';
    '예상체결가': string = '';
    '종목코드': string = '';
    'ATM구분': string = '';
    '행사가': string = '';
    '대칭구분': string = '';
    '풋_현재가': string = '';
    '풋_전일대비': string = '';
    '풋_등락율': string = '';
    '풋_대비기호': string = '';
    '풋_시간가치': string = '';
    '풋_내재가치': string = '';
    '풋_내재변동성': string = '';
    '풋_이론가': string = '';
    '풋_괴리율': string = '';
    '풋_미결제약정전일대비': string = '';
    '풋_미결제약정': string = '';
    '풋_누적거래대금': string = '';
    '풋_누적거래량': string = '';
    '풋_매수호가총잔량': string = '';
    '풋_매도호가총잔량': string = '';
    '풋_매수호가수량': string = '';
    '풋_매수호가': string = '';
    '풋_매도호가수량': string = '';
    '풋_매도호가': string = '';
    '풋_기준가': string = '';
    '풋_시가': string = '';
    '풋_고가': string = '';
    '풋_저가': string = '';
    '풋_기준가대비시가등락율': string = '';
    '풋_기준가대비고가등락율': string = '';
    '풋_기준가대비저가등락율': string = '';
    '풋_지수환산': string = '';
    '풋_예상체결가전일종가대비등락율': string = '';
    '풋_예상체결가전일종가대비기호': string = '';
    '풋_예상체결가전일종가대비': string = '';
    '풋_예상체결가': string = '';
    '풋_종목코드': string = '';
    '풋_ATM구분': string = '';
    '풋_행사가': string = '';
};
export class TR_OPT50020Output implements ITROutputBase {
    multiT: new () => TR_OPT50020MultiItem;
    multi_items: TR_OPT50020MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50020MultiItem; }
    next: boolean = false;
};
/**
 * 복수종목결제월별시세요청
 */
export class TR_OPT50020 extends TRBase<TR_OPT50020Input, TR_OPT50020Output> {
    constructor(input: TR_OPT50020Input) {
        super(input, TR_OPT50020Output);
        this.input.tr_code = 'OPT50020';
    }
};

export class TR_OPT50021Input implements ITRInputBase {
    tr_code: string = 'OPT50021';
    '만기년월': string = '';
};
export class TR_OPT50021MultiItem {
    '지수환산': string = '';
    'ATM구분': string = '';
    '종목코드': string = '';
    '행사가': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '시가': string = '';
    '기준가대비시가등락율': string = '';
    '고가': string = '';
    '기준가대비고가등락율': string = '';
    '저가': string = '';
    '기준가대비저가등락율': string = '';
    '기준가': string = '';
    '매도호가': string = '';
    '매도호가수량': string = '';
    '매수호가': string = '';
    '매수호가수량': string = '';
    '매도호가총잔량': string = '';
    '매수호가총잔량': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '미결제약정': string = '';
    '미결제약정전일대비': string = '';
    '괴리율': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '내재가치': string = '';
    '시간가치': string = '';
    '델타': string = '';
    '감마': string = '';
    '세타': string = '';
    '베가': string = '';
    '로': string = '';
};
export class TR_OPT50021Output implements ITROutputBase {
    multiT: new () => TR_OPT50021MultiItem;
    multi_items: TR_OPT50021MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50021MultiItem; }
    next: boolean = false;
};
/**
 * 콜종목결제월별시세요청
 */
export class TR_OPT50021 extends TRBase<TR_OPT50021Input, TR_OPT50021Output> {
    constructor(input: TR_OPT50021Input) {
        super(input, TR_OPT50021Output);
        this.input.tr_code = 'OPT50021';
    }
};

export class TR_OPT50022Input implements ITRInputBase {
    tr_code: string = 'OPT50022';
    '만기년월': string = '';
};
export class TR_OPT50022MultiItem {
    '지수환산': string = '';
    'ATM구분': string = '';
    '종목코드': string = '';
    '행사가': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '시가': string = '';
    '기준가대비시가등락율': string = '';
    '고가': string = '';
    '기준가대비고가등락율': string = '';
    '저가': string = '';
    '기준가대비저가등락율': string = '';
    '기준가': string = '';
    '매도호가': string = '';
    '매도호가수량': string = '';
    '매수호가': string = '';
    '매수호가수량': string = '';
    '매도호가총잔량': string = '';
    '매수호가총잔량': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '미결제약정': string = '';
    '미결제약정전일대비': string = '';
    '괴리율': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '내재가치': string = '';
    '시간가치': string = '';
    '델타': string = '';
    '감마': string = '';
    '세타': string = '';
    '베가': string = '';
    '로': string = '';
};
export class TR_OPT50022Output implements ITROutputBase {
    multiT: new () => TR_OPT50022MultiItem;
    multi_items: TR_OPT50022MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50022MultiItem; }
    next: boolean = false;
};
/**
 * 풋종목결제월별시세요청
 */
export class TR_OPT50022 extends TRBase<TR_OPT50022Input, TR_OPT50022Output> {
    constructor(input: TR_OPT50022Input) {
        super(input, TR_OPT50022Output);
        this.input.tr_code = 'OPT50022';
    }
};

export class TR_OPT50023Input implements ITRInputBase {
    tr_code: string = 'OPT50023';
    '종목코드': string = '';
    '시간구분': string = '';
};
export class TR_OPT50023MultiItem {
    '일자': string = '';
    '체결시간': string = '';
    '현재가n': string = '';
    '이론가n': string = '';
    '내재변동성n': string = '';
    '델타n': string = '';
    '감마n': string = '';
    '세타n': string = '';
    '베가n': string = '';
    '로n': string = '';
    '시가': string = '';
    '고가n': string = '';
    '저가n': string = '';
    '대비기호n': string = '';
    '전일대비n': string = '';
    '등락율n': string = '';
    '누적거래량n': string = '';
    '미결제약정n': string = '';
};
export class TR_OPT50023Output implements ITROutputBase {
    multiT: new () => TR_OPT50023MultiItem;
    multi_items: TR_OPT50023MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50023MultiItem; }
    next: boolean = false;
    '이론가': string = '';
    '괴리율': string = '';
    '내재변동성': string = '';
    '시장베이시스': string = '';
    '델타': string = '';
    '베가': string = '';
    '감마': string = '';
    '로': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '고가': string = '';
    '저가': string = '';
    '종목표준코드': string = '';
    '내재가치': string = '';
    '시간가치': string = '';
};
/**
 * 민감도지표추이요청
 */
export class TR_OPT50023 extends TRBase<TR_OPT50023Input, TR_OPT50023Output> {
    constructor(input: TR_OPT50023Input) {
        super(input, TR_OPT50023Output);
        this.input.tr_code = 'OPT50023';
    }
};

export class TR_OPT50024Input implements ITRInputBase {
    tr_code: string = 'OPT50024';
    '역사적변동성1': string = '';
    '역사적변동성2': string = '';
    '역사적변동성3': string = '';
    '기간': string = '';
};
export class TR_OPT50024MultiItem {
    '일자': string = '';
    '대표내재변동성': string = '';
    '콜내재변동성': string = '';
    '풋내재변동성': string = '';
    '선물대표내재변동성': string = '';
    '선물콜내재변동성': string = '';
    '선물풋내재변동성': string = '';
    '역사적변동성1': string = '';
    '역사적변동성2': string = '';
    '역사적변동성3': string = '';
    '선물역사적변동성1': string = '';
    '선물역사적변동성2': string = '';
    '선물역사적변동성3': string = '';
    '시작일자': string = '';
};
export class TR_OPT50024Output implements ITROutputBase {
    multiT: new () => TR_OPT50024MultiItem;
    multi_items: TR_OPT50024MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50024MultiItem; }
    next: boolean = false;
};
/**
 * 일별변동성분석그래프요청
 */
export class TR_OPT50024 extends TRBase<TR_OPT50024Input, TR_OPT50024Output> {
    constructor(input: TR_OPT50024Input) {
        super(input, TR_OPT50024Output);
        this.input.tr_code = 'OPT50024';
    }
};

export class TR_OPT50025Input implements ITRInputBase {
    tr_code: string = 'OPT50025';
    '역사적변동성1': string = '';
    '역사적변동성2': string = '';
    '역사적변동성3': string = '';
    '기간': string = '';
};
export class TR_OPT50025MultiItem {
    '체결시간': string = '';
    '대표내재변동성': string = '';
    '콜내재변동성': string = '';
    '풋내재변동성': string = '';
    '선물대표내재변동성': string = '';
    '선물콜내재변동성': string = '';
    '선물풋내재변동성': string = '';
    '역사적변동성1': string = '';
    '역사적변동성2': string = '';
    '역사적변동성3': string = '';
    '선물역사적변동성1': string = '';
    '선물역사적변동성2': string = '';
    '선물역사적변동성3': string = '';
};
export class TR_OPT50025Output implements ITROutputBase {
    multiT: new () => TR_OPT50025MultiItem;
    multi_items: TR_OPT50025MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50025MultiItem; }
    next: boolean = false;
};
/**
 * 시간별변동성분석그래프요청
 */
export class TR_OPT50025 extends TRBase<TR_OPT50025Input, TR_OPT50025Output> {
    constructor(input: TR_OPT50025Input) {
        super(input, TR_OPT50025Output);
        this.input.tr_code = 'OPT50025';
    }
};

export class TR_OPT50026Input implements ITRInputBase {
    tr_code: string = 'OPT50026';
    '종목코드': string = '';
    '조회구분': string = '';
    '매매구분': string = '';
    '체결구분': string = '';
    '계좌번호': string = '';
    '주문번호': string = '';
};
export class TR_OPT50026MultiItem {
    '주문번호': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '주문구분': string = '';
    '주문가격': string = '';
    '주문수량': string = '';
    '체결가': string = '';
    '체결량': string = '';
    '미체결수량': string = '';
    '주문상태': string = '';
    '원주문번호': string = '';
    '매매구분': string = '';
    '주문체결시간': string = '';
};
export class TR_OPT50026Output implements ITROutputBase {
    multiT: new () => TR_OPT50026MultiItem;
    multi_items: TR_OPT50026MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50026MultiItem; }
    next: boolean = false;
};
/**
 * 선옵주문체결요청
 */
export class TR_OPT50026 extends TRBase<TR_OPT50026Input, TR_OPT50026Output> {
    constructor(input: TR_OPT50026Input) {
        super(input, TR_OPT50026Output);
        this.input.tr_code = 'OPT50026';
    }
};

export class TR_OPT50027Input implements ITRInputBase {
    tr_code: string = 'OPT50027';
    '계좌번호': string = '';
};
export class TR_OPT50027MultiItem {
    '계좌번호': string = '';
    '종목코드': string = '';
    '신용구분': string = '';
    '대출일': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '보유수량': string = '';
    '매입단가': string = '';
    '총매입가': string = '';
    '주문가능수량': string = '';
    '당일매도수량': string = '';
    '당일매도금액': string = '';
    '당일매수수량': string = '';
    '당일매수금액': string = '';
    '당일매매수수료': string = '';
    '당일매매세금': string = '';
    '당일HTS매도수수료': string = '';
    '당일HTS매수수수료': string = '';
    'D+2매수정산금': string = '';
    '당일매도손익': string = '';
    '당일순매수량': string = '';
    '매매구분': string = '';
    '당일총매도손익': string = '';
    '예수금': string = '';
    '최우선매도호가': string = '';
    '최우선매수호가': string = '';
    '결제잔고': string = '';
    '결제금액': string = '';
    '전일매도수량': string = '';
    '전일매수수량': string = '';
    '전일매도금액': string = '';
    '전일매수금액': string = '';
    '전일순매수량': string = '';
    '손익율': string = '';
    '신용금액': string = '';
    '신용이자': string = '';
    '만기일': string = '';
    '기준가': string = '';
    '하한가': string = '';
    '상한가': string = '';
    '담보대출수량': string = '';
    '연누적거래대금': string = '';
};
export class TR_OPT50027Output implements ITROutputBase {
    multiT: new () => TR_OPT50027MultiItem;
    multi_items: TR_OPT50027MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50027MultiItem; }
    next: boolean = false;
};
/**
 * 선옵잔고요청
 */
export class TR_OPT50027 extends TRBase<TR_OPT50027Input, TR_OPT50027Output> {
    constructor(input: TR_OPT50027Input) {
        super(input, TR_OPT50027Output);
        this.input.tr_code = 'OPT50027';
    }
};

export class TR_OPT50028Input implements ITRInputBase {
    tr_code: string = 'OPT50028';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50028MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50028Output implements ITROutputBase {
    multiT: new () => TR_OPT50028MultiItem;
    multi_items: TR_OPT50028MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50028MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
    '마지막틱갯수': string = '';
};
/**
 * 선물틱차트요청
 */
export class TR_OPT50028 extends TRBase<TR_OPT50028Input, TR_OPT50028Output> {
    constructor(input: TR_OPT50028Input) {
        super(input, TR_OPT50028Output);
        this.input.tr_code = 'OPT50028';
    }
};

export class TR_OPT50029Input implements ITRInputBase {
    tr_code: string = 'OPT50029';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50029MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT50029Output implements ITROutputBase {
    multiT: new () => TR_OPT50029MultiItem;
    multi_items: TR_OPT50029MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50029MultiItem; }
    next: boolean = false;
};
/**
 * 선물분차트요청
 */
export class TR_OPT50029 extends TRBase<TR_OPT50029Input, TR_OPT50029Output> {
    constructor(input: TR_OPT50029Input) {
        super(input, TR_OPT50029Output);
        this.input.tr_code = 'OPT50029';
    }
};

export class TR_OPT50030Input implements ITRInputBase {
    tr_code: string = 'OPT50030';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50030MultiItem {
    '현재가': string = '';
    '누적거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '수정주가이벤트': string = '';
    '전일종가': string = '';
};
export class TR_OPT50030Output implements ITROutputBase {
    multiT: new () => TR_OPT50030MultiItem;
    multi_items: TR_OPT50030MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50030MultiItem; }
    next: boolean = false;
};
/**
 * 선물일차트요청
 */
export class TR_OPT50030 extends TRBase<TR_OPT50030Input, TR_OPT50030Output> {
    constructor(input: TR_OPT50030Input) {
        super(input, TR_OPT50030Output);
        this.input.tr_code = 'OPT50030';
    }
};

export class TR_OPT50031Input implements ITRInputBase {
    tr_code: string = 'OPT50031';
    '계좌번호': string = '';
};
export class TR_OPT50031MultiItem {
    '종목코드': string = '';
    '잔고구분': string = '';
    '당일매도손익': string = '';
    '손익': string = '';
    '손익율': string = '';
    '매입단가': string = '';
    '보유수량': string = '';
    '주문가능수량': string = '';
    '현재가': string = '';
    '총매입가': string = '';
    '평가금액': string = '';
    '당일매매수수료': string = '';
    '종목명': string = '';
};
export class TR_OPT50031Output implements ITROutputBase {
    multiT: new () => TR_OPT50031MultiItem;
    multi_items: TR_OPT50031MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50031MultiItem; }
    next: boolean = false;
};
/**
 * 선옵잔고손익요청
 */
export class TR_OPT50031 extends TRBase<TR_OPT50031Input, TR_OPT50031Output> {
    constructor(input: TR_OPT50031Input) {
        super(input, TR_OPT50031Output);
        this.input.tr_code = 'OPT50031';
    }
};

export class TR_OPT50032Input implements ITRInputBase {
    tr_code: string = 'OPT50032';
    '계좌번호': string = '';
    '종목코드': string = '';
};
export class TR_OPT50032MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '체결구분': string = '';
    '체결량': string = '';
    '매입단가': string = '';
    '체결가': string = '';
    '당일매도손익': string = '';
    '손익율': string = '';
    '당일매매수수료': string = '';
};
export class TR_OPT50032Output implements ITROutputBase {
    multiT: new () => TR_OPT50032MultiItem;
    multi_items: TR_OPT50032MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50032MultiItem; }
    next: boolean = false;
};
/**
 * 선옵당일실현손익요청
 */
export class TR_OPT50032 extends TRBase<TR_OPT50032Input, TR_OPT50032Output> {
    constructor(input: TR_OPT50032Input) {
        super(input, TR_OPT50032Output);
        this.input.tr_code = 'OPT50032';
    }
};

export class TR_OPT50033Input implements ITRInputBase {
    tr_code: string = 'OPT50033';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50033Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '대표내재변동성': string = '';
    '콜내재변동성': string = '';
    '풋내재변동성': string = '';
    '역사적변동성': string = '';
    '잔존일수': string = '';
    '영업일기준잔존일': string = '';
    '차근달력기준잔존일': string = '';
    '차근영업일기준잔존일': string = '';
    '차차근달력기준잔존일': string = '';
    '차차근영업일기준잔존일': string = '';
    '차차차근달력기준잔존일': string = '';
    '차차차근영업일기준잔존일': string = '';
    '선물대표내재변동성': string = '';
    '선물콜내재변동성': string = '';
    '선물풋내재변동성': string = '';
};
/**
 * 선옵잔존일조회요청
 */
export class TR_OPT50033 extends TRBase<TR_OPT50033Input, TR_OPT50033Output> {
    constructor(input: TR_OPT50033Input) {
        super(input, TR_OPT50033Output);
        this.input.tr_code = 'OPT50033';
    }
};

export class TR_OPT50034Input implements ITRInputBase {
    tr_code: string = 'OPT50034';
    '종목코드': string = '';
    '기간': string = '';
};
export class TR_OPT50034MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
};
export class TR_OPT50034Output implements ITROutputBase {
    multiT: new () => TR_OPT50034MultiItem;
    multi_items: TR_OPT50034MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50034MultiItem; }
    next: boolean = false;
};
/**
 * 선옵전일가격요청
 */
export class TR_OPT50034 extends TRBase<TR_OPT50034Input, TR_OPT50034Output> {
    constructor(input: TR_OPT50034Input) {
        super(input, TR_OPT50034Output);
        this.input.tr_code = 'OPT50034';
    }
};

export class TR_OPT50035Input implements ITRInputBase {
    tr_code: string = 'OPT50035';
    '종목코드': string = '';
    '기준일자': string = '';
    '기간': string = '';
    '차트구분': string = '';
};
export class TR_OPT50035MultiItem {
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '누적거래': string = '';
    '거래량': string = '';
};
export class TR_OPT50035Output implements ITROutputBase {
    multiT: new () => TR_OPT50035MultiItem;
    multi_items: TR_OPT50035MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50035MultiItem; }
    next: boolean = false;
};
/**
 * 지수변동성차트요청
 */
export class TR_OPT50035 extends TRBase<TR_OPT50035Input, TR_OPT50035Output> {
    constructor(input: TR_OPT50035Input) {
        super(input, TR_OPT50035Output);
        this.input.tr_code = 'OPT50035';
    }
};

export class TR_OPT50036Input implements ITRInputBase {
    tr_code: string = 'OPT50036';
    '종목코드': string = '';
    '기준일자': string = '';
    '기간': string = '';
    '차트구분': string = '';
};
export class TR_OPT50036MultiItem {
    '일자': string = '';
    '전일종가': string = '';
    '선물역사적변동성': string = '';
};
export class TR_OPT50036Output implements ITROutputBase {
    multiT: new () => TR_OPT50036MultiItem;
    multi_items: TR_OPT50036MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50036MultiItem; }
    next: boolean = false;
};
/**
 * 주요지수변동성차트요청
 */
export class TR_OPT50036 extends TRBase<TR_OPT50036Input, TR_OPT50036Output> {
    constructor(input: TR_OPT50036Input) {
        super(input, TR_OPT50036Output);
        this.input.tr_code = 'OPT50036';
    }
};

export class TR_OPT50037Input implements ITRInputBase {
    tr_code: string = 'OPT50037';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50037MultiItem {
    '일자': string = '';
    '코스피200': string = '';
};
export class TR_OPT50037Output implements ITROutputBase {
    multiT: new () => TR_OPT50037MultiItem;
    multi_items: TR_OPT50037MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50037MultiItem; }
    next: boolean = false;
};
/**
 * 코스피200지수요청
 */
export class TR_OPT50037 extends TRBase<TR_OPT50037Input, TR_OPT50037Output> {
    constructor(input: TR_OPT50037Input) {
        super(input, TR_OPT50037Output);
        this.input.tr_code = 'OPT50037';
    }
};

export class TR_OPT50038Input implements ITRInputBase {
    tr_code: string = 'OPT50038';
    '일자구분': string = '';
    '일자': string = '';
    '투자자구분': string = '';
    '수량금액구분': string = '';
};
export class TR_OPT50038MultiItem {
    '평가손익': string = '';
    '매입단가': string = '';
    '투자자별순매수수량': string = '';
    '미결제약정': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '현재가': string = '';
    '종목코드': string = '';
    '행사가': string = '';
    '지수환산': string = '';
    'ATM구분': string = '';
    '대칭구분': string = '';
    '풋_종목코드': string = '';
    '풋_현재가': string = '';
    '풋_전일대비': string = '';
    '풋_대비기호': string = '';
    '풋_미결제약정': string = '';
    '풋_투자자별순매수수량': string = '';
    '풋_매입단가': string = '';
    '풋_평가손익': string = '';
};
export class TR_OPT50038Output implements ITROutputBase {
    multiT: new () => TR_OPT50038MultiItem;
    multi_items: TR_OPT50038MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50038MultiItem; }
    next: boolean = false;
};
/**
 * 투자자별만기손익차트요청
 */
export class TR_OPT50038 extends TRBase<TR_OPT50038Input, TR_OPT50038Output> {
    constructor(input: TR_OPT50038Input) {
        super(input, TR_OPT50038Output);
        this.input.tr_code = 'OPT50038';
    }
};

export class TR_OPT50039Input implements ITRInputBase {
    tr_code: string = 'OPT50039';
    '일자구분': string = '';
    '일자': string = '';
    '수량금액구분': string = '';
    '단위구분': string = '';
};
export class TR_OPT50039MultiItem {
    '기간중주가등락': string = '';
    '기타법인': string = '';
    '연기금등': string = '';
    '기타금융': string = '';
    '은행': string = '';
    '투신': string = '';
    '보험': string = '';
    '금융투자': string = '';
    '외국인': string = '';
    '개인': string = '';
    '누적거래량': string = '';
    '미결제약정전일대비': string = '';
    '미결제약정': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '현재가': string = '';
    '종목코드': string = '';
    '행사가': string = '';
    '지수환산': string = '';
    '대칭구분': string = '';
    '풋_종목코드': string = '';
    '풋_현재가': string = '';
    '풋_등락율': string = '';
    '풋_대비기호': string = '';
    '풋_전일대비': string = '';
    '풋_미결제약정': string = '';
    '풋_미결제약정전일대비': string = '';
    '풋_누적거래량': string = '';
    '풋_ATM구분': string = '';
    '풋_개인': string = '';
    '풋_외국인': string = '';
    '풋_금융투자': string = '';
    '풋_보험': string = '';
    '풋_투신': string = '';
    '풋_은행': string = '';
    '풋_기타금융': string = '';
    '풋_연기금등': string = '';
    '풋_기타법인': string = '';
    '풋_기간중주가등락': string = '';
};
export class TR_OPT50039Output implements ITROutputBase {
    multiT: new () => TR_OPT50039MultiItem;
    multi_items: TR_OPT50039MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50039MultiItem; }
    next: boolean = false;
};
/**
 * 투자자별포지션종합요청
 */
export class TR_OPT50039 extends TRBase<TR_OPT50039Input, TR_OPT50039Output> {
    constructor(input: TR_OPT50039Input) {
        super(input, TR_OPT50039Output);
        this.input.tr_code = 'OPT50039';
    }
};

export class TR_OPT50040Input implements ITRInputBase {
    tr_code: string = 'OPT50040';
    '종목코드': string = '';
};
export class TR_OPT50040MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '기준가': string = '';
    '체결량': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '시초미결제약정수량': string = '';
    '최고미결제약정수량': string = '';
    '최저미결제약정수량': string = '';
    '미결제약정': string = '';
    '전일미결제약정': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '델타': string = '';
    '감마': string = '';
    '상한가': string = '';
    '하한가': string = '';
    '시장베이시스': string = '';
    '괴리율': string = '';
};
export class TR_OPT50040Output implements ITROutputBase {
    multiT: new () => TR_OPT50040MultiItem;
    multi_items: TR_OPT50040MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50040MultiItem; }
    next: boolean = false;
};
/**
 * 선옵시고저가요청
 */
export class TR_OPT50040 extends TRBase<TR_OPT50040Input, TR_OPT50040Output> {
    constructor(input: TR_OPT50040Input) {
        super(input, TR_OPT50040Output);
        this.input.tr_code = 'OPT50040';
    }
};

export class TR_OPT50043Input implements ITRInputBase {
    tr_code: string = 'OPT50043';
    '거래대금구분': string = '';
};
export class TR_OPT50043MultiItem {
    '종목코드': string = '';
    '종목표준코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
};
export class TR_OPT50043Output implements ITROutputBase {
    multiT: new () => TR_OPT50043MultiItem;
    multi_items: TR_OPT50043MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50043MultiItem; }
    next: boolean = false;
};
/**
 * 주식선물거래량상위종목요청
 */
export class TR_OPT50043 extends TRBase<TR_OPT50043Input, TR_OPT50043Output> {
    constructor(input: TR_OPT50043Input) {
        super(input, TR_OPT50043Output);
        this.input.tr_code = 'OPT50043';
    }
};

export class TR_OPT50044Input implements ITRInputBase {
    tr_code: string = 'OPT50044';
    '근월물구분': string = '';
    '입력구분': string = '';
};
export class TR_OPT50044MultiItem {
    '종목코드': string = '';
    '종목표준코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '누적거래대금': string = '';
    '미결제약정': string = '';
    '미결제약정전일대비': string = '';
    '이론가': string = '';
    '괴리율': string = '';
    '시장베이시스': string = '';
    '최우선매수호가': string = '';
    '최우선매도호가': string = '';
    '코스피200': string = '';
};
export class TR_OPT50044Output implements ITROutputBase {
    multiT: new () => TR_OPT50044MultiItem;
    multi_items: TR_OPT50044MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50044MultiItem; }
    next: boolean = false;
    '거래량합계': string = '';
    '거래대금합계': string = '';
};
/**
 * 주식선물시세표요청
 */
export class TR_OPT50044 extends TRBase<TR_OPT50044Input, TR_OPT50044Output> {
    constructor(input: TR_OPT50044Input) {
        super(input, TR_OPT50044Output);
        this.input.tr_code = 'OPT50044';
    }
};

export class TR_OPT50062Input implements ITRInputBase {
    tr_code: string = 'OPT50062';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50062MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
    '미결제약정': string = '';
    '미결제증감': string = '';
};
export class TR_OPT50062Output implements ITROutputBase {
    multiT: new () => TR_OPT50062MultiItem;
    multi_items: TR_OPT50062MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50062MultiItem; }
    next: boolean = false;
    '현재가s': string = '';
    '대비기호s': string = '';
    '전일대비s': string = '';
    '등락율s': string = '';
    '고가s': string = '';
    '저가s': string = '';
    '누적거래량s': string = '';
    '미결제약정s': string = '';
    '종목명s': string = '';
};
/**
 * 선물미결제약정분차트요청
 */
export class TR_OPT50062 extends TRBase<TR_OPT50062Input, TR_OPT50062Output> {
    constructor(input: TR_OPT50062Input) {
        super(input, TR_OPT50062Output);
        this.input.tr_code = 'OPT50062';
    }
};

export class TR_OPT50063Input implements ITRInputBase {
    tr_code: string = 'OPT50063';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50063MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
    '미결제약정': string = '';
    '미결제증감': string = '';
};
export class TR_OPT50063Output implements ITROutputBase {
    multiT: new () => TR_OPT50063MultiItem;
    multi_items: TR_OPT50063MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50063MultiItem; }
    next: boolean = false;
    '현재가s': string = '';
    '대비기호s': string = '';
    '전일대비s': string = '';
    '등락율s': string = '';
    '고가s': string = '';
    '저가s': string = '';
    '누적거래량s': string = '';
    '미결제약정s': string = '';
    '종목명s': string = '';
};
/**
 * 옵션미결제약정일차트요청
 */
export class TR_OPT50063 extends TRBase<TR_OPT50063Input, TR_OPT50063Output> {
    constructor(input: TR_OPT50063Input) {
        super(input, TR_OPT50063Output);
        this.input.tr_code = 'OPT50063';
    }
};

export class TR_OPT50064Input implements ITRInputBase {
    tr_code: string = 'OPT50064';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50064MultiItem {
    '현재가': string = '';
    '체결시간': string = '';
    '미결제약정': string = '';
    '미결제증감': string = '';
};
export class TR_OPT50064Output implements ITROutputBase {
    multiT: new () => TR_OPT50064MultiItem;
    multi_items: TR_OPT50064MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50064MultiItem; }
    next: boolean = false;
    '현재가s': string = '';
    '대비기호s': string = '';
    '전일대비s': string = '';
    '등락율s': string = '';
    '고가s': string = '';
    '저가s': string = '';
    '누적거래량s': string = '';
    '미결제약정s': string = '';
    '종목명s': string = '';
};
/**
 * 옵션미결제약정분차트요청
 */
export class TR_OPT50064 extends TRBase<TR_OPT50064Input, TR_OPT50064Output> {
    constructor(input: TR_OPT50064Input) {
        super(input, TR_OPT50064Output);
        this.input.tr_code = 'OPT50064';
    }
};

export class TR_OPT50065Input implements ITRInputBase {
    tr_code: string = 'OPT50065';
    '만기년월': string = '';
};
export class TR_OPT50065MultiItem {
    '종목코드': string = '';
    'ATM구분': string = '';
    '행사가': string = '';
};
export class TR_OPT50065Output implements ITROutputBase {
    multiT: new () => TR_OPT50065MultiItem;
    multi_items: TR_OPT50065MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50065MultiItem; }
    next: boolean = false;
};
/**
 * 풋옵션행사가요청
 */
export class TR_OPT50065 extends TRBase<TR_OPT50065Input, TR_OPT50065Output> {
    constructor(input: TR_OPT50065Input) {
        super(input, TR_OPT50065Output);
        this.input.tr_code = 'OPT50065';
    }
};

export class TR_OPT50066Input implements ITRInputBase {
    tr_code: string = 'OPT50066';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50066MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50066Output implements ITROutputBase {
    multiT: new () => TR_OPT50066MultiItem;
    multi_items: TR_OPT50066MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50066MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
    '마지막틱갯수': string = '';
};
/**
 * 옵션틱차트요청
 */
export class TR_OPT50066 extends TRBase<TR_OPT50066Input, TR_OPT50066Output> {
    constructor(input: TR_OPT50066Input) {
        super(input, TR_OPT50066Output);
        this.input.tr_code = 'OPT50066';
    }
};

export class TR_OPT50067Input implements ITRInputBase {
    tr_code: string = 'OPT50067';
    '종목코드': string = '';
    '시간단위': string = '';
};
export class TR_OPT50067MultiItem {
    '현재가': string = '';
    '거래량': string = '';
    '체결시간': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50067Output implements ITROutputBase {
    multiT: new () => TR_OPT50067MultiItem;
    multi_items: TR_OPT50067MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50067MultiItem; }
    next: boolean = false;
};
/**
 * 옵션분차트요청
 */
export class TR_OPT50067 extends TRBase<TR_OPT50067Input, TR_OPT50067Output> {
    constructor(input: TR_OPT50067Input) {
        super(input, TR_OPT50067Output);
        this.input.tr_code = 'OPT50067';
    }
};

export class TR_OPT50068Input implements ITRInputBase {
    tr_code: string = 'OPT50068';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50068MultiItem {
    '현재가': string = '';
    '누적거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50068Output implements ITROutputBase {
    multiT: new () => TR_OPT50068MultiItem;
    multi_items: TR_OPT50068MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50068MultiItem; }
    next: boolean = false;
};
/**
 * 옵션일차트요청
 */
export class TR_OPT50068 extends TRBase<TR_OPT50068Input, TR_OPT50068Output> {
    constructor(input: TR_OPT50068Input) {
        super(input, TR_OPT50068Output);
        this.input.tr_code = 'OPT50068';
    }
};

export class TR_OPT50071Input implements ITRInputBase {
    tr_code: string = 'OPT50071';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50071MultiItem {
    '현재가': string = '';
    '누적거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50071Output implements ITROutputBase {
    multiT: new () => TR_OPT50071MultiItem;
    multi_items: TR_OPT50071MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50071MultiItem; }
    next: boolean = false;
};
/**
 * 선물주차트요청
 */
export class TR_OPT50071 extends TRBase<TR_OPT50071Input, TR_OPT50071Output> {
    constructor(input: TR_OPT50071Input) {
        super(input, TR_OPT50071Output);
        this.input.tr_code = 'OPT50071';
    }
};

export class TR_OPT50072Input implements ITRInputBase {
    tr_code: string = 'OPT50072';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50072MultiItem {
    '현재가': string = '';
    '누적거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50072Output implements ITROutputBase {
    multiT: new () => TR_OPT50072MultiItem;
    multi_items: TR_OPT50072MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50072MultiItem; }
    next: boolean = false;
};
/**
 * 선물월차트요청
 */
export class TR_OPT50072 extends TRBase<TR_OPT50072Input, TR_OPT50072Output> {
    constructor(input: TR_OPT50072Input) {
        super(input, TR_OPT50072Output);
        this.input.tr_code = 'OPT50072';
    }
};

export class TR_OPT50073Input implements ITRInputBase {
    tr_code: string = 'OPT50073';
    '종목코드': string = '';
    '기준일자': string = '';
};
export class TR_OPT50073MultiItem {
    '현재가': string = '';
    '누적거래량': string = '';
    '일자': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '전일종가': string = '';
};
export class TR_OPT50073Output implements ITROutputBase {
    multiT: new () => TR_OPT50073MultiItem;
    multi_items: TR_OPT50073MultiItem[] = [];
    constructor() { this.multiT = TR_OPT50073MultiItem; }
    next: boolean = false;
};
/**
 * 선물년차트요청
 */
export class TR_OPT50073 extends TRBase<TR_OPT50073Input, TR_OPT50073Output> {
    constructor(input: TR_OPT50073Input) {
        super(input, TR_OPT50073Output);
        this.input.tr_code = 'OPT50073';
    }
};

export class TR_OPT90001Input implements ITRInputBase {
    tr_code: string = 'OPT90001';
    '검색구분': string = '';
    '종목코드': string = '';
    '날짜구분': string = '';
    '테마명': string = '';
    '등락수익구분': string = '';
};
export class TR_OPT90001MultiItem {
    '종목코드': string = '';
    '테마명': string = '';
    '종목수': string = '';
    '등락기호': string = '';
    '등락율': string = '';
    '상승종목수': string = '';
    '하락종목수': string = '';
    '기간수익률': string = '';
    '주요종목': string = '';
};
export class TR_OPT90001Output implements ITROutputBase {
    multiT: new () => TR_OPT90001MultiItem;
    multi_items: TR_OPT90001MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90001MultiItem; }
    next: boolean = false;
};
/**
 * 테마그룹별요청
 */
export class TR_OPT90001 extends TRBase<TR_OPT90001Input, TR_OPT90001Output> {
    constructor(input: TR_OPT90001Input) {
        super(input, TR_OPT90001Output);
        this.input.tr_code = 'OPT90001';
    }
};

export class TR_OPT90002Input implements ITRInputBase {
    tr_code: string = 'OPT90002';
    '날짜구분': string = '';
    '종목코드': string = '';
};
export class TR_OPT90002MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '등락기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '매도호가': string = '';
    '매도잔량': string = '';
    '매수호가': string = '';
    '매수잔량': string = '';
    '기간수익률n': string = '';
};
export class TR_OPT90002Output implements ITROutputBase {
    multiT: new () => TR_OPT90002MultiItem;
    multi_items: TR_OPT90002MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90002MultiItem; }
    next: boolean = false;
    '등락률': string = '';
    '기간수익률': string = '';
};
/**
 * 테마구성종목요청
 */
export class TR_OPT90002 extends TRBase<TR_OPT90002Input, TR_OPT90002Output> {
    constructor(input: TR_OPT90002Input) {
        super(input, TR_OPT90002Output);
        this.input.tr_code = 'OPT90002';
    }
};

export class TR_OPT90003Input implements ITRInputBase {
    tr_code: string = 'OPT90003';
    '매매상위구분': string = '';
    '금액수량구분': string = '';
    '시장구분': string = '';
};
export class TR_OPT90003MultiItem {
    '순위': string = '';
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '등락기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '누적거래량': string = '';
    '프로그램매도금액': string = '';
    '프로그램매수금액': string = '';
    '프로그램순매수금액': string = '';
};
export class TR_OPT90003Output implements ITROutputBase {
    multiT: new () => TR_OPT90003MultiItem;
    multi_items: TR_OPT90003MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90003MultiItem; }
    next: boolean = false;
};
/**
 * 프로그램순매수상위50요청
 */
export class TR_OPT90003 extends TRBase<TR_OPT90003Input, TR_OPT90003Output> {
    constructor(input: TR_OPT90003Input) {
        super(input, TR_OPT90003Output);
        this.input.tr_code = 'OPT90003';
    }
};

export class TR_OPT90004Input implements ITRInputBase {
    tr_code: string = 'OPT90004';
    '일자': string = '';
    '시장구분': string = '';
};
export class TR_OPT90004MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '등락기호': string = '';
    '전일대비': string = '';
    '매수체결수량': string = '';
    '매수체결금액': string = '';
    '매도체결수량': string = '';
    '매도체결금액': string = '';
    '순매수대금': string = '';
    '전체거래비율': string = '';
};
export class TR_OPT90004Output implements ITROutputBase {
    multiT: new () => TR_OPT90004MultiItem;
    multi_items: TR_OPT90004MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90004MultiItem; }
    next: boolean = false;
    '합계1': string = '';
    '합계2': string = '';
    '합계3': string = '';
    '합계4': string = '';
    '합계5': string = '';
    '합계6': string = '';
};
/**
 * 종목별프로그램매매현황요청
 */
export class TR_OPT90004 extends TRBase<TR_OPT90004Input, TR_OPT90004Output> {
    constructor(input: TR_OPT90004Input) {
        super(input, TR_OPT90004Output);
        this.input.tr_code = 'OPT90004';
    }
};

export class TR_OPT90005Input implements ITRInputBase {
    tr_code: string = 'OPT90005';
    '날짜': string = '';
    '시간구분': string = '';
    '금액수량구분': string = '';
    '시장구분': string = '';
    '분틱구분': string = '';
};
export class TR_OPT90005MultiItem {
    '체결시간': string = '';
    '차익거래매도': string = '';
    '차익거래매수': string = '';
    '차익거래순매수': string = '';
    '비차익거래매도': string = '';
    '비차익거래매수': string = '';
    '비차익거래순매수': string = '';
    '차익거래매도수량': string = '';
    '차익거래매수수량': string = '';
    '차익거래순매수수량': string = '';
    '비차익거래매도수량': string = '';
    '비차익거래매수수량': string = '';
    '비차익거래순매수수량': string = '';
    '전체매도': string = '';
    '전체매수': string = '';
    '전체순매수': string = '';
    'KOSPI200': string = '';
    'BASIS': string = '';
};
export class TR_OPT90005Output implements ITROutputBase {
    multiT: new () => TR_OPT90005MultiItem;
    multi_items: TR_OPT90005MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90005MultiItem; }
    next: boolean = false;
};
/**
 * 프로그램매매추이요청
 */
export class TR_OPT90005 extends TRBase<TR_OPT90005Input, TR_OPT90005Output> {
    constructor(input: TR_OPT90005Input) {
        super(input, TR_OPT90005Output);
        this.input.tr_code = 'OPT90005';
    }
};

export class TR_OPT90006Input implements ITRInputBase {
    tr_code: string = 'OPT90006';
    '날짜': string = '';
};
export class TR_OPT90006MultiItem {
    '일자': string = '';
    '매수차익거래수량': string = '';
    '매수차익거래금액': string = '';
    '매수차익거래증감액': string = '';
    '매도차익거래수량': string = '';
    '매도차익거래금액': string = '';
    '매도차익거래증감액': string = '';
};
export class TR_OPT90006Output implements ITROutputBase {
    multiT: new () => TR_OPT90006MultiItem;
    multi_items: TR_OPT90006MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90006MultiItem; }
    next: boolean = false;
};
/**
 * 프로그램매매차익잔고추이요청
 */
export class TR_OPT90006 extends TRBase<TR_OPT90006Input, TR_OPT90006Output> {
    constructor(input: TR_OPT90006Input) {
        super(input, TR_OPT90006Output);
        this.input.tr_code = 'OPT90006';
    }
};

export class TR_OPT90007Input implements ITRInputBase {
    tr_code: string = 'OPT90007';
    '날짜': string = '';
    '금액수량구분': string = '';
    '시장구분': string = '';
};
export class TR_OPT90007MultiItem {
    '일자': string = '';
    'KOSPI200': string = '';
    'BASIS': string = '';
    '차익거래당일': string = '';
    '차익거래누적': string = '';
    '비차익거래당일': string = '';
    '비차익거래누적': string = '';
    '전체당일': string = '';
    '전체누적': string = '';
};
export class TR_OPT90007Output implements ITROutputBase {
    multiT: new () => TR_OPT90007MultiItem;
    multi_items: TR_OPT90007MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90007MultiItem; }
    next: boolean = false;
};
/**
 * 프로그램매매누적추이요청
 */
export class TR_OPT90007 extends TRBase<TR_OPT90007Input, TR_OPT90007Output> {
    constructor(input: TR_OPT90007Input) {
        super(input, TR_OPT90007Output);
        this.input.tr_code = 'OPT90007';
    }
};

export class TR_OPT90008Input implements ITRInputBase {
    tr_code: string = 'OPT90008';
    '시간일자구분': string = '';
    '금액수량구분': string = '';
    '종목코드': string = '';
    '날짜': string = '';
};
export class TR_OPT90008MultiItem {
    '시간': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '프로그램매도금액': string = '';
    '프로그램매수금액': string = '';
    '프로그램순매수금액': string = '';
    '프로그램순매수금액증감': string = '';
    '프로그램매도수량': string = '';
    '프로그램매수수량': string = '';
    '프로그램순매수수량': string = '';
    '프로그램순매수수량증감': string = '';
    '기준가시간': string = '';
    '대차거래상환주수합': string = '';
    '잔고수주합': string = '';
};
export class TR_OPT90008Output implements ITROutputBase {
    multiT: new () => TR_OPT90008MultiItem;
    multi_items: TR_OPT90008MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90008MultiItem; }
    next: boolean = false;
};
/**
 * 종목시간별프로그램매매추이요청
 */
export class TR_OPT90008 extends TRBase<TR_OPT90008Input, TR_OPT90008Output> {
    constructor(input: TR_OPT90008Input) {
        super(input, TR_OPT90008Output);
        this.input.tr_code = 'OPT90008';
    }
};

export class TR_OPT90009Input implements ITRInputBase {
    tr_code: string = 'OPT90009';
    '시장구분': string = '';
    '금액수량구분': string = '';
    '조회일자구분': string = '';
    '날짜': string = '';
};
export class TR_OPT90009MultiItem {
    '외인순매도종목코드': string = '';
    '외인순매도종목명': string = '';
    '외인순매도금액': string = '';
    '외인순매도수량': string = '';
    '대칭구분': string = '';
    '외인순매수종목코드': string = '';
    '외인순매수종목명': string = '';
    '외인순매수금액': string = '';
    '외인순매수수량': string = '';
    '기관순매도종목코드': string = '';
    '기관순매도종목명': string = '';
    '기관순매도금액': string = '';
    '기관순매도수량': string = '';
    '기관순매수종목코드': string = '';
    '기관순매수종목명': string = '';
    '기관순매수금액': string = '';
    '기관순매수수량': string = '';
};
export class TR_OPT90009Output implements ITROutputBase {
    multiT: new () => TR_OPT90009MultiItem;
    multi_items: TR_OPT90009MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90009MultiItem; }
    next: boolean = false;
};
/**
 * 외국인기관매매상위요청
 */
export class TR_OPT90009 extends TRBase<TR_OPT90009Input, TR_OPT90009Output> {
    constructor(input: TR_OPT90009Input) {
        super(input, TR_OPT90009Output);
        this.input.tr_code = 'OPT90009';
    }
};

export class TR_OPT90010Input implements ITRInputBase {
    tr_code: string = 'OPT90010';
    '일자': string = '';
    '금액수량구분': string = '';
};
export class TR_OPT90010MultiItem {
    '종목코드1': string = '';
    '차익매도위탁금액': string = '';
    '차익매수위탁금액': string = '';
    '차익매도위탁선물금액': string = '';
    '차익매수위탁선물금액': string = '';
    '차익매도위탁CALL금액': string = '';
    '차익매수위탁CALL금액': string = '';
    '차익매도위탁PUT금액': string = '';
    '차익매수위탁PUT금액': string = '';
    '차익매도자기금액': string = '';
    '차익매수자기금액': string = '';
    '차익매도자기선물금액': string = '';
    '차익매수자기선물금액': string = '';
    '차익매도자기CALL금액': string = '';
    '차익매수자기CALL금액': string = '';
    '차익매도자기PUT금액': string = '';
    '차익매수자기PUT금액': string = '';
    '차익매도금액': string = '';
    '차익매수금액': string = '';
    '차익매도선물금액': string = '';
    '차익매수선물금액': string = '';
    '차익매도CALL금액': string = '';
    '차익매수CALL금액': string = '';
    '차익매도PUT금액': string = '';
    '차익매수PUT금액': string = '';
    '종목코드2': string = '';
    '차익매도위탁금액2': string = '';
    '차익매수위탁금액2': string = '';
    '차익매도위탁선물금액2': string = '';
    '차익매수위탁선물금액2': string = '';
    '차익매도위탁CALL금액2': string = '';
    '차익매수위탁CALL금액2': string = '';
    '차익매도위탁PUT금액2': string = '';
    '차익매수위탁PUT금액2': string = '';
    '차익매도자기금액2': string = '';
    '차익매수자기금액2': string = '';
    '차익매도자기선물금액2': string = '';
    '차익매수자기선물금액2': string = '';
    '차익매도자기CALL금액2': string = '';
    '차익매수자기CALL금액2': string = '';
    '차익매도자기PUT금액2': string = '';
    '차익매수자기PUT금액2': string = '';
    '차익매도금액2': string = '';
    '차익매수금액2': string = '';
    '차익매도선물금액2': string = '';
    '차익매수선물금액2': string = '';
    '차익매도CALL금액2': string = '';
    '차익매수CALL금액2': string = '';
    '차익매도PUT금액2': string = '';
    '차익매수PUT금액2': string = '';
};
export class TR_OPT90010Output implements ITROutputBase {
    multiT: new () => TR_OPT90010MultiItem;
    multi_items: TR_OPT90010MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90010MultiItem; }
    next: boolean = false;
    '기준일자': string = '';
};
/**
 * 차익잔고현황요청
 */
export class TR_OPT90010 extends TRBase<TR_OPT90010Input, TR_OPT90010Output> {
    constructor(input: TR_OPT90010Input) {
        super(input, TR_OPT90010Output);
        this.input.tr_code = 'OPT90010';
    }
};

export class TR_OPT90011Input implements ITRInputBase {
    tr_code: string = 'OPT90011';
    '일자': string = '';
    '금액수량구분': string = '';
};
export class TR_OPT90011MultiItem {
    '종목코드1': string = '';
    '차익매도위탁금액': string = '';
    '차익매수위탁금액': string = '';
    '차익매도위탁선물금액': string = '';
    '차익매수위탁선물금액': string = '';
    '차익매도위탁CALL금액': string = '';
    '차익매수위탁CALL금액': string = '';
    '차익매도위탁PUT금액': string = '';
    '차익매수위탁PUT금액': string = '';
    '차익매도자기금액': string = '';
    '차익매수자기금액': string = '';
    '차익매도자기선물금액': string = '';
    '차익매수자기선물금액': string = '';
    '차익매도자기CALL금액': string = '';
    '차익매수자기CALL금액': string = '';
    '차익매도자기PUT금액': string = '';
    '차익매수자기PUT금액': string = '';
    '차익매도금액': string = '';
    '차익매수금액': string = '';
    '차익매도선물금액': string = '';
    '차익매수선물금액': string = '';
    '차익매도CALL금액': string = '';
    '차익매수CALL금액': string = '';
    '차익매도PUT금액': string = '';
    '차익매수PUT금액': string = '';
    '종목코드2': string = '';
    '차익매도위탁금액2': string = '';
    '차익매수위탁금액2': string = '';
    '차익매도위탁선물금액2': string = '';
    '차익매수위탁선물금액2': string = '';
    '차익매도위탁CALL금액2': string = '';
    '차익매수위탁CALL금액2': string = '';
    '차익매도위탁PUT금액2': string = '';
    '차익매수위탁PUT금액2': string = '';
    '차익매도자기금액2': string = '';
    '차익매수자기금액2': string = '';
    '차익매도자기선물금액2': string = '';
    '차익매수자기선물금액2': string = '';
    '차익매도자기CALL금액2': string = '';
    '차익매수자기CALL금액2': string = '';
    '차익매도자기PUT금액2': string = '';
    '차익매수자기PUT금액2': string = '';
    '차익매도금액2': string = '';
    '차익매수금액2': string = '';
    '차익매도선물금액2': string = '';
    '차익매수선물금액2': string = '';
    '차익매도CALL금액2': string = '';
    '차익매수CALL금액2': string = '';
    '차익매도PUT금액2': string = '';
    '차익매수PUT금액2': string = '';
};
export class TR_OPT90011Output implements ITROutputBase {
    multiT: new () => TR_OPT90011MultiItem;
    multi_items: TR_OPT90011MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90011MultiItem; }
    next: boolean = false;
    '기준일자': string = '';
};
/**
 * 차익잔고현황요청
 */
export class TR_OPT90011 extends TRBase<TR_OPT90011Input, TR_OPT90011Output> {
    constructor(input: TR_OPT90011Input) {
        super(input, TR_OPT90011Output);
        this.input.tr_code = 'OPT90011';
    }
};

export class TR_OPT90012Input implements ITRInputBase {
    tr_code: string = 'OPT90012';
    '일자': string = '';
    '시장구분': string = '';
};
export class TR_OPT90012MultiItem {
    '종목명': string = '';
    '종목코드': string = '';
    '대차거래체결주수': string = '';
    '대차거래상환주수': string = '';
    '잔고주수': string = '';
    '잔고금액': string = '';
};
export class TR_OPT90012Output implements ITROutputBase {
    multiT: new () => TR_OPT90012MultiItem;
    multi_items: TR_OPT90012MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90012MultiItem; }
    next: boolean = false;
};
/**
 * 대차거래내역요청
 */
export class TR_OPT90012 extends TRBase<TR_OPT90012Input, TR_OPT90012Output> {
    constructor(input: TR_OPT90012Input) {
        super(input, TR_OPT90012Output);
        this.input.tr_code = 'OPT90012';
    }
};

export class TR_OPT90013Input implements ITRInputBase {
    tr_code: string = 'OPT90013';
    '시간일자구분': string = '';
    '금액수량구분': string = '';
    '종목코드': string = '';
    '날짜': string = '';
};
export class TR_OPT90013MultiItem {
    '일자': string = '';
    '현재가': string = '';
    '대비기호': string = '';
    '전일대비': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '프로그램매도금액': string = '';
    '프로그램매수금액': string = '';
    '프로그램순매수금액': string = '';
    '프로그램순매수금액증감': string = '';
    '프로그램매도수량': string = '';
    '프로그램매수수량': string = '';
    '프로그램순매수수량': string = '';
    '프로그램순매수수량증감': string = '';
    '기준가시간': string = '';
    '대차거래상환주수합': string = '';
    '잔고수주합': string = '';
};
export class TR_OPT90013Output implements ITROutputBase {
    multiT: new () => TR_OPT90013MultiItem;
    multi_items: TR_OPT90013MultiItem[] = [];
    constructor() { this.multiT = TR_OPT90013MultiItem; }
    next: boolean = false;
};
/**
 * 종목일별프로그램매매추이요청
 */
export class TR_OPT90013 extends TRBase<TR_OPT90013Input, TR_OPT90013Output> {
    constructor(input: TR_OPT90013Input) {
        super(input, TR_OPT90013Output);
        this.input.tr_code = 'OPT90013';
    }
};

export class TR_OPT99999Input implements ITRInputBase {
    tr_code: string = 'OPT99999';
    '시작일자': string = '';
    '종료일자': string = '';
    '시장구분': string = '';
};
export class TR_OPT99999MultiItem {
    '일자1': string = '';
    '일자2': string = '';
    '일자3': string = '';
    '일자4': string = '';
    '일자5': string = '';
    '일자6': string = '';
    '일자7': string = '';
    '일자8': string = '';
};
export class TR_OPT99999Output implements ITROutputBase {
    multiT: new () => TR_OPT99999MultiItem;
    multi_items: TR_OPT99999MultiItem[] = [];
    constructor() { this.multiT = TR_OPT99999MultiItem; }
    next: boolean = false;
};
/**
 * 대차거래상위10종목요청
 */
export class TR_OPT99999 extends TRBase<TR_OPT99999Input, TR_OPT99999Output> {
    constructor(input: TR_OPT99999Input) {
        super(input, TR_OPT99999Output);
        this.input.tr_code = 'OPT99999';
    }
};

export class TR_OPTFOFIDInput implements ITRInputBase {
    tr_code: string = 'OPTFOFID';
    '종목코드': string = '';
};
export class TR_OPTFOFIDOutput implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '전일대비': string = '';
    '매도호가2': string = '';
    '매도호가1': string = '';
    '매수호가1': string = '';
    '매수호가2': string = '';
    '거래량': string = '';
    '거래량전일대비': string = '';
    '누적거래대금': string = '';
    '미결제약정': string = '';
    '미결제약정전일대비': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '이론가': string = '';
    '괴리율': string = '';
    '시장베이시스': string = '';
    '이론베이시스': string = '';
    '행사가': string = '';
    '지수환산': string = '';
    '대비기호': string = '';
    '등락율': string = '';
    '매수수량': string = '';
    '매수호가총건수': string = '';
    '매도호가총건수': string = '';
    '기준가': string = '';
    '잔존일수': string = '';
    '영업일기준잔존일': string = '';
};
/**
 * 선물전체시세요청
 */
export class TR_OPTFOFID extends TRBase<TR_OPTFOFIDInput, TR_OPTFOFIDOutput> {
    constructor(input: TR_OPTFOFIDInput) {
        super(input, TR_OPTFOFIDOutput);
        this.input.tr_code = 'OPTFOFID';
    }
};

export class TR_OPTKWFIDInput implements ITRInputBase {
    tr_code: string = 'OPTKWFID';
    '종목코드': string = '';
};
export class TR_OPTKWFIDMultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '현재가': string = '';
    '기준가': string = '';
    '전일대비': string = '';
    '전일대비기호': string = '';
    '등락율': string = '';
    '거래량': string = '';
    '거래대금': string = '';
    '체결량': string = '';
    '체결강도': string = '';
    '전일거래량대비': string = '';
    '매도호가': string = '';
    '매수호가': string = '';
    '매도1차호가': string = '';
    '매도2차호가': string = '';
    '매도3차호가': string = '';
    '매도4차호가': string = '';
    '매도5차호가': string = '';
    '매수1차호가': string = '';
    '매수2차호가': string = '';
    '매수3차호가': string = '';
    '매수4차호가': string = '';
    '매수5차호가': string = '';
    '상한가': string = '';
    '하한가': string = '';
    '시가': string = '';
    '고가': string = '';
    '저가': string = '';
    '종가': string = '';
    '체결시간': string = '';
    '예상체결가': string = '';
    '예상체결량': string = '';
    '자본금': string = '';
    '액면가': string = '';
    '시가총액': string = '';
    '주식수': string = '';
    '호가시간': string = '';
    '일자': string = '';
    '우선매도잔량': string = '';
    '우선매수잔량': string = '';
    '우선매도건수': string = '';
    '우선매수건수': string = '';
    '총매도잔량': string = '';
    '총매수잔량': string = '';
    '총매도건수': string = '';
    '총매수건수': string = '';
    '패리티': string = '';
    '기어링': string = '';
    '손익분기': string = '';
    '자본지지': string = '';
    'ELW행사가': string = '';
    '전환비율': string = '';
    'ELW만기일': string = '';
    '미결제약정': string = '';
    '미결제전일대비': string = '';
    '이론가': string = '';
    '내재변동성': string = '';
    '델타': string = '';
    '감마': string = '';
    '쎄타': string = '';
    '베가': string = '';
    '로': string = '';
};
export class TR_OPTKWFIDOutput implements ITROutputBase {
    multiT: new () => TR_OPTKWFIDMultiItem;
    multi_items: TR_OPTKWFIDMultiItem[] = [];
    constructor() { this.multiT = TR_OPTKWFIDMultiItem; }
    next: boolean = false;
};
/**
 * 관심종목정보요청
 */
export class TR_OPTKWFID extends TRBase<TR_OPTKWFIDInput, TR_OPTKWFIDOutput> {
    constructor(input: TR_OPTKWFIDInput) {
        super(input, TR_OPTKWFIDOutput);
        this.input.tr_code = 'OPTKWFID';
    }
};

export class TR_OPTKWINVInput implements ITRInputBase {
    tr_code: string = 'OPTKWINV';
    '종목코드': string = '';
};
export class TR_OPTKWINVMultiItem {
    '종목명': string = '';
    '매도수량': string = '';
    '매수수량': string = '';
    '순매수수량': string = '';
    '매도금액': string = '';
    '매수금액': string = '';
    '순매수금액': string = '';
};
export class TR_OPTKWINVOutput implements ITROutputBase {
    multiT: new () => TR_OPTKWINVMultiItem;
    multi_items: TR_OPTKWINVMultiItem[] = [];
    constructor() { this.multiT = TR_OPTKWINVMultiItem; }
    next: boolean = false;
};
/**
 * 관심종목투자자정보요청
 */
export class TR_OPTKWINV extends TRBase<TR_OPTKWINVInput, TR_OPTKWINVOutput> {
    constructor(input: TR_OPTKWINVInput) {
        super(input, TR_OPTKWINVOutput);
        this.input.tr_code = 'OPTKWINV';
    }
};

export class TR_OPTKWPROInput implements ITRInputBase {
    tr_code: string = 'OPTKWPRO';
    '종목코드': string = '';
};
export class TR_OPTKWPROMultiItem {
    '차익매도량': string = '';
    '차익매도대금': string = '';
    '차익매도비율': string = '';
    '차익매수량': string = '';
    '차익매수대금': string = '';
    '차익매수비율': string = '';
    '차익순매수금액': string = '';
    '비차익매도량': string = '';
    '비차익매도대금': string = '';
    '비차익매도비율': string = '';
    '비차익매수량': string = '';
    '비차익매수대금': string = '';
    '비차익매수비율': string = '';
    '비차익순매수금액': string = '';
    '합계매도량': string = '';
    '합계매도대금': string = '';
    '합계매수량': string = '';
    '합계매수대금': string = '';
    '합계순매수': string = '';
};
export class TR_OPTKWPROOutput implements ITROutputBase {
    multiT: new () => TR_OPTKWPROMultiItem;
    multi_items: TR_OPTKWPROMultiItem[] = [];
    constructor() { this.multiT = TR_OPTKWPROMultiItem; }
    next: boolean = false;
};
/**
 * 관심종목프로그램정보요청
 */
export class TR_OPTKWPRO extends TRBase<TR_OPTKWPROInput, TR_OPTKWPROOutput> {
    constructor(input: TR_OPTKWPROInput) {
        super(input, TR_OPTKWPROOutput);
        this.input.tr_code = 'OPTKWPRO';
    }
};

export class TR_OPW00001Input implements ITRInputBase {
    tr_code: string = 'OPW00001';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '조회구분': string = '';
};
export class TR_OPW00001MultiItem {
    '통화코드': string = '';
    '외화예수금': string = '';
    '원화대용평가금': string = '';
    '해외주식증거금': string = '';
    '출금가능금액(예수금)': string = '';
    '주문가능금액(예수금)': string = '';
    '외화미수(합계)': string = '';
    '외화현금미수금': string = '';
    '연체료': string = '';
    'd+1외화예수금': string = '';
    'd+2외화예수금': string = '';
    'd+3외화예수금': string = '';
    'd+4외화예수금': string = '';
};
export class TR_OPW00001Output implements ITROutputBase {
    multiT: new () => TR_OPW00001MultiItem;
    multi_items: TR_OPW00001MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00001MultiItem; }
    next: boolean = false;
    '예수금': string = '';
    '주식증거금현금': string = '';
    '수익증권증거금현금': string = '';
    '익일수익증권매도정산대금': string = '';
    '해외주식원화대용설정금': string = '';
    '신용보증금현금': string = '';
    '신용담보금현금': string = '';
    '추가담보금현금': string = '';
    '기타증거금': string = '';
    '미수확보금': string = '';
    '공매도대금': string = '';
    '신용설정평가금': string = '';
    '수표입금액': string = '';
    '기타수표입금액': string = '';
    '신용담보재사용': string = '';
    '코넥스기본예탁금': string = '';
    'ELW예탁평가금': string = '';
    '신용대주권리예정금액': string = '';
    '생계형가입금액': string = '';
    '생계형입금가능금액': string = '';
    '대용금평가금액(합계)': string = '';
    '잔고대용평가금액': string = '';
    '위탁대용잔고평가금액': string = '';
    '수익증권대용평가금액': string = '';
    '위탁증거금대용': string = '';
    '신용보증금대용': string = '';
    '신용담보금대용': string = '';
    '추가담보금대용': string = '';
    '권리대용금': string = '';
    '출금가능금액': string = '';
    '랩출금가능금액': string = '';
    '주문가능금액': string = '';
    '수익증권매수가능금액': string = '';
    '20%종목주문가능금액': string = '';
    '30%종목주문가능금액': string = '';
    '40%종목주문가능금액': string = '';
    '100%종목주문가능금액': string = '';
    '현금미수금': string = '';
    '현금미수연체료': string = '';
    '현금미수금합계': string = '';
    '신용이자미납': string = '';
    '신용이자미납연체료': string = '';
    '신용이자미납합계': string = '';
    '기타대여금': string = '';
    '기타대여금연체료': string = '';
    '기타대여금합계': string = '';
    '미상환융자금': string = '';
    '융자금합계': string = '';
    '대주금합계': string = '';
    '신용담보비율': string = '';
    '중도이용료': string = '';
    '최소주문가능금액': string = '';
    '대출총평가금액': string = '';
    '예탁담보대출잔고': string = '';
    '매도담보대출잔고': string = '';
    'd+1추정예수금': string = '';
    'd+1매도매수정산금': string = '';
    'd+1매수정산금': string = '';
    'd+1미수변제소요금': string = '';
    'd+1매도정산금': string = '';
    'd+1출금가능금액': string = '';
    'd+2추정예수금': string = '';
    'd+2매도매수정산금': string = '';
    'd+2매수정산금': string = '';
    'd+2미수변제소요금': string = '';
    'd+2매도정산금': string = '';
    'd+2출금가능금액': string = '';
    '출력건수': string = '';
};
/**
 * 예수금상세현황요청
 */
export class TR_OPW00001 extends TRBase<TR_OPW00001Input, TR_OPW00001Output> {
    constructor(input: TR_OPW00001Input) {
        super(input, TR_OPW00001Output);
        this.input.tr_code = 'OPW00001';
    }
};

export class TR_OPW00002Input implements ITRInputBase {
    tr_code: string = 'OPW00002';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '시작조회기간': string = '';
    '종료조회기간': string = '';
};
export class TR_OPW00002MultiItem {
    '일자': string = '';
    '예수금': string = '';
    '담보대출금': string = '';
    '신용융자금': string = '';
    '대주담보금': string = '';
    '대용금': string = '';
    '추정예탁자산': string = '';
    '추정예탁자산수익증권제외': string = '';
};
export class TR_OPW00002Output implements ITROutputBase {
    multiT: new () => TR_OPW00002MultiItem;
    multi_items: TR_OPW00002MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00002MultiItem; }
    next: boolean = false;
    '출력건수': string = '';
};
/**
 * 일별추정예탁자산현황요청
 */
export class TR_OPW00002 extends TRBase<TR_OPW00002Input, TR_OPW00002Output> {
    constructor(input: TR_OPW00002Input) {
        super(input, TR_OPW00002Output);
        this.input.tr_code = 'OPW00002';
    }
};

export class TR_OPW00003Input implements ITRInputBase {
    tr_code: string = 'OPW00003';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '상장폐지조회구분': string = '';
};
export class TR_OPW00003Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '추정예탁자산': string = '';
};
/**
 * 추정자산조회요청
 */
export class TR_OPW00003 extends TRBase<TR_OPW00003Input, TR_OPW00003Output> {
    constructor(input: TR_OPW00003Input) {
        super(input, TR_OPW00003Output);
        this.input.tr_code = 'OPW00003';
    }
};

export class TR_OPW00004Input implements ITRInputBase {
    tr_code: string = 'OPW00004';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '상장폐지조회구분': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW00004MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '보유수량': string = '';
    '평균단가': string = '';
    '현재가': string = '';
    '평가금액': string = '';
    '손익금액': string = '';
    '손익율': string = '';
    '대출일': string = '';
    '매입금액': string = '';
    '결제잔고': string = '';
    '전일매수수량': string = '';
    '전일매도수량': string = '';
    '금일매수수량': string = '';
    '금일매도수량': string = '';
};
export class TR_OPW00004Output implements ITROutputBase {
    multiT: new () => TR_OPW00004MultiItem;
    multi_items: TR_OPW00004MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00004MultiItem; }
    next: boolean = false;
    '계좌명': string = '';
    '지점명': string = '';
    '예수금': string = '';
    'D+2추정예수금': string = '';
    '유가잔고평가액': string = '';
    '예탁자산평가액': string = '';
    '총매입금액': string = '';
    '추정예탁자산': string = '';
    '매도담보대출금': string = '';
    '당일투자원금': string = '';
    '당월투자원금': string = '';
    '누적투자원금': string = '';
    '당일투자손익': string = '';
    '당월투자손익': string = '';
    '누적투자손익': string = '';
    '당일손익율': string = '';
    '당월손익율': string = '';
    '누적손익율': string = '';
    '출력건수': string = '';
};
/**
 * 계좌평가현황요청
 */
export class TR_OPW00004 extends TRBase<TR_OPW00004Input, TR_OPW00004Output> {
    constructor(input: TR_OPW00004Input) {
        super(input, TR_OPW00004Output);
        this.input.tr_code = 'OPW00004';
    }
};

export class TR_OPW00005Input implements ITRInputBase {
    tr_code: string = 'OPW00005';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW00005MultiItem {
    '신용구분': string = '';
    '대출일': string = '';
    '만기일': string = '';
    '종목번호': string = '';
    '종목명': string = '';
    '결제잔고': string = '';
    '현재잔고': string = '';
    '현재가': string = '';
    '매입단가': string = '';
    '매입금액': string = '';
    '평가금액': string = '';
    '평가손익': string = '';
    '손익률': string = '';
};
export class TR_OPW00005Output implements ITROutputBase {
    multiT: new () => TR_OPW00005MultiItem;
    multi_items: TR_OPW00005MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00005MultiItem; }
    next: boolean = false;
    '예수금': string = '';
    '예수금D+1': string = '';
    '예수금D+2': string = '';
    '출금가능금액': string = '';
    '미수확보금': string = '';
    '대용금': string = '';
    '권리대용금': string = '';
    '주문가능현금': string = '';
    '현금미수금': string = '';
    '신용이자미납금': string = '';
    '기타대여금': string = '';
    '미상환융자금': string = '';
    '증거금현금': string = '';
    '증거금대용': string = '';
    '주식매수총액': string = '';
    '평가금액합계': string = '';
    '총손익합계': string = '';
    '총손익률': string = '';
    '총재매수가능금액': string = '';
    '20주문가능금액': string = '';
    '30주문가능금액': string = '';
    '40주문가능금액': string = '';
    '50주문가능금액': string = '';
    '60주문가능금액': string = '';
    '100주문가능금액': string = '';
    '신용융자합계': string = '';
    '신용융자대주합계': string = '';
    '신용담보비율': string = '';
    '예탁담보대출금액': string = '';
    '매도담보대출금액': string = '';
    '조회건수': string = '';
};
/**
 * 체결잔고요청
 */
export class TR_OPW00005 extends TRBase<TR_OPW00005Input, TR_OPW00005Output> {
    constructor(input: TR_OPW00005Input) {
        super(input, TR_OPW00005Output);
        this.input.tr_code = 'OPW00005';
    }
};

export class TR_OPW00006Input implements ITRInputBase {
    tr_code: string = 'OPW00006';
    '일자': string = '';
    '지점코드': string = '';
    '시작주문번호': string = '';
};
export class TR_OPW00006MultiItem {
    '주문번호': string = '';
    '원주문번호': string = '';
    '모주문번호': string = '';
    '계좌번호': string = '';
    '계좌명': string = '';
    '종목코드': string = '';
    '정정구분': string = '';
    '매도수구분': string = '';
    '주문구분': string = '';
    '통신주문구분': string = '';
    '주문수량': string = '';
    '주문지수': string = '';
    '주문잔량': string = '';
    '체결수량': string = '';
    '체결지수': string = '';
    '접수여부': string = '';
    '체결번호': string = '';
};
export class TR_OPW00006Output implements ITROutputBase {
    multiT: new () => TR_OPW00006MultiItem;
    multi_items: TR_OPW00006MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00006MultiItem; }
    next: boolean = false;
    '출력건수': string = '';
};
/**
 * 관리자별주문체결내역요청
 */
export class TR_OPW00006 extends TRBase<TR_OPW00006Input, TR_OPW00006Output> {
    constructor(input: TR_OPW00006Input) {
        super(input, TR_OPW00006Output);
        this.input.tr_code = 'OPW00006';
    }
};

export class TR_OPW00007Input implements ITRInputBase {
    tr_code: string = 'OPW00007';
    '주문일자': string = '';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '조회구분': string = '';
    '주식채권구분': string = '';
    '매도수구분': string = '';
    '종목코드': string = '';
    '시작주문번호': string = '';
};
export class TR_OPW00007MultiItem {
    '주문번호': string = '';
    '종목번호': string = '';
    '매매구분': string = '';
    '신용구분': string = '';
    '주문수량': string = '';
    '주문단가': string = '';
    '확인수량': string = '';
    '접수구분': string = '';
    '반대여부': string = '';
    '주문시간': string = '';
    '원주문': string = '';
    '종목명': string = '';
    '주문구분': string = '';
    '대출일': string = '';
    '체결수량': string = '';
    '체결단가': string = '';
    '주문잔량': string = '';
    '통신구분': string = '';
    '정정취소': string = '';
    '확인시간': string = '';
};
export class TR_OPW00007Output implements ITROutputBase {
    multiT: new () => TR_OPW00007MultiItem;
    multi_items: TR_OPW00007MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00007MultiItem; }
    next: boolean = false;
    '출력건수': string = '';
};
/**
 * 계좌별주문체결내역상세요청
 */
export class TR_OPW00007 extends TRBase<TR_OPW00007Input, TR_OPW00007Output> {
    constructor(input: TR_OPW00007Input) {
        super(input, TR_OPW00007Output);
        this.input.tr_code = 'OPW00007';
    }
};

export class TR_OPW00008Input implements ITRInputBase {
    tr_code: string = 'OPW00008';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '시작결제번호': string = '';
};
export class TR_OPW00008MultiItem {
    '일련번호': string = '';
    '종목번호': string = '';
    '대출일': string = '';
    '수량': string = '';
    '약정금액': string = '';
    '수수료': string = '';
    '소득세': string = '';
    '농특세': string = '';
    '종목명': string = '';
    '매도수구분': string = '';
    '단가': string = '';
    '정산금액': string = '';
    '거래세': string = '';
    '주민세': string = '';
    '신용구분': string = '';
};
export class TR_OPW00008Output implements ITROutputBase {
    multiT: new () => TR_OPW00008MultiItem;
    multi_items: TR_OPW00008MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00008MultiItem; }
    next: boolean = false;
    '매매일자': string = '';
    '결제일자': string = '';
    '매도정산합': string = '';
    '매수정산합': string = '';
    '조회건수': string = '';
};
/**
 * 계좌별익일결제예정내역요청
 */
export class TR_OPW00008 extends TRBase<TR_OPW00008Input, TR_OPW00008Output> {
    constructor(input: TR_OPW00008Input) {
        super(input, TR_OPW00008Output);
        this.input.tr_code = 'OPW00008';
    }
};

export class TR_OPW00009Input implements ITRInputBase {
    tr_code: string = 'OPW00009';
    '주문일자': string = '';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '주식채권구분': string = '';
    '시장구분': string = '';
    '매도수구분': string = '';
    '조회구분': string = '';
    '종목코드': string = '';
    '시작주문번호': string = '';
};
export class TR_OPW00009MultiItem {
    '주식채권구분': string = '';
    '주문번호': string = '';
    '종목번호': string = '';
    '매매구분': string = '';
    '주문유형구분': string = '';
    '주문수량': string = '';
    '주문단가': string = '';
    '확인수량': string = '';
    '예약반대': string = '';
    '체결번호': string = '';
    '접수구분': string = '';
    '원주문번호': string = '';
    '종목명': string = '';
    '결제구분': string = '';
    '신용거래구분': string = '';
    '체결수량': string = '';
    '체결단가': string = '';
    '통신구분': string = '';
    '정정취소구분': string = '';
    '체결시간': string = '';
};
export class TR_OPW00009Output implements ITROutputBase {
    multiT: new () => TR_OPW00009MultiItem;
    multi_items: TR_OPW00009MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00009MultiItem; }
    next: boolean = false;
    '매도약정금액': string = '';
    '매수약정금액': string = '';
    '약정금액': string = '';
    '조회건수': string = '';
};
/**
 * 계좌별주문체결현황요청
 */
export class TR_OPW00009 extends TRBase<TR_OPW00009Input, TR_OPW00009Output> {
    constructor(input: TR_OPW00009Input) {
        super(input, TR_OPW00009Output);
        this.input.tr_code = 'OPW00009';
    }
};

export class TR_OPW00010Input implements ITRInputBase {
    tr_code: string = 'OPW00010';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '입출금액': string = '';
    '종목번호': string = '';
    '매매구분': string = '';
    '매매수량': string = '';
    '매수가격': string = '';
    '예상매수단가': string = '';
};
export class TR_OPW00010Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '증거금20주문가능금액': string = '';
    '증거금20주문가능수량': string = '';
    '증거금30주문가능금액': string = '';
    '증거금30주문가능수량': string = '';
    '증거금40주문가능금액': string = '';
    '증거금40주문가능수량': string = '';
    '증거금50주문가능금액': string = '';
    '증거금50주문가능수량': string = '';
    '증거금60주문가능금액': string = '';
    '증거금60주문가능수량': string = '';
    '증거금감면60주문가능금': string = '';
    '증거금감면60주문가능수': string = '';
    '증거금100주문가능금액': string = '';
    '증거금100주문가능수량': string = '';
    '전일재사용가능금액': string = '';
    '금일재사용가능금액': string = '';
    '예수금': string = '';
    '대용금': string = '';
    '미수금': string = '';
    '주문가능대용': string = '';
    '주문가능현금': string = '';
    '인출가능금액': string = '';
    '익일인출가능금액': string = '';
    '매입금액': string = '';
    '수수료': string = '';
    '매입정산금': string = '';
    'D2추정예수금': string = '';
    '증거금감면적용구분': string = '';
};
/**
 * 주문인출가능금액요청
 */
export class TR_OPW00010 extends TRBase<TR_OPW00010Input, TR_OPW00010Output> {
    constructor(input: TR_OPW00010Input) {
        super(input, TR_OPW00010Output);
        this.input.tr_code = 'OPW00010';
    }
};

export class TR_OPW00011Input implements ITRInputBase {
    tr_code: string = 'OPW00011';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '종목번호': string = '';
    '매수가격': string = '';
};
export class TR_OPW00011Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '종목증거금율': string = '';
    '계좌증거금율': string = '';
    '적용증거금율': string = '';
    '증거금20주문가능금액': string = '';
    '증거금20주문가능수량': string = '';
    '증거금20전일재사용금액': string = '';
    '증거금20금일재사용금액': string = '';
    '증거금30주문가능금액': string = '';
    '증거금30주문가능수량': string = '';
    '증거금30전일재사용금액': string = '';
    '증거금30금일재사용금액': string = '';
    '증거금40주문가능금액': string = '';
    '증거금40주문가능수량': string = '';
    '증거금40전일재사용금액': string = '';
    '증거금40금일재사용금액': string = '';
    '증거금50주문가능금액': string = '';
    '증거금50주문가능수량': string = '';
    '증거금50전일재사용금액': string = '';
    '증거금50금일재사용금액': string = '';
    '증거금60주문가능금액': string = '';
    '증거금60주문가능수량': string = '';
    '증거금60전일재사용금액': string = '';
    '증거금60금일재사용금액': string = '';
    '증거금100주문가능금액': string = '';
    '증거금100주문가능수량': string = '';
    '증거금100전일재사용금액': string = '';
    '증거금100금일재사용금액': string = '';
    '미수불가주문가능금액': string = '';
    '미수불가주문가능수량': string = '';
    '미수불가전일재사용금액': string = '';
    '미수불가금일재사용금액': string = '';
    '예수금': string = '';
    '대용금': string = '';
    '미수금': string = '';
    '주문가능대용': string = '';
    '주문가능현금': string = '';
};
/**
 * 증거금율별주문가능수량조회요청
 */
export class TR_OPW00011 extends TRBase<TR_OPW00011Input, TR_OPW00011Output> {
    constructor(input: TR_OPW00011Input) {
        super(input, TR_OPW00011Output);
        this.input.tr_code = 'OPW00011';
    }
};

export class TR_OPW00012Input implements ITRInputBase {
    tr_code: string = 'OPW00012';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '종목번호': string = '';
    '매수가격': string = '';
};
export class TR_OPW00012Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '종목보증금율': string = '';
    '종목보증금율명': string = '';
    '보증금30주문가능금액': string = '';
    '보증금30주문가능수량': string = '';
    '보증금30전일재사용금액': string = '';
    '보증금30금일재사용금액': string = '';
    '보증금40주문가능금액': string = '';
    '보증금40주문가능수량': string = '';
    '보증금40전일재사용금액': string = '';
    '보증금40금일재사용금액': string = '';
    '보증금50주문가능금액': string = '';
    '보증금50주문가능수량': string = '';
    '보증금50전일재사용금액': string = '';
    '보증금50금일재사용금액': string = '';
    '보증금60주문가능금액': string = '';
    '보증금60주문가능수량': string = '';
    '보증금60전일재사용금액': string = '';
    '보증금60금일재사용금액': string = '';
    '예수금': string = '';
    '대용금': string = '';
    '미수금': string = '';
    '주문가능대용': string = '';
    '주문가능현금': string = '';
    '미수가능금액': string = '';
    '미수가능수량': string = '';
    '미수불가금액': string = '';
    '미수불가수량': string = '';
};
/**
 * 신용보증금율별주문가능수량조회요청
 */
export class TR_OPW00012 extends TRBase<TR_OPW00012Input, TR_OPW00012Output> {
    constructor(input: TR_OPW00012Input) {
        super(input, TR_OPW00012Output);
        this.input.tr_code = 'OPW00012';
    }
};

export class TR_OPW00013Input implements ITRInputBase {
    tr_code: string = 'OPW00013';
    '계좌번호': string = '';
    '비밀번호': string = '';
};
export class TR_OPW00013Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '금일재사용대상금액': string = '';
    '금일재사용사용금액': string = '';
    '금일재사용가능금액': string = '';
    '금일재사용제한금액': string = '';
    '금일재사용가능금액최종': string = '';
    '전일재사용대상금액': string = '';
    '전일재사용사용금액': string = '';
    '전일재사용가능금액': string = '';
    '전일재사용제한금액': string = '';
    '전일재사용가능금액최종': string = '';
    '현금금액': string = '';
    '현금증거금': string = '';
    '사용가능현금': string = '';
    '현금사용제한금액': string = '';
    '사용가능현금최종': string = '';
    '대용금액': string = '';
    '대용증거금': string = '';
    '사용가능대용': string = '';
    '대용사용제한금액': string = '';
    '사용가능대용최종': string = '';
    '신용보증금현금': string = '';
    '신용보증금대용': string = '';
    '신용담보금현금': string = '';
    '신용담보금대용': string = '';
    '미수금': string = '';
    '대주담보금재사용금': string = '';
    '20주문가능금액': string = '';
    '30주문가능금액': string = '';
    '40주문가능금액': string = '';
    '50주문가능금액': string = '';
    '60주문가능금액': string = '';
    '100주문가능금액': string = '';
    '금일신용상환손실금액': string = '';
    '전일신용상환손실금액': string = '';
    '금일대주상환손실대용증거금': string = '';
    '전일대주상환손실대용증거금': string = '';
    '평가대용금(현물사용제외)': string = '';
    '평가대용비율': string = '';
    '신용대용증거금': string = '';
    '현금주문대용증거금': string = '';
    '신용주문대용증거금': string = '';
    '신용대용환산금': string = '';
    '대용가능금액': string = '';
    '대용가능금액2': string = '';
    '현금대용부족금': string = '';
    '신용대용부족금': string = '';
    '현금주문가능대용금': string = '';
    '신용주문가능대용금': string = '';
};
/**
 * 증거금세부내역조회요청
 */
export class TR_OPW00013 extends TRBase<TR_OPW00013Input, TR_OPW00013Output> {
    constructor(input: TR_OPW00013Input) {
        super(input, TR_OPW00013Output);
        this.input.tr_code = 'OPW00013';
    }
};

export class TR_OPW00014Input implements ITRInputBase {
    tr_code: string = 'OPW00014';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW00014Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '일치여부': string = '';
};
/**
 * 비밀번호일치여부요청
 */
export class TR_OPW00014 extends TRBase<TR_OPW00014Input, TR_OPW00014Output> {
    constructor(input: TR_OPW00014Input) {
        super(input, TR_OPW00014Output);
        this.input.tr_code = 'OPW00014';
    }
};

export class TR_OPW00015Input implements ITRInputBase {
    tr_code: string = 'OPW00015';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '구분': string = '';
    '종목코드': string = '';
    '통화코드': string = '';
    '상품구분': string = '';
    '비밀번호입력매체구분': string = '';
    '고객정보제한여부': string = '';
    '내부정보제한여부': string = '';
    '원화대용입출금제외여부': string = '';
    '해외거래소코드': string = '';
};
export class TR_OPW00015MultiItem {
    '거래일자': string = '';
    '거래번호': string = '';
    '적요명': string = '';
    '신용거래구분명': string = '';
    '정산금액': string = '';
    '대출금상환': string = '';
    '거래금액(외)': string = '';
    '정산금액(외)': string = '';
    '예수금잔고': string = '';
    '통화코드': string = '';
    '거래종류구분': string = '';
    '거래종류명': string = '';
    '종목명': string = '';
    '거래금액': string = '';
    '거래및농특세': string = '';
    '상환차금': string = '';
    '거래세(외)': string = '';
    '연체합': string = '';
    '외화예수금잔고': string = '';
    '매체구분명': string = '';
    '입출구분': string = '';
    '입출구분명': string = '';
    '원거래번호': string = '';
    '종목코드': string = '';
    '거래수량/좌수': string = '';
    '수수료': string = '';
    '이자/대주이용': string = '';
    '수수료(외)': string = '';
    '연체합(외)': string = '';
    '유가금잔': string = '';
    '처리시간': string = '';
    'ISIN코드': string = '';
    '거래소코드': string = '';
    '거래소명': string = '';
    '거래단가/환율': string = '';
    '소득/주민세': string = '';
    '대출일': string = '';
    '미수(원/주)': string = '';
    '변제합': string = '';
    '체결일': string = '';
    '출납번호': string = '';
    '처리자': string = '';
    '처리점': string = '';
    '매매형태': string = '';
    '과세기준가': string = '';
    '세금수수료합': string = '';
    '외국납부세액(외)': string = '';
    '미수(외)': string = '';
    '변제합(외)': string = '';
    '입금자': string = '';
    '거래내역구분': string = '';
};
export class TR_OPW00015Output implements ITROutputBase {
    multiT: new () => TR_OPW00015MultiItem;
    multi_items: TR_OPW00015MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00015MultiItem; }
    next: boolean = false;
    '계좌번호': string = '';
    '출력건수': string = '';
};
/**
 * 위탁종합거래내역요청
 */
export class TR_OPW00015 extends TRBase<TR_OPW00015Input, TR_OPW00015Output> {
    constructor(input: TR_OPW00015Input) {
        super(input, TR_OPW00015Output);
        this.input.tr_code = 'OPW00015';
    }
};

export class TR_OPW00016Input implements ITRInputBase {
    tr_code: string = 'OPW00016';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '평가시작일': string = '';
    '평가종료일': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW00016Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '관리사원번호': string = '';
    '관리자명': string = '';
    '관리자지점': string = '';
    '예수금_초': string = '';
    '예수금_말': string = '';
    '유가증권평가금액_초': string = '';
    '유가증권평가금액_말': string = '';
    '대주담보금_초': string = '';
    '대주담보금_말': string = '';
    '신용융자금_초': string = '';
    '신용융자금_말': string = '';
    '현금미수금_초': string = '';
    '현금미수금_말': string = '';
    '원화대용금_초': string = '';
    '원화대용금_말': string = '';
    '대주평가금_초': string = '';
    '대주평가금_말': string = '';
    '권리평가금_초': string = '';
    '권리평가금_말': string = '';
    '대출금_초': string = '';
    '대출금_말': string = '';
    '기타대여금_초': string = '';
    '기타대여금_말': string = '';
    '신용이자미납금_초': string = '';
    '신용이자미납금_말': string = '';
    '신용이자_초': string = '';
    '신용이자_말': string = '';
    '순자산액계_초': string = '';
    '순자산액계_말': string = '';
    '투자원금평잔': string = '';
    '평가손익': string = '';
    '수익률': string = '';
    '회전율': string = '';
    '기간내총입금': string = '';
    '기간내총출금': string = '';
    '기간내총입고': string = '';
    '기간내총출고': string = '';
    '선물대용매도금액': string = '';
    '위탁대용매도금액': string = '';
};
/**
 * 일별계좌수익률상세현황요청
 */
export class TR_OPW00016 extends TRBase<TR_OPW00016Input, TR_OPW00016Output> {
    constructor(input: TR_OPW00016Input) {
        super(input, TR_OPW00016Output);
        this.input.tr_code = 'OPW00016';
    }
};

export class TR_OPW00017Input implements ITRInputBase {
    tr_code: string = 'OPW00017';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW00017Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    'D+2추정예수금': string = '';
    '신용이자미납금': string = '';
    '기타대여금': string = '';
    '일반주식평가금액D+2': string = '';
    '예탁담보대출금D+2': string = '';
    '예탁담보주식평가금액D+2': string = '';
    '신용융자금D+2': string = '';
    '신용융자평가금D+2': string = '';
    '신용대주담보금D+2': string = '';
    '신용대주평가금D+2': string = '';
    '입금금액': string = '';
    '출금금액': string = '';
    '입고금액': string = '';
    '출고금액': string = '';
    '매도금액': string = '';
    '매수금액': string = '';
    '수수료': string = '';
    '세금': string = '';
    '주식매입자금대출금': string = '';
    'RP평가금액': string = '';
    '채권평가금액': string = '';
    'ELS평가금액': string = '';
    '신용이자금액': string = '';
    '매도대금담보대출이자금액': string = '';
    '배당금액': string = '';
};
/**
 * 계좌별당일현황요청
 */
export class TR_OPW00017 extends TRBase<TR_OPW00017Input, TR_OPW00017Output> {
    constructor(input: TR_OPW00017Input) {
        super(input, TR_OPW00017Output);
        this.input.tr_code = 'OPW00017';
    }
};

export class TR_OPW00018Input implements ITRInputBase {
    tr_code: string = 'OPW00018';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
    '조회구분': string = '';
};
export class TR_OPW00018MultiItem {
    '종목번호': string = '';
    '종목명': string = '';
    '평가손익': string = '';
    '수익률(%)': string = '';
    '매입가': string = '';
    '전일종가': string = '';
    '보유수량': string = '';
    '매매가능수량': string = '';
    '현재가': string = '';
    '전일매수수량': string = '';
    '전일매도수량': string = '';
    '금일매수수량': string = '';
    '금일매도수량': string = '';
    '매입금액': string = '';
    '매입수수료': string = '';
    '평가금액': string = '';
    '평가수수료': string = '';
    '세금': string = '';
    '수수료합': string = '';
    '보유비중(%)': string = '';
    '신용구분': string = '';
    '신용구분명': string = '';
    '대출일': string = '';
};
export class TR_OPW00018Output implements ITROutputBase {
    multiT: new () => TR_OPW00018MultiItem;
    multi_items: TR_OPW00018MultiItem[] = [];
    constructor() { this.multiT = TR_OPW00018MultiItem; }
    next: boolean = false;
    '총매입금액': string = '';
    '총평가금액': string = '';
    '총평가손익금액': string = '';
    '총수익률(%)': string = '';
    '추정예탁자산': string = '';
    '총대출금': string = '';
    '총융자금액': string = '';
    '총대주금액': string = '';
    '조회건수': string = '';
};
/**
 * 계좌평가잔고내역요청
 */
export class TR_OPW00018 extends TRBase<TR_OPW00018Input, TR_OPW00018Output> {
    constructor(input: TR_OPW00018Input) {
        super(input, TR_OPW00018Output);
        this.input.tr_code = 'OPW00018';
    }
};

export class TR_OPW20001Input implements ITRInputBase {
    tr_code: string = 'OPW20001';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '입력건수': string = '';
    '종목코드': string = '';
    '매수매도구분': string = '';
    '주문수량': string = '';
    '잔고수량': string = '';
};
export class TR_OPW20001Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '현재위탁증거금총액': string = '';
    '현재현금예탁필요액': string = '';
    '체결위탁증거금총액': string = '';
    '체결현금예탁필요액': string = '';
    '증감위탁증거금총액': string = '';
    '증감현금예탁필요액': string = '';
};
/**
 * 선물옵션청산주문위탁증거금가계산요청
 */
export class TR_OPW20001 extends TRBase<TR_OPW20001Input, TR_OPW20001Output> {
    constructor(input: TR_OPW20001Input) {
        super(input, TR_OPW20001Output);
        this.input.tr_code = 'OPW20001';
    }
};

export class TR_OPW20002Input implements ITRInputBase {
    tr_code: string = 'OPW20002';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '시장구분': string = '';
    '체결일자': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20002Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '선물수수료': string = '';
    '옵션수수료': string = '';
    '주식옵션수수료': string = '';
    '선물매도수량': string = '';
    '선물매도금액': string = '';
    '선물매도평균가격': string = '';
    '선물매수수량': string = '';
    '선물매수금액': string = '';
    '선물매수평균가격': string = '';
    '선물전매수량': string = '';
    '선물전매금액': string = '';
    '선물환매수량': string = '';
    '선물환매금액': string = '';
    '콜매도수량': string = '';
    '콜매도금액': string = '';
    '콜매도평균가격': string = '';
    '콜매수수량': string = '';
    '콜매수금액': string = '';
    '콜매수평균가격': string = '';
    '콜전매수량': string = '';
    '콜전매금액': string = '';
    '콜환매수량': string = '';
    '콜환매금액': string = '';
    '풋매도수량': string = '';
    '풋매도금액': string = '';
    '풋매도평균가격': string = '';
    '풋매수수량': string = '';
    '풋매수금액': string = '';
    '풋매수평균가격': string = '';
    '풋전매수량': string = '';
    '풋전매금액': string = '';
    '풋환매수량': string = '';
    '풋환매금액': string = '';
    '선물최종매도수량': string = '';
    '선물최종매도금액': string = '';
    '선물최종매도평균가격': string = '';
    '선물최종매수수량': string = '';
    '선물최종매수금액': string = '';
    '선물최종매수평균가격': string = '';
    '콜권리행사수량': string = '';
    '콜권리행사금액': string = '';
    '콜권리행사가격': string = '';
    '풋권리행사수량': string = '';
    '풋권리행사금액': string = '';
    '풋권리행사가격': string = '';
    '콜권리배정수량': string = '';
    '콜권리배정금액': string = '';
    '콜권리배정가격': string = '';
    '풋권리배정수량': string = '';
    '풋권리배정금액': string = '';
    '풋권리배정가격': string = '';
};
/**
 * 선옵당일매매변동현황요청
 */
export class TR_OPW20002 extends TRBase<TR_OPW20002Input, TR_OPW20002Output> {
    constructor(input: TR_OPW20002Input) {
        super(input, TR_OPW20002Output);
        this.input.tr_code = 'OPW20002';
    }
};

export class TR_OPW20003Input implements ITRInputBase {
    tr_code: string = 'OPW20003';
    '계좌번호': string = '';
    '시장구분': string = '';
    '비밀번호': string = '';
    '시작일자': string = '';
    '종료일자': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20003MultiItem {
    '종목코드': string = '';
    '매도수구분': string = '';
    '잔고수량': string = '';
    '평균가격': string = '';
    '전일종가': string = '';
    '평가손익': string = '';
    '종목명': string = '';
};
export class TR_OPW20003Output implements ITROutputBase {
    multiT: new () => TR_OPW20003MultiItem;
    multi_items: TR_OPW20003MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20003MultiItem; }
    next: boolean = false;
    '선물약정금액': string = '';
    '옵션약정금액': string = '';
    '선물정산손익': string = '';
    '옵션매매손익': string = '';
    '총손익': string = '';
    '평균예탁금액': string = '';
    '예탁총액': string = '';
    '수수료': string = '';
    '수익율': string = '';
    '조회건수': string = '';
};
/**
 * 선옵기간손익조회요청
 */
export class TR_OPW20003 extends TRBase<TR_OPW20003Input, TR_OPW20003Output> {
    constructor(input: TR_OPW20003Input) {
        super(input, TR_OPW20003Output);
        this.input.tr_code = 'OPW20003';
    }
};

export class TR_OPW20004Input implements ITRInputBase {
    tr_code: string = 'OPW20004';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '조회일': string = '';
    '종목구분': string = '';
    '조회구분': string = '';
    '정렬구분': string = '';
    '비밀번호입력매체구분': string = '';
    '정규시간외구분': string = '';
};
export class TR_OPW20004MultiItem {
    '주문번호': string = '';
    '매매구분': string = '';
    '종목코드': string = '';
    '주문수량': string = '';
    '체결수량': string = '';
    '미체결수량': string = '';
    '접수번호': string = '';
    '접수구분': string = '';
    '조작자사번': string = '';
    '원주문번호': string = '';
    '주문유형': string = '';
    '종목명': string = '';
    '주문가격': string = '';
    '체결가격': string = '';
    '체결번호': string = '';
    '약정시간': string = '';
    '접수시간': string = '';
    '매체': string = '';
};
export class TR_OPW20004Output implements ITROutputBase {
    multiT: new () => TR_OPW20004MultiItem;
    multi_items: TR_OPW20004MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20004MultiItem; }
    next: boolean = false;
    '출력건수': string = '';
};
/**
 * 선옵주문체결내역상세요청
 */
export class TR_OPW20004 extends TRBase<TR_OPW20004Input, TR_OPW20004Output> {
    constructor(input: TR_OPW20004Input) {
        super(input, TR_OPW20004Output);
        this.input.tr_code = 'OPW20004';
    }
};

export class TR_OPW20005Input implements ITRInputBase {
    tr_code: string = 'OPW20005';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '조회일': string = '';
    '종목구분': string = '';
    '조회구분': string = '';
    '정렬구분': string = '';
    '정규시간외구분': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20005MultiItem {
    '주문번호': string = '';
    '매매구분': string = '';
    '종목코드': string = '';
    '주문수량': string = '';
    '체결수량': string = '';
    '미체결수량': string = '';
    '접수번호': string = '';
    '접수구분': string = '';
    '조작자사번': string = '';
    '원주문번호': string = '';
    '주문유형': string = '';
    '종목명': string = '';
    '주문가격': string = '';
    '체결가': string = '';
    '체결번호': string = '';
    '약정시간': string = '';
    '접수시간': string = '';
    '매체': string = '';
};
export class TR_OPW20005Output implements ITROutputBase {
    multiT: new () => TR_OPW20005MultiItem;
    multi_items: TR_OPW20005MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20005MultiItem; }
    next: boolean = false;
    '출력건수': string = '';
};
/**
 * 선옵주문체결내역상세평균가요청
 */
export class TR_OPW20005 extends TRBase<TR_OPW20005Input, TR_OPW20005Output> {
    constructor(input: TR_OPW20005Input) {
        super(input, TR_OPW20005Output);
        this.input.tr_code = 'OPW20005';
    }
};

export class TR_OPW20006Input implements ITRInputBase {
    tr_code: string = 'OPW20006';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '조회일자': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20006MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '매매일자': string = '';
    '매매구분': string = '';
    '잔고수량': string = '';
    '매입단가': string = '';
    '매매금액': string = '';
    '현재가': string = '';
    '평가손익': string = '';
    '손익율': string = '';
    '평가금액': string = '';
};
export class TR_OPW20006Output implements ITROutputBase {
    multiT: new () => TR_OPW20006MultiItem;
    multi_items: TR_OPW20006MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20006MultiItem; }
    next: boolean = false;
    '선물매도수량': string = '';
    '선물매수수량': string = '';
    '콜매도수량': string = '';
    '콜매수수량': string = '';
    '풋매도수량': string = '';
    '풋매수수량': string = '';
    '선물매도금액': string = '';
    '선물매수금액': string = '';
    '콜매도금액': string = '';
    '콜매수금액': string = '';
    '풋매도금액': string = '';
    '풋매수금액': string = '';
    '약정합계': string = '';
    '손익합계': string = '';
    '조회건수': string = '';
};
/**
 * 선옵잔고상세현황요청
 */
export class TR_OPW20006 extends TRBase<TR_OPW20006Input, TR_OPW20006Output> {
    constructor(input: TR_OPW20006Input) {
        super(input, TR_OPW20006Output);
        this.input.tr_code = 'OPW20006';
    }
};

export class TR_OPW20007Input implements ITRInputBase {
    tr_code: string = 'OPW20007';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20007MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '매도매수구분': string = '';
    '수량': string = '';
    '매입단가': string = '';
    '현재가': string = '';
    '평가손익': string = '';
    '청산가능수량': string = '';
    '약정금액': string = '';
    '평가금액': string = '';
};
export class TR_OPW20007Output implements ITROutputBase {
    multiT: new () => TR_OPW20007MultiItem;
    multi_items: TR_OPW20007MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20007MultiItem; }
    next: boolean = false;
    '약정금액합계': string = '';
    '평가손익합계': string = '';
    '출력건수': string = '';
};
/**
 * 선옵잔고현황정산가기준요청
 */
export class TR_OPW20007 extends TRBase<TR_OPW20007Input, TR_OPW20007Output> {
    constructor(input: TR_OPW20007Input) {
        super(input, TR_OPW20007Output);
        this.input.tr_code = 'OPW20007';
    }
};

export class TR_OPW20008Input implements ITRInputBase {
    tr_code: string = 'OPW20008';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20008Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '계좌명': string = '';
    '예탁총액': string = '';
    '추정예탁총액': string = '';
    '예탁현금': string = '';
    '추정예탁현금': string = '';
    '선물당일차금': string = '';
    '선물갱신차금': string = '';
    '선물최종결제차금': string = '';
    '선물예상정산손익': string = '';
    '옵션매수대금': string = '';
    '옵션매도대금': string = '';
    '옵션행사차금': string = '';
    '옵션배정차금': string = '';
    '주식옵션행사대금': string = '';
    '주식옵션배정대금': string = '';
    '인수도대금': string = '';
    '전일대용매도체결금액': string = '';
    '금일대용매도체결금액': string = '';
    '선물수수료': string = '';
    '옵션수수료': string = '';
    '결제가격수신여부': string = '';
    '유지증거금총액': string = '';
    '유지증거금총액부족액': string = '';
    '유지증거금현금부족액': string = '';
    '옵션잔고평가손익': string = '';
    '예탁대용': string = '';
    '익일결제예정금액': string = '';
};
/**
 * 계좌별결제예상내역조회요청
 */
export class TR_OPW20008 extends TRBase<TR_OPW20008Input, TR_OPW20008Output> {
    constructor(input: TR_OPW20008Input) {
        super(input, TR_OPW20008Output);
        this.input.tr_code = 'OPW20008';
    }
};

export class TR_OPW20009Input implements ITRInputBase {
    tr_code: string = 'OPW20009';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '종목코드': string = '';
    '매도수구분': string = '';
    '주문유형': string = '';
    '주문가격': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20009Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '예탁총액': string = '';
    '예탁현금': string = '';
    '위탁증거금': string = '';
    '현금증거금': string = '';
    '주문가능금액': string = '';
    '주문가능총액': string = '';
    '신규가능수량': string = '';
    '청산가능수량': string = '';
    '총가능수량': string = '';
    '필요증거금총액': string = '';
    '총액부족액': string = '';
    '주문가능현금': string = '';
    '필요증거금현금': string = '';
    '현금부족액': string = '';
    '주문가능대용금': string = '';
    '필요증거금대용금': string = '';
    '대용금부족액': string = '';
};
/**
 * 선옵계좌별주문가능수량요청
 */
export class TR_OPW20009 extends TRBase<TR_OPW20009Input, TR_OPW20009Output> {
    constructor(input: TR_OPW20009Input) {
        super(input, TR_OPW20009Output);
        this.input.tr_code = 'OPW20009';
    }
};

export class TR_OPW20010Input implements ITRInputBase {
    tr_code: string = 'OPW20010';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20010Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '예탁총액': string = '';
    '예탁현금': string = '';
    '에탁대용': string = '';
    '증거금총액': string = '';
    '증거금현금': string = '';
    '증거금대용금': string = '';
    '주문가능총액': string = '';
    '주문가능현금': string = '';
    '주문가능대용금': string = '';
    '추가증거금총액': string = '';
    '추가증거금현금': string = '';
    '추가증거금대용금': string = '';
    '인출가능총액': string = '';
    '인출가능현금': string = '';
    '인출가능대용금': string = '';
    '순자산금액': string = '';
    '익일예탁총액': string = '';
    '개장예탁총액': string = '';
    '선물정산차금': string = '';
    '선물청산손익': string = '';
    '선물평가손익': string = '';
    '선물약정금액': string = '';
    '옵션결제차금': string = '';
    '옵션청산손익': string = '';
    '옵션평가손익': string = '';
    '옵션약정금액': string = '';
    '전일장종료예탁총액': string = '';
    '전일장종료예탁현금': string = '';
    '전일장종료예탁대용금': string = '';
};
/**
 * 선옵예탁금및증거금조회요청
 */
export class TR_OPW20010 extends TRBase<TR_OPW20010Input, TR_OPW20010Output> {
    constructor(input: TR_OPW20010Input) {
        super(input, TR_OPW20010Output);
        this.input.tr_code = 'OPW20010';
    }
};

export class TR_OPW20011Input implements ITRInputBase {
    tr_code: string = 'OPW20011';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '증거금구분': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20011MultiItem {
    '기초자산명': string = '';
    '최대구간증거금': string = '';
    '증거금감면액': string = '';
    '구간증거금01': string = '';
    '구간증거금02': string = '';
    '구간증거금03': string = '';
    '구간증거금04': string = '';
    '구간증거금05': string = '';
    '구간증거금06': string = '';
    '구간증거금07': string = '';
    '구간증거금08': string = '';
    '구간증거금09': string = '';
    '구간증거금10': string = '';
    '구간증거금11': string = '';
    '구간증거금12': string = '';
    '구간증거금13': string = '';
    '구간증거금14': string = '';
    '구간증거금15': string = '';
    '구간증거금16': string = '';
    '구간증거금17': string = '';
    '구간증거금18': string = '';
    '구간증거금19': string = '';
    '구간증거금20': string = '';
    '구간증거금21': string = '';
    '구간증거금22': string = '';
    '구간증거금23': string = '';
    '구간증거금24': string = '';
    '구간증거금25': string = '';
    '구간증거금26': string = '';
    '구간증거금27': string = '';
    '구간증거금28': string = '';
    '구간증거금29': string = '';
    '구간증거금30': string = '';
    '구간증거금31': string = '';
    '구간증거금32': string = '';
    '구간증거금33': string = '';
    '구간증거금34': string = '';
    '구간증거금35': string = '';
    '구간증거금36': string = '';
    '구간증거금37': string = '';
    '구간증거금38': string = '';
    '구간증거금39': string = '';
    '구간증거금40': string = '';
    '구간증거금41': string = '';
    '구간증거금42': string = '';
    '구간증거금43': string = '';
    '구간증거금44': string = '';
    '구간증거금45': string = '';
    '구간증거금46': string = '';
    '구간증거금47': string = '';
    '구간증거금48': string = '';
    '구간증거금49': string = '';
    '구간증거금50': string = '';
    '구간증거금51': string = '';
    '구간증거금52': string = '';
    '구간증거금53': string = '';
    '구간증거금54': string = '';
    '구간증거금55': string = '';
    '구간증거금56': string = '';
    '구간증거금57': string = '';
    '구간증거금58': string = '';
    '구간증거금59': string = '';
    '구간증거금60': string = '';
    '구간증거금61': string = '';
    '구간증거금62': string = '';
};
export class TR_OPW20011Output implements ITROutputBase {
    multiT: new () => TR_OPW20011MultiItem;
    multi_items: TR_OPW20011MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20011MultiItem; }
    next: boolean = false;
    '출력건수': string = '';
};
/**
 * 선옵계좌예비증거금상세요청
 */
export class TR_OPW20011 extends TRBase<TR_OPW20011Input, TR_OPW20011Output> {
    constructor(input: TR_OPW20011Input) {
        super(input, TR_OPW20011Output);
        this.input.tr_code = 'OPW20011';
    }
};

export class TR_OPW20012Input implements ITRInputBase {
    tr_code: string = 'OPW20012';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20012Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '예탁총액': string = '';
    '예탁현금': string = '';
    '예탁대용': string = '';
    '위탁증거금총액': string = '';
    '위탁현금증거금': string = '';
    '유지증거금총액': string = '';
    '추가증거금총액': string = '';
    '추가증거금현금': string = '';
    '신규위탁증거금총액': string = '';
    '선물신규주문증거금총액': string = '';
    '신규스프레드증거금': string = '';
    '옵션신규매수주문': string = '';
    '옵션신규매도주문': string = '';
    '위험위탁증거금': string = '';
    '옵션가격증거금': string = '';
    '가격변동증거금': string = '';
    '선물스프레드증거금': string = '';
    '인수도증거금': string = '';
    '최소증거금': string = '';
    '당일옵션순매수대금': string = '';
    '옵션매수대금': string = '';
    '선물체결순손익': string = '';
    '선물정산차금': string = '';
    '옵션매도결제대금': string = '';
    '옵션매수결제대금': string = '';
    '수수료합계': string = '';
    '선물최종결제차금': string = '';
    '인수도대금': string = '';
    '옵션행사대금': string = '';
    '옵션배정대금': string = '';
    '주문가능총액': string = '';
    '주문가능현금': string = '';
    '인출가능총액': string = '';
    '인출가능현금': string = '';
    '계좌명': string = '';
    '계좌번호': string = '';
    '조회일자': string = '';
    '예탁평가총액': string = '';
    '익일예탁총액': string = '';
    '전일대용매도금': string = '';
    '금일대용매도금액': string = '';
    '미수연체료': string = '';
    '전일장종료예탁총액': string = '';
    '전일장종료예탁현금': string = '';
    '장중인출가능금액변경여부': string = '';
};
/**
 * 선옵증거금상세내역요청
 */
export class TR_OPW20012 extends TRBase<TR_OPW20012Input, TR_OPW20012Output> {
    constructor(input: TR_OPW20012Input) {
        super(input, TR_OPW20012Output);
        this.input.tr_code = 'OPW20012';
    }
};

export class TR_OPW20013Input implements ITRInputBase {
    tr_code: string = 'OPW20013';
    '계좌번호': string = '';
    '비밀번호': string = '';
    '종목코드': string = '';
    '주문가격': string = '';
};
export class TR_OPW20013Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '미결제수량': string = '';
    '청산가능수량': string = '';
    '현재증거금총액': string = '';
    '현재증거금현금': string = '';
    '예상위탁증거금': string = '';
    '예상현금증거금': string = '';
};
/**
 * 계좌미결제청산가능수량조회요청
 */
export class TR_OPW20013 extends TRBase<TR_OPW20013Input, TR_OPW20013Output> {
    constructor(input: TR_OPW20013Input) {
        super(input, TR_OPW20013Output);
        this.input.tr_code = 'OPW20013';
    }
};

export class TR_OPW20014Input implements ITRInputBase {
    tr_code: string = 'OPW20014';
    '계좌번호': string = '';
    '비밀번호': string = '';
    'KOSPI200지수': string = '';
    '비밀번호입력매체구분': string = '';
};
export class TR_OPW20014MultiItem {
    '종목코드': string = '';
    '매도매수구분': string = '';
    '미결제수량': string = '';
    '현재가': string = '';
    '내재변동성': string = '';
    '이론지수': string = '';
    '잔존일수': string = '';
};
export class TR_OPW20014Output implements ITROutputBase {
    multiT: new () => TR_OPW20014MultiItem;
    multi_items: TR_OPW20014MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20014MultiItem; }
    next: boolean = false;
    '계좌명': string = '';
    '예탁총액': string = '';
    '예탁현금': string = '';
    '예탁대용금': string = '';
    '위탁증거금': string = '';
    '현금증거금': string = '';
    '추가증거금총액': string = '';
    '추가증거금현금': string = '';
    '추정예탁총액': string = '';
    '추정예탁현금': string = '';
    '추정위탁증거금총액': string = '';
    '추정위탁증거금현금': string = '';
    '추정유지증거금총액': string = '';
    '추정유지증거금현금': string = '';
    '추정추가증거금총액': string = '';
    '추정추가증거금현금': string = '';
    '선물당일차금': string = '';
    '옵션결제대금': string = '';
    '인수도대금': string = '';
    '수수료': string = '';
    '선물갱신차금': string = '';
    '선물최종차금': string = '';
    '옵션행사배정대금': string = '';
    '유지증거금기준부족액': string = '';
    '위탁증거금기준부족액': string = '';
    '사후증거금계좌구분': string = '';
    '결제가격수신여부': string = '';
    '장종료예탁총액': string = '';
    '장종료예탁현금': string = '';
    '장종료예탁대용금': string = '';
    '조회건수': string = '';
};
/**
 * 선옵실시간증거금산출요청
 */
export class TR_OPW20014 extends TRBase<TR_OPW20014Input, TR_OPW20014Output> {
    constructor(input: TR_OPW20014Input) {
        super(input, TR_OPW20014Output);
        this.input.tr_code = 'OPW20014';
    }
};

export class TR_OPW20015Input implements ITRInputBase {
    tr_code: string = 'OPW20015';
    '월물구분': string = '';
    '클래스구분': string = '';
};
export class TR_OPW20015MultiItem {
    '콜조정이론가': string = '';
    '콜최대이론가': string = '';
    '콜전일종가': string = '';
    '콜주문증거금': string = '';
    '행사가격': string = '';
    '풋주문증거금': string = '';
    '풋전일종가': string = '';
    '풋최대이론가': string = '';
    '풋조정이론가': string = '';
};
export class TR_OPW20015Output implements ITROutputBase {
    multiT: new () => TR_OPW20015MultiItem;
    multi_items: TR_OPW20015MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20015MultiItem; }
    next: boolean = false;
    '종목코드': string = '';
    'ATM행사가격': string = '';
    '위치': string = '';
    '조회건수': string = '';
};
/**
 * 옵션매도주문증거금현황요청
 */
export class TR_OPW20015 extends TRBase<TR_OPW20015Input, TR_OPW20015Output> {
    constructor(input: TR_OPW20015Input) {
        super(input, TR_OPW20015Output);
        this.input.tr_code = 'OPW20015';
    }
};

export class TR_OPW20016Input implements ITRInputBase {
    tr_code: string = 'OPW20016';
    '신용종목등급구분': string = '';
    '시장거래구분': string = '';
    '종목번호': string = '';
};
export class TR_OPW20016MultiItem {
    '종목코드': string = '';
    '종목명': string = '';
    '신용보즘금율': string = '';
    '대용가': string = '';
    '전일종가': string = '';
    '신용한도초과여부': string = '';
    '신용한도초과': string = '';
};
export class TR_OPW20016Output implements ITROutputBase {
    multiT: new () => TR_OPW20016MultiItem;
    multi_items: TR_OPW20016MultiItem[] = [];
    constructor() { this.multiT = TR_OPW20016MultiItem; }
    next: boolean = false;
    '신용융자가능여부': string = '';
    '출력건수': string = '';
};
/**
 * 신용융자 가능종목요청
 */
export class TR_OPW20016 extends TRBase<TR_OPW20016Input, TR_OPW20016Output> {
    constructor(input: TR_OPW20016Input) {
        super(input, TR_OPW20016Output);
        this.input.tr_code = 'OPW20016';
    }
};

export class TR_OPW20017Input implements ITRInputBase {
    tr_code: string = 'OPW20017';
    '종목코드': string = '';
};
export class TR_OPW20017Output implements ITROutputBase {
    multiT = null;
    multi_items?: unknown[];
    next: boolean = false;
    '신용가능여부': string = '';
};
/**
 * 신용융자 가능문의
 */
export class TR_OPW20017 extends TRBase<TR_OPW20017Input, TR_OPW20017Output> {
    constructor(input: TR_OPW20017Input) {
        super(input, TR_OPW20017Output);
        this.input.tr_code = 'OPW20017';
    }
};

