import Numero from "./numeros";
import * as teclado from 'readline-sync';

console.log(`Digite um número:`);
const valor: number = teclado.questionInt();

const inRoman: Numero = new Numero(valor);

console.log(`${valor} em número romano ${inRoman.upRomano()}`);