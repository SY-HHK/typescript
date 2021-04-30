export class Pokemon {
    name: string;
    speed: number;
    damage: number;
    health: number;

    constructor(name: string = 'pikachu', speed: number, damage: number) {
        this.name = name;
        this.speed = speed;
        this.damage = damage
        this.health = 100;
    }

    attack(pokemon: Pokemon): number {
        const attackDamage = (this.damage * Math.random()*10) / 20;
        if (pokemon.health <= attackDamage) {
            pokemon.health = 0;
            return pokemon.health;
        }
        pokemon.health -= attackDamage;
        return pokemon.health;
    }
}

export function faster(pokemonA: Pokemon, pokemonB: Pokemon) {
    if (pokemonA.speed >= pokemonB.speed) {
        return pokemonA;
    }
    return pokemonB;
}

export async function fight(pokemonA: Pokemon, pokemonB: Pokemon): Promise<Pokemon> {
    const first: Pokemon = faster(pokemonA, pokemonB);
    const second: Pokemon = first === pokemonA ? pokemonB : pokemonA;
    while (first.health > 0 && second.health > 0) {
        first.attack(second);
        if (second.health <= 0) return first;
        second.attack(first);
        console.log(first.name + ' => ' + first.health + ' VS ' + second.name + ' => ' + second.health);
    }
    return second;
}