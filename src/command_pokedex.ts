import { State } from "./state";

export async function commandPokedex(state: State): Promise<void> {
  const caughtPokemonNames = Object.keys(state.caughtPokemon);
  if (caughtPokemonNames.length === 0) {
    console.log("You have not caught any Pokémon yet.");
    return;
  }

  console.log("Your Pokedex:");
  for (const name of caughtPokemonNames) {
    console.log(`- ${name}`);
  }
}
