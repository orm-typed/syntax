export interface SchemaFile {
  comments: Comment[];
  header: ModelDeclaration;
  declarations: (
    | Comment
    | ModelDeclaration
    | EnumDeclaration
    | ScalarDeclaration
  )[];
}

export interface Comment {
  type: "comment";
  multiline: boolean;
  message: string;
}

export interface ModelDeclaration {
  type: "model";
  name: string;
  children: (ModelFieldDeclaration | AttributeDeclaration | Comment)[];
}

export interface ModelFieldDeclaration {
  type: "field";
  name: string;
  dataType: string;
  fieldType: ModelFieldDeclarationType;
  attributes: AttributeDeclaration[];
  comments: Comment[];
}

export type ModelFieldDeclarationType = "normal" | "optional" | "array";

export interface AttributeDeclaration {
  type: "attribute";
  name: string;
  parameter?: FieldAttributeParameterDeclaration[];
}

export interface FieldAttributeParameterDeclaration {
  name?: string;
  value: Expression;
}

export type Expression =
  | string
  | number
  | boolean
  | null
  | Keyword
  | Expression[];

export interface Keyword {
  name: string;
}

export interface EnumDeclaration {
  name: string;
  members: (EnumMember | Comment)[];
  attributes: (AttributeDeclaration | Comment)[];
}

export interface EnumMember {
  type: "enumMember";
  name: string;
  comments: Comment[];
}

export interface ScalarDeclaration {
  lhsName: string;
  rhsName: string;
  attributes: AttributeDeclaration[];
  comments: Comment[];
}
