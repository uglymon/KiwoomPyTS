import sys
from typing import Callable

from PyQt5.QAxContainer import *
from PyQt5.QtWidgets import *


class KiwoomAPIWrapper:
    def __init__(
        self,
        # void OnEventConnect(long nErrCode)
        on_event_connect: Callable[[int], None],
        # void OnReceiveMsg(BSTR sScrNo,BSTR sRQName,BSTR sTrCode,BSTR sMsg)
        on_receive_msg: Callable[[str, str, str, str], None],
        # void OnReceiveTrData( BSTR sScrNo, BSTR sRQName, BSTR sTrCode, BSTR sRecordName, BSTR sPrevNext, LONG nDataLength, BSTR sErrorCode, BSTR sMessage, BSTR sSplmMsg)
        on_receive_tr_data: Callable[
            [str, str, str, str, str, int, str, str, str], None
        ],
        # void OnReceiveRealData( BSTR sCode, BSTR sRealType, BSTR sRealData)
        on_receive_real_data: Callable[[str, str, str], None],
        # void OnReceiveChejanData(BSTR sGubun, LONG nItemCnt, BSTR sFIdList)
        on_receive_chejan_data: Callable[[str, int, str], None],
        # void OnReceiveConditionVer(LONG lRet, BSTR sMsg)
        on_receive_condition_ver: Callable[[int, str], None],
        # void  OnReceiveRealCondition(BSTR strCode, BSTR strType, BSTR strConditionName, BSTR strConditionIndex)
        on_receive_real_condition: Callable[[str, str, str, str], None],
        # void   OnReceiveTrCondition(BSTR sScrNo, BSTR strCodeList, BSTR strConditionName, int nIndex, int nNext)
        on_receive_tr_condition: Callable[[str, str, str, int, int], None],
    ):
        self.ocx = QAxWidget("KHOPENAPI.KHOpenAPICtrl.1")

        self.ocx.OnEventConnect.connect(on_event_connect)
        self.ocx.OnReceiveMsg.connect(on_receive_msg)

        self.ocx.OnReceiveTrData.connect(on_receive_tr_data)
        self.ocx.OnReceiveRealData.connect(on_receive_real_data)
        self.ocx.OnReceiveChejanData.connect(on_receive_chejan_data)

        self.ocx.OnReceiveConditionVer.connect(on_receive_condition_ver)
        self.ocx.OnReceiveRealCondition.connect(on_receive_real_condition)
        self.ocx.OnReceiveTrCondition.connect(on_receive_tr_condition)

    def CommConnect(self) -> int:
        """
        LONG CommConnect()
        """
        return self.ocx.dynamicCall("CommConnect()")

    def GetConnectState(self) -> int:
        """
        [LONG GetConnectState()]
        서버와 현재 접속 상태를 알려줍니다.
        리턴값 1:연결, 0:연결안됨
        """
        return self.ocx.dynamicCall("GetConnectState()")

    def GetLoginInfo(self, tag: str) -> str:
        """
        [BSTR GetLoginInfo(BSTR sTag)]

        로그인 후 사용할 수 있으며 인자값에 대응하는 정보를 얻을 수 있습니다.

        인자는 다음값을 사용할 수 있습니다.

        "ACCOUNT_CNT" : 보유계좌 갯수를 반환합니다.
        "ACCLIST" 또는 "ACCNO" : 구분자 ';'로 연결된 보유계좌 목록을 반환합니다.
        "USER_ID" : 사용자 ID를 반환합니다.
        "USER_NAME" : 사용자 이름을 반환합니다.
        "GetServerGubun" : 접속서버 구분을 반환합니다.(1 : 모의투자, 나머지 : 실거래 서버)
        "KEY_BSECGB" : 키보드 보안 해지여부를 반환합니다.(0 : 정상, 1 : 해지)
        "FIREW_SECGB" : 방화벽 설정여부를 반환합니다.(0 : 미설정, 1 : 설정, 2 : 해지)

        리턴값
        인자값에 대응하는 정보를 얻을 수 있습니다.
        """
        return self.ocx.dynamicCall("GetLoginInfo(QString)", tag)

    def CommRqData(
        self, sRQName: str, sTrCode: str, nPrevNext: int, sScreenNo: str
    ) -> int:
        """
        LONG CommRqData(
            BSTR sRQName,    // 사용자 구분명 (임의로 지정, 한글지원)
            BSTR sTrCode,    // 조회하려는 TR이름
            long nPrevNext,  // 연속조회여부
            BSTR sScreenNo  // 화면번호 (4자리 숫자 임의로 지정)
        )

        조회요청 함수입니다.
        리턴값 0이면 조회요청 정상 나머지는 에러
        """
        return self.ocx.dynamicCall(
            "CommRqData(QString, QString, int, QString)",
            sRQName,
            sTrCode,
            nPrevNext,
            sScreenNo,
        )

    def SetInputValue(self, sID: str, sValue: str) -> None:
        """
        void SetInputValue(
            BSTR sID,     // TR에 명시된 Input이름
            BSTR sValue   // Input이름으로 지정한 값
        )

        조회요청시 TR의 Input값을 지정하는 함수입니다.
        CommRqData 호출 전에 입력값들을 셋팅합니다.
        각 TR마다 Input 항목이 다릅니다. 순서에 맞게 Input 값들을 셋팅해야 합니다.
        """
        self.ocx.dynamicCall("SetInputValue(QString, QString)", sID, sValue)

    def DisconnectRealData(self, sScnNo: str) -> None:
        """
        void DisconnectRealData(
            BSTR sScnNo // 화면번호
        )

        시세데이터를 요청할때 사용된 화면번호를 이용하여
        해당 화면번호로 등록되어져 있는 종목의 실시간시세를 서버에 등록해지 요청합니다.
        이후 해당 종목의 실시간시세는 수신되지 않습니다.
        단, 해당 종목이 또다른 화면번호로 실시간 등록되어 있는 경우 해당종목에대한 실시간시세 데이터는 계속 수신됩니다.
        """
        self.ocx.dynamicCall("DisconnectRealData(QString)", sScnNo)

    def GetRepeatCnt(self, sTrCode: str, sRecordName: str) -> int:
        """
        long GetRepeatCnt(
            BSTR sTrCode, // TR 이름
            BSTR sRecordName // 레코드 이름
        )

        데이터 수신시 멀티데이터의 갯수(반복수)를 얻을수 있습니다.
        예를들어 차트조회는 한번에 최대 900개 데이터를 수신할 수 있는데
        이렇게 수신한 데이터갯수를 얻을때 사용합니다.
        이 함수는 OnReceiveTRData()이벤트가 발생될때 그 안에서 사용해야 합니다.
        """
        return self.ocx.dynamicCall(
            "GetRepeatCnt(QString, QString)", sTrCode, sRecordName
        )

    def CommKwRqData(
        self,
        sArrCode: str,
        bNext: bool,
        nCodeCount: int,
        nTypeFlag: int,
        sRQName: str,
        sScreenNo: str,
    ) -> int:
        """
        long CommKwRqData(
            BSTR sArrCode,    // 조회하려는 종목코드 리스트
            BOOL bNext,   // 연속조회 여부 0:기본값, 1:연속조회(지원안함)
            int nCodeCount,   // 종목코드 갯수
            int nTypeFlag,    // 0:주식 종목, 3:선물옵션 종목
            BSTR sRQName,   // 사용자 구분명
            BSTR sScreenNo    // 화면번호
        )

        한번에 100종목까지 조회할 수 있는 복수종목 조회함수 입니다.
        함수인자로 사용하는 종목코드 리스트는 조회하려는 종목코드 사이에 구분자';'를 추가해서 만들면 됩니다.
        수신되는 데이터는 TR목록에서 복수종목정보요청(OPTKWFID) Output을 참고하시면 됩니다.
        ※ OPTKWFID TR은 CommKwRqData()함수 전용으로 일번적인 조회함수 CommRqData 로는 사용할 수 없습니다.
        ※ OPTKWFID TR은 영웅문4 HTS의 관심종목과는 무관합니다.
        """
        return self.ocx.dynamicCall(
            "CommKwRqData(QString, bool, int, int, QString, QString)",
            sArrCode,
            bNext,
            nCodeCount,
            nTypeFlag,
            sRQName,
            sScreenNo,
        )

    def GetCommData(
        self, strTrCode: str, strRecordName: str, nIndex: int, strItemName: str
    ) -> str:
        """
        BSTR GetCommData(
            BSTR strTrCode,   // TR 이름
            BSTR strRecordName,   // 레코드이름
            long nIndex,      // nIndex번째
            BSTR strItemName // TR에서 얻어오려는 출력항목이름
        )

        OnReceiveTRData()이벤트가 발생될때 수신한 데이터를 얻어오는 함수입니다.
        이 함수는 OnReceiveTRData()이벤트가 발생될때 그 안에서 사용해야 합니다.
        """
        return self.ocx.dynamicCall(
            "GetCommData(QString, QString, int, QString)",
            strTrCode,
            strRecordName,
            nIndex,
            strItemName,
        )

    def GetCommRealData(self, strCode: str, nFid: int) -> str:
        """
        BSTR GetCommRealData(
            BSTR strCode,   // 종목코드
            long nFid   // 실시간 타입에 포함된FID (Feild ID)
        )

        실시간시세 데이터 수신 이벤트인 OnReceiveRealData() 가 발생될때 실시간데이터를 얻어오는 함수입니다.
        이 함수는 OnReceiveRealData()이벤트가 발생될때 그 안에서 사용해야 합니다.
        FID 값은 KOA Studio "실시간목록"탭 에서 확인할 수 있습니다.
        """
        return self.ocx.dynamicCall("GetCommRealData(QString, int)", strCode, nFid)

    def SendOrder(
        self,
        sRQName: str,
        sScreenNo: str,
        sAccNo: str,
        nOrderType: int,
        sCode: str,
        nQty: int,
        nPrice: int,
        sHogaGb: str,
        sOrgOrderNo: str,
    ) -> int:
        """
        long SendOrder(
            BSTR sRQName, // 사용자 구분명
            BSTR sScreenNo, // 화면번호
            BSTR sAccNo,  // 계좌번호 10자리
            LONG nOrderType,  // 주문유형 1:신규매수, 2:신규매도 3:매수취소, 4:매도취소, 5:매수정정, 6:매도정정, 7:프로그램매매 매수, 8:프로그램매매 매도
            BSTR sCode, // 종목코드 (6자리)
            LONG nQty,  // 주문수량
            LONG nPrice, // 주문가격
            BSTR sHogaGb,   // 거래구분(혹은 호가구분)은 아래 참고
            BSTR sOrgOrderNo  // 원주문번호. 신규주문에는 공백 입력, 정정/취소시 입력합니다.
        )

        서버에 주문을 전송하는 함수 입니다.
        9개 인자값을 가진 주식주문 함수이며 리턴값이 0이면 함수호출 성공이며 나머지는 에러입니다.
        주문성공여부는 OnReceiveTrData에서 주문번호가 있으면 주문성공, 공백이면 주문실패으로 판단하실수 있습니다.

        1초에 5회만 주문가능하며 그 이상 주문요청하면 에러 -308을 리턴합니다.
        ※ 시장가주문시 주문가격은 0으로 입력합니다. 주문가능수량은 해당 종목의 상한가 기준으로 계산됩니다.
        ※ 주문가격 입력필요
        지정가(00), 조건부지정가(05), 지정가IOC(10), 지정가FOK(20)

        ※ 주문가격 불필요 (0으로 입력)
        시장가(03), 최유리지정가(06), 최우선지정가(07), 시장가IOC(13)
        최유리IOC(16), 시장가FOK(23), 최유리FOK(26), 장전시간외종가(61), 장후시간외종가(81)

        ※ 주문증거금
        아래 거래구분은 주문증거금을 상한가로 계산하므로 지정가 주문에 비해 주문가능수량이 적어지므로 주문가능수량 계산에 주의하셔야 합니다.
        시장가(03), 최유리지정가(06), 최우선지정가(07), 시장가IOC(13), 최유리IOC(16), 시장가FOK(23), 최유리FOK(26)

        ※ 취소주문일때 주문가격은 0으로 입력합니다.
        ※ 프로그램매매 주문은 실거래 서버에서만 주문하실수 있으며 모의투자 서버에서는 지원하지 않습니다.

        [거래구분]
        00 : 지정가
        03 : 시장가
        05 : 조건부지정가
        06 : 최유리지정가
        07 : 최우선지정가
        10 : 지정가IOC
        13 : 시장가IOC
        16 : 최유리IOC
        20 : 지정가FOK
        23 : 시장가FOK
        26 : 최유리FOK
        61 : 장전시간외종가
        62 : 시간외단일가매매
        81 : 장후시간외종가
        ※ 모의투자에서는 지정가 주문과 시장가 주문만 가능합니다.

        [정규장 외 주문]
        장전 동시호가 주문
            08:30 ~ 09:00.	거래구분 00:지정가/03:시장가 (일반주문처럼)
            ※ 08:20 ~ 08:30 시간의 주문은 키움에서 대기하여 08:30 에 순서대로 거래소로 전송합니다.
        장전시간외 종가
            08:30 ~ 08:40. 	거래구분 61:장전시간외종가.  가격 0입력
            ※ 전일 종가로 거래. 미체결시 자동취소되지 않음
        장마감 동시호가 주문
            15:20 ~ 15:30.	거래구분 00:지정가/03:시장가 (일반주문처럼)
        장후 시간외 종가
            15:40 ~ 16:00.	거래구분 81:장후시간외종가.  가격 0입력
            ※ 당일 종가로 거래
        시간외 단일가
            16:00 ~ 18:00.	거래구분 62:시간외단일가.  가격 입력
            ※ 10분 단위로 체결, 당일 종가대비 +-10% 가격으로 거래
        """
        return self.ocx.dynamicCall(
            "SendOrder(QString, QString, QString, int, QString, int, int, QString, QString)",
            sRQName,
            sScreenNo,
            sAccNo,
            nOrderType,
            sCode,
            nQty,
            nPrice,
            sHogaGb,
            sOrgOrderNo,
        )

    def SendOrderFO(
        self,
        sRQName: str,
        sScreenNo: str,
        sAccNo: str,
        sCode: str,
        lOrdKind: int,
        sSlbyTp: str,
        sOrdTp: str,
        lQty: int,
        sPrice: str,
        sOrgOrdNo: str,
    ) -> int:
        """
        long SendOrderFO(
            BSTR sRQName,     // 사용자 구분명
            BSTR sScreenNo,   // 화면번호
            BSTR sAccNo,      // 계좌번호 10자리
            BSTR sCode,       // 종목코드
            LONG lOrdKind,    // 주문종류 1:신규매매, 2:정정, 3:취소
            BSTR sSlbyTp,     // 매매구분	1: 매도, 2:매수
            BSTR sOrdTp,      // 거래구분(혹은 호가구분)은 아래 참고
            LONG lQty,        // 주문수량
            BSTR sPrice,      // 주문가격
            BSTR sOrgOrdNo    // 원주문번호
        )

        파생주문
        서버에 주문을 전송하는 함수 입니다.
        리턴값이 0이면 함수호출 성공이며 나머지는 에러입니다.
        주문성공여부는 OnReceiveTrData에서 주문번호가 있으면 주문성공, 공백이면 주문실패으로 판단하실수 있습니다.
        코스피지수200 선물옵션 전용 주문함수입니다.

        [거래구분]
        1 : 지정가
        2 : 조건부지정가
        3 : 시장가
        4 : 최유리지정가
        5 : 지정가(IOC)
        6 : 지정가(FOK)
        7 : 시장가(IOC)
        8 : 시장가(FOK)
        9 : 최유리지정가(IOC)
        A : 최유리지정가(FOK)
        장종료 후 시간외 주문은 지정가 선택
        """
        return self.ocx.dynamicCall(
            "SendOrderFO(QString, QString, QString, QString, int, QString, QString, int, QString, QString)",
            sRQName,
            sScreenNo,
            sAccNo,
            sCode,
            lOrdKind,
            sSlbyTp,
            sOrdTp,
            lQty,
            sPrice,
            sOrgOrdNo,
        )

    def SendOrderCredit(
        self,
        sRQName: str,
        sScreenNo: str,
        sAccNo: str,
        nOrderType: int,
        sCode: str,
        nQty: int,
        nPrice: int,
        sHogaGb: str,
        sCreditGb: str,
        sLoanDate: str,
        sOrgOrderNo: str,
    ) -> int:
        """
        long SendOrderCredit(
            BSTR sRQName,   // 사용자 구분명
            BSTR sScreenNo,   // 화면번호
            BSTR sAccNo,    // 계좌번호 10자리
            LONG nOrderType,    // 주문유형 1:신규매수, 2:신규매도 3:매수취소, 4:매도취소, 5:매수정정, 6:매도정정, 7:프로그램매매 매수, 8:프로그램매매 매도
            BSTR sCode,   // 종목코드
            LONG nQty,    // 주문수량
            LONG nPrice,    // 주문가격
            BSTR sHogaGb,   // 거래구분(혹은 호가구분)은 아래 참고
            BSTR sCreditGb, // 신용거래구분 (아래에서 참고)
            BSTR sLoanDate,   // 대출일 (YYYYMMDD. 아래에서 참고)
            BSTR sOrgOrderNo    // 원주문번호
        )

        서버에 주문을 전송하는 함수 입니다.
        국내주식 신용주문 전용함수입니다. 대주거래는 지원하지 않습니다.
        ※ 프로그램매매 주문은 실거래 서버에서만 주문하실수 있으며 모의투자 서버에서는 지원하지 않습니다.

        [거래구분]
        00 : 지정가
        03 : 시장가
        05 : 조건부지정가
        06 : 최유리지정가
        07 : 최우선지정가
        10 : 지정가IOC
        13 : 시장가IOC
        16 : 최유리IOC
        20 : 지정가FOK
        23 : 시장가FOK
        26 : 최유리FOK
        61 : 장전시간외종가
        62 : 시간외단일가매매
        81 : 장후시간외종가
        ※ 모의투자에서는 지정가 주문과 시장가 주문만 가능합니다.

        [신용거래]
        신용거래 구분은 다음과 같습니다.
        03 : 신용매수 - 자기융자
        33 : 신용매도 - 자기융자
        99 : 신용매도 - 자기융자 합

        [대출일]
        YYYYMMDD형식 날짜를 입력합니다. (ex 대출일이 2023년 1월 1일이면 "20230101"입력)
        신용매도 - 자기융자 일때는 종목별 대출일을 입력하고 신용매도 - 융자합이면 "99991231"을 입력합니다.
        """
        return self.ocx.dynamicCall(
            "SendOrderCredit(QString, QString, QString, int, QString, int, int, QString, QString, QString, QString)",
            sRQName,
            sScreenNo,
            sAccNo,
            nOrderType,
            sCode,
            nQty,
            nPrice,
            sHogaGb,
            sCreditGb,
            sLoanDate,
            sOrgOrderNo,
        )

    def GetConditionLoad(self) -> int:
        """
        long GetConditionLoad()
        서버에 저장된 사용자 조건검색 목록을 요청합니다.
        조건검색 목록을 모두 수신하면 OnReceiveConditionVer()이벤트가 발생됩니다.
        조건검색 목록 요청을 성공하면 1, 아니면 0을 리턴합니다.
        """
        return self.ocx.dynamicCall("GetConditionLoad()")

    def GetConditionNameList(self) -> str:
        """
        BSTR GetConditionNameList()
        서버에서 수신한 사용자 조건식을 조건식의 고유번호와 조건식 이름을 한 쌍으로 하는 문자열들로 전달합니다.
        조건식 하나는 조건식의 고유번호와 조건식 이름이 구분자 '^'로 나뉘어져 있으며 각 조건식은 ';'로 나뉘어져 있습니다.
        이 함수는 OnReceiveConditionVer()이벤트에서 사용해야 합니다.

        예) "1^내조건식1;2^내조건식2;5^내조건식3;,,,,,,,,,,"
        """
        return self.ocx.dynamicCall("GetConditionNameList()")

    def SendCondition(
        self, strScrNo: str, strConditionName: str, nIndex: int, nSearch: int
    ) -> int:
        """
        long SendCondition(
        BSTR strScrNo,    // 화면번호
        BSTR strConditionName,  // 조건식 이름
        int nIndex,     // 조건식 고유번호
        int nSearch   // 실시간옵션. 0:조건검색만, 1:조건검색+실시간 조건검색
        )

        서버에 조건검색을 요청하는 함수입니다.
        마지막 인자값으로 조건검색만 할것인지 실시간 조건검색도 수신할 것인지를 지정할 수 있습니다.
        GetConditionNameList()함수로 얻은 조건식 이름과 고유번호의 쌍을 맞춰서 사용해야 합니다.
        리턴값 1이면 성공이며, 0이면 실패입니다.
        요청한 조건식이 없거나 조건 고유번호와 조건명이 서로 안맞거나 조회횟수를 초과하는 경우 실패하게 됩니다.

        ------------------------------------------------------------------------------------------------------------------------------------

        [조건검색 사용예시]
        GetConditionNameList()함수로 얻은 조건식 목록이 "0^조건식1;3^조건식1;8^조건식3;23^조건식5"일때 조건식3을 검색

        long lRet = SendCondition("0156", "조건식3", 8, 1);
        """
        return self.ocx.dynamicCall(
            "SendCondition(QString, QString, int, int)",
            strScrNo,
            strConditionName,
            nIndex,
            nSearch,
        )

    def SendConditionStop(
        self, strScrNo: str, strConditionName: str, nIndex: int
    ) -> int:
        """
        void SendConditionStop(
            BSTR strScrNo,    // 화면번호
            BSTR strConditionName,    // 조건식 이름
            int nIndex    // 조건식 고유번호
        )

        실시간 조건검색을 중지할 때 사용하는 함수입니다.
        조건식 조회할때 얻는 조건식 이름과 고유번호의 쌍을 맞춰서 사용해야 합니다.
        """
        return self.ocx.dynamicCall(
            "SendConditionStop(QString, QString, int)",
            strScrNo,
            strConditionName,
            nIndex,
        )

    def SetRealReg(
        self, strScreenNo: str, strCodeList: str, strFidList: str, strOptType: str
    ) -> int:
        """
        long  SetRealReg(
            BSTR strScreenNo,   // 화면번호
            BSTR strCodeList,   // 종목코드 리스트
            BSTR strFidList,  // 실시간 FID리스트
            BSTR strOptType   // 실시간 등록 타입, 0또는 1
        )

        종목코드와 FID 리스트를 이용해서 실시간 시세를 등록하는 함수입니다.
        한번에 등록가능한 종목과 FID갯수는 100종목, 100개 입니다.
        실시간 등록타입을 0으로 설정하면 등록한 종목들은 실시간 해지되고 등록한 종목만 실시간 시세가 등록됩니다.
        실시간 등록타입을 1로 설정하면 먼저 등록한 종목들과 함께 실시간 시세가 등록됩니다

        ------------------------------------------------------------------------------------------------------------------------------------

        [실시간 시세등록 예시]
        OpenAPI.SetRealReg(_T("0150"), _T("039490"), _T("9001;302;10;11;25;12;13"), "0");  // 039490종목만 실시간 등록
        OpenAPI.SetRealReg(_T("0150"), _T("000660"), _T("9001;302;10;11;25;12;13"), "1");  // 000660 종목을 실시간 추가등록
        """
        return self.ocx.dynamicCall(
            "SetRealReg(QString, QString, QString, QString)",
            strScreenNo,
            strCodeList,
            strFidList,
            strOptType,
        )

    def SetRealRemove(self, strScrNo: str, strDelCode: str) -> int:
        """
        void SetRealRemove(
            BSTR strScrNo,    // 화면번호 또는 ALL
            BSTR strDelCode   // 종목코드 또는 ALL
        )

        실시간시세 해지 함수이며 화면번호와 종목코드를 이용해서 상세하게 설정할 수 있습니다.
        ※ A종목에 대한 실시간이 여러화면번호로 중복등록되어 있는 경우 특정화면번호를 이용한
                SetRealRemove() 함수호출시 A종목의 실시간시세는 해지되지 않습니다.

        ------------------------------------------------------------------------------------------------------------------------------------

        [실시간 시세해지 예시]
        OpenAPI.SetRealRemove("0150", "039490");  // "0150"화면에서 "039490"종목 실시간 해지
        OpenAPI.SetRealRemove("ALL", "ALL");  // 모든 화면에서 모든종목 실시간 해지
        OpenAPI.SetRealRemove("0150", "ALL");  // "0150"화면에서 모든종목 실시간 해지
        OpenAPI.SetRealRemove("ALL", "039490");  // 모든 화면에서 "039490"종목 실시간 해지
        """
        return self.ocx.dynamicCall(
            "SetRealRemove(QString, QString)", strScrNo, strDelCode
        )

    def GetCodeListByMarket(self, sMarket: str) -> str:
        """
        BSTR GetCodeListByMarket(
            BSTR sMarket    // 시장구분값
        )

        주식 시장별 종목코드 리스트를 ';'로 구분해서 전달합니다.
        시장구분값을 ""공백으로하면 전체시장 코드리스트를 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.

        [시장구분값]
        0 : 코스피
        10 : 코스닥
        3 : ELW
        8 : ETF
        50 : KONEX
        4 :  뮤추얼펀드
        5 : 신주인수권
        6 : 리츠
        9 : 하이얼펀드
        30 : K-OTC
        """
        return self.ocx.dynamicCall("GetCodeListByMarket(QString)", sMarket)

    def GetMasterCodeName(self, strCode: str) -> str:
        """
        BSTR GetMasterCodeName(
            BSTR strCode    // 종목코드
        )

        종목코드에 해당하는 종목명을 전달합니다.
        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetMasterCodeName(QString)", strCode)

    def GetMasterListedStockCnt(self, strCode: str) -> int:
        """
        long GetMasterListedStockCnt(
            BSTR strCode  // 종목코드
        )

        입력한 종목코드에 해당하는 종목 상장주식수를 전달합니다.
        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetMasterListedStockCnt(QString)", strCode)

    def GetMasterConstruction(self, strCode: str) -> str:
        """
        BSTR GetMasterConstruction(
            BSTR strCode  // 종목코드
        }

        입력한 종목코드에 해당하는 종목의 감리구분을 전달합니다.
        (정상, 투자주의, 투자경고, 투자위험, 투자주의환기종목)

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetMasterConstruction(QString)", strCode)

    def GetMasterListedStockDate(self, strCode: str) -> str:
        """
        BSTR GetMasterListedStockDate(
            BSTR strCode    // 종목코드
        )

        입력한 종목의 상장일을 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetMasterListedStockDate(QString)", strCode)

    def GetMasterLastPrice(self, strCode: str) -> str:
        """
        BSTR GetMasterLastPrice(
            BSTR strCode    // 종목코드
        )

        입력한 종목의 당일 기준가를 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetMasterLastPrice(QString)", strCode)

    def GetMasterStockState(self, strCode: str) -> str:
        """
        BSTR GetMasterStockState(
            BSTR strCode  // 종목코드
        )

        입력한 종목의 증거금 비율, 거래정지, 관리종목, 감리종목, 투자융의종목, 담보대출, 액면분할, 신용가능 여부를 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetMasterStockState(QString)", strCode)

    def GetBranchCodeName(self) -> str:
        """
        BSTR GetBranchCodeName()
        특정TR 조회에 필요한 회원사 정보를 회원사 코드와 회원사 이름으로 구성해서 전달합니다.
        각 회원사 정보는 구분자 ';'로 분리되어 있으며 한 회원사 정보에는 구분자 '|'로 회원사 코드와 회원사 이름을 분리합니다.
        전체적인 회원사 구성과 함수에서 전달받은 회원사 정보는 다음과 같습니다.

        "회원사코드0|회원사이름0;회원사코드1|회원사이름1;...회원사코드n|회원사이름n;"
        예) 001|교  보;002|신한금융투자;003|한국투자증권;...;827|모아증권중개;829|동양오리온

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetBranchCodeName()")

    def GetFutureList(self) -> str:
        """
        BSTR GetFutureList()
        지수선물 종목코드 리스트를 ';'로 구분해서 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetFutureList()")

    def GetActPriceList(self) -> str:
        """
        BSTR GetActPriceList()
        지수옵션 행사가에 100을 곱해서 소수점이 없는 값을 ';'로 구분해서 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.
        [지수옵션 행사가 사용예시]
        CString strActPriceList(OpenAPI.GetActPriceList());
        "19000;19250;19500;19750;20000;20250;20500;20750;21000;21250;21500;21750;..."
        """
        return self.ocx.dynamicCall("GetActPriceList()")

    def GetMonthList(self) -> str:
        """
        BSTR GetmonthList()
        지수옵션 월물정보를 ';'로 구분해서 전달하는데 순서는 콜 11월물 ~ 콜 최근월물 풋 최근월물 ~ 풋 최근월물가 됩니다.

        로그인 한 후에 사용할 수 있는 함수입니다.

        ------------------------------------------------------------------------------------------------------------------------------------

        [지수옵션 월물조회 사용예시]
        CString strMonthList(OpenAPI.GetMonthList());
        "201812;201806;201712;201706;201703;201612;201611;201610;201609;201608;201607;..."
        """
        return self.ocx.dynamicCall("GetMonthList()")

    def GetOptionCode(self, strActPrice: str, nCp: int, strMonth: str) -> str:
        """
        BSTR GetOptionCode(
            BSTR strActPrice,   // 소수점을 포함한 행사가
            int nCp,    // 콜풋구분값, 콜:2, 풋:3
            BSTR strMonth   // 6자리 월물
        )

        인자로 지정한 지수옵션 코드를 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.

        ------------------------------------------------------------------------------------------------------------------------------------

        [지수옵션 코드 사용예시]

        CString strOptCode = OpenAPI.GetOptionCode(_T("247.50"), 2, _T("201607"));
        """
        return self.ocx.dynamicCall(
            "GetOptionCode(QString, int, QString)", strActPrice, nCp, strMonth
        )

    def GetOptionCodeByActPrice(self, strCode: str, nCp: int, nTick: int) -> str:
        """
        BSTR GetOptionCodeByActPrice(
            BSTR strCode,   // 기준이 되는 종목코드
            int nCp,    // 콜풋구분값, 콜:2, 풋:3
            int nTick  // 기준종목의 n틱 (0값 제외)
        )

        옵션전용 함수. 인자로 지정한 지수옵션 종목의 n틱 차이에 해당되는 종목코드를 전달합니다.

        로그인 한 후에 사용할 수 있는 함수입니다.

        ------------------------------------------------------------------------------------------------------------------------------------

        [지수옵션 코드 사용예시]

        CString strOptCode = OpenAPI.GetOptionCodeByActPrice("201S8327", 2, 5);
        """
        return self.ocx.dynamicCall(
            "GetOptionCodeByActPrice(QString, int, int)", strCode, nCp, nTick
        )

    def GetOptionATM(self) -> str:
        """
        BSTR GetOptionATM()
        지수옵션 소수점을 제거한 ATM값을 전달합니다.
        예를들어 ATM값이 247.50 인 경우 24750이 전달됩니다.

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetOptionATM()")

    def GetSFutureList(self, strBaseAssetGb: str) -> str:
        """
        BSTR GetSFutureList(
            BSTR strBaseAssetGb,   // 기초자산 구분값
        )

        기초자산 구분값을 인자로 받아서 주식선물 종목코드, 종목명, 기초자산이름을 구할수 있습니다.
        입력값을 공백으로 하면 주식선물 전체 종목코드를 얻을 수 있습니다.
        전달되는 데이터 형식은 다음과 같습니다.
        "종목코드1^종목명1^기초자산이름1;종목코드2^종목명2^기초자산이름2;...;종목코드n^종목명n^기초자산이름n;"

        로그인 한 후에 사용할 수 있는 함수입니다.
        """
        return self.ocx.dynamicCall("GetSFutureList(QString)", strBaseAssetGb)

    # def KOA_Functions(self, sFunctionName: str, sParam: str) -> str:
    #     """
    #     BSTR KOA_Functions(
    #         BSTR sFunctionName,   // 함수이름 혹은 기능이름
    #         BSTR sParam   // 함수 매개변수
    #     ))
    #     """


if not QApplication.instance():
    app = QApplication(sys.argv)


if __name__ == "__main__":
    pass
