import { Tokenizer } from "./Lexer.ts";
import path from "path";
import { readFileSync } from "fs";

const fileDirectory = path.join("res", "test.yamlscript");

const readFileOptions = {
  encoding: "utf-8",
} as const;

const source = readFileSync(fileDirectory, readFileOptions);

const tokenizer = new Tokenizer(source, {
  verbose: true,
});

const tokens = tokenizer.tokenize();
console.log(tokens);
