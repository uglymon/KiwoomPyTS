import asyncio
import inspect
import json

import pythoncom
import websockets
from kiwoomapiwrapper import KiwoomAPIWrapper

# 웹소켓 연결을 전역적으로 관리
websocket_connection = None

kiwoom: KiwoomAPIWrapper = None


async def msg_handler(ws: websockets.WebSocketServerProtocol):
    global websocket_connection
    websocket_connection = ws  # 웹소켓 연결 저장
    while True:
        try:
            msg = await ws.recv()
            print("receive the msg {}".format(msg))
            # await ws.send("send: " + msg)

            # parse json
            data = json.loads(msg)
            print(data)

            msg_id = data["id"]
            name = data["name"]
            params = data["params"]

            function = getattr(kiwoom, name, None)
            if function is None:
                ws.send(
                    json.dumps(
                        {"id": msg_id, "name": name, "error": "function not found"}
                    )
                )
                print(f"function not found [{name}]")
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
                    f"parameter count mismatch : required {param_count}, but got {len(params)}"
                )
                return

            result = function(*params)
            await ws.send(json.dumps({"id": msg_id, "name": name, "data": result}))

        except websockets.ConnectionClosed:
            print("client disconnected")
            break

        except Exception as e:
            print("error :", e)
            break

    websocket_connection = None


async def pump_messages():
    while True:
        pythoncom.PumpWaitingMessages()
        await asyncio.sleep(0.1)  # 0.1초마다 메시지 펌프


async def server_loop():
    print("waiting for the client")
    asyncio.create_task(pump_messages())  # 메시지 펌프 작업 시작
    while True:
        async with websockets.serve(msg_handler, "localhost", 5000) as ws:
            await asyncio.Future()


def on_event_connect(err_code: int):
    print(f"** on_event_connect\n    err_code : {err_code}\n")
    if websocket_connection:
        data = {
            "name": "on_event_connect",
            "err_code": err_code,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


def on_receive_msg(scr_no: str, rq_name: str, tr_code: str, msg: str):
    print(f"** on_receive_msg\n    scr_no : {scr_no}\n    rq_name : {rq_name}")
    print(f"    tr_code : {tr_code}\n    msg : {msg}\n")
    if websocket_connection:
        data = {
            "name": "on_receive_msg",
            "scr_no": scr_no,
            "rq_name": rq_name,
            "tr_code": tr_code,
            "msg": msg,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


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
    print(f"** on_receive_tr_data\n    scr_no : {scr_no}\n    rq_name : {rq_name}")
    print(f"    tr_code : {tr_code}\n    record_name : {record_name}")
    print(f"    prev_next : {prev_next}\n    data_length : {data_length}")
    print(f"    error_code : {error_code}\n    message : {message}")
    print(f"    splm_msg : {splm_msg}\n")
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
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


def on_receive_real_data(code: str, real_type: str, real_data: str):
    print(f"** on_receive_real_data\n    code : {code}\n    real_type : {real_type}")
    print(f"    real_data : {real_data}\n")
    if websocket_connection:
        data = {
            "name": "on_receive_real_data",
            "code": code,
            "real_type": real_type,
            "real_data": real_data,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


def on_receive_chejan_data(gubun: str, item_cnt: int, fid_list: str):
    print(f"** on_receive_chejan_data\n    gubun : {gubun}\n    item_cnt : {item_cnt}")
    print(f"    fid_list : {fid_list}\n")
    if websocket_connection:
        data = {
            "name": "on_receive_chejan_data",
            "gubun": gubun,
            "item_cnt": item_cnt,
            "fid_list": fid_list,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


def on_receive_condition_ver(ret: int, msg: str):
    print(f"** on_receive_condition_ver\n    ret : {ret}\n    msg : {msg}\n")
    if websocket_connection:
        data = {
            "name": "on_receive_condition_ver",
            "ret": ret,
            "msg": msg,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


def on_receive_real_condition(
    code: str, type: str, condition_name: str, condition_index: str
):
    print(f"** on_receive_real_condition\n    code : {code}\n    type : {type}")
    print(f"    condition_name : {condition_name}")
    print(f"    condition_index : {condition_index}\n")
    if websocket_connection:
        data = {
            "name": "on_receive_real_condition",
            "code": code,
            "type": type,
            "condition_name": condition_name,
            "condition_index": condition_index,
        }
        asyncio.create_task(websocket_connection.send(json.dumps(data)))


def on_receive_tr_condition(
    scr_no: str, code_list: str, condition_name: str, index: int, next: int
):
    print(f"** on_receive_tr_condition\n    scr_no : {scr_no}")
    print(f"    code_list : {code_list}\n    condition_name : {condition_name}")
    print(f"    index : {index}\n    next : {next}\n")
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
    kiwoom.CommConnect()

    asyncio.run(server_loop())
