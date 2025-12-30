import { State } from "./state";

export async function commandCatch(
  state: State,
  pokemonName: string
): Promise<void> {
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const escapeChance = Math.min(99, pokemon.base_experience);
  const roll = Math.random() * 100;
  if (roll < escapeChance) {
    console.log(`${pokemonName} escaped!`);
  } else {
    console.log(`${pokemonName} was caught!`);
    state.caughtPokemon[pokemonName] = pokemon;
  }
}
