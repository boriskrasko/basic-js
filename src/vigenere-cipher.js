const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true){
        this.direct = direct;
    }
    encrypt(message,key) {
        if (message === undefined || key === undefined) {
            throw Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        if (key.length < message.length) {
            let k = message.length - key.length;
            for (let i = 0; i<k; i++) {
                key+=key[i];
            }
        }
        let result = '', count = 0;
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
                result += message[i];
                continue;
            }
            let m = (message.charCodeAt(i)-65) + (key.charCodeAt(count)-65);
            m%=26;
            let char = String.fromCharCode(m+65);
            result+=char;
            count++;
        }
        result = result.toUpperCase();
        if (this.direct) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    }


    decrypt(message,key) {
        if (message === undefined || key === undefined) {
            throw Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        if (key.length < message.length) {
            let k = message.length - key.length;
            for (let i = 0; i<k; i++) {
                key+=key[i];
            }
        }
        let result = '', count = 0;
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
                result += message[i];
                continue;
            }
            let m = (message.charCodeAt(i)-65) - (key.charCodeAt(count)-65);
            if (m<65) {
                m += 26;
            }
            m%=26;
            let char = String.fromCharCode(m+65);
            result+=char;
            count++;
        }
        result = result.toUpperCase();
        if (this.direct) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;

