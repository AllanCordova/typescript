import Numeros from "./numeros";
import * as teclado from 'readline-sync';

console.log(`Digite um número:`);
const valor: number = teclado.questionInt();

const inRoman: Numeros = new Numeros(valor);

console.log(`O valor ${valor} em número romano e = ${inRoman.romano()}`);