import readline from 'readline';
import { KiwoomUtil } from './kiwoomutil';
import { KiwoomAPI } from './kiwoomapi';
import chalk from 'chalk';
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
                await func(this, ...commands.slice(1));
            }
            rl.prompt();
        });
        rl.on('close', () => {
            this.onexit();
        });
    }

    async test1(cli: CLI) {
        await cli.kiwoomapi.SetRealReg('0101', '005930', '10', '0');
    }
}