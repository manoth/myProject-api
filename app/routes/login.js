'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const jwt_1 = require("../configs/jwt");
const jwt = new jwt_1.JwtModel();
const login_1 = require("../models/login");
const login = new login_1.Login();
router.post('/', (req, res, next) => {
    let db = req.db;
    let username = req.body.username;
    let password = req.body.password;
    login.login(db, username, password).then((row) => __awaiter(void 0, void 0, void 0, function* () {
        if (row.length > 0) {
            let token = yield jwt.sign(row[0], '1d');
            res.send({ ok: true, token: token });
        }
        else {
            res.send({ ok: false, err: 'Username หรือ Password ไม่ถูกต้อง!' });
        }
    })).catch((err) => {
        res.send({ ok: false, err: err.message });
    });
});
exports.default = router;
//# sourceMappingURL=login.js.map