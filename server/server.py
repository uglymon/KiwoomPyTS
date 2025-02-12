import asyncio
import inspect
import json
import re

import colorama
import pythoncom
import websockets
from kiwoomapiwrapper import KiwoomAPIWrapper

# 웹소켓 연결을 전역적으로 관리
websocket_connection = None

kiwoom: KiwoomAPIWrapper = None

f = open("data/trinfo.json", "r", encoding="utf-8")
metadata = json.load(f)
f.close()

f = open("data/realfid.json", "r", encoding="utf-8")
realfid = json.load(f)
f.close()

f = open("data/fid.json", "r", encoding="utf-8")
fid = json.load(f)
f.close()


def print_colored_json(data):
    # JSON 문자열로 변환, utf-8 인코딩
    json_str = json.dumps(data, ensure_ascii=False)

    # 정규 표현식을 사용하여 JSON의 각 요소에 색상 입히기
    json_str = re.sub(
        r"(?P<brace>[\{\}\[\]])",
        colorama.Fore.CYAN + r"\g<brace>" + colorama.Fore.RESET,
        json_str,
    )
    json_str = re.sub(
        r'(?P<key>"[^"]*")\s*:',
        colorama.Fore.YELLOW + r"\g<key>" + colorama.Fore.RESET + ":",
        json_str,
    )
    json_str = re.sub(
        r':\s*(?P<value>"[^"]*"|\d+)',
        r": " + colorama.Fore.GREEN + r"\g<value>" + colorama.Fore.RESET,
        json_str,
    )
    json_str = re.sub(
        r"(?P<comma>,)",
        colorama.Fore.MAGENTA + r"\g<comma>" + colorama.Fore.RESET,
        json_str,
    )

    print(json_str)


async def msg_handler(ws: websockets.WebSocketServerProtocol):
    global websocket_connection
    websocket_connection = ws  # 웹소켓 연결 저장

    async def handle_message(data):
        name = data["name"]
        if name == "close":
            return

        print(colorama.Fore.BLUE, "received data :", colorama.Fore.RESET)
        print_colored_json(data)

        msg_id = data["id"]
        params = data["params"]

        function = getattr(kiwoom, name, None)
        if function is None:
            await ws.send(
                json.dumps({"id": msg_id, "name": name, "error": "function not found"})
            )
            print(
                colorama.Fore.RED,
                f"function not found [{name}]",
                colorama.Fore.RESET,
            )
            return

        # 함수의 인자 개수 및 타입 힌트 확인
        signature = inspect.signature(function)
        param_count = len(signature.parameters)

        if len(params) != param_count:
            await ws.send(
                json.dumps(
                    {
                        "id": msg_id,
                        "name": name,
                        "error": f"parameter count mismatch : required {param_count}, but got {len(params)}",
                    }
                )
            )
            print(
                colorama.Fore.RED,
                "parameter count mismatch :",
                f" required {colorama.Fore.GREEN}{param_count}{colorama.Fore.RESET},",
                f" but got {colorama.Fore.GREEN}{len(params)}{colorama.Fore.RESET}",
                colorama.Fore.RESET,
            )
            return

        # 비동기적으로 함수 호출
        asyncio.create_task(call_function(function, params, msg_id, name, ws))

    async def call_function(function, params, msg_id, name, ws):
        try:
            result = function(*params)
            print(
                colorama.Fore.BLUE,
                "function result :",
                colorama.Fore.GREEN,
                result,
                colorama.Fore.RESET,
                "\n",
            )
            await ws.send(json.dumps({"id": msg_id, "name": name, "data": result}))
        except Exception as e:
            print(colorama.Fore.RED, "error in function call:", e, colorama.Fore.RESET)

    while True:
        try:
            msg = await ws.recv()
            data = json.loads(msg)
            asyncio.create_task(handle_message(data))
        except websockets.ConnectionClosed:
            print(colorama.Fore.RED, "client disconnected", colorama.Fore.RESET)
            break
        except Exception as e:
            print(colorama.Fore.RED, "error :", e, colorama.Fore.RESET)
            break

    websocket_connection = None


async def pump_messages():
    while True:
        await asyncio.sleep(0.05)
        pythoncom.PumpWaitingMessages()


async def server_loop():
    print(colorama.Fore.BLUE, "server starting...", colorama.Fore.RESET)
    asyncio.create_task(pump_messages())  # 메시지 펌프 작업 시작
    while True:
        async with websockets.serve(msg_handler, "0.0.0.0", 5000) as ws:
            await asyncio.Future()


