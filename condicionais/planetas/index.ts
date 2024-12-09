import World from "./planetas";
import * as teclado from 'readline-sync';

console.log(`Qual seu peso atual:`)
const peso: number = teclado.questionInt();
console.log(`escolha com um número inteiro para ver seu peso em outros planetas:\n1. Mercúrio: 0,37 kg;\n2. Vênus: 0,88 kg;\n3. Terra: 1,00 kg;\n4. Marte: 0,38 kg;\n5. Júpiter: 2,64 kg;\n6. Saturno: 1,15 kg;\n7. Urano: 1,17 kg;\n8. Netuno: 1,18 kg;\n9. Plutão: 0,11 kg`);
const escolha: number = teclado.questionInt();

const planeta: World = new World(escolha, peso);

console.log(`Você teria ${planeta.weight().toFixed(2)} Kg no planeta escolhido !`);