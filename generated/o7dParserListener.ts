// Generated from ./o7dParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `o7dParser`.
 */
export interface o7dParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `o7dParser.anyComment`.
	 * @param ctx the parse tree
	 */
	enterAnyComment?: (ctx: AnyCommentContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.anyComment`.
	 * @param ctx the parse tree
	 */
	exitAnyComment?: (ctx: AnyCommentContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.lineEnding`.
	 * @param ctx the parse tree
	 */
	enterLineEnding?: (ctx: LineEndingContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.lineEnding`.
	 * @param ctx the parse tree
	 */
	exitLineEnding?: (ctx: LineEndingContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.commentLine`.
	 * @param ctx the parse tree
	 */
	enterCommentLine?: (ctx: CommentLineContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.commentLine`.
	 * @param ctx the parse tree
	 */
	exitCommentLine?: (ctx: CommentLineContext) => void;

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
	 * Enter a parse tree produced by `o7dParser.modelOrEnumOrScalarDeclarationComment`.
	 * @param ctx the parse tree
	 */
	enterModelOrEnumOrScalarDeclarationComment?: (ctx: ModelOrEnumOrScalarDeclarationCommentContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.modelOrEnumOrScalarDeclarationComment`.
	 * @param ctx the parse tree
	 */
	exitModelOrEnumOrScalarDeclarationComment?: (ctx: ModelOrEnumOrScalarDeclarationCommentContext) => void;

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
	 * Enter a parse tree produced by `o7dParser.modelAttributeDeclarationLine`.
	 * @param ctx the parse tree
	 */
	enterModelAttributeDeclarationLine?: (ctx: ModelAttributeDeclarationLineContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.modelAttributeDeclarationLine`.
	 * @param ctx the parse tree
	 */
	exitModelAttributeDeclarationLine?: (ctx: ModelAttributeDeclarationLineContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.fieldDeclarationLine`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclarationLine?: (ctx: FieldDeclarationLineContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.fieldDeclarationLine`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclarationLine?: (ctx: FieldDeclarationLineContext) => void;

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

	/**
	 * Enter a parse tree produced by `o7dParser.idWithDot`.
	 * @param ctx the parse tree
	 */
	enterIdWithDot?: (ctx: IdWithDotContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.idWithDot`.
	 * @param ctx the parse tree
	 */
	exitIdWithDot?: (ctx: IdWithDotContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `o7dParser.scalarDeclaration`.
	 * @param ctx the parse tree
	 */
	enterScalarDeclaration?: (ctx: ScalarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `o7dParser.scalarDeclaration`.
	 * @param ctx the parse tree
	 */
	exitScalarDeclaration?: (ctx: ScalarDeclarationContext) => void;
}

