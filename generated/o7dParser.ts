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
	public static readonly ID = 14;
	public static readonly STRING = 15;
	public static readonly NUMBER = 16;
	public static readonly BOOLEAN = 17;
	public static readonly WS = 18;
	public static readonly RULE_prog = 0;
	public static readonly RULE_model = 1;
	public static readonly RULE_field = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_expression = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "model", "field", "type", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'model'", "'{'", "';'", "'}'", "'[]'", "'='", "'ID'", "'Int'", 
		"'Float'", "'String'", "'Boolean'", "'Datetime'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"ID", "STRING", "NUMBER", "BOOLEAN", "WS",
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
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, o7dParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === o7dParser.T__0) {
				{
				{
				this.state = 10;
				this.model();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 16;
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
	public model(): ModelContext {
		let _localctx: ModelContext = new ModelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, o7dParser.RULE_model);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(o7dParser.T__0);
			this.state = 19;
			this.match(o7dParser.ID);
			this.state = 20;
			this.match(o7dParser.T__1);
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__6) | (1 << o7dParser.T__7) | (1 << o7dParser.T__8) | (1 << o7dParser.T__9) | (1 << o7dParser.T__10) | (1 << o7dParser.T__11))) !== 0)) {
				{
				{
				this.state = 21;
				this.field();
				this.state = 22;
				this.match(o7dParser.T__2);
				}
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 29;
			this.match(o7dParser.T__3);
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, o7dParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.type();
			this.state = 32;
			this.match(o7dParser.ID);
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__4) {
				{
				this.state = 33;
				this.match(o7dParser.T__4);
				}
			}

			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === o7dParser.T__5) {
				{
				this.state = 36;
				this.match(o7dParser.T__5);
				this.state = 37;
				this.expression();
				}
			}

			this.state = 40;
			this.match(o7dParser.T__2);
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, o7dParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__6) | (1 << o7dParser.T__7) | (1 << o7dParser.T__8) | (1 << o7dParser.T__9) | (1 << o7dParser.T__10) | (1 << o7dParser.T__11))) !== 0))) {
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, o7dParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << o7dParser.T__12) | (1 << o7dParser.STRING) | (1 << o7dParser.NUMBER) | (1 << o7dParser.BOOLEAN))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x141\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x07\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1B\n\x03\f\x03\x0E\x03\x1E" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04%\n\x04\x03\x04" +
		"\x03\x04\x05\x04)\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x04\x03" +
		"\x02\t\x0E\x04\x02\x0F\x0F\x11\x13\x02/\x02\x0F\x03\x02\x02\x02\x04\x14" +
		"\x03\x02\x02\x02\x06!\x03\x02\x02\x02\b,\x03\x02\x02\x02\n.\x03\x02\x02" +
		"\x02\f\x0E\x05\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02\x02" +
		"\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x12\x03\x02\x02\x02" +
		"\x11\x0F\x03\x02\x02\x02\x12\x13\x07\x02\x02\x03\x13\x03\x03\x02\x02\x02" +
		"\x14\x15\x07\x03\x02\x02\x15\x16\x07\x10\x02\x02\x16\x1C\x07\x04\x02\x02" +
		"\x17\x18\x05\x06\x04\x02\x18\x19\x07\x05\x02\x02\x19\x1B\x03\x02\x02\x02" +
		"\x1A\x17\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02" +
		"\x1C\x1D\x03\x02\x02\x02\x1D\x1F\x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02" +
		"\x1F \x07\x06\x02\x02 \x05\x03\x02\x02\x02!\"\x05\b\x05\x02\"$\x07\x10" +
		"\x02\x02#%\x07\x07\x02\x02$#\x03\x02\x02\x02$%\x03\x02\x02\x02%(\x03\x02" +
		"\x02\x02&\'\x07\b\x02\x02\')\x05\n\x06\x02(&\x03\x02\x02\x02()\x03\x02" +
		"\x02\x02)*\x03\x02\x02\x02*+\x07\x05\x02\x02+\x07\x03\x02\x02\x02,-\t" +
		"\x02\x02\x02-\t\x03\x02\x02\x02./\t\x03\x02\x02/\v\x03\x02\x02\x02\x06" +
		"\x0F\x1C$(";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!o7dParser.__ATN) {
			o7dParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(o7dParser._serializedATN));
		}

		return o7dParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(o7dParser.EOF, 0); }
	public model(): ModelContext[];
	public model(i: number): ModelContext;
	public model(i?: number): ModelContext | ModelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModelContext);
		} else {
			return this.getRuleContext(i, ModelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_prog; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_model; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterModel) {
			listener.enterModel(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitModel) {
			listener.exitModel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitModel) {
			return visitor.visitModel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(o7dParser.ID, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_field; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return o7dParser.RULE_type; }
	// @Override
	public enterRule(listener: o7dListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: o7dListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: o7dVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
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


