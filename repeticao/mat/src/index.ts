import InteiroMatematico from "./mat";

const valor: InteiroMatematico = new InteiroMatematico(60);

console.log(valor.fibonacci());

console.log(valor.tribonacci());

console.log(valor.isTriangular());

console.log(valor.isSomaDosQuadrados());

console.log(valor.maiorDivisor());

console.log(valor.menorDivisor());

console.log(valor.mdcEficiente(48));

console.log(valor.mdc(48));