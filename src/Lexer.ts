export type TokenType =
  | "OpenBracket"
  | "CloseBracket"
  | "Identifier"
  | "Equals"
  | "BinaryOperator";

export interface Token {
  value: string;
  type: TokenType;
}

export interface TokenizerOptions {
  verbose: boolean;
}

export class Tokenizer {
  private options: TokenizerOptions;

  public constructor(options: TokenizerOptions) {
    this.options = options;
  }

  public tokenize(source: string): Array<Token> {
    if (source.length === 0) throw new Error("Source is empty...");

    const tokens = new Array<Token>();

    let characterIndex = 0;
    let character = source[characterIndex];
    while (character) {
      character = character[++characterIndex];
    }

    if (this.options.verbose) {
      console.log("Tokenization completed");
    }

    return tokens;
  }

  private token(value: string, type: TokenType): Token {
    return { value, type };
  }
}
