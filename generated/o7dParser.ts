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
	public static readonly RULE_modelOrEnumOrScalarDeclarationOrComment = 5;
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
	public static readonly RULE_enumMemberLine = 16;
	public static readonly RULE_enumDeclaration = 17;
	public static readonly RULE_scalarDeclaration = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"schema", "anyComment", "lineEnding", "commentLine", "header", "modelOrEnumOrScalarDeclarationOrComment", 
		"modelDeclaration", "modelAttributeDeclarationLine", "fieldDeclarationLine", 
		"fieldAttributeDeclaration", "attributeValues", "attributeValuePositional", 
		"attributeValueNamed", "expressions", "expression", "idWithDot", "enumMemberLine", 
		"enumDeclaration", "scalarDeclaration",
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
			this.state = 41;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 38;
					this.commentLine();
					}
					}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.HEADER) {
				{
				this.state = 44;
				this.header();
				}
			}

			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (o7dParser.MODEL - 2)) | (1 << (o7dParser.ENUM - 2)) | (1 << (o7dParser.SCALAR - 2)) | (1 << (o7dParser.WS - 2)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 2)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 2)))) !== 0)) {
				{
				{
				this.state = 47;
				this.modelOrEnumOrScalarDeclarationOrComment();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
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
			this.state = 55;
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
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (o7dParser.WS - 29)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 29)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 29)))) !== 0)) {
				{
				{
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.WS) {
					{
					this.state = 57;
					this.match(o7dParser.WS);
					}
				}

				this.state = 60;
				this.anyComment();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 66;
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
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 68;
				this.match(o7dParser.WS);
				}
			}

			this.state = 71;
			this.anyComment();
			this.state = 72;
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
			this.state = 74;
			this.match(o7dParser.HEADER);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 75;
				this.match(o7dParser.WS);
				}
			}

			this.state = 78;
			this.match(o7dParser.LBRACE);
			this.state = 79;
			this.lineEnding();
			this.state = 84;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 82;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 80;
						this.fieldDeclarationLine();
						}
						break;

					case 2:
						{
						this.state = 81;
						this.commentLine();
						}
						break;
					}
					}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (o7dParser.AT - 6)) | (1 << (o7dParser.WS - 6)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 6)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 6)))) !== 0)) {
				{
				this.state = 89;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 87;
					this.modelAttributeDeclarationLine();
					}
					break;

				case 2:
					{
					this.state = 88;
					this.commentLine();
					}
					break;
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(o7dParser.RBRACE);
			this.state = 95;
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
	public modelOrEnumOrScalarDeclarationOrComment(): ModelOrEnumOrScalarDeclarationOrCommentContext {
		let _localctx: ModelOrEnumOrScalarDeclarationOrCommentContext = new ModelOrEnumOrScalarDeclarationOrCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, o7dParser.RULE_modelOrEnumOrScalarDeclarationOrComment);
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.WS:
			case o7dParser.SINGLE_LINE_COMMENT:
			case o7dParser.MULTI_LINE_COMMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.commentLine();
				}
				break;
			case o7dParser.MODEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.modelDeclaration();
				}
				break;
			case o7dParser.ENUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.enumDeclaration();
				}
				break;
			case o7dParser.SCALAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 100;
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
			this.state = 103;
			this.match(o7dParser.MODEL);
			this.state = 104;
			this.match(o7dParser.WS);
			this.state = 105;
			this.match(o7dParser.ID);
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 106;
				this.match(o7dParser.WS);
				}
			}

			this.state = 109;
			this.match(o7dParser.LBRACE);
			this.state = 110;
			this.lineEnding();
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 113;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						this.state = 111;
						this.fieldDeclarationLine();
						}
						break;

					case 2:
						{
						this.state = 112;
						this.commentLine();
						}
						break;
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (o7dParser.AT - 6)) | (1 << (o7dParser.WS - 6)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 6)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 6)))) !== 0)) {
				{
				this.state = 120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 118;
					this.modelAttributeDeclarationLine();
					}
					break;

				case 2:
					{
					this.state = 119;
					this.commentLine();
					}
					break;
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(o7dParser.RBRACE);
			this.state = 126;
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
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 128;
				this.match(o7dParser.WS);
				}
			}

			this.state = 131;
			this.match(o7dParser.AT);
			this.state = 132;
			this.match(o7dParser.AT);
			this.state = 133;
			this.idWithDot();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.LPAREN) {
				{
				this.state = 134;
				this.match(o7dParser.LPAREN);
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
					{
					this.state = 135;
					this.attributeValues();
					}
				}

				this.state = 138;
				this.match(o7dParser.RPAREN);
				}
			}

			this.state = 141;
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
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 143;
				this.match(o7dParser.WS);
				}
			}

			this.state = 146;
			this.match(o7dParser.ID);
			this.state = 147;
			this.match(o7dParser.WS);
			this.state = 148;
			this.match(o7dParser.ID);
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.QUESTION:
				{
				this.state = 149;
				this.match(o7dParser.QUESTION);
				}
				break;
			case o7dParser.LBRACKET:
				{
				{
				this.state = 150;
				this.match(o7dParser.LBRACKET);
				this.state = 151;
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
			this.state = 158;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 154;
					this.match(o7dParser.WS);
					this.state = 155;
					this.fieldAttributeDeclaration();
					}
					}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 161;
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
			this.state = 163;
			this.match(o7dParser.AT);
			this.state = 164;
			this.idWithDot();
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.LPAREN) {
				{
				this.state = 165;
				this.match(o7dParser.LPAREN);
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
					{
					this.state = 166;
					this.attributeValues();
					}
				}

				this.state = 169;
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
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 172;
				this.attributeValuePositional();
				this.state = 177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 173;
						this.match(o7dParser.COMMA);
						this.state = 174;
						this.attributeValuePositional();
						}
						}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.COMMA) {
					{
					{
					this.state = 180;
					this.match(o7dParser.COMMA);
					this.state = 181;
					this.attributeValueNamed();
					}
					}
					this.state = 186;
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
				this.state = 187;
				this.attributeValueNamed();
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === o7dParser.COMMA) {
					{
					{
					this.state = 188;
					this.match(o7dParser.COMMA);
					this.state = 189;
					this.attributeValueNamed();
					}
					}
					this.state = 194;
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
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 197;
				this.match(o7dParser.WS);
				}
			}

			this.state = 200;
			this.expression();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 201;
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
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 204;
				this.match(o7dParser.WS);
				}
			}

			this.state = 207;
			this.match(o7dParser.ID);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 208;
				this.match(o7dParser.WS);
				}
			}

			this.state = 211;
			this.match(o7dParser.COLON);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 212;
				this.match(o7dParser.WS);
				}
			}

			this.state = 215;
			this.expression();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 216;
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
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 219;
				this.match(o7dParser.WS);
				}
			}

			this.state = 222;
			this.expression();
			this.state = 233;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === o7dParser.WS) {
						{
						this.state = 223;
						this.match(o7dParser.WS);
						}
					}

					this.state = 226;
					this.match(o7dParser.COMMA);
					this.state = 228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === o7dParser.WS) {
						{
						this.state = 227;
						this.match(o7dParser.WS);
						}
					}

					this.state = 230;
					this.expression();
					}
					}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 236;
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
			this.state = 256;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case o7dParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 239;
				this.idWithDot();
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === o7dParser.LPAREN) {
					{
					this.state = 240;
					this.match(o7dParser.LPAREN);
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
						{
						this.state = 241;
						this.attributeValues();
						}
					}

					this.state = 244;
					this.match(o7dParser.RPAREN);
					}
				}

				}
				break;
			case o7dParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 247;
				this.match(o7dParser.STRING);
				}
				break;
			case o7dParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 248;
				this.match(o7dParser.NUMBER);
				}
				break;
			case o7dParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 249;
				this.match(o7dParser.BOOLEAN);
				}
				break;
			case o7dParser.NULL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 250;
				this.match(o7dParser.NULL);
				}
				break;
			case o7dParser.LBRACKET:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 251;
				this.match(o7dParser.LBRACKET);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.NULL) | (1 << o7dParser.LBRACKET) | (1 << o7dParser.ID) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN) | (1 << o7dParser.WS))) !== 0)) {
					{
					this.state = 252;
					this.expressions();
					}
				}

				this.state = 255;
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
			this.state = 258;
			this.match(o7dParser.ID);
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.DOT) {
				{
				{
				this.state = 259;
				this.match(o7dParser.DOT);
				this.state = 260;
				this.match(o7dParser.ID);
				}
				}
				this.state = 265;
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
	public enumMemberLine(): EnumMemberLineContext {
		let _localctx: EnumMemberLineContext = new EnumMemberLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, o7dParser.RULE_enumMemberLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 266;
				this.match(o7dParser.WS);
				}
			}

			this.state = 269;
			this.match(o7dParser.STRING);
			this.state = 270;
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, o7dParser.RULE_enumDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(o7dParser.ENUM);
			this.state = 273;
			this.match(o7dParser.WS);
			this.state = 274;
			this.match(o7dParser.ID);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 275;
				this.match(o7dParser.WS);
				}
			}

			this.state = 278;
			this.match(o7dParser.LBRACE);
			this.state = 279;
			this.lineEnding();
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 282;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 280;
						this.enumMemberLine();
						}
						break;

					case 2:
						{
						this.state = 281;
						this.commentLine();
						}
						break;
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (o7dParser.AT - 6)) | (1 << (o7dParser.WS - 6)) | (1 << (o7dParser.SINGLE_LINE_COMMENT - 6)) | (1 << (o7dParser.MULTI_LINE_COMMENT - 6)))) !== 0)) {
				{
				this.state = 289;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 287;
					this.modelAttributeDeclarationLine();
					}
					break;

				case 2:
					{
					this.state = 288;
					this.commentLine();
					}
					break;
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this.match(o7dParser.RBRACE);
			this.state = 295;
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
		this.enterRule(_localctx, 36, o7dParser.RULE_scalarDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(o7dParser.SCALAR);
			this.state = 298;
			this.match(o7dParser.WS);
			this.state = 299;
			this.match(o7dParser.ID);
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
			this.match(o7dParser.EQ);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.WS) {
				{
				this.state = 304;
				this.match(o7dParser.WS);
				}
			}

			this.state = 307;
			this.match(o7dParser.ID);
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(o7dParser.WS);
					this.state = 309;
					this.fieldAttributeDeclaration();
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 315;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u0140\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
		"\x02\x05\x020\n\x02\x03\x02\x07\x023\n\x02\f\x02\x0E\x026\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x04\x05\x04=\n\x04\x03\x04\x07\x04@\n\x04" +
		"\f\x04\x0E\x04C\v\x04\x03\x04\x03\x04\x03\x05\x05\x05H\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x05\x06O\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06U\n\x06\f\x06\x0E\x06X\v\x06\x03\x06\x03\x06\x07\x06\\\n\x06" +
		"\f\x06\x0E\x06_\v\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07h\n\x07\x03\b\x03\b\x03\b\x03\b\x05\bn\n\b\x03\b\x03\b" +
		"\x03\b\x03\b\x07\bt\n\b\f\b\x0E\bw\v\b\x03\b\x03\b\x07\b{\n\b\f\b\x0E" +
		"\b~\v\b\x03\b\x03\b\x03\b\x03\t\x05\t\x84\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\x8B\n\t\x03\t\x05\t\x8E\n\t\x03\t\x03\t\x03\n\x05\n\x93\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9B\n\n\x03\n\x03\n\x07\n" +
		"\x9F\n\n\f\n\x0E\n\xA2\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\xAA" +
		"\n\v\x03\v\x05\v\xAD\n\v\x03\f\x03\f\x03\f\x07\f\xB2\n\f\f\f\x0E\f\xB5" +
		"\v\f\x03\f\x03\f\x07\f\xB9\n\f\f\f\x0E\f\xBC\v\f\x03\f\x03\f\x03\f\x07" +
		"\f\xC1\n\f\f\f\x0E\f\xC4\v\f\x05\f\xC6\n\f\x03\r\x05\r\xC9\n\r\x03\r\x03" +
		"\r\x05\r\xCD\n\r\x03\x0E\x05\x0E\xD0\n\x0E\x03\x0E\x03\x0E\x05\x0E\xD4" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\xD8\n\x0E\x03\x0E\x03\x0E\x05\x0E\xDC\n" +
		"\x0E\x03\x0F\x05\x0F\xDF\n\x0F\x03\x0F\x03\x0F\x05\x0F\xE3\n\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xE7\n\x0F\x03\x0F\x07\x0F\xEA\n\x0F\f\x0F\x0E\x0F\xED" +
		"\v\x0F\x03\x0F\x05\x0F\xF0\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xF5\n" +
		"\x10\x03\x10\x05\x10\xF8\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0100\n\x10\x03\x10\x05\x10\u0103\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\u0108\n\x11\f\x11\x0E\x11\u010B\v\x11\x03\x12\x05\x12" +
		"\u010E\n\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u0117\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u011D\n\x13\f" +
		"\x13\x0E\x13\u0120\v\x13\x03\x13\x03\x13\x07\x13\u0124\n\x13\f\x13\x0E" +
		"\x13\u0127\v\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u0130\n\x14\x03\x14\x03\x14\x05\x14\u0134\n\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u0139\n\x14\f\x14\x0E\x14\u013C\v\x14\x03\x14\x03\x14" +
		"\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02\x02\x03\x03\x02!\"\x02\u0169\x02+\x03\x02\x02\x02" +
		"\x049\x03\x02\x02\x02\x06A\x03\x02\x02\x02\bG\x03\x02\x02\x02\nL\x03\x02" +
		"\x02\x02\fg\x03\x02\x02\x02\x0Ei\x03\x02\x02\x02\x10\x83\x03\x02\x02\x02" +
		"\x12\x92\x03\x02\x02\x02\x14\xA5\x03\x02\x02\x02\x16\xC5\x03\x02\x02\x02" +
		"\x18\xC8\x03\x02\x02\x02\x1A\xCF\x03\x02\x02\x02\x1C\xDE\x03\x02\x02\x02" +
		"\x1E\u0102\x03\x02\x02\x02 \u0104\x03\x02\x02\x02\"\u010D\x03\x02\x02" +
		"\x02$\u0112\x03\x02\x02\x02&\u012B\x03\x02\x02\x02(*\x05\b\x05\x02)(\x03" +
		"\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,/\x03" +
		"\x02\x02\x02-+\x03\x02\x02\x02.0\x05\n\x06\x02/.\x03\x02\x02\x02/0\x03" +
		"\x02\x02\x0204\x03\x02\x02\x0213\x05\f\x07\x0221\x03\x02\x02\x0236\x03" +
		"\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02\x02\x0264\x03" +
		"\x02\x02\x0278\x07\x02\x02\x038\x03\x03\x02\x02\x029:\t\x02\x02\x02:\x05" +
		"\x03\x02\x02\x02;=\x07\x1F\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=>\x03\x02\x02\x02>@\x05\x04\x03\x02?<\x03\x02\x02\x02@C\x03\x02\x02\x02" +
		"A?\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"DE\x07 \x02\x02E\x07\x03\x02\x02\x02FH\x07\x1F\x02\x02GF\x03\x02\x02\x02" +
		"GH\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x05\x04\x03\x02JK\x05\x06\x04\x02" +
		"K\t\x03\x02\x02\x02LN\x07\x03\x02\x02MO\x07\x1F\x02\x02NM\x03\x02\x02" +
		"\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x07\t\x02\x02QV\x05\x06\x04" +
		"\x02RU\x05\x12\n\x02SU\x05\b\x05\x02TR\x03\x02\x02\x02TS\x03\x02\x02\x02" +
		"UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W]\x03\x02\x02\x02" +
		"XV\x03\x02\x02\x02Y\\\x05\x10\t\x02Z\\\x05\b\x05\x02[Y\x03\x02\x02\x02" +
		"[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02" +
		"\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\n\x02\x02ab\x05\x06\x04" +
		"\x02b\v\x03\x02\x02\x02ch\x05\b\x05\x02dh\x05\x0E\b\x02eh\x05$\x13\x02" +
		"fh\x05&\x14\x02gc\x03\x02\x02\x02gd\x03\x02\x02\x02ge\x03\x02\x02\x02" +
		"gf\x03\x02\x02\x02h\r\x03\x02\x02\x02ij\x07\x04\x02\x02jk\x07\x1F\x02" +
		"\x02km\x07\x14\x02\x02ln\x07\x1F\x02\x02ml\x03\x02\x02\x02mn\x03\x02\x02" +
		"\x02no\x03\x02\x02\x02op\x07\t\x02\x02pu\x05\x06\x04\x02qt\x05\x12\n\x02" +
		"rt\x05\b\x05\x02sq\x03\x02\x02\x02sr\x03\x02\x02\x02tw\x03\x02\x02\x02" +
		"us\x03\x02\x02\x02uv\x03\x02\x02\x02v|\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"x{\x05\x10\t\x02y{\x05\b\x05\x02zx\x03\x02\x02\x02zy\x03\x02\x02\x02{" +
		"~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x03\x02\x02" +
		"\x02~|\x03\x02\x02\x02\x7F\x80\x07\n\x02\x02\x80\x81\x05\x06\x04\x02\x81" +
		"\x0F\x03\x02\x02\x02\x82\x84\x07\x1F\x02\x02\x83\x82\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07\b\x02\x02\x86" +
		"\x87\x07\b\x02\x02\x87\x8D\x05 \x11\x02\x88\x8A\x07\r\x02\x02\x89\x8B" +
		"\x05\x16\f\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
		"\x03\x02\x02\x02\x8C\x8E\x07\x0E\x02\x02\x8D\x88\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x05\x06\x04\x02\x90\x11" +
		"\x03\x02\x02\x02\x91\x93\x07\x1F\x02\x02\x92\x91\x03\x02\x02\x02\x92\x93" +
		"\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x07\x14\x02\x02\x95\x96" +
		"\x07\x1F\x02\x02\x96\x9A\x07\x14\x02\x02\x97\x9B\x07\x12\x02\x02\x98\x99" +
		"\x07\v\x02\x02\x99\x9B\x07\f\x02\x02\x9A\x97\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xA0\x03\x02\x02\x02\x9C\x9D\x07" +
		"\x1F\x02\x02\x9D\x9F\x05\x14\v\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03" +
		"\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03" +
		"\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4\x05\x06\x04\x02\xA4\x13\x03" +
		"\x02\x02\x02\xA5\xA6\x07\b\x02\x02\xA6\xAC\x05 \x11\x02\xA7\xA9\x07\r" +
		"\x02\x02\xA8\xAA\x05\x16\f\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02" +
		"\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x07\x0E\x02\x02\xAC\xA7\x03\x02" +
		"\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\x15\x03\x02\x02\x02\xAE\xB3\x05\x18" +
		"\r\x02\xAF\xB0\x07\x10\x02\x02\xB0\xB2\x05\x18\r\x02\xB1\xAF\x03\x02\x02" +
		"\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\xBA\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB7\x07\x10\x02" +
		"\x02\xB7\xB9\x05\x1A\x0E\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBC\x03\x02\x02" +
		"\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xC6\x03\x02\x02" +
		"\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC2\x05\x1A\x0E\x02\xBE\xBF\x07\x10\x02" +
		"\x02\xBF\xC1\x05\x1A\x0E\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC4\x03\x02\x02" +
		"\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC6\x03\x02\x02" +
		"\x02\xC4\xC2\x03\x02\x02\x02\xC5\xAE\x03\x02\x02\x02\xC5\xBD\x03\x02\x02" +
		"\x02\xC6\x17\x03\x02\x02\x02\xC7\xC9\x07\x1F\x02\x02\xC8\xC7\x03\x02\x02" +
		"\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x05\x1E\x10" +
		"\x02\xCB\xCD\x07\x1F\x02\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02" +
		"\x02\xCD\x19\x03\x02\x02\x02\xCE\xD0\x07\x1F\x02\x02\xCF\xCE\x03\x02\x02" +
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x07\x14\x02" +
		"\x02\xD2\xD4\x07\x1F\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7\x07\x0F\x02\x02\xD6\xD8\x07\x1F\x02" +
		"\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02" +
		"\x02\xD9\xDB\x05\x1E\x10\x02\xDA\xDC\x07\x1F\x02\x02\xDB\xDA\x03\x02\x02" +
		"\x02\xDB\xDC\x03\x02\x02\x02\xDC\x1B\x03\x02\x02\x02\xDD\xDF\x07\x1F\x02" +
		"\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE0\xEB\x05\x1E\x10\x02\xE1\xE3\x07\x1F\x02\x02\xE2\xE1\x03\x02\x02" +
		"\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x07\x10\x02" +
		"\x02\xE5\xE7\x07\x1F\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x05\x1E\x10\x02\xE9\xE2\x03\x02\x02" +
		"\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02" +
		"\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xF0\x07\x1F\x02" +
		"\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\x1D\x03\x02\x02" +
		"\x02\xF1\xF7\x05 \x11\x02\xF2\xF4\x07\r\x02\x02\xF3\xF5\x05\x16\f\x02" +
		"\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF6\xF8\x07\x0E\x02\x02\xF7\xF2\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02" +
		"\xF8\u0103\x03\x02\x02\x02\xF9\u0103\x07\x15\x02\x02\xFA\u0103\x07\x1D" +
		"\x02\x02\xFB\u0103\x07\x1E\x02\x02\xFC\u0103\x07\x07\x02\x02\xFD\xFF\x07" +
		"\v\x02\x02\xFE\u0100\x05\x1C\x0F\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100" +
		"\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x07\f\x02\x02" +
		"\u0102\xF1\x03\x02\x02\x02\u0102\xF9\x03\x02\x02\x02\u0102\xFA\x03\x02" +
		"\x02\x02\u0102\xFB\x03\x02\x02\x02\u0102\xFC\x03\x02\x02\x02\u0102\xFD" +
		"\x03\x02\x02\x02\u0103\x1F\x03\x02\x02\x02\u0104\u0109\x07\x14\x02\x02" +
		"\u0105\u0106\x07\x13\x02\x02\u0106\u0108\x07\x14\x02\x02\u0107\u0105\x03" +
		"\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109" +
		"\u010A\x03\x02\x02\x02\u010A!\x03\x02\x02\x02\u010B\u0109\x03\x02\x02" +
		"\x02\u010C\u010E\x07\x1F\x02\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E" +
		"\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x07\x15\x02\x02" +
		"\u0110\u0111\x05\x06\x04\x02\u0111#\x03\x02\x02\x02\u0112\u0113\x07\x05" +
		"\x02\x02\u0113\u0114\x07\x1F\x02\x02\u0114\u0116\x07\x14\x02\x02\u0115" +
		"\u0117\x07\x1F\x02\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02" +
		"\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x07\t\x02\x02\u0119\u011E" +
		"\x05\x06\x04\x02\u011A\u011D\x05\"\x12\x02\u011B\u011D\x05\b\x05\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02" +
		"\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
		"\u0125\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0124\x05\x10" +
		"\t\x02\u0122\u0124\x05\b\x05\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122" +
		"\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03" +
		"\x02\x02\x02\u0128\u0129\x07\n\x02\x02\u0129\u012A\x05\x06\x04\x02\u012A" +
		"%\x03\x02\x02\x02\u012B\u012C\x07\x06\x02\x02\u012C\u012D\x07\x1F\x02" +
		"\x02\u012D\u012F\x07\x14\x02\x02\u012E\u0130\x07\x1F\x02\x02\u012F\u012E" +
		"\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u0133\x07\x11\x02\x02\u0132\u0134\x07\x1F\x02\x02\u0133\u0132\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u013A\x07\x14\x02\x02\u0136\u0137\x07\x1F\x02\x02\u0137\u0139\x05\x14" +
		"\v\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138" +
		"\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02" +
		"\u013C\u013A\x03\x02\x02\x02\u013D\u013E\x05\x06\x04\x02\u013E\'\x03\x02" +
		"\x02\x028+/4<AGNTV[]gmsuz|\x83\x8A\x8D\x92\x9A\xA0\xA9\xAC\xB3\xBA\xC2" +
		"\xC5\xC8\xCC\xCF\xD3\xD7\xDB\xDE\xE2\xE6\xEB\xEF\xF4\xF7\xFF\u0102\u0109" +
		"\u010D\u0116\u011C\u011E\u0123\u0125\u012F\u0133\u013A";
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
	public modelOrEnumOrScalarDeclarationOrComment(): ModelOrEnumOrScalarDeclarationOrCommentContext[];
	public modelOrEnumOrScalarDeclarationOrComment(i: number): ModelOrEnumOrScalarDeclarationOrCommentContext;
	public modelOrEnumOrScalarDeclarationOrComment(i?: number): ModelOrEnumOrScalarDeclarationOrCommentContext | ModelOrEnumOrScalarDeclarationOrCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelOrEnumOrScalarDeclarationOrCommentContext);
		} else {
			return this.getRuleContext(i, ModelOrEnumOrScalarDeclarationOrCommentContext);
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


export class ModelOrEnumOrScalarDeclarationOrCommentContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return o7dParser.RULE_modelOrEnumOrScalarDeclarationOrComment; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterModelOrEnumOrScalarDeclarationOrComment) {
			listener.enterModelOrEnumOrScalarDeclarationOrComment(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitModelOrEnumOrScalarDeclarationOrComment) {
			listener.exitModelOrEnumOrScalarDeclarationOrComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitModelOrEnumOrScalarDeclarationOrComment) {
			return visitor.visitModelOrEnumOrScalarDeclarationOrComment(this);
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


export class EnumMemberLineContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(o7dParser.STRING, 0); }
	public lineEnding(): LineEndingContext {
		return this.getRuleContext(0, LineEndingContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(o7dParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_enumMemberLine; }
	// @Override
	public enterRule(listener: o7dParserListener): void {
		if (listener.enterEnumMemberLine) {
			listener.enterEnumMemberLine(this);
		}
	}
	// @Override
	public exitRule(listener: o7dParserListener): void {
		if (listener.exitEnumMemberLine) {
			listener.exitEnumMemberLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dParserVisitor<Result>): Result {
		if (visitor.visitEnumMemberLine) {
			return visitor.visitEnumMemberLine(this);
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
	public enumMemberLine(): EnumMemberLineContext[];
	public enumMemberLine(i: number): EnumMemberLineContext;
	public enumMemberLine(i?: number): EnumMemberLineContext | EnumMemberLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberLineContext);
		} else {
			return this.getRuleContext(i, EnumMemberLineContext);
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


