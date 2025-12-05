import { describe, expect, it } from "vitest";
import { Tokenizer, TokenTypes } from "../src/Lexer";

describe("Lexical Scanning", () => {
  it("Should return an open bracket token", () => {
    const source = "{";
    const tokenizer = new Tokenizer(source);
    const tokens = tokenizer.tokenize();
    const token = tokens.shift()!;
    const tokenType = token.getType();
    expect(tokenType).toBe(TokenTypes.OpenBracket);
  });

  it("Should return an close bracket token", () => {
    const source = "}";
    const tokenizer = new Tokenizer(source);
    const tokens = tokenizer.tokenize();
    const token = tokens.shift()!;
    const tokenType = token.getType();
    expect(tokenType).toBe(TokenTypes.CloseBracket);
  });

  it("Should return an close bracket token", () => {
    const source = "}";
    const tokenizer = new Tokenizer(source);
    const tokens = tokenizer.tokenize();
    const token = tokens.shift()!;
    const tokenType = token.getType();
    expect(tokenType).toBe(TokenTypes.CloseBracket);
  });

  it("Should return dot token", () => {
    const source = ".";
    const tokenizer = new Tokenizer(source);
    const tokens = tokenizer.tokenize();
    const token = tokens.shift()!;
    const tokenType = token.getType();
    expect(tokenType).toBe(TokenTypes.Dot);
  });

  it("Should return a semicolon token", () => {
    const source = ";";
    const tokenizer = new Tokenizer(source);
    const tokens = tokenizer.tokenize();
    const token = tokens.shift()!;
    const tokenType = token.getType();
    expect(tokenType).toBe(TokenTypes.Semicolon);
  });

  it("Should end with EOF token", () => {
    const source = ";";
    const tokenizer = new Tokenizer(source);
    const tokens = tokenizer.tokenize();
    const token = tokens.pop()!;
    const tokenType = token.getType();
    expect(tokenType).toBe(TokenTypes.EOF);
  });
});
