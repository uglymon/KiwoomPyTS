export type OPInputOPT10001 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10001 = {
    '종목코드_389': string;
    '종목명_302': string;
    '결산월_315': string;
    '액면가_310': string;
    '자본금_309': string;
    '상장주식_312': string;
    '신용비율_329': string;
    '연중최고_1006': string;
    '연중최저_1009': string;
    '시가총액_311': string;
    '시가총액비중_336': string;
    '외인소진률_314': string;
    '대용가_308': string;
    'PER_1600': string;
    'EPS_1604': string;
    'ROE_1630': string;
    'PBR_1601': string;
    'EV_1608': string;
    'BPS_1605': string;
    '매출액_1610': string;
    '영업이익_1611': string;
    '당기순이익_1614': string;
    '250최고_1000': string;
    '250최저_1003': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '상한가_305': string;
    '하한가_306': string;
    '기준가_307': string;
    '예상체결가_10023': string;
    '예상체결수량_10024': string;
    '250최고가일_1001': string;
    '250최고가대비율_1002': string;
    '250최저가일_1004': string;
    '250최저가대비율_1005': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '거래대비_30': string;
    '액면가단위_796': string;
    '유통주식_1683': string;
    '유통비율_1684': string;
};
export type OPInputOPT10002 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10002MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '등락부호_25': string;
    '기준가_307': string;
    '전일대비_11': string;
    '등락율_12': string;
    '매도거래원명1_141': string;
    '매도거래원1_146': string;
    '매도거래량1_161': string;
    '매수거래원명1_151': string;
    '매수거래원1_156': string;
    '매수거래량1_171': string;
    '매도거래원명2_142': string;
    '매도거래원2_147': string;
    '매도거래량2_162': string;
    '매수거래원명2_152': string;
    '매수거래원2_157': string;
    '매수거래량2_172': string;
    '매도거래원명3_143': string;
    '매도거래원3_148': string;
    '매도거래량3_163': string;
    '매수거래원명3_153': string;
    '매수거래원3_158': string;
    '매수거래량3_173': string;
    '매도거래원명4_144': string;
    '매도거래원4_149': string;
    '매도거래량4_164': string;
    '매수거래원명4_154': string;
    '매수거래원4_159': string;
    '매수거래량4_174': string;
    '매도거래원명5_145': string;
    '매도거래원5_150': string;
    '매도거래량5_165': string;
    '매수거래원명5_155': string;
    '매수거래원5_160': string;
    '매수거래량5_175': string;
};
export type OPOutputOPT10002 = {
    multi_items: OPOutputOPT10002MultiItem[];
};
export type OPInputOPT10003 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10003MultiItem = {
    '시간_20': string;
    '현재가_10': string;
    '전일대비_11': string;
    '대비율_12': string;
    '우선매도호가단위_27': string;
    '우선매수호가단위_28': string;
    '체결거래량_15': string;
    'sign_25': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '체결강도_228': string;
};
export type OPOutputOPT10003 = {
    multi_items: OPOutputOPT10003MultiItem[];
};
export type OPInputOPT10004 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10004MultiItem = {
    '호가잔량기준시간_21': string;
    '매도10차선잔량대비_90': string;
    '매도10차선잔량_70': string;
    '매도10차선호가_50': string;
    '매도9차선잔량대비_89': string;
    '매도9차선잔량_69': string;
    '매도9차선호가_49': string;
    '매도8차선잔량대비_88': string;
    '매도8차선잔량_68': string;
    '매도8차선호가_48': string;
    '매도7차선잔량대비_87': string;
    '매도7차선잔량_67': string;
    '매도7차선호가_47': string;
    '매도6차선잔량대비_86': string;
    '매도6우선잔량_66': string;
    '매도6차선호가_46': string;
    '매도5차선잔량대비_85': string;
    '매도5차선잔량_65': string;
    '매도5차선호가_45': string;
    '매도4차선잔량대비_84': string;
    '매도4차선잔량_64': string;
    '매도4차선호가_44': string;
    '매도3차선잔량대비_83': string;
    '매도3차선잔량_63': string;
    '매도3차선호가_43': string;
    '매도2차선잔량대비_82': string;
    '매도2차선잔량_62': string;
    '매도2차선호가_42': string;
    '매도1차선잔량대비_81': string;
    '매도최우선잔량_61': string;
    '매도최우선호가_41': string;
    '매수최우선호가_51': string;
    '매수최우선잔량_71': string;
    '매수1차선잔량대비_91': string;
    '매수2차선호가_52': string;
    '매수2차선잔량_72': string;
    '매수2차선잔량대비_92': string;
    '매수3차선호가_53': string;
    '매수3차선잔량_73': string;
    '매수3차선잔량대비_93': string;
    '매수4차선호가_54': string;
    '매수4차선잔량_74': string;
    '매수4차선잔량대비_94': string;
    '매수5차선호가_55': string;
    '매수5차선잔량_75': string;
    '매수5차선잔량대비_95': string;
    '매수6우선호가_56': string;
    '매수6우선잔량_76': string;
    '매수6차선잔량대비_96': string;
    '매수7차선호가_57': string;
    '매수7차선잔량_77': string;
    '매수7차선잔량대비_97': string;
    '매수8차선호가_58': string;
    '매수8차선잔량_78': string;
    '매수8차선잔량대비_98': string;
    '매수9차선호가_59': string;
    '매수9차선잔량_79': string;
    '매수9차선잔량대비_99': string;
    '매수10차선호가_60': string;
    '매수10차선잔량_80': string;
    '매수10차선잔량대비_100': string;
    '총매도잔량직전대비_122': string;
    '총매도잔량_121': string;
    '총매수잔량_125': string;
    '총매수잔량직전대비_126': string;
    '시간외매도잔량대비_132': string;
    '시간외매도잔량_131': string;
    '시간외매수잔량_135': string;
    '시간외매수잔량대비_136': string;
};
export type OPOutputOPT10004 = {
    multi_items: OPOutputOPT10004MultiItem[];
};
export type OPInputOPT10005 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10005MultiItem = {
    '날짜_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '종가_10': string;
    '대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '외인보유_1066': string;
    '외인비중_1066': string;
    '외인순매수_1137': string;
    '기관순매수_1136': string;
    '개인순매수_1140': string;
    '외국계_1188': string;
    '신용잔고율_326': string;
    '프로그램_1189': string;
};
export type OPOutputOPT10005 = {
    multi_items: OPOutputOPT10005MultiItem[];
};
export type OPInputOPT10006 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10006MultiItem = {
    '날짜_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '종가_10': string;
    '대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '체결강도_228': string;
};
export type OPOutputOPT10006 = {
    multi_items: OPOutputOPT10006MultiItem[];
};
export type OPInputOPT10007 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10007MultiItem = {
    '종목명_302': string;
    '종목코드_389': string;
    '날짜_22': string;
    '시간_21': string;
    '전일종가_346': string;
    '전일거래량_304': string;
    '상한가_305': string;
    '하한가_306': string;
    '전일거래대금_396': string;
    '상장주식수_312': string;
    '현재가_10': string;
    '부호_25': string;
    '등락률_12': string;
    '전일비_30': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '체결량_911': string;
    '거래량_13': string;
    '거래대금_14': string;
    '예상체결가_23': string;
    '예상체결량_24': string;
    '예상매도우선호가_27': string;
    '예상매수우선호가_28': string;
    '거래시작일_439': string;
    '행사가격_324': string;
    '최고가_1018': string;
    '최저가_1021': string;
    '최고가일_1019': string;
    '최저가일_1022': string;
    '매도1호가_41': string;
    '매도2호가_42': string;
    '매도3호가_43': string;
    '매도4호가_44': string;
    '매도5호가_45': string;
    '매도6호가_46': string;
    '매도7호가_47': string;
    '매도8호가_48': string;
    '매도9호가_49': string;
    '매도10호가_50': string;
    '매수1호가_51': string;
    '매수2호가_52': string;
    '매수3호가_53': string;
    '매수4호가_54': string;
    '매수5호가_55': string;
    '매수6호가_56': string;
    '매수7호가_57': string;
    '매수8호가_58': string;
    '매수9호가_59': string;
    '매수10호가_60': string;
    '매도1호가잔량_61': string;
    '매도2호가잔량_62': string;
    '매도3호가잔량_63': string;
    '매도4호가잔량_64': string;
    '매도5호가잔량_65': string;
    '매도6호가잔량_66': string;
    '매도7호가잔량_67': string;
    '매도8호가잔량_68': string;
    '매도9호가잔량_69': string;
    '매도10호가잔량_70': string;
    '매수1호가잔량_71': string;
    '매수2호가잔량_72': string;
    '매수3호가잔량_73': string;
    '매수4호가잔량_74': string;
    '매수5호가잔량_75': string;
    '매수6호가잔량_76': string;
    '매수7호가잔량_77': string;
    '매수8호가잔량_78': string;
    '매수9호가잔량_79': string;
    '매수10호가잔량_80': string;
    '매도1호가직전대비_81': string;
    '매도2호가직전대비_82': string;
    '매도3호가직전대비_83': string;
    '매도4호가직전대비_84': string;
    '매도5호가직전대비_85': string;
    '매도6호가직전대비_86': string;
    '매도7호가직전대비_87': string;
    '매도8호가직전대비_88': string;
    '매도9호가직전대비_89': string;
    '매도10호가직전대비_90': string;
    '매수1호가직전대비_91': string;
    '매수2호가직전대비_92': string;
    '매수3호가직전대비_93': string;
    '매수4호가직전대비_94': string;
    '매수5호가직전대비_95': string;
    '매수6호가직전대비_96': string;
    '매수7호가직전대비_97': string;
    '매수8호가직전대비_98': string;
    '매수9호가직전대비_99': string;
    '매수10호가직전대비_100': string;
    '매도1호가건수_101': string;
    '매도2호가건수_102': string;
    '매도3호가건수_103': string;
    '매도4호가건수_104': string;
    '매도5호가건수_105': string;
    '매수1호가건수_111': string;
    '매수2호가건수_112': string;
    '매수3호가건수_113': string;
    '매수4호가건수_114': string;
    '매수5호가건수_115': string;
    'LP매도1호가잔량_621': string;
    'LP매도2호가잔량_622': string;
    'LP매도3호가잔량_623': string;
    'LP매도4호가잔량_624': string;
    'LP매도5호가잔량_625': string;
    'LP매도6호가잔량_626': string;
    'LP매도7호가잔량_627': string;
    'LP매도8호가잔량_628': string;
    'LP매도9호가잔량_629': string;
    'LP매도10호가잔량_630': string;
    'LP매수1호가잔량_631': string;
    'LP매수2호가잔량_632': string;
    'LP매수3호가잔량_633': string;
    'LP매수4호가잔량_634': string;
    'LP매수5호가잔량_635': string;
    'LP매수6호가잔량_636': string;
    'LP매수7호가잔량_637': string;
    'LP매수8호가잔량_638': string;
    'LP매수9호가잔량_639': string;
    'LP매수10호가잔량_640': string;
    '총매수잔량_125': string;
    '총매도잔량_121': string;
    '총매수건수_127': string;
    '총매도건수_123': string;
};
export type OPOutputOPT10007 = {
    multi_items: OPOutputOPT10007MultiItem[];
};
export type OPInputOPT10008 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10008MultiItem = {
    '일자_22': string;
    '종가_10': string;
    '전일대비_11': string;
    '거래량_13': string;
    '변동수량_210': string;
    '보유주식수_313': string;
    '비중_1066': string;
    '취득가능주식수_344': string;
    '외국인한도_345': string;
    '외국인한도증감_399': string;
    '한도소진률_314': string;
};
export type OPOutputOPT10008 = {
    multi_items: OPOutputOPT10008MultiItem[];
};
export type OPInputOPT10009 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10009MultiItem = {
    '날짜_22': string;
    '종가_10': string;
    '대비_11': string;
    '기관기간누적_1060': string;
    '기관일변순매매_1140': string;
    '외국인일변순매매_1145': string;
    '외국인지분율_1146': string;
};
export type OPOutputOPT10009 = {
    multi_items: OPOutputOPT10009MultiItem[];
};
export type OPInputOPT10010 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10010MultiItem = {
    '차익위탁매도수량_500': string;
    '차익위탁매도금액_503': string;
    '차익위탁매수수량_509': string;
    '차익위탁매수금액_512': string;
    '차익위탁순매수수량_520': string;
    '차익위탁순매수금액_518': string;
    '비차익위탁매도수량_524': string;
    '비차익위탁매도금액_527': string;
    '비차익위탁매수수량_533': string;
    '비차익위탁매수금액_536': string;
    '비차익위탁순매수수량_544': string;
    '비차익위탁순매수금액_542': string;
    '전체차익위탁매도수량_202': string;
    '전체차익위탁매도금액_204': string;
    '전체차익위탁매수수량_206': string;
    '전체차익위탁매수금액_208': string;
    '전체차익위탁순매수수량_210': string;
    '전체차익위탁순매수금액_212': string;
};
export type OPOutputOPT10010 = {
    multi_items: OPOutputOPT10010MultiItem[];
};
export type OPInputOPT10011 = {
    '신주인수권구분_9113': string;
};
export type OPOutputOPT10011MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '최우선매도호가_27': string;
    '최우선매수호가_28': string;
    '누적거래량_13': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
};
export type OPOutputOPT10011 = {
    multi_items: OPOutputOPT10011MultiItem[];
};
export type OPInputOPT10012 = {
    '계좌번호_9201': string;
};
export type OPOutputOPT10012MultiItem = {
    '주문수량_900': string;
    '주문가격_901': string;
    '미체결수량_902': string;
    '체결누계금액_903': string;
    '원주문번호_904': string;
    '주문구분_905': string;
    '매매구분_906': string;
    '매도수구분_907': string;
    '주문/체결시간_908': string;
    '체결가_910': string;
    '체결량_911': string;
    '주문상태_913': string;
    '단위체결가_914': string;
    '대출일_916': string;
    '신용구분_917': string;
    '만기일_918': string;
    '보유수량_930': string;
    '매입단가_931': string;
    '총매입가_932': string;
    '주문가능수량_933': string;
    '당일매도수량_934': string;
    '당일매도금액_935': string;
    '당일매수수량_936': string;
    '당일매수금액_937': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '당일hts매도수수료_940': string;
    '당일hts매수수수료_941': string;
    '당일매도손익_944': string;
    '당일순매수량_945': string;
    '매도/매수구분_946': string;
    '당일총매도손일_950': string;
    '예수금_951': string;
    '사용가능현금_952': string;
    '사용가능대용_953': string;
    '전일재사용_954': string;
    '당일재사용_955': string;
    '담보현금_956': string;
    '신용금액_957': string;
    '신용이자_958': string;
    '담보대출수량_959': string;
    '현물주문체결이상유무_961': string;
    '현물잔고이상유무_962': string;
    '현물예수금이상유무_963': string;
    '선물주문체결이상유무_966': string;
    '선물잔고이상유무_967': string;
    'D+1추정예수금_971': string;
    'D+2추정예수금_972': string;
    'D+1매수/매도정산금_973': string;
    'D+2매수/매도정산금_974': string;
    'D+1연체변제소요금_975': string;
    'D+2연체변제소요금_976': string;
    'D+1추정인출가능금_977': string;
    'D+2추정인출가능금_978': string;
    '현금증거금_979': string;
    '대용잔고_980': string;
    '대용증거금_981': string;
    '수표금액_982': string;
    '현금미수금_983': string;
    '신용설정보증금_984': string;
    '인출가능금액_985': string;
};
export type OPOutputOPT10012 = {
    multi_items: OPOutputOPT10012MultiItem[];
};
export type OPInputOPT10013 = {
    '종목코드_9001': string;
    '일자_9004': string;
    '조회구분_9062': string;
};
export type OPOutputOPT10013MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '거래량_13': string;
    '신규_876': string;
    '상환_870': string;
    '잔고_871': string;
    '금액_872': string;
    '대비_873': string;
    '공여율_874': string;
    '잔고율_875': string;
};
export type OPOutputOPT10013 = {
    multi_items: OPOutputOPT10013MultiItem[];
};
export type OPInputOPT10014 = {
    '종목코드_9001': string;
    '시간구분_9050': string;
    '시작일자_9005': string;
    '종료일자_9004': string;
};
export type OPOutputOPT10014MultiItem = {
    '일자_22': string;
    '종가_19': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_15': string;
    '공매도량_554': string;
    '매매비중_556': string;
    '공매도거래대금_555': string;
    '공매도평균가_1142': string;
};
export type OPOutputOPT10014 = {
    multi_items: OPOutputOPT10014MultiItem[];
};
export type OPInputOPT10015 = {
    '종목코드_9001': string;
    '시작일자_9004': string;
};
export type OPOutputOPT10015MultiItem = {
    '일자_22': string;
    '종가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '장전거래량_1402': string;
    '장전거래비중_1410': string;
    '장중거래량_1400': string;
    '장중거래비중_1408': string;
    '장후거래량_1401': string;
    '장후거래비중_1409': string;
    '합계3_13': string;
    '기간중거래량_14': string;
    '외인보유_1066': string;
    '외인비중_1066': string;
    '외인순매수_1137': string;
    '기관순매수_1136': string;
    '개인순매수_1140': string;
    '외국계_1138': string;
    '신용잔고율_326': string;
    '프로그램_1139': string;
    '장전거래대금_1406': string;
    '장전거래대금비중_1413': string;
    '장중거래대금_1404': string;
    '장중거래대금비중_1411': string;
    '장후거래대금_1405': string;
    '장후거래대금비중_1412': string;
};
export type OPOutputOPT10015 = {
    multi_items: OPOutputOPT10015MultiItem[];
};
export type OPInputOPT10016 = {
    '시장구분_9008': string;
    '신고저구분_9011': string;
    '고저종구분_9018': string;
    '종목조건_9060': string;
    '거래량구분_9022': string;
    '신용조건_9062': string;
    '상하한포함_9076': string;
    '기간_9012': string;
};
export type OPOutputOPT10016MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '전일거래량대비율_30': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '고가_1025': string;
    '저가_1026': string;
};
export type OPOutputOPT10016 = {
    multi_items: OPOutputOPT10016MultiItem[];
};
export type OPInputOPT10017 = {
    '시장구분_9008': string;
    '상하한구분_9017': string;
    '정렬구분_9009': string;
    '종목조건_9060': string;
    '거래량구분_9022': string;
    '신용조건_9062': string;
    '매매금구분_9077': string;
};
export type OPOutputOPT10017MultiItem = {
    '종목코드_9001': string;
    '종목정보_300': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '전일거래량_304': string;
    '매도잔량_61': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '매수잔량_71': string;
    '횟수_333': string;
};
export type OPOutputOPT10017 = {
    multi_items: OPOutputOPT10017MultiItem[];
};
export type OPInputOPT10018 = {
    '고저구분_9018': string;
    '근접율_9019': string;
    '시장구분_9008': string;
    '거래량구분_9022': string;
    '종목조건_9060': string;
    '신용조건_9062': string;
};
export type OPOutputOPT10018MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_125': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '당일고가_17': string;
    '당일저가_18': string;
};
export type OPOutputOPT10018 = {
    multi_items: OPOutputOPT10018MultiItem[];
};
export type OPInputOPT10019 = {
    '시장구분_9008': string;
    '등락구분_9020': string;
    '시간구분_9021': string;
    '시간_9013': string;
    '거래량구분_9022': string;
    '종목조건_9060': string;
    '신용조건_9062': string;
    '가격조건_9077': string;
    '상하한포함_9076': string;
};
export type OPOutputOPT10019MultiItem = {
    '종목코드_9001': string;
    '종목분류_300': string;
    '종목명_302': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '기준가_1027': string;
    '현재가_10': string;
    '기준대비_1028': string;
    '거래량_13': string;
    '급등률_1037': string;
};
export type OPOutputOPT10019 = {
    multi_items: OPOutputOPT10019MultiItem[];
};
export type OPInputOPT10020 = {
    '시장구분_9008': string;
    '정렬구분_9009': string;
    '거래량구분_9022': string;
    '종목조건_9060': string;
    '신용조건_9062': string;
};
export type OPOutputOPT10020MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '거래량_13': string;
    '총매도잔량_121': string;
    '총매수잔량_125': string;
    '순매수잔량_128': string;
    '매수비율_129': string;
};
export type OPOutputOPT10020 = {
    multi_items: OPOutputOPT10020MultiItem[];
};
export type OPInputOPT10021 = {
    '시장구분_9008': string;
    '매매구분_9024': string;
    '정렬구분_9009': string;
    '시간구분_9013': string;
    '거래량구분_9022': string;
    '종목조건_9060': string;
};
export type OPOutputOPT10021MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '기준률_1034': string;
    '현재_125': string;
    '급증수량_1036': string;
    '급증률_1037': string;
    '총매수량_206': string;
};
export type OPOutputOPT10021 = {
    multi_items: OPOutputOPT10021MultiItem[];
};
export type OPInputOPT10022 = {
    '시장구분_9008': string;
    '비율구분_9025': string;
    '시간구분_9013': string;
    '거래량구분_9022': string;
    '종목조건_9060': string;
};
export type OPOutputOPT10022MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '기준률_1034': string;
    '현재비율_1035': string;
    '급증률_1037': string;
    '총매도잔량_121': string;
    '총매수잔량_125': string;
};
export type OPOutputOPT10022 = {
    multi_items: OPOutputOPT10022MultiItem[];
};
export type OPInputOPT10023 = {
    '시장구분_9008': string;
    '정렬구분_9009': string;
    '시간구분_9021': string;
    '거래량구분_9022': string;
    '시간_9013': string;
    '종목조건_9060': string;
    '가격구분_9077': string;
};
export type OPOutputOPT10023MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '이전거래량_1033': string;
    '현재거래량_13': string;
    '급증량_1036': string;
    '급증률_1037': string;
};
export type OPOutputOPT10023 = {
    multi_items: OPOutputOPT10023MultiItem[];
};
export type OPInputOPT10024 = {
    '시장구분_9008': string;
    '주기구분_9012': string;
    '거래량구분_9022': string;
};
export type OPOutputOPT10024MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '이전거래량_1033': string;
    '현재거래량_13': string;
    '매도호가_27': string;
    '매수호가_28': string;
};
export type OPOutputOPT10024 = {
    multi_items: OPOutputOPT10024MultiItem[];
};
export type OPInputOPT10025 = {
    '시장구분_9008': string;
    '매물집중비율_9029': string;
    '현재가진입_9030': string;
    '매물대수_9045': string;
    '주기구분_9012': string;
};
export type OPOutputOPT10025MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '현재거래량_13': string;
    '가격대시작_1046': string;
    '가격대끝_1047': string;
    '매물량_1048': string;
    '매물비_1049': string;
};
export type OPOutputOPT10025 = {
    multi_items: OPOutputOPT10025MultiItem[];
};
export type OPInputOPT10026 = {
    '시장구분_9008': string;
    'PER구분_9047': string;
};
export type OPOutputOPT10026MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    'PER_316': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '현재거래량_13': string;
    '매도호가_27': string;
};
export type OPOutputOPT10026 = {
    multi_items: OPOutputOPT10026MultiItem[];
};
export type OPInputOPT10027 = {
    '시장구분_9008': string;
    '정렬구분_9009': string;
    '거래량조건_9022': string;
    '종목조건_9060': string;
    '신용조건_9062': string;
    '상하한포함_9076': string;
    '가격조건_9077': string;
    '거래대금조건_9080': string;
};
export type OPOutputOPT10027MultiItem = {
    '종목분류_300': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '매도잔량_121': string;
    '매수잔량_125': string;
    '현재거래량_13': string;
    '체결강도_228': string;
    '횟수_333': string;
};
export type OPOutputOPT10027 = {
    multi_items: OPOutputOPT10027MultiItem[];
};
export type OPInputOPT10028 = {
    '정렬구분_9009': string;
    '거래량조건_9022': string;
    '시장구분_9008': string;
    '상하한포함_9076': string;
    '종목조건_9060': string;
    '신용조건_9062': string;
    '거래대금조건_9080': string;
    '등락조건_9017': string;
};
export type OPOutputOPT10028MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '시가대비_1040': string;
    '현재거래량_13': string;
    '체결강도_228': string;
};
export type OPOutputOPT10028 = {
    multi_items: OPOutputOPT10028MultiItem[];
};
export type OPInputOPT10029 = {
    '시장구분_9008': string;
    '정렬구분_9009': string;
    '거래량조건_9022': string;
    '종목조건_9060': string;
    '신용조건_9062': string;
    '가격조건_9077': string;
};
export type OPOutputOPT10029MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '예상체결가_23': string;
    '기준가_346': string;
    '전일대비기호_1067': string;
    '전일대비_1055': string;
    '등락률_1056': string;
    '예상체결량_24': string;
    '매도잔량_61': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '매수잔량_71': string;
};
export type OPOutputOPT10029 = {
    multi_items: OPOutputOPT10029MultiItem[];
};
export type OPInputOPT10030 = {
    '시장구분_9008': string;
    '정렬구분_9009': string;
    '관리종목포함_9060': string;
    '신용구분_9062': string;
    '거래량구분_9022': string;
    '가격구분_9077': string;
    '거래대금구분_9080': string;
    '장운영구분_9114': string;
};
export type OPOutputOPT10030MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '전일비_30': string;
    '거래회전율_31': string;
    '거래금액_14': string;
    '거래량(장중)_1400': string;
    '전일비(장중)_1437': string;
    '거래회전율(장중)_1435': string;
    '거래금액(장중)_1404': string;
    '거래량(장후)_1401': string;
    '전일비(장후)_1419': string;
    '거래회전율(장후)_1417': string;
    '거래금액(장후)_1405': string;
    '거래량(장전)_1402': string;
    '전일비(장전)_1418': string;
    '거래회전율(장전)_1416': string;
    '거래금액(장전)_1406': string;
};
export type OPOutputOPT10030 = {
    multi_items: OPOutputOPT10030MultiItem[];
};
export type OPInputOPT10031 = {
    '시장구분_9008': string;
    '조회구분_9023': string;
    '순위시작_9027': string;
    '순위끝_9028': string;
};
export type OPOutputOPT10031MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '거래량_13': string;
};
export type OPOutputOPT10031 = {
    multi_items: OPOutputOPT10031MultiItem[];
};
export type OPInputOPT10032 = {
    '시장구분_9008': string;
    '관리종목포함_9010': string;
};
export type OPOutputOPT10032MultiItem = {
    '종목코드_9001': string;
    '현재순위_401': string;
    '전일순위_410': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '현재거래량_13': string;
    '전일거래량_304': string;
    '거래대금_14': string;
};
export type OPOutputOPT10032 = {
    multi_items: OPOutputOPT10032MultiItem[];
};
export type OPInputOPT10033 = {
    '시장구분_9008': string;
    '거래량구분_9022': string;
    '종목조건_9060': string;
    '상하한포함_9076': string;
    '신용조건_9062': string;
};
export type OPOutputOPT10033MultiItem = {
    '종목정보_300': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '신용비율_329': string;
    '매도잔량_121': string;
    '매수잔량_125': string;
    '현재거래량_13': string;
};
export type OPOutputOPT10033 = {
    multi_items: OPOutputOPT10033MultiItem[];
};
export type OPInputOPT10034 = {
    '시장구분_9008': string;
    '매매구분_9032': string;
    '기간_9012': string;
};
export type OPOutputOPT10034MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '매도호가_41': string;
    '매수호가_51': string;
    '거래량_13': string;
    '순매수량_210': string;
    '취득가능주식수_344': string;
};
export type OPOutputOPT10034 = {
    multi_items: OPOutputOPT10034MultiItem[];
};
export type OPInputOPT10035 = {
    '시장구분_9008': string;
    '매매구분_9032': string;
    '기준일구분_9049': string;
};
export type OPOutputOPT10035MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    'D-1_355': string;
    'D-2_356': string;
    'D-3_357': string;
    '합계_358': string;
    '한도소진율_314': string;
    '전일대비1_1041': string;
    '전일대비2_1042': string;
    '전일대비3_1043': string;
};
export type OPOutputOPT10035 = {
    multi_items: OPOutputOPT10035MultiItem[];
};
export type OPInputOPT10036 = {
    '시장구분_9008': string;
    '기간_9012': string;
};
export type OPOutputOPT10036MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '거래량_13': string;
    '보유주식수_313': string;
    '취득가능주식수_344': string;
    '기준한도소진율_359': string;
    '한도소진율_314': string;
    '소진율증가_360': string;
};
export type OPOutputOPT10036 = {
    multi_items: OPOutputOPT10036MultiItem[];
};
export type OPInputOPT10037 = {
    '시장구분_9008': string;
    '기간_9012': string;
    '매매구분_9032': string;
    '정렬구분_9036': string;
    '현재가조건_9077': string;
};
export type OPOutputOPT10037MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '매도거래량_202': string;
    '매수거래량_206': string;
    '순매수거래량_210': string;
    '순매수대금_212': string;
    '거래량_13': string;
    '거래대금_14': string;
};
export type OPOutputOPT10037 = {
    multi_items: OPOutputOPT10037MultiItem[];
};
export type OPInputOPT10038 = {
    '종목코드_9001': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
    '조회구분_9032': string;
    '기간_9012': string;
};
export type OPOutputOPT10038MultiItem = {
    '순위_401': string;
    '회원사명_334': string;
    '매수수량_1059': string;
    '매도수량_1058': string;
    '누적순매수수량_1060': string;
};
export type OPOutputOPT10038 = {
    '순위1_1043': string;
    '순위2_1044': string;
    '순위3_1045': string;
    '기간중거래량_1113': string;
    multi_items: OPOutputOPT10038MultiItem[];
};
export type OPInputOPT10039 = {
    '회원사코드_9026': string;
    '거래량구분_9022': string;
    '매매구분_9009': string;
    '기간_9012': string;
    '금액수량구분_9036': string;
};
export type OPOutputOPT10039MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '기간중주가등락_1111': string;
    '등락율_1112': string;
    '기간중거래량_1113': string;
    '순매수_210': string;
    '매수거래량_206': string;
    '매도거래량_202': string;
    '순매수금액_212': string;
    '매수금액_208': string;
    '매도금액_204': string;
};
export type OPOutputOPT10039 = {
    multi_items: OPOutputOPT10039MultiItem[];
};
export type OPInputOPT10040 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10040MultiItem = {
    '매도이탈시간_1115': string;
    '매도수량_1058': string;
    '매도상위이탈원_1114': string;
    '매수이탈시간_1117': string;
    '매수수량_1059': string;
    '매수상위이탈원_1116': string;
    '조회일자_1118': string;
    '조회시간_1119': string;
};
export type OPOutputOPT10040 = {
    '매도거래원별증감1_166': string;
    '매도거래원수량1_161': string;
    '매도거래원1_141': string;
    '매도거래원코드1_146': string;
    '매수거래원1_151': string;
    '매수거래원코드1_156': string;
    '매수거래원수량1_171': string;
    '매수거래원별증감1_176': string;
    '매도거래원별증감2_167': string;
    '매도거래원수량2_162': string;
    '매도거래원2_142': string;
    '매도거래원코드2_147': string;
    '매수거래원2_152': string;
    '매수거래원코드2_157': string;
    '매수거래원수량2_172': string;
    '매수거래원별증감2_177': string;
    '매도거래원별증감3_168': string;
    '매도거래원수량3_163': string;
    '매도거래원3_143': string;
    '매도거래원코드3_148': string;
    '매수거래원3_153': string;
    '매수거래원코드3_158': string;
    '매수거래원수량3_173': string;
    '매수거래원별증감3_178': string;
    '매도거래원별증감4_169': string;
    '매도거래원수량4_164': string;
    '매도거래원4_144': string;
    '매도거래원코드4_149': string;
    '매수거래원4_154': string;
    '매수거래원코드4_159': string;
    '매수거래원수량4_174': string;
    '매수거래원별증감4_179': string;
    '매도거래원별증감5_170': string;
    '매도거래원수량5_165': string;
    '매도거래원5_145': string;
    '매도거래원코드5_150': string;
    '매수거래원5_155': string;
    '매수거래원코드5_160': string;
    '매수거래원수량5_175': string;
    '매수거래원별증감5_180': string;
    '외국계매도추정합변동_262': string;
    '외국계매도추정합_261': string;
    '외국계매수추정합_263': string;
    '외국계매수추정합변동_264': string;
    multi_items: OPOutputOPT10040MultiItem[];
};
export type OPInputOPT10041 = {
    '종목코드_9001': string;
    '영웅클럽구분_9078': string;
};
export type OPOutputOPT10041MultiItem = {
    '조기종료여부_689': string;
    '통화단위_594': string;
};
export type OPOutputOPT10041 = {
    multi_items: OPOutputOPT10041MultiItem[];
};
export type OPInputOPT10042 = {
    '종목코드_9001': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
    '조회기간구분_9050': string;
    '시점구분_9049': string;
    '기간_9012': string;
    '정렬기준_9070': string;
};
export type OPOutputOPT10042MultiItem = {
    '순위_401': string;
    '회원사코드_9026': string;
    '회원사명_334': string;
};
export type OPOutputOPT10042 = {
    multi_items: OPOutputOPT10042MultiItem[];
};
export type OPInputOPT10043 = {
    '종목코드_9001': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
    '조회기간구분_9050': string;
    '시점구분_9049': string;
    '기간_9012': string;
    '정렬기준_9070': string;
    '회원사코드_9026': string;
};
export type OPOutputOPT10043MultiItem = {
    '일자_22': string;
    '종가_19': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '매도량_202': string;
    '매수량_206': string;
    '순매수수량_210': string;
    '거래량합_13': string;
    '거래비중_1063': string;
};
export type OPOutputOPT10043 = {
    multi_items: OPOutputOPT10043MultiItem[];
};
export type OPInputOPT10044 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '매매구분_9032': string;
    '시장구분_9008': string;
};
export type OPOutputOPT10044MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '순매수수량_1140': string;
    '순매수금액_1141': string;
    '추정평균가_1142': string;
    '현재가_10': string;
    '평균가대비_1143': string;
    '대비율_1144': string;
};
export type OPOutputOPT10044 = {
    multi_items: OPOutputOPT10044MultiItem[];
};
export type OPInputOPT10045 = {
    '종목코드_9001': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
    '기관추정단가구분_9111': string;
    '외인추정단가구분_9112': string;
    '누적기간_9012': string;
    '기간구분_9050': string;
};
export type OPOutputOPT10045MultiItem = {
    '일자_22': string;
    '종가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '기관기간누적_1060': string;
    '기관일별순매매수량_1140': string;
    '외인기간누적_1137': string;
    '외인일별순매매수량_1145': string;
    '한도소진율_1146': string;
};
export type OPOutputOPT10045 = {
    '기관추정평균가_1215': string;
    '외인추정평균가_1217': string;
    multi_items: OPOutputOPT10045MultiItem[];
};
export type OPInputOPT10046 = {
    '종목코드_9001': string;
    '틱구분_9007': string;
    '체결강도구분_747': string;
};
export type OPOutputOPT10046MultiItem = {
    '체결시간_20': string;
    '현재가_10': string;
    '전일대비_11': string;
    '전일대비기호_25': string;
    '등락율_12': string;
    '거래량_15': string;
    '누적거래대금_14': string;
    '누적거래량_13': string;
    '체결강도_228': string;
    '체결강도5분_1369': string;
    '체결강도20분_1370': string;
    '체결강도60분_1371': string;
};
export type OPOutputOPT10046 = {
    multi_items: OPOutputOPT10046MultiItem[];
};
export type OPInputOPT10047 = {
    '종목코드_9001': string;
    '틱구분_9007': string;
    '체결강도구분_747': string;
};
export type OPOutputOPT10047MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '전일대비_11': string;
    '전일대비기호_25': string;
    '등락율_12': string;
    '거래량_15': string;
    '누적거래대금_14': string;
    '누적거래량_13': string;
    '체결강도_228': string;
    '체결강도5분_1358': string;
    '체결강도20분_1359': string;
    '체결강도60분_1360': string;
};
export type OPOutputOPT10047 = {
    multi_items: OPOutputOPT10047MultiItem[];
};
export type OPInputOPT10048 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10048MultiItem = {
    '일자_20': string;
    'IV_671': string;
    '델타_672': string;
    '감마_673': string;
    '쎄타_674': string;
    '베가_675': string;
    '로_676': string;
    'LP_706': string;
};
export type OPOutputOPT10048 = {
    multi_items: OPOutputOPT10048MultiItem[];
};
export type OPInputOPT10049 = {
    '연속구분': string;
    '연속키': string;
    '종목코드': string;
};
export type OPOutputOPT10049MultiItem = {
    '시간': string;
    '패리티': string;
    '프리미엄': string;
    '기어링비율': string;
    '손익분기율': string;
    '현재가': string;
    '레버리지': string;
};
export type OPOutputOPT10049 = {
    '연속구분': string;
    '연속키': string;
    multi_items: OPOutputOPT10049MultiItem[];
};
export type OPInputOPT10050 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10050MultiItem = {
    '체결시간_20': string;
    '현재가_10': string;
    'ELW이론가_670': string;
    'IV_671': string;
    '델타_672': string;
    '감마_673': string;
    '쎄타_674': string;
    '베가_675': string;
    '로_676': string;
    'LP_706': string;
};
export type OPOutputOPT10050 = {
    multi_items: OPOutputOPT10050MultiItem[];
};
export type OPInputOPT10051 = {
    '시장구분_9008': string;
    '금액수량구분_9036': string;
    '기준일자_9048': string;
};
export type OPOutputOPT10051MultiItem = {
    '업종코드_9001': string;
    '업종명_1344': string;
    '현재가_10': string;
    '대비부호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_15': string;
    '증권순매수_6021': string;
    '보험순매수_6022': string;
    '투신순매수_6023': string;
    '은행순매수_6024': string;
    '종신금순매수_6025': string;
    '기금순매수_6026': string;
    '기타법인순매수_6027': string;
    '개인순매수_6028': string;
    '외국인순매수_6029': string;
    '내국인대우외국인순매수_6030': string;
    '국가순매수_6032': string;
    '사모펀드순매수_6033': string;
    '기관계순매수_6034': string;
};
export type OPOutputOPT10051 = {
    multi_items: OPOutputOPT10051MultiItem[];
};
export type OPInputOPT10052 = {
    '회원사코드_9026': string;
    '종목코드_9001': string;
    '시장구분_9008': string;
    '수량구분_9022': string;
    '가격구분_9077': string;
};
export type OPOutputOPT10052MultiItem = {
    '시간_20': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '거래원명_334': string;
    '구분_260': string;
    '순간거래량_211': string;
    '누적순매수_210': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '전일대비_12': string;
};
export type OPOutputOPT10052 = {
    multi_items: OPOutputOPT10052MultiItem[];
};
export type OPInputOPT10053 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10053MultiItem = {
    '매도이탈시간_1115': string;
    '매도수량_1058': string;
    '매도상위이탈원_1114': string;
    '매수이탈시간_1117': string;
    '매수수량_1059': string;
    '매수상위이탈원_1116': string;
    '조회일자_1118': string;
    '조회시간_1119': string;
};
export type OPOutputOPT10053 = {
    multi_items: OPOutputOPT10053MultiItem[];
};
export type OPInputOPT10054 = {
    '시장구분_9008': string;
    '장전구분_9075': string;
    '종목코드_9001': string;
    '발동구분_9068': string;
    '제외종목_9060': string;
    '거래량구분_9530': string;
    '최소거래량_9515': string;
    '최대거래량_9516': string;
    '거래대금구분_9091': string;
    '최소거래대금_9092': string;
    '최대거래대금_9093': string;
    '발동방향_9069': string;
};
export type OPOutputOPT10054MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '누적거래량_13': string;
    '발동가격_1221': string;
    '동적괴리율_1239': string;
    '매매체결처리시각_1223': string;
    'VI해제시각_1224': string;
    'VI적용구분_1225': string;
    '동적기준가격_1237': string;
    '정적기준가격_1236': string;
    '정적괴리율_1238': string;
    '시가대비등락률_1489': string;
    'VI발동횟수_1490': string;
};
export type OPOutputOPT10054 = {
    multi_items: OPOutputOPT10054MultiItem[];
};
export type OPInputOPT10055 = {
    '종목코드_9001': string;
    '당일전일_9013': string;
};
export type OPOutputOPT10055MultiItem = {
    '체결시간_20': string;
    '체결가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '체결량_15': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
};
export type OPOutputOPT10055 = {
    multi_items: OPOutputOPT10055MultiItem[];
};
export type OPInputOPT10058 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '매매구분_9032': string;
    '시장구분_9008': string;
    '투자자구분_9073': string;
};
export type OPOutputOPT10058MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '순매도수량_1140': string;
    '순매도금액_1141': string;
    '추정평균가_1142': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '평균가대비_1143': string;
    '대비율_1144': string;
    '기간거래량_1145': string;
};
export type OPOutputOPT10058 = {
    multi_items: OPOutputOPT10058MultiItem[];
};
export type OPInputOPT10059 = {
    '일자_9004': string;
    '종목코드_9001': string;
    '금액수량구분_9036': string;
    '매매구분_9032': string;
    '단위구분_9207': string;
};
export type OPOutputOPT10059MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '개인투자자_1859': string;
    '외국인투자자_1965': string;
    '기관계_1977': string;
    '금융투자_1805': string;
    '보험_1811': string;
    '투신_1817': string;
    '기타금융_1835': string;
    '은행_1829': string;
    '연기금등_1841': string;
    '사모펀드_1823': string;
    '국가_1847': string;
    '기타법인_1853': string;
    '내외국인_1971': string;
};
export type OPOutputOPT10059 = {
    multi_items: OPOutputOPT10059MultiItem[];
};
export type OPInputOPT10060 = {
    '일자_9004': string;
    '종목코드_9001': string;
    '금액수량구분_9036': string;
    '매매구분_9032': string;
    '단위구분_9207': string;
};
export type OPOutputOPT10060MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '전일대비_11': string;
    '누적거래대금_13': string;
    '개인투자자_1859': string;
    '외국인투자자_1965': string;
    '기관계_1977': string;
    '금융투자_1805': string;
    '보험_1811': string;
    '투신_1817': string;
    '기타금융_1835': string;
    '은행_1829': string;
    '연기금등_1841': string;
    '사모펀드_1823': string;
    '국가_1847': string;
    '기타법인_1853': string;
    '내외국인_1971': string;
};
export type OPOutputOPT10060 = {
    multi_items: OPOutputOPT10060MultiItem[];
};
export type OPInputOPT10061 = {
    '종목코드_9001': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
    '금액수량구분_9036': string;
    '매매구분_9032': string;
    '단위구분_9207': string;
};
export type OPOutputOPT10061MultiItem = {
    '개인투자자_6008': string;
    '외국인투자자_6009': string;
    '기관계_6014': string;
    '금융투자_6001': string;
    '보험_6002': string;
    '투신_6003': string;
    '기타금융_6005': string;
    '은행_6004': string;
    '연기금등_6006': string;
    '사모펀드_6013': string;
    '국가_6012': string;
    '기타법인_6007': string;
    '내외국인_6010': string;
};
export type OPOutputOPT10061 = {
    multi_items: OPOutputOPT10061MultiItem[];
};
export type OPInputOPT10062 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '시장구분_9008': string;
    '매매구분_9032': string;
    '정렬조건_9009': string;
    '단위구분_9207': string;
};
export type OPOutputOPT10062MultiItem = {
    '종목코드_9001': string;
    '순위_401': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '기관순매매수량_1134': string;
    '기관순매매금액_1135': string;
    '기관순매매평균가_1142': string;
    '외인순매매수량_1414': string;
    '외인순매매금액_1415': string;
    '외인순매매평균가_1148': string;
    '순매매수량_1140': string;
    '순매매금액_1141': string;
};
export type OPOutputOPT10062 = {
    multi_items: OPOutputOPT10062MultiItem[];
};
export type OPInputOPT10063 = {
    '시장구분_9008': string;
    '금액수량구분_9036': string;
    '투자자별_9073': string;
    '외국계전체_9112': string;
    '동시순매수구분_9177': string;
};
export type OPOutputOPT10063MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '순매수금액_212': string;
    '이전순매수금액_736': string;
    '순매수금액증감_213': string;
    '매수금액_208': string;
    '매수금액증감_209': string;
    '매도금액_204': string;
    '매도금액증감_205': string;
    '순매수수량_210': string;
    '이점시전순매수수량_217': string;
    '순매수증감_218': string;
    '매수수량_206': string;
    '매수수량증감_207': string;
    '매도수량_202': string;
    '매도수량증감_203': string;
};
export type OPOutputOPT10063 = {
    multi_items: OPOutputOPT10063MultiItem[];
};
export type OPInputOPT10064 = {
    '시장구분_9008': string;
    '금액수량구분_9036': string;
    '매매구분_9032': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10064MultiItem = {
    '시간_20': string;
    '외국인투자자_6009': string;
    '기관계_6014': string;
    '투신_6003': string;
    '보험_6002': string;
    '은행_6004': string;
    '연기금등_6006': string;
    '기타법인_6007': string;
    '국가_6012': string;
};
export type OPOutputOPT10064 = {
    multi_items: OPOutputOPT10064MultiItem[];
};
export type OPInputOPT10065 = {
    '매매구분_9032': string;
    '시장구분_9008': string;
    '기관구분_9073': string;
};
export type OPOutputOPT10065MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '매도량_1140': string;
    '매수량_1141': string;
    '순매도_1142': string;
};
export type OPOutputOPT10065 = {
    multi_items: OPOutputOPT10065MultiItem[];
};
export type OPInputOPT10066 = {
    '시장구분_9008': string;
    '금액수량구분_9036': string;
    '매매구분_9032': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10066MultiItem = {
    '종목코드_301': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '개인투자자_6008': string;
    '외국인투자자_6009': string;
    '기관계_6014': string;
    '금융투자_6001': string;
    '보험_6002': string;
    '투신_6003': string;
    '기타금융_6005': string;
    '은행_6004': string;
    '연기금등_6006': string;
    '사모펀드_6013': string;
    '국가_6012': string;
    '기타법인_6007': string;
};
export type OPOutputOPT10066 = {
    multi_items: OPOutputOPT10066MultiItem[];
};
export type OPInputOPT10067 = {
    '기준일자_9004': string;
    '시장구분_9008': string;
};
export type OPOutputOPT10067MultiItem = {
    '종목명_302': string;
    '종목코드_389': string;
    '대차거래체결주수_312': string;
    '대차거래상환주수_470': string;
    '잔고주수_471': string;
    '잔고금액_472': string;
};
export type OPOutputOPT10067 = {
    multi_items: OPOutputOPT10067MultiItem[];
};
export type OPInputOPT10068 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '전체구분_9002': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10068MultiItem = {
    '일자_22': string;
    '대차거래체결주수_313': string;
    '대차거래상환주수_473': string;
    '대차거래증감_477': string;
    '잔고주수_474': string;
    '잔고금액_475': string;
};
export type OPOutputOPT10068 = {
    multi_items: OPOutputOPT10068MultiItem[];
};
export type OPInputOPT10069 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '시장구분_9008': string;
};
export type OPOutputOPT10069MultiItem = {
    '종목명_302': string;
    '종목코드_389': string;
    '대차거래체결주수_312': string;
    '대차거래상환주수_470': string;
    '잔고주수_471': string;
    '잔고금액_472': string;
};
export type OPOutputOPT10069 = {
    '대차거래체결주수합_1041': string;
    '대차거래상환주수합_1042': string;
    '잔고주수합_1043': string;
    '잔고금액합_1044': string;
    '대차거래체결주수비율_1045': string;
    '대차거래상환주수비율_1046': string;
    '잔고주수비율_1047': string;
    '잔고금액비율_1048': string;
    multi_items: OPOutputOPT10069MultiItem[];
};
export type OPInputOPT10070 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10070 = {
    '매도거래원별증감1_166': string;
    '매도거래원수량1_161': string;
    '매도거래원1_141': string;
    '매도거래원코드1_146': string;
    '매수거래원1_151': string;
    '매수거래원코드1_156': string;
    '매수거래원수량1_171': string;
    '매수거래원별증감1_176': string;
    '매도거래원별증감2_167': string;
    '매도거래원수량2_162': string;
    '매도거래원2_142': string;
    '매도거래원코드2_147': string;
    '매수거래원2_152': string;
    '매수거래원코드2_157': string;
    '매수거래원수량2_172': string;
    '매수거래원별증감2_177': string;
    '매도거래원별증감3_168': string;
    '매도거래원수량3_163': string;
    '매도거래원3_143': string;
    '매도거래원코드3_148': string;
    '매수거래원3_153': string;
    '매수거래원코드3_158': string;
    '매수거래원수량3_173': string;
    '매수거래원별증감3_178': string;
    '매도거래원별증감4_169': string;
    '매도거래원수량4_164': string;
    '매도거래원4_144': string;
    '매도거래원코드4_149': string;
    '매수거래원4_154': string;
    '매수거래원코드4_159': string;
    '매수거래원수량4_174': string;
    '매수거래원별증감4_179': string;
    '매도거래원별증감5_170': string;
    '매도거래원수량5_165': string;
    '매도거래원5_145': string;
    '매도거래원코드5_150': string;
    '매수거래원5_155': string;
    '매수거래원코드5_160': string;
    '매수거래원수량5_175': string;
    '매수거래원별증감5_180': string;
    '외국계매도추정합변동_262': string;
    '외국계매도추정합_261': string;
    '외국계매수추정합_263': string;
    '외국계매수추정합변동_264': string;
};
export type OPInputOPT10071 = {
    '종목코드_9001': string;
    '시간구분_9007': string;
};
export type OPOutputOPT10071MultiItem = {
    '시간_20': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '대비율_12': string;
    '체결거래량_15': string;
    '누적거래량_13': string;
    '순간비율_31': string;
    '누적비율_30': string;
};
export type OPOutputOPT10071 = {
    multi_items: OPOutputOPT10071MultiItem[];
};
export type OPInputOPT10072 = {
    '계좌번호_9201': string;
    '종목코드_9001': string;
    '시작일자_9004': string;
};
export type OPOutputOPT10072MultiItem = {
    '일자_22': string;
    '당일hts매도수수료_940': string;
    '종목명_302': string;
    '체결량_911': string;
    '매입단가_931': string;
    '체결가_910': string;
    '당일매도손익_944': string;
    '손익율_8019': string;
    '종목코드_9001': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '인출가능금액_985': string;
    '대출일_8021': string;
    '신용구분_8020': string;
    '종목코드1_9001': string;
    '당일매도손익1_944': string;
};
export type OPOutputOPT10072 = {
    multi_items: OPOutputOPT10072MultiItem[];
};
export type OPInputOPT10073 = {
    '계좌번호_9201': string;
    '종목코드_9001': string;
    '시작일자_9005': string;
    '종료일자_9004': string;
};
export type OPOutputOPT10073MultiItem = {
    '일자_22': string;
    '당일hts매도수수료_940': string;
    '종목명_302': string;
    '체결량_911': string;
    '매입단가_931': string;
    '체결가_910': string;
    '당일매도손익_944': string;
    '손익율_8019': string;
    '종목코드_9001': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '인출가능금액_985': string;
    '대출일_8021': string;
    '신용구분_8020': string;
};
export type OPOutputOPT10073 = {
    multi_items: OPOutputOPT10073MultiItem[];
};
export type OPInputOPT10074 = {
    '계좌번호_9201': string;
    '시작일자_9005': string;
    '종료일자_9004': string;
};
export type OPOutputOPT10074MultiItem = {
    '일자_22': string;
    '매수금액_932': string;
    '매도금액_933': string;
    '당일매도손익_944': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
};
export type OPOutputOPT10074 = {
    '총매수금액_932': string;
    '총매도금액_933': string;
    '실현손익_944': string;
    '매매수수료_938': string;
    '매매세금_939': string;
    multi_items: OPOutputOPT10074MultiItem[];
};
export type OPInputOPT10075 = {
    '계좌번호_9201': string;
    '전체종목구분_9037': string;
    '매매구분_9204': string;
    '종목코드_9001': string;
    '체결구분_9206': string;
};
export type OPOutputOPT10075MultiItem = {
    '계좌번호_9201': string;
    '주문번호_9203': string;
    '관리사번_9205': string;
    '종목코드_9001': string;
    '업무구분_912': string;
    '주문상태_913': string;
    '종목명_302': string;
    '주문수량_900': string;
    '주문가격_901': string;
    '미체결수량_902': string;
    '체결누계금액_903': string;
    '원주문번호_904': string;
    '주문구분_905': string;
    '매매구분_906': string;
    '시간_908': string;
    '체결번호_909': string;
    '체결가_910': string;
    '체결량_911': string;
    '현재가_10': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '단위체결가_914': string;
    '단위체결량_915': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '개인투자자_8000': string;
};
export type OPOutputOPT10075 = {
    multi_items: OPOutputOPT10075MultiItem[];
};
export type OPInputOPT10076 = {
    '종목코드_9001': string;
    '조회구분_9037': string;
    '매도수구분_9204': string;
    '계좌번호_9201': string;
    '비밀번호_9202': string;
    '주문번호_9203': string;
    '체결구분_9206': string;
};
export type OPOutputOPT10076MultiItem = {
    '주문번호_9203': string;
    '종목명_302': string;
    '주문구분_905': string;
    '주문가격_901': string;
    '주문수량_900': string;
    '체결가_910': string;
    '체결량_911': string;
    '미체결수량_902': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '주문상태_913': string;
    '매매구분_906': string;
    '원주문번호_904': string;
    '주문시간_908': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10076 = {
    multi_items: OPOutputOPT10076MultiItem[];
};
export type OPInputOPT10077 = {
    '계좌번호_9201': string;
    '비밀번호_9202': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10077MultiItem = {
    '종목명_302': string;
    '체결량_911': string;
    '매입단가_931': string;
    '체결가_910': string;
    '당일매도손익_944': string;
    '손익율_8019': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10077 = {
    '당일실현손익_944': string;
    multi_items: OPOutputOPT10077MultiItem[];
};
export type OPInputOPT10078 = {
    '회원사코드_9026': string;
    '종목코드_9001': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
};
export type OPOutputOPT10078MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '순매수수량_210': string;
    '매수수량_206': string;
    '매도수량_202': string;
};
export type OPOutputOPT10078 = {
    multi_items: OPOutputOPT10078MultiItem[];
};
export type OPInputOPT10079 = {
    '종목코드_9001': string;
    '틱범위_9007': string;
    '수정주가구분_9055': string;
};
export type OPOutputOPT10079MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가구분_3502': string;
    '수정비율_3503': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT10079 = {
    '종목코드_9001': string;
    '마지막틱갯수_3501': string;
    multi_items: OPOutputOPT10079MultiItem[];
};
export type OPInputOPT10080 = {
    '종목코드_9001': string;
    '틱범위_9007': string;
    '수정주가구분_9055': string;
};
export type OPOutputOPT10080MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가구분_3502': string;
    '수정비율_3503': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT10080 = {
    '종목코드_9001': string;
    multi_items: OPOutputOPT10080MultiItem[];
};
export type OPInputOPT10081 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
    '수정주가구분_9055': string;
};
export type OPOutputOPT10081MultiItem = {
    '종목코드_9001': string;
    '현재가_10': string;
    '거래량_13': string;
    '거래대금_14': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가구분_3502': string;
    '수정비율_3503': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT10081 = {
    '종목코드_9001': string;
    multi_items: OPOutputOPT10081MultiItem[];
};
export type OPInputOPT10082 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
    '끝일자_9005': string;
    '수정주가구분_9055': string;
};
export type OPOutputOPT10082MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '거래대금_14': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가구분_3502': string;
    '수정비율_3503': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT10082 = {
    '종목코드_9001': string;
    multi_items: OPOutputOPT10082MultiItem[];
};
export type OPInputOPT10083 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
    '끝일자_9005': string;
    '수정주가구분_9055': string;
};
export type OPOutputOPT10083MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '거래대금_14': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가구분_3502': string;
    '수정비율_3503': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT10083 = {
    '종목코드_9001': string;
    multi_items: OPOutputOPT10083MultiItem[];
};
export type OPInputOPT10084 = {
    '종목코드_9001': string;
    '당일전일_9013': string;
    '틱분_9007': string;
    '시간_9002': string;
};
export type OPOutputOPT10084MultiItem = {
    '시간_20': string;
    '현재가_10': string;
    '전일대비_11': string;
    '대비율_12': string;
    '우선매도호가단위_27': string;
    '우선매수호가단위_28': string;
    '체결거래량_15': string;
    'sign_25': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '체결강도_228': string;
};
export type OPOutputOPT10084 = {
    multi_items: OPOutputOPT10084MultiItem[];
};
export type OPInputOPT10085 = {
    '계좌번호_9201': string;
};
export type OPOutputOPT10085MultiItem = {
    '일자_22': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '매입가_931': string;
    '매입금액_932': string;
    '보유수량_930': string;
    '당일매도손익_944': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '신용구분_917': string;
    '대출일_916': string;
    '결제잔고_8002': string;
    '청산가능수량_933': string;
    '신용금액_957': string;
    '신용이자_958': string;
    '만기일_918': string;
};
export type OPOutputOPT10085 = {
    multi_items: OPOutputOPT10085MultiItem[];
};
export type OPInputOPT10086 = {
    '종목코드_9001': string;
    '조회일자_9004': string;
    '표시구분_9036': string;
};
export type OPOutputOPT10086MultiItem = {
    '날짜_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '종가_10': string;
    '전일비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '금액(백만)_14': string;
    '신용비_329': string;
    '개인_1140': string;
    '기관_1136': string;
    '외인수량_1137': string;
    '외국계_1138': string;
    '프로그램_1139': string;
    '외인비_1066': string;
    '외인보유_1066': string;
    '외인비중_1066': string;
    '외인순매수_1137': string;
    '기관순매수_1136': string;
    '개인순매수_1140': string;
    '신용잔고율_329': string;
};
export type OPOutputOPT10086 = {
    multi_items: OPOutputOPT10086MultiItem[];
};
export type OPInputOPT10087 = {
    '종목코드_9001': string;
};
export type OPOutputOPT10087MultiItem = {
    '호가잔량기준시간_21': string;
    '시간외단일가_매도호가직전대비5_10085': string;
    '시간외단일가_매도호가직전대비4_10084': string;
    '시간외단일가_매도호가직전대비3_10083': string;
    '시간외단일가_매도호가직전대비2_10082': string;
    '시간외단일가_매도호가직전대비1_10081': string;
    '시간외단일가_매도호가수량5_10065': string;
    '시간외단일가_매도호가수량4_10064': string;
    '시간외단일가_매도호가수량3_10063': string;
    '시간외단일가_매도호가수량2_10062': string;
    '시간외단일가_매도호가수량1_10061': string;
    '시간외단일가_매도호가5_10045': string;
    '시간외단일가_매도호가4_10044': string;
    '시간외단일가_매도호가3_10043': string;
    '시간외단일가_매도호가2_10042': string;
    '시간외단일가_매도호가1_10041': string;
    '시간외단일가_매수호가1_10051': string;
    '시간외단일가_매수호가2_10052': string;
    '시간외단일가_매수호가3_10053': string;
    '시간외단일가_매수호가4_10054': string;
    '시간외단일가_매수호가5_10055': string;
    '시간외단일가_매수호가수량1_10071': string;
    '시간외단일가_매수호가수량2_10072': string;
    '시간외단일가_매수호가수량3_10073': string;
    '시간외단일가_매수호가수량4_10074': string;
    '시간외단일가_매수호가수량5_10075': string;
    '시간외단일가_매수호가직전대비1_10091': string;
    '시간외단일가_매수호가직전대비2_10092': string;
    '시간외단일가_매수호가직전대비3_10093': string;
    '시간외단일가_매수호가직전대비4_10094': string;
    '시간외단일가_매수호가직전대비5_10095': string;
    '시간외단일가_매도호가총잔량_10121': string;
    '시간외단일가_매수호가총잔량_10125': string;
    '매도호가총잔량직전대비_122': string;
    '매도호가총잔량_121': string;
    '매수호가총잔량_125': string;
    '매수호가총잔량직전대비_126': string;
    '시간외매도호가총잔량직전대비_132': string;
    '시간외매도호가총잔량_131': string;
    '시간외매수호가총잔량_135': string;
    '시간외매수호가총잔량직전대비_136': string;
    '시간외단일가_현재가_10010': string;
    '시간외단일가_전일대비기호_10025': string;
    '시간외단일가_전일대비_10011': string;
    '시간외단일가_등락률_10012': string;
    '시간외단일가_누적거래량_10013': string;
};
export type OPOutputOPT10087 = {
    multi_items: OPOutputOPT10087MultiItem[];
};
export type OPInputOPT10094 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
    '끝일자_9005': string;
    '수정주가구분_9055': string;
};
export type OPOutputOPT10094MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '거래대금_14': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가구분_3502': string;
    '수정비율_3503': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT10094 = {
    '종목코드_9001': string;
    multi_items: OPOutputOPT10094MultiItem[];
};
export type OPInputOPT10098 = {
    '시장구분_9008': string;
    '정렬기준_9009': string;
    '종목조건_9060': string;
    '거래량조건_9022': string;
    '신용조건_9062': string;
    '거래대금_9080': string;
};
export type OPOutputOPT10098MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10010': string;
    '전일대비기호_10025': string;
    '전일대비_10011': string;
    '등락률_10012': string;
    '매도총잔량_10121': string;
    '매수총잔량_10125': string;
    '누적거래량_10013': string;
    '누적거래대금_10014': string;
    '당일종가_10': string;
    '당일종가등락률_12': string;
};
export type OPOutputOPT10098 = {
    multi_items: OPOutputOPT10098MultiItem[];
};
export type OPInputOPT10131 = {
    '기간_9305': string;
    '시작일자_9004': string;
    '종료일자_9005': string;
    '장구분_9008': string;
    '순매도수구분_9032': string;
    '종목업종구분_9057': string;
    '금액수량구분_9036': string;
};
export type OPOutputOPT10131MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '기간중주가등락률_1112': string;
    '기관순매매금액_1135': string;
    '기관순매매량_1134': string;
    '기관계연속순매수일수_877': string;
    '기관계연속순매수량_878': string;
    '기관계연속순매수금액_879': string;
    '외국인순매매량_1414': string;
    '외국인순매매액_1415': string;
    '외국인연속순매수일수_880': string;
    '외국인연속순매수량_881': string;
    '외국인연속순매수금액_882': string;
    '순매매량_1140': string;
    '순매매액_1141': string;
    '합계연속순매수일수_883': string;
    '합계연속순매매수량_884': string;
    '합계연속순매수금액_885': string;
};
export type OPOutputOPT10131 = {
    multi_items: OPOutputOPT10131MultiItem[];
};
export type OPInputOPT10170 = {
    '계좌번호_9201': string;
    '비밀번호_9202': string;
    '기준일자_9004': string;
    '단주구분_9207': string;
    '현금신용구분_9020': string;
};
export type OPOutputOPT10170MultiItem = {
    '종목명_302': string;
    '매수평균가_8011': string;
    '매수수량_8012': string;
    '매도평균가_8014': string;
    '매도수량_8015': string;
    '수수료_제세금_8017': string;
    '손익금액_8018': string;
    '매도금액_8016': string;
    '매수금액_8013': string;
    '수익률_8019': string;
    '종목코드_9001': string;
};
export type OPOutputOPT10170 = {
    '총매도금액_8016': string;
    '총매수금액_8013': string;
    '총수수료_세금_8017': string;
    '총정산금액_8010': string;
    '총손익금액_8018': string;
    '총수익률_8019': string;
    multi_items: OPOutputOPT10170MultiItem[];
};
export type OPInputOPT20001 = {
    '시장구분_9008': string;
    '업종코드_9001': string;
};
export type OPOutputOPT20001MultiItem = {
    '시간n_20': string;
    '현재가n_10': string;
    '전일대비기호n_25': string;
    '전일대비n_11': string;
    '등락률n_12': string;
    '거래량n_15': string;
    '누적거래량n_13': string;
};
export type OPOutputOPT20001 = {
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '거래형성종목수_256': string;
    '거래형성비율_257': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '상한_251': string;
    '상승_252': string;
    '보합_253': string;
    '하락_255': string;
    '하한_254': string;
    '52주최고가_1000': string;
    '52주최고가일_1001': string;
    '52주최고가대비율_1002': string;
    '52주최저가_1003': string;
    '52주최저가일_1004': string;
    '52주최저가대비율_1005': string;
    multi_items: OPOutputOPT20001MultiItem[];
};
export type OPInputOPT20002 = {
    '시장구분_9008': string;
    '업종코드_9001': string;
};
export type OPOutputOPT20002MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '현재거래량_13': string;
    '매도호가_41': string;
    '매수호가_51': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
};
export type OPOutputOPT20002 = {
    multi_items: OPOutputOPT20002MultiItem[];
};
export type OPInputOPT20003 = {
    '업종코드_9008': string;
};
export type OPOutputOPT20003MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '비중_1120': string;
    '거래대금_14': string;
    '상한_251': string;
    '상승_252': string;
    '보합_253': string;
    '하락_255': string;
    '하한_254': string;
    '상장종목수_1065': string;
};
export type OPOutputOPT20003 = {
    multi_items: OPOutputOPT20003MultiItem[];
};
export type OPInputOPT20004 = {
    '업종코드_9001': string;
    '틱범위_9007': string;
};
export type OPOutputOPT20004MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '전일종가_346': string;
};
export type OPOutputOPT20004 = {
    '업종코드_9001': string;
    multi_items: OPOutputOPT20004MultiItem[];
};
export type OPInputOPT20005 = {
    '업종코드_9001': string;
    '틱범위_9007': string;
};
export type OPOutputOPT20005MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '전일종가_346': string;
};
export type OPOutputOPT20005 = {
    '업종코드_9001': string;
    multi_items: OPOutputOPT20005MultiItem[];
};
export type OPInputOPT20006 = {
    '업종코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT20006MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '거래대금_14': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '전일종가_346': string;
};
export type OPOutputOPT20006 = {
    '업종코드_9001': string;
    multi_items: OPOutputOPT20006MultiItem[];
};
export type OPInputOPT20007 = {
    '업종코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT20007MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '거래대금_14': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '전일종가_346': string;
};
export type OPOutputOPT20007 = {
    '업종코드_9001': string;
    multi_items: OPOutputOPT20007MultiItem[];
};
export type OPInputOPT20008 = {
    '업종코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT20008MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '거래대금_14': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '전일종가_346': string;
};
export type OPOutputOPT20008 = {
    '업종코드_9001': string;
    multi_items: OPOutputOPT20008MultiItem[];
};
export type OPInputOPT20009 = {
    '시장구분_9008': string;
    '업종코드_9001': string;
};
export type OPOutputOPT20009MultiItem = {
    '일자n_22': string;
    '현재가n_10': string;
    '전일대비기호n_25': string;
    '전일대비n_11': string;
    '등락률n_12': string;
    '누적거래량n_13': string;
};
export type OPOutputOPT20009 = {
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '거래형성종목수_256': string;
    '거래형성비율_257': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '상한_251': string;
    '상승_252': string;
    '보합_253': string;
    '하락_255': string;
    '하한_254': string;
    '52주최고가_1000': string;
    '52주최고가일_1001': string;
    '52주최고가대비율_1002': string;
    '52주최저가_1003': string;
    '52주최저가일_1004': string;
    '52주최저가대비율_1005': string;
    multi_items: OPOutputOPT20009MultiItem[];
};
export type OPInputOPT20019 = {
    '업종코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT20019MultiItem = {
    '현재가_10': string;
    '거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '거래대금_14': string;
    '대업종구분_317': string;
    '소업종구분_318': string;
    '종목정보_370': string;
    '전일종가_346': string;
};
export type OPOutputOPT20019 = {
    '업종코드_9001': string;
    multi_items: OPOutputOPT20019MultiItem[];
};
export type OPInputOPT20068 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '전체구분_9002': string;
    '종목코드_9001': string;
};
export type OPOutputOPT20068MultiItem = {
    '일자_22': string;
    '대차거래체결주수_312': string;
    '대차거래상환주수_470': string;
    '대차거래증감_476': string;
    '잔고주수_471': string;
    '잔고금액_472': string;
};
export type OPOutputOPT20068 = {
    multi_items: OPOutputOPT20068MultiItem[];
};
export type OPInputOPT30001 = {
    '등락구분_9020': string;
    '시간구분_9021': string;
    '시간_9013': string;
    '거래량구분_9022': string;
    '발행사코드_9026': string;
    '기초자산코드_9001': string;
    '권리구분_9040': string;
    'LP코드_9527': string;
    '거래종료ELW제외_9540': string;
};
export type OPOutputOPT30001MultiItem = {
    '종목코드_9001': string;
    '순위_401': string;
    '종목명_302': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '거래종료ELW기준가_1027': string;
    '현재가_10': string;
    '기준대비_1028': string;
    '거래량_13': string;
    '급등율_1037': string;
};
export type OPOutputOPT30001 = {
    '기준가시간_1041': string;
    multi_items: OPOutputOPT30001MultiItem[];
};
export type OPInputOPT30002 = {
    '발행사코드_9026': string;
    '거래량구분_9022': string;
    '매매구분_9009': string;
    '기간_9012': string;
    '거래종료ELW제외_9540': string;
};
export type OPOutputOPT30002MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '주가등락_1111': string;
    '등락율_1112': string;
    '거래량_1113': string;
    '순매수_210': string;
    '매수거래량_206': string;
    '매도거래량_202': string;
};
export type OPOutputOPT30002 = {
    multi_items: OPOutputOPT30002MultiItem[];
};
export type OPInputOPT30003 = {
    '기초자산코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT30003MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '대비구분_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '변동수량_683': string;
    'LP보유수량_444': string;
    '비중_446': string;
};
export type OPOutputOPT30003 = {
    multi_items: OPOutputOPT30003MultiItem[];
};
export type OPInputOPT30004 = {
    '발행사코드_9026': string;
    '기초자산코드_9001': string;
    '권리구분_9040': string;
    'LP코드_9527': string;
    '거래종료ELW제외_9540': string;
};
export type OPOutputOPT30004MultiItem = {
    '종목코드_9001': string;
    '발행사명_440': string;
    '회차_441': string;
    '기초자산명_442': string;
    '권리구분_443': string;
    '괴리율_186': string;
    '베이시스_185': string;
    '잔존일수_445': string;
    '이론가_670': string;
    '현재가_10': string;
    '대비구분_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '종목명_302': string;
};
export type OPOutputOPT30004 = {
    multi_items: OPOutputOPT30004MultiItem[];
};
export type OPInputOPT30005 = {
    '발행사코드_9026': string;
    '기초자산코드_9001': string;
    '권리구분_9040': string;
    'LP코드_9527': string;
    '정렬구분_9009': string;
};
export type OPOutputOPT30005MultiItem = {
    '종목코드_9001': string;
    '발행사명_440': string;
    '회차_441': string;
    '기초자산명_442': string;
    '권리구분_443': string;
    '만기일_372': string;
    '현재가_10': string;
    '대비구분_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '거래량대비_30': string;
    '거래대금_14': string;
    '전일거래량_304': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '패리티_666': string;
    '기어링비율_667': string;
    '손익분기율_668': string;
    '자본지지점_28669': string;
    '이론가_670': string;
    '내재변동성_671': string;
    '델타_672': string;
    '레버리지_682': string;
    '행사가격_425': string;
    '전환비율_431': string;
    'LP보유비율_446': string;
    '손익분기점_683': string;
    '최종거래일_430': string;
    '상장일_439': string;
    'LP초종공급일_447': string;
    '종목명_302': string;
    '잔존일수_445': string;
    '괴리율_686': string;
    'LP회원사명_661': string;
    'LP회원사명1_691': string;
    'LP회원사명2_689': string;
    'Xray순간체결량정리매매구분_704': string;
    'Xray순간체결량증거금100구분_706': string;
};
export type OPOutputOPT30005 = {
    multi_items: OPOutputOPT30005MultiItem[];
};
export type OPInputOPT30006 = {
    '종목코드_9001': string;
};
export type OPOutputOPT30006 = {
    '조기종료여부_689': string;
    '이론가_670': string;
    '괴리율_686': string;
    '내재변동성_671': string;
    '손익분기율_668': string;
    '행사가격_425': string;
    '전환비율_431': string;
    '보상율_433': string;
    '가격상승참여율_432': string;
    '권리유형_426': string;
    '잔존일수_445': string;
    '주식수_312': string;
    'LP보유비율_446': string;
    'LP보유수량_444': string;
    '스프레드_412': string;
    '패리티_666': string;
    '기어링비율_667': string;
    '상장일_439': string;
    '최종거래일_430': string;
    '신주인수권행사종료일_372': string;
    '신주인수권행사게시일_371': string;
    'LP최종공급일_447': string;
    '지급일_434': string;
    '투자지표산출여부_437': string;
    '지급대리인_435': string;
    '결제방법_429': string;
    '권리행사방식_427': string;
    '한글발행기관명_413': string;
    '확정지급금액_448': string;
    'KO베리어_690': string;
    'XRay순간체결량증거금100%구분_706': string;
    '기초자산1_414': string;
    '기초자산구성비율1_419': string;
    '기초자산2_415': string;
    '기초자산구성비율2_420': string;
    '기초자산3_416': string;
    '기초자산구성비율3_421': string;
    '기초자산4_417': string;
    '기초자산구성비율4_422': string;
    '기초자산5_418': string;
    '기초자산구성비율5_423': string;
    '권리내용_428': string;
    '만기평가가격방식_436': string;
    '평가방식_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '기초자산종목코드_395': string;
    '기초자산명_442': string;
    'LP회원사명1_661': string;
    'LP회원사명4_664': string;
    'LP회원사명2_662': string;
    '평가시작일자_692': string;
    '평가종료일자_694': string;
    '예상평가가격_696': string;
    '평가와뇰여부_697': string;
    '평가시작시간_693': string;
    '평가종료시간_695': string;
    '평가기간최고가_698': string;
    '평가기간최저가_699': string;
    'XRay순간체결량체결구분_700': string;
    'XRay순간체결량동시구분_701': string;
    'XRay순간체결량관리구분_702': string;
    'XRay순간체결량투자유의구분_703': string;
};
export type OPInputOPT30007 = {
    '발행사코드_9026': string;
    '기초자산코드_9001': string;
    '권리구분_9040': string;
    'LP코드_9527': string;
    '정렬구분_9009': string;
    '거래종료ELW제외_9540': string;
};
export type OPOutputOPT30007MultiItem = {
    '기초자산코드_9001': string;
    '발행사명_440': string;
    '회차_441': string;
    '기초자산명_442': string;
    '콜풋구분_443': string;
    '신주인수권행사종료일_372': string;
    '잔존일수_445': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '거래량대비_30': string;
    '누적거래대금_14': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '패리티_666': string;
    '기어링비율_667': string;
    '손익분기율_668': string;
    '자본지지점_669': string;
    '이론가_670': string;
    '내재변동성_671': string;
    '델타_672': string;
    '레버리지_682': string;
    'LP보유비율_446': string;
    '행사가격_425': string;
    '전환비율_431': string;
    '최종거래일_430': string;
    '종목명_302': string;
    '조기종료여부_689': string;
    'KO접근도_691': string;
};
export type OPOutputOPT30007 = {
    multi_items: OPOutputOPT30007MultiItem[];
};
export type OPInputOPT30008 = {
    '종목코드_9001': string;
};
export type OPOutputOPT30008MultiItem = {
    '체결시간_20': string;
    '내재변동성_671': string;
    '델타_672': string;
    '감마_673': string;
    '쎄타_674': string;
    '베가_675': string;
    '로_676': string;
    'X-Ray순간체결량증거금100%구분_706': string;
};
export type OPOutputOPT30008 = {
    multi_items: OPOutputOPT30008MultiItem[];
};
export type OPInputOPT30009 = {
    '정렬구분_9009': string;
    '권리구분_9040': string;
    '거래종료제외_9540': string;
};
export type OPOutputOPT30009MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '매도잔량_121': string;
    '매수잔량_125': string;
    '거래량_13': string;
    '거래대금_14': string;
};
export type OPOutputOPT30009 = {
    multi_items: OPOutputOPT30009MultiItem[];
};
export type OPInputOPT30010 = {
    '정렬구분_9009': string;
    '권리구분_9040': string;
    '거래종료제외_9540': string;
};
export type OPOutputOPT30010MultiItem = {
    '종목코드_9001': string;
    '순위_401': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락률_12': string;
    '거래량_13': string;
    '매도잔량_121': string;
    '매수잔량_125': string;
    '순매수잔량_128': string;
    '거래대금_14': string;
};
export type OPOutputOPT30010 = {
    multi_items: OPOutputOPT30010MultiItem[];
};
export type OPInputOPT30011 = {
    '종목코드_9001': string;
};
export type OPOutputOPT30011MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '근접율_9019': string;
};
export type OPOutputOPT30011 = {
    multi_items: OPOutputOPT30011MultiItem[];
};
export type OPInputOPT30012 = {
    '종목코드_9001': string;
};
export type OPOutputOPT30012 = {
    '자산코드_395': string;
    '현재가_10': string;
    '전일대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    'LP회원사명_664': string;
    'LP회원사명1_661': string;
    'LP회원사명2_662': string;
    'ELW권리내용_428': string;
    'ELW만기평가가격_436': string;
    'ELW이론가_670': string;
    '괴리율_686': string;
    'ELW내재변동성_671': string;
    '예상권리가_687': string;
    'ELW손익분기율_668': string;
    'ELW행사가_425': string;
    'ELW전환비율_431': string;
    'ELW보상율_433': string;
    'ELW가격상승참여율_432': string;
    'ELW권리유형_426': string;
    'ELW잔존일수_445': string;
    '주식수_312': string;
    'ELW LP주문가능_438': string;
    'LP보유비율_446': string;
    'LP보유수량_444': string;
    'ELW스프레드_412': string;
    'ELW패리티_666': string;
    'ELW기어링_667': string;
    'ELW상장일_439': string;
    'ELW최종거래일_430': string;
    '만기일_372': string;
    '행사일_371': string;
    'LP공급종료일_447': string;
    'ELW지급일_434': string;
    'ELW투자지표산출_437': string;
    'ELW지급대리인_435': string;
    'ELW결재방법_429': string;
    'ELW권리행사방식_427': string;
    'ELW발행기관_413': string;
    '확정지급액_448': string;
    'KO베리어_690': string;
    'IV_709': string;
    '종기종료ELW발생_689': string;
    '기초자산1_414': string;
    '기초자산구성비율1_419': string;
    '기초자산2_415': string;
    '기초자산구성비율2_420': string;
    '기초자산3_416': string;
    '기초자산구성비율3_421': string;
    '기초자산4_417': string;
    '기초자산구성비율4_422': string;
    '기초자산5_418': string;
    '기초자산구성비율5_423': string;
    '평가시작일자_692': string;
    '평가종료일자_694': string;
    '평가시작시간_693': string;
    '평가종료시간_695': string;
    '평가가격_696': string;
    '평가완료여부_697': string;
    '전체최고가_698': string;
    '전체최저가_699': string;
    '직후최고가_710': string;
    '직후최저가_711': string;
    '후반장최고가_712': string;
    '후반장최저가_713': string;
};
export type OPInputOPT40001 = {
    '종목코드_9001': string;
    '모름_9700': string;
    '기간_9305': string;
};
export type OPOutputOPT40001MultiItem = {
    'ETF수익률_221': string;
    '체결수익률_220': string;
    '외인순매수수량_1137': string;
    '기관순매수수량_1136': string;
};
export type OPOutputOPT40001 = {
    multi_items: OPOutputOPT40001MultiItem[];
};
export type OPInputOPT40002 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40002 = {
    '종목명_302': string;
    'ETF대상지수명_1094': string;
    '원주가격_1341': string;
    'ETF과세유형_1342': string;
    'ETN과세유형_1396': string;
};
export type OPInputOPT40003 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40003MultiItem = {
    '체결일자_22': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '대비율_12': string;
    '거래량_13': string;
    'NAV_36': string;
    '누적거래대금_14': string;
    'NAV/지수괴리율_265': string;
    'NAV/ETF괴리율_266': string;
    '추적오차율_39': string;
    '추적현재가_768': string;
    '추적전일대비_769': string;
    '추적대비기호_770': string;
};
export type OPOutputOPT40003 = {
    multi_items: OPOutputOPT40003MultiItem[];
};
export type OPInputOPT40004 = {
    '과세유형_9132': string;
    'NAV대비_9131': string;
    '운용사_9133': string;
    '과세여부_9137': string;
    '추적지수_9130': string;
};
export type OPOutputOPT40004MultiItem = {
    '종목코드_9001': string;
    '종목분류_300': string;
    '종목명_302': string;
    '종가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '대비율_12': string;
    '거래량_13': string;
    'NAV_36': string;
    '추적오차율_39': string;
    '과표기준_1085': string;
    '배당전기준_1087': string;
    '전일배당금_1086': string;
    '추적지수명_1094': string;
    '배수_1088': string;
    '추적지수코드_1086': string;
    '추적지수_10': string;
    '추적등락율_12': string;
};
export type OPOutputOPT40004 = {
    multi_items: OPOutputOPT40004MultiItem[];
};
export type OPInputOPT40005 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40005MultiItem = {
    '체결시간_22': string;
    '종가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '대비율_12': string;
    '거래량_13': string;
    'NAV_36': string;
    '누적거래대금_14': string;
    'NAV/지수괴리율_265': string;
    'NAV/ETF괴리율_266': string;
    '추적오차율_39': string;
    '추적지수_768': string;
    '추적대비기호_770': string;
    '추적전일대비_769': string;
};
export type OPOutputOPT40005 = {
    multi_items: OPOutputOPT40005MultiItem[];
};
export type OPInputOPT40006 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40006MultiItem = {
    '시간_20': string;
    '종가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    'NAV_36': string;
    '거래대금_14': string;
    'NAV지수_265': string;
    'NAVETF_266': string;
    '추적_39': string;
    '추적지수_768': string;
    '추적지수전일대비_769': string;
    '추적지수전일대비기호_770': string;
};
export type OPOutputOPT40006 = {
    '종목명_302': string;
    'ETF대상지수명_1094': string;
    '원주가격_1341': string;
    'ETF과세유형_1342': string;
    'ETN과세유형_1396': string;
    multi_items: OPOutputOPT40006MultiItem[];
};
export type OPInputOPT40007 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40007MultiItem = {
    '체결시간_20': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '거래량_15': string;
};
export type OPOutputOPT40007 = {
    '종목분류_300': string;
    '종목명_302': string;
    'ETF대상지수명_1094': string;
    'ETF대상지수코드_1093': string;
    '대상지수대비율_375': string;
    '원주가격_1341': string;
    multi_items: OPOutputOPT40007MultiItem[];
};
export type OPInputOPT40008 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40008MultiItem = {
    '일자_22': string;
    '현재가n_10': string;
    '대비기호n_25': string;
    '전일대비n_11': string;
    '누적거래량_13': string;
    '외인순매수수량_1137': string;
    '기관순매수수량_1136': string;
};
export type OPOutputOPT40008 = {
    '체결시간_20': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '거래량_15': string;
    multi_items: OPOutputOPT40008MultiItem[];
};
export type OPInputOPT40009 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40009MultiItem = {
    'NAV_36': string;
    'NAV전일대비_37': string;
    'NAV등락율_38': string;
    '추적오차율_39': string;
    '괴리율_40': string;
    '주식수_312': string;
    '기준가_307': string;
    '외인보유수량_313': string;
    '대용가_308': string;
    '모름_1085': string;
    '환산가격_1087': string;
    'DR/주_1086': string;
    '원주가격_1089': string;
};
export type OPOutputOPT40009 = {
    multi_items: OPOutputOPT40009MultiItem[];
};
export type OPInputOPT40010 = {
    '종목코드_9001': string;
};
export type OPOutputOPT40010MultiItem = {
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '거래량_13': string;
    '외인순매수_1137': string;
};
export type OPOutputOPT40010 = {
    multi_items: OPOutputOPT40010MultiItem[];
};
export type OPInputOPT50001 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50001MultiItem = {
    '체결시간_20': string;
    '현재가n_10': string;
    '대비기호n_25': string;
    '전일대비n_11': string;
    '체결량_15': string;
    '미결제약정n_195': string;
    '코스피200_197': string;
    '시장베이시스n_183': string;
    '역사적변동성_327': string;
    '표면이자_338': string;
    '배당액지수_361': string;
    '기준가n_307': string;
    '등락율n_12': string;
    '누적거래량_13': string;
};
export type OPOutputOPT50001 = {
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '거래량대비_30': string;
    '기준가_307': string;
    '이론가_182': string;
    '이론베이시스_184': string;
    '괴리도_185': string;
    '괴리율_186': string;
    '시장베이시스_183': string;
    '누적거래대금_14': string;
    '상한가_305': string;
    '하한가_306': string;
    'CB상한가_320': string;
    'CB하한가_321': string;
    '대용가_338': string;
    '최종거래일_322': string;
    '잔존일수_323': string;
    '영업일기준잔존일_403': string;
    '상장중최고가_1018': string;
    '상장중최고가대비율_1020': string;
    '상장중최고가일_1019': string;
    '상장중최저가_1021': string;
    '상장중최저가대비율_1023': string;
    '상장중최저가일_1022': string;
    '종목명_302': string;
    '호가시간_21': string;
    '매도수익율5_85': string;
    '매도건수5_105': string;
    '매도수량5_65': string;
    '매도수익율4_84': string;
    '매도건수4_104': string;
    '매도수량4_64': string;
    '매도호가4_44': string;
    '매도호가5_45': string;
    '매도수익율3_83': string;
    '매도건수3_103': string;
    '매도수량3_63': string;
    '매도호가3_43': string;
    '매도수익율2_82': string;
    '매도건수2_102': string;
    '매도수량2_62': string;
    '매도호가2_42': string;
    '매도수익율1_81': string;
    '매도건수1_101': string;
    '매도수량1_61': string;
    '매도호가1_41': string;
    '매수호가1_51': string;
    '매수수량1_71': string;
    '매수건수1_111': string;
    '매수수익율1_91': string;
    '매수호가2_52': string;
    '매수수량2_72': string;
    '매수건수2_112': string;
    '매수수익율2_92': string;
    '매수호가3_53': string;
    '매수수량3_73': string;
    '매수건수3_113': string;
    '매수수익율3_93': string;
    '매수호가4_54': string;
    '매수수량4_74': string;
    '매수건수4_114': string;
    '매수수익율4_94': string;
    '매수호가5_55': string;
    '매수수량5_75': string;
    '매수건수5_115': string;
    '매수수익율5_95': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '2차저항_341': string;
    '1차저항_340': string;
    '피봇_339': string;
    '1차저지_342': string;
    '2차저지_343': string;
    '미결제약정_195': string;
    '미결제약정전일대비_181': string;
    '매도호가총건수_123': string;
    '매도호가총잔량_121': string;
    '순매수잔량_128': string;
    '매수호가총잔량_125': string;
    '매수호가총건수_127': string;
    '매도호가총잔량직전대비_122': string;
    '매수호가총잔량직전대비_126': string;
    '예상체결가_23': string;
    '예상체결가전일종가대비기호_238': string;
    '예상체결가전일종가대비_200': string;
    '예상체결가전일종가대비등락율_201': string;
    '이자율_338': string;
    multi_items: OPOutputOPT50001MultiItem[];
};
export type OPInputOPT50002 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50002MultiItem = {
    '체결일자_22': string;
    '현재가n_10': string;
    '대비기호n_25': string;
    '전일대비n_11': string;
    '등락율n_12': string;
    '거래량_13': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '예상체결가_23': string;
    '미결제약정_195': string;
    '예상체결가전일종가대비기호_238': string;
    '예상체결가전일종가대비_200': string;
    '예상체결가전일종가대비등락율_201': string;
};
export type OPOutputOPT50002 = {
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    multi_items: OPOutputOPT50002MultiItem[];
};
export type OPInputOPT50003 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50003 = {
    '일자_22': string;
    '현재가_10': string;
    '기준가_307': string;
    '체결량_15': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '시초미결제약정수량_246': string;
    '최고미결제약정수량_247': string;
    '최저미결제약정수량_248': string;
    '미결제약정_195': string;
    '전일미결제약정_269': string;
    '이론가_182': string;
    '내재변동성_189': string;
    '델타_190': string;
    '감마_191': string;
    '상한가_305': string;
    '하한가_306': string;
    '시장베이시스_183': string;
    '괴리율_186': string;
};
export type OPInputOPT50004 = {
    '만기년월_9100': string;
};
export type OPOutputOPT50004MultiItem = {
    '종목코드_9001': string;
    'ATM구분_326': string;
    '행사가_324': string;
};
export type OPOutputOPT50004 = {
    multi_items: OPOutputOPT50004MultiItem[];
};
export type OPInputOPT50005 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50005MultiItem = {
    '체결시간_20': string;
    '미결제약정_195': string;
    '누적거래량_13': string;
    '체결량_15': string;
};
export type OPOutputOPT50005 = {
    multi_items: OPOutputOPT50005MultiItem[];
};
export type OPInputOPT50006 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50006MultiItem = {
    '체결시간_20': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '체결량_15': string;
    '누적거래량_13': string;
    '미결제약정_195': string;
    '미결제증감_196': string;
    '전일거래량대비_30': string;
    '전일거래량_304': string;
    '기준가_307': string;
};
export type OPOutputOPT50006 = {
    '종목명_302': string;
    multi_items: OPOutputOPT50006MultiItem[];
};
export type OPInputOPT50007 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
    '시간검색_9002': string;
};
export type OPOutputOPT50007MultiItem = {
    '체결시간_20': string;
    '시가n_16': string;
    '고가n_17': string;
    '저가n_18': string;
    '현재가n_10': string;
    '대비기호n_25': string;
    '전일대비n_11': string;
    '체결량_15': string;
    '누적거래량n_13': string;
    '미결제약정_195': string;
    '미결제증감_196': string;
    '시장베이시스_183': string;
    '코스피200_197': string;
    '종목명_302': string;
    '내재가치n_187': string;
};
export type OPOutputOPT50007 = {
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '내재가치_187': string;
    '시간가치_188': string;
    '이론가_182': string;
    '괴리율_186': string;
    multi_items: OPOutputOPT50007MultiItem[];
};
export type OPInputOPT50008 = {
    '종목코드_9001': string;
    '시간구분_9038': string;
};
export type OPOutputOPT50008MultiItem = {
    '체결시간_20': string;
    '투자자별매도금액_204': string;
    '투자자별매수금액_208': string;
    '투자자별순매수금액_212': string;
};
export type OPOutputOPT50008 = {
    multi_items: OPOutputOPT50008MultiItem[];
};
export type OPInputOPT50009 = {
    '종목코드_9001': string;
    '시간검색_9002': string;
};
export type OPOutputOPT50009MultiItem = {
    '호가시간_21': string;
    '매도호가총잔량_121': string;
    '매수호가총잔량_125': string;
    '순매수잔량_128': string;
};
export type OPOutputOPT50009 = {
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    multi_items: OPOutputOPT50009MultiItem[];
};
export type OPInputOPT50010 = {
    '종목코드_9001': string;
    '시간검색_9002': string;
};
export type OPOutputOPT50010MultiItem = {
    '호가시간_21': string;
    '매도호가수량_61': string;
    '최우선매도호가_27': string;
    '매수호가수량_71': string;
    '최우선매수호가_28': string;
    '호가순잔량_137': string;
    '매도호가총잔량_121': string;
    '매수호가총잔량_125': string;
    '순매수잔량_128': string;
};
export type OPOutputOPT50010 = {
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    multi_items: OPOutputOPT50010MultiItem[];
};
export type OPInputOPT50011 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
    '시간검색_9002': string;
};
export type OPOutputOPT50011MultiItem = {
    '호가시간_21': string;
    '매도호가수량_61': string;
    '최우선매도호가_27': string;
    '매수호가수량_71': string;
    '최우선매수호가_28': string;
    '호가순잔량_137': string;
    '매도호가총잔량_121': string;
    '매수호가총잔량_125': string;
    '순매수잔량_128': string;
};
export type OPOutputOPT50011 = {
    multi_items: OPOutputOPT50011MultiItem[];
};
export type OPInputOPT50012 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50012MultiItem = {
    '현재가_10': string;
    '체결시간_20': string;
};
export type OPOutputOPT50012 = {
    multi_items: OPOutputOPT50012MultiItem[];
};
export type OPInputOPT50013 = {
    '종목코드_9001': string;
    '봉갯수_9045': string;
};
export type OPOutputOPT50013MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
};
export type OPOutputOPT50013 = {
    multi_items: OPOutputOPT50013MultiItem[];
};
export type OPInputOPT50014 = {
    '종목코드_9001': string;
    '봉갯수_9045': string;
};
export type OPOutputOPT50014MultiItem = {
    '구간구분_1080': string;
    '거래량_15': string;
    '비중_1029': string;
};
export type OPOutputOPT50014 = {
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '고가_17': string;
    '저가_18': string;
    '누적거래량_13': string;
    '미결제약정_195': string;
    '종목명_302': string;
    '누적거래대금_14': string;
    multi_items: OPOutputOPT50014MultiItem[];
};
export type OPInputOPT50015 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50015MultiItem = {
    '현재가_10': string;
    '체결시간_22': string;
    '미결제약정_195': string;
    '미결제증감_196': string;
};
export type OPOutputOPT50015 = {
    '현재가s_10': string;
    '대비기호s_25': string;
    '전일대비s_11': string;
    '등락율s_12': string;
    '고가s_17': string;
    '저가s_18': string;
    '누적거래량s_13': string;
    '미결제약정s_195': string;
    '종목명s_302': string;
    multi_items: OPOutputOPT50015MultiItem[];
};
export type OPInputOPT50016 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50016MultiItem = {
    '체결시간_20': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '코스피200_197': string;
    '시장베이시스_183': string;
    '이론가_182': string;
    '괴리율_186': string;
    '거래량_15': string;
    '시가_16': string;
};
export type OPOutputOPT50016 = {
    '전일종가_346': string;
    multi_items: OPOutputOPT50016MultiItem[];
};
export type OPInputOPT50017 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50017MultiItem = {
    '현재가_10': string;
    '체결시간_20': string;
    '거래량_15': string;
    '시장베이시스_183': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '괴리율_186': string;
};
export type OPOutputOPT50017 = {
    multi_items: OPOutputOPT50017MultiItem[];
};
export type OPInputOPT50018 = {
    '시간단위_9007': string;
};
export type OPOutputOPT50018MultiItem = {
    '체결시간_20': string;
    '콜풋RATIO_379': string;
    '코스피200_197': string;
};
export type OPOutputOPT50018 = {
    multi_items: OPOutputOPT50018MultiItem[];
};
export type OPInputOPT50019 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50019 = {
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '내재가치_187': string;
    '시간가치_188': string;
    '이론가_182': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '누적거래량_13': string;
    '거래량전일대비_26': string;
    '누적거래대금_14': string;
    '거래대금증감_29': string;
    '미결제약정_195': string;
    '미결제약정전일대비_181': string;
    '역사적변동성_327': string;
    '표면이자_338': string;
    '배당액지수_361': string;
    '매도호가_41': string;
    '매도수량_61': string;
    '매수호가_51': string;
    '매수수량_71': string;
};
export type OPInputOPT50020 = {
    '만기년월_9100': string;
};
export type OPOutputOPT50020MultiItem = {
    '현재가_10': string;
    '전일대비_11': string;
    '등락율_12': string;
    '대비기호_25': string;
    '시간가치_188': string;
    '내재가치_187': string;
    '내재변동성_189': string;
    '이론가_182': string;
    '괴리율_186': string;
    '미결제약정전일대비_181': string;
    '미결제약정_195': string;
    '누적거래대금_14': string;
    '누적거래량_13': string;
    '매수호가총잔량_125': string;
    '매도호가총잔량_121': string;
    '매수호가수량_71': string;
    '매수호가_51': string;
    '매도호가수량_61': string;
    '매도호가_41': string;
    '기준가_307': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '기준가대비시가등락율_391': string;
    '기준가대비고가등락율_392': string;
    '기준가대비저가등락율_393': string;
    '지수환산_325': string;
    '예상체결가전일종가대비등락율_201': string;
    '예상체결가전일종가대비기호_238': string;
    '예상체결가전일종가대비_200': string;
    '예상체결가_23': string;
    '종목코드_9001': string;
    'ATM구분_326': string;
    '행사가_324': string;
    '대칭구분': string;
    '풋_현재가_10': string;
    '풋_전일대비_11': string;
    '풋_등락율_12': string;
    '풋_대비기호_25': string;
    '풋_시간가치_188': string;
    '풋_내재가치_187': string;
    '풋_내재변동성_189': string;
    '풋_이론가_182': string;
    '풋_괴리율_186': string;
    '풋_미결제약정전일대비_181': string;
    '풋_미결제약정_195': string;
    '풋_누적거래대금_14': string;
    '풋_누적거래량_13': string;
    '풋_매수호가총잔량_125': string;
    '풋_매도호가총잔량_121': string;
    '풋_매수호가수량_71': string;
    '풋_매수호가_51': string;
    '풋_매도호가수량_61': string;
    '풋_매도호가_41': string;
    '풋_기준가_307': string;
    '풋_시가_16': string;
    '풋_고가_17': string;
    '풋_저가_18': string;
    '풋_기준가대비시가등락율_391': string;
    '풋_기준가대비고가등락율_392': string;
    '풋_기준가대비저가등락율_393': string;
    '풋_지수환산_325': string;
    '풋_예상체결가전일종가대비등락율_201': string;
    '풋_예상체결가전일종가대비기호_238': string;
    '풋_예상체결가전일종가대비_200': string;
    '풋_예상체결가_23': string;
    '풋_종목코드_9001': string;
    '풋_ATM구분_326': string;
    '풋_행사가_324': string;
};
export type OPOutputOPT50020 = {
    multi_items: OPOutputOPT50020MultiItem[];
};
export type OPInputOPT50021 = {
    '만기년월_9100': string;
};
export type OPOutputOPT50021MultiItem = {
    '지수환산_325': string;
    'ATM구분_326': string;
    '종목코드_9001': string;
    '행사가_324': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '시가_16': string;
    '기준가대비시가등락율_391': string;
    '고가_17': string;
    '기준가대비고가등락율_392': string;
    '저가_18': string;
    '기준가대비저가등락율_393': string;
    '기준가_307': string;
    '매도호가_41': string;
    '매도호가수량_61': string;
    '매수호가_51': string;
    '매수호가수량_71': string;
    '매도호가총잔량_121': string;
    '매수호가총잔량_125': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '미결제약정_195': string;
    '미결제약정전일대비_181': string;
    '괴리율_186': string;
    '이론가_182': string;
    '내재변동성_189': string;
    '내재가치_187': string;
    '시간가치_188': string;
    '델타_190': string;
    '감마_191': string;
    '세타_193': string;
    '베가_192': string;
    '로_194': string;
};
export type OPOutputOPT50021 = {
    multi_items: OPOutputOPT50021MultiItem[];
};
export type OPInputOPT50022 = {
    '만기년월_9100': string;
};
export type OPOutputOPT50022MultiItem = {
    '지수환산_325': string;
    'ATM구분_326': string;
    '종목코드_9001': string;
    '행사가_324': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '시가_16': string;
    '기준가대비시가등락율_391': string;
    '고가_17': string;
    '기준가대비고가등락율_392': string;
    '저가_18': string;
    '기준가대비저가등락율_393': string;
    '기준가_307': string;
    '매도호가_41': string;
    '매도호가수량_61': string;
    '매수호가_51': string;
    '매수호가수량_71': string;
    '매도호가총잔량_121': string;
    '매수호가총잔량_125': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '미결제약정_195': string;
    '미결제약정전일대비_181': string;
    '괴리율_186': string;
    '이론가_182': string;
    '내재변동성_189': string;
    '내재가치_187': string;
    '시간가치_188': string;
    '델타_190': string;
    '감마_191': string;
    '세타_193': string;
    '베가_192': string;
    '로_194': string;
};
export type OPOutputOPT50022 = {
    multi_items: OPOutputOPT50022MultiItem[];
};
export type OPInputOPT50023 = {
    '종목코드_9001': string;
    '시간구분_9007': string;
};
export type OPOutputOPT50023MultiItem = {
    '일자_22': string;
    '체결시간_20': string;
    '현재가n_10': string;
    '이론가n_182': string;
    '내재변동성n_189': string;
    '델타n_190': string;
    '감마n_191': string;
    '세타n_193': string;
    '베가n_192': string;
    '로n_194': string;
    '시가_16': string;
    '고가n_17': string;
    '저가n_18': string;
    '대비기호n_25': string;
    '전일대비n_11': string;
    '등락율n_12': string;
    '누적거래량n_13': string;
    '미결제약정n_195': string;
};
export type OPOutputOPT50023 = {
    '이론가_182': string;
    '괴리율_186': string;
    '내재변동성_189': string;
    '시장베이시스_183': string;
    '델타_190': string;
    '베가_192': string;
    '감마_191': string;
    '로_194': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '고가_17': string;
    '저가_18': string;
    '종목표준코드_301': string;
    '내재가치_187': string;
    '시간가치_188': string;
    multi_items: OPOutputOPT50023MultiItem[];
};
export type OPInputOPT50024 = {
    '역사적변동성1_9101': string;
    '역사적변동성2_9102': string;
    '역사적변동성3_9103': string;
    '기간_9012': string;
};
export type OPOutputOPT50024MultiItem = {
    '일자_22': string;
    '대표내재변동성_240': string;
    '콜내재변동성_241': string;
    '풋내재변동성_242': string;
    '선물대표내재변동성_243': string;
    '선물콜내재변동성_244': string;
    '선물풋내재변동성_245': string;
    '역사적변동성1_1201': string;
    '역사적변동성2_1202': string;
    '역사적변동성3_1203': string;
    '선물역사적변동성1_1204': string;
    '선물역사적변동성2_1205': string;
    '선물역사적변동성3_1206': string;
    '시작일자_9004': string;
};
export type OPOutputOPT50024 = {
    multi_items: OPOutputOPT50024MultiItem[];
};
export type OPInputOPT50025 = {
    '역사적변동성1_9101': string;
    '역사적변동성2_9102': string;
    '역사적변동성3_9103': string;
    '기간_9012': string;
};
export type OPOutputOPT50025MultiItem = {
    '체결시간_20': string;
    '대표내재변동성_240': string;
    '콜내재변동성_241': string;
    '풋내재변동성_242': string;
    '선물대표내재변동성_243': string;
    '선물콜내재변동성_244': string;
    '선물풋내재변동성_245': string;
    '역사적변동성1_1201': string;
    '역사적변동성2_1202': string;
    '역사적변동성3_1203': string;
    '선물역사적변동성1_1204': string;
    '선물역사적변동성2_1205': string;
    '선물역사적변동성3_1206': string;
};
export type OPOutputOPT50025 = {
    multi_items: OPOutputOPT50025MultiItem[];
};
export type OPInputOPT50026 = {
    '종목코드_9001': string;
    '조회구분_9037': string;
    '매매구분_9204': string;
    '체결구분_9206': string;
    '계좌번호_9201': string;
    '주문번호_9203': string;
};
export type OPOutputOPT50026MultiItem = {
    '주문번호_9203': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '주문구분_905': string;
    '주문가격_901': string;
    '주문수량_900': string;
    '체결가_910': string;
    '체결량_911': string;
    '미체결수량_902': string;
    '주문상태_913': string;
    '원주문번호_904': string;
    '매매구분_906': string;
    '주문체결시간_908': string;
};
export type OPOutputOPT50026 = {
    multi_items: OPOutputOPT50026MultiItem[];
};
export type OPInputOPT50027 = {
    '계좌번호_9201': string;
};
export type OPOutputOPT50027MultiItem = {
    '계좌번호_9201': string;
    '종목코드_9001': string;
    '신용구분_917': string;
    '대출일_916': string;
    '종목명_302': string;
    '현재가_10': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '보유수량_930': string;
    '매입단가_931': string;
    '총매입가_932': string;
    '주문가능수량_933': string;
    '당일매도수량_934': string;
    '당일매도금액_935': string;
    '당일매수수량_936': string;
    '당일매수금액_937': string;
    '당일매매수수료_938': string;
    '당일매매세금_939': string;
    '당일HTS매도수수료_940': string;
    '당일HTS매수수수료_941': string;
    'D+2매수정산금_942': string;
    '당일매도손익_944': string;
    '당일순매수량_945': string;
    '매매구분_946': string;
    '당일총매도손익_950': string;
    '예수금_951': string;
    '최우선매도호가_27': string;
    '최우선매수호가_28': string;
    '결제잔고_8002': string;
    '결제금액_8003': string;
    '전일매도수량_8004': string;
    '전일매수수량_8005': string;
    '전일매도금액_8006': string;
    '전일매수금액_8007': string;
    '전일순매수량_8008': string;
    '손익율_8019': string;
    '신용금액_957': string;
    '신용이자_958': string;
    '만기일_918': string;
    '기준가_307': string;
    '하한가_306': string;
    '상한가_305': string;
    '담보대출수량_959': string;
    '연누적거래대금_397': string;
};
export type OPOutputOPT50027 = {
    multi_items: OPOutputOPT50027MultiItem[];
};
export type OPInputOPT50028 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50028MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50028 = {
    '종목코드_9001': string;
    '마지막틱갯수_3501': string;
    multi_items: OPOutputOPT50028MultiItem[];
};
export type OPInputOPT50029 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50029MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT50029 = {
    multi_items: OPOutputOPT50029MultiItem[];
};
export type OPInputOPT50030 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT50030MultiItem = {
    '현재가_10': string;
    '누적거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '수정주가이벤트_3501': string;
    '전일종가_346': string;
};
export type OPOutputOPT50030 = {
    multi_items: OPOutputOPT50030MultiItem[];
};
export type OPInputOPT50031 = {
    '계좌번호_9201': string;
};
export type OPOutputOPT50031MultiItem = {
    '종목코드_9001': string;
    '잔고구분_8041': string;
    '당일매도손익_944': string;
    '손익_8018': string;
    '손익율_8019': string;
    '매입단가_931': string;
    '보유수량_930': string;
    '주문가능수량_933': string;
    '현재가_10': string;
    '총매입가_932': string;
    '평가금액_8040': string;
    '당일매매수수료_938': string;
    '종목명_302': string;
};
export type OPOutputOPT50031 = {
    multi_items: OPOutputOPT50031MultiItem[];
};
export type OPInputOPT50032 = {
    '계좌번호_9201': string;
    '종목코드_9001': string;
};
export type OPOutputOPT50032MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '체결구분_8042': string;
    '체결량_911': string;
    '매입단가_931': string;
    '체결가_910': string;
    '당일매도손익_944': string;
    '손익율_8019': string;
    '당일매매수수료_938': string;
};
export type OPOutputOPT50032 = {
    multi_items: OPOutputOPT50032MultiItem[];
};
export type OPInputOPT50033 = {
    '종목코드_9001': string;
    '기준일자_9006': string;
};
export type OPOutputOPT50033 = {
    '대표내재변동성_240': string;
    '콜내재변동성_241': string;
    '풋내재변동성_242': string;
    '역사적변동성_402': string;
    '잔존일수_323': string;
    '영업일기준잔존일_403': string;
    '차근달력기준잔존일_404': string;
    '차근영업일기준잔존일_405': string;
    '차차근달력기준잔존일_406': string;
    '차차근영업일기준잔존일_407': string;
    '차차차근달력기준잔존일_408': string;
    '차차차근영업일기준잔존일_409': string;
    '선물대표내재변동성_243': string;
    '선물콜내재변동성_244': string;
    '선물풋내재변동성_245': string;
};
export type OPInputOPT50034 = {
    '종목코드_9001': string;
    '기간_9012': string;
};
export type OPOutputOPT50034MultiItem = {
    '현재가_10': string;
    '체결시간_20': string;
};
export type OPOutputOPT50034 = {
    multi_items: OPOutputOPT50034MultiItem[];
};
export type OPInputOPT50035 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
    '기간_9305': string;
    '차트구분_9303': string;
};
export type OPOutputOPT50035MultiItem = {
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '누적거래_13': string;
    '거래량_15': string;
};
export type OPOutputOPT50035 = {
    multi_items: OPOutputOPT50035MultiItem[];
};
export type OPInputOPT50036 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
    '기간_9305': string;
    '차트구분_9303': string;
};
export type OPOutputOPT50036MultiItem = {
    '일자_22': string;
    '전일종가_346': string;
    '선물역사적변동성_1204': string;
};
export type OPOutputOPT50036 = {
    multi_items: OPOutputOPT50036MultiItem[];
};
export type OPInputOPT50037 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT50037MultiItem = {
    '일자_22': string;
    '코스피200_197': string;
};
export type OPOutputOPT50037 = {
    multi_items: OPOutputOPT50037MultiItem[];
};
export type OPInputOPT50038 = {
    '일자구분_9048': string;
    '일자_22': string;
    '투자자구분_9073': string;
    '수량금액구분_9036': string;
};
export type OPOutputOPT50038MultiItem = {
    '평가손익_13000': string;
    '매입단가_931': string;
    '투자자별순매수수량_210': string;
    '미결제약정_195': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '현재가_10': string;
    '종목코드_9001': string;
    '행사가_324': string;
    '지수환산_325': string;
    'ATM구분_326': string;
    '대칭구분': string;
    '풋_종목코드_9001': string;
    '풋_현재가_10': string;
    '풋_전일대비_11': string;
    '풋_대비기호_25': string;
    '풋_미결제약정_195': string;
    '풋_투자자별순매수수량_210': string;
    '풋_매입단가_931': string;
    '풋_평가손익_13000': string;
};
export type OPOutputOPT50038 = {
    multi_items: OPOutputOPT50038MultiItem[];
};
export type OPInputOPT50039 = {
    '일자구분_9048': string;
    '일자_9004': string;
    '수량금액구분_9036': string;
    '단위구분_9040': string;
};
export type OPOutputOPT50039MultiItem = {
    '기간중주가등락_1111': string;
    '기타법인_1107': string;
    '연기금등_1106': string;
    '기타금융_1105': string;
    '은행_1104': string;
    '투신_1103': string;
    '보험_1102': string;
    '금융투자_1101': string;
    '외국인_1109': string;
    '개인_1108': string;
    '누적거래량_13': string;
    '미결제약정전일대비_181': string;
    '미결제약정_195': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '현재가_10': string;
    '종목코드_9001': string;
    '행사가_324': string;
    '지수환산_325': string;
    '대칭구분': string;
    '풋_종목코드_9001': string;
    '풋_현재가_10': string;
    '풋_등락율_12': string;
    '풋_대비기호_25': string;
    '풋_전일대비_11': string;
    '풋_미결제약정_195': string;
    '풋_미결제약정전일대비_181': string;
    '풋_누적거래량_13': string;
    '풋_ATM구분_326': string;
    '풋_개인_1108': string;
    '풋_외국인_1109': string;
    '풋_금융투자_1101': string;
    '풋_보험_1102': string;
    '풋_투신_1103': string;
    '풋_은행_1104': string;
    '풋_기타금융_1105': string;
    '풋_연기금등_1106': string;
    '풋_기타법인_1107': string;
    '풋_기간중주가등락_1111': string;
};
export type OPOutputOPT50039 = {
    multi_items: OPOutputOPT50039MultiItem[];
};
export type OPInputOPT50040 = {
    '종목코드_9001': string;
};
export type OPOutputOPT50040MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '기준가_307': string;
    '체결량_15': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '시초미결제약정수량_246': string;
    '최고미결제약정수량_247': string;
    '최저미결제약정수량_248': string;
    '미결제약정_195': string;
    '전일미결제약정_269': string;
    '이론가_182': string;
    '내재변동성_189': string;
    '델타_190': string;
    '감마_191': string;
    '상한가_305': string;
    '하한가_306': string;
    '시장베이시스_183': string;
    '괴리율_186': string;
};
export type OPOutputOPT50040 = {
    multi_items: OPOutputOPT50040MultiItem[];
};
export type OPInputOPT50043 = {
    '거래대금구분_9091': string;
};
export type OPOutputOPT50043MultiItem = {
    '종목코드_9001': string;
    '종목표준코드_301': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
};
export type OPOutputOPT50043 = {
    multi_items: OPOutputOPT50043MultiItem[];
};
export type OPInputOPT50044 = {
    '근월물구분_9100': string;
    '입력구분_9008': string;
};
export type OPOutputOPT50044MultiItem = {
    '종목코드_9001': string;
    '종목표준코드_301': string;
    '종목명_302': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '누적거래대금_14': string;
    '미결제약정_195': string;
    '미결제약정전일대비_181': string;
    '이론가_182': string;
    '괴리율_186': string;
    '시장베이시스_183': string;
    '최우선매수호가_28': string;
    '최우선매도호가_27': string;
    '코스피200_197': string;
};
export type OPOutputOPT50044 = {
    '거래량합계_1101': string;
    '거래대금합계_1102': string;
    multi_items: OPOutputOPT50044MultiItem[];
};
export type OPInputOPT50062 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50062MultiItem = {
    '현재가_10': string;
    '체결시간_20': string;
    '미결제약정_195': string;
    '미결제증감_196': string;
};
export type OPOutputOPT50062 = {
    '현재가s_10': string;
    '대비기호s_25': string;
    '전일대비s_11': string;
    '등락율s_12': string;
    '고가s_17': string;
    '저가s_18': string;
    '누적거래량s_13': string;
    '미결제약정s_195': string;
    '종목명s_302': string;
    multi_items: OPOutputOPT50062MultiItem[];
};
export type OPInputOPT50063 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50063MultiItem = {
    '현재가_10': string;
    '체결시간_22': string;
    '미결제약정_195': string;
    '미결제증감_196': string;
};
export type OPOutputOPT50063 = {
    '현재가s_10': string;
    '대비기호s_25': string;
    '전일대비s_11': string;
    '등락율s_12': string;
    '고가s_17': string;
    '저가s_18': string;
    '누적거래량s_13': string;
    '미결제약정s_195': string;
    '종목명s_302': string;
    multi_items: OPOutputOPT50063MultiItem[];
};
export type OPInputOPT50064 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50064MultiItem = {
    '현재가_10': string;
    '체결시간_20': string;
    '미결제약정_195': string;
    '미결제증감_196': string;
};
export type OPOutputOPT50064 = {
    '현재가s_10': string;
    '대비기호s_25': string;
    '전일대비s_11': string;
    '등락율s_12': string;
    '고가s_17': string;
    '저가s_18': string;
    '누적거래량s_13': string;
    '미결제약정s_195': string;
    '종목명s_302': string;
    multi_items: OPOutputOPT50064MultiItem[];
};
export type OPInputOPT50065 = {
    '만기년월_9100': string;
};
export type OPOutputOPT50065MultiItem = {
    '종목코드_9001': string;
    'ATM구분_326': string;
    '행사가_324': string;
};
export type OPOutputOPT50065 = {
    multi_items: OPOutputOPT50065MultiItem[];
};
export type OPInputOPT50066 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50066MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50066 = {
    '종목코드_9001': string;
    '마지막틱갯수_3501': string;
    multi_items: OPOutputOPT50066MultiItem[];
};
export type OPInputOPT50067 = {
    '종목코드_9001': string;
    '시간단위_9007': string;
};
export type OPOutputOPT50067MultiItem = {
    '현재가_10': string;
    '거래량_15': string;
    '체결시간_20': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50067 = {
    multi_items: OPOutputOPT50067MultiItem[];
};
export type OPInputOPT50068 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT50068MultiItem = {
    '현재가_10': string;
    '누적거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50068 = {
    multi_items: OPOutputOPT50068MultiItem[];
};
export type OPInputOPT50071 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT50071MultiItem = {
    '현재가_10': string;
    '누적거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50071 = {
    multi_items: OPOutputOPT50071MultiItem[];
};
export type OPInputOPT50072 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT50072MultiItem = {
    '현재가_10': string;
    '누적거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50072 = {
    multi_items: OPOutputOPT50072MultiItem[];
};
export type OPInputOPT50073 = {
    '종목코드_9001': string;
    '기준일자_9004': string;
};
export type OPOutputOPT50073MultiItem = {
    '현재가_10': string;
    '누적거래량_13': string;
    '일자_22': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '전일종가_346': string;
};
export type OPOutputOPT50073 = {
    multi_items: OPOutputOPT50073MultiItem[];
};
export type OPInputOPT90001 = {
    '검색구분_9039': string;
    '종목코드_9001': string;
    '날짜구분_9012': string;
    '테마명_352': string;
    '등락수익구분_9013': string;
};
export type OPOutputOPT90001MultiItem = {
    '종목코드_9001': string;
    '테마명_352': string;
    '종목수_1051': string;
    '등락기호_25': string;
    '등락율_12': string;
    '상승종목수_1052': string;
    '하락종목수_1054': string;
    '기간수익률_353': string;
    '주요종목_1079': string;
};
export type OPOutputOPT90001 = {
    multi_items: OPOutputOPT90001MultiItem[];
};
export type OPInputOPT90002 = {
    '날짜구분_9012': string;
    '종목코드_9001': string;
};
export type OPOutputOPT90002MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '등락기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '매도호가_27': string;
    '매도잔량_61': string;
    '매수호가_28': string;
    '매수잔량_71': string;
    '기간수익률n_353': string;
};
export type OPOutputOPT90002 = {
    '등락률_12': string;
    '기간수익률_353': string;
    multi_items: OPOutputOPT90002MultiItem[];
};
export type OPInputOPT90003 = {
    '매매상위구분_9035': string;
    '금액수량구분_9036': string;
    '시장구분_9001': string;
};
export type OPOutputOPT90003MultiItem = {
    '순위_401': string;
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '등락기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '누적거래량_13': string;
    '프로그램매도금액_204': string;
    '프로그램매수금액_208': string;
    '프로그램순매수금액_212': string;
};
export type OPOutputOPT90003 = {
    multi_items: OPOutputOPT90003MultiItem[];
};
export type OPInputOPT90004 = {
    '일자_9004': string;
    '시장구분_9001': string;
};
export type OPOutputOPT90004MultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '등락기호_25': string;
    '전일대비_11': string;
    '매수체결수량_206': string;
    '매수체결금액_208': string;
    '매도체결수량_202': string;
    '매도체결금액_204': string;
    '순매수대금_212': string;
    '전체거래비율_1077': string;
};
export type OPOutputOPT90004 = {
    '합계1_1101': string;
    '합계2_1102': string;
    '합계3_1103': string;
    '합계4_1104': string;
    '합계5_1105': string;
    '합계6_1106': string;
    multi_items: OPOutputOPT90004MultiItem[];
};
export type OPInputOPT90005 = {
    '날짜_9004': string;
    '시간구분_9038': string;
    '금액수량구분_9036': string;
    '시장구분_9001': string;
    '분틱구분_9007': string;
};
export type OPOutputOPT90005MultiItem = {
    '체결시간_20': string;
    '차익거래매도_505': string;
    '차익거래매수_514': string;
    '차익거래순매수_522': string;
    '비차익거래매도_529': string;
    '비차익거래매수_538': string;
    '비차익거래순매수_546': string;
    '차익거래매도수량_502': string;
    '차익거래매수수량_511': string;
    '차익거래순매수수량_523': string;
    '비차익거래매도수량_526': string;
    '비차익거래매수수량_535': string;
    '비차익거래순매수수량_547': string;
    '전체매도_204': string;
    '전체매수_208': string;
    '전체순매수_212': string;
    'KOSPI200_197': string;
    'BASIS_183': string;
};
export type OPOutputOPT90005 = {
    multi_items: OPOutputOPT90005MultiItem[];
};
export type OPInputOPT90006 = {
    '날짜_9004': string;
};
export type OPOutputOPT90006MultiItem = {
    '일자_22': string;
    '매수차익거래수량_511': string;
    '매수차익거래금액_514': string;
    '매수차익거래증감액_553': string;
    '매도차익거래수량_502': string;
    '매도차익거래금액_505': string;
    '매도차익거래증감액_552': string;
};
export type OPOutputOPT90006 = {
    multi_items: OPOutputOPT90006MultiItem[];
};
export type OPInputOPT90007 = {
    '날짜_9004': string;
    '금액수량구분_9036': string;
    '시장구분_9001': string;
};
export type OPOutputOPT90007MultiItem = {
    '일자_22': string;
    'KOSPI200_197': string;
    'BASIS_183': string;
    '차익거래당일_522': string;
    '차익거래누적_524': string;
    '비차익거래당일_546': string;
    '비차익거래누적_548': string;
    '전체당일_764': string;
    '전체누적_765': string;
};
export type OPOutputOPT90007 = {
    multi_items: OPOutputOPT90007MultiItem[];
};
export type OPInputOPT90008 = {
    '시간일자구분_9038': string;
    '금액수량구분_9036': string;
    '종목코드_9001': string;
    '날짜_9004': string;
};
export type OPOutputOPT90008MultiItem = {
    '시간_20': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '프로그램매도금액_204': string;
    '프로그램매수금액_208': string;
    '프로그램순매수금액_212': string;
    '프로그램순매수금액증감_213': string;
    '프로그램매도수량_202': string;
    '프로그램매수수량_206': string;
    '프로그램순매수수량_210': string;
    '프로그램순매수수량증감_211': string;
    '기준가시간_1041': string;
    '대차거래상환주수합_1042': string;
    '잔고수주합_1043': string;
};
export type OPOutputOPT90008 = {
    multi_items: OPOutputOPT90008MultiItem[];
};
export type OPInputOPT90009 = {
    '시장구분_9008': string;
    '금액수량구분_9036': string;
    '조회일자구분_9040': string;
    '날짜_9004': string;
};
export type OPOutputOPT90009MultiItem = {
    '외인순매도종목코드_9001': string;
    '외인순매도종목명_302': string;
    '외인순매도금액_212': string;
    '외인순매도수량_210': string;
    '대칭구분': string;
    '외인순매수종목코드_9001': string;
    '외인순매수종목명_302': string;
    '외인순매수금액_212': string;
    '외인순매수수량_210': string;
    '기관순매도종목코드_9001': string;
    '기관순매도종목명_302': string;
    '기관순매도금액_212': string;
    '기관순매도수량_210': string;
    '기관순매수종목코드_9001': string;
    '기관순매수종목명_302': string;
    '기관순매수금액_212': string;
    '기관순매수수량_210': string;
};
export type OPOutputOPT90009 = {
    multi_items: OPOutputOPT90009MultiItem[];
};
export type OPInputOPT90010 = {
    '일자_9004': string;
    '금액수량구분_9036': string;
};
export type OPOutputOPT90010MultiItem = {
    '종목코드1_9001': string;
    '차익매도위탁금액_503': string;
    '차익매수위탁금액_512': string;
    '차익매도위탁선물금액_1121': string;
    '차익매수위탁선물금액_1123': string;
    '차익매도위탁CALL금액_1125': string;
    '차익매수위탁CALL금액_1127': string;
    '차익매도위탁PUT금액_1129': string;
    '차익매수위탁PUT금액_1131': string;
    '차익매도자기금액_504': string;
    '차익매수자기금액_513': string;
    '차익매도자기선물금액_1122': string;
    '차익매수자기선물금액_1124': string;
    '차익매도자기CALL금액_1126': string;
    '차익매수자기CALL금액_1128': string;
    '차익매도자기PUT금액_1130': string;
    '차익매수자기PUT금액_1132': string;
    '차익매도금액_505': string;
    '차익매수금액_514': string;
    '차익매도선물금액_1179': string;
    '차익매수선물금액_1180': string;
    '차익매도CALL금액_1181': string;
    '차익매수CALL금액_1182': string;
    '차익매도PUT금액_1183': string;
    '차익매수PUT금액_1184': string;
    '종목코드2_9001': string;
    '차익매도위탁금액2_503': string;
    '차익매수위탁금액2_512': string;
    '차익매도위탁선물금액2_1121': string;
    '차익매수위탁선물금액2_1123': string;
    '차익매도위탁CALL금액2_1125': string;
    '차익매수위탁CALL금액2_1127': string;
    '차익매도위탁PUT금액2_1129': string;
    '차익매수위탁PUT금액2_1131': string;
    '차익매도자기금액2_504': string;
    '차익매수자기금액2_513': string;
    '차익매도자기선물금액2_1122': string;
    '차익매수자기선물금액2_1124': string;
    '차익매도자기CALL금액2_1126': string;
    '차익매수자기CALL금액2_1128': string;
    '차익매도자기PUT금액2_1130': string;
    '차익매수자기PUT금액2_1132': string;
    '차익매도금액2_505': string;
    '차익매수금액2_514': string;
    '차익매도선물금액2_1179': string;
    '차익매수선물금액2_1180': string;
    '차익매도CALL금액2_1181': string;
    '차익매수CALL금액2_1182': string;
    '차익매도PUT금액2_1183': string;
    '차익매수PUT금액2_1184': string;
};
export type OPOutputOPT90010 = {
    '기준일자_9004': string;
    multi_items: OPOutputOPT90010MultiItem[];
};
export type OPInputOPT90011 = {
    '일자_9004': string;
    '금액수량구분_9036': string;
};
export type OPOutputOPT90011MultiItem = {
    '종목코드1_9001': string;
    '차익매도위탁금액_503': string;
    '차익매수위탁금액_512': string;
    '차익매도위탁선물금액_1121': string;
    '차익매수위탁선물금액_1123': string;
    '차익매도위탁CALL금액_1125': string;
    '차익매수위탁CALL금액_1127': string;
    '차익매도위탁PUT금액_1129': string;
    '차익매수위탁PUT금액_1131': string;
    '차익매도자기금액_504': string;
    '차익매수자기금액_513': string;
    '차익매도자기선물금액_1122': string;
    '차익매수자기선물금액_1124': string;
    '차익매도자기CALL금액_1126': string;
    '차익매수자기CALL금액_1128': string;
    '차익매도자기PUT금액_1130': string;
    '차익매수자기PUT금액_1132': string;
    '차익매도금액_505': string;
    '차익매수금액_514': string;
    '차익매도선물금액_1179': string;
    '차익매수선물금액_1180': string;
    '차익매도CALL금액_1181': string;
    '차익매수CALL금액_1182': string;
    '차익매도PUT금액_1183': string;
    '차익매수PUT금액_1184': string;
    '종목코드2_9001': string;
    '차익매도위탁금액2_503': string;
    '차익매수위탁금액2_512': string;
    '차익매도위탁선물금액2_1121': string;
    '차익매수위탁선물금액2_1123': string;
    '차익매도위탁CALL금액2_1125': string;
    '차익매수위탁CALL금액2_1127': string;
    '차익매도위탁PUT금액2_1129': string;
    '차익매수위탁PUT금액2_1131': string;
    '차익매도자기금액2_504': string;
    '차익매수자기금액2_513': string;
    '차익매도자기선물금액2_1122': string;
    '차익매수자기선물금액2_1124': string;
    '차익매도자기CALL금액2_1126': string;
    '차익매수자기CALL금액2_1128': string;
    '차익매도자기PUT금액2_1130': string;
    '차익매수자기PUT금액2_1132': string;
    '차익매도금액2_505': string;
    '차익매수금액2_514': string;
    '차익매도선물금액2_1179': string;
    '차익매수선물금액2_1180': string;
    '차익매도CALL금액2_1181': string;
    '차익매수CALL금액2_1182': string;
    '차익매도PUT금액2_1183': string;
    '차익매수PUT금액2_1184': string;
};
export type OPOutputOPT90011 = {
    '기준일자_9004': string;
    multi_items: OPOutputOPT90011MultiItem[];
};
export type OPInputOPT90012 = {
    '일자_9004': string;
    '시장구분_9008': string;
};
export type OPOutputOPT90012MultiItem = {
    '종목명_302': string;
    '종목코드_389': string;
    '대차거래체결주수_312': string;
    '대차거래상환주수_470': string;
    '잔고주수_471': string;
    '잔고금액_472': string;
};
export type OPOutputOPT90012 = {
    multi_items: OPOutputOPT90012MultiItem[];
};
export type OPInputOPT90013 = {
    '시간일자구분_9038': string;
    '금액수량구분_9036': string;
    '종목코드_9001': string;
    '날짜_9004': string;
};
export type OPOutputOPT90013MultiItem = {
    '일자_22': string;
    '현재가_10': string;
    '대비기호_25': string;
    '전일대비_11': string;
    '등락율_12': string;
    '거래량_13': string;
    '프로그램매도금액_204': string;
    '프로그램매수금액_208': string;
    '프로그램순매수금액_212': string;
    '프로그램순매수금액증감_928': string;
    '프로그램매도수량_202': string;
    '프로그램매수수량_206': string;
    '프로그램순매수수량_210': string;
    '프로그램순매수수량증감_929': string;
    '기준가시간_1041': string;
    '대차거래상환주수합_1042': string;
    '잔고수주합_1043': string;
};
export type OPOutputOPT90013 = {
    multi_items: OPOutputOPT90013MultiItem[];
};
export type OPInputOPT99999 = {
    '시작일자_9004': string;
    '종료일자_9005': string;
    '시장구분_9008': string;
};
export type OPOutputOPT99999MultiItem = {
    '일자1_1041': string;
    '일자2_1042': string;
    '일자3_1043': string;
    '일자4_1044': string;
    '일자5_1045': string;
    '일자6_1046': string;
    '일자7_1047': string;
    '일자8_1048': string;
};
export type OPOutputOPT99999 = {
    multi_items: OPOutputOPT99999MultiItem[];
};
export type OPInputOPTFOFID = {
    '종목코드_9001': string;
};
export type OPOutputOPTFOFID = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '전일대비_11': string;
    '매도호가2_42': string;
    '매도호가1_41': string;
    '매수호가1_51': string;
    '매수호가2_52': string;
    '거래량_13': string;
    '거래량전일대비_26': string;
    '누적거래대금_14': string;
    '미결제약정_195': string;
    '미결제약정전일대비_181': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '이론가_182': string;
    '괴리율_186': string;
    '시장베이시스_183': string;
    '이론베이시스_184': string;
    '행사가_324': string;
    '지수환산_325': string;
    '대비기호_25': string;
    '등락율_12': string;
    '매수수량_71': string;
    '매수호가총건수_127': string;
    '매도호가총건수_123': string;
    '기준가_307': string;
    '잔존일수_323': string;
    '영업일기준잔존일_403': string;
};
export type OPInputOPTKWFID = {
    '종목코드_9001': string;
};
export type OPOutputOPTKWFIDMultiItem = {
    '종목코드_9001': string;
    '종목명_302': string;
    '현재가_10': string;
    '기준가_307': string;
    '전일대비_11': string;
    '전일대비기호_25': string;
    '등락율_12': string;
    '거래량_13': string;
    '거래대금_14': string;
    '체결량_15': string;
    '체결강도_228': string;
    '전일거래량대비_30': string;
    '매도호가_27': string;
    '매수호가_28': string;
    '매도1차호가_41': string;
    '매도2차호가_42': string;
    '매도3차호가_43': string;
    '매도4차호가_44': string;
    '매도5차호가_45': string;
    '매수1차호가_51': string;
    '매수2차호가_52': string;
    '매수3차호가_53': string;
    '매수4차호가_54': string;
    '매수5차호가_55': string;
    '상한가_305': string;
    '하한가_306': string;
    '시가_16': string;
    '고가_17': string;
    '저가_18': string;
    '종가_10': string;
    '체결시간_20': string;
    '예상체결가_23': string;
    '예상체결량_24': string;
    '자본금_309': string;
    '액면가_310': string;
    '시가총액_311': string;
    '주식수_312': string;
    '호가시간_21': string;
    '일자_22': string;
    '우선매도잔량_61': string;
    '우선매수잔량_71': string;
    '우선매도건수_101': string;
    '우선매수건수_111': string;
    '총매도잔량_121': string;
    '총매수잔량_125': string;
    '총매도건수_123': string;
    '총매수건수_127': string;
    '패리티_666': string;
    '기어링_667': string;
    '손익분기_668': string;
    '자본지지_669': string;
    'ELW행사가_425': string;
    '전환비율_431': string;
    'ELW만기일_372': string;
    '미결제약정_195': string;
    '미결제전일대비_181': string;
    '이론가_182': string;
    '내재변동성_189': string;
    '델타_190': string;
    '감마_191': string;
    '쎄타_193': string;
    '베가_192': string;
    '로_194': string;
};
export type OPOutputOPTKWFID = {
    multi_items: OPOutputOPTKWFIDMultiItem[];
};
export type OPInputOPTKWINV = {
    '종목코드_9001': string;
};
export type OPOutputOPTKWINVMultiItem = {
    '종목명_302': string;
    '매도수량_202': string;
    '매수수량_206': string;
    '순매수수량_210': string;
    '매도금액_204': string;
    '매수금액_208': string;
    '순매수금액_212': string;
};
export type OPOutputOPTKWINV = {
    multi_items: OPOutputOPTKWINVMultiItem[];
};
export type OPInputOPTKWPRO = {
    '종목코드_9001': string;
};
export type OPOutputOPTKWPROMultiItem = {
    '차익매도량_502': string;
    '차익매도대금_505': string;
    '차익매도비율_508': string;
    '차익매수량_511': string;
    '차익매수대금_514': string;
    '차익매수비율_517': string;
    '차익순매수금액_522': string;
    '비차익매도량_526': string;
    '비차익매도대금_529': string;
    '비차익매도비율_532': string;
    '비차익매수량_535': string;
    '비차익매수대금_538': string;
    '비차익매수비율_541': string;
    '비차익순매수금액_546': string;
    '합계매도량_202': string;
    '합계매도대금_204': string;
    '합계매수량_206': string;
    '합계매수대금_208': string;
    '합계순매수_212': string;
};
export type OPOutputOPTKWPRO = {
    multi_items: OPOutputOPTKWPROMultiItem[];
};
export type OPInputOPW00001 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '조회구분': string;
};
export type OPOutputOPW00001MultiItem = {
    '통화코드': string;
    '외화예수금': string;
    '원화대용평가금': string;
    '해외주식증거금': string;
    '출금가능금액(예수금)': string;
    '주문가능금액(예수금)': string;
    '외화미수(합계)': string;
    '외화현금미수금': string;
    '연체료': string;
    'd+1외화예수금': string;
    'd+2외화예수금': string;
    'd+3외화예수금': string;
    'd+4외화예수금': string;
};
export type OPOutputOPW00001 = {
    '예수금': string;
    '주식증거금현금': string;
    '수익증권증거금현금': string;
    '익일수익증권매도정산대금': string;
    '해외주식원화대용설정금': string;
    '신용보증금현금': string;
    '신용담보금현금': string;
    '추가담보금현금': string;
    '기타증거금': string;
    '미수확보금': string;
    '공매도대금': string;
    '신용설정평가금': string;
    '수표입금액': string;
    '기타수표입금액': string;
    '신용담보재사용': string;
    '코넥스기본예탁금': string;
    'ELW예탁평가금': string;
    '신용대주권리예정금액': string;
    '생계형가입금액': string;
    '생계형입금가능금액': string;
    '대용금평가금액(합계)': string;
    '잔고대용평가금액': string;
    '위탁대용잔고평가금액': string;
    '수익증권대용평가금액': string;
    '위탁증거금대용': string;
    '신용보증금대용': string;
    '신용담보금대용': string;
    '추가담보금대용': string;
    '권리대용금': string;
    '출금가능금액': string;
    '랩출금가능금액': string;
    '주문가능금액': string;
    '수익증권매수가능금액': string;
    '20%종목주문가능금액': string;
    '30%종목주문가능금액': string;
    '40%종목주문가능금액': string;
    '100%종목주문가능금액': string;
    '현금미수금': string;
    '현금미수연체료': string;
    '현금미수금합계': string;
    '신용이자미납': string;
    '신용이자미납연체료': string;
    '신용이자미납합계': string;
    '기타대여금': string;
    '기타대여금연체료': string;
    '기타대여금합계': string;
    '미상환융자금': string;
    '융자금합계': string;
    '대주금합계': string;
    '신용담보비율': string;
    '중도이용료': string;
    '최소주문가능금액': string;
    '대출총평가금액': string;
    '예탁담보대출잔고': string;
    '매도담보대출잔고': string;
    'd+1추정예수금': string;
    'd+1매도매수정산금': string;
    'd+1매수정산금': string;
    'd+1미수변제소요금': string;
    'd+1매도정산금': string;
    'd+1출금가능금액': string;
    'd+2추정예수금': string;
    'd+2매도매수정산금': string;
    'd+2매수정산금': string;
    'd+2미수변제소요금': string;
    'd+2매도정산금': string;
    'd+2출금가능금액': string;
    '출력건수': string;
    multi_items: OPOutputOPW00001MultiItem[];
};
export type OPInputOPW00002 = {
    '계좌번호': string;
    '비밀번호': string;
    '시작조회기간': string;
    '종료조회기간': string;
};
export type OPOutputOPW00002MultiItem = {
    '일자': string;
    '예수금': string;
    '담보대출금': string;
    '신용융자금': string;
    '대주담보금': string;
    '대용금': string;
    '추정예탁자산': string;
    '추정예탁자산수익증권제외': string;
};
export type OPOutputOPW00002 = {
    '출력건수': string;
    multi_items: OPOutputOPW00002MultiItem[];
};
export type OPInputOPW00003 = {
    '계좌번호': string;
    '비밀번호': string;
    '상장폐지조회구분': string;
};
export type OPOutputOPW00003 = {
    '추정예탁자산': string;
};
export type OPInputOPW00004 = {
    '계좌번호': string;
    '비밀번호': string;
    '상장폐지조회구분': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW00004MultiItem = {
    '종목코드': string;
    '종목명': string;
    '보유수량': string;
    '평균단가': string;
    '현재가': string;
    '평가금액': string;
    '손익금액': string;
    '손익율': string;
    '대출일': string;
    '매입금액': string;
    '결제잔고': string;
    '전일매수수량': string;
    '전일매도수량': string;
    '금일매수수량': string;
    '금일매도수량': string;
};
export type OPOutputOPW00004 = {
    '계좌명': string;
    '지점명': string;
    '예수금': string;
    'D+2추정예수금': string;
    '유가잔고평가액': string;
    '예탁자산평가액': string;
    '총매입금액': string;
    '추정예탁자산': string;
    '매도담보대출금': string;
    '당일투자원금': string;
    '당월투자원금': string;
    '누적투자원금': string;
    '당일투자손익': string;
    '당월투자손익': string;
    '누적투자손익': string;
    '당일손익율': string;
    '당월손익율': string;
    '누적손익율': string;
    '출력건수': string;
    multi_items: OPOutputOPW00004MultiItem[];
};
export type OPInputOPW00005 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW00005MultiItem = {
    '신용구분': string;
    '대출일': string;
    '만기일': string;
    '종목번호': string;
    '종목명': string;
    '결제잔고': string;
    '현재잔고': string;
    '현재가': string;
    '매입단가': string;
    '매입금액': string;
    '평가금액': string;
    '평가손익': string;
    '손익률': string;
};
export type OPOutputOPW00005 = {
    '예수금': string;
    '예수금D+1': string;
    '예수금D+2': string;
    '출금가능금액': string;
    '미수확보금': string;
    '대용금': string;
    '권리대용금': string;
    '주문가능현금': string;
    '현금미수금': string;
    '신용이자미납금': string;
    '기타대여금': string;
    '미상환융자금': string;
    '증거금현금': string;
    '증거금대용': string;
    '주식매수총액': string;
    '평가금액합계': string;
    '총손익합계': string;
    '총손익률': string;
    '총재매수가능금액': string;
    '20주문가능금액': string;
    '30주문가능금액': string;
    '40주문가능금액': string;
    '50주문가능금액': string;
    '60주문가능금액': string;
    '100주문가능금액': string;
    '신용융자합계': string;
    '신용융자대주합계': string;
    '신용담보비율': string;
    '예탁담보대출금액': string;
    '매도담보대출금액': string;
    '조회건수': string;
    multi_items: OPOutputOPW00005MultiItem[];
};
export type OPInputOPW00006 = {
    '일자': string;
    '지점코드': string;
    '시작주문번호': string;
};
export type OPOutputOPW00006MultiItem = {
    '주문번호': string;
    '원주문번호': string;
    '모주문번호': string;
    '계좌번호': string;
    '계좌명': string;
    '종목코드': string;
    '정정구분': string;
    '매도수구분': string;
    '주문구분': string;
    '통신주문구분': string;
    '주문수량': string;
    '주문지수': string;
    '주문잔량': string;
    '체결수량': string;
    '체결지수': string;
    '접수여부': string;
    '체결번호': string;
};
export type OPOutputOPW00006 = {
    '출력건수': string;
    multi_items: OPOutputOPW00006MultiItem[];
};
export type OPInputOPW00007 = {
    '주문일자': string;
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '조회구분': string;
    '주식채권구분': string;
    '매도수구분': string;
    '종목코드': string;
    '시작주문번호': string;
};
export type OPOutputOPW00007MultiItem = {
    '주문번호': string;
    '종목번호': string;
    '매매구분': string;
    '신용구분': string;
    '주문수량': string;
    '주문단가': string;
    '확인수량': string;
    '접수구분': string;
    '반대여부': string;
    '주문시간': string;
    '원주문': string;
    '종목명': string;
    '주문구분': string;
    '대출일': string;
    '체결수량': string;
    '체결단가': string;
    '주문잔량': string;
    '통신구분': string;
    '정정취소': string;
    '확인시간': string;
};
export type OPOutputOPW00007 = {
    '출력건수': string;
    multi_items: OPOutputOPW00007MultiItem[];
};
export type OPInputOPW00008 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '시작결제번호': string;
};
export type OPOutputOPW00008MultiItem = {
    '일련번호': string;
    '종목번호': string;
    '대출일': string;
    '수량': string;
    '약정금액': string;
    '수수료': string;
    '소득세': string;
    '농특세': string;
    '종목명': string;
    '매도수구분': string;
    '단가': string;
    '정산금액': string;
    '거래세': string;
    '주민세': string;
    '신용구분': string;
};
export type OPOutputOPW00008 = {
    '매매일자': string;
    '결제일자': string;
    '매도정산합': string;
    '매수정산합': string;
    '조회건수': string;
    multi_items: OPOutputOPW00008MultiItem[];
};
export type OPInputOPW00009 = {
    '주문일자': string;
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '주식채권구분': string;
    '시장구분': string;
    '매도수구분': string;
    '조회구분': string;
    '종목코드': string;
    '시작주문번호': string;
};
export type OPOutputOPW00009MultiItem = {
    '주식채권구분': string;
    '주문번호': string;
    '종목번호': string;
    '매매구분': string;
    '주문유형구분': string;
    '주문수량': string;
    '주문단가': string;
    '확인수량': string;
    '예약반대': string;
    '체결번호': string;
    '접수구분': string;
    '원주문번호': string;
    '종목명': string;
    '결제구분': string;
    '신용거래구분': string;
    '체결수량': string;
    '체결단가': string;
    '통신구분': string;
    '정정취소구분': string;
    '체결시간': string;
};
export type OPOutputOPW00009 = {
    '매도약정금액': string;
    '매수약정금액': string;
    '약정금액': string;
    '조회건수': string;
    multi_items: OPOutputOPW00009MultiItem[];
};
export type OPInputOPW00010 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '입출금액': string;
    '종목번호': string;
    '매매구분': string;
    '매매수량': string;
    '매수가격': string;
    '예상매수단가': string;
};
export type OPOutputOPW00010 = {
    '증거금20주문가능금액': string;
    '증거금20주문가능수량': string;
    '증거금30주문가능금액': string;
    '증거금30주문가능수량': string;
    '증거금40주문가능금액': string;
    '증거금40주문가능수량': string;
    '증거금50주문가능금액': string;
    '증거금50주문가능수량': string;
    '증거금60주문가능금액': string;
    '증거금60주문가능수량': string;
    '증거금감면60주문가능금': string;
    '증거금감면60주문가능수': string;
    '증거금100주문가능금액': string;
    '증거금100주문가능수량': string;
    '전일재사용가능금액': string;
    '금일재사용가능금액': string;
    '예수금': string;
    '대용금': string;
    '미수금': string;
    '주문가능대용': string;
    '주문가능현금': string;
    '인출가능금액': string;
    '익일인출가능금액': string;
    '매입금액': string;
    '수수료': string;
    '매입정산금': string;
    'D2추정예수금': string;
    '증거금감면적용구분': string;
};
export type OPInputOPW00011 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '종목번호': string;
    '매수가격': string;
};
export type OPOutputOPW00011 = {
    '종목증거금율': string;
    '계좌증거금율': string;
    '적용증거금율': string;
    '증거금20주문가능금액': string;
    '증거금20주문가능수량': string;
    '증거금20전일재사용금액': string;
    '증거금20금일재사용금액': string;
    '증거금30주문가능금액': string;
    '증거금30주문가능수량': string;
    '증거금30전일재사용금액': string;
    '증거금30금일재사용금액': string;
    '증거금40주문가능금액': string;
    '증거금40주문가능수량': string;
    '증거금40전일재사용금액': string;
    '증거금40금일재사용금액': string;
    '증거금50주문가능금액': string;
    '증거금50주문가능수량': string;
    '증거금50전일재사용금액': string;
    '증거금50금일재사용금액': string;
    '증거금60주문가능금액': string;
    '증거금60주문가능수량': string;
    '증거금60전일재사용금액': string;
    '증거금60금일재사용금액': string;
    '증거금100주문가능금액': string;
    '증거금100주문가능수량': string;
    '증거금100전일재사용금액': string;
    '증거금100금일재사용금액': string;
    '미수불가주문가능금액': string;
    '미수불가주문가능수량': string;
    '미수불가전일재사용금액': string;
    '미수불가금일재사용금액': string;
    '예수금': string;
    '대용금': string;
    '미수금': string;
    '주문가능대용': string;
    '주문가능현금': string;
};
export type OPInputOPW00012 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '종목번호': string;
    '매수가격': string;
};
export type OPOutputOPW00012 = {
    '종목보증금율': string;
    '종목보증금율명': string;
    '보증금30주문가능금액': string;
    '보증금30주문가능수량': string;
    '보증금30전일재사용금액': string;
    '보증금30금일재사용금액': string;
    '보증금40주문가능금액': string;
    '보증금40주문가능수량': string;
    '보증금40전일재사용금액': string;
    '보증금40금일재사용금액': string;
    '보증금50주문가능금액': string;
    '보증금50주문가능수량': string;
    '보증금50전일재사용금액': string;
    '보증금50금일재사용금액': string;
    '보증금60주문가능금액': string;
    '보증금60주문가능수량': string;
    '보증금60전일재사용금액': string;
    '보증금60금일재사용금액': string;
    '예수금': string;
    '대용금': string;
    '미수금': string;
    '주문가능대용': string;
    '주문가능현금': string;
    '미수가능금액': string;
    '미수가능수량': string;
    '미수불가금액': string;
    '미수불가수량': string;
};
export type OPInputOPW00013 = {
    '계좌번호': string;
    '비밀번호': string;
};
export type OPOutputOPW00013 = {
    '금일재사용대상금액': string;
    '금일재사용사용금액': string;
    '금일재사용가능금액': string;
    '금일재사용제한금액': string;
    '금일재사용가능금액최종': string;
    '전일재사용대상금액': string;
    '전일재사용사용금액': string;
    '전일재사용가능금액': string;
    '전일재사용제한금액': string;
    '전일재사용가능금액최종': string;
    '현금금액': string;
    '현금증거금': string;
    '사용가능현금': string;
    '현금사용제한금액': string;
    '사용가능현금최종': string;
    '대용금액': string;
    '대용증거금': string;
    '사용가능대용': string;
    '대용사용제한금액': string;
    '사용가능대용최종': string;
    '신용보증금현금': string;
    '신용보증금대용': string;
    '신용담보금현금': string;
    '신용담보금대용': string;
    '미수금': string;
    '대주담보금재사용금': string;
    '20주문가능금액': string;
    '30주문가능금액': string;
    '40주문가능금액': string;
    '50주문가능금액': string;
    '60주문가능금액': string;
    '100주문가능금액': string;
    '금일신용상환손실금액': string;
    '전일신용상환손실금액': string;
    '금일대주상환손실대용증거금': string;
    '전일대주상환손실대용증거금': string;
    '평가대용금(현물사용제외)': string;
    '평가대용비율': string;
    '신용대용증거금': string;
    '현금주문대용증거금': string;
    '신용주문대용증거금': string;
    '신용대용환산금': string;
    '대용가능금액': string;
    '대용가능금액2': string;
    '현금대용부족금': string;
    '신용대용부족금': string;
    '현금주문가능대용금': string;
    '신용주문가능대용금': string;
};
export type OPInputOPW00014 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW00014 = {
    '일치여부': string;
};
export type OPInputOPW00015 = {
    '계좌번호': string;
    '비밀번호': string;
    '시작일자': string;
    '종료일자': string;
    '구분': string;
    '종목코드': string;
    '통화코드': string;
    '상품구분': string;
    '비밀번호입력매체구분': string;
    '고객정보제한여부': string;
    '내부정보제한여부': string;
    '원화대용입출금제외여부': string;
    '해외거래소코드': string;
};
export type OPOutputOPW00015MultiItem = {
    '거래일자': string;
    '거래번호': string;
    '적요명': string;
    '신용거래구분명': string;
    '정산금액': string;
    '대출금상환': string;
    '거래금액(외)': string;
    '정산금액(외)': string;
    '예수금잔고': string;
    '통화코드': string;
    '거래종류구분': string;
    '거래종류명': string;
    '종목명': string;
    '거래금액': string;
    '거래및농특세': string;
    '상환차금': string;
    '거래세(외)': string;
    '연체합': string;
    '외화예수금잔고': string;
    '매체구분명': string;
    '입출구분': string;
    '입출구분명': string;
    '원거래번호': string;
    '종목코드': string;
    '거래수량/좌수': string;
    '수수료': string;
    '이자/대주이용': string;
    '수수료(외)': string;
    '연체합(외)': string;
    '유가금잔': string;
    '처리시간': string;
    'ISIN코드': string;
    '거래소코드': string;
    '거래소명': string;
    '거래단가/환율': string;
    '소득/주민세': string;
    '대출일': string;
    '미수(원/주)': string;
    '변제합': string;
    '체결일': string;
    '출납번호': string;
    '처리자': string;
    '처리점': string;
    '매매형태': string;
    '과세기준가': string;
    '세금수수료합': string;
    '외국납부세액(외)': string;
    '미수(외)': string;
    '변제합(외)': string;
    '입금자': string;
    '거래내역구분': string;
};
export type OPOutputOPW00015 = {
    '계좌번호': string;
    '출력건수': string;
    multi_items: OPOutputOPW00015MultiItem[];
};
export type OPInputOPW00016 = {
    '계좌번호': string;
    '비밀번호': string;
    '평가시작일': string;
    '평가종료일': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW00016 = {
    '관리사원번호': string;
    '관리자명': string;
    '관리자지점': string;
    '예수금_초': string;
    '예수금_말': string;
    '유가증권평가금액_초': string;
    '유가증권평가금액_말': string;
    '대주담보금_초': string;
    '대주담보금_말': string;
    '신용융자금_초': string;
    '신용융자금_말': string;
    '현금미수금_초': string;
    '현금미수금_말': string;
    '원화대용금_초': string;
    '원화대용금_말': string;
    '대주평가금_초': string;
    '대주평가금_말': string;
    '권리평가금_초': string;
    '권리평가금_말': string;
    '대출금_초': string;
    '대출금_말': string;
    '기타대여금_초': string;
    '기타대여금_말': string;
    '신용이자미납금_초': string;
    '신용이자미납금_말': string;
    '신용이자_초': string;
    '신용이자_말': string;
    '순자산액계_초': string;
    '순자산액계_말': string;
    '투자원금평잔': string;
    '평가손익': string;
    '수익률': string;
    '회전율': string;
    '기간내총입금': string;
    '기간내총출금': string;
    '기간내총입고': string;
    '기간내총출고': string;
    '선물대용매도금액': string;
    '위탁대용매도금액': string;
};
export type OPInputOPW00017 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW00017 = {
    'D+2추정예수금': string;
    '신용이자미납금': string;
    '기타대여금': string;
    '일반주식평가금액D+2': string;
    '예탁담보대출금D+2': string;
    '예탁담보주식평가금액D+2': string;
    '신용융자금D+2': string;
    '신용융자평가금D+2': string;
    '신용대주담보금D+2': string;
    '신용대주평가금D+2': string;
    '입금금액': string;
    '출금금액': string;
    '입고금액': string;
    '출고금액': string;
    '매도금액': string;
    '매수금액': string;
    '수수료': string;
    '세금': string;
    '주식매입자금대출금': string;
    'RP평가금액': string;
    '채권평가금액': string;
    'ELS평가금액': string;
    '신용이자금액': string;
    '매도대금담보대출이자금액': string;
    '배당금액': string;
};
export type OPInputOPW00018 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
    '조회구분': string;
};
export type OPOutputOPW00018MultiItem = {
    '종목번호': string;
    '종목명': string;
    '평가손익': string;
    '수익률(%)': string;
    '매입가': string;
    '전일종가': string;
    '보유수량': string;
    '매매가능수량': string;
    '현재가': string;
    '전일매수수량': string;
    '전일매도수량': string;
    '금일매수수량': string;
    '금일매도수량': string;
    '매입금액': string;
    '매입수수료': string;
    '평가금액': string;
    '평가수수료': string;
    '세금': string;
    '수수료합': string;
    '보유비중(%)': string;
    '신용구분': string;
    '신용구분명': string;
    '대출일': string;
};
export type OPOutputOPW00018 = {
    '총매입금액': string;
    '총평가금액': string;
    '총평가손익금액': string;
    '총수익률(%)': string;
    '추정예탁자산': string;
    '총대출금': string;
    '총융자금액': string;
    '총대주금액': string;
    '조회건수': string;
    multi_items: OPOutputOPW00018MultiItem[];
};
export type OPInputOPW20001 = {
    '계좌번호': string;
    '비밀번호': string;
    '입력건수': string;
    '종목코드': string;
    '매수매도구분': string;
    '주문수량': string;
    '잔고수량': string;
};
export type OPOutputOPW20001 = {
    '현재위탁증거금총액': string;
    '현재현금예탁필요액': string;
    '체결위탁증거금총액': string;
    '체결현금예탁필요액': string;
    '증감위탁증거금총액': string;
    '증감현금예탁필요액': string;
};
export type OPInputOPW20002 = {
    '계좌번호': string;
    '비밀번호': string;
    '시장구분': string;
    '체결일자': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20002 = {
    '선물수수료': string;
    '옵션수수료': string;
    '주식옵션수수료': string;
    '선물매도수량': string;
    '선물매도금액': string;
    '선물매도평균가격': string;
    '선물매수수량': string;
    '선물매수금액': string;
    '선물매수평균가격': string;
    '선물전매수량': string;
    '선물전매금액': string;
    '선물환매수량': string;
    '선물환매금액': string;
    '콜매도수량': string;
    '콜매도금액': string;
    '콜매도평균가격': string;
    '콜매수수량': string;
    '콜매수금액': string;
    '콜매수평균가격': string;
    '콜전매수량': string;
    '콜전매금액': string;
    '콜환매수량': string;
    '콜환매금액': string;
    '풋매도수량': string;
    '풋매도금액': string;
    '풋매도평균가격': string;
    '풋매수수량': string;
    '풋매수금액': string;
    '풋매수평균가격': string;
    '풋전매수량': string;
    '풋전매금액': string;
    '풋환매수량': string;
    '풋환매금액': string;
    '선물최종매도수량': string;
    '선물최종매도금액': string;
    '선물최종매도평균가격': string;
    '선물최종매수수량': string;
    '선물최종매수금액': string;
    '선물최종매수평균가격': string;
    '콜권리행사수량': string;
    '콜권리행사금액': string;
    '콜권리행사가격': string;
    '풋권리행사수량': string;
    '풋권리행사금액': string;
    '풋권리행사가격': string;
    '콜권리배정수량': string;
    '콜권리배정금액': string;
    '콜권리배정가격': string;
    '풋권리배정수량': string;
    '풋권리배정금액': string;
    '풋권리배정가격': string;
};
export type OPInputOPW20003 = {
    '계좌번호': string;
    '시장구분': string;
    '비밀번호': string;
    '시작일자': string;
    '종료일자': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20003MultiItem = {
    '종목코드': string;
    '매도수구분': string;
    '잔고수량': string;
    '평균가격': string;
    '전일종가': string;
    '평가손익': string;
    '종목명': string;
};
export type OPOutputOPW20003 = {
    '선물약정금액': string;
    '옵션약정금액': string;
    '선물정산손익': string;
    '옵션매매손익': string;
    '총손익': string;
    '평균예탁금액': string;
    '예탁총액': string;
    '수수료': string;
    '수익율': string;
    '조회건수': string;
    multi_items: OPOutputOPW20003MultiItem[];
};
export type OPInputOPW20004 = {
    '계좌번호': string;
    '비밀번호': string;
    '조회일': string;
    '종목구분': string;
    '조회구분': string;
    '정렬구분': string;
    '비밀번호입력매체구분': string;
    '정규시간외구분': string;
};
export type OPOutputOPW20004MultiItem = {
    '주문번호': string;
    '매매구분': string;
    '종목코드': string;
    '주문수량': string;
    '체결수량': string;
    '미체결수량': string;
    '접수번호': string;
    '접수구분': string;
    '조작자사번': string;
    '원주문번호': string;
    '주문유형': string;
    '종목명': string;
    '주문가격': string;
    '체결가격': string;
    '체결번호': string;
    '약정시간': string;
    '접수시간': string;
    '매체': string;
};
export type OPOutputOPW20004 = {
    '출력건수': string;
    multi_items: OPOutputOPW20004MultiItem[];
};
export type OPInputOPW20005 = {
    '계좌번호': string;
    '비밀번호': string;
    '조회일': string;
    '종목구분': string;
    '조회구분': string;
    '정렬구분': string;
    '정규시간외구분': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20005MultiItem = {
    '주문번호': string;
    '매매구분': string;
    '종목코드': string;
    '주문수량': string;
    '체결수량': string;
    '미체결수량': string;
    '접수번호': string;
    '접수구분': string;
    '조작자사번': string;
    '원주문번호': string;
    '주문유형': string;
    '종목명': string;
    '주문가격': string;
    '체결가': string;
    '체결번호': string;
    '약정시간': string;
    '접수시간': string;
    '매체': string;
};
export type OPOutputOPW20005 = {
    '출력건수': string;
    multi_items: OPOutputOPW20005MultiItem[];
};
export type OPInputOPW20006 = {
    '계좌번호': string;
    '비밀번호': string;
    '조회일자': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20006MultiItem = {
    '종목코드': string;
    '종목명': string;
    '매매일자': string;
    '매매구분': string;
    '잔고수량': string;
    '매입단가': string;
    '매매금액': string;
    '현재가': string;
    '평가손익': string;
    '손익율': string;
    '평가금액': string;
};
export type OPOutputOPW20006 = {
    '선물매도수량': string;
    '선물매수수량': string;
    '콜매도수량': string;
    '콜매수수량': string;
    '풋매도수량': string;
    '풋매수수량': string;
    '선물매도금액': string;
    '선물매수금액': string;
    '콜매도금액': string;
    '콜매수금액': string;
    '풋매도금액': string;
    '풋매수금액': string;
    '약정합계': string;
    '손익합계': string;
    '조회건수': string;
    multi_items: OPOutputOPW20006MultiItem[];
};
export type OPInputOPW20007 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20007MultiItem = {
    '종목코드': string;
    '종목명': string;
    '매도매수구분': string;
    '수량': string;
    '매입단가': string;
    '현재가': string;
    '평가손익': string;
    '청산가능수량': string;
    '약정금액': string;
    '평가금액': string;
};
export type OPOutputOPW20007 = {
    '약정금액합계': string;
    '평가손익합계': string;
    '출력건수': string;
    multi_items: OPOutputOPW20007MultiItem[];
};
export type OPInputOPW20008 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20008 = {
    '계좌명': string;
    '예탁총액': string;
    '추정예탁총액': string;
    '예탁현금': string;
    '추정예탁현금': string;
    '선물당일차금': string;
    '선물갱신차금': string;
    '선물최종결제차금': string;
    '선물예상정산손익': string;
    '옵션매수대금': string;
    '옵션매도대금': string;
    '옵션행사차금': string;
    '옵션배정차금': string;
    '주식옵션행사대금': string;
    '주식옵션배정대금': string;
    '인수도대금': string;
    '전일대용매도체결금액': string;
    '금일대용매도체결금액': string;
    '선물수수료': string;
    '옵션수수료': string;
    '결제가격수신여부': string;
    '유지증거금총액': string;
    '유지증거금총액부족액': string;
    '유지증거금현금부족액': string;
    '옵션잔고평가손익': string;
    '예탁대용': string;
    '익일결제예정금액': string;
};
export type OPInputOPW20009 = {
    '계좌번호': string;
    '비밀번호': string;
    '종목코드': string;
    '매도수구분': string;
    '주문유형': string;
    '주문가격': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20009 = {
    '예탁총액': string;
    '예탁현금': string;
    '위탁증거금': string;
    '현금증거금': string;
    '주문가능금액': string;
    '주문가능총액': string;
    '신규가능수량': string;
    '청산가능수량': string;
    '총가능수량': string;
    '필요증거금총액': string;
    '총액부족액': string;
    '주문가능현금': string;
    '필요증거금현금': string;
    '현금부족액': string;
    '주문가능대용금': string;
    '필요증거금대용금': string;
    '대용금부족액': string;
};
export type OPInputOPW20010 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20010 = {
    '예탁총액': string;
    '예탁현금': string;
    '에탁대용': string;
    '증거금총액': string;
    '증거금현금': string;
    '증거금대용금': string;
    '주문가능총액': string;
    '주문가능현금': string;
    '주문가능대용금': string;
    '추가증거금총액': string;
    '추가증거금현금': string;
    '추가증거금대용금': string;
    '인출가능총액': string;
    '인출가능현금': string;
    '인출가능대용금': string;
    '순자산금액': string;
    '익일예탁총액': string;
    '개장예탁총액': string;
    '선물정산차금': string;
    '선물청산손익': string;
    '선물평가손익': string;
    '선물약정금액': string;
    '옵션결제차금': string;
    '옵션청산손익': string;
    '옵션평가손익': string;
    '옵션약정금액': string;
    '전일장종료예탁총액': string;
    '전일장종료예탁현금': string;
    '전일장종료예탁대용금': string;
};
export type OPInputOPW20011 = {
    '계좌번호': string;
    '비밀번호': string;
    '증거금구분': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20011MultiItem = {
    '기초자산명': string;
    '최대구간증거금': string;
    '증거금감면액': string;
    '구간증거금01': string;
    '구간증거금02': string;
    '구간증거금03': string;
    '구간증거금04': string;
    '구간증거금05': string;
    '구간증거금06': string;
    '구간증거금07': string;
    '구간증거금08': string;
    '구간증거금09': string;
    '구간증거금10': string;
    '구간증거금11': string;
    '구간증거금12': string;
    '구간증거금13': string;
    '구간증거금14': string;
    '구간증거금15': string;
    '구간증거금16': string;
    '구간증거금17': string;
    '구간증거금18': string;
    '구간증거금19': string;
    '구간증거금20': string;
    '구간증거금21': string;
    '구간증거금22': string;
    '구간증거금23': string;
    '구간증거금24': string;
    '구간증거금25': string;
    '구간증거금26': string;
    '구간증거금27': string;
    '구간증거금28': string;
    '구간증거금29': string;
    '구간증거금30': string;
    '구간증거금31': string;
    '구간증거금32': string;
    '구간증거금33': string;
    '구간증거금34': string;
    '구간증거금35': string;
    '구간증거금36': string;
    '구간증거금37': string;
    '구간증거금38': string;
    '구간증거금39': string;
    '구간증거금40': string;
    '구간증거금41': string;
    '구간증거금42': string;
    '구간증거금43': string;
    '구간증거금44': string;
    '구간증거금45': string;
    '구간증거금46': string;
    '구간증거금47': string;
    '구간증거금48': string;
    '구간증거금49': string;
    '구간증거금50': string;
    '구간증거금51': string;
    '구간증거금52': string;
    '구간증거금53': string;
    '구간증거금54': string;
    '구간증거금55': string;
    '구간증거금56': string;
    '구간증거금57': string;
    '구간증거금58': string;
    '구간증거금59': string;
    '구간증거금60': string;
    '구간증거금61': string;
    '구간증거금62': string;
};
export type OPOutputOPW20011 = {
    '출력건수': string;
    multi_items: OPOutputOPW20011MultiItem[];
};
export type OPInputOPW20012 = {
    '계좌번호': string;
    '비밀번호': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20012 = {
    '예탁총액': string;
    '예탁현금': string;
    '예탁대용': string;
    '위탁증거금총액': string;
    '위탁현금증거금': string;
    '유지증거금총액': string;
    '추가증거금총액': string;
    '추가증거금현금': string;
    '신규위탁증거금총액': string;
    '선물신규주문증거금총액': string;
    '신규스프레드증거금': string;
    '옵션신규매수주문': string;
    '옵션신규매도주문': string;
    '위험위탁증거금': string;
    '옵션가격증거금': string;
    '가격변동증거금': string;
    '선물스프레드증거금': string;
    '인수도증거금': string;
    '최소증거금': string;
    '당일옵션순매수대금': string;
    '옵션매수대금': string;
    '선물체결순손익': string;
    '선물정산차금': string;
    '옵션매도결제대금': string;
    '옵션매수결제대금': string;
    '수수료합계': string;
    '선물최종결제차금': string;
    '인수도대금': string;
    '옵션행사대금': string;
    '옵션배정대금': string;
    '주문가능총액': string;
    '주문가능현금': string;
    '인출가능총액': string;
    '인출가능현금': string;
    '계좌명': string;
    '계좌번호': string;
    '조회일자': string;
    '예탁평가총액': string;
    '익일예탁총액': string;
    '전일대용매도금': string;
    '금일대용매도금액': string;
    '미수연체료': string;
    '전일장종료예탁총액': string;
    '전일장종료예탁현금': string;
    '장중인출가능금액변경여부': string;
};
export type OPInputOPW20013 = {
    '계좌번호': string;
    '비밀번호': string;
    '종목코드': string;
    '주문가격': string;
};
export type OPOutputOPW20013 = {
    '미결제수량': string;
    '청산가능수량': string;
    '현재증거금총액': string;
    '현재증거금현금': string;
    '예상위탁증거금': string;
    '예상현금증거금': string;
};
export type OPInputOPW20014 = {
    '계좌번호': string;
    '비밀번호': string;
    'KOSPI200지수': string;
    '비밀번호입력매체구분': string;
};
export type OPOutputOPW20014MultiItem = {
    '종목코드': string;
    '매도매수구분': string;
    '미결제수량': string;
    '현재가': string;
    '내재변동성': string;
    '이론지수': string;
    '잔존일수': string;
};
export type OPOutputOPW20014 = {
    '계좌명': string;
    '예탁총액': string;
    '예탁현금': string;
    '예탁대용금': string;
    '위탁증거금': string;
    '현금증거금': string;
    '추가증거금총액': string;
    '추가증거금현금': string;
    '추정예탁총액': string;
    '추정예탁현금': string;
    '추정위탁증거금총액': string;
    '추정위탁증거금현금': string;
    '추정유지증거금총액': string;
    '추정유지증거금현금': string;
    '추정추가증거금총액': string;
    '추정추가증거금현금': string;
    '선물당일차금': string;
    '옵션결제대금': string;
    '인수도대금': string;
    '수수료': string;
    '선물갱신차금': string;
    '선물최종차금': string;
    '옵션행사배정대금': string;
    '유지증거금기준부족액': string;
    '위탁증거금기준부족액': string;
    '사후증거금계좌구분': string;
    '결제가격수신여부': string;
    '장종료예탁총액': string;
    '장종료예탁현금': string;
    '장종료예탁대용금': string;
    '조회건수': string;
    multi_items: OPOutputOPW20014MultiItem[];
};
export type OPInputOPW20015 = {
    '월물구분': string;
    '클래스구분': string;
};
export type OPOutputOPW20015MultiItem = {
    '콜조정이론가': string;
    '콜최대이론가': string;
    '콜전일종가': string;
    '콜주문증거금': string;
    '행사가격': string;
    '풋주문증거금': string;
    '풋전일종가': string;
    '풋최대이론가': string;
    '풋조정이론가': string;
};
export type OPOutputOPW20015 = {
    '종목코드': string;
    'ATM행사가격': string;
    '위치': string;
    '조회건수': string;
    multi_items: OPOutputOPW20015MultiItem[];
};
export type OPInputOPW20016 = {
    '신용종목등급구분': string;
    '시장거래구분': string;
    '종목번호': string;
};
export type OPOutputOPW20016MultiItem = {
    '종목코드': string;
    '종목명': string;
    '신용보즘금율': string;
    '대용가': string;
    '전일종가': string;
    '신용한도초과여부': string;
    '신용한도초과': string;
};
export type OPOutputOPW20016 = {
    '신용융자가능여부': string;
    '출력건수': string;
    multi_items: OPOutputOPW20016MultiItem[];
};
export type OPInputOPW20017 = {
    '종목코드': string;
};
export type OPOutputOPW20017 = {
    '신용가능여부': string;
};
