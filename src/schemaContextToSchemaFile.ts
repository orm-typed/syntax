import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  AnyCommentContext,
  AttributeValueNamedContext,
  AttributeValuePositionalContext,
  AttributeValuesContext,
  CommentLineContext,
  EnumDeclarationContext,
  EnumMemberLineContext,
  ExpressionContext,
  FieldAttributeDeclarationContext,
  FieldDeclarationLineContext,
  HeaderContext,
  IdWithDotContext,
  LineEndingContext,
  ModelAttributeDeclarationLineContext,
  ModelDeclarationContext,
  ModelOrEnumOrScalarDeclarationOrCommentContext,
  ScalarDeclarationContext,
  SchemaContext,
} from "../generated/o7dParser";
import {
  Comment,
  EnumDeclaration,
  EnumMember,
  Expression,
  FieldAttributeDeclaration,
  FieldAttributeParameterDeclaration,
  HeaderDeclaration,
  ModelAttributeDeclaration,
  ModelDeclaration,
  ModelFieldDeclaration,
  ScalarDeclaration,
  SchemaFile,
} from "./type/SchemaFile";

export function schemaContextToSchemaFile(input: SchemaContext): SchemaFile {
  const comments = input.commentLine().map(commentLineToComments);
  const headerContext = input.header();
  const header = headerContext && headerToHeaderDeclaration(headerContext);
  const declarations = input
    .modelOrEnumOrScalarDeclarationOrComment()
    .map(
      modelOrEnumOrScalarDeclarationOrCommentToModelOrEnumOrScalarDeclaration
    );
  return {
    comments,
    header,
    declarations,
  };
}

function commentLineToComments(input: CommentLineContext): Comment[] {
  const initial = anyCommentToComment(input.anyComment());
  return [initial, ...lineEndingToComments(input.lineEnding())];
}

function anyCommentToComment(input: AnyCommentContext): Comment {
  const singleLineComment = input.SINGLE_LINE_COMMENT();
  if (singleLineComment) return singleLineCommentToComment(singleLineComment);
  const multiLineComment = input.MULTI_LINE_COMMENT();
  if (multiLineComment) return multiLineCommentToComment(multiLineComment);
  throw new Error();
}

function singleLineCommentToComment(input: TerminalNode): Comment {
  return { multiline: false, message: input.text };
}

function multiLineCommentToComment(input: TerminalNode): Comment {
  return { multiline: true, message: input.text };
}

function lineEndingToComments(input: LineEndingContext): Comment[] {
  return input.anyComment().map(anyCommentToComment);
}

function headerToHeaderDeclaration(input: HeaderContext): HeaderDeclaration {
  const [start, end] = input.lineEnding();
  if (!start || !end) throw new Error();

  const children: (
    | ModelFieldDeclaration
    | ModelAttributeDeclaration
    | Comment[]
  )[] = [];
  for (let i = 0; i < input.childCount; i++) {
    const child = input.getChild(i);
    if (child instanceof FieldDeclarationLineContext) {
      children.push(fieldDeclarationLineToModelFieldDeclaration(child));
    } else if (child instanceof ModelAttributeDeclarationLineContext) {
      children.push(
        modelAttributeDeclarationLineToModelAttributeDeclaration(child)
      );
    } else if (child instanceof CommentLineContext) {
      children.push(commentLineToComments(child));
    }
  }

  return {
    commentsBefore: lineEndingToComments(start),
    children,
    commentsAfter: lineEndingToComments(end),
  };
}

function fieldDeclarationLineToModelFieldDeclaration(
  input: FieldDeclarationLineContext
): ModelFieldDeclaration {
  const [name, type] = input.ID();
  if (!name || !type) throw new Error();

  const lineEnding = input.lineEnding();
  return {
    type: "field",
    name: name.text,
    dataType: type.text,
    fieldType:
      (input.QUESTION() && "optional") ||
      (input.LBRACKET() && "array") ||
      "normal",
    attributes: input
      .fieldAttributeDeclaration()
      .map(fieldAttributeDeclarationToFieldAttributeDeclaration),
    comments: lineEnding ? lineEndingToComments(lineEnding) : [],
  };
}

function fieldAttributeDeclarationToFieldAttributeDeclaration(
  input: FieldAttributeDeclarationContext
): FieldAttributeDeclaration {
  const parameters = input.attributeValues();
  return {
    type: "attribute",
    name: idWithDotToString(input.idWithDot()),
    parameters: input.LPAREN()
      ? (parameters &&
          attributeValuesToFieldAttributeParameterDeclarations(parameters)) ||
        []
      : undefined,
  };
}

function idWithDotToString(input: IdWithDotContext): string {
  return input
    .ID()
    .map((id) => id.text)
    .join(".");
}

function attributeValuesToFieldAttributeParameterDeclarations(
  input: AttributeValuesContext
): FieldAttributeParameterDeclaration[] {
  return [
    ...input
      .attributeValuePositional()
      .map(attributeValuePositionalToFieldAttributeParameterDeclaration),
    ...input
      .attributeValueNamed()
      .map(attributeValueNamedToFieldAttributeParameterDeclaration),
  ];
}

