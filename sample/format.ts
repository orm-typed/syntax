// WIP

import * as fs from "fs";
import { parseSchemaContext } from "../src/parseSchemaContext";
import { schemaContextToSchemaFile } from "../src/schemaContextToSchemaFile";

function main(filePath: string) {
  const input = fs.readFileSync(filePath, "utf-8");
  const schemaContext = parseSchemaContext(input);
  if (Array.isArray(schemaContext)) {
    console.error(schemaContext.join("\n"));
    process.exit(1);
  }
  const schemaFile = schemaContextToSchemaFile(schemaContext);
  console.log(JSON.stringify(schemaFile, null, 2)); // TODO: pretty-print
}

if (process.argv.length !== 3) {
  console.error("Usage: node test <file>");
  process.exit(0);
}

main(process.argv[2]!);
