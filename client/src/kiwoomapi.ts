import WebSocket from 'ws';
import { KiwoomEventType } from './types';

export interface IKiwoomEventHandler {
    onEventConnect?: (err_code: number) => Promise<void>;
    onReceiveMsg?: (scr_no: string, rq_name: string, tr_code: string, msg: string) => Promise<void>;
    onReceiveTrData?: (scr_no: string, rq_name: string, tr_code: string, record_name: string,
        prev_next: string, data_length: number, error_code: string, message: string,
        splm_msg: string, output_single: { [key: string]: string }, output_multi: { [key: string]: string }[]) => Promise<void>;
    onReceiveRealData?: (code: string, real_type: string, real_data: string, output: { [key: string]: string }) => Promise<void>;
    onReceiveChejanData?: (gubun: string, item_cnt: number, fid_list: string, output: { [key: string]: string }) => Promise<void>;
    onReceiveConditionVer?: (ret: number, msg: string) => Promise<void>;
    onReceiveRealCondition?: (code: string, type: string, condition_name: string, condition_index: string) => Promise<void>;
    onReceiveTrCondition?: (scr_no: string, code_list: string, condition_name: string, index: number, next: number) => Promise<void>;
}
export interface IKiwoomAPI {
    CommConnect(): Promise<number>;
    GetConnectState(): Promise<number>;
    GetLoginInfo(tag: string): Promise<string>;
    CommRqData(sRQName: string, sTrCode: string, nPrevNext: number, sScreenNo: string): Promise<number>;
    SetInputValue(sID: string, sValue: string): Promise<null>;
    DisconnectRealData(sScnNo: string): Promise<null>;
    GetRepeatCnt(sTrCode: string, sRecordName: string): Promise<number>;
    CommKwRqData(sArrCode: string, bNext: boolean, nCodeCount: number, nTypeFlag: number, sRQName: string, sScreenNo: string): Promise<number>;
    GetCommData(strTrCode: string, strRecordName: string, nIndex: number, strItemName: string): Promise<string>;
    GetCommRealData(strCode: string, nFid: number): Promise<string>;
    SendOrder(sRQName: string, sScreenNo: string, sAccNo: string, nOrderType: number, sCode: string, nQty: number, nPrice: number, sHogaGb: string, sOrgOrderNo: string): Promise<number>;
    SendOrderFO(sRQName: string, sScreenNo: string, sAccNo: string, sCode: string, lOrdKind: number, sSlbyTp: string, sOrdTp: string, lQty: number, sPrice: string, sOrgOrdNo: string): Promise<number>;
    SendOrderCredit(sRQName: string, sScreenNo: string, sAccNo: string, nOrderType: number, sCode: string, nQty: number, nPrice: number, sHogaGb: string, sCreditGb: string, sLoanDate: string, sOrgOrderNo: string): Promise<number>;
    GetConditionLoad(): Promise<number>;
    GetConditionNameList(): Promise<string>;
    SendCondition(strScrNo: string, strConditionName: string, nIndex: number, nSearch: number): Promise<number>;
    SendConditionStop(strScrNo: string, strConditionName: string, nIndex: number): Promise<number>;
    SetRealReg(strScreenNo: string, strCodeList: string, strFidList: string, strOptType: string): Promise<number>;
    SetRealRemove(strScrNo: string, strDelCode: string): Promise<number>;
    GetCodeListByMarket(sMarket: string): Promise<string>;
    GetMasterCodeName(strCode: string): Promise<string>;
    GetMasterListedStockCnt(strCode: string): Promise<number>;
    GetMasterConstruction(strCode: string): Promise<string>;
    GetMasterListedStockDate(strCode: string): Promise<string>;
    GetMasterLastPrice(strCode: string): Promise<string>;
    GetMasterStockState(strCode: string): Promise<string>;
    GetBranchCodeName(): Promise<string>;
    GetFutureList(): Promise<string>;
    GetActPriceList(): Promise<string>;
    GetMonthList(): Promise<string>;
    GetOptionCode(strActPrice: string, nCp: number, strMonth: string): Promise<string>;
    GetOptionCodeByActPrice(strCode: string, nCp: number, nTick: number): Promise<string>;
    GetOptionATM(): Promise<string>;
    GetSFutureList(strBaseAssetGb: string): Promise<string>;
}

