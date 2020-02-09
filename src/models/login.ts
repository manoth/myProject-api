import * as Knex from 'knex';

export class Login {
    login(knex: Knex, username: string, password: string) {
        return knex('account').where('username', username).andWhere('password', password)
            .select('username', 'pname', 'fname', 'lname');
    }
}