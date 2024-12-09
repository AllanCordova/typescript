import Estado from "./estado";
import * as teclado from '../node_modules/readline-sync';

console.log(`Digite a sigla de seu estado:`)
const estado: string = teclado.question();

const gentilico: Estado = new Estado(estado);

console.log(`${gentilico.toString()}`);