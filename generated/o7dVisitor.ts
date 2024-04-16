// Generated from ./o7d.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./o7dParser";
import { ModelContext } from "./o7dParser";
import { FieldContext } from "./o7dParser";
import { TypeContext } from "./o7dParser";
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
	 * Visit a parse tree produced by `o7dParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.model`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModel?: (ctx: ModelContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `o7dParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

