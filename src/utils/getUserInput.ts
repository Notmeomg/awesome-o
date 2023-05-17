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

// const getUserInput = (): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });

//     let inputLines: string[] = [];

//     rl.on("line", (line) => {
//       inputLines.push(line);
//     });

//     rl.on("close", () => {
//       resolve(inputLines.join("\n"));
//     });
//   });
// };

function getUserInput(): Promise<string> {
  readline.emitKeypressEvents(process.stdin);
  // if (process.stdin.isTTY) process.stdin.setRawMode(true);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });

  return new Promise((resolve, reject) => {
    const lines: string[] = [];

    rl.on("line", (line) => {
      console.log({ line });
      lines.push(line);
    });

    process.stdin.on("keypress", (str, key) => {
      console.log({ str, key });

      // if (key && key.name === "return") {
      //   const input = lines.join("\n");
      //   console.log({ input });
      //   rl.close();
      //   resolve(input);
      // }
    });

    rl.on("close", () => {
      const input = lines.join("\n");
      console.log({ input });
    });

    // let input = "";
    // process.stdin.on("keypress", (str, key) => {
    //   console.log({ str, key });
    //   if (key && key.name === "backspace") {
    //     input = input.slice(0, -1);
    //     readline.clearLine(process.stdout, 0);
    //     readline.cursorTo(process.stdout, 0);
    //     process.stdout.write(input);
    //     return;
    //   }
    //   if (key.name === "return") {
    //     resolve(input);
    //   }
    //   if (key.ctrl && key.name === "c") {
    //     process.exit();
    //   }
    //   input += str;
    //   console.log({ input });
    //   process.stdout.write(input);
    // });
  });
}

export default getUserInput;

// let lines: string[] = [];

// for await (const line of rl) {
//   console.log({ line });
//   if (line.trim() === "") {
//     // user pressed Enter
//     rl.close();
//     break;
//   } else if (line.trim() === "\\") {
//     console.log("shift enter");
//     // user pressed Shift + Enter
//     lines.push("");
//   } else {
//     lines.push(line);
//   }
// }

// return lines.join("\n");
