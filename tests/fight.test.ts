import {fight, Pokemon} from "../src/pokemon";

test('Pokemon A win over pokemon B', async () => {
    const pokeA = new Pokemon('a', 25, 50);
    const pokeB = new Pokemon('b', 50, 30);
    const winner: Pokemon = await fight(pokeA, pokeB);
    expect(winner.name).toBe(pokeA.name);
});