import Imposto from "./imposto";

const allan: Imposto = new Imposto(5600);

console.log(`${allan.toString()}`)

const maria: Imposto = new Imposto(1500);

console.log(`${maria.toString()}`)

const paulo: Imposto = new Imposto(2900);

console.log(paulo.toString());

const julia: Imposto = new Imposto(4200);

console.log(julia.toString());