export class KiwoomAPI implements IKiwoomAPI {
    private ws: WebSocket;
    private pendingRequests: Map<number, (response: string | number | null) => void>;
    private seqno = 0;
    private handler: IKiwoomEventHandler;
    private ws_log: boolean;

    private getSeqNo() {
        this.seqno++;
        if (this.seqno > 999999) {
            this.seqno = 1;
        }
        return this.seqno;
    }

    private send: WebSocket['send'] = data => {
        this.ws.send(data);
        if (this.ws_log) console.log('send data :', data);
    };

    constructor(ws: WebSocket, event_handler: IKiwoomEventHandler = {}, ws_log = true) {
        this.ws = ws;
        this.pendingRequests = new Map();
        this.handler = event_handler;
        this.ws_log = ws_log;

        this.ws.addEventListener('message', async event => {
            try {
                const res = JSON.parse(event.data.toString());
                if (this.ws_log) console.log('received data :', res);

                const name = res.name as string;
                if (name !== undefined && name.startsWith('on_')) {
                    if (this.handler !== null) {
                        const e = res as KiwoomEventType;
                        if (e.name === 'on_event_connect') {
                            if (this.handler.onEventConnect !== undefined)
                                this.handler.onEventConnect(e.err_code);

                        } else if (e.name === 'on_receive_msg') {
                            if (this.handler.onReceiveMsg !== undefined)
                                this.handler.onReceiveMsg(
                                    e.scr_no, e.rq_name, e.tr_code, e.msg);

                        } else if (e.name === 'on_receive_tr_data') {
                            if (this.handler.onReceiveTrData !== undefined)
                                this.handler.onReceiveTrData(
                                    e.scr_no, e.rq_name, e.tr_code, e.record_name,
                                    e.prev_next, e.data_length, e.error_code,
                                    e.message, e.splm_msg, e.output_single, e.output_multi);

                        } else if (e.name === 'on_receive_real_data') {
                            if (this.handler.onReceiveRealData !== undefined)
                                this.handler.onReceiveRealData(
                                    e.code, e.real_type, e.real_data, e.output);

                        } else if (e.name === 'on_receive_chejan_data') {
                            if (this.handler.onReceiveChejanData !== undefined)
                                this.handler.onReceiveChejanData(
                                    e.gubun, e.item_cnt, e.fid_list, e.output);

                        } else if (e.name === 'on_receive_condition_ver') {
                            if (this.handler.onReceiveConditionVer !== undefined)
                                this.handler.onReceiveConditionVer(e.ret, e.msg);

                        } else if (e.name === 'on_receive_real_condition') {
                            if (this.handler.onReceiveRealCondition !== undefined)
                                this.handler.onReceiveRealCondition(
                                    e.code, e.type, e.condition_name,
                                    e.condition_index);

                        } else if (e.name === 'on_receive_tr_condition') {
                            if (this.handler.onReceiveTrCondition !== undefined)
                                this.handler.onReceiveTrCondition(
                                    e.scr_no, e.code_list, e.condition_name,
                                    e.index, e.next);
                        }
                    }

                } else if (this.pendingRequests.has(res.id)) {
                    const resolve = this.pendingRequests.get(res.id);
                    if (resolve) {
                        if (res.error !== undefined || res.data === undefined) {
                            resolve(null);
                        } else {
                            resolve(res.data);
                        }
                        this.pendingRequests.delete(res.id);
                    }
                }
            } catch (error) {
                console.error('Failed to process message:', error);
            }
        });

        this.ws.addEventListener('error', (error) => {
            console.error('WebSocket error:', error);
        });
    }

    close() {
        this.send(JSON.stringify({ name: 'close' }));
    }

    setEventHandler(handler: IKiwoomEventHandler) {
        this.handler = handler;
    }

    private async call(name: string, params: (number | string | boolean)[]): Promise<string | number | null> {
        return new Promise<string | number | null>(resolve => {
            const id = this.getSeqNo();

            this.pendingRequests.set(id, resolve);

            this.send(JSON.stringify({ id, name, params }));
        });
    }


