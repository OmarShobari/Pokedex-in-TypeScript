import { State } from "./state.js";

// explore pokemons in one location and print them to console
export async function commandExplore(
  state: State,
  locationName: string
): Promise<void> {
  const location = await state.pokeAPI.fetchLocation(locationName);
  console.log(`Exploring ${locationName}...`);
  console.log("Found Pokemon:");
  for (const item of location.pokemon_encounters) {
    console.log(`- ${item.pokemon.name}`);
  }
}
