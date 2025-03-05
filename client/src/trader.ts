import chalk from 'chalk';
import { KiwoomUtil } from './kiwoomutil';

export class Trader1 {
    private kiwoomutil: KiwoomUtil;
    private timer: NodeJS.Timeout | null = null;

    readonly code_default = '033160';
    private gap = 0.02;
    private trade_unit = 300000;

    constructor(kiwoomutil: KiwoomUtil) {
        this.kiwoomutil = kiwoomutil;
    }

    async start() {
        if (this.timer !== null) return;
        const infolist = await this.kiwoomutil.getStockInfo([this.code_default]);
        for (const info of infolist) {
            await this.kiwoomutil.updateStockList(info);
        }
        console.log(`[${chalk.green('Trader1')}] started.`);
        this.check();
        this.timer = setInterval(async () => { this.check(); }, 60 * 1000);
    }
    async stop() {
        if (this.timer === null) return;
        console.log(`[${chalk.red('Trader1')}] stopped.`);
        clearInterval(this.timer);
        this.timer = null;
    }
    isRunning() {
        return this.timer !== null;
    }

    async check(code = this.code_default) {
        const stockinfo = this.kiwoomutil.stockinfo_list[code];
        if (stockinfo === undefined) {
            console.log(`[${chalk.red('Trader1')}] cannot find stockinfo of ${code}.`);
            return;
        }

        // 전체 주문 리스트 중 해당 종목만 가져와서 체결시간순으로 정렬
        // 체결시간이 없는것들이 앞쪽에 있음
        const orderlist_all = await this.kiwoomutil.getOrderInfo();
        const orderlist = orderlist_all.filter(o => o.code === code)
            .sort((a, b) => a.time_executed.localeCompare(b.time_executed));

        // 매도와 매수가 하나씩 있으면 계속 기다림
        const orderlist_waiting = orderlist.filter(o => o.qty_executed === 0);
        if (orderlist_waiting.length === 2
            && orderlist_waiting[0].type !== orderlist_waiting[1].type
        ) {
            for (const item of orderlist_waiting) {
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
            return;
        }

        // 그 외의 경우 모든 주문 취소
        for (const order of orderlist_waiting) {
            await this.kiwoomutil.cancel(code, order.qty, order.orderno, order.type);
            await new Promise(resolve => setTimeout(resolve, 300));
        }

        const orderlist_completed = orderlist.filter(o => o.qty === o.qty_executed);
        const lastorder = orderlist_completed[orderlist_completed.length - 1];
        const baseprice = Math.abs(lastorder === undefined ? stockinfo.price : lastorder.price);

        // 새로운 주문 생성
        const buyprice = this.kiwoomutil.makePrice(baseprice * (1 - this.gap * 0.5));
        const buyqty = Math.round(this.trade_unit / buyprice);
        const sellprice = this.kiwoomutil.makePrice(baseprice * (1 + this.gap * 0.5));
        const sellqty = Math.round(this.trade_unit / sellprice);

        await this.kiwoomutil.getAccountStatus();
        const holdingitem = this.kiwoomutil.stockholding_list.find(h => h.code === code);
        if (holdingitem === undefined || holdingitem.current_count < sellqty) {
            await this.kiwoomutil.buy(code, buyqty * 3, baseprice);
            console.log(`[${chalk.green('Trader1')}] buy(baseprice) ${code} ${baseprice}x${buyqty}`);

        } else {
            await this.kiwoomutil.sell(code, sellqty, sellprice);
            console.log(`[${chalk.red('Trader1')}] sell ${code} ${sellprice}x${sellqty}`);

            await this.kiwoomutil.buy(code, buyqty, buyprice);
            console.log(`[${chalk.green('Trader1')}] buy ${code} ${buyprice}x${buyqty}`);
        }
    }
}