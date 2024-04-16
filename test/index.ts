import * as fs from "fs";
import {
  ANTLRErrorListener,
  CharStreams,
  CommonTokenStream,
  Lexer,
  Parser,
  RecognitionException,
  Recognizer,
} from "antlr4ts";
import { o7dLexer } from "../generated/o7dLexer";
import { o7dParser } from "../generated/o7dParser";

class VerboseListener implements ANTLRErrorListener<any> {
  public lexerErrorCount = 0;
  public parserErrorCount = 0;

  syntaxError(
    recognizer: Recognizer<any, any>,
    _offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined
  ) {
    console.log(`line ${line}:${charPositionInLine} ${msg}`);
    if (recognizer instanceof Lexer) {
      this.lexerErrorCount++;
    } else if (recognizer instanceof Parser) {
      this.parserErrorCount++;
    }
  }
}

function isValid(filePath: string): boolean {
  const input = fs.readFileSync(filePath, "utf-8");
  const chars = CharStreams.fromString(input);

  const lexer = new o7dLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new o7dParser(tokens);

  const listener = new VerboseListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  const tree = parser.prog();

  return listener.lexerErrorCount === 0 && listener.parserErrorCount === 0;
}

if (process.argv.length !== 3) {
  console.error("Usage: node test <file>");
  process.exit(0);
}

process.exit(isValid(process.argv[2]) ? 0 : 1);
