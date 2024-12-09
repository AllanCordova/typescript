"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notas = /** @class */ (function () {
    function Notas(semestreUm, semestreDois, exame) {
        this.semestreUm = semestreUm;
        this.semestreDois = semestreDois;
        this.exame = exame;
    }
    Notas.prototype.semestre = function () {
        if (this.semestreUm > this.semestreDois) {
            return this.semestreUm;
        }
        else {
            return this.semestreDois;
        }
    };
    Notas.prototype.maiorNota = function () {
        if (this.semestre() > this.exame) {
            return this.semestre();
        }
        else {
            return this.exame;
        }
    };
    return Notas;
}());
exports.default = Notas;
