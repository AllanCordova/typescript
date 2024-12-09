import Segredo from "./caixa";

const senhaNetflix: Segredo = new Segredo('Allan é Lindo', 'senha');

console.log(`${senhaNetflix.Desvendar('senha')}`);