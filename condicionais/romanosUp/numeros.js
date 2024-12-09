"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = /** @class */ (function () {
    function Numero(numero) {
        this.numero = numero;
    }
    Numero.prototype.upRomano = function () {
        if (this.numero < 11) {
            return "".concat(this.romano());
        }
        if (this.numero < 20) {
            this.numero -= 10;
            return "X".concat(this.romano());
        }
        if (this.numero < 30) {
            this.numero -= 20;
            return "XX".concat(this.romano());
        }
        if (this.numero < 40) {
            this.numero -= 30;
            return "XXX".concat(this.romano());
        }
        if (this.numero < 50) {
            this.numero -= 40;
            return "XL".concat(this.romano());
        }
        if (this.numero < 60) {
            this.numero -= 50;
            return "L".concat(this.romano());
        }
        if (this.numero < 70) {
            this.numero -= 60;
            return "LX".concat(this.romano());
        }
        if (this.numero < 80) {
            this.numero -= 70;
            return "LXX".concat(this.romano());
        }
        if (this.numero < 90) {
            this.numero -= 80;
            return "LXXX".concat(this.romano());
        }
        if (this.numero < 100) {
            this.numero -= 90;
            return "XC".concat(this.romano());
        }
        if (this.numero == 100) {
            return "C";
        }
        return "Valor fora do intervalo suportado!";
    };
    Numero.prototype.romano = function () {
        switch (this.numero) {
            case 0: return '';
            case 1: return 'I';
            case 2: return 'II';
            case 3: return 'III';
            case 4: return 'IV';
            case 5: return 'V';
            case 6: return 'VI';
            case 7: return 'VII';
            case 8: return 'VIII';
            case 9: return 'IX';
            case 10: return 'X';
        }
        return 'fora de intervalo!';
    };
    return Numero;
}());
exports.default = Numero;
