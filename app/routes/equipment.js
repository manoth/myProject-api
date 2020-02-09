'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const equipment_1 = require("../models/equipment");
const equipment = new equipment_1.Equipment();
router.get('/', (req, res, next) => {
    let db = req.db;
    equipment.get(db).then((row) => {
        res.send({ ok: true, data: row });
    }).catch((err) => {
        res.send({ ok: false, err: err.message });
    });
});
router.get('/:id', (req, res, next) => {
    let db = req.db;
    let id = req.params.id;
    equipment.del(db, id).then((row) => {
        res.send({ ok: true });
    }).catch((err) => {
        res.send({ ok: false, err: err.message });
    });
});
router.post('/', (req, res, next) => {
    let db = req.db;
    let data = req.body;
    data.userid = req.decoded.username;
    data.d_update = db.fn.now();
    equipment.insertDup(db, data, data).then((row) => {
        res.send({ ok: true });
    }).catch((err) => {
        res.send({ ok: false, err: err.message });
    });
});
exports.default = router;
//# sourceMappingURL=equipment.js.map