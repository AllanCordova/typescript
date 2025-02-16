import matrizAleatoria from "./matriz";

const matriz: matrizAleatoria = new matrizAleatoria(3, 3);

const lista: number[][] = matriz.somaLinhaColuna();

matriz.toString(lista);

const array: number[][] = matriz.transposta();

matriz.toString(array);

console.log(
  matriz.multArrays([
    [2, 2, 3],
    [2, 2, 4],
    [4, 1, 3],
  ])
);
