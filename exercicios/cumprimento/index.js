"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cumprimento_1 = require("./cumprimento");
var teclado = require("readline-sync");
console.log("a pessoa e desconhecida y/n");
var status = teclado.question();
if (status == 'y') {
    var deconhece = new cumprimento_1.default();
    console.log("".concat(deconhece.desconhece()));
}
else {
    console.log("Voc\u00EA conhe\u00E7e a pessoa y/n");
    status = teclado.question();
    if (status == 'y') {
        var conhece = new cumprimento_1.default('Allan');
        console.log("".concat(conhece.conhece(true)));
    }
    else {
        var sabeNome = new cumprimento_1.default();
        console.log("".concat(sabeNome.sabeNome('Julia')));
    }
}
