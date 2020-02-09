"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class JwtModel {
    constructor() {
        this.secretKey = process.env.SECRET_KEY;
    }
    sign(payload, expiresIn) {
        let obj = JSON.parse(JSON.stringify(payload));
        return jwt.sign(obj, this.secretKey, { expiresIn: expiresIn });
    }
    verify(token) {
        return jwt.verify(token, this.secretKey);
    }
}
exports.JwtModel = JwtModel;
//# sourceMappingURL=jwt.js.map