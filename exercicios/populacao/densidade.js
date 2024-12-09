"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Densidade = /** @class */ (function () {
    function Densidade(area, pessoas) {
        this.area = area;
        this.pessoas = pessoas;
    }
    Densidade.prototype.densidade = function () {
        return Math.floor(this.pessoas / this.area);
    };
    Densidade.prototype.toString = function () {
        return "A densidae populacional de ".concat(this.pessoas, " pessoas em uma \u00E1rea de ").concat(this.area, " km\u00B2\nDensidade: ").concat(this.densidade(), "hab/km\u00B2");
    };
    return Densidade;
}());
exports.default = Densidade;
