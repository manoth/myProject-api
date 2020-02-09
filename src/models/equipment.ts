import * as Knex from 'knex';

export class Equipment {

    insertDup(knex: Knex, data: any, firstData: any) {
        return knex.raw(
            knex('equipment')
                .insert(data)
                .toQuery() + ' ON DUPLICATE KEY UPDATE ' +
            Object.getOwnPropertyNames(firstData)
                .map((field) => `${field}=VALUES(${field})`)
                .join(', ')
        );
    }

    get(knex: Knex) {
        return knex('equipment');
    }

    del(knex: Knex, id: string) {
        return knex('equipment').where('id', id).del();
    }
}