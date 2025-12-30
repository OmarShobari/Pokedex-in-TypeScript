import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const key in state.commands) {
    const command = state.commands[key];
    console.log(`${command.name}: ${command.description}`);
  }
}
