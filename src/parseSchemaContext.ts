import {
  ANTLRErrorListener,
  CharStreams,
  CommonTokenStream,
  RecognitionException,
  Recognizer,
} from "antlr4ts";
import { o7dLexer } from "../generated/o7dLexer";
import { SchemaContext, o7dParser } from "../generated/o7dParser";

export function parseSchemaContext(input: string): SchemaContext | string[] {
  const chars = CharStreams.fromString(input);

  const lexer = new o7dLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new o7dParser(tokens);

  const errors: string[] = [];

  class VerboseListener implements ANTLRErrorListener<any> {
    syntaxError(
      _recognizer: Recognizer<any, any>,
      _offendingSymbol: any,
      line: number,
      charPositionInLine: number,
      msg: string,
      _e: RecognitionException | undefined
    ) {
      errors.push(`line ${line}:${charPositionInLine} ${msg}`);
    }
  }

  const listener = new VerboseListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  if (errors.length) return errors;

  return parser.schema();
}
