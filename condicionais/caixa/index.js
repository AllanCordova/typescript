"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var caixa_1 = require("./caixa");
var senhaNetflix = new caixa_1.default('Allan é Lindo', 'senha');
console.log("".concat(senhaNetflix.Desvendar('senha')));
