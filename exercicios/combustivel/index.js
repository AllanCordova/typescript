"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tanque_1 = require("./tanque");
var teclado = require("readline-sync");
console.log("qual  o tamanho do tanque do seu ve\u00EDculo:");
var volume = teclado.questionInt();
var carro = new tanque_1.default(volume);
console.log("quantos litros de gasolinas voc\u00EA quer por:");
var abastecer = teclado.questionInt();
carro.escolha(abastecer);
console.log();
console.log("".concat(carro.toString()));
console.log();
console.log("met\u00F3do que completa o tanque do carro");
console.log();
carro.encher();
console.log("".concat(carro.toString()));