    /**
     * 로그인 윈도우를 실행한다.
     * @returns {Promise<number>} 0:성공, 음수:실패
     */
    async CommConnect(): Promise<number> {
        return await this.call("CommConnect", []) as number;
    }

    /**
     * 현재 접속상태를 반환한다.
     * @returns {Promise<number>} 0:미연결, 1:연결완료
     */
    async GetConnectState(): Promise<number> {
        return await this.call("GetConnectState", []) as number;
    }

    /**
     * 로그인한 사용자 정보를 반환한다.
     * ACCOUNT_CNT : 보유계좌 갯수를 반환합니다.
     * ACCNO : 구분자 ';'로 연결된 보유계좌 목록을 반환합니다.
     * USER_ID : 사용자 ID를 반환합니다.
     * USER_NAME : 사용자 이름을 반환합니다.
     * GetServerGubun : 접속서버 구분을 반환합니다.(1 : 모의투자, 나머지 : 실거래 서버)
     * KEY_BSECGB : 키보드 보안 해지여부를 반환합니다.(0 : 정상, 1 : 해지)
     * FIREW_SECGB : 방화벽 설정여부를 반환합니다.(0 : 미설정, 1 : 설정, 2 : 해지)
     * @param {string} tag 
     * @returns {Promise<string>} tag에 대한 정보
     */
    async GetLoginInfo(
        tag: 'ACCOUNT_CNT' | 'ACCNO' | 'USER_ID' | 'USER_NAME'
            | 'GetServerGubun' | 'KEY_BSECGB' | 'FIREW_SECGB'): Promise<string> {
        return await this.call("GetLoginInfo", [tag]) as string;
    }

    /**
     * TR을 서버로 송신한다.
     * @param {string} sRQName 사용자구분명
     * @param {string} sTrCode TR이름
     * @param {number} nPrevNext 연속조회여부
     * @param {string} sScreenNo 화면번호
     * @returns {Promise<number>} 0:성공, 음수:실패
     */
    async CommRqData(sRQName: string, sTrCode: string, nPrevNext: number, sScreenNo: string): Promise<number> {
        return await this.call("CommRqData", [sRQName, sTrCode, nPrevNext, sScreenNo]) as number;
    }

    /**
     * SetInputValue로 지정한 Input값을 초기화한다.
     * @param {string} sID 입력값 아이디
     * @param {string} sValue 입력값
     * @returns {Promise<null>}
     */
    async SetInputValue(sID: string, sValue: string): Promise<null> {
        return await this.call("SetInputValue", [sID, sValue]) as null;
    }

    /**
     * 화면번호에 대한 리얼데이터 요청을 해제한다.
     * @param {string} sScnNo 화면번호
     * @returns {Promise<null>}
     */
    async DisconnectRealData(sScnNo: string): Promise<null> {
        return await this.call("DisconnectRealData", [sScnNo]) as null;
    }

    /**
     * 수신된 데이터의 반복개수를 반환한다.
     * @param {string} sTrCode TR코드
     * @param {string} sRecordName 레코드명
     * @returns {Promise<number>} 데이터 반복개수
     */
    async GetRepeatCnt(sTrCode: string, sRecordName: string): Promise<number> {
        return await this.call("GetRepeatCnt", [sTrCode, sRecordName]) as number;
    }

    /**
     * 복수종목조회 메서드
     * 한번에 100종목까지 조회할 수 있는 복수종목 조회함수 입니다.
     * 함수인자로 사용하는 종목코드 리스트는 조회하려는 종목코드 사이에 구분자';'를 추가해서 만들면 됩니다.
     * 수신되는 데이터는 TR목록에서 복수종목정보요청(OPTKWFID) Output을 참고하시면 됩니다.
     * ※ OPTKWFID TR은 CommKwRqData()함수 전용으로 일번적인 조회함수 CommRqData 로는 사용할 수 없습니다.
     * ※ OPTKWFID TR은 영웅문4 HTS의 관심종목과는 무관합니다.
     * @param {string} sArrCode 종목코드리스트
     * @param {boolean} bNext 연속조회여부 0:기본값, 1:연속조회(지원안함)
     * @param {number} nCodeCount 종목개수
     * @param {number} nTypeFlag 0:주식 종목, 3:선물옵션 종목
     * @param {string} sRQName 사용자구분명
     * @param {string} sScreenNo 화면번호
     * @returns {Promise<number>} 0:성공, 음수:실패
     */
    async CommKwRqData(sArrCode: string, bNext: boolean, nCodeCount: number, nTypeFlag: number, sRQName: string, sScreenNo: string): Promise<number> {
        return await this.call("CommKwRqData", [sArrCode, bNext, nCodeCount, nTypeFlag, sRQName, sScreenNo]) as number;
    }

