"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipment {
    insertDup(knex, data, firstData) {
        return knex.raw(knex('equipment')
            .insert(data)
            .toQuery() + ' ON DUPLICATE KEY UPDATE ' +
            Object.getOwnPropertyNames(firstData)
                .map((field) => `${field}=VALUES(${field})`)
                .join(', '));
    }
    get(knex) {
        return knex('equipment');
    }
    del(knex, id) {
        return knex('equipment').where('id', id).del();
    }
}
exports.Equipment = Equipment;
//# sourceMappingURL=equipment.js.map