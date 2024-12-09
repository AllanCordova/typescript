"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estado = /** @class */ (function () {
    function Estado(estado) {
        this.estado = estado;
    }
    Estado.prototype.gentilico = function () {
        // Define o objeto usando Record
        var gentilicos = {
            AC: "acreano",
            AL: "alagoano",
            AP: "amapaense",
            AM: "amazonense",
            BA: "baiano",
            CE: "cearense",
            DF: "brasiliense",
            ES: "capixaba",
            GO: "goiano",
            MA: "maranhense",
            MT: "mato-grossense",
            MS: "sul-mato-grossense",
            MG: "mineiro",
            PA: "paraense",
            PB: "paraibano",
            PR: "paranaense",
            PE: "pernambucano",
            PI: "piauiense",
            RJ: "fluminense",
            RN: "potiguar",
            RS: "gaúcho",
            RO: "rondoniense",
            RR: "roraimense",
            SC: "catarinense",
            SP: "paulista",
            SE: "sergipano",
            TO: "tocantinense"
        };
        if (this.estado.toUpperCase() in gentilicos) {
            return gentilicos[this.estado.toUpperCase()];
        }
        else {
            return "N\u00E3o consta no Brasil";
        }
    };
    Estado.prototype.toString = function () {
        return "Sigla ".concat(this.estado.toUpperCase(), ": Gent\u00EDlico ").concat(this.gentilico());
    };
    return Estado;
}());
exports.default = Estado;
