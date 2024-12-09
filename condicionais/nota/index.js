"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notas_1 = require("./notas");
var teclado = require("readline-sync");
console.log('Qual foi sua nota:');
var nota = teclado.questionInt();
var ntAllan = new notas_1.default(nota);
console.log("".concat(nota, " \u00E9 equivalente a um ").concat(ntAllan.letra()));
