import {faster, Pokemon} from "./src/pokemon";

const pikachu = new Pokemon('Pikachu', 15, 15);
const charmander = new Pokemon('Charmander', 15 ,15);

console.log(faster(pikachu, charmander));