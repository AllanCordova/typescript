"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = require("./aluno");
// Medias da Julia no primeiro e segundo semestre, e nota final do exame.
var julia = new aluno_1.default(7.5, 6.8, 9.2);
console.log("Maior nota de Julia considerando as medias do semestres: ".concat(julia.semestre()));
console.log("Maior nota de Julia considerando tudo: ".concat(julia.maiorNota()));
