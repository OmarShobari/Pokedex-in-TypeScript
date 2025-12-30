import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  // Access the PokeAPI instance from state
  const pokeAPI = state.pokeAPI;

  // Fetch locations using the nextLocationsURL from state
  const pageURL =
    state.nextLocationsURL === null ? undefined : state.nextLocationsURL;
  const locations = await pokeAPI.fetchLocations(pageURL);

  // Update state with next and previous URLs
  state.nextLocationsURL = locations.next;
  state.previousLocationsURL = locations.previous;

  // Display the fetched locations
  locations.results.forEach((location) => {
    console.log(location.name);
  });
}
