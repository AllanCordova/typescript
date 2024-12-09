"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Academico = /** @class */ (function () {
    function Academico(nota, frequencia) {
        this.nota = nota;
        this.frequencia = frequencia;
    }
    Academico.prototype.aprovado = function () {
        if (this.nota >= 6 && this.frequencia >= 0.75) {
            return "Aprovado por nota e frequ\u00EAncia";
        }
        else {
            if (this.nota >= 4 && this.frequencia >= 0.75) {
                return "Reprovado sem frequ\u00EAncia obrigat\u00F3ria";
            }
            else {
                return "Reprovado com frequ\u00EAncia obrigat\u00F3ria";
            }
        }
    };
    return Academico;
}());
exports.default = Academico;
