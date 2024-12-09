"use strict";
//modulando um tanque de um carro para abastecimento informando o tamanho do tanque e adicionando modulos para encher o tanque do carro
Object.defineProperty(exports, "__esModule", { value: true });
var Tanque = /** @class */ (function () {
    function Tanque(volume, quant) {
        if (quant === void 0) { quant = 0; }
        this.volume = volume;
        this.quant = quant;
    }
    Tanque.prototype.encher = function () {
        this.quant = (this.volume - this.quant) + this.quant;
    };
    Tanque.prototype.escolha = function (valor) {
        this.quant = valor;
    };
    Tanque.prototype.percentual = function () {
        return (this.quant * 100) / this.volume;
    };
    Tanque.prototype.toString = function () {
        return "Quantidade de combustivel: ".concat(this.quant, " Litros\nTamanho do tanque: ").concat(this.volume, " Litros\nTanque est\u00E1 ").concat(this.percentual().toFixed(2), "% cheio");
    };
    return Tanque;
}());
exports.default = Tanque;