    /**
     * 수신된 데이터를 반환한다.
     * @param {string} strTrCode TR코드
     * @param {string} strRecordName 레코드명
     * @param {number} nIndex 반복인덱스
     * @param {string} strItemName 아이템명
     * @returns {Promise<string>} 수신데이터
     */
    async GetCommData(strTrCode: string, strRecordName: string, nIndex: number, strItemName: string): Promise<string> {
        return await this.call("GetCommData", [strTrCode, strRecordName, nIndex, strItemName]) as string;
    }

    /**
     * 실시간데이터를 반환한다.
     * @param {string} strCode 종목코드
     * @param {number} nFid 실시간아이템
     * @returns {Promise<string>} 수신데이터
     */
    async GetCommRealData(strCode: string, nFid: number): Promise<string> {
        return await this.call("GetCommRealData", [strCode, nFid]) as string;
    }

    /**
     * 주식주문 메서드
     * 서버에 주문을 전송하는 함수 입니다.
     * 9개 인자값을 가진 주식주문 함수이며 리턴값이 0이면 함수호출 성공이며 나머지는 에러입니다.
     * 주문성공여부는 OnReceiveTrData에서 주문번호가 있으면 주문성공, 공백이면 주문실패으로 판단하실수 있습니다.
     * 1초에 5회만 주문가능하며 그 이상 주문요청하면 에러 -308을 리턴합니다.
     * 
     * ※ 시장가주문시 주문가격은 0으로 입력합니다. 주문가능수량은 해당 종목의 상한가 기준으로 계산됩니다.
     * 
     * ※ 주문가격 입력필요
     * 
     * 지정가(00), 조건부지정가(05), 지정가IOC(10), 지정가FOK(20)
     * 
     * 시장가(03), 최유리지정가(06), 최우선지정가(07), 시장가IOC(13)
     * 최유리IOC(16), 시장가FOK(23), 최유리FOK(26), 장전시간외종가(61), 장후시간외종가(81)
     * 
     * 최유리IOC(16), 시장가FOK(23), 최유리FOK(26), 장전시간외종가(61), 장후시간외종가(81)
     * 
     * ※ 주문증거금
     * 아래 거래구분은 주문증거금을 상한가로 계산하므로 지정가 주문에 비해 주문가능수량이 적어지므로 주문가능수량 계산에 주의하셔야 합니다.
     * 시장가(03), 최유리지정가(06), 최우선지정가(07), 시장가IOC(13), 최유리IOC(16), 시장가FOK(23), 최유리FOK(26)
     * 
     * ※ 취소주문일때 주문가격은 0으로 입력합니다.
     * 
     * ※ 프로그램매매 주문은 실거래 서버에서만 주문하실수 있으며 모의투자 서버에서는 지원하지 않습니다.
     * 
     * [거래구분]
     * 00 : 지정가
     * 03 : 시장가
     * 05 : 조건부지정가
     * 06 : 최유리지정가
     * 07 : 최우선지정가
     * 10 : 지정가IOC
     * 13 : 시장가IOC
     * 16 : 최유리IOC
     * 20 : 지정가FOK
     * 23 : 시장가FOK
     * 26 : 최유리FOK
     * 61 : 장전시간외종가
     * 62 : 시간외단일가매매
     * 81 : 장후시간외종가
     * 
     * ※ 모의투자에서는 지정가 주문과 시장가 주문만 가능합니다.
     * 
     * 
     * [정규장 외 주문]
     * 장전 동시호가 주문
     * 08:30 ~ 09:00.	거래구분 00:지정가/03:시장가 (일반주문처럼)
     * ※ 08:20 ~ 08:30 시간의 주문은 키움에서 대기하여 08:30 에 순서대로 거래소로 전송합니다.
     * 
     * 장전시간외 종가
     * 08:30 ~ 08:40. 	거래구분 61:장전시간외종가.  가격 0입력
     * ※ 전일 종가로 거래. 미체결시 자동취소되지 않음
     * 
     * 장마감 동시호가 주문
     * 15:20 ~ 15:30.	거래구분 00:지정가/03:시장가 (일반주문처럼)
     * 
     * 장후 시간외 종가
     * 15:40 ~ 16:00.	거래구분 81:장후시간외종가.  가격 0입력
     * ※ 당일 종가로 거래
     * 
     * 시간외 단일가
     * 16:00 ~ 18:00.	거래구분 62:시간외단일가.  가격 입력
     * ※ 10분 단위로 체결, 당일 종가대비 +-10% 가격으로 거래

     * @param {string} sRQName 사용자구분명
     * @param {string} sScreenNo 화면번호
     * @param {string} sAccNo 계좌번호 10자리
     * @param {number} nOrderType 주문유형 1:신규매수, 2:신규매도, 3:매수취소, 4:매도취소, 5:매수정정, 6:매도정정, 7:프로그램매매 매수, 8:프로그램매매 매도
     * @param {string} sCode 종목코드 (6자리)
     * @param {number} nQty 주문수량
     * @param {number} nPrice 주문가격
     * @param {string} sHogaGb 거래구분
     * @param {string} sOrgOrderNo 원주문번호
     * @returns {Promise<number>} 에러코드
     */
    async SendOrder(sRQName: string, sScreenNo: string, sAccNo: string, nOrderType: number, sCode: string, nQty: number, nPrice: number, sHogaGb: string, sOrgOrderNo: string): Promise<number> {
        return await this.call("SendOrder", [sRQName, sScreenNo, sAccNo, nOrderType, sCode, nQty, nPrice, sHogaGb, sOrgOrderNo]) as number;
    }

