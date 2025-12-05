import readline from "readline/promises";
import { Tokenizer } from "./Lexer.ts";

export class Interpreter {
  private readline: readline.Interface;

  public constructor() {
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true,
    });
  }

  async getLineCommand(): Promise<string> {
    try {
      return await this.readline.question(">");
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Goodbye :)");
      }
      return process.exit(0);
    }
  }

  async run() {
    while (true) {
      const lineCommand = await this.getLineCommand();
      if (lineCommand === "exit") process.exit(0);

      const tokenizer = new Tokenizer(lineCommand, {
        verbose: true,
      });

      try {
        const tokens = tokenizer.tokenize();
        console.log(tokens);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
