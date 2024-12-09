import Calculadora from "./calculadora";
import * as teclado from 'readline-sync';

console.log(`Digite o tempo em segundos:`)
const segundos: number = teclado.questionInt();

console.log(`Digite a quantidade de caracteres digitados:`);
const letras: number = teclado.questionInt();

const allan: Calculadora = new Calculadora(segundos, letras);

const maria: Calculadora = new Calculadora();

console.log(`Allan escreveu uma media de ${allan.forMinuto()} caracteres/minuto`);

console.log(`Maria escreveu uma media de ${maria.forMinuto()} caracteres/minuto`);