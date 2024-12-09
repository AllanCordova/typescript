"use strict";
// modelar um objeto de supermercado e um programa que retorne uma etiqueta formatada com
// os atríbutos do produto.
// onde temos Descrição, Peso, Preço
// temos um metódo para calcular o preço por kg
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(desc, peso, preco) {
        this.desc = desc;
        this.peso = peso;
        this.preco = preco;
    }
    Produto.prototype.setDesc = function (value) {
        this.desc = value;
    };
    Produto.prototype.setPeso = function (value) {
        this.peso = value;
    };
    Produto.prototype.setPreco = function (value) {
        this.preco = value;
    };
    Produto.prototype.precoKg = function () {
        return this.preco / this.peso;
    };
    Produto.prototype.toString = function () {
        return "".concat(this.desc, "\npeso: ").concat(this.peso.toFixed(3), "\npre\u00E7o: ").concat(this.preco.toFixed(2), "\npre\u00E7o do kilo: ").concat(this.precoKg().toFixed(2));
    };
    return Produto;
}());
exports.default = Produto;