    /**
     * 선물옵션 주문을 서버로 전송한다.
     * @param {string} sRQName 사용자구분명
     * @param {string} sScreenNo 화면번호
     * @param {string} sAccNo 계좌번호
     * @param {string} sCode 종목코드
     * @param {number} lOrdKind 주문종류 1:신규매매, 2:정정, 3:취소
     * @param {string} sSlbyTp 매매구분 1:매도, 2:매수
     * @param {string} sOrdTp 거래구분 1:지정가, 2:조건부지정가, 3:시장가, 4:최유리지정가, 5:지정가IOC, 6:지정가FOK, 7:시장가IOC, 8:시장가FOK, 9:최유리IOC, A:최유리FOK
     * @param {number} lQty 주문수량
     * @param {string} sPrice 주문가격
     * @param {string} sOrgOrdNo 원주문번호
     * @returns {Promise<number>} 에러코드
     */
    async SendOrderFO(sRQName: string, sScreenNo: string, sAccNo: string, sCode: string, lOrdKind: number, sSlbyTp: string, sOrdTp: string, lQty: number, sPrice: string, sOrgOrdNo: string): Promise<number> {
        return await this.call("SendOrderFO", [sRQName, sScreenNo, sAccNo, sCode, lOrdKind, sSlbyTp, sOrdTp, lQty, sPrice, sOrgOrdNo]) as number;
    }

    /**
     * 신용주문을 서버로 전송한다.
     * @param {string} sRQName 사용자구분명
     * @param {string} sScreenNo 화면번호
     * @param {string} sAccNo 계좌번호
     * @param {number} nOrderType 주문유형 1:신규매수, 2:신규매도, 3:매수취소, 4:매도취소, 5:매수정정, 6:매도정정
     * @param {string} sCode 종목코드
     * @param {number} nQty 주문수량
     * @param {number} nPrice 주문가격
     * @param {string} sHogaGb 거래구분
     * @param {string} sCreditGb 신용구분
     * @param {string} sLoanDate 대출일
     * @param {string} sOrgOrderNo 원주문번호
     * @returns {Promise<number>} 에러코드
     */
    async SendOrderCredit(sRQName: string, sScreenNo: string, sAccNo: string, nOrderType: number, sCode: string, nQty: number, nPrice: number, sHogaGb: string, sCreditGb: string, sLoanDate: string, sOrgOrderNo: string): Promise<number> {
        return await this.call("SendOrderCredit", [sRQName, sScreenNo, sAccNo, nOrderType, sCode, nQty, nPrice, sHogaGb, sCreditGb, sLoanDate, sOrgOrderNo]) as number;
    }

