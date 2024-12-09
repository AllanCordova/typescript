import Dado from "./dado";

const myDado: Dado = new Dado(9);

myDado.rolagem();

console.log(`${myDado.toString()}`);

myDado.rolagem();

console.log(`${myDado.toString()}`);