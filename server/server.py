import asyncio
import inspect
import json
import re

import colorama
import nest_asyncio
import pythoncom
import websockets
from kiwoomapiwrapper import KiwoomAPIWrapper

nest_asyncio.apply()

# 웹소켓 연결을 전역적으로 관리
websocket_connection = None

kiwoom: KiwoomAPIWrapper = None

waiting_event_connect_complete = False
waiting_receive_msg_complete = False

waiting_receive_tr_data_complete = False
waiting_receive_real_data_complete = False
waiting_receive_chejan_data_complete = False

waiting_receive_condition_ver_complete = False
waiting_receive_real_condition_complete = False
waiting_receive_tr_condition_complete = False


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

    global waiting_event_connect_complete
    global waiting_receive_msg_complete
    global waiting_receive_tr_data_complete
    global waiting_receive_real_data_complete
    global waiting_receive_chejan_data_complete
    global waiting_receive_condition_ver_complete
    global waiting_receive_real_condition_complete
    global waiting_receive_tr_condition_complete

    while True:
        try:
            msg = await ws.recv()
            data = json.loads(msg)

            name = data["name"]
            if name == "close":
                waiting_event_connect_complete = False
                waiting_receive_msg_complete = False
                waiting_receive_tr_data_complete = False
                waiting_receive_real_data_complete = False
                waiting_receive_chejan_data_complete = False
                waiting_receive_condition_ver_complete = False
                waiting_receive_real_condition_complete = False
                waiting_receive_tr_condition_complete = False
                continue
            if name == "on_event_connect_complete":
                waiting_event_connect_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_event_connect_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_msg_complete":
                waiting_receive_msg_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_msg_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_tr_data_complete":
                waiting_receive_tr_data_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_tr_data_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_real_data_complete":
                waiting_receive_real_data_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_real_data_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_chejan_data_complete":
                waiting_receive_chejan_data_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_chejan_data_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_condition_ver_complete":
                waiting_receive_condition_ver_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_condition_ver_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_real_condition_complete":
                waiting_receive_real_condition_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_real_condition_complete",
                    colorama.Fore.RESET,
                )
                continue
            if name == "on_receive_tr_condition_complete":
                waiting_receive_tr_condition_complete = False
                print(
                    "received",
                    colorama.Fore.MAGENTA,
                    "on_receive_tr_condition_complete",
                    colorama.Fore.RESET,
                )
                continue

            print(colorama.Fore.BLUE, "received data :", colorama.Fore.RESET)
            print_colored_json(data)

            msg_id = data["id"]
            params = data["params"]

            function = getattr(kiwoom, name, None)
            if function is None:
                ws.send(
                    json.dumps(
                        {"id": msg_id, "name": name, "error": "function not found"}
                    )
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
                ws.send(
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
        global waiting_event_connect_complete
        waiting_event_connect_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_event_connect_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_event_connect",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
                break

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
        global waiting_receive_msg_complete
        waiting_receive_msg_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_msg_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_msg",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
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
        }
        global waiting_receive_tr_data_complete
        waiting_receive_tr_data_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_tr_data_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_tr_data",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_real_data(code: str, real_type: str, real_data: str):
    print(colorama.Fore.MAGENTA, "** on_receive_real_data")
    print_colored_json({"code": code, "real_type": real_type, "real_data": real_data})
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_real_data",
            "code": code,
            "real_type": real_type,
            "real_data": real_data,
        }
        global waiting_receive_real_data_complete
        waiting_receive_real_data_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_real_data_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_real_data",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
    else:
        print(
            colorama.Fore.MAGENTA, "websocket_connection not found", colorama.Fore.RESET
        )


def on_receive_chejan_data(gubun: str, item_cnt: int, fid_list: str):
    print(colorama.Fore.MAGENTA, "** on_receive_chejan_data")
    print_colored_json({"gubun": gubun, "item_cnt": item_cnt, "fid_list": fid_list})
    print("")
    if websocket_connection:
        data = {
            "name": "on_receive_chejan_data",
            "gubun": gubun,
            "item_cnt": item_cnt,
            "fid_list": fid_list,
        }
        global waiting_receive_chejan_data_complete
        waiting_receive_chejan_data_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_chejan_data_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_chejan_data",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
                break
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
        global waiting_receive_condition_ver_complete
        waiting_receive_condition_ver_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_condition_ver_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_condition_ver",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
                break
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
        global waiting_receive_real_condition_complete
        waiting_receive_real_condition_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_real_condition_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_real_condition",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
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
        global waiting_receive_tr_condition_complete
        waiting_receive_tr_condition_complete = True
        asyncio.create_task(websocket_connection.send(json.dumps(data)))
        timeout = 3
        while waiting_receive_tr_condition_complete:
            asyncio.get_event_loop().run_until_complete(asyncio.sleep(0.05))
            timeout -= 0.05
            if timeout <= 0:
                print(
                    "    ",
                    colorama.Fore.YELLOW,
                    "on_receive_tr_condition",
                    colorama.Fore.RED,
                    "timeout",
                    colorama.Fore.RESET,
                )
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
