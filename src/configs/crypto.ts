import * as CryptoJs from 'crypto-js';

export class CryptoModel {
    encrypt(data: string) {
        let ciphertext = CryptoJs.AES.encrypt(data, process.env.SECRET_KEY);
        return ciphertext.toString();
    }
    decrypt(enc: string) {
        let bytes = CryptoJs.AES.decrypt(enc, process.env.SECRET_KEY);
        return bytes.toString(CryptoJs.enc.Utf8);
    }
    // base64 encoded
    utoa(str: string) {
        const encryptedWord = CryptoJs.enc.Utf8.parse(str);
        return CryptoJs.enc.Base64.stringify(encryptedWord);
    }
    // base64 decoded
    atou(enc: string) {
        const encryptedWord = CryptoJs.enc.Base64.parse(enc);
        return CryptoJs.enc.Utf8.stringify(encryptedWord);
    }
    // md5
    md5(str: any) {
        return CryptoJs.MD5(str).toString();
    }
}