"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comprimento = /** @class */ (function () {
    function Comprimento(nome, amigo) {
        if (nome === void 0) { nome = 'Desconhecido'; }
        if (amigo === void 0) { amigo = false; }
        this.nome = nome;
        this.amigo = amigo;
    }
    Comprimento.prototype.desconhece = function () {
        return "\"Ol\u00E1!\"";
    };
    Comprimento.prototype.sabeNome = function (nome) {
        this.nome = nome;
        return "\"Ol\u00E1, ".concat(this.nome, "!\"");
    };
    Comprimento.prototype.conhece = function (amigo) {
        this.amigo = amigo;
        if (this.amigo) {
            return "\"Ol\u00E1, ".concat(this.nome, "\"");
        }
        else {
            return "A pessoa n\u00E3o te conhe\u00E7e";
        }
    };
    return Comprimento;
}());
exports.default = Comprimento;
