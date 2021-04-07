"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./src/pokemon");
var pikachu = new pokemon_1.Pokemon('Pikachu', 15, 15);
var charmander = new pokemon_1.Pokemon('Charmander', 15, 15);
console.log(pokemon_1.faster(pikachu, charmander));
