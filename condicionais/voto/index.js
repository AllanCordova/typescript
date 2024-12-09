"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var voto_1 = require("./voto");
//  Allan Brasileiro com 18 anos.
var allan = new voto_1.default(18, false);
console.log("".concat(allan.situacao()));
// Maria estrangeira com 22 anos.
var maria = new voto_1.default(22, true);
console.log("".concat(maria.situacao()));
// Pedro Brasileiro 16 anos.
var pedro = new voto_1.default(16, false);
console.log(pedro.situacao());
// Carlos Brasileiro 78 anos.
var carlos = new voto_1.default(78, false);
console.log(carlos.situacao());
