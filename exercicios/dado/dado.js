"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dado = /** @class */ (function () {
    function Dado(faces, sort) {
        if (sort === void 0) { sort = 0; }
        this.faces = faces;
        this.sort = sort;
    }
    Dado.prototype.rolagem = function () {
        this.sort = Math.floor((Math.random() * this.faces) + 1);
        this.lastSort();
    };
    Dado.prototype.lastSort = function () {
        var lastSort = this.sort;
        return lastSort;
    };
    Dado.prototype.toString = function () {
        return "Com as rolagems do dado de ".concat(this.faces, " faces, o ultimo valor sorteado foi de ").concat(this.lastSort());
    };
    return Dado;
}());
exports.default = Dado;
