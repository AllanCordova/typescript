"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculadora = /** @class */ (function () {
    function Calculadora(tempo, letras) {
        if (tempo === void 0) { tempo = 0; }
        if (letras === void 0) { letras = 0; }
        this.time = tempo;
        this.caracter = letras;
    }
    Calculadora.prototype.forMinuto = function () {
        if (this.time == 0 && this.caracter == 0) {
            return 0;
        }
        this.time /= 60;
        this.caracter /= this.time;
        return this.caracter;
    };
    return Calculadora;
}());
exports.default = Calculadora;
