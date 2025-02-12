import readline from 'readline';
import { KiwoomUtil } from './kiwoomutil';
import { KiwoomAPI } from './kiwoomapi';
import chalk from 'chalk';
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
            completer: (line: string) => {
                const completions = ['exit', 'quit', 'q'];
                for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
                    if (key.startsWith('cmd_') && typeof this[key as keyof CLI] === 'function') {
                        completions.push(key.replace('cmd_', ''));
                    }
                }
                const result = completions.filter(cmd => cmd.toLowerCase().startsWith(line.toLowerCase()));
                return [result, line];
            }
        });
        rl.setPrompt(`${chalk.greenBright('>')}${chalk.green('> ')}`);
        rl.prompt();


        rl.on('line', async (line) => {
            if (['exit', 'quit', 'q'].includes(line.toLowerCase())) {
                rl.close();
                return;
            }
            const commands = line.split(' ').map(cmd => cmd.trim());
            const funcname = `cmd_${commands[0]}` as keyof CLI;
            if (typeof this[funcname] === 'function') {
                const func = this[funcname] as unknown as (cli: CLI, ...args: string[]) => Promise<void>;
                await func(this, ...commands.slice(1).map(cmd => cmd.trim()).filter(cmd => cmd !== ''));
            }
            rl.prompt();

        });
        rl.on('close', async () => {
            await this.kiwoomapi.SetRealRemove('ALL', 'ALL');
            this.onexit();
        });
    }

    async cmd_getRealStockInfo(cli: CLI) {
        console.log(cli.kiwoomutil.stockinfo_list);
    }

    async cmd_getAccountStatus(cli: CLI) {
        await cli.kiwoomutil.getAccountStatus();
    }

    async cmd_help(cli: CLI, ...args: string[]) {
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

    async cmd_test1(cli: CLI) {
        await cli.kiwoomutil.buy_program();
    }

    async cmd_test2(cli: CLI) {
        const result = await cli.kiwoomutil.getOrderInfo();
        for (const item of result) {
            console.log(
                item.orderno.toString().padStart(6),
                item.code, item.name.padStart(16 - item.name.length),
                item.type.toString().padStart(4),
                item.price.toString().padStart(8),
                item.qty.toString().padStart(4),
                item.qty_executed.toString().padStart(4),
                (item.price * item.qty_executed).toString().padStart(10)

            );
        }
    }
}