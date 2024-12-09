import Notas from "./aluno";

// Medias da Julia no primeiro e segundo semestre, e nota final do exame.
const julia: Notas = new Notas(7.5, 6.8, 9.2);

console.log(`Maior nota de Julia considerando as medias do semestres: ${julia.semestre()}`);
console.log(`Maior nota de Julia considerando tudo: ${julia.maiorNota()}`);