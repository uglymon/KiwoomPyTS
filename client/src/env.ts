import 'dotenv/config';

export class Env {
    static get API_ADDR() {
        if (process.env.API_ADDR === undefined) {
            return 'ws://127.0.0.1:5000';
        }
        return process.env.API_ADDR;
    }
}