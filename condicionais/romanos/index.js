"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeros_1 = require("./numeros");
var teclado = require("readline-sync");
console.log("Digite um n\u00FAmero:");
var valor = teclado.questionInt();
var inRoman = new numeros_1.default(valor);
console.log("O valor ".concat(valor, " em n\u00FAmero romano e = ").concat(inRoman.romano()));
