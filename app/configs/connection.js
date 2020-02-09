"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
class Connection {
    mysql() {
        let connection = {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DBNAME,
            timezone: 'UTC',
            charset: process.env.MYSQL_CHARSET,
            port: +process.env.MYSQL_PORT
        };
        return Knex({
            client: 'mysql',
            connection: connection,
            pool: {
                min: 0,
                max: 7,
                afterCreate: (conn, done) => {
                    conn.query('SET NAMES utf8', (err) => {
                        done(err, conn);
                    });
                }
            },
            debug: true,
            acquireConnectionTimeout: 10000
        });
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map