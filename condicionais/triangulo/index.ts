import Figura from "./poligono";
import * as teclado from 'readline-sync';

console.log(`Digite o primeiro valor:`);
const medidaA: number = teclado.questionInt();
console.log(`Digite o segundo valor:`);
const medidaB: number = teclado.questionInt();
console.log(`Digite o terceiro valor:`);
const medidaC: number = teclado.questionInt();

const triangulo: Figura = new Figura();

console.log(`A existencia do triangulo é ${triangulo.tIsreal(medidaA, medidaB, medidaC)}`);