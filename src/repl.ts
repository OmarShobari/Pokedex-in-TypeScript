import readline from 'readline';
import process from 'process';
import {getCommands} from './commander.js';




export function startREPL(){

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Pokedex > ',
});

rl.prompt();

rl.on('line', async(input) => {
  const userInputCommand = cleanInput(input);
  if (userInputCommand.length == 0) {
    rl.prompt();
    return;
  }

  const commands = getCommands();
  const commandName = userInputCommand[0];
  const command = commands[commandName];

  if (command) {
    command.callback(commands);
  } else {
    console.log(`Unknown command: ${commandName}`);
  }
  rl.prompt();
})   
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

