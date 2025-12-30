import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next 20 map of the pokedex",
      callback: commandMap,
    },

    mapb: {
      name: "mapb",
      description: "Displays the previous 20 map of the pokedex",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explore pokemons in a location",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempts to catch a pokemon by name",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspects a caught pokemon by name",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Displays your caught pokemons",
      callback: commandPokedex,
    },
  };
}
