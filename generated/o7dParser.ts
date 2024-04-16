// Generated from ./o7d.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { o7dListener } from "./o7dListener";
import { o7dVisitor } from "./o7dVisitor";


export class o7dParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly ID = 20;
	public static readonly STRING = 21;
	public static readonly ESC_SEQ = 22;
	public static readonly UNICODE_ESC = 23;
	public static readonly HEX = 24;
	public static readonly NUMBER = 25;
	public static readonly BOOLEAN = 26;
	public static readonly WS = 27;
	public static readonly SINGLE_LINE_COMMENT = 28;
	public static readonly MULTI_LINE_COMMENT = 29;
	public static readonly RULE_schema = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_modelOrEnumOrScalarDeclaration = 2;
	public static readonly RULE_modelDeclaration = 3;
	public static readonly RULE_modelAttributeDeclaration = 4;
	public static readonly RULE_fieldDeclaration = 5;
	public static readonly RULE_fieldAttributeDeclaration = 6;
	public static readonly RULE_attributeValues = 7;
	public static readonly RULE_attributeValuePositional = 8;
	public static readonly RULE_attributeValueNamed = 9;
	public static readonly RULE_expressions = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_enumDeclaration = 12;
	public static readonly RULE_scalarDeclaration = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "header", "modelOrEnumOrScalarDeclaration", "modelDeclaration", 
		"modelAttributeDeclaration", "fieldDeclaration", "fieldAttributeDeclaration", 
		"attributeValues", "attributeValuePositional", "attributeValueNamed", 
		"expressions", "expression", "enumDeclaration", "scalarDeclaration",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'header'", "'{'", "'}'", "'model'", "'@@'", "'.'", "'('", 
		"')'", "'?'", "'[]'", "'@'", "','", "':'", "'null'", "'['", "']'", "'enum'", 
		"'scalar'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "ID", 
		"STRING", "ESC_SEQ", "UNICODE_ESC", "HEX", "NUMBER", "BOOLEAN", "WS", 
		"SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(o7dParser._LITERAL_NAMES, o7dParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return o7dParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "o7d.g4"; }

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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__0) {
				{
				this.state = 28;
				this.header();
				}
			}

			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__3) | (1 << o7dParser.T__16) | (1 << o7dParser.T__17))) !== 0)) {
				{
				{
				this.state = 31;
				this.modelOrEnumOrScalarDeclaration();
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 37;
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
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, o7dParser.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(o7dParser.T__0);
			this.state = 40;
			this.match(o7dParser.T__1);
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.ID) {
				{
				{
				this.state = 41;
				this.fieldDeclaration();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__4) {
				{
				{
				this.state = 47;
				this.modelAttributeDeclaration();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
			this.match(o7dParser.T__2);
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
		this.enterRule(_localctx, 4, o7dParser.RULE_modelOrEnumOrScalarDeclaration);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.modelDeclaration();
				}
				break;
			case o7dParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.enumDeclaration();
				}
				break;
			case o7dParser.T__17:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 57;
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
		this.enterRule(_localctx, 6, o7dParser.RULE_modelDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(o7dParser.T__3);
			this.state = 61;
			this.match(o7dParser.ID);
			this.state = 62;
			this.match(o7dParser.T__1);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.ID) {
				{
				{
				this.state = 63;
				this.fieldDeclaration();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__4) {
				{
				{
				this.state = 69;
				this.modelAttributeDeclaration();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(o7dParser.T__2);
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
		this.enterRule(_localctx, 8, o7dParser.RULE_modelAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(o7dParser.T__4);
			this.state = 78;
			this.match(o7dParser.ID);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__5) {
				{
				this.state = 79;
				this.match(o7dParser.T__5);
				this.state = 80;
				this.match(o7dParser.ID);
				}
			}

			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__6) {
				{
				this.state = 83;
				this.match(o7dParser.T__6);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 84;
					this.attributeValues();
					}
				}

				this.state = 87;
				this.match(o7dParser.T__7);
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
		this.enterRule(_localctx, 10, o7dParser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(o7dParser.ID);
			this.state = 91;
			this.match(o7dParser.ID);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__8 || _la === o7dParser.T__9) {
				{
				this.state = 92;
				_la = this._input.LA(1);
				if (!(_la === o7dParser.T__8 || _la === o7dParser.T__9)) {
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

			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__10) {
				{
				{
				this.state = 95;
				this.fieldAttributeDeclaration();
				}
				}
				this.state = 100;
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
		this.enterRule(_localctx, 12, o7dParser.RULE_fieldAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(o7dParser.T__10);
			this.state = 102;
			this.match(o7dParser.ID);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__5) {
				{
				this.state = 103;
				this.match(o7dParser.T__5);
				this.state = 104;
				this.match(o7dParser.ID);
				}
			}

			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__6) {
				{
				this.state = 107;
				this.match(o7dParser.T__6);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 108;
					this.attributeValues();
					}
				}

				this.state = 111;
				this.match(o7dParser.T__7);
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
		this.enterRule(_localctx, 14, o7dParser.RULE_attributeValues);
		let _la: number;
		try {
			let _alt: number;
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 114;
				this.attributeValuePositional();
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 115;
						this.match(o7dParser.T__11);
						this.state = 116;
						this.attributeValuePositional();
						}
						}
					}
					this.state = 121;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.T__11) {
					{
					{
					this.state = 122;
					this.match(o7dParser.T__11);
					this.state = 123;
					this.attributeValueNamed();
					}
					}
					this.state = 128;
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
				this.state = 129;
				this.attributeValueNamed();
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.T__11) {
					{
					{
					this.state = 130;
					this.match(o7dParser.T__11);
					this.state = 131;
					this.attributeValueNamed();
					}
					}
					this.state = 136;
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
		this.enterRule(_localctx, 16, o7dParser.RULE_attributeValuePositional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
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
		this.enterRule(_localctx, 18, o7dParser.RULE_attributeValueNamed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(o7dParser.ID);
			this.state = 142;
			this.match(o7dParser.T__12);
			this.state = 143;
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
		this.enterRule(_localctx, 20, o7dParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.expression();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__11) {
				{
				{
				this.state = 146;
				this.match(o7dParser.T__11);
				this.state = 147;
				this.expression();
				}
				}
				this.state = 152;
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
		this.enterRule(_localctx, 22, o7dParser.RULE_expression);
		let _la: number;
		try {
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.match(o7dParser.ID);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.T__6) {
					{
					this.state = 154;
					this.match(o7dParser.T__6);
					this.state = 156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
						{
						this.state = 155;
						this.expressions();
						}
					}

					this.state = 158;
					this.match(o7dParser.T__7);
					}
				}

				}
				break;
			case o7dParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 161;
				this.match(o7dParser.STRING);
				}
				break;
			case o7dParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 162;
				this.match(o7dParser.NUMBER);
				}
				break;
			case o7dParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 163;
				this.match(o7dParser.BOOLEAN);
				}
				break;
			case o7dParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 164;
				this.match(o7dParser.T__13);
				}
				break;
			case o7dParser.T__14:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 165;
				this.match(o7dParser.T__14);
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 166;
					this.expressions();
					}
				}

				this.state = 169;
				this.match(o7dParser.T__15);
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
		this.enterRule(_localctx, 24, o7dParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(o7dParser.T__16);
			this.state = 173;
			this.match(o7dParser.ID);
			this.state = 174;
			this.match(o7dParser.T__1);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.STRING) {
				{
				{
				this.state = 175;
				this.match(o7dParser.STRING);
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__4) {
				{
				{
				this.state = 181;
				this.modelAttributeDeclaration();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 187;
			this.match(o7dParser.T__2);
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
		this.enterRule(_localctx, 26, o7dParser.RULE_scalarDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(o7dParser.T__17);
			this.state = 190;
			this.match(o7dParser.ID);
			this.state = 191;
			this.match(o7dParser.T__18);
			this.state = 192;
			this.match(o7dParser.ID);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__10) {
				{
				{
				this.state = 193;
				this.fieldAttributeDeclaration();
				}
				}
				this.state = 198;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\xCA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x05\x02 \n\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03" +
		"-\n\x03\f\x03\x0E\x030\v\x03\x03\x03\x07\x033\n\x03\f\x03\x0E\x036\v\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05C\n\x05\f\x05\x0E\x05F\v\x05\x03\x05\x07\x05I" +
		"\n\x05\f\x05\x0E\x05L\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06T\n\x06\x03\x06\x03\x06\x05\x06X\n\x06\x03\x06\x05\x06[\n" +
		"\x06\x03\x07\x03\x07\x03\x07\x05\x07`\n\x07\x03\x07\x07\x07c\n\x07\f\x07" +
		"\x0E\x07f\v\x07\x03\b\x03\b\x03\b\x03\b\x05\bl\n\b\x03\b\x03\b\x05\bp" +
		"\n\b\x03\b\x05\bs\n\b\x03\t\x03\t\x03\t\x07\tx\n\t\f\t\x0E\t{\v\t\x03" +
		"\t\x03\t\x07\t\x7F\n\t\f\t\x0E\t\x82\v\t\x03\t\x03\t\x03\t\x07\t\x87\n" +
		"\t\f\t\x0E\t\x8A\v\t\x05\t\x8C\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x07\f\x97\n\f\f\f\x0E\f\x9A\v\f\x03\r\x03\r\x03\r\x05" +
		"\r\x9F\n\r\x03\r\x05\r\xA2\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\xAA\n\r\x03\r\x05\r\xAD\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\xB3\n\x0E\f\x0E\x0E\x0E\xB6\v\x0E\x03\x0E\x07\x0E\xB9\n\x0E\f\x0E\x0E" +
		"\x0E\xBC\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\xC5\n\x0F\f\x0F\x0E\x0F\xC8\v\x0F\x03\x0F\x02\x02\x02\x10\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x03\x02\v\f\x02\xDB\x02\x1F\x03" +
		"\x02\x02\x02\x04)\x03\x02\x02\x02\x06<\x03\x02\x02\x02\b>\x03\x02\x02" +
		"\x02\nO\x03\x02\x02\x02\f\\\x03\x02\x02\x02\x0Eg\x03\x02\x02\x02\x10\x8B" +
		"\x03\x02\x02\x02\x12\x8D\x03\x02\x02\x02\x14\x8F\x03\x02\x02\x02\x16\x93" +
		"\x03\x02\x02\x02\x18\xAC\x03\x02\x02\x02\x1A\xAE\x03\x02\x02\x02\x1C\xBF" +
		"\x03\x02\x02\x02\x1E \x05\x04\x03\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03" +
		"\x02\x02\x02 $\x03\x02\x02\x02!#\x05\x06\x04\x02\"!\x03\x02\x02\x02#&" +
		"\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02" +
		"&$\x03\x02\x02\x02\'(\x07\x02\x02\x03(\x03\x03\x02\x02\x02)*\x07\x03\x02" +
		"\x02*.\x07\x04\x02\x02+-\x05\f\x07\x02,+\x03\x02\x02\x02-0\x03\x02\x02" +
		"\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/4\x03\x02\x02\x020.\x03\x02\x02" +
		"\x0213\x05\n\x06\x0221\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02" +
		"\x0245\x03\x02\x02\x0257\x03\x02\x02\x0264\x03\x02\x02\x0278\x07\x05\x02" +
		"\x028\x05\x03\x02\x02\x029=\x05\b\x05\x02:=\x05\x1A\x0E\x02;=\x05\x1C" +
		"\x0F\x02<9\x03\x02\x02\x02<:\x03\x02\x02\x02<;\x03\x02\x02\x02=\x07\x03" +
		"\x02\x02\x02>?\x07\x06\x02\x02?@\x07\x16\x02\x02@D\x07\x04\x02\x02AC\x05" +
		"\f\x07\x02BA\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03" +
		"\x02\x02\x02EJ\x03\x02\x02\x02FD\x03\x02\x02\x02GI\x05\n\x06\x02HG\x03" +
		"\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03" +
		"\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x05\x02\x02N\t\x03\x02\x02\x02OP" +
		"\x07\x07\x02\x02PS\x07\x16\x02\x02QR\x07\b\x02\x02RT\x07\x16\x02\x02S" +
		"Q\x03\x02\x02\x02ST\x03\x02\x02\x02TZ\x03\x02\x02\x02UW\x07\t\x02\x02" +
		"VX\x05\x10\t\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y[\x07\n\x02\x02ZU\x03\x02\x02\x02Z[\x03\x02\x02\x02[\v\x03\x02\x02\x02" +
		"\\]\x07\x16\x02\x02]_\x07\x16\x02\x02^`\t\x02\x02\x02_^\x03\x02\x02\x02" +
		"_`\x03\x02\x02\x02`d\x03\x02\x02\x02ac\x05\x0E\b\x02ba\x03\x02\x02\x02" +
		"cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\r\x03\x02\x02" +
		"\x02fd\x03\x02\x02\x02gh\x07\r\x02\x02hk\x07\x16\x02\x02ij\x07\b\x02\x02" +
		"jl\x07\x16\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lr\x03\x02\x02\x02" +
		"mo\x07\t\x02\x02np\x05\x10\t\x02on\x03\x02\x02\x02op\x03\x02\x02\x02p" +
		"q\x03\x02\x02\x02qs\x07\n\x02\x02rm\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"s\x0F\x03\x02\x02\x02ty\x05\x12\n\x02uv\x07\x0E\x02\x02vx\x05\x12\n\x02" +
		"wu\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02" +
		"z\x80\x03\x02\x02\x02{y\x03\x02\x02\x02|}\x07\x0E\x02\x02}\x7F\x05\x14" +
		"\v\x02~|\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x80\x81\x03\x02\x02\x02\x81\x8C\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02" +
		"\x83\x88\x05\x14\v\x02\x84\x85\x07\x0E\x02\x02\x85\x87\x05\x14\v\x02\x86" +
		"\x84\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B" +
		"t\x03\x02\x02\x02\x8B\x83\x03\x02\x02\x02\x8C\x11\x03\x02\x02\x02\x8D" +
		"\x8E\x05\x18\r\x02\x8E\x13\x03\x02\x02\x02\x8F\x90\x07\x16\x02\x02\x90" +
		"\x91\x07\x0F\x02\x02\x91\x92\x05\x18\r\x02\x92\x15\x03\x02\x02\x02\x93" +
		"\x98\x05\x18\r\x02\x94\x95\x07\x0E\x02\x02\x95\x97\x05\x18\r\x02\x96\x94" +
		"\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99" +
		"\x03\x02\x02\x02\x99\x17\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\xA1" +
		"\x07\x16\x02\x02\x9C\x9E\x07\t\x02\x02\x9D\x9F\x05\x16\f\x02\x9E\x9D\x03" +
		"\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x07" +
		"\n\x02\x02\xA1\x9C\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xAD\x03" +
		"\x02\x02\x02\xA3\xAD\x07\x17\x02\x02\xA4\xAD\x07\x1B\x02\x02\xA5\xAD\x07" +
		"\x1C\x02\x02\xA6\xAD\x07\x10\x02\x02\xA7\xA9\x07\x11\x02\x02\xA8\xAA\x05" +
		"\x16\f\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03" +
		"\x02\x02\x02\xAB\xAD\x07\x12\x02\x02\xAC\x9B\x03\x02\x02\x02\xAC\xA3\x03" +
		"\x02\x02\x02\xAC\xA4\x03\x02\x02\x02\xAC\xA5\x03\x02\x02\x02\xAC\xA6\x03" +
		"\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAD\x19\x03\x02\x02\x02\xAE\xAF\x07" +
		"\x13\x02\x02\xAF\xB0\x07\x16\x02\x02\xB0\xB4\x07\x04\x02\x02\xB1\xB3\x07" +
		"\x17\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03" +
		"\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xBA\x03\x02\x02\x02\xB6\xB4\x03" +
		"\x02\x02\x02\xB7\xB9\x05\n\x06\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBC\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03" +
		"\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07\x05\x02\x02\xBE\x1B\x03" +
		"\x02\x02\x02\xBF\xC0\x07\x14\x02\x02\xC0\xC1\x07\x16\x02\x02\xC1\xC2\x07" +
		"\x15\x02\x02\xC2\xC6\x07\x16\x02\x02\xC3\xC5\x05\x0E\b\x02\xC4\xC3\x03" +
		"\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03" +
		"\x02\x02\x02\xC7\x1D\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\x1D\x1F$" +
		".4<DJSWZ_dkory\x80\x88\x8B\x98\x9E\xA1\xA9\xAC\xB4\xBA\xC6";
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterSchema) {
			listener.enterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitSchema) {
			listener.exitSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitSchema) {
			return visitor.visitSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext[];
	public fieldDeclaration(i: number): FieldDeclarationContext;
	public fieldDeclaration(i?: number): FieldDeclarationContext | FieldDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationContext);
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelOrEnumOrScalarDeclarationContext extends ParserRuleContext {
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterModelOrEnumOrScalarDeclaration) {
			listener.enterModelOrEnumOrScalarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitModelOrEnumOrScalarDeclaration) {
			listener.exitModelOrEnumOrScalarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitModelOrEnumOrScalarDeclaration) {
			return visitor.visitModelOrEnumOrScalarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public fieldDeclaration(): FieldDeclarationContext[];
	public fieldDeclaration(i: number): FieldDeclarationContext;
	public fieldDeclaration(i?: number): FieldDeclarationContext | FieldDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationContext);
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterModelDeclaration) {
			listener.enterModelDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitModelDeclaration) {
			listener.exitModelDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitModelDeclaration) {
			return visitor.visitModelDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelAttributeDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
	}
	public attributeValues(): AttributeValuesContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_modelAttributeDeclaration; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterModelAttributeDeclaration) {
			listener.enterModelAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitModelAttributeDeclaration) {
			listener.exitModelAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
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
	public get ruleIndex(): number { return o7dParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAttributeDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
	}
	public attributeValues(): AttributeValuesContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_fieldAttributeDeclaration; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterFieldAttributeDeclaration) {
			listener.enterFieldAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitFieldAttributeDeclaration) {
			listener.exitFieldAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterAttributeValues) {
			listener.enterAttributeValues(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitAttributeValues) {
			listener.exitAttributeValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterAttributeValuePositional) {
			listener.enterAttributeValuePositional(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitAttributeValuePositional) {
			listener.exitAttributeValuePositional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitAttributeValuePositional) {
			return visitor.visitAttributeValuePositional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValueNamedContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_attributeValueNamed; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterAttributeValueNamed) {
			listener.enterAttributeValueNamed(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitAttributeValueNamed) {
			listener.exitAttributeValueNamed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_expressions; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterExpressions) {
			listener.enterExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitExpressions) {
			listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(o7dParser.ID, 0); }
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(o7dParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(o7dParser.NUMBER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(o7dParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_expression; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(o7dParser.ID);
		} else {
			return this.getToken(o7dParser.ID, i);
		}
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
	public enterRule(listener: o7dListener): void {
		if (listener.enterScalarDeclaration) {
			listener.enterScalarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitScalarDeclaration) {
			listener.exitScalarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitScalarDeclaration) {
			return visitor.visitScalarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


