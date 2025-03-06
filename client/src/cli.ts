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

        vorpal.command('show transactions by date')
            .action(async () => {
                const transactions = await this.kiwoomutil.getAllTransactions();
                for (const [date, dateitems] of Object.entries(transactions)) {
                    let total_buy = 0;
                    let total_buy_current = 0;
                    let total_sell = 0;
                    const codelist = dateitems.map(i => i.종목번호.slice(-6))
                        .filter(code => code !== '');
                    console.log('cli', codelist);
                    const stockinfolist = await this.kiwoomutil.getStockInfo(codelist);
                    for (const item of dateitems) {
                        const stockinfo = stockinfolist.find(
                            i => i.종목코드.slice(-6) === item.종목번호.slice(-6));
                        const currentprice = Math.abs(parseInt(stockinfo?.현재가 ?? '0'));
                        if (this.trader.default_items.some(item => stockinfo?.종목코드.endsWith(item.code))) continue;

                        if (item.주문유형구분.includes('매도')) {
                            total_sell += parseInt(item.체결수량) * parseInt(item.체결단가);
                        } else {
                            total_buy += parseInt(item.체결수량) * parseInt(item.체결단가);
                            total_buy_current += parseInt(item.체결수량) * currentprice;
                        }
                    }
                    const total_buy_ratio = total_buy_current / total_buy;
                    console.log(date,
                        chalk.blue(total_buy.toString().padStart(10)),
                        chalk.blueBright(total_buy_current.toString().padStart(10)),
                        chalk.magenta(total_buy_ratio.toFixed(6).padStart(10)),
                        chalk.red(total_sell.toString().padStart(10)),
                    );
                    await new Promise(resolve => setTimeout(resolve, 200));
                }
            });

        vorpal.command('show transaction by code <code>')
            .validate(args => {
                const code = Number(args.code);
                if (isNaN(code) || code > 999999) {
                    return chalk.red('Invalid code : ') + chalk.yellow(args.code);
                }
                return true;
            })
            .action(async (args) => {
                if (typeof args === 'string') return;
                const code = Number(args.code).toString().padStart(6, '0');
                const name = await this.kiwoomapi.GetMasterCodeName(code);
                if (name === '') {
                    console.log(chalk.red('Invalid code : ') + chalk.yellow(code));
                    return;
                }
                const transactions = await this.kiwoomutil.getAllTransactions();
                let total_buy_count = 0;
                let total_buy_value = 0;
                let total_sell_count = 0;
                let total_sell_value = 0;
                for (const [, dateitems] of Object.entries(transactions)) {
                    for (const item of dateitems) {
                        if (item.종목번호.slice(-6) !== code) continue;
                        if (item.주문유형구분.includes('매도')) {
                            total_sell_count += parseInt(item.체결수량);
                            total_sell_value += parseInt(item.체결수량) * parseInt(item.체결단가);
                        } else {
                            total_buy_count += parseInt(item.체결수량);
                            total_buy_value += parseInt(item.체결수량) * parseInt(item.체결단가);
                        }
                    }
                }
                const avg_buy_price = total_buy_value / total_buy_count;
                const avg_sell_price = total_sell_value / total_sell_count;
                console.log(name,
                    chalk.blue(total_buy_count.toString().padStart(10)),
                    chalk.blueBright(total_buy_value.toString().padStart(10)),
                    chalk.magenta(avg_buy_price.toFixed(2).padStart(10)),
                    chalk.red(total_sell_count.toString().padStart(10)),
                    chalk.redBright(total_sell_value.toString().padStart(10)),
                    chalk.magenta(avg_sell_price.toFixed(2).padStart(10)),
                );

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

        if (this.kiwoomutil.server_type === 'TEST') {
            vorpal.delimiter(`${chalk.yellow('TEST')}${chalk.greenBright('>')}${chalk.green('>')}`);
        } else {
            vorpal.delimiter(`${chalk.red('REAL')}${chalk.magentaBright('>')}${chalk.magenta('>')}`);
        }
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