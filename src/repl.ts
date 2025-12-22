import readline from 'readline';
import process from 'process';



export function startREPL(){
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Pokedex > ',
});
rl.prompt();

rl.on('line', async(input) => {
  const commands = cleanInput(input);
  if (commands.length == 0) {
    rl.prompt();
    return;
  }
  console.log(`Your command was: ${commands[0]}`)
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

