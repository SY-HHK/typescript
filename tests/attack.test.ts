import {Pokemon} from "../src/pokemon";

test('Should return b.health - attack if pokemon a attack b', () => {
    const pokeA = new Pokemon('a', 25, 15);
    const pokeB = new Pokemon('b', 15, 15);
    expect(pokeA.attack(pokeB)).toBe(pokeB.health);
});