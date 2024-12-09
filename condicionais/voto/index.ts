import Voto from "./voto";

//  Allan Brasileiro com 18 anos.
const allan: Voto = new Voto(18, false);
console.log(`${allan.situacao()}`);

// Maria estrangeira com 22 anos.
const maria: Voto = new Voto(22, true);
console.log(`${maria.situacao()}`);

// Pedro Brasileiro 16 anos.
const pedro: Voto = new Voto(16, false);
console.log(pedro.situacao());

// Carlos Brasileiro 78 anos.
const carlos: Voto = new Voto(78, false);
console.log(carlos.situacao());

