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
	public static readonly ID = 17;
	public static readonly STRING = 18;
	public static readonly ESC_SEQ = 19;
	public static readonly UNICODE_ESC = 20;
	public static readonly HEX = 21;
	public static readonly NUMBER = 22;
	public static readonly BOOLEAN = 23;
	public static readonly WS = 24;
	public static readonly SINGLE_LINE_COMMENT = 25;
	public static readonly MULTI_LINE_COMMENT = 26;
	public static readonly RULE_schema = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_modelDeclaration = 2;
	public static readonly RULE_modelAttributeDeclaration = 3;
	public static readonly RULE_fieldDeclaration = 4;
	public static readonly RULE_fieldAttributeDeclaration = 5;
	public static readonly RULE_attributeValues = 6;
	public static readonly RULE_attributeValuePositional = 7;
	public static readonly RULE_attributeValueNamed = 8;
	public static readonly RULE_expressions = 9;
	public static readonly RULE_expression = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "header", "modelDeclaration", "modelAttributeDeclaration", "fieldDeclaration", 
		"fieldAttributeDeclaration", "attributeValues", "attributeValuePositional", 
		"attributeValueNamed", "expressions", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'header'", "'{'", "'}'", "'model'", "'@@'", "'.'", "'('", 
		"')'", "'?'", "'[]'", "'@'", "','", "':'", "'null'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", 
		"HEX", "NUMBER", "BOOLEAN", "WS", "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__0) {
				{
				this.state = 22;
				this.header();
				}
			}

			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__3) {
				{
				{
				this.state = 25;
				this.modelDeclaration();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
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
			this.state = 33;
			this.match(o7dParser.T__0);
			this.state = 34;
			this.match(o7dParser.T__1);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.ID) {
				{
				{
				this.state = 35;
				this.fieldDeclaration();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__4) {
				{
				{
				this.state = 41;
				this.modelAttributeDeclaration();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 47;
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
	public modelDeclaration(): ModelDeclarationContext {
		let _localctx: ModelDeclarationContext = new ModelDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, o7dParser.RULE_modelDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(o7dParser.T__3);
			this.state = 50;
			this.match(o7dParser.ID);
			this.state = 51;
			this.match(o7dParser.T__1);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.ID) {
				{
				{
				this.state = 52;
				this.fieldDeclaration();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__4) {
				{
				{
				this.state = 58;
				this.modelAttributeDeclaration();
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 64;
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
		this.enterRule(_localctx, 6, o7dParser.RULE_modelAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(o7dParser.T__4);
			this.state = 67;
			this.match(o7dParser.ID);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__5) {
				{
				this.state = 68;
				this.match(o7dParser.T__5);
				this.state = 69;
				this.match(o7dParser.ID);
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__6) {
				{
				this.state = 72;
				this.match(o7dParser.T__6);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 73;
					this.attributeValues();
					}
				}

				this.state = 76;
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
		this.enterRule(_localctx, 8, o7dParser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(o7dParser.ID);
			this.state = 80;
			this.match(o7dParser.ID);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__8 || _la === o7dParser.T__9) {
				{
				this.state = 81;
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

			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__10) {
				{
				{
				this.state = 84;
				this.fieldAttributeDeclaration();
				}
				}
				this.state = 89;
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
		this.enterRule(_localctx, 10, o7dParser.RULE_fieldAttributeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(o7dParser.T__10);
			this.state = 91;
			this.match(o7dParser.ID);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__5) {
				{
				this.state = 92;
				this.match(o7dParser.T__5);
				this.state = 93;
				this.match(o7dParser.ID);
				}
			}

			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__6) {
				{
				this.state = 96;
				this.match(o7dParser.T__6);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
					{
					this.state = 97;
					this.attributeValues();
					}
				}

				this.state = 100;
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
		this.enterRule(_localctx, 12, o7dParser.RULE_attributeValues);
		let _la: number;
		try {
			let _alt: number;
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 103;
				this.attributeValuePositional();
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 104;
						this.match(o7dParser.T__11);
						this.state = 105;
						this.attributeValuePositional();
						}
						}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.T__11) {
					{
					{
					this.state = 111;
					this.match(o7dParser.T__11);
					this.state = 112;
					this.attributeValueNamed();
					}
					}
					this.state = 117;
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
				this.state = 118;
				this.attributeValueNamed();
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.T__11) {
					{
					{
					this.state = 119;
					this.match(o7dParser.T__11);
					this.state = 120;
					this.attributeValueNamed();
					}
					}
					this.state = 125;
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
		this.enterRule(_localctx, 14, o7dParser.RULE_attributeValuePositional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
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
		this.enterRule(_localctx, 16, o7dParser.RULE_attributeValueNamed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(o7dParser.ID);
			this.state = 131;
			this.match(o7dParser.T__12);
			this.state = 132;
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
		this.enterRule(_localctx, 18, o7dParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.expression();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__11) {
				{
				{
				this.state = 135;
				this.match(o7dParser.T__11);
				this.state = 136;
				this.expression();
				}
				}
				this.state = 141;
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
		this.enterRule(_localctx, 20, o7dParser.RULE_expression);
		let _la: number;
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 142;
				this.match(o7dParser.ID);
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.T__6) {
					{
					this.state = 143;
					this.match(o7dParser.T__6);
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__13) | (1 << o7dParser.T__14) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0)) {
						{
						this.state = 144;
						this.expressions();
						}
					}

					this.state = 147;
					this.match(o7dParser.T__7);
					}
				}

				}
				break;
			case o7dParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				this.match(o7dParser.STRING);
				}
				break;
			case o7dParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 151;
				this.match(o7dParser.NUMBER);
				}
				break;
			case o7dParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 152;
				this.match(o7dParser.BOOLEAN);
				}
				break;
			case o7dParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 153;
				this.match(o7dParser.T__13);
				}
				break;
			case o7dParser.T__14:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 154;
				this.match(o7dParser.T__14);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xA4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x05\x02" +
		"\x1A\n\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x03" +
		"\x03\x07\x03-\n\x03\f\x03\x0E\x030\v\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x04\x07\x04>" +
		"\n\x04\f\x04\x0E\x04A\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05I\n\x05\x03\x05\x03\x05\x05\x05M\n\x05\x03\x05\x05\x05P\n" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06U\n\x06\x03\x06\x07\x06X\n\x06\f\x06" +
		"\x0E\x06[\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07a\n\x07\x03\x07" +
		"\x03\x07\x05\x07e\n\x07\x03\x07\x05\x07h\n\x07\x03\b\x03\b\x03\b\x07\b" +
		"m\n\b\f\b\x0E\bp\v\b\x03\b\x03\b\x07\bt\n\b\f\b\x0E\bw\v\b\x03\b\x03\b" +
		"\x03\b\x07\b|\n\b\f\b\x0E\b\x7F\v\b\x05\b\x81\n\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\x8C\n\v\f\v\x0E\v\x8F\v\v\x03\f" +
		"\x03\f\x03\f\x05\f\x94\n\f\x03\f\x05\f\x97\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\x9F\n\f\x03\f\x05\f\xA2\n\f\x03\f\x02\x02\x02\r\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x02\x03\x03\x02\v\f\x02\xB3\x02\x19\x03\x02\x02\x02\x04#\x03" +
		"\x02\x02\x02\x063\x03\x02\x02\x02\bD\x03\x02\x02\x02\nQ\x03\x02\x02\x02" +
		"\f\\\x03\x02\x02\x02\x0E\x80\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12" +
		"\x84\x03\x02\x02\x02\x14\x88\x03\x02\x02\x02\x16\xA1\x03\x02\x02\x02\x18" +
		"\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A" +
		"\x1E\x03\x02\x02\x02\x1B\x1D\x05\x06\x04\x02\x1C\x1B\x03\x02\x02\x02\x1D" +
		" \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F" +
		"!\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x02\x02\x03\"\x03\x03\x02" +
		"\x02\x02#$\x07\x03\x02\x02$(\x07\x04\x02\x02%\'\x05\n\x06\x02&%\x03\x02" +
		"\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02).\x03" +
		"\x02\x02\x02*(\x03\x02\x02\x02+-\x05\b\x05\x02,+\x03\x02\x02\x02-0\x03" +
		"\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03" +
		"\x02\x02\x0212\x07\x05\x02\x022\x05\x03\x02\x02\x0234\x07\x06\x02\x02" +
		"45\x07\x13\x02\x0259\x07\x04\x02\x0268\x05\n\x06\x0276\x03\x02\x02\x02" +
		"8;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:?\x03\x02\x02\x02" +
		";9\x03\x02\x02\x02<>\x05\b\x05\x02=<\x03\x02\x02\x02>A\x03\x02\x02\x02" +
		"?=\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02A?\x03\x02\x02\x02" +
		"BC\x07\x05\x02\x02C\x07\x03\x02\x02\x02DE\x07\x07\x02\x02EH\x07\x13\x02" +
		"\x02FG\x07\b\x02\x02GI\x07\x13\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02" +
		"\x02IO\x03\x02\x02\x02JL\x07\t\x02\x02KM\x05\x0E\b\x02LK\x03\x02\x02\x02" +
		"LM\x03\x02\x02\x02MN\x03\x02\x02\x02NP\x07\n\x02\x02OJ\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02P\t\x03\x02\x02\x02QR\x07\x13\x02\x02RT\x07\x13\x02" +
		"\x02SU\t\x02\x02\x02TS\x03\x02\x02\x02TU\x03\x02\x02\x02UY\x03\x02\x02" +
		"\x02VX\x05\f\x07\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z\v\x03\x02\x02\x02[Y\x03\x02\x02\x02\\]\x07\r\x02" +
		"\x02]`\x07\x13\x02\x02^_\x07\b\x02\x02_a\x07\x13\x02\x02`^\x03\x02\x02" +
		"\x02`a\x03\x02\x02\x02ag\x03\x02\x02\x02bd\x07\t\x02\x02ce\x05\x0E\b\x02" +
		"dc\x03\x02\x02\x02de\x03\x02\x02\x02ef\x03\x02\x02\x02fh\x07\n\x02\x02" +
		"gb\x03\x02\x02\x02gh\x03\x02\x02\x02h\r\x03\x02\x02\x02in\x05\x10\t\x02" +
		"jk\x07\x0E\x02\x02km\x05\x10\t\x02lj\x03\x02\x02\x02mp\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02no\x03\x02\x02\x02ou\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"qr\x07\x0E\x02\x02rt\x05\x12\n\x02sq\x03\x02\x02\x02tw\x03\x02\x02\x02" +
		"us\x03\x02\x02\x02uv\x03\x02\x02\x02v\x81\x03\x02\x02\x02wu\x03\x02\x02" +
		"\x02x}\x05\x12\n\x02yz\x07\x0E\x02\x02z|\x05\x12\n\x02{y\x03\x02\x02\x02" +
		"|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x81\x03\x02" +
		"\x02\x02\x7F}\x03\x02\x02\x02\x80i\x03\x02\x02\x02\x80x\x03\x02\x02\x02" +
		"\x81\x0F\x03\x02\x02\x02\x82\x83\x05\x16\f\x02\x83\x11\x03\x02\x02\x02" +
		"\x84\x85\x07\x13\x02\x02\x85\x86\x07\x0F\x02\x02\x86\x87\x05\x16\f\x02" +
		"\x87\x13\x03\x02\x02\x02\x88\x8D\x05\x16\f\x02\x89\x8A\x07\x0E\x02\x02" +
		"\x8A\x8C\x05\x16\f\x02\x8B\x89\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02" +
		"\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x15\x03\x02\x02\x02" +
		"\x8F\x8D\x03\x02\x02\x02\x90\x96\x07\x13\x02\x02\x91\x93\x07\t\x02\x02" +
		"\x92\x94\x05\x14\v\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\x95\x03\x02\x02\x02\x95\x97\x07\n\x02\x02\x96\x91\x03\x02\x02\x02" +
		"\x96\x97\x03\x02\x02\x02\x97\xA2\x03\x02\x02\x02\x98\xA2\x07\x14\x02\x02" +
		"\x99\xA2\x07\x18\x02\x02\x9A\xA2\x07\x19\x02\x02\x9B\xA2\x07\x10\x02\x02" +
		"\x9C\x9E\x07\x11\x02\x02\x9D\x9F\x05\x14\v\x02\x9E\x9D\x03\x02\x02\x02" +
		"\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x07\x12\x02\x02" +
		"\xA1\x90\x03\x02\x02\x02\xA1\x98\x03\x02\x02\x02\xA1\x99\x03\x02\x02\x02" +
		"\xA1\x9A\x03\x02\x02\x02\xA1\x9B\x03\x02\x02\x02\xA1\x9C\x03\x02\x02\x02" +
		"\xA2\x17\x03\x02\x02\x02\x19\x19\x1E(.9?HLOTY`dgnu}\x80\x8D\x93\x96\x9E" +
		"\xA1";
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
	public modelDeclaration(): ModelDeclarationContext[];
	public modelDeclaration(i: number): ModelDeclarationContext;
	public modelDeclaration(i?: number): ModelDeclarationContext | ModelDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelDeclarationContext);
		} else {
			return this.getRuleContext(i, ModelDeclarationContext);
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


