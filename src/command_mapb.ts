import { State } from "./state.js";

export async function commandMapb(state: State): Promise<void> {
  // assign
  const pokeAPI = state.pokeAPI;

  // fetch
  const url =
    state.previousLocationsURL == null ? undefined : state.previousLocationsURL;
  const locations = await pokeAPI.fetchLocations(url);

  // update
  state.previousLocationsURL = locations.previous;
  state.nextLocationsURL = locations.next;

  // display
  locations.results.forEach((location) => {
    console.log(location.name);
  });
}
