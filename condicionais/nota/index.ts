import Nota from "./notas";
import * as teclado from 'readline-sync';

console.log('Qual foi sua nota:');
const nota: number = teclado.questionInt();

const ntAllan: Nota = new Nota(nota);

console.log(`${nota} é equivalente a um ${ntAllan.letra()}`);