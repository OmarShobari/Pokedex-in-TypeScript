import { State } from "./state.js";

export async function startREPL(state: State) {
  const rl = state.readline;

  rl.prompt();

  rl.on("line", async (input) => {
    const userInputCommand = cleanInput(input);
    if (userInputCommand.length == 0) {
      rl.prompt();
      return;
    }

    const commands = state.commands;
    const commandName = userInputCommand[0];
    const command = commands[commandName];

    if (command) {
      try {
        await command.callback(state);
      } catch (error) {
        console.error(`Error executing command '${commandName}':`, error);
      }
    } else {
      console.log(`Unknown command: ${commandName}`);
    }
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
