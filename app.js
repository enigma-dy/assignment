import readline from "readline";
import chalk from "chalk";
import { add } from "./Operations/add.js";
import { subtract } from "./Operations/subtract.js";
import { multiply } from "./Operations/multiply.js";
import { divide } from "./Operations/divide.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const Calculator = async () => {
  try {
    const username = await askQuestion("Enter your username: ");
    const operation = await askQuestion(
      "Choose operation (add, subtract, multiply, divide): "
    );
    const num1Str = await askQuestion("Enter first number: ");
    const num2Str = await askQuestion("Enter second number: ");

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
      console.log(chalk.red("Please provide valid numbers."));
      rl.close();
      return;
    }

    let result;
    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
      default:
        console.log(
          chalk.yellow(
            "Unsupported operation. Use add, subtract, multiply, divide."
          )
        );
        rl.close();
        return;
    }

    console.log(chalk.green(`Result: ${result}`));
    console.log(chalk.blue(`Executed by: ${username}`));
  } catch (err) {
    console.log(chalk.red(`Error: ${err.message}`));
  } finally {
    rl.close();
  }
};

Calculator();
