import { Tokenizer } from "./Lexer.ts";

const tokenizer = new Tokenizer({
  verbose: true,
});

tokenizer.tokenize("Test");
