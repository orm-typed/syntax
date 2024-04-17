// Generated from ./o7dParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SchemaContext } from "./o7dParser";
import { AnyCommentContext } from "./o7dParser";
import { LineEndingContext } from "./o7dParser";
import { CommentLineContext } from "./o7dParser";
import { HeaderContext } from "./o7dParser";
import { ModelOrEnumOrScalarDeclarationCommentContext } from "./o7dParser";
import { ModelDeclarationContext } from "./o7dParser";
import { ModelAttributeDeclarationLineContext } from "./o7dParser";
import { FieldDeclarationLineContext } from "./o7dParser";
import { FieldAttributeDeclarationContext } from "./o7dParser";
import { AttributeValuesContext } from "./o7dParser";
import { AttributeValuePositionalContext } from "./o7dParser";
import { AttributeValueNamedContext } from "./o7dParser";
import { ExpressionsContext } from "./o7dParser";
import { ExpressionContext } from "./o7dParser";
import { IdWithDotContext } from "./o7dParser";
import { EnumDeclarationContext } from "./o7dParser";
import { ScalarDeclarationContext } from "./o7dParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `o7dParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface o7dParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `o7dParser.schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema?: (ctx: SchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.anyComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyComment?: (ctx: AnyCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.lineEnding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineEnding?: (ctx: LineEndingContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.commentLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentLine?: (ctx: CommentLineContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.modelOrEnumOrScalarDeclarationComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelOrEnumOrScalarDeclarationComment?: (ctx: ModelOrEnumOrScalarDeclarationCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.modelDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelDeclaration?: (ctx: ModelDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.modelAttributeDeclarationLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelAttributeDeclarationLine?: (ctx: ModelAttributeDeclarationLineContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.fieldDeclarationLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclarationLine?: (ctx: FieldDeclarationLineContext) => Result;

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

	/**
	 * Visit a parse tree produced by `o7dParser.idWithDot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdWithDot?: (ctx: IdWithDotContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.scalarDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarDeclaration?: (ctx: ScalarDeclarationContext) => Result;
}

