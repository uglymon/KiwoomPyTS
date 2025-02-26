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
        this.kiwoomutil = new KiwoomUtil(kiwoomapi, oninit, false);
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

        vorpal.find('exit').remove();
        vorpal.command('exit', 'Exits application.').alias('quit').alias('q')
            .action(async () => {
                await this.kiwoomapi.SetRealRemove('ALL', 'ALL');
                this.trader.stop();
                this.onexit();
                await new Promise(resolve => setTimeout(resolve, 300));
                process.exit(0);
            });

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
                return chalk.red('Invalid trade auto command : ')
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
                    console.log('AutoTrader Status : ', status ? chalk.green('running') : chalk.red('stopped'));
                }
            });

        vorpal.command('order create <action> <stock_code> <price> <quantity>', 'action : buy | sell')
            .validate(args => {
                if (args.action !== 'buy' && args.action !== 'sell') {
                    return chalk.red('Invalid action : ') + chalk.yellow(args.action);
                }
                const stockcode = Number(args.stock_code);
                if (isNaN(stockcode) || stockcode > 999999) {
                    return chalk.red('Invalid stock code : ') + chalk.yellow(args.stock_code);
                }
                const price = Number(args.price);
                if (isNaN(price) || price <= 0) {
                    return chalk.red('Invalid price : ') + chalk.yellow(args.price);
                }
                if (this.kiwoomutil.makePrice(price) !== price) {
                    return chalk.red('Invalid price unit : ') + chalk.yellow(args.price)
                        + chalk.yellow(' (' + this.kiwoomutil.makePrice(price) + ')');
                }
                if (isNaN(Number(args.quantity)) || Number(args.quantity) <= 0) {
                    return chalk.red('Invalid quantity : ') + chalk.yellow(args.quantity);
                }
                return true;
            })
            .action(async (args) => {
                if (typeof args === 'string') return;
                const stockcode = args.stock_code.toString().padStart(6, '0');
                const stockname = await this.kiwoomapi.GetMasterCodeName(stockcode.toString().padStart(6, '0'));
                if (stockname === '') {
                    console.log(chalk.red('Invalid stock code : ') + chalk.yellow(stockcode));
                    return;
                }
                const price = Number(args.price);
                const quantity = Number(args.quantity);
                const orderno = await this.kiwoomutil.buy(stockcode, quantity, price);
                if (orderno === 0) {
                    console.log(chalk.red('Failed to order : ') + chalk.yellow(stockcode));
                } else {
                    console.log(chalk.green('Order created : ') + chalk.yellow(stockcode));
                }
            });

        vorpal.command('order cancel <order_id>', 'order id')
            .validate(args => {
                const orderno = Number(args.order_id);
                if (isNaN(orderno) || orderno <= 0) {
                    return chalk.red('Invalid order id : ') + chalk.yellow(args.order_id);
                }
                return true;
            })
            .action(async (args) => {
                if (typeof args === 'string') return;
                const orderno = Number(args.order_id);
                const orderinfo = await this.kiwoomutil.getOrderInfo('', orderno, '');
                if (orderinfo.length === 0) {
                    console.log(chalk.red('Invalid order id : ') + chalk.yellow(orderno));
                    return;
                }
                const result = await this.kiwoomutil.cancel(
                    orderinfo[0].code, orderinfo[0].qty, orderno, orderinfo[0].type);
                if (result) {
                    console.log(chalk.green('Order canceled : ') + chalk.yellow(orderno));
                } else {
                    console.log(chalk.red('Failed to cancel : ') + chalk.yellow(orderno));
                }
            });

        vorpal.command('order status')
            .option('-s, --stock <stock_code>', '6 digit stock code')
            .option('-i, --id <order_id>', 'order id')
            .option('-d, --date <date>', 'date (YYYYMMDD)')
            .types({ string: ['s', 'stock', 'd', 'date'] })
            .validate(args => {
                const stock = args.options.stock;
                if (stock) {
                    if (stock.length !== 6 || isNaN(Number(stock))) {
                        return chalk.red('Invalid stock code : ') + chalk.yellow(stock);
                    }
                }
                const id = args.options.id;
                if (id) {
                    if (isNaN(Number(id))) {
                        return chalk.red('Invalid order id : ') + chalk.yellow(id);
                    }
                }
                const date = args.options.date;
                if (date) {
                    if (date.length !== 8 || isNaN(Number(date))) {
                        return chalk.red('Invalid date : ') + chalk.yellow(date);
                    }
                }
                return true;
            })
            .action(async (args) => {
                if (typeof args === 'string') return;
                const stock = args.options.stock ?? '';
                const id = args.options.id ?? 0;
                const date = args.options.date ?? '';
                const result = await this.kiwoomutil.getOrderInfo(stock, id, date);
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