"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Imposto = /** @class */ (function () {
    function Imposto(renda) {
        this.saldo = renda;
    }
    Imposto.prototype.aliquota = function () {
        var imposto = 0;
        if (this.saldo <= 2112) {
            return imposto;
        }
        if (this.saldo <= 3169) {
            return imposto = 7.5;
        }
        if (this.saldo <= 4257) {
            return imposto = 15;
        }
        if (this.saldo <= 5345) {
            return imposto = 22.5;
        }
        else {
            return imposto = 27.5;
        }
    };
    Imposto.prototype.novaRenda = function () {
        var saldo = this.saldo - (this.saldo * (this.aliquota() / 100));
        return saldo;
    };
    Imposto.prototype.toString = function () {
        return "Com uma aliquota de ".concat(this.aliquota(), "\nUm sal\u00E1rio de R$").concat(this.saldo, "\nNovo saldo: R$").concat(this.novaRenda().toFixed(2));
    };
    return Imposto;
}());
exports.default = Imposto;
