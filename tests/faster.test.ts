import {faster, Pokemon} from "../src/pokemon";

test('Should return a if pokemon a is faster than b', () => {
    const pokeA = new Pokemon('a', 25, 15);
    const pokeB = new Pokemon('b', 15, 15);
    expect(faster(pokeA, pokeB)).toBe(pokeA);
});

test('Should return b if pokemon b is faster than a', () => {
    const pokeA = new Pokemon('a', 50, 15);
    const pokeB = new Pokemon('b', 60, 15);
    expect(faster(pokeA, pokeB)).toBe(pokeB);
});