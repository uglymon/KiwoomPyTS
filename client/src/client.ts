import WebSocket from 'ws';
import { KiwoomAPI } from './kiwoomapi';
import { TestTrader } from './testtrader';

export class WSClient {
    private ws?: WebSocket;
    constructor() {
    }
    async connect(url: string) {
        return new Promise<WebSocket>(resolve => {
            const ws = new WebSocket(url);
            this.ws = ws;
            ws.on('open', () => {
                console.log('Connected to the server');
                resolve(ws);
            });
            ws.on('close', () => {
                console.log('Disconnected from the server');
            });
            ws.on('error', (error) => {
                console.error('WebSocket error:', error);
            });
        });
    }

    close() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

if (require.main === module) {
    const main = async () => {
        const client = new WSClient();
        const ws = await client.connect('ws://127.0.0.1:5000');
        const kiwoom = new KiwoomAPI(ws);

        process.on('SIGINT', () => {
            client.close();
        });

        const trader = new TestTrader(kiwoom);
        trader.test();
    }

    main();
}