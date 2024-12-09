"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numeros = /** @class */ (function () {
    function Numeros(n) {
        this.n = n;
    }
    Numeros.prototype.isEven = function () {
        return (this.n % 2 == 0);
    };
    return Numeros;
}());
exports.default = Numeros;
