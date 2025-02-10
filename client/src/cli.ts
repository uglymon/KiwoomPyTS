import readline from 'readline';
import { KiwoomUtil } from './kiwoomutil';
import { KiwoomAPI } from './kiwoomapi';
import chalk from 'chalk';
import { TR_OPT10046 } from './trinfo';
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
        const result = await cli.kiwoomutil.sendTR(TR_OPT10046, {
            종목코드: '310210',
            틱구분: '1',
            체결강도구분: '1',
        });
        for (const item of result.multi_items) {
            console.log(item.체결시간, item.현재가, item.체결강도, item.체결강도5분, item.체결강도20분, item.체결강도60분);
        }
        let next = result.next;

        while (next) {
            const result = await cli.kiwoomutil.sendTR(TR_OPT10046, {
                종목코드: '310210',
                틱구분: '1',
                체결강도구분: '1',
            }, true);
            for (const item of result.multi_items) {
                console.log(item.체결시간, item.현재가, item.체결강도, item.체결강도5분, item.체결강도20분, item.체결강도60분);
            }
            next = result.next;
        }
    }

    async getRealStockInfo(cli: CLI) {
        console.log(cli.kiwoomutil.stockinfo_list);
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