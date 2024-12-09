"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Voto = /** @class */ (function () {
    function Voto(idade, estrangeiro) {
        this.idade = idade;
        this.estrangeiro = estrangeiro;
    }
    Voto.prototype.situacao = function () {
        if (this.estrangeiro || this.idade < 16 || this.idade > 70) {
            return "Voto negado!";
        }
        else {
            if (this.idade > 17) {
                return "Voto obrigat\u00F3rio";
            }
            else {
                return "Voto facultativo";
            }
        }
    };
    return Voto;
}());
exports.default = Voto;
