'use strict';

import * as express from 'express';
const router = express.Router();

import { JwtModel } from '../configs/jwt';
const jwt = new JwtModel();
import { Login } from '../models/login';
const login = new Login();

/* GET home page. */
router.post('/', (req, res, next) => {
    let db = req.db;
    let username = req.body.username;
    let password = req.body.password;
    login.login(db, username, password).then(async (row: any) => {
        if (row.length > 0) {
            let token = await jwt.sign(row[0], '1d');
            res.send({ ok: true, token: token });
        } else {
            res.send({ ok: false, err: 'Username หรือ Password ไม่ถูกต้อง!' });
        }
    }).catch((err: any) => {
        res.send({ ok: false, err: err.message });
    });
});

export default router;