"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demaior = /** @class */ (function () {
    function Demaior(ano) {
        this.nascimento = ano;
    }
    Demaior.prototype.idade = function () {
        var idade = new Date().getFullYear();
        idade -= this.nascimento;
        return idade;
    };
    Demaior.prototype.deMaior = function () {
        if (this.idade() > 17) {
            return true;
        }
        else {
            return false;
        }
    };
    Demaior.prototype.toString = function () {
        if (this.deMaior()) {
            return "Ind\u00EDviduo maior de idade com ".concat(this.idade(), " anos");
        }
        else {
            return "Ind\u00EDvidui menor de idade com ".concat(this.idade(), " anos");
        }
    };
    return Demaior;
}());
exports.default = Demaior;
