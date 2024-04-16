// Generated from ./o7d.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SchemaContext } from "./o7dParser";
import { HeaderContext } from "./o7dParser";
import { ModelDeclarationContext } from "./o7dParser";
import { ModelAttributeDeclarationContext } from "./o7dParser";
import { FieldDeclarationContext } from "./o7dParser";
import { FieldAttributeDeclarationContext } from "./o7dParser";
import { AttributeValuesContext } from "./o7dParser";
import { AttributeValuePositionalContext } from "./o7dParser";
import { AttributeValueNamedContext } from "./o7dParser";
import { ExpressionsContext } from "./o7dParser";
import { ExpressionContext } from "./o7dParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `o7dParser`.
 */
export interface o7dListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `o7dParser.schema`.
	 * @param ctx the parse tree
	 */
	enterSchema?: (ctx: SchemaContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.schema`.
	 * @param ctx the parse tree
	 */
	exitSchema?: (ctx: SchemaContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.modelDeclaration`.
	 * @param ctx the parse tree
	 */
	enterModelDeclaration?: (ctx: ModelDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.modelDeclaration`.
	 * @param ctx the parse tree
	 */
	exitModelDeclaration?: (ctx: ModelDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.modelAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterModelAttributeDeclaration?: (ctx: ModelAttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.modelAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitModelAttributeDeclaration?: (ctx: ModelAttributeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.fieldAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldAttributeDeclaration?: (ctx: FieldAttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.fieldAttributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldAttributeDeclaration?: (ctx: FieldAttributeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.attributeValues`.
	 * @param ctx the parse tree
	 */
	enterAttributeValues?: (ctx: AttributeValuesContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.attributeValues`.
	 * @param ctx the parse tree
	 */
	exitAttributeValues?: (ctx: AttributeValuesContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.attributeValuePositional`.
	 * @param ctx the parse tree
	 */
	enterAttributeValuePositional?: (ctx: AttributeValuePositionalContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.attributeValuePositional`.
	 * @param ctx the parse tree
	 */
	exitAttributeValuePositional?: (ctx: AttributeValuePositionalContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.attributeValueNamed`.
	 * @param ctx the parse tree
	 */
	enterAttributeValueNamed?: (ctx: AttributeValueNamedContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.attributeValueNamed`.
	 * @param ctx the parse tree
	 */
	exitAttributeValueNamed?: (ctx: AttributeValueNamedContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

