import * as Knex from 'knex';

declare global {
    namespace Express {
        export interface Application {
            io: any;
        }
        export interface Request {
            io: any;
            db: Knex;
            decoded: any;
        }
    }
}