import Tanque from "./tanque";
import * as teclado from 'readline-sync';

console.log(`qual  o tamanho do tanque do seu veículo:`)
let volume: number = teclado.questionInt();

let carro: Tanque = new Tanque(volume);

console.log(`quantos litros de gasolinas você quer por:`)
let abastecer: number = teclado.questionInt();

carro.escolha(abastecer);

console.log();
console.log(`${carro.toString()}`);

console.log();
console.log(`metódo que completa o tanque do carro`);
console.log();
carro.encher();

console.log(`${carro.toString()}`);