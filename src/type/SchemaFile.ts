export interface SchemaFile {
  header: ModelDeclaration;
  declarations: (ModelDeclaration | EnumDeclaration | ScalarDeclaration)[];
}

export interface ModelDeclaration {
  type: "model";
  name: string;
  fields: ModelFieldDeclaration[];
  attributes: AttributeDeclaration[];
}

export interface ModelFieldDeclaration {
  name: string;
  dataType: string;
  fieldType: ModelFieldDeclarationType;
  attributes: AttributeDeclaration[];
}

export type ModelFieldDeclarationType = "normal" | "optional" | "array";

export interface AttributeDeclaration {
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
  members: string[];
  attributes: AttributeDeclaration[];
}

export interface ScalarDeclaration {
  lhsName: string;
  rhsName: string;
  attributes: AttributeDeclaration[];
}
