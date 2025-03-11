import chalk from 'chalk';
import { KiwoomUtil } from './kiwoomutil';

export type TradeItemType = {
    code: string;
    gap: number;
    check_interval: number;
    trade_unit: number;
}

export class Trader1 {
    private kiwoomutil: KiwoomUtil;
    private timer: (NodeJS.Timeout | null)[] = [];

    readonly default_items: TradeItemType[] = [
        /* 엠케이전자 */
        { code: '033160', gap: 0.02, check_interval: 30, trade_unit: 400000 },
        /* 삼성전자 */
        { code: '005930', gap: 0.02, check_interval: 30, trade_unit: 500000 },
    ];

    readonly starttime = '09:01:00';
    readonly endtime = '15:29:00';

    constructor(kiwoomutil: KiwoomUtil) {
        this.kiwoomutil = kiwoomutil;
        for (let i = 0; i < this.default_items.length; i++) {
            this.timer.push(null);
        }
    }

    async start() {
        if (this.timer[0] !== null) return;
        const infolist = await this.kiwoomutil.getStockInfo(this.default_items.map(i => i.code));
        for (const info of infolist) {
            await this.kiwoomutil.updateStockList(info);
        }
        console.log(`[${chalk.green('Trader1')}] started.`);
        for (let i = 0; i < this.default_items.length; i++) {
            const item = this.default_items[i];
            await this.check(item);
            this.timer[i] = setInterval(async () => { await this.check(item); },
                item.check_interval * 1000);
        }
    }

    async stop() {
        console.log(`[${chalk.red('Trader1')}] stopped.`);
        for (let i = 0; i < this.default_items.length; i++) {
            const timer = this.timer[i];
            if (timer !== null) {
                clearInterval(timer);
                this.timer[i] = null;
            }
        }
    }
    isRunning() {
        return this.timer[0] !== null;
    }

    async check(item: TradeItemType) {
        const now = new Date();
        const start = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${this.starttime}`);
        const end = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${this.endtime}`);
        if (now < start || now > end) return;

        const code = item.code;
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

        // 주식보유가 없어서 매수주문이 하나만 있는경우도 계속 기다림
        if (orderlist_waiting.length === 1 && orderlist_waiting[0].type === 'buy') {
            const order = orderlist_waiting[0];
            if (order.price * order.qty > item.trade_unit * 2) return;
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
        const buyprice = this.kiwoomutil.makePrice(baseprice * (1 - item.gap * 0.5));
        const buyqty = Math.round(item.trade_unit / buyprice);
        const sellprice = this.kiwoomutil.makePrice(baseprice * (1 + item.gap * 0.5));
        const sellqty = Math.round(item.trade_unit / sellprice);

        await this.kiwoomutil.getAccountStatus();
        const holdingitem = this.kiwoomutil.stockholding_list.find(h => h.code === code);
        if (holdingitem === undefined || holdingitem.current_count < sellqty) {
            const basebuyprice = this.kiwoomutil.makePrice(baseprice * 1.002);
            await this.kiwoomutil.buy(code, Math.floor(buyqty * 2.5), basebuyprice);
            console.log(`[${chalk.green('Trader1')}] buy(baseprice) ${code} ${basebuyprice}x${Math.floor(buyqty * 2.5)}`);

        } else {
            await this.kiwoomutil.sell(code, sellqty, sellprice);
            console.log(`[${chalk.red('Trader1')}] sell ${code} ${sellprice}x${sellqty}`);

            await this.kiwoomutil.buy(code, buyqty, buyprice);
            console.log(`[${chalk.green('Trader1')}] buy ${code} ${buyprice}x${buyqty}`);
        }
    }
}