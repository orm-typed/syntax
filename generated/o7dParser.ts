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
	public static readonly ATAT = 7;
	public static readonly LBRACE = 8;
	public static readonly RBRACE = 9;
	public static readonly LBRACKET = 10;
	public static readonly RBRACKET = 11;
	public static readonly LPAREN = 12;
	public static readonly RPAREN = 13;
	public static readonly COLON = 14;
	public static readonly COMMA = 15;
	public static readonly EQ = 16;
	public static readonly QUESTION = 17;
	public static readonly DOT = 18;
	public static readonly ID = 19;
	public static readonly STRING = 20;
	public static readonly ESC_SEQ = 21;
	public static readonly UNICODE_ESC = 22;
	public static readonly HEX = 23;
	public static readonly NUMBER16 = 24;
	public static readonly NUMBER10 = 25;
	public static readonly NUMBER8 = 26;
	public static readonly NUMBER2 = 27;
	public static readonly NUMBER = 28;
	public static readonly BOOLEAN = 29;
	public static readonly WS = 30;
	public static readonly SINGLE_LINE_COMMENT = 31;
	public static readonly MULTI_LINE_COMMENT = 32;
	public static readonly RULE_schema = 0;
	public static readonly RULE_comment = 1;
	public static readonly RULE_header = 2;
	public static readonly RULE_modelOrEnumOrScalarDeclaration = 3;
	public static readonly RULE_modelDeclaration = 4;
	public static readonly RULE_modelAttributeDeclaration = 5;
	public static readonly RULE_fieldDeclaration = 6;
	public static readonly RULE_fieldAttributeDeclaration = 7;
	public static readonly RULE_attributeValues = 8;
	public static readonly RULE_attributeValuePositional = 9;
	public static readonly RULE_attributeValueNamed = 10;
	public static readonly RULE_expressions = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_enumDeclaration = 13;
	public static readonly RULE_scalarDeclaration = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "comment", "header", "modelOrEnumOrScalarDeclaration", "modelDeclaration", 
		"modelAttributeDeclaration", "fieldDeclaration", "fieldAttributeDeclaration", 
		"attributeValues", "attributeValuePositional", "attributeValueNamed", 
		"expressions", "expression", "enumDeclaration", "scalarDeclaration",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'header'", "'model'", "'enum'", "'scalar'", "'null'", "'@'", 
		"'@@'", "'{'", "'}'", "'['", "']'", "'('", "')'", "':'", "','", "'='", 
		"'?'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER", "MODEL", "ENUM", "SCALAR", "NULL", "AT", "ATAT", 
		"LBRACE", "RBRACE", "LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COLON", 
		"COMMA", "EQ", "QUESTION", "DOT", "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", 
		"HEX", "NUMBER16", "NUMBER10", "NUMBER8", "NUMBER2", "NUMBER", "BOOLEAN", 
		"WS", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT",
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
			this.state = 33;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 30;
					this.comment();
					}
					}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.HEADER) {
				{
				this.state = 36;
				this.header();
				}
			}

			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (o7dParser.MODEL - 2)) | (1 << (o7dParser.ENUM - 2)) | (1 << (o7dParser.SCALAR - 2)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 2)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 2)))) !== 0)) {
				{
				{
				this.state = 39;
				this.modelOrEnumOrScalarDeclaration();
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 45;
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, o7dParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
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
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, o7dParser.RULE_header);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(o7dParser.HEADER);
			this.state = 50;
			this.match(o7dParser.LBRACE);
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 53;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case o7dParser.ID:
						{
						this.state = 51;
						this.fieldDeclaration();
						}
						break;
					case o7dParser.SINGLE_LINE_COMMENT:
					case o7dParser.MULTI_LINE_COMMENT:
						{
						this.state = 52;
						this.comment();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (o7dParser.ATAT - 7)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 7)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 7)))) !== 0)) {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case o7dParser.ATAT:
					{
					this.state = 58;
					this.modelAttributeDeclaration();
					}
					break;
				case o7dParser.SINGLE_LINE_COMMENT:
				case o7dParser.MULTI_LINE_COMMENT:
					{
					this.state = 59;
					this.comment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(o7dParser.RBRACE);
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
	public modelOrEnumOrScalarDeclaration(): ModelOrEnumOrScalarDeclarationContext {
		let _localctx: ModelOrEnumOrScalarDeclarationContext = new ModelOrEnumOrScalarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, o7dParser.RULE_modelOrEnumOrScalarDeclaration);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.SINGLE_LINE_COMMENT:
			case o7dParser.MULTI_LINE_COMMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.comment();
				}
				break;
			case o7dParser.MODEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				this.modelDeclaration();
				}
				break;
			case o7dParser.ENUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 69;
				this.enumDeclaration();
				}
				break;
			case o7dParser.SCALAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 70;
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
		this.enterRule(_localctx, 8, o7dParser.RULE_modelDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(o7dParser.MODEL);
			this.state = 74;
			this.match(o7dParser.ID);
			this.state = 75;
			this.match(o7dParser.LBRACE);
			this.state = 80;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 78;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case o7dParser.ID:
						{
						this.state = 76;
						this.fieldDeclaration();
						}
						break;
					case o7dParser.SINGLE_LINE_COMMENT:
					case o7dParser.MULTI_LINE_COMMENT:
						{
						this.state = 77;
						this.comment();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (o7dParser.ATAT - 7)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 7)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 7)))) !== 0)) {
				{
				this.state = 85;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case o7dParser.ATAT:
					{
					this.state = 83;
					this.modelAttributeDeclaration();
					}
					break;
				case o7dParser.SINGLE_LINE_COMMENT:
				case o7dParser.MULTI_LINE_COMMENT:
					{
					this.state = 84;
					this.comment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
			this.match(o7dParser.RBRACE);
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
	public modelAttributeDeclaration(): ModelAttributeDeclarationContext {
		let _localctx: ModelAttributeDeclarationContext = new ModelAttributeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, o7dParser.RULE_modelAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(o7dParser.ATAT);
			this.state = 93;
			this.match(o7dParser.ID);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.DOT) {
				{
				{
				this.state = 94;
				this.match(o7dParser.DOT);
				this.state = 95;
				this.match(o7dParser.ID);
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.LPAREN) {
				{
				this.state = 101;
				this.match(o7dParser.LPAREN);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 102;
					this.attributeValues();
					}
				}

				this.state = 105;
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
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, o7dParser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(o7dParser.ID);
			this.state = 109;
			this.match(o7dParser.ID);
			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.QUESTION:
				{
				this.state = 110;
				this.match(o7dParser.QUESTION);
				}
				break;
			case o7dParser.LBRACKET:
				{
				{
				this.state = 111;
				this.match(o7dParser.LBRACKET);
				this.state = 112;
				this.match(o7dParser.RBRACKET);
				}
				}
				break;
			case o7dParser.AT:
			case o7dParser.ATAT:
			case o7dParser.RBRACE:
			case o7dParser.ID:
			case o7dParser.SINGLE_LINE_COMMENT:
			case o7dParser.MULTI_LINE_COMMENT:
				break;
			default:
				break;
			}
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.AT) {
				{
				{
				this.state = 115;
				this.fieldAttributeDeclaration();
				}
				}
				this.state = 120;
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
	public fieldAttributeDeclaration(): FieldAttributeDeclarationContext {
		let _localctx: FieldAttributeDeclarationContext = new FieldAttributeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, o7dParser.RULE_fieldAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(o7dParser.AT);
			this.state = 122;
			this.match(o7dParser.ID);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.DOT) {
				{
				{
				this.state = 123;
				this.match(o7dParser.DOT);
				this.state = 124;
				this.match(o7dParser.ID);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.LPAREN) {
				{
				this.state = 130;
				this.match(o7dParser.LPAREN);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 131;
					this.attributeValues();
					}
				}

				this.state = 134;
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
		this.enterRule(_localctx, 16, o7dParser.RULE_attributeValues);
		let _la: number;
		try {
			let _alt: number;
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 137;
				this.attributeValuePositional();
				this.state = 142;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 138;
						this.match(o7dParser.COMMA);
						this.state = 139;
						this.attributeValuePositional();
						}
						}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.COMMA) {
					{
					{
					this.state = 145;
					this.match(o7dParser.COMMA);
					this.state = 146;
					this.attributeValueNamed();
					}
					}
					this.state = 151;
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
				this.state = 152;
				this.attributeValueNamed();
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.COMMA) {
					{
					{
					this.state = 153;
					this.match(o7dParser.COMMA);
					this.state = 154;
					this.attributeValueNamed();
					}
					}
					this.state = 159;
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
		this.enterRule(_localctx, 18, o7dParser.RULE_attributeValuePositional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.expression();
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
		this.enterRule(_localctx, 20, o7dParser.RULE_attributeValueNamed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(o7dParser.ID);
			this.state = 165;
			this.match(o7dParser.COLON);
			this.state = 166;
			this.expression();
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
		this.enterRule(_localctx, 22, o7dParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.expression();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.COMMA) {
				{
				{
				this.state = 169;
				this.match(o7dParser.COMMA);
				this.state = 170;
				this.expression();
				}
				}
				this.state = 175;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, o7dParser.RULE_expression);
		let _la: number;
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.match(o7dParser.ID);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.DOT) {
					{
					{
					this.state = 177;
					this.match(o7dParser.DOT);
					this.state = 178;
					this.match(o7dParser.ID);
					}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.LPAREN) {
					{
					this.state = 184;
					this.match(o7dParser.LPAREN);
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
						{
						this.state = 185;
						this.attributeValues();
						}
					}

					this.state = 188;
					this.match(o7dParser.RPAREN);
					}
				}

				}
				break;
			case o7dParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.match(o7dParser.STRING);
				}
				break;
			case o7dParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 192;
				this.match(o7dParser.NUMBER);
				}
				break;
			case o7dParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 193;
				this.match(o7dParser.BOOLEAN);
				}
				break;
			case o7dParser.NULL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 194;
				this.match(o7dParser.NULL);
				}
				break;
			case o7dParser.LBRACKET:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 195;
				this.match(o7dParser.LBRACKET);
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 196;
					this.expressions();
					}
				}

				this.state = 199;
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, o7dParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(o7dParser.ENUM);
			this.state = 203;
			this.match(o7dParser.ID);
			this.state = 204;
			this.match(o7dParser.LBRACE);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.STRING) {
				{
				{
				this.state = 205;
				this.match(o7dParser.STRING);
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.ATAT) {
				{
				{
				this.state = 211;
				this.modelAttributeDeclaration();
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this.match(o7dParser.RBRACE);
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
		this.enterRule(_localctx, 28, o7dParser.RULE_scalarDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(o7dParser.SCALAR);
			this.state = 220;
			this.match(o7dParser.ID);
			this.state = 221;
			this.match(o7dParser.EQ);
			this.state = 222;
			this.match(o7dParser.ID);
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.AT) {
				{
				{
				this.state = 223;
				this.fieldAttributeDeclaration();
				}
				}
				this.state = 228;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\xE8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x07\x02\"\n\x02\f\x02\x0E" +
		"\x02%\v\x02\x03\x02\x05\x02(\n\x02\x03\x02\x07\x02+\n\x02\f\x02\x0E\x02" +
		".\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x04\x03\x04\x07\x04?\n\x04\f" +
		"\x04\x0E\x04B\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05J\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06Q\n\x06\f\x06" +
		"\x0E\x06T\v\x06\x03\x06\x03\x06\x07\x06X\n\x06\f\x06\x0E\x06[\v\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07c\n\x07\f\x07\x0E" +
		"\x07f\v\x07\x03\x07\x03\x07\x05\x07j\n\x07\x03\x07\x05\x07m\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\bt\n\b\x03\b\x07\bw\n\b\f\b\x0E\bz\v\b" +
		"\x03\t\x03\t\x03\t\x03\t\x07\t\x80\n\t\f\t\x0E\t\x83\v\t\x03\t\x03\t\x05" +
		"\t\x87\n\t\x03\t\x05\t\x8A\n\t\x03\n\x03\n\x03\n\x07\n\x8F\n\n\f\n\x0E" +
		"\n\x92\v\n\x03\n\x03\n\x07\n\x96\n\n\f\n\x0E\n\x99\v\n\x03\n\x03\n\x03" +
		"\n\x07\n\x9E\n\n\f\n\x0E\n\xA1\v\n\x05\n\xA3\n\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x07\r\xAE\n\r\f\r\x0E\r\xB1\v\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\xB6\n\x0E\f\x0E\x0E\x0E\xB9\v\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xBD\n\x0E\x03\x0E\x05\x0E\xC0\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC8\n\x0E\x03\x0E\x05\x0E\xCB\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD1\n\x0F\f\x0F\x0E\x0F\xD4\v\x0F" +
		"\x03\x0F\x07\x0F\xD7\n\x0F\f\x0F\x0E\x0F\xDA\v\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xE3\n\x10\f\x10\x0E\x10\xE6" +
		"\v\x10\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		"\x02\x03\x03\x02!\"\x02\u0100\x02#\x03\x02\x02\x02\x041\x03\x02\x02\x02" +
		"\x063\x03\x02\x02\x02\bI\x03\x02\x02\x02\nK\x03\x02\x02\x02\f^\x03\x02" +
		"\x02\x02\x0En\x03\x02\x02\x02\x10{\x03\x02\x02\x02\x12\xA2\x03\x02\x02" +
		"\x02\x14\xA4\x03\x02\x02\x02\x16\xA6\x03\x02\x02\x02\x18\xAA\x03\x02\x02" +
		"\x02\x1A\xCA\x03\x02\x02\x02\x1C\xCC\x03\x02\x02\x02\x1E\xDD\x03\x02\x02" +
		"\x02 \"\x05\x04\x03\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02#$\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02&(\x05" +
		"\x06\x04\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02(,\x03\x02\x02\x02)" +
		"+\x05\b\x05\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-/\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x07\x02\x02\x03" +
		"0\x03\x03\x02\x02\x0212\t\x02\x02\x022\x05\x03\x02\x02\x0234\x07\x03\x02" +
		"\x0249\x07\n\x02\x0258\x05\x0E\b\x0268\x05\x04\x03\x0275\x03\x02\x02\x02" +
		"76\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":@\x03\x02\x02\x02;9\x03\x02\x02\x02<?\x05\f\x07\x02=?\x05\x04\x03\x02" +
		"><\x03\x02\x02\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07\v\x02\x02" +
		"D\x07\x03\x02\x02\x02EJ\x05\x04\x03\x02FJ\x05\n\x06\x02GJ\x05\x1C\x0F" +
		"\x02HJ\x05\x1E\x10\x02IE\x03\x02\x02\x02IF\x03\x02\x02\x02IG\x03\x02\x02" +
		"\x02IH\x03\x02\x02\x02J\t\x03\x02\x02\x02KL\x07\x04\x02\x02LM\x07\x15" +
		"\x02\x02MR\x07\n\x02\x02NQ\x05\x0E\b\x02OQ\x05\x04\x03\x02PN\x03\x02\x02" +
		"\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02SY\x03\x02\x02\x02TR\x03\x02\x02\x02UX\x05\f\x07\x02VX\x05\x04\x03" +
		"\x02WU\x03\x02\x02\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\v\x02" +
		"\x02]\v\x03\x02\x02\x02^_\x07\t\x02\x02_d\x07\x15\x02\x02`a\x07\x14\x02" +
		"\x02ac\x07\x15\x02\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02" +
		"\x02de\x03\x02\x02\x02el\x03\x02\x02\x02fd\x03\x02\x02\x02gi\x07\x0E\x02" +
		"\x02hj\x05\x12\n\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02" +
		"\x02km\x07\x0F\x02\x02lg\x03\x02\x02\x02lm\x03\x02\x02\x02m\r\x03\x02" +
		"\x02\x02no\x07\x15\x02\x02os\x07\x15\x02\x02pt\x07\x13\x02\x02qr\x07\f" +
		"\x02\x02rt\x07\r\x02\x02sp\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02" +
		"\x02\x02tx\x03\x02\x02\x02uw\x05\x10\t\x02vu\x03\x02\x02\x02wz\x03\x02" +
		"\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y\x0F\x03\x02\x02\x02zx\x03" +
		"\x02\x02\x02{|\x07\b\x02\x02|\x81\x07\x15\x02\x02}~\x07\x14\x02\x02~\x80" +
		"\x07\x15\x02\x02\x7F}\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F" +
		"\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x89\x03\x02\x02\x02\x83\x81" +
		"\x03\x02\x02\x02\x84\x86\x07\x0E\x02\x02\x85\x87\x05\x12\n\x02\x86\x85" +
		"\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A" +
		"\x07\x0F\x02\x02\x89\x84\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x11" +
		"\x03\x02\x02\x02\x8B\x90\x05\x14\v\x02\x8C\x8D\x07\x11\x02\x02\x8D\x8F" +
		"\x05\x14\v\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x97\x03\x02\x02\x02\x92\x90" +
		"\x03\x02\x02\x02\x93\x94\x07\x11\x02\x02\x94\x96\x05\x16\f\x02\x95\x93" +
		"\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\xA3\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9F" +
		"\x05\x16\f\x02\x9B\x9C\x07\x11\x02\x02\x9C\x9E\x05\x16\f\x02\x9D\x9B\x03" +
		"\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03" +
		"\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\x8B\x03" +
		"\x02\x02\x02\xA2\x9A\x03\x02\x02\x02\xA3\x13\x03\x02\x02\x02\xA4\xA5\x05" +
		"\x1A\x0E\x02\xA5\x15\x03\x02\x02\x02\xA6\xA7\x07\x15\x02\x02\xA7\xA8\x07" +
		"\x10\x02\x02\xA8\xA9\x05\x1A\x0E\x02\xA9\x17\x03\x02\x02\x02\xAA\xAF\x05" +
		"\x1A\x0E\x02\xAB\xAC\x07\x11\x02\x02\xAC\xAE\x05\x1A\x0E\x02\xAD\xAB\x03" +
		"\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\x19\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB7\x07" +
		"\x15\x02\x02\xB3\xB4\x07\x14\x02\x02\xB4\xB6\x07\x15\x02\x02\xB5\xB3\x03" +
		"\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03" +
		"\x02\x02\x02\xB8\xBF\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x07" +
		"\x0E\x02\x02\xBB\xBD\x05\x12\n\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x07\x0F\x02\x02\xBF\xBA\x03" +
		"\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xCB\x03\x02\x02\x02\xC1\xCB\x07" +
		"\x16\x02\x02\xC2\xCB\x07\x1E\x02\x02\xC3\xCB\x07\x1F\x02\x02\xC4\xCB\x07" +
		"\x07\x02\x02\xC5\xC7\x07\f\x02\x02\xC6\xC8\x05\x18\r\x02\xC7\xC6\x03\x02" +
		"\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x07\r" +
		"\x02\x02\xCA\xB2\x03\x02\x02\x02\xCA\xC1\x03\x02\x02\x02\xCA\xC2\x03\x02" +
		"\x02\x02\xCA\xC3\x03\x02\x02\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC5\x03\x02" +
		"\x02\x02\xCB\x1B\x03\x02\x02\x02\xCC\xCD\x07\x05\x02\x02\xCD\xCE\x07\x15" +
		"\x02\x02\xCE\xD2\x07\n\x02\x02\xCF\xD1\x07\x16\x02\x02\xD0\xCF\x03\x02" +
		"\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02" +
		"\x02\x02\xD3\xD8\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD7\x05\f" +
		"\x07\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02" +
		"\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02" +
		"\x02\x02\xDB\xDC\x07\v\x02\x02\xDC\x1D\x03\x02\x02\x02\xDD\xDE\x07\x06" +
		"\x02\x02\xDE\xDF\x07\x15\x02\x02\xDF\xE0\x07\x12\x02\x02\xE0\xE4\x07\x15" +
		"\x02\x02\xE1\xE3\x05\x10\t\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE6\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\x1F\x03\x02" +
		"\x02\x02\xE6\xE4\x03\x02\x02\x02##\',79>@IPRWYdilsx\x81\x86\x89\x90\x97" +
		"\x9F\xA2\xAF\xB7\xBC\xBF\xC7\xCA\xD2\xD8\xE4";
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
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public header(): HeaderContext | undefined {
		return this.tryGetRuleContext(0, HeaderContext);
	}
	public modelOrEnumOrScalarDeclaration(): ModelOrEnumOrScalarDeclarationContext[];
	public modelOrEnumOrScalarDeclaration(i: number): ModelOrEnumOrScalarDeclarationContext;
	public modelOrEnumOrScalarDeclaration(i?: number): ModelOrEnumOrScalarDeclarationContext | ModelOrEnumOrScalarDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelOrEnumOrScalarDeclarationContext);
		} else {
			return this.getRuleContext(i, ModelOrEnumOrScalarDeclarationContext);
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


export class CommentContext extends ParserRuleContext {
	public SINGLE_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(o7dParser.SINGLE_LINE_COMMENT, 0); }
	public MULTI_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(o7dParser.MULTI_LINE_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_comment; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public HEADER(): TerminalNode { return this.getToken(o7dParser.HEADER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(o7dParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(o7dParser.RBRACE, 0); }
	public fieldDeclaration(): FieldDeclarationContext[];
	public fieldDeclaration(i: number): FieldDeclarationContext;
	public fieldDeclaration(i?: number): FieldDeclarationContext | FieldDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public modelAttributeDeclaration(): ModelAttributeDeclarationContext[];
	public modelAttributeDeclaration(i: number): ModelAttributeDeclarationContext;
	public modelAttributeDeclaration(i?: number): ModelAttributeDeclarationContext | ModelAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, ModelAttributeDeclarationContext);
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


export class ModelOrEnumOrScalarDeclarationContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
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
	public get ruleIndex(): number { return o7dParser.RULE_modelOrEnumOrScalarDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterModelOrEnumOrScalarDeclaration) {
			listener.enterModelOrEnumOrScalarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitModelOrEnumOrScalarDeclaration) {
			listener.exitModelOrEnumOrScalarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitModelOrEnumOrScalarDeclaration) {
			return visitor.visitModelOrEnumOrScalarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelDeclarationContext extends ParserRuleContext {
	public MODEL(): TerminalNode { return this.getToken(o7dParser.MODEL, 0); }
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(o7dParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(o7dParser.RBRACE, 0); }
	public fieldDeclaration(): FieldDeclarationContext[];
	public fieldDeclaration(i: number): FieldDeclarationContext;
	public fieldDeclaration(i?: number): FieldDeclarationContext | FieldDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public modelAttributeDeclaration(): ModelAttributeDeclarationContext[];
	public modelAttributeDeclaration(i: number): ModelAttributeDeclarationContext;
	public modelAttributeDeclaration(i?: number): ModelAttributeDeclarationContext | ModelAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, ModelAttributeDeclarationContext);
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


export class ModelAttributeDeclarationContext extends ParserRuleContext {
	public ATAT(): TerminalNode { return this.getToken(o7dParser.ATAT, 0); }
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
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.RPAREN, 0); }
	public attributeValues(): AttributeValuesContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_modelAttributeDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterModelAttributeDeclaration) {
			listener.enterModelAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitModelAttributeDeclaration) {
			listener.exitModelAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitModelAttributeDeclaration) {
			return visitor.visitModelAttributeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
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
	public get ruleIndex(): number { return o7dParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAttributeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(o7dParser.AT, 0); }
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


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(o7dParser.ENUM, 0); }
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(o7dParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(o7dParser.RBRACE, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.STRING);
		} else {
			return this.getToken(o7dParser.STRING, i);
		}
	}
	public modelAttributeDeclaration(): ModelAttributeDeclarationContext[];
	public modelAttributeDeclaration(i: number): ModelAttributeDeclarationContext;
	public modelAttributeDeclaration(i?: number): ModelAttributeDeclarationContext | ModelAttributeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelAttributeDeclarationContext);
		} else {
			return this.getRuleContext(i, ModelAttributeDeclarationContext);
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


