import { State } from "./state.js";

export async function commandInspect(
  state: State,
  pokemonName: string
): Promise<void> {
  const pokemon = state.caughtPokemon[pokemonName];
  if (!pokemon) {
    console.log(`You have not caught a pokemon named ${pokemonName}.`);
    return;
  }
  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const typeInfo of pokemon.types) {
    console.log(` - ${typeInfo.type.name}`);
  }
  console.log("Types:");
  for (const typeInfo of pokemon.types) {
    console.log(` - ${typeInfo.type.name}`);
  }
}
