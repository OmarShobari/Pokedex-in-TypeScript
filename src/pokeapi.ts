export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const response = await fetch(pageURL ?? `${PokeAPI.baseURL}/location-area`);
    const data = await response.json();
    return data as ShallowLocations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const response = await fetch(
      `${PokeAPI.baseURL}/location-area/${locationName}`
    );
    const data = await response.json();
    return data as Location;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};
