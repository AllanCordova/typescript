"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matriz_1 = require("./matriz");
var matriz = new matriz_1.default(3, 3);
var lista = matriz.somaLinhaColuna();
matriz.toString(lista);
var array = matriz.transposta();
matriz.toString(array);
console.log(matriz.multArrays([
    [2, 2, 3],
    [2, 2, 4],
    [4, 1, 3],
]));
