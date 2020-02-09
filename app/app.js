'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const envPath = path.join(__dirname, '../config');
require('dotenv').config({ path: envPath });
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const login_1 = require("./routes/login");
const equipment_1 = require("./routes/equipment");
const index_1 = require("./routes/index");
const connection_1 = require("./configs/connection");
const connection = new connection_1.Connection();
const jwt_1 = require("./configs/jwt");
const jwt = new jwt_1.JwtModel();
const crypto_1 = require("./configs/crypto");
const crypto = new crypto_1.CryptoModel();
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use((req, res, next) => {
    req.db = connection.mysql();
    next();
});
let reqToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        req.token = req.headers.authorization.split(' ')[1];
    }
    else if (req.query && req.query.token) {
        req.token = req.query.token;
    }
    else {
        req.token = req.body.token;
    }
    next();
};
let jwtVerify = (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.token);
        next();
    }
    catch (err) {
        return res.send({ ok: false, error: 'Token not validated.', code: 403 });
    }
};
app.use('/login', login_1.default);
app.use('/equipment', reqToken, jwtVerify, equipment_1.default);
app.use('/', index_1.default);
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            title: 'error',
            message: err.message,
            error: err
        });
    });
}
app.use((err, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
        title: 'error',
        message: err.message,
        error: {}
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map