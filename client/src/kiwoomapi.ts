import WebSocket from 'ws';
import { KiwoomEventType } from './types';

export interface IKiwoomEventHandler {
    onEventConnect?: (err_code: number) => Promise<void>;
    onReceiveMsg?: (scr_no: string, rq_name: string, tr_code: string, msg: string) => Promise<void>;
    onReceiveTrData?: (scr_no: string, rq_name: string, tr_code: string, record_name: string, prev_next: string, data_length: number, error_code: string, message: string, splm_msg: string) => Promise<void>;
    onReceiveRealData?: (code: string, real_type: string, real_data: string) => Promise<void>;
    onReceiveChejanData?: (gubun: string, item_cnt: number, fid_list: string) => Promise<void>;
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

    private getSeqNo() {
        this.seqno++;
        if (this.seqno > 999999) {
            this.seqno = 1;
        }
        return this.seqno;
    }

    private send: WebSocket['send'] = data => {
        this.ws.send(JSON.stringify(data));
        console.log('send data :', data);
    };

    constructor(ws: WebSocket, event_handler: IKiwoomEventHandler = {}) {
        this.ws = ws;
        this.pendingRequests = new Map();
        this.handler = event_handler;

        this.ws.addEventListener('message', async event => {
            try {
                const res = JSON.parse(event.data.toString());
                console.log('received data :', res);

                const name = res.name as string;
                if (name !== undefined && name.startsWith('on_')) {
                    if (this.handler !== null) {
                        const e = res as KiwoomEventType;
                        if (e.name === 'on_event_connect') {
                            if (this.handler.onEventConnect !== undefined)
                                await this.handler.onEventConnect(e.err_code);
                            this.ws.send(JSON.stringify({ name: 'on_event_connect_complete' }));

                        } else if (e.name === 'on_receive_msg') {
                            if (this.handler.onReceiveMsg !== undefined)
                                await this.handler.onReceiveMsg(
                                    e.scr_no, e.rq_name, e.tr_code, e.msg);
                            this.ws.send(JSON.stringify({ name: 'on_receive_msg_complete' }));

                        } else if (e.name === 'on_receive_tr_data') {
                            if (this.handler.onReceiveTrData !== undefined)
                                await this.handler.onReceiveTrData(
                                    e.scr_no, e.rq_name, e.tr_code, e.record_name,
                                    e.prev_next, e.data_length, e.error_code,
                                    e.message, e.splm_msg);
                            this.ws.send(JSON.stringify({ name: 'on_receive_tr_data_complete' }));

                        } else if (e.name === 'on_receive_real_data') {
                            if (this.handler.onReceiveRealData !== undefined)
                                await this.handler.onReceiveRealData(
                                    e.code, e.real_type, e.real_data);
                            this.ws.send(JSON.stringify({ name: 'on_receive_real_data_complete' }));

                        } else if (e.name === 'on_receive_chejan_data') {
                            if (this.handler.onReceiveChejanData !== undefined)
                                await this.handler.onReceiveChejanData(
                                    e.gubun, e.item_cnt, e.fid_list);
                            this.ws.send(JSON.stringify({ name: 'on_receive_chejan_data_complete' }));

                        } else if (e.name === 'on_receive_condition_ver') {
                            if (this.handler.onReceiveConditionVer !== undefined)
                                await this.handler.onReceiveConditionVer(e.ret, e.msg);
                            this.ws.send(JSON.stringify({ name: 'on_receive_condition_ver_complete' }));

                        } else if (e.name === 'on_receive_real_condition') {
                            if (this.handler.onReceiveRealCondition !== undefined)
                                await this.handler.onReceiveRealCondition(
                                    e.code, e.type, e.condition_name,
                                    e.condition_index);
                            this.ws.send(JSON.stringify({ name: 'on_receive_real_condition_complete' }));

                        } else if (e.name === 'on_receive_tr_condition') {
                            if (this.handler.onReceiveTrCondition !== undefined)
                                await this.handler.onReceiveTrCondition(
                                    e.scr_no, e.code_list, e.condition_name,
                                    e.index, e.next);
                            this.ws.send(JSON.stringify({ name: 'on_receive_tr_condition_complete' }));
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

    setEventHandler(handler: IKiwoomEventHandler) {
        this.handler = handler;
    }

    private async call(name: string, params: (number | string | boolean)[]): Promise<string | number | null> {
        return new Promise<string | number | null>(resolve => {
            const id = this.getSeqNo();

            this.pendingRequests.set(id, resolve);

            this.ws.send(JSON.stringify({ id, name, params }));
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
     * @param {string} tag "ACCOUNT_CNT":전체계좌수, "ACCNO":전체계좌번호, "USER_ID":사용자ID, "USER_NAME":사용자명, "KEY_BSECGB":키보드보안해지여부, "FIREW_SECGB":방화벽설정여부
     * @returns {Promise<string>} tag에 대한 정보
     */
    async GetLoginInfo(tag: string): Promise<string> {
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
     * @param {string} sArrCode 종목코드리스트
     * @param {boolean} bNext 연속조회여부
     * @param {number} nCodeCount 종목개수
     * @param {number} nTypeFlag 조회구분
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
     * @param {string} sRQName 사용자구분명
     * @param {string} sScreenNo 화면번호
     * @param {string} sAccNo 계좌번호
     * @param {number} nOrderType 주문유형 1:신규매수, 2:신규매도, 3:매수취소, 4:매도취소, 5:매수정정, 6:매도정정
     * @param {string} sCode 종목코드
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
