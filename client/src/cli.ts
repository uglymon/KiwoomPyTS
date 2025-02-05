import readline from 'readline';
import { KiwoomUtil } from './kiwoomutil';
import { KiwoomAPI } from './kiwoomapi';
import chalk from 'chalk';
import { TR_OPT10046, TR_OPW00001 } from './trinfo';
export class CLI {
    private kiwoomapi: KiwoomAPI;
    private kiwoomutil: KiwoomUtil;
    private onexit: () => void;

    constructor(kiwoomapi: KiwoomAPI, onexit: () => void) {
        this.kiwoomapi = kiwoomapi;
        this.kiwoomutil = new KiwoomUtil(kiwoomapi);
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