    /**
     * 체결잔고 데이터를 반환한다
     * @param {number} fid FID
     * @returns {Promise<string>} 체결잔고 데이터
     */
    async GetChejanData(fid: number): Promise<string> {
        return await this.call("GetChejanData", [fid]) as string;
    }

    /**
     * 조건검색을 위한 조건식을 로드한다.
     * @returns {Promise<number>} 1:성공, 나머지:실패
     */
    async GetConditionLoad(): Promise<number> {
        return await this.call("GetConditionLoad", []) as number;
    }

    /**
     * 조건검색 조건식 리스트를 반환한다.
     * @returns {Promise<string>} 조건식 리스트(인덱스^조건식명;인덱스^조건식명;...)
     */
    async GetConditionNameList(): Promise<string> {
        return await this.call("GetConditionNameList", []) as string;
    }

    /**
     * 조건검색을 실시간으로 시작한다.
     * @param {string} strScrNo 화면번호
     * @param {string} strConditionName 조건식명
     * @param {number} nIndex 조건식명 인덱스
     * @param {number} nSearch 조회구분, 0:조건검색, 1:실시간검색
     * @returns {Promise<number>} 1:성공, 나머지:실패
     */
    async SendCondition(strScrNo: string, strConditionName: string, nIndex: number, nSearch: number): Promise<number> {
        return await this.call("SendCondition", [strScrNo, strConditionName, nIndex, nSearch]) as number;
    }

    /**
     * 조건검색을 중지한다.
     * @param {string} strScrNo 화면번호
     * @param {string} strConditionName 조건식명
     * @param {number} nIndex 조건식명 인덱스
     * @returns {Promise<number>} 1:성공, 나머지:실패
     */
    async SendConditionStop(strScrNo: string, strConditionName: string, nIndex: number): Promise<number> {
        return await this.call("SendConditionStop", [strScrNo, strConditionName, nIndex]) as number;
    }

    /**
     * 실시간 시세를 등록한다.
     * @param {string} strScreenNo 화면번호
     * @param {string} strCodeList 종목코드 리스트
     * @param {string} strFidList FID 리스트
     * @param {string} strOptType 등록타입, 0:마지막에 등록한 종목만, 1:이전에 등록한 종목들과 함께
     * @returns {Promise<number>} 1:성공, 0:실패
     */
    async SetRealReg(strScreenNo: string, strCodeList: string, strFidList: string, strOptType: string): Promise<number> {
        return await this.call("SetRealReg", [strScreenNo, strCodeList, strFidList, strOptType]) as number;
    }

    /**
     * 실시간 시세를 해제한다.
     * @param {string} strScrNo 화면번호
     * @param {string} strDelCode 종목코드
     * @returns {Promise<number>} 1:성공, 0:실패
     */
    async SetRealRemove(strScrNo: string, strDelCode: string): Promise<number> {
        return await this.call("SetRealRemove", [strScrNo, strDelCode]) as number;
    }

    /**
     * 시장구분에 따른 종목코드 리스트를 반환한다.
     * @param {string} sMarket 시장구분, 0:장내, 3:ELW, 4:뮤추얼펀드, 5:신주인수권, 6:리츠, 8:ETF, 9:하이일드펀드, 10:코스닥, 30:제3시장
     * @returns {Promise<string>} 종목코드 리스트
     */
    async GetCodeListByMarket(sMarket: string): Promise<string> {
        return await this.call("GetCodeListByMarket", [sMarket]) as string;
    }

