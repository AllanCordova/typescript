"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var refatorar_1 = require("./refatorar");
var teclado = require("readline-sync");
console.log("Digite um valor:");
var numero = teclado.questionInt();
var isPar = new refatorar_1.default(numero);
console.log("O valor ".concat(numero, " \u00E9 par ").concat(isPar.isEven()));
