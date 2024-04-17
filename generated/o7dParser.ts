// Generated from ./o7dParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { o7dParserListener } from "./o7dParserListener";
import { o7dParserVisitor } from "./o7dParserVisitor";


export class o7dParser extends Parser {
	public static readonly HEADER = 1;
	public static readonly MODEL = 2;
	public static readonly ENUM = 3;
	public static readonly SCALAR = 4;
	public static readonly NULL = 5;
	public static readonly AT = 6;
	public static readonly LBRACE = 7;
	public static readonly RBRACE = 8;
	public static readonly LBRACKET = 9;
	public static readonly RBRACKET = 10;
	public static readonly LPAREN = 11;
	public static readonly RPAREN = 12;
	public static readonly COLON = 13;
	public static readonly COMMA = 14;
	public static readonly EQ = 15;
	public static readonly QUESTION = 16;
	public static readonly DOT = 17;
	public static readonly ID = 18;
	public static readonly STRING = 19;
	public static readonly ESC_SEQ = 20;
	public static readonly UNICODE_ESC = 21;
	public static readonly HEX = 22;
	public static readonly NUMBER16 = 23;
	public static readonly NUMBER10 = 24;
	public static readonly NUMBER8 = 25;
	public static readonly NUMBER2 = 26;
	public static readonly NUMBER = 27;
	public static readonly BOOLEAN = 28;
	public static readonly WS = 29;
	public static readonly NEWLINES = 30;
	public static readonly SINGLE_LINE_COMMENT = 31;
	public static readonly MULTI_LINE_COMMENT = 32;
	public static readonly RULE_schema = 0;
	public static readonly RULE_anyComment = 1;
	public static readonly RULE_lineEnding = 2;
	public static readonly RULE_commentLine = 3;
	public static readonly RULE_header = 4;
	public static readonly RULE_modelOrEnumOrScalarDeclarationComment = 5;
	public static readonly RULE_modelDeclaration = 6;
	public static readonly RULE_modelAttributeDeclarationLine = 7;
	public static readonly RULE_fieldDeclarationLine = 8;
	public static readonly RULE_fieldAttributeDeclaration = 9;
	public static readonly RULE_attributeValues = 10;
	public static readonly RULE_attributeValuePositional = 11;
	public static readonly RULE_attributeValueNamed = 12;
	public static readonly RULE_expressions = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_idWithDot = 15;
	public static readonly RULE_enumDeclaration = 16;
	public static readonly RULE_scalarDeclaration = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "anyComment", "lineEnding", "commentLine", "header", "modelOrEnumOrScalarDeclarationComment", 
		"modelDeclaration", "modelAttributeDeclarationLine", "fieldDeclarationLine", 
		"fieldAttributeDeclaration", "attributeValues", "attributeValuePositional", 
		"attributeValueNamed", "expressions", "expression", "idWithDot", "enumDeclaration", 
		"scalarDeclaration",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'header'", "'model'", "'enum'", "'scalar'", "'null'", "'@'", 
		"'{'", "'}'", "'['", "']'", "'('", "')'", "':'", "','", "'='", "'?'", 
		"'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER", "MODEL", "ENUM", "SCALAR", "NULL", "AT", "LBRACE", 
		"RBRACE", "LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COLON", "COMMA", 
		"EQ", "QUESTION", "DOT", "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", "HEX", 
		"NUMBER16", "NUMBER10", "NUMBER8", "NUMBER2", "NUMBER", "BOOLEAN", "WS", 
		"NEWLINES", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(o7dParser._LITERAL_NAMES, o7dParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return o7dParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "o7dParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return o7dParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return o7dParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(o7dParser._ATN, this);
	}
	// @RuleVersion(0)
	public schema(): SchemaContext {
		let _localctx: SchemaContext = new SchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, o7dParser.RULE_schema);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 36;
					this.commentLine();
					}
					}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.HEADER) {
				{
				this.state = 42;
				this.header();
				}
			}

			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (o7dParser.MODEL - 2)) | (1 << (o7dParser.ENUM - 2)) | (1 << (o7dParser.SCALAR - 2)) | (1 << (o7dParser.WS - 2)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 2)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 2)))) !== 0)) {
				{
				{
				this.state = 45;
				this.modelOrEnumOrScalarDeclarationComment();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 51;
			this.match(o7dParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anyComment(): AnyCommentContext {
		let _localctx: AnyCommentContext = new AnyCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, o7dParser.RULE_anyComment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			_la = this._input.LA(1);
			if (!(_la === o7dParser.SINGLE_LINE_COMMENT || _la === o7dParser.MULTI_LINE_COMMENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineEnding(): LineEndingContext {
		let _localctx: LineEndingContext = new LineEndingContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, o7dParser.RULE_lineEnding);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (o7dParser.WS - 29)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 29)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 29)))) !== 0)) {
				{
				{
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.WS) {
					{
					this.state = 55;
					this.match(o7dParser.WS);
					}
				}

				this.state = 58;
				this.anyComment();
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 64;
			this.match(o7dParser.NEWLINES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commentLine(): CommentLineContext {
		let _localctx: CommentLineContext = new CommentLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, o7dParser.RULE_commentLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 66;
				this.match(o7dParser.WS);
				}
			}

			this.state = 69;
			this.anyComment();
			this.state = 70;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, o7dParser.RULE_header);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(o7dParser.HEADER);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 73;
				this.match(o7dParser.WS);
				}
			}

			this.state = 76;
			this.match(o7dParser.LBRACE);
			this.state = 77;
			this.lineEnding();
			this.state = 82;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 80;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 78;
						this.fieldDeclarationLine();
						}
						break;

					case 2:
						{
						this.state = 79;
						this.commentLine();
						}
						break;
					}
					}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (o7dParser.AT - 6)) | (1 << (o7dParser.WS - 6)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 6)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 6)))) !== 0)) {
				{
				this.state = 87;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 85;
					this.modelAttributeDeclarationLine();
					}
					break;

				case 2:
					{
					this.state = 86;
					this.commentLine();
					}
					break;
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
			this.match(o7dParser.RBRACE);
			this.state = 93;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modelOrEnumOrScalarDeclarationComment(): ModelOrEnumOrScalarDeclarationCommentContext {
		let _localctx: ModelOrEnumOrScalarDeclarationCommentContext = new ModelOrEnumOrScalarDeclarationCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, o7dParser.RULE_modelOrEnumOrScalarDeclarationComment);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.WS:
			case o7dParser.SINGLE_LINE_COMMENT:
			case o7dParser.MULTI_LINE_COMMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.commentLine();
				}
				break;
			case o7dParser.MODEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.modelDeclaration();
				}
				break;
			case o7dParser.ENUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.enumDeclaration();
				}
				break;
			case o7dParser.SCALAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 98;
				this.scalarDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modelDeclaration(): ModelDeclarationContext {
		let _localctx: ModelDeclarationContext = new ModelDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, o7dParser.RULE_modelDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(o7dParser.MODEL);
			this.state = 102;
			this.match(o7dParser.WS);
			this.state = 103;
			this.match(o7dParser.ID);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 104;
				this.match(o7dParser.WS);
				}
			}

			this.state = 107;
			this.match(o7dParser.LBRACE);
			this.state = 108;
			this.lineEnding();
			this.state = 113;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 111;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						this.state = 109;
						this.fieldDeclarationLine();
						}
						break;

					case 2:
						{
						this.state = 110;
						this.commentLine();
						}
						break;
					}
					}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (o7dParser.AT - 6)) | (1 << (o7dParser.WS - 6)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 6)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 6)))) !== 0)) {
				{
				this.state = 118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 116;
					this.modelAttributeDeclarationLine();
					}
					break;

				case 2:
					{
					this.state = 117;
					this.commentLine();
					}
					break;
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(o7dParser.RBRACE);
			this.state = 124;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modelAttributeDeclarationLine(): ModelAttributeDeclarationLineContext {
		let _localctx: ModelAttributeDeclarationLineContext = new ModelAttributeDeclarationLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, o7dParser.RULE_modelAttributeDeclarationLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 126;
				this.match(o7dParser.WS);
				}
			}

			this.state = 129;
			this.match(o7dParser.AT);
			this.state = 130;
			this.match(o7dParser.AT);
			this.state = 131;
			this.idWithDot();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.LPAREN) {
				{
				this.state = 132;
				this.match(o7dParser.LPAREN);
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
					{
					this.state = 133;
					this.attributeValues();
					}
				}

				this.state = 136;
				this.match(o7dParser.RPAREN);
				}
			}

			this.state = 139;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclarationLine(): FieldDeclarationLineContext {
		let _localctx: FieldDeclarationLineContext = new FieldDeclarationLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, o7dParser.RULE_fieldDeclarationLine);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 141;
				this.match(o7dParser.WS);
				}
			}

			this.state = 144;
			this.match(o7dParser.ID);
			this.state = 145;
			this.match(o7dParser.WS);
			this.state = 146;
			this.match(o7dParser.ID);
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.QUESTION:
				{
				this.state = 147;
				this.match(o7dParser.QUESTION);
				}
				break;
			case o7dParser.LBRACKET:
				{
				{
				this.state = 148;
				this.match(o7dParser.LBRACKET);
				this.state = 149;
				this.match(o7dParser.RBRACKET);
				}
				}
				break;
			case o7dParser.WS:
			case o7dParser.NEWLINES:
			case o7dParser.SINGLE_LINE_COMMENT:
			case o7dParser.MULTI_LINE_COMMENT:
				break;
			default:
				break;
			}
			this.state = 156;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 152;
					this.match(o7dParser.WS);
					this.state = 153;
					this.fieldAttributeDeclaration();
					}
					}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 159;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAttributeDeclaration(): FieldAttributeDeclarationContext {
		let _localctx: FieldAttributeDeclarationContext = new FieldAttributeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, o7dParser.RULE_fieldAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(o7dParser.AT);
			this.state = 162;
			this.idWithDot();
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.LPAREN) {
				{
				this.state = 163;
				this.match(o7dParser.LPAREN);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
					{
					this.state = 164;
					this.attributeValues();
					}
				}

				this.state = 167;
				this.match(o7dParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeValues(): AttributeValuesContext {
		let _localctx: AttributeValuesContext = new AttributeValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, o7dParser.RULE_attributeValues);
		let _la: number;
		try {
			let _alt: number;
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 170;
				this.attributeValuePositional();
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 171;
						this.match(o7dParser.COMMA);
						this.state = 172;
						this.attributeValuePositional();
						}
						}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.COMMA) {
					{
					{
					this.state = 178;
					this.match(o7dParser.COMMA);
					this.state = 179;
					this.attributeValueNamed();
					}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 185;
				this.attributeValueNamed();
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.COMMA) {
					{
					{
					this.state = 186;
					this.match(o7dParser.COMMA);
					this.state = 187;
					this.attributeValueNamed();
					}
					}
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeValuePositional(): AttributeValuePositionalContext {
		let _localctx: AttributeValuePositionalContext = new AttributeValuePositionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, o7dParser.RULE_attributeValuePositional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 195;
				this.match(o7dParser.WS);
				}
			}

			this.state = 198;
			this.expression();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 199;
				this.match(o7dParser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeValueNamed(): AttributeValueNamedContext {
		let _localctx: AttributeValueNamedContext = new AttributeValueNamedContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, o7dParser.RULE_attributeValueNamed);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 202;
				this.match(o7dParser.WS);
				}
			}

			this.state = 205;
			this.match(o7dParser.ID);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 206;
				this.match(o7dParser.WS);
				}
			}

			this.state = 209;
			this.match(o7dParser.COLON);
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 210;
				this.match(o7dParser.WS);
				}
			}

			this.state = 213;
			this.expression();
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 214;
				this.match(o7dParser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressions(): ExpressionsContext {
		let _localctx: ExpressionsContext = new ExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, o7dParser.RULE_expressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 217;
				this.match(o7dParser.WS);
				}
			}

			this.state = 220;
			this.expression();
			this.state = 231;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === o7dParser.WS) {
						{
						this.state = 221;
						this.match(o7dParser.WS);
						}
					}

					this.state = 224;
					this.match(o7dParser.COMMA);
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === o7dParser.WS) {
						{
						this.state = 225;
						this.match(o7dParser.WS);
						}
					}

					this.state = 228;
					this.expression();
					}
					}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 234;
				this.match(o7dParser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, o7dParser.RULE_expression);
		let _la: number;
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.idWithDot();
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.LPAREN) {
					{
					this.state = 238;
					this.match(o7dParser.LPAREN);
					this.state = 240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
						{
						this.state = 239;
						this.attributeValues();
						}
					}

					this.state = 242;
					this.match(o7dParser.RPAREN);
					}
				}

				}
				break;
			case o7dParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.match(o7dParser.STRING);
				}
				break;
			case o7dParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.match(o7dParser.NUMBER);
				}
				break;
			case o7dParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 247;
				this.match(o7dParser.BOOLEAN);
				}
				break;
			case o7dParser.NULL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 248;
				this.match(o7dParser.NULL);
				}
				break;
			case o7dParser.LBRACKET:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 249;
				this.match(o7dParser.LBRACKET);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
					{
					this.state = 250;
					this.expressions();
					}
				}

				this.state = 253;
				this.match(o7dParser.RBRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idWithDot(): IdWithDotContext {
		let _localctx: IdWithDotContext = new IdWithDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, o7dParser.RULE_idWithDot);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(o7dParser.ID);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.DOT) {
				{
				{
				this.state = 257;
				this.match(o7dParser.DOT);
				this.state = 258;
				this.match(o7dParser.ID);
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, o7dParser.RULE_enumDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(o7dParser.ENUM);
			this.state = 265;
			this.match(o7dParser.WS);
			this.state = 266;
			this.match(o7dParser.ID);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 267;
				this.match(o7dParser.WS);
				}
			}

			this.state = 270;
			this.match(o7dParser.LBRACE);
			this.state = 271;
			this.lineEnding();
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 278;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						{
						this.state = 273;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === o7dParser.WS) {
							{
							this.state = 272;
							this.match(o7dParser.WS);
							}
						}

						this.state = 275;
						this.match(o7dParser.STRING);
						this.state = 276;
						this.lineEnding();
						}
						}
						break;

					case 2:
						{
						this.state = 277;
						this.commentLine();
						}
						break;
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (o7dParser.AT - 6)) | (1 << (o7dParser.WS - 6)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 6)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 6)))) !== 0)) {
				{
				this.state = 285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 283;
					this.modelAttributeDeclarationLine();
					}
					break;

				case 2:
					{
					this.state = 284;
					this.commentLine();
					}
					break;
				}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 290;
			this.match(o7dParser.RBRACE);
			this.state = 291;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarDeclaration(): ScalarDeclarationContext {
		let _localctx: ScalarDeclarationContext = new ScalarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, o7dParser.RULE_scalarDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(o7dParser.SCALAR);
			this.state = 294;
			this.match(o7dParser.WS);
			this.state = 295;
			this.match(o7dParser.ID);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 296;
				this.match(o7dParser.WS);
				}
			}

			this.state = 299;
			this.match(o7dParser.EQ);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 300;
				this.match(o7dParser.WS);
				}
			}

			this.state = 303;
			this.match(o7dParser.ID);
			this.state = 308;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 304;
					this.match(o7dParser.WS);
					this.state = 305;
					this.fieldAttributeDeclaration();
					}
					}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 311;
			this.lineEnding();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u013C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x05\x02" +
		".\n\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x05\x04;\n\x04\x03\x04\x07\x04>\n\x04\f\x04\x0E\x04" +
		"A\v\x04\x03\x04\x03\x04\x03\x05\x05\x05F\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x05\x06M\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"S\n\x06\f\x06\x0E\x06V\v\x06\x03\x06\x03\x06\x07\x06Z\n\x06\f\x06\x0E" +
		"\x06]\v\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07f\n\x07\x03\b\x03\b\x03\b\x03\b\x05\bl\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x07\br\n\b\f\b\x0E\bu\v\b\x03\b\x03\b\x07\by\n\b\f\b\x0E\b|\v\b\x03\b" +
		"\x03\b\x03\b\x03\t\x05\t\x82\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x89" +
		"\n\t\x03\t\x05\t\x8C\n\t\x03\t\x03\t\x03\n\x05\n\x91\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\x99\n\n\x03\n\x03\n\x07\n\x9D\n\n\f\n\x0E\n" +
		"\xA0\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\xA8\n\v\x03\v\x05\v" +
		"\xAB\n\v\x03\f\x03\f\x03\f\x07\f\xB0\n\f\f\f\x0E\f\xB3\v\f\x03\f\x03\f" +
		"\x07\f\xB7\n\f\f\f\x0E\f\xBA\v\f\x03\f\x03\f\x03\f\x07\f\xBF\n\f\f\f\x0E" +
		"\f\xC2\v\f\x05\f\xC4\n\f\x03\r\x05\r\xC7\n\r\x03\r\x03\r\x05\r\xCB\n\r" +
		"\x03\x0E\x05\x0E\xCE\n\x0E\x03\x0E\x03\x0E\x05\x0E\xD2\n\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xD6\n\x0E\x03\x0E\x03\x0E\x05\x0E\xDA\n\x0E\x03\x0F\x05\x0F" +
		"\xDD\n\x0F\x03\x0F\x03\x0F\x05\x0F\xE1\n\x0F\x03\x0F\x03\x0F\x05\x0F\xE5" +
		"\n\x0F\x03\x0F\x07\x0F\xE8\n\x0F\f\x0F\x0E\x0F\xEB\v\x0F\x03\x0F\x05\x0F" +
		"\xEE\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xF3\n\x10\x03\x10\x05\x10\xF6" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xFE\n\x10" +
		"\x03\x10\x05\x10\u0101\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0106\n\x11" +
		"\f\x11\x0E\x11\u0109\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u010F" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0114\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\u0119\n\x12\f\x12\x0E\x12\u011C\v\x12\x03\x12\x03\x12\x07" +
		"\x12\u0120\n\x12\f\x12\x0E\x12\u0123\v\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u012C\n\x13\x03\x13\x03\x13\x05\x13" +
		"\u0130\n\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0135\n\x13\f\x13\x0E\x13" +
		"\u0138\v\x13\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x03\x03\x02!\"\x02\u0166" +
		"\x02)\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06?\x03\x02\x02\x02\bE\x03" +
		"\x02\x02\x02\nJ\x03\x02\x02\x02\fe\x03\x02\x02\x02\x0Eg\x03\x02\x02\x02" +
		"\x10\x81\x03\x02\x02\x02\x12\x90\x03\x02\x02\x02\x14\xA3\x03\x02\x02\x02" +
		"\x16\xC3\x03\x02\x02\x02\x18\xC6\x03\x02\x02\x02\x1A\xCD\x03\x02\x02\x02" +
		"\x1C\xDC\x03\x02\x02\x02\x1E\u0100\x03\x02\x02\x02 \u0102\x03\x02\x02" +
		"\x02\"\u010A\x03\x02\x02\x02$\u0127\x03\x02\x02\x02&(\x05\b\x05\x02\'" +
		"&\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02" +
		"*-\x03\x02\x02\x02+)\x03\x02\x02\x02,.\x05\n\x06\x02-,\x03\x02\x02\x02" +
		"-.\x03\x02\x02\x02.2\x03\x02\x02\x02/1\x05\f\x07\x020/\x03\x02\x02\x02" +
		"14\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x0235\x03\x02\x02\x02" +
		"42\x03\x02\x02\x0256\x07\x02\x02\x036\x03\x03\x02\x02\x0278\t\x02\x02" +
		"\x028\x05\x03\x02\x02\x029;\x07\x1F\x02\x02:9\x03\x02\x02\x02:;\x03\x02" +
		"\x02\x02;<\x03\x02\x02\x02<>\x05\x04\x03\x02=:\x03\x02\x02\x02>A\x03\x02" +
		"\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02A?\x03\x02" +
		"\x02\x02BC\x07 \x02\x02C\x07\x03\x02\x02\x02DF\x07\x1F\x02\x02ED\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x05\x04\x03\x02HI\x05\x06" +
		"\x04\x02I\t\x03\x02\x02\x02JL\x07\x03\x02\x02KM\x07\x1F\x02\x02LK\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x07\t\x02\x02OT\x05" +
		"\x06\x04\x02PS\x05\x12\n\x02QS\x05\b\x05\x02RP\x03\x02\x02\x02RQ\x03\x02" +
		"\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U[\x03\x02" +
		"\x02\x02VT\x03\x02\x02\x02WZ\x05\x10\t\x02XZ\x05\b\x05\x02YW\x03\x02\x02" +
		"\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02" +
		"\x02\x02\\^\x03\x02\x02\x02][\x03\x02\x02\x02^_\x07\n\x02\x02_`\x05\x06" +
		"\x04\x02`\v\x03\x02\x02\x02af\x05\b\x05\x02bf\x05\x0E\b\x02cf\x05\"\x12" +
		"\x02df\x05$\x13\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02ec\x03\x02\x02" +
		"\x02ed\x03\x02\x02\x02f\r\x03\x02\x02\x02gh\x07\x04\x02\x02hi\x07\x1F" +
		"\x02\x02ik\x07\x14\x02\x02jl\x07\x1F\x02\x02kj\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lm\x03\x02\x02\x02mn\x07\t\x02\x02ns\x05\x06\x04\x02or\x05\x12" +
		"\n\x02pr\x05\b\x05\x02qo\x03\x02\x02\x02qp\x03\x02\x02\x02ru\x03\x02\x02" +
		"\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tz\x03\x02\x02\x02us\x03\x02\x02" +
		"\x02vy\x05\x10\t\x02wy\x05\b\x05\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02" +
		"y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02" +
		"|z\x03\x02\x02\x02}~\x07\n\x02\x02~\x7F\x05\x06\x04\x02\x7F\x0F\x03\x02" +
		"\x02\x02\x80\x82\x07\x1F\x02\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x07\b\x02\x02\x84\x85\x07\b\x02" +
		"\x02\x85\x8B\x05 \x11\x02\x86\x88\x07\r\x02\x02\x87\x89\x05\x16\f\x02" +
		"\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02" +
		"\x8A\x8C\x07\x0E\x02\x02\x8B\x86\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02" +
		"\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x05\x06\x04\x02\x8E\x11\x03\x02\x02\x02" +
		"\x8F\x91\x07\x1F\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
		"\x91\x92\x03\x02\x02\x02\x92\x93\x07\x14\x02\x02\x93\x94\x07\x1F\x02\x02" +
		"\x94\x98\x07\x14\x02\x02\x95\x99\x07\x12\x02\x02\x96\x97\x07\v\x02\x02" +
		"\x97\x99\x07\f\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02" +
		"\x98\x99\x03\x02\x02\x02\x99\x9E\x03\x02\x02\x02\x9A\x9B\x07\x1F\x02\x02" +
		"\x9B\x9D\x05\x14\v\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02" +
		"\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02" +
		"\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x05\x06\x04\x02\xA2\x13\x03\x02\x02\x02" +
		"\xA3\xA4\x07\b\x02\x02\xA4\xAA\x05 \x11\x02\xA5\xA7\x07\r\x02\x02\xA6" +
		"\xA8\x05\x16\f\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8" +
		"\xA9\x03\x02\x02\x02\xA9\xAB\x07\x0E\x02\x02\xAA\xA5\x03\x02\x02\x02\xAA" +
		"\xAB\x03\x02\x02\x02\xAB\x15\x03\x02\x02\x02\xAC\xB1\x05\x18\r\x02\xAD" +
		"\xAE\x07\x10\x02\x02\xAE\xB0\x05\x18\r\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
		"\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"\xB8\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07\x10\x02\x02\xB5" +
		"\xB7\x05\x1A\x0E\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC4\x03\x02\x02\x02\xBA" +
		"\xB8\x03\x02\x02\x02\xBB\xC0\x05\x1A\x0E\x02\xBC\xBD\x07\x10\x02\x02\xBD" +
		"\xBF\x05\x1A\x0E\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2" +
		"\xC0\x03\x02\x02\x02\xC3\xAC\x03\x02\x02\x02\xC3\xBB\x03\x02\x02\x02\xC4" +
		"\x17\x03\x02\x02\x02\xC5\xC7\x07\x1F\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6" +
		"\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x05\x1E\x10\x02\xC9" +
		"\xCB\x07\x1F\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB" +
		"\x19\x03\x02\x02\x02\xCC\xCE\x07\x1F\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x07\x14\x02\x02\xD0" +
		"\xD2\x07\x1F\x02\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
		"\xD3\x03\x02\x02\x02\xD3\xD5\x07\x0F\x02\x02\xD4\xD6\x07\x1F\x02\x02\xD5" +
		"\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
		"\xD9\x05\x1E\x10\x02\xD8\xDA\x07\x1F\x02\x02\xD9\xD8\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\x1B\x03\x02\x02\x02\xDB\xDD\x07\x1F\x02\x02\xDC" +
		"\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE" +
		"\xE9\x05\x1E\x10\x02\xDF\xE1\x07\x1F\x02\x02\xE0\xDF\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x07\x10\x02\x02\xE3" +
		"\xE5\x07\x1F\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\xE8\x05\x1E\x10\x02\xE7\xE0\x03\x02\x02\x02\xE8" +
		"\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA" +
		"\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xEE\x07\x1F\x02\x02\xED" +
		"\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x1D\x03\x02\x02\x02\xEF" +
		"\xF5\x05 \x11\x02\xF0\xF2\x07\r\x02\x02\xF1\xF3\x05\x16\f\x02\xF2\xF1" +
		"\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6" +
		"\x07\x0E\x02\x02\xF5\xF0\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\u0101" +
		"\x03\x02\x02\x02\xF7\u0101\x07\x15\x02\x02\xF8\u0101\x07\x1D\x02\x02\xF9" +
		"\u0101\x07\x1E\x02\x02\xFA\u0101\x07\x07\x02\x02\xFB\xFD\x07\v\x02\x02" +
		"\xFC\xFE\x05\x1C\x0F\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x07\f\x02\x02\u0100\xEF\x03\x02\x02" +
		"\x02\u0100\xF7\x03\x02\x02\x02\u0100\xF8\x03\x02\x02\x02\u0100\xF9\x03" +
		"\x02\x02\x02\u0100\xFA\x03\x02\x02\x02\u0100\xFB\x03\x02\x02\x02\u0101" +
		"\x1F\x03\x02\x02\x02\u0102\u0107\x07\x14\x02\x02\u0103\u0104\x07\x13\x02" +
		"\x02\u0104\u0106\x07\x14\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0109" +
		"\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
		"\u0108!\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010B\x07\x05" +
		"\x02\x02\u010B\u010C\x07\x1F\x02\x02\u010C\u010E\x07\x14\x02\x02\u010D" +
		"\u010F\x07\x1F\x02\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02" +
		"\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x07\t\x02\x02\u0111\u011A" +
		"\x05\x06\x04\x02\u0112\u0114\x07\x1F\x02\x02\u0113\u0112\x03\x02\x02\x02" +
		"\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07" +
		"\x15\x02\x02\u0116\u0119\x05\x06\x04\x02\u0117\u0119\x05\b\x05\x02\u0118" +
		"\u0113\x03\x02\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02" +
		"\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
		"\u0121\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x05\x10" +
		"\t\x02\u011E\u0120\x05\b\x05\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E" +
		"\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03" +
		"\x02\x02\x02\u0124\u0125\x07\n\x02\x02\u0125\u0126\x05\x06\x04\x02\u0126" +
		"#\x03\x02\x02\x02\u0127\u0128\x07\x06\x02\x02\u0128\u0129\x07\x1F\x02" +
		"\x02\u0129\u012B\x07\x14\x02\x02\u012A\u012C\x07\x1F\x02\x02\u012B\u012A" +
		"\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02" +
		"\u012D\u012F\x07\x11\x02\x02\u012E\u0130\x07\x1F\x02\x02\u012F\u012E\x03" +
		"\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0136\x07\x14\x02\x02\u0132\u0133\x07\x1F\x02\x02\u0133\u0135\x05\x14" +
		"\v\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134" +
		"\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02" +
		"\u0138\u0136\x03\x02\x02\x02\u0139\u013A\x05\x06\x04\x02\u013A%\x03\x02" +
		"\x02\x028)-2:?ELRTY[ekqsxz\x81\x88\x8B\x90\x98\x9E\xA7\xAA\xB1\xB8\xC0" +
		"\xC3\xC6\xCA\xCD\xD1\xD5\xD9\xDC\xE0\xE4\xE9\xED\xF2\xF5\xFD\u0100\u0107" +
		"\u010E\u0113\u0118\u011A\u011F\u0121\u012B\u012F\u0136";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!o7dParser.__ATN) {
			o7dParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(o7dParser._serializedATN));
		}

		return o7dParser.__ATN;
	}

}

