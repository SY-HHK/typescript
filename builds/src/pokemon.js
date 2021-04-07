"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faster = exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, damage) {
        if (name === void 0) { name = 'pikachu'; }
        this.name = name;
        this.speed = speed;
        this.damage = damage;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function faster(pokemonA, pokemonB) {
    if (pokemonA.speed >= pokemonB.speed) {
        return pokemonA;
    }
    return pokemonB;
}
exports.faster = faster;
