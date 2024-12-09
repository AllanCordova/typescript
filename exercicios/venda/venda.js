"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Venda = /** @class */ (function () {
    function Venda(precoEsperado, taxa) {
        this.precoQuer = precoEsperado;
        this.taxa = taxa;
    }
    Venda.prototype.valorPedido = function () {
        var valorEsperado = (this.precoQuer * (this.taxa / 100)) + this.precoQuer;
        return valorEsperado;
    };
    Venda.prototype.toString = function () {
        return "Com o valor esperado de venda de ".concat(this.precoQuer, " a uma taxa de ").concat(this.taxa, "\nO valor de venda deve ser: ").concat(this.valorPedido());
    };
    return Venda;
}());
exports.default = Venda;
