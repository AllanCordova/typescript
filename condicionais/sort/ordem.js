"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ordem = /** @class */ (function () {
    function Ordem(n) {
        if (n === void 0) { n = 0; }
        this.aux = n;
    }
    Ordem.prototype.sort = function (a, b, c) {
        if (a > c && b > c) {
            var maior_1 = Math.max(a, b);
            var menor_1 = Math.min(a, b);
            this.aux = c;
            c = maior_1;
            b = menor_1;
            a = this.aux;
            return "".concat(a, ", ").concat(b, ", ").concat(c);
        }
        if (a > b) {
            var maior_2 = Math.max(a, c);
            var menor_2 = Math.min(a, c);
            this.aux = b;
            c = maior_2;
            b = menor_2;
            a = this.aux;
            return "".concat(a, ", ").concat(b, ", ").concat(c);
        }
        var maior = Math.max(b, c);
        var menor = Math.min(b, c);
        c = maior;
        b = menor;
        return "".concat(a, ", ").concat(b, ", ").concat(c);
    };
    return Ordem;
}());
exports.default = Ordem;