def on_event_connect(err_code: int):
    print(colorama.Fore.MAGENTA, "** on_event_connect")
    print_colored_json({"err_code": err_code})
    print("")
    if websocket_connection:
        data = {
            "name": "on_event_connect",
            "err_code": err_code,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_msg(scr_no: str, rq_name: str, tr_code: str, msg: str):
    print(colorama.Fore.MAGENTA, "** on_receive_msg")
    print_colored_json(
        {"scr_no": scr_no, "rq_name": rq_name, "tr_code": tr_code, "msg": msg}
    )
    if websocket_connection:
        data = {
            "name": "on_receive_msg",
            "scr_no": scr_no,
            "rq_name": rq_name,
            "tr_code": tr_code,
            "msg": msg,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_tr_data(
    scr_no: str,
    rq_name: str,
    tr_code: str,
    record_name: str,
    prev_next: str,
    data_length: int,
    error_code: str,
    message: str,
    splm_msg: str,
):
    print(colorama.Fore.MAGENTA, "** on_receive_tr_data")
    print_colored_json(
        {
            "scr_no": scr_no,
            "rq_name": rq_name,
            "tr_code": tr_code,
            "record_name": record_name,
            "prev_next": prev_next,
            "data_length": data_length,
            "error_code": error_code,
            "message": message,
            "splm_msg": splm_msg,
        }
    )
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_tr_data",
            "scr_no": scr_no,
            "rq_name": rq_name,
            "tr_code": tr_code,
            "record_name": record_name,
            "prev_next": prev_next,
            "data_length": data_length,
            "error_code": error_code,
            "message": message,
            "splm_msg": splm_msg,
            "output_single": {},
            "output_multi": [],
        }
        if tr_code in metadata:
            info = metadata[tr_code]
            for singleitem in info["output_single"]:
                key = singleitem["name"]
                value = kiwoom.GetCommData(tr_code, rq_name, 0, key).strip()
                data["output_single"][key] = value

            multicount = kiwoom.GetRepeatCnt(tr_code, rq_name)
            for i in range(multicount):
                data["output_multi"].append({})
                for multiitem in info["output_multi"]:
                    key = multiitem["name"]
                    value = kiwoom.GetCommData(tr_code, rq_name, i, key).strip()
                    data["output_multi"][i][key] = value
            asyncio.create_task(websocket_connection.send(json.dumps(data)))

        elif rq_name == "buyorder" or rq_name == "sellorder":
            data["output_single"]["주문번호"] = kiwoom.GetCommData(
                tr_code, rq_name, 0, "주문번호"
            ).strip()
            asyncio.create_task(websocket_connection.send(json.dumps(data)))

        else:
            print(
                colorama.Fore.RED,
                f"tr_code not found in metadata : {tr_code}",
                colorama.Fore.RESET,
            )
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_real_data(code: str, real_type: str, real_data: str):
    print(colorama.Fore.MAGENTA, "** on_receive_real_data")
    print_colored_json(
        {
            "code": code,
            "real_type": real_type,
            "real_data": real_data[0:10] + "...",
        }
    )
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_real_data",
            "code": code,
            "real_type": real_type,
            "real_data": real_data,
            "output": {},
        }
        if real_type in realfid:
            info = realfid[real_type]
            for fid in info["fids"]:
                data["output"][fid] = kiwoom.GetCommRealData(code, int(fid))

            asyncio.create_task(websocket_connection.send(json.dumps(data)))
        else:
            print(
                colorama.Fore.RED,
                f"real_type not found in realfid : {real_type}",
                colorama.Fore.RESET,
            )
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_chejan_data(gubun: str, item_cnt: int, fid_list: str):
    print(colorama.Fore.MAGENTA, "** on_receive_chejan_data")
    print_colored_json(
        {"gubun": gubun, "item_cnt": item_cnt, "fid_list": fid_list[0:10] + "..."}
    )
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_chejan_data",
            "gubun": gubun,
            "item_cnt": item_cnt,
            "fid_list": fid_list,
            "output": {},
        }
        fidlist = fid_list.split(";")
        for fid in fidlist:
            data["output"][fid] = kiwoom.GetChejanData(int(fid))

        asyncio.create_task(websocket_connection.send(json.dumps(data)))
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_condition_ver(ret: int, msg: str):
    print(colorama.Fore.MAGENTA, "** on_receive_condition_ver")
    print_colored_json({"ret": ret, "msg": msg})
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_condition_ver",
            "ret": ret,
            "msg": msg,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_real_condition(
    code: str, type: str, condition_name: str, condition_index: str
):
    print(colorama.Fore.MAGENTA, "** on_receive_real_condition")
    print_colored_json(
        {
            "code": code,
            "type": type,
            "condition_name": condition_name,
            "condition_index": condition_index,
        }
    )
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_real_condition",
            "code": code,
            "type": type,
            "condition_name": condition_name,
            "condition_index": condition_index,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_tr_condition(
    scr_no: str, code_list: str, condition_name: str, index: int, next: int
):
    print(colorama.Fore.MAGENTA, "** on_receive_tr_condition")
    print_colored_json(
        {
            "scr_no": scr_no,
            "code_list": code_list,
            "condition_name": condition_name,
            "index": index,
            "next": next,
        }
    )
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_tr_condition",
            "scr_no": scr_no,
            "code_list": code_list,
            "condition_name": condition_name,
            "index": index,
            "next": next,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


if __name__ == "__main__":
    kiwoom = KiwoomAPIWrapper(
        on_event_connect=on_event_connect,
        on_receive_msg=on_receive_msg,
        on_receive_tr_data=on_receive_tr_data,
        on_receive_real_data=on_receive_real_data,
        on_receive_chejan_data=on_receive_chejan_data,
        on_receive_condition_ver=on_receive_condition_ver,
        on_receive_real_condition=on_receive_real_condition,
        on_receive_tr_condition=on_receive_tr_condition,
    )
    module_path = kiwoom.GetAPIModulePath()
    print("module_path :", module_path)
    kiwoom.CommConnect()

    asyncio.run(server_loop())
