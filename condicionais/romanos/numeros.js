"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numeros = /** @class */ (function () {
    function Numeros(numero) {
        this.numero = numero;
    }
    Numeros.prototype.romano = function () {
        switch (this.numero) {
            case 1: return 'I';
            case 2: return 'II';
            case 3: return 'III';
            case 4: return 'IV';
            case 5: return 'V';
            case 6: return 'VII';
            case 7: return 'VII';
            case 8: return 'VIII';
            case 9: return 'IX';
            case 10: return 'X';
        }
        return 'fora de intervalo!';
    };
    return Numeros;
}());
exports.default = Numeros;
