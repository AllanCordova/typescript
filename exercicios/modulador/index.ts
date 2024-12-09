import Produto from "./etiqueta";
import * as teclado from 'readline-sync';

console.log(`Qual a descrição do produto:`);
let description: string = teclado.question();

console.log(`qual o peso do produto:`);
let peso: number = teclado.questionFloat();

console.log(`qual o preço do produto:`);
let preco: number = teclado.questionFloat();

let produto: Produto = new Produto(description, peso, preco);

console.log(produto.toString());

