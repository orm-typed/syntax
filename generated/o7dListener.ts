// Generated from ./o7d.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./o7dParser";
import { ModelContext } from "./o7dParser";
import { FieldContext } from "./o7dParser";
import { TypeContext } from "./o7dParser";
import { ExpressionContext } from "./o7dParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `o7dParser`.
 */
export interface o7dListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `o7dParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.model`.
	 * @param ctx the parse tree
	 */
	enterModel?: (ctx: ModelContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.model`.
	 * @param ctx the parse tree
	 */
	exitModel?: (ctx: ModelContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

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

