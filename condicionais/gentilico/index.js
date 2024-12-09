"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estado_1 = require("./estado");
var teclado = require("../node_modules/readline-sync");
console.log("Digite a sigla de seu estado:");
var estado = teclado.question();
var gentilico = new estado_1.default(estado);
console.log("".concat(gentilico.toString()));
