export class Pokemon {
    name: string;
    speed: number;
    damage: number;

    constructor(name: string = 'pikachu', speed: number, damage: number) {
        this.name = name;
        this.speed = speed;
        this.damage = damage
    }
}

export function faster(pokemonA: Pokemon, pokemonB: Pokemon) {
    if (pokemonA.speed >= pokemonB.speed) {
        return pokemonA;
    }
    return pokemonB;
}