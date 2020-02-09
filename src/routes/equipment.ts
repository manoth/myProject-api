'use strict';

import * as express from 'express';
const router = express.Router();

import { Equipment } from '../models/equipment';
const equipment = new Equipment();

/* GET home page. */
router.get('/', (req, res, next) => {
    let db = req.db;
    equipment.get(db).then((row: any) => {
        res.send({ ok: true, data: row });
    }).catch((err: any) => {
        res.send({ ok: false, err: err.message });
    });
});

router.get('/:id', (req, res, next) => {
    let db = req.db;
    let id = req.params.id;
    equipment.del(db, id).then((row: any) => {
        res.send({ ok: true });
    }).catch((err: any) => {
        res.send({ ok: false, err: err.message });
    });
});

router.post('/', (req, res, next) => {
    let db = req.db;
    let data = req.body;
    data.userid = req.decoded.username;
    data.d_update = db.fn.now();
    equipment.insertDup(db, data, data).then((row: any) => {
        res.send({ ok: true });
    }).catch((err: any) => {
        res.send({ ok: false, err: err.message });
    });
});

export default router;