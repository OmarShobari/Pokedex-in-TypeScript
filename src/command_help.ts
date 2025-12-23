import {CLICommand} from "./commander.js";

export function commandHelp(commands: Record<string, CLICommand>) { 
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const key in commands) {
    const command = commands[key];
    console.log(`${command.name}: ${command.description}`);
  }
}