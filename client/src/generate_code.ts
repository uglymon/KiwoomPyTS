import { appendFileSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import AdmZip from 'adm-zip';
import iconv from 'iconv-lite';

export type OPIOItemType = {
    name: string;
    offset: number;
    length: number;
    fid: number;
}

export type OPMetadataItemType = {
    tr_name: string;
    tr_type: string;
    tr_name_svr?: string;
    gfid?: string;
    input: OPIOItemType[];
    tr_desc: string;
    output_single: OPIOItemType[];
    output_single_info: {
        tr_desc: string;
        max_count: number;
        max_count_desc: string;
    };
    output_multi: OPIOItemType[];
    output_multi_info: {
        tr_desc: string;
        max_count: number;
        max_count_desc: string;
    };
    tr_code: string;
}

export class OPMetadata {
    private readonly api_location = 'C:/KiwoomApi/OpenAPI/data';
    private readonly output_file = './src/trinfo.ts';
    private metadata: {
        [key: string]: OPMetadataItemType;
    }

    constructor() {
        this.metadata = this.MakeMetadata();

        const outputfile = readFileSync(this.output_file, 'utf-8');
        const end_index = outputfile.indexOf('// DO NOT EDIT BELOW THIS LINE');
        const src_code = outputfile.slice(0, end_index);





        writeFileSync(this.output_file, src_code);
        appendFileSync(this.output_file, '// DO NOT EDIT BELOW THIS LINE\n');
        appendFileSync(this.output_file, '// generated code starts here\n\n');

        const keys = Object.keys(this.metadata);
        keys.sort((a, b) => a.localeCompare(b));
        for (const key of keys) {
            console.log(key);
            const result = this.MakeTSCode(this.metadata[key]);
            appendFileSync(this.output_file, result);
        }

    }

    MakeMetadata() {
        const files = readdirSync(this.api_location);
        const metadata = {} as { [key: string]: OPMetadataItemType };
        for (const file of files) {
            if (file.toLowerCase().startsWith('op') && file.toLowerCase().endsWith('.enc')) {
                const zip = new AdmZip(this.api_location + '/' + file);
                for (const entry of zip.getEntries()) {
                    if (entry.entryName.toLowerCase().endsWith('.dat')) {
                        const dataBuffer = entry.getData();
                        const data = iconv.decode(dataBuffer, 'euc-kr');
                        const item = this.MakeOPData(data, file.toUpperCase().split('.')[0]);
                        metadata[item.tr_code] = item;
                    }
                }
            }
        }
        return metadata;
    }
    private MakeOPData(data: string, tr_code: string) {
        const trinfo = {} as OPMetadataItemType;
        trinfo.tr_code = tr_code;
        trinfo.output_single = [];
        trinfo.output_multi = [];

        const trinfo_start = data.indexOf('[TRINFO]');
        const trinfo_end = data.indexOf('[INPUT]');
        const trinfo_data = data.slice(trinfo_start + '[TRINFO]'.length, trinfo_end).trim();

        const input_start = data.indexOf('[INPUT]');
        const input_end = data.indexOf('[OUTPUT]');
        const input_data = data.slice(input_start + '[INPUT]'.length, input_end).trim();

        const output_start = data.indexOf('[OUTPUT]');
        const output_end = data.indexOf('[END]');
        let output_datas = data.slice(output_start + '[OUTPUT]'.length, output_end).trim();
        const output_data: string[] = [];

        while (output_datas.length > 0) {
            const output_section_start = output_datas.indexOf('@START');
            if (output_section_start === -1) break;
            const output_section_end = output_datas.indexOf('@END');
            const output_section_data = output_datas.slice(output_section_start, output_section_end).trim();
            output_datas = output_datas.slice(output_section_end + '@END'.length).trim();
            output_data.push(output_section_data);
        }

        for (const item of trinfo_data.split('\n')) {
            const [key, value] = item.split('=');
            if (key === 'TRName') trinfo.tr_name = value.trim();
            else if (key === 'TRTRNameSVR') trinfo.tr_name_svr = value.trim();
            else if (key === 'TRType') trinfo.tr_type = value.trim();
            else if (key === 'GFID') trinfo.gfid = value.trim();
        }

        for (const item of input_data.split('\n')) {
            if (item.startsWith('@START')) {
                const [, tr_desc] = item.split('_');
                trinfo.tr_desc = tr_desc;
                trinfo.input = [];
            } else if (item.trim().length > 0 && item.startsWith('@') === false) {
                const [key, value] = item.split('=');
                const [offset, length, fid] = value.split(',');
                const inputitem: OPIOItemType = {
                    name: key.trim(),
                    offset: parseInt(offset),
                    length: parseInt(length),
                    fid: isNaN(parseInt(fid)) ? -1 : parseInt(fid),
                };
                if (trinfo.input.findIndex(v =>
                    v.name === inputitem.name && v.fid === inputitem.fid) === -1)
                    trinfo.input.push(inputitem);
            }
        }

        for (const dataitem of output_data) {
            let ismulti = false;
            for (const item of dataitem.split('\n')) {
                if (item.startsWith('@START')) {
                    const t = item.slice(item.indexOf('_') + 1);
                    const [tr_desc, rest] = t.split('=');
                    const [max_count, multi_if_4, max_count_desc] = rest.split(',');
                    if (multi_if_4 === '4') {
                        ismulti = true;
                        trinfo.output_multi_info = {
                            tr_desc: tr_desc,
                            max_count: max_count === '*' ? -1 : parseInt(max_count),
                            max_count_desc: max_count_desc.trim(),
                        };
                    } else {
                        trinfo.output_single_info = {
                            tr_desc: tr_desc,
                            max_count: max_count === '*' ? -1 : parseInt(max_count),
                            max_count_desc: max_count_desc.trim(),
                        };
                    }
                } else {
                    const [key, value] = item.split('=');
                    const [offset, length, fid] = value.split(',');
                    const outputitem = {
                        name: key.trim(),
                        offset: parseInt(offset),
                        length: parseInt(length),
                        fid: isNaN(parseInt(fid)) ? -1 : parseInt(fid),
                    };
                    if (ismulti) {
                        if (trinfo.output_multi.findIndex(v =>
                            v.name === outputitem.name && v.fid === outputitem.fid) === -1)
                            trinfo.output_multi.push(outputitem);
                    } else {
                        if (trinfo.output_single.findIndex(v =>
                            v.name === outputitem.name && v.fid === outputitem.fid) === -1)
                            trinfo.output_single.push(outputitem);
                    }
                }
            }
        }

        return trinfo;
    }

    MakeTSCode(item: OPMetadataItemType) {
        let result = '';
        result += `export class TR_${item.tr_code}Input implements ITRInputBase {\n`;
        result += `    tr_code: string = '${item.tr_code}';\n`;
        for (const input of item.input) {
            result += `    '${input.name}': string = '';\n`;
        }
        result += `};\n`;

        if (item.output_multi.length > 0) {
            result += `export class TR_${item.tr_code}MultiItem {\n`;
            let lastitem = '';
            for (const output of item.output_multi) {
                if (output.name === lastitem) continue;
                result += `    '${output.name}': string = '';\n`;
                lastitem = output.name;
            }
            result += `};\n`;
        }

        result += `export class TR_${item.tr_code}Output implements ITROutputBase {\n`;
        if (item.output_multi.length > 0) {
            result += `    multiT: new () => TR_${item.tr_code}MultiItem;\n`;
            result += `    multi_items: TR_${item.tr_code}MultiItem[] = [];\n`;
            result += `    constructor() { this.multiT = TR_${item.tr_code}MultiItem; }\n`;
        } else {
            result += `    multiT = null;\n`;
            result += `    multi_items?: unknown[];\n`;
        }
        for (const output of item.output_single) {
            if (item.tr_code === 'OPW20009' && output.offset === 126) continue;//예외처리
            result += `    '${output.name}': string = '';\n`;
        }
        result += `};\n`;

        result += `/**\n * ${item.tr_desc}\n */\n`;
        result += `export class TR_${item.tr_code} extends TRBase<TR_${item.tr_code}Input, TR_${item.tr_code}Output> {\n`;
        result += `    constructor(input: TR_${item.tr_code}Input) {\n`;
        result += `        super(input, TR_${item.tr_code}Output);\n`;
        result += `        this.input.tr_code = '${item.tr_code}';\n`;
        result += `    }\n`;
        result += `};\n\n`;

        return result;
    }
}

if (require.main === module) {
    new OPMetadata();
}
