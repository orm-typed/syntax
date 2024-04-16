// Generated from ./o7d.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `o7dParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface o7dVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `o7dParser.schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema?: (ctx: SchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.modelDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelDeclaration?: (ctx: ModelDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.modelAttributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelAttributeDeclaration?: (ctx: ModelAttributeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.fieldAttributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAttributeDeclaration?: (ctx: FieldAttributeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.attributeValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValues?: (ctx: AttributeValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.attributeValuePositional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValuePositional?: (ctx: AttributeValuePositionalContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.attributeValueNamed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValueNamed?: (ctx: AttributeValueNamedContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

