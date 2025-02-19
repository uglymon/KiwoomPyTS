# KiwoomAuto

## 구조

- 키움증권 ocx는 파이썬을 통해 호출
- 파이썬은 ocx접근과 웹소켓을 이용한 통신에만 최소한으로 사용
- 그 외의 부분은 typescript 사용

## Commands

### `show transactions` - 거래내역 조회

주식 및 날짜별 거래내역(간단/상세)을 조회합니다.

**Options:**

- `--stock "종목명"`  
  조회할 주식 이름 또는 심볼 (**필수**)
- `--date YYYYMMDD`  
  조회할 날짜 (옵션; 미지정 시 전체 기간 또는 최근 내역)
- `--detail`  
  상세 거래내역 조회 (옵션; 미지정 시 요약 정보 제공)

**Examples:**
show transactions --stock "삼성전자"
show transactions --stock "삼성전자" --date 20250202 --detail

### `trade auto` - 자동거래 제어

자동거래의 시작, 중지, 상태 조회를 수행합니다.

**Subcommands:**

- `start` : 자동거래 시작
- `stop`  : 자동거래 중지
- `status`: 자동거래 상태 확인

**Examples:**
trade auto start
trade auto status

### `order` - 주문 관리

주식 주문 생성, 취소 및 주문 상태 조회를 지원합니다.

#### `order create`

새로운 주문 생성

**Options:**

- `--stock "종목명"`  
  주문할 주식 이름 또는 심볼 (**필수**)
- `--action buy|sell`  
  매수(`buy`) 또는 매도(`sell`) (**필수**)
- `--quantity N`  
  주문 수량 (**필수**)
- `--price PRICE`  
  주문 가격 (옵션; 미지정 시 시장가 주문)

**Example:**
order create --stock "삼성전자" --action buy --quantity 100 --price 50000

#### `order cancel`

기존 주문 취소

**Options:**

- `--id 주문번호`  
  취소할 주문의 ID (**필수**)

**Example:**
order cancel --id 12345

#### `order status`

주문 상태 조회

**Options:**

- `--id 주문번호`  
  조회할 주문의 ID (**필수**)

**Example:**
order status --id 12345

### `portfolio` - 포트폴리오 관리

보유 주식 및 포트폴리오 요약/상세 정보를 조회합니다.

**Subcommands:**

- `view`   : 포트폴리오 요약 조회
- `detail` : 보유 주식 상세 정보 조회

**Examples:**
portfolio view
portfolio detail

### `quote` - 시세 조회

주식의 현재 시세 또는 과거 시세를 확인합니다.

#### `quote current`

현재 시세 조회

**Options:**

- `--stock "종목명"`  
  조회할 주식 이름 또는 심볼 (**필수**)

**Example:**
 quote current --stock "삼성전자"

#### `quote history`

과거 시세 조회

**Options:**

- `--stock "종목명"`  
  조회할 주식 이름 또는 심볼 (**필수**)
- `--date YYYYMMDD`  
  조회할 날짜 (**필수**)

**Example:**
quote history --stock "삼성전자" --date 20250202

### `config` - 설정 변경

CLI의 각종 설정을 변경할 수 있습니다.

#### `config set`

특정 설정값 변경

**Options:**

- `--key "설정키"`  
  설정 항목 (예: `autoTradingTime`)
- `--value "설정값"`  
  설정 값 (예: `"09:00-15:00"`)

**Example:**
config set --key "autoTradingTime" --value "09:00-15:00"

### `help` - 도움말

전체 명령어 및 사용법을 출력합니다.