function attributeValuePositionalToFieldAttributeParameterDeclaration(
  input: AttributeValuePositionalContext
): FieldAttributeParameterDeclaration {
  return {
    value: expressionToExpression(input.expression()),
  };
}

function expressionToExpression(input: ExpressionContext): Expression {
  const idWithDot = input.idWithDot();
  if (idWithDot) {
    const parameters = input.attributeValues();
    return {
      type: "keyword",
      name: idWithDotToString(idWithDot),
      parameters: input.LPAREN()
        ? (parameters &&
            attributeValuesToFieldAttributeParameterDeclarations(parameters)) ||
          []
        : undefined,
    };
  }
  const string = input.STRING();
  if (string) {
    return string.text;
  }
  const number = input.NUMBER();
  if (number) {
    return { type: "numberString", value: number.text };
  }
  const boolean = input.BOOLEAN();
  if (boolean) {
    return boolean.text === "true";
  }
  if (input.NULL()) {
    return null;
  }
  const expressions = input.expressions();
  return expressions
    ? expressions.expression().map(expressionToExpression)
    : [];
}

function attributeValueNamedToFieldAttributeParameterDeclaration(
  input: AttributeValueNamedContext
): FieldAttributeParameterDeclaration {
  return {
    name: input.ID().text,
    value: expressionToExpression(input.expression()),
  };
}

function modelAttributeDeclarationLineToModelAttributeDeclaration(
  input: ModelAttributeDeclarationLineContext
): ModelAttributeDeclaration {
  const parameters = input.attributeValues();
  return {
    type: "attribute",
    name: idWithDotToString(input.idWithDot()),
    parameters: input.LPAREN()
      ? (parameters &&
          attributeValuesToFieldAttributeParameterDeclarations(parameters)) ||
        []
      : undefined,
    comments: lineEndingToComments(input.lineEnding()),
  };
}

function modelOrEnumOrScalarDeclarationOrCommentToModelOrEnumOrScalarDeclaration(
  input: ModelOrEnumOrScalarDeclarationOrCommentContext
): Comment[] | ModelDeclaration | EnumDeclaration | ScalarDeclaration {
  const commentLine = input.commentLine();
  if (commentLine) {
    return commentLineToComments(commentLine);
  }
  const modelDeclaration = input.modelDeclaration();
  if (modelDeclaration) {
    return modelDeclarationToModelDeclaration(modelDeclaration);
  }
  const enumDeclaration = input.enumDeclaration();
  if (enumDeclaration) {
    return enumDeclarationToEnumlDeclaration(enumDeclaration);
  }
  const scalarDeclaration = input.scalarDeclaration();
  if (scalarDeclaration) {
    return scalarDeclarationToScalarDeclaration(scalarDeclaration);
  }
  throw new Error();
}

function modelDeclarationToModelDeclaration(
  input: ModelDeclarationContext
): ModelDeclaration {
  const [start, end] = input.lineEnding();
  if (!start || !end) throw new Error();

  const children: (
    | ModelFieldDeclaration
    | ModelAttributeDeclaration
    | Comment[]
  )[] = [];
  for (let i = 0; i < input.childCount; i++) {
    const child = input.getChild(i);
    if (child instanceof FieldDeclarationLineContext) {
      children.push(fieldDeclarationLineToModelFieldDeclaration(child));
    } else if (child instanceof ModelAttributeDeclarationLineContext) {
      children.push(
        modelAttributeDeclarationLineToModelAttributeDeclaration(child)
      );
    } else if (child instanceof CommentLineContext) {
      children.push(commentLineToComments(child));
    }
  }

  return {
    name: input.ID().text,
    commentsBefore: lineEndingToComments(start),
    children,
    commentsAfter: lineEndingToComments(end),
  };
}

function enumDeclarationToEnumlDeclaration(
  input: EnumDeclarationContext
): EnumDeclaration {
  const children: (EnumMember | ModelAttributeDeclaration | Comment[])[] = [];
  for (let i = 0; i < input.childCount; i++) {
    const child = input.getChild(i);
    if (child instanceof EnumMemberLineContext) {
      children.push(enumMemberLineToEnumMember(child));
    } else if (child instanceof ModelAttributeDeclarationLineContext) {
      children.push(
        modelAttributeDeclarationLineToModelAttributeDeclaration(child)
      );
    } else if (child instanceof CommentLineContext) {
      children.push(commentLineToComments(child));
    }
  }

  return {
    name: input.ID().text,
    children,
  };
}

function enumMemberLineToEnumMember(input: EnumMemberLineContext): EnumMember {
  return {
    type: "member",
    name: input.STRING().text,
    comments: lineEndingToComments(input.lineEnding()),
  };
}

function scalarDeclarationToScalarDeclaration(
  input: ScalarDeclarationContext
): ScalarDeclaration {
  const [lhs, rhs] = input.ID();
  if (!lhs || !rhs) throw new Error();

  return {
    lhsName: lhs.text,
    rhsName: rhs.text,
    attributes: input
      .fieldAttributeDeclaration()
      .map(fieldAttributeDeclarationToFieldAttributeDeclaration),
    comments: lineEndingToComments(input.lineEnding()),
  };
}
