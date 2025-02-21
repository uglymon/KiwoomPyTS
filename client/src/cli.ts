import readline from 'readline';
import { KiwoomUtil } from './kiwoomutil';
import { KiwoomAPI } from './kiwoomapi';
import chalk from 'chalk';
import { Trader1 } from './trader';
import { getHangulCount } from './util';
import Vorpal from 'vorpal';

export class CLI {
    private kiwoomapi: KiwoomAPI;
    private kiwoomutil: KiwoomUtil;
    private onexit: () => void;
    private trader: Trader1;

    constructor(kiwoomapi: KiwoomAPI, oninit: () => void, onexit: () => void) {
        this.kiwoomapi = kiwoomapi;
        this.kiwoomutil = new KiwoomUtil(kiwoomapi, oninit);
        this.trader = new Trader1(this.kiwoomutil);

        this.onexit = onexit;
        process.on('exit', async () => {
            this.kiwoomapi.SetRealRemove('ALL', 'ALL');
            this.trader.stop();
            this.onexit();
        });
    }

    start() {
        const vorpal = new Vorpal();

        vorpal.command('show transactions')
            .option('-s, --stock <stock_code>', '6 digit stock code')
            .option('-d, --date <date>', 'date (YYYYMMDD)')
            .option('--detail', 'show detail')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('trade auto <command>', 'command : start | stop | status')
            .validate(args => {
                if (['start', 'stop', 'status'].includes(args.command)) {
                    return true;
                }
                return chalk.red('Invalid trade auto command :')
                    + chalk.yellow(' command must be start | stop | status');
            })
            .action(async args => {
                if (typeof args === 'string') return;
                if (args['command'] === 'start') {
                    await this.trader.start();
                } else if (args.command === 'stop') {
                    await this.trader.stop();
                } else if (args.command === 'status') {
                    const status = this.trader.isRunning();
                    console.log('AutoTrader Status :', status ? chalk.green('running') : chalk.red('stopped'));
                }
            });

        vorpal.command('order create <action> <stock_code> <price> <quantity>', 'action : buy | sell')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('order cancel <order_id>', 'order id')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('order status')
            .option('-s, --stock <stock_code>', '6 digit stock code')
            .option('-i, --id <order_id>', 'order id')
            .option('-d, --date <date>', 'date (YYYYMMDD)')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('portfolio')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('portfolio detail')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('quote price <stock_code>')
            .option('-d, --date <date>', 'date (YYYYMMDD)')
            .action(async (args) => {
                console.log(args);
            });

        vorpal.command('getRealStockInfo')
            .action(async () => {
                console.log(this.kiwoomutil.stockinfo_list);
            });

        vorpal.command('getAccountStatus')
            .action(async () => {
                console.log(await this.kiwoomutil.getAccountStatus());
            });

        vorpal.command('test1').action(async () => {
            await this.cmd_test1(this);
        });

        vorpal.command('test2').action(async () => {
            await this.cmd_test2(this);
        });

        vorpal.delimiter(`${chalk.greenBright('>')}${chalk.green('>')}`);
        vorpal.show();
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

    async cmd_test2(cli: CLI, ...args: string[]) {
        const date_str = args[0];
        const result = await cli.kiwoomutil.getOrderInfo(date_str);
        for (const item of result) {
            console.log(
                item.orderno.toString().padStart(6),
                item.code, item.name.padEnd(16 - getHangulCount(item.name)),
                item.type.toString().padStart(4),
                item.price.toString().padStart(8),
                item.qty_executed.toString().padStart(4),
                '/' + item.qty.toString().padStart(3),
                (item.price * item.qty_executed).toString().padStart(10)
            );
        }
    }
}