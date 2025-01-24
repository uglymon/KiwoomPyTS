import json
import os
import zipfile


class APIMetaData:
    def __init__(self, directory):
        self.directory = directory

    def load_op_files(self, result_filename: str):
        try:
            files = os.listdir(self.directory)
            result = {}
            for file in files:
                if file.lower().startswith("op") and file.lower().endswith(".enc"):
                    # open file and unzip to variable
                    with zipfile.ZipFile(
                        os.path.join(self.directory, file), "r"
                    ) as zip_ref:
                        for info in zip_ref.infolist():
                            if info.filename.endswith(".dat"):
                                # read string as euc-kr
                                data = zip_ref.read(info.filename).decode("euc-kr")
                                trinfo = self.make_op_metadata(data)
                                tr_code = file.upper().split(".")[0]
                                trinfo["tr_code"] = tr_code
                                result[tr_code] = trinfo

            # write result as json file
            with open(result_filename, "w", encoding="utf-8") as f:
                json.dump(result, f, ensure_ascii=False, indent=4)

        except FileNotFoundError:
            print(f"cannot find directory [{self.directory}]")

    def make_op_metadata(self, data: str):
        trinfo = {}
        lines = data.splitlines()
        index = 0
        while index < len(lines):
            line = lines[index].strip()
            index += 1
            if line.startswith("[TRINFO]"):
                while index < len(lines) and not lines[index].startswith("["):
                    key, value = lines[index].strip().split("=")
                    if key == "TRName":
                        trinfo["tr_name"] = value
                    elif key == "TRTRNameSVR":
                        trinfo["tr_name_svr"] = value
                    elif key == "TRType":
                        trinfo["tr_type"] = value
                    elif key == "GFID":
                        trinfo["gfid"] = value
                    index += 1

            elif line.startswith("[INPUT]"):
                trinfo["input"] = []
                while index < len(lines) and not lines[index].startswith("["):
                    line = lines[index].strip()
                    if line.startswith("@START"):
                        tmp, tr_desc = line.split("_")
                        trinfo["tr_desc"] = tr_desc
                    elif line.startswith("@END"):
                        break
                    elif len(line) > 0:
                        key, rest = line.split("=")
                        offset, length, fid = rest.split(",")
                        trinfo["input"].append(
                            {
                                "name": key.strip(),
                                "offset": int(offset.strip()),
                                "length": int(length.strip()),
                                "fid": int(fid.strip()),
                            }
                        )
                    index += 1

            elif line.startswith("[OUTPUT]"):
                trinfo["output_single"] = []
                trinfo["output_multi"] = []
                while index < len(lines) and not lines[index].startswith("["):
                    line = lines[index].strip()
                    index += 1
                    if line.startswith("@START"):
                        tmp = line.split("_")
                        rest = "_".join(tmp[1:])
                        tr_desc, rest = rest.split("=")
                        max_count, multi_if_4, max_count_desc = rest.split(",")
                        line = lines[index].strip()
                        index += 1
                        if multi_if_4 == "4":
                            trinfo["output_multi_info"] = {
                                "tr_desc": tr_desc,
                                "max_count": (
                                    int(max_count) if max_count != "*" else "*"
                                ),
                                "max_count_desc": max_count_desc,
                            }
                            while index < len(lines) and not line.startswith("@END"):
                                key, rest = line.strip().split("=")
                                offset, length, fid = rest.split(",")
                                item = {
                                    "name": key.strip(),
                                    "offset": int(offset.strip()),
                                    "length": int(length.strip()),
                                    "fid": int(fid.strip()) if fid != "" else -1,
                                }
                                if item not in trinfo["output_multi"]:
                                    trinfo["output_multi"].append(item)
                                line = lines[index].strip()
                                index += 1

                        else:
                            trinfo["output_single_info"] = {
                                "tr_desc": tr_desc,
                                "max_count": (
                                    int(max_count) if max_count != "*" else "*"
                                ),
                                "max_count_desc": max_count_desc,
                            }
                            while index < len(lines) and not line.startswith("@END"):
                                key, rest = line.strip().split("=")
                                offset, length, fid = rest.split(",")
                                item = {
                                    "name": key.strip(),
                                    "offset": int(offset.strip()),
                                    "length": int(length.strip()),
                                    "fid": int(fid.strip()),
                                }
                                if item not in trinfo["output_single"]:
                                    trinfo["output_single"].append(item)
                                line = lines[index].strip()
                                index += 1

        return trinfo


if __name__ == "__main__":
    metadata = APIMetaData("C:/KiwoomApi/OpenAPI/data")
    metadata.load_op_files("op_metadata.json")
