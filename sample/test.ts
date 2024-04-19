import * as fs from "fs";
import { parseSchemaContext } from "../src/parseSchemaContext";

function isValid(filePath: string): boolean {
  const input = fs.readFileSync(filePath, "utf-8");
  console.log(parseSchemaContext(input)); // TODO: delete this line
  return !Array.isArray(parseSchemaContext(input));
}

if (process.argv.length !== 3) {
  console.error(`Usage: node ${process.argv[1]} <file>`);
  process.exit(0);
}

process.exit(isValid(process.argv[2]!) ? 0 : 1);
