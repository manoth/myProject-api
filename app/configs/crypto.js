"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJs = require("crypto-js");
class CryptoModel {
    encrypt(data) {
        let ciphertext = CryptoJs.AES.encrypt(data, process.env.SECRET_KEY);
        return ciphertext.toString();
    }
    decrypt(enc) {
        let bytes = CryptoJs.AES.decrypt(enc, process.env.SECRET_KEY);
        return bytes.toString(CryptoJs.enc.Utf8);
    }
    utoa(str) {
        const encryptedWord = CryptoJs.enc.Utf8.parse(str);
        return CryptoJs.enc.Base64.stringify(encryptedWord);
    }
    atou(enc) {
        const encryptedWord = CryptoJs.enc.Base64.parse(enc);
        return CryptoJs.enc.Utf8.stringify(encryptedWord);
    }
    md5(str) {
        return CryptoJs.MD5(str).toString();
    }
}
exports.CryptoModel = CryptoModel;
//# sourceMappingURL=crypto.js.map