import Numeros from "./refatorar";
import * as teclado from 'readline-sync';

console.log(`Digite um valor:`);
const numero: number = teclado.questionInt();

const isPar: Numeros = new Numeros(numero);

console.log(`O valor ${numero} é par ${isPar.isEven()}`);