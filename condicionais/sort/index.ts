import Ordem from "./ordem";

const ordemA: Ordem = new Ordem;

console.log(`valores:\n${ordemA.sort(10, 22, 8)}`);

console.log(`valores:\n${ordemA.sort(10, 8, 22)}`);

console.log(`valores:\n${ordemA.sort(8, 22, 10)}`);

console.log(`valores:\n${ordemA.sort(8, 10, 22)}`);

console.log(`valores:\n${ordemA.sort(22, 10, 8)}`);

console.log(`valores:\n${ordemA.sort(22, 8, 10)}`);