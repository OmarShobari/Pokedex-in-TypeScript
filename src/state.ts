import readline from "readline";
import { getCommands } from "./commander.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: readline.Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string | null;
  previousLocationsURL: string | null;
};

export const initState = (cacheInterval: number): State => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const pokeAPI = new PokeAPI(cacheInterval);
  let nextLocationsURL = null;
  let previousLocationsURL = null;

  return {
    readline: rl,
    commands: getCommands(),
    pokeAPI,
    nextLocationsURL,
    previousLocationsURL,
  };
};
