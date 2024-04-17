export interface SchemaFile {
  comments: Comment[][];
  header: HeaderDeclaration | undefined;
  declarations: (
    | Comment[]
    | ModelDeclaration
    | EnumDeclaration
    | ScalarDeclaration
  )[];
}

export interface Comment {
  multiline: boolean;
  message: string;
}

export interface HeaderDeclaration {
  commentsBefore: Comment[];
  children: (ModelFieldDeclaration | ModelAttributeDeclaration | Comment[])[];
  commentsAfter: Comment[];
}

export interface ModelFieldDeclaration {
  type: "field";
  name: string;
  dataType: string;
  fieldType: ModelFieldDeclarationType;
  attributes: FieldAttributeDeclaration[];
  comments: Comment[];
}

export type ModelFieldDeclarationType = "normal" | "optional" | "array";

export interface FieldAttributeDeclaration {
  type: "attribute";
  name: string;
  parameters?: FieldAttributeParameterDeclaration[];
}

export interface FieldAttributeParameterDeclaration {
  name?: string;
  value: Expression;
}

export type Expression =
  | Keyword
  | string
  | NumberString
  | boolean
  | null
  | Expression[];

export interface Keyword {
  type: "keyword";
  name: string;
  parameters?: FieldAttributeParameterDeclaration[];
}

export interface NumberString {
  type: "numberString";
  value: string;
}

export interface ModelAttributeDeclaration {
  type: "attribute";
  name: string;
  parameters?: FieldAttributeParameterDeclaration[];
  comments: Comment[];
}

export interface ModelDeclaration {
  name: string;
  commentsBefore: Comment[];
  children: (ModelFieldDeclaration | FieldAttributeDeclaration | Comment[])[];
  commentsAfter: Comment[];
}

export interface EnumDeclaration {
  name: string;
  children: (EnumMember | ModelAttributeDeclaration | Comment[])[];
}

export interface EnumMember {
  type: "member";
  name: string;
  comments: Comment[];
}

export interface ScalarDeclaration {
  lhsName: string;
  rhsName: string;
  attributes: FieldAttributeDeclaration[];
  comments: Comment[];
}