    /**
     * 종목코드의 한글명을 반환한다.
     * @param {string} strCode 종목코드
     * @returns {Promise<string>} 종목한글명
     */
    async GetMasterCodeName(strCode: string): Promise<string> {
        return await this.call("GetMasterCodeName", [strCode]) as string;
    }

    /**
     * 종목코드의 상장주식수를 반환한다.
     * @param {string} strCode 종목코드
     * @returns {Promise<number>} 상장주식수
     */
    async GetMasterListedStockCnt(strCode: string): Promise<number> {
        return await this.call("GetMasterListedStockCnt", [strCode]) as number;
    }

    /**
     * 종목코드의 감리구분을 반환한다.
     * @param {string} strCode 종목코드
     * @returns {Promise<string>} 감리구분
     */
    async GetMasterConstruction(strCode: string): Promise<string> {
        return await this.call("GetMasterConstruction", [strCode]) as string;
    }

    /**
     * 종목코드의 상장일을 반환한다.
     * @param {string} strCode 종목코드
     * @returns {Promise<string>} 상장일
     */
    async GetMasterListedStockDate(strCode: string): Promise<string> {
        return await this.call("GetMasterListedStockDate", [strCode]) as string;
    }

    /**
     * 종목코드의 전일가를 반환한다.
     * @param {string} strCode 종목코드
     * @returns {Promise<string>} 전일가
     */
    async GetMasterLastPrice(strCode: string): Promise<string> {
        return await this.call("GetMasterLastPrice", [strCode]) as string;
    }

    /**
     * 종목코드의 종목상태를 반환한다.
     * @param {string} strCode 종목코드
     * @returns {Promise<string>} 종목상태
     */
    async GetMasterStockState(strCode: string): Promise<string> {
        return await this.call("GetMasterStockState", [strCode]) as string;
    }

    /**
     * 회사코드와 회사명을 반환한다.
     * @returns {Promise<string>} 회사코드와 회사명
     */
    async GetBranchCodeName(): Promise<string> {
        return await this.call("GetBranchCodeName", []) as string;
    }

    /**
     * 선물 리스트를 반환한다.
     * @returns {Promise<string>} 선물 리스트
     */
    async GetFutureList(): Promise<string> {
        return await this.call("GetFutureList", []) as string;
    }

    /**
     * 지수옵션 행사가 리스트를 반환한다.
     * @returns {Promise<string>} 행사가 리스트
     */
    async GetActPriceList(): Promise<string> {
        return await this.call("GetActPriceList", []) as string;
    }

    /**
     * 지수옵션 월물 리스트를 반환한다.
     * @returns {Promise<string>} 월물 리스트
     */
    async GetMonthList(): Promise<string> {
        return await this.call("GetMonthList", []) as string;
    }

    /**
     * 주어진 행사가에 대한 옵션코드를 반환한다.
     * @param {string} strActPrice 행사가
     * @param {number} nCp 콜풋구분
     * @param {string} strMonth 월물
     * @returns {Promise<string>} 옵션코드
     */
    async GetOptionCode(strActPrice: string, nCp: number, strMonth: string): Promise<string> {
        return await this.call("GetOptionCode", [strActPrice, nCp, strMonth]) as string;
    }

    /**
     * 주어진 옵션코드에서 틱만큼 벗어난 행사가의 옵션코드를 반환한다.
     * @param {string} strCode 옵션코드
     * @param {number} nCp 콜풋구분
     * @param {number} nTick 틱
     * @returns {Promise<string>} 옵션코드
     */
    async GetOptionCodeByActPrice(strCode: string, nCp: number, nTick: number): Promise<string> {
        return await this.call("GetOptionCodeByActPrice", [strCode, nCp, nTick]) as string;
    }

    /**
     * ATM 옵션코드를 반환한다.
     * @returns {Promise<string>} ATM 옵션코드
     */
    async GetOptionATM(): Promise<string> {
        return await this.call("GetOptionATM", []) as string;
    }

    /**
     * 주식선물 리스트를 반환한다.
     * @param {string} strBaseAssetGb 기초자산구분
     * @returns {Promise<string>} 주식선물 리스트
     */
    async GetSFutureList(strBaseAssetGb: string): Promise<string> {
        return await this.call("GetSFutureList", [strBaseAssetGb]) as string;
    }
}
