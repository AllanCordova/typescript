"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ordem_1 = require("./ordem");
var ordemA = new ordem_1.default;
console.log("valores:\n".concat(ordemA.sort(10, 22, 8)));
console.log("valores:\n".concat(ordemA.sort(10, 8, 22)));
console.log("valores:\n".concat(ordemA.sort(8, 22, 10)));
console.log("valores:\n".concat(ordemA.sort(8, 10, 22)));
console.log("valores:\n".concat(ordemA.sort(22, 10, 8)));
console.log("valores:\n".concat(ordemA.sort(22, 8, 10)));
