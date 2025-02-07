import readline from 'readline';
import { KiwoomUtil } from './kiwoomutil';
import { KiwoomAPI } from './kiwoomapi';
import chalk from 'chalk';
import { TR_OPT10046, TR_OPW00001, TR_OPW00007, TR_OPW00009, TR_OPW00018 } from './trinfo';
export class CLI {
    private kiwoomapi: KiwoomAPI;
    private kiwoomutil: KiwoomUtil;
    private onexit: () => void;

    constructor(kiwoomapi: KiwoomAPI, oninit: () => void, onexit: () => void) {
        this.kiwoomapi = kiwoomapi;
        this.kiwoomutil = new KiwoomUtil(kiwoomapi, oninit);
        this.onexit = onexit;
    }

    start() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.setPrompt(`${chalk.greenBright('>')}${chalk.green('> ')}`);
        rl.prompt();
        rl.on('line', async (line) => {
            if (['exit', 'quit', 'q'].includes(line.toLowerCase())) {
                rl.close();
                return;
            }
            const commands = line.split(' ').map(cmd => cmd.trim());
            const command = commands[0] as keyof CLI;
            if (typeof this[command] === 'function') {
                const func = this[command] as unknown as (cli: CLI, ...args: string[]) => Promise<void>;
                await func(this, ...commands.slice(1).map(cmd => cmd.trim()).filter(cmd => cmd !== ''));
            }
            rl.prompt();
        });
        rl.on('close', () => {
            this.onexit();
        });
    }

    async test1(cli: CLI) {
        // await cli.kiwoomapi.SetRealReg('0101', '005930', '10', '0');
        await cli.kiwoomutil.test2();
    }

    async test2(cli: CLI) {
        const result = await cli.kiwoomutil.sendTR(TR_OPW00001, {
            계좌번호: '8093398911',
            비밀번호: '',
            비밀번호입력매체구분: '00',
            조회구분: '2',
        });
        console.log(result);
    }

    async test3(cli: CLI) {
        const result = await cli.kiwoomutil.sendTR(TR_OPT10046, {
            종목코드: '005930',
            틱구분: '1',
            체결강도구분: '1',
        });
        console.log(result);
    }

    async test4(cli: CLI) {
        const result = await cli.kiwoomutil.sendTR(TR_OPW00018, {
            계좌번호: '8093398911',
            비밀번호: '0000',
            비밀번호입력매체구분: '00',
            조회구분: '2',
        });
        console.log(result);
        for (const item of result.multi_items) {
            const info = {
                code: item.종목번호,
                name: item.종목명,
                get_price: parseInt(item.매입가),
                count: parseInt(item.보유수량),
                current_price: parseInt(item.현재가),
                get_value: 0,
                current_value: 0,
                current_value_ratio: 0,
            }
            info.get_value = info.get_price * info.count;
            info.current_value = info.current_price * info.count;
            info.current_value_ratio = info.current_value / info.get_value;
            console.log(info);
        }
    }

    async test5(cli: CLI) {
        const result = await cli.kiwoomutil.sendTR(TR_OPW00007, {
            주문일자: '20250206',
            계좌번호: '8093398911',
            비밀번호: '',
            비밀번호입력매체구분: '00',
            조회구분: '4',
            주식채권구분: '1',
            매도수구분: '0',
            종목코드: '',
            시작주문번호: '',
        });
        console.log(result);
    }

    async test6(cli: CLI) {
        const result = await cli.kiwoomutil.sendTR(TR_OPW00009, {
            주문일자: '20250206',
            계좌번호: '8093398911',
            비밀번호: '',
            비밀번호입력매체구분: '00',
            주식채권구분: '1',
            시장구분: '0',
            매도수구분: '0',
            조회구분: '0',
            종목코드: '',
            시작주문번호: '0',
        });
        console.log(result);
    }

    async getAccountStatus(cli: CLI) {
        await cli.kiwoomutil.getAccountStatus();
    }

    async help(cli: CLI, ...args: string[]) {
        console.log('help', args);
        if (args[0] !== undefined) {
            const arg = args[0].toUpperCase();
            if (arg.length === 8) {
                const inputT = eval(`require('./trinfo').TR_${arg}Input`) as new () => unknown;
                if (inputT === undefined) {
                    console.log(`${chalk.red('Error:')} TR ${chalk.yellow(arg)} is not found`);
                    return;
                }
                const input = new inputT();
                console.log(input);
            }

        }
    }
}