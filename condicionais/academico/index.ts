import Academico from "./academico";

const allan: Academico = new Academico(8, 0.8);

console.log(`Aluno foi ${allan.aprovado()}`);

const maria: Academico = new Academico(5, 0.75);

console.log(`Aluno foi ${maria.aprovado()}`);

const pedro: Academico = new Academico(3, 0.75);

console.log(`Aluno foi ${pedro.aprovado()}`);

const albert: Academico = new Academico(10, 0.67);

console.log(`Aluno foi ${albert.aprovado()}`);