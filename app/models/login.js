"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    login(knex, username, password) {
        return knex('account').where('username', username).andWhere('password', password)
            .select('username', 'pname', 'fname', 'lname');
    }
}
exports.Login = Login;
//# sourceMappingURL=login.js.map