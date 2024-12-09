import Comprimento from "./cumprimento";
import * as teclado from 'readline-sync';

console.log(`a pessoa e desconhecida y/n`)
let status: string = teclado.question();

if (status == 'y') {
    let deconhece: Comprimento = new Comprimento();
    console.log(`${deconhece.desconhece()}`);
} else {
    console.log(`Você conheçe a pessoa y/n`);
    status = teclado.question();
    if (status == 'y') {
        let conhece: Comprimento = new Comprimento('Allan');
        console.log(`${conhece.conhece(true)}`);
    } else {
        let sabeNome: Comprimento = new Comprimento();
        console.log(`${sabeNome.sabeNome('Julia')}`);
    }
}