export class SchemaContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(o7dParser.EOF, 0); }
	public commentLine(): CommentLineContext[];
	public commentLine(i: number): CommentLineContext;
	public commentLine(i?: number): CommentLineContext | CommentLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentLineContext);
		} else {
			return this.getRuleContext(i, CommentLineContext);
		}
	}
	public header(): HeaderContext | undefined {
		return this.tryGetRuleContext(0, HeaderContext);
	}
	public modelOrEnumOrScalarDeclarationComment(): ModelOrEnumOrScalarDeclarationCommentContext[];
	public modelOrEnumOrScalarDeclarationComment(i: number): ModelOrEnumOrScalarDeclarationCommentContext;
	public modelOrEnumOrScalarDeclarationComment(i?: number): ModelOrEnumOrScalarDeclarationCommentContext | ModelOrEnumOrScalarDeclarationCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelOrEnumOrScalarDeclarationCommentContext);
		} else {
			return this.getRuleContext(i, ModelOrEnumOrScalarDeclarationCommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_schema; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterSchema) {
			listener.enterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitSchema) {
			listener.exitSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitSchema) {
			return visitor.visitSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyCommentContext extends ParserRuleContext {
	public SINGLE_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(o7dParser.SINGLE_LINE_COMMENT, 0); }
	public MULTI_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(o7dParser.MULTI_LINE_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_anyComment; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterAnyComment) {
			listener.enterAnyComment(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitAnyComment) {
			listener.exitAnyComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitAnyComment) {
			return visitor.visitAnyComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineEndingContext extends ParserRuleContext {
	public NEWLINES(): TerminalNode { return this.getToken(o7dParser.NEWLINES, 0); }
	public anyComment(): AnyCommentContext[];
	public anyComment(i: number): AnyCommentContext;
	public anyComment(i?: number): AnyCommentContext | AnyCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnyCommentContext);
		} else {
			return this.getRuleContext(i, AnyCommentContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_lineEnding; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterLineEnding) {
			listener.enterLineEnding(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitLineEnding) {
			listener.exitLineEnding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitLineEnding) {
			return visitor.visitLineEnding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentLineContext extends ParserRuleContext {
	public anyComment(): AnyCommentContext {
		return this.getRuleContext(0, AnyCommentContext);
	}
	public lineEnding(): LineEndingContext {
		return this.getRuleContext(0, LineEndingContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(o7dParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_commentLine; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterCommentLine) {
			listener.enterCommentLine(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitCommentLine) {
			listener.exitCommentLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitCommentLine) {
			return visitor.visitCommentLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public HEADER(): TerminalNode { return this.getToken(o7dParser.HEADER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(o7dParser.LBRACE, 0); }
	public lineEnding(): LineEndingContext[];
	public lineEnding(i: number): LineEndingContext;
	public lineEnding(i?: number): LineEndingContext | LineEndingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineEndingContext);
		} else {
			return this.getRuleContext(i, LineEndingContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(o7dParser.RBRACE, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(o7dParser.WS, 0); }
	public fieldDeclarationLine(): FieldDeclarationLineContext[];
	public fieldDeclarationLine(i: number): FieldDeclarationLineContext;
	public fieldDeclarationLine(i?: number): FieldDeclarationLineContext | FieldDeclarationLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationLineContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationLineContext);
		}
	}
	public commentLine(): CommentLineContext[];
	public commentLine(i: number): CommentLineContext;
	public commentLine(i?: number): CommentLineContext | CommentLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentLineContext);
		} else {
			return this.getRuleContext(i, CommentLineContext);
		}
	}
	public modelAttributeDeclarationLine(): ModelAttributeDeclarationLineContext[];
	public modelAttributeDeclarationLine(i: number): ModelAttributeDeclarationLineContext;
	public modelAttributeDeclarationLine(i?: number): ModelAttributeDeclarationLineContext | ModelAttributeDeclarationLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelAttributeDeclarationLineContext);
		} else {
			return this.getRuleContext(i, ModelAttributeDeclarationLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_header; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelOrEnumOrScalarDeclarationCommentContext extends ParserRuleContext {
	public commentLine(): CommentLineContext | undefined {
		return this.tryGetRuleContext(0, CommentLineContext);
	}
	public modelDeclaration(): ModelDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ModelDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public scalarDeclaration(): ScalarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ScalarDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_modelOrEnumOrScalarDeclarationComment; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterModelOrEnumOrScalarDeclarationComment) {
			listener.enterModelOrEnumOrScalarDeclarationComment(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitModelOrEnumOrScalarDeclarationComment) {
			listener.exitModelOrEnumOrScalarDeclarationComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitModelOrEnumOrScalarDeclarationComment) {
			return visitor.visitModelOrEnumOrScalarDeclarationComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelDeclarationContext extends ParserRuleContext {
	public MODEL(): TerminalNode { return this.getToken(o7dParser.MODEL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(o7dParser.LBRACE, 0); }
	public lineEnding(): LineEndingContext[];
	public lineEnding(i: number): LineEndingContext;
	public lineEnding(i?: number): LineEndingContext | LineEndingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineEndingContext);
		} else {
			return this.getRuleContext(i, LineEndingContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(o7dParser.RBRACE, 0); }
	public fieldDeclarationLine(): FieldDeclarationLineContext[];
	public fieldDeclarationLine(i: number): FieldDeclarationLineContext;
	public fieldDeclarationLine(i?: number): FieldDeclarationLineContext | FieldDeclarationLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationLineContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationLineContext);
		}
	}
	public commentLine(): CommentLineContext[];
	public commentLine(i: number): CommentLineContext;
	public commentLine(i?: number): CommentLineContext | CommentLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentLineContext);
		} else {
			return this.getRuleContext(i, CommentLineContext);
		}
	}
	public modelAttributeDeclarationLine(): ModelAttributeDeclarationLineContext[];
	public modelAttributeDeclarationLine(i: number): ModelAttributeDeclarationLineContext;
	public modelAttributeDeclarationLine(i?: number): ModelAttributeDeclarationLineContext | ModelAttributeDeclarationLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelAttributeDeclarationLineContext);
		} else {
			return this.getRuleContext(i, ModelAttributeDeclarationLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_modelDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterModelDeclaration) {
			listener.enterModelDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitModelDeclaration) {
			listener.exitModelDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitModelDeclaration) {
			return visitor.visitModelDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelAttributeDeclarationLineContext extends ParserRuleContext {
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.AT);
		} else {
			return this.getToken(o7dParser.AT, i);
		}
	}
	public idWithDot(): IdWithDotContext {
		return this.getRuleContext(0, IdWithDotContext);
	}
	public lineEnding(): LineEndingContext {
		return this.getRuleContext(0, LineEndingContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(o7dParser.WS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.RPAREN, 0); }
	public attributeValues(): AttributeValuesContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_modelAttributeDeclarationLine; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterModelAttributeDeclarationLine) {
			listener.enterModelAttributeDeclarationLine(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitModelAttributeDeclarationLine) {
			listener.exitModelAttributeDeclarationLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitModelAttributeDeclarationLine) {
			return visitor.visitModelAttributeDeclarationLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationLineContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	public lineEnding(): LineEndingContext {
		return this.getRuleContext(0, LineEndingContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(o7dParser.QUESTION, 0); }
	public fieldAttributeDeclaration(): FieldAttributeDeclarationContext[];
	public fieldAttributeDeclaration(i: number): FieldAttributeDeclarationContext;
	public fieldAttributeDeclaration(i?: number): FieldAttributeDeclarationContext | FieldAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldAttributeDeclarationContext);
		}
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(o7dParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(o7dParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_fieldDeclarationLine; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterFieldDeclarationLine) {
			listener.enterFieldDeclarationLine(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitFieldDeclarationLine) {
			listener.exitFieldDeclarationLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclarationLine) {
			return visitor.visitFieldDeclarationLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAttributeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(o7dParser.AT, 0); }
	public idWithDot(): IdWithDotContext {
		return this.getRuleContext(0, IdWithDotContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.RPAREN, 0); }
	public attributeValues(): AttributeValuesContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_fieldAttributeDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterFieldAttributeDeclaration) {
			listener.enterFieldAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitFieldAttributeDeclaration) {
			listener.exitFieldAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitFieldAttributeDeclaration) {
			return visitor.visitFieldAttributeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValuesContext extends ParserRuleContext {
	public attributeValuePositional(): AttributeValuePositionalContext[];
	public attributeValuePositional(i: number): AttributeValuePositionalContext;
	public attributeValuePositional(i?: number): AttributeValuePositionalContext | AttributeValuePositionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeValuePositionalContext);
		} else {
			return this.getRuleContext(i, AttributeValuePositionalContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.COMMA);
		} else {
			return this.getToken(o7dParser.COMMA, i);
		}
	}
	public attributeValueNamed(): AttributeValueNamedContext[];
	public attributeValueNamed(i: number): AttributeValueNamedContext;
	public attributeValueNamed(i?: number): AttributeValueNamedContext | AttributeValueNamedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeValueNamedContext);
		} else {
			return this.getRuleContext(i, AttributeValueNamedContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_attributeValues; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterAttributeValues) {
			listener.enterAttributeValues(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitAttributeValues) {
			listener.exitAttributeValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitAttributeValues) {
			return visitor.visitAttributeValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValuePositionalContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_attributeValuePositional; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterAttributeValuePositional) {
			listener.enterAttributeValuePositional(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitAttributeValuePositional) {
			listener.exitAttributeValuePositional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitAttributeValuePositional) {
			return visitor.visitAttributeValuePositional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValueNamedContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(o7dParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_attributeValueNamed; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterAttributeValueNamed) {
			listener.enterAttributeValueNamed(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitAttributeValueNamed) {
			listener.exitAttributeValueNamed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitAttributeValueNamed) {
			return visitor.visitAttributeValueNamed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.COMMA);
		} else {
			return this.getToken(o7dParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_expressions; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterExpressions) {
			listener.enterExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitExpressions) {
			listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public idWithDot(): IdWithDotContext | undefined {
		return this.tryGetRuleContext(0, IdWithDotContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.RPAREN, 0); }
	public attributeValues(): AttributeValuesContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuesContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(o7dParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(o7dParser.NUMBER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.BOOLEAN, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(o7dParser.NULL, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(o7dParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(o7dParser.RBRACKET, 0); }
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_expression; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdWithDotContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.DOT);
		} else {
			return this.getToken(o7dParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_idWithDot; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterIdWithDot) {
			listener.enterIdWithDot(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitIdWithDot) {
			listener.exitIdWithDot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitIdWithDot) {
			return visitor.visitIdWithDot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(o7dParser.ENUM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(o7dParser.LBRACE, 0); }
	public lineEnding(): LineEndingContext[];
	public lineEnding(i: number): LineEndingContext;
	public lineEnding(i?: number): LineEndingContext | LineEndingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineEndingContext);
		} else {
			return this.getRuleContext(i, LineEndingContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(o7dParser.RBRACE, 0); }
	public commentLine(): CommentLineContext[];
	public commentLine(i: number): CommentLineContext;
	public commentLine(i?: number): CommentLineContext | CommentLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentLineContext);
		} else {
			return this.getRuleContext(i, CommentLineContext);
		}
	}
	public modelAttributeDeclarationLine(): ModelAttributeDeclarationLineContext[];
	public modelAttributeDeclarationLine(i: number): ModelAttributeDeclarationLineContext;
	public modelAttributeDeclarationLine(i?: number): ModelAttributeDeclarationLineContext | ModelAttributeDeclarationLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelAttributeDeclarationLineContext);
		} else {
			return this.getRuleContext(i, ModelAttributeDeclarationLineContext);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.STRING);
		} else {
			return this.getToken(o7dParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarDeclarationContext extends ParserRuleContext {
	public SCALAR(): TerminalNode { return this.getToken(o7dParser.SCALAR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.WS);
		} else {
			return this.getToken(o7dParser.WS, i);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
	}
	public EQ(): TerminalNode { return this.getToken(o7dParser.EQ, 0); }
	public lineEnding(): LineEndingContext {
		return this.getRuleContext(0, LineEndingContext);
	}
	public fieldAttributeDeclaration(): FieldAttributeDeclarationContext[];
	public fieldAttributeDeclaration(i: number): FieldAttributeDeclarationContext;
	public fieldAttributeDeclaration(i?: number): FieldAttributeDeclarationContext | FieldAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldAttributeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_scalarDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterScalarDeclaration) {
			listener.enterScalarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitScalarDeclaration) {
			listener.exitScalarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitScalarDeclaration) {
			return visitor.visitScalarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


