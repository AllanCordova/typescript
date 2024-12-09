"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Segredo = /** @class */ (function () {
    function Segredo(segredo, senha) {
        this.segredo = segredo;
        this.senha = senha;
    }
    Segredo.prototype.Desvendar = function (senha) {
        if (senha == this.senha) {
            return "".concat(this.segredo);
        }
        else {
            return "\"Tente novamente!\"";
        }
    };
    return Segredo;
}());
exports.default = Segredo;
