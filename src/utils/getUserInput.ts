import * as readline from "readline";

export const getUserInput = (prompt: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`\n${prompt}\n\n`, (input) => {
      resolve(input);
      rl.close();
    });
  });
};
