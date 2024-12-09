"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nota = /** @class */ (function () {
    function Nota(nota) {
        this.nota = nota;
    }
    Nota.prototype.letra = function () {
        if (this.nota < 6) {
            return 'E';
        }
        if (this.nota < 7) {
            return 'D';
        }
        if (this.nota < 8) {
            return 'C';
        }
        if (this.nota < 9) {
            return 'B';
        }
        return 'A';
    };
    return Nota;
}());
exports.default = Nota;
