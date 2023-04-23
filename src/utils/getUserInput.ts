import inquirer from "inquirer";
import * as readline from "readline";
import chalk from "chalk";

// export const getUserInput = async (): Promise<string> => {
//   const d = await inquirer.prompt({
//     type: "editor",
//     name: "userInput",
//     message: "🧙 You:",
//     prefix: "",
//     // transformer: (input: string) => {
//     //   return chalk.gray(input);
//     // },
//   });

//   console.log({ d });

//   process.stdout.write(d.userInput);

//   return chalk.gray(d.userInput);
// };

const getUserInput = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let inputLines: string[] = [];

    rl.on("line", (line) => {
      inputLines.push(line);
    });

    rl.on("close", () => {
      resolve(inputLines.join("\n"));
    });
  });
};

export default getUserInput;
