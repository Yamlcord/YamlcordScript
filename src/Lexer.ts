export type TokenType =
  | "OpenBracket"
  | "CloseBracket"
  | "Identifier"
  | "Assignment"
  | "Plus"
  | "Minus"
  | "Dot"
  | "Semicolon"
  | "EOF";

export const TokenTypes = {
  OpenBracket: "OpenBracket",
  CloseBracket: "CloseBracket",
  Identifier: "Identifier",
  Assignment: "Assignment",
  Plus: "Plus",
  Minus: "Minus",
  Dot: "Dot",
  Semicolon: "Semicolon",
  EOF: "EOF",
} as const;

export const BinaryOperators = ["+", "-", "*", "/"];

export interface TokenizerOptions {
  verbose: boolean;
}

class Token {
  private type: TokenType;
  private lexeme: string;
  private literal: Object | null;
  private line: number;

  public constructor(
    type: TokenType,
    lexeme: string,
    literal: Object | null,
    line: number,
  ) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }

  public getType(): TokenType {
    return this.type;
  }

  public toString(): string {
    return this.type + " " + this.lexeme + " " + this.literal;
  }
}

export class Tokenizer {
  private options: TokenizerOptions;

  private start = 0;
  private current = 0;
  private line = 1;

  private readonly source: string;
  private readonly sourceLength: number;

  public constructor(
    source: string,
    options: TokenizerOptions = { verbose: false },
  ) {
    this.options = options;
    this.source = source;
    this.sourceLength = source.length;
  }

  private isAtEnd = () => this.current >= this.sourceLength;
  private advance = () => this.source.charAt(this.current++);

  private getToken(): Token | null {
    const character = this.advance();
    console.log(character);
    switch (character) {
      case "{":
        return this.createToken(TokenTypes.OpenBracket, null);
      case "}":
        return this.createToken(TokenTypes.CloseBracket, null);
      case "=":
        return this.createToken(TokenTypes.Assignment, null);
      case "+":
        return this.createToken(TokenTypes.Plus, null);
      case "-":
        return this.createToken(TokenTypes.Minus, null);
      case ".":
        return this.createToken(TokenTypes.Dot, null);
      case ";":
        return this.createToken(TokenTypes.Semicolon, null);
    }

    return null;
  }

  private createToken(type: TokenType, literal: Object | null): Token {
    const text = this.source.substring(this.start, this.current);
    return new Token(type, text, literal, this.line);
  }

  public tokenize(): Array<Token> {
    if (this.sourceLength === 0) throw new Error("Source is empty...");

    const tokens = new Array<Token>();

    while (!this.isAtEnd()) {
      this.start = this.current;
      const token = this.getToken();
      token && tokens.push(token);
    }

    tokens.push(new Token(TokenTypes.EOF, "", null, this.line));

    if (this.options.verbose) {
      console.log("Tokenization completed");
    }

    return tokens;
  }
}
