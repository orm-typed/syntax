import * as fs from "fs";
import { parseSchemaContext } from "../src/parseSchemaContext";
import { schemaContextToSchemaFile } from "../src/schemaContextToSchemaFile";
import {
  Comment,
  EnumDeclaration,
  EnumMember,
  Expression,
  FieldAttributeDeclaration,
  HeaderDeclaration,
  ModelAttributeDeclaration,
  ModelDeclaration,
  ModelFieldDeclaration,
  ScalarDeclaration,
  SchemaFile,
} from "../src/type/SchemaFile";

function main(filePath: string) {
  const input = fs.readFileSync(filePath, "utf-8");
  const schemaContext = parseSchemaContext(input);
  if (Array.isArray(schemaContext)) {
    console.error(schemaContext.join("\n"));
    process.exit(1);
  }
  const schemaFile = schemaContextToSchemaFile(schemaContext);

  printSchema(schemaFile);
}

function printSchema(input: SchemaFile) {
  input.comments.forEach((comment) => printComments(comment, ""));
  if (input.header) printHeader(input.header);
  input.declarations.forEach(printDeclaration);
}

function printComments(input: Comment[], prefix = "  ") {
  console.log(`${prefix}${input.map((comment) => comment.message).join(" ")}`);
}

function printHeader(input: HeaderDeclaration) {
  console.log(
    [
      "header {",
      ...input.commentsBefore.map((comment) => comment.message),
    ].join(" ")
  );
  input.children.forEach(printModelFieldOrModelAttributeOrComments);
  console.log(
    ["}", ...input.commentsAfter.map((comment) => comment.message)].join(" ")
  );
}

function printModelFieldOrModelAttributeOrComments(
  input: ModelFieldDeclaration | ModelAttributeDeclaration | Comment[]
) {
  if (Array.isArray(input)) {
    printComments(input);
  } else if (input.type === "field") {
    console.log(
      `  ${input.name} ${input.dataType}${
        (input.fieldType === "array" && "[]") ||
        (input.fieldType === "optional" && "?") ||
        ""
      }${input.attributes
        .map((attribute) => " " + attributeToString(attribute))
        .join("")}${input.comments
        .map((comment) => " " + comment.message)
        .join("")}`
    );
  } else {
    console.log(
      "  @" +
        attributeToString(input) +
        input.comments.map((comment) => " " + comment.message).join("")
    );
  }
}

function attributeToString(input: FieldAttributeDeclaration) {
  return `@${input.name}${
    input.parameters
      ? "(" +
        input.parameters
          .map(
            (parameter) =>
              `${parameter.name}=${expressionToString(parameter.value)}`
          )
          .join(", ") +
        ")"
      : ""
  }`;
}

function expressionToString(input: Expression): string {
  if (input === null) return "null";
  switch (typeof input) {
    case "string":
      return `"${escapeString(input)}"`;
    case "boolean":
      return input.toString();
    default:
      if (Array.isArray(input))
        return `[${input.map(expressionToString).join(", ")}]`;
      if (input.type === "keyword")
        return `${input.name}${
          input.parameters
            ? "(" +
              input.parameters.map(
                (parameter) =>
                  ((parameter.name && parameter.name + ": ") || "") +
                  expressionToString(parameter.value)
              ) +
              ")"
            : ""
        }`;
      return input.value;
  }
}

function escapeString(input: string) {
  return input
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\b/g, "\\b")
    .replace(/\f/g, "\\f")
    .replace(/\r/g, "\\r")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t");
}

function printDeclaration(
  input: Comment[] | ModelDeclaration | EnumDeclaration | ScalarDeclaration
) {
  if (Array.isArray(input)) {
    printComments(input);
  } else if (input.type === "model") {
    console.log(
      [
        `model ${input.name} {`,
        ...input.commentsBefore.map((comment) => comment.message),
      ].join(" ")
    );
    input.children.forEach(printModelFieldOrModelAttributeOrComments);
    console.log(
      ["}", ...input.commentsAfter.map((comment) => comment.message)].join(" ")
    );
  } else if (input.type === "enum") {
    console.log(
      [
        `model ${input.name} {`,
        ...input.commentsBefore.map((comment) => comment.message),
      ].join(" ")
    );
    input.children.forEach(printEnumMemberOrModelAttributeOrComments);
    console.log(
      ["}", ...input.commentsAfter.map((comment) => comment.message)].join(" ")
    );
  } else if (input.type === "scalar") {
    console.log(
      `scalar ${input.lhsName} = ${input.rhsName}${input.comments
        .map((comment) => " " + comment.message)
        .join("")}`
    );
  }
}

function printEnumMemberOrModelAttributeOrComments(
  input: EnumMember | ModelAttributeDeclaration | Comment[]
) {
  if (Array.isArray(input)) {
    printComments(input);
  } else if (input.type === "member") {
    console.log(
      `  ${escapeString(input.name)}${input.comments
        .map((comment) => " " + comment.message)
        .join("")}`
    );
  } else {
    console.log(
      "  @" +
        attributeToString(input) +
        input.comments.map((comment) => " " + comment.message).join("")
    );
  }
}

if (process.argv.length !== 3) {
  console.error(`Usage: node ${process.argv[1]} <file>`);
  process.exit(0);
}

main(process.argv[2]!);
