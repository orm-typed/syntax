// Generated from ./o7d.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class o7dLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "ID", "STRING", "NUMBER", "BOOLEAN", 
		"WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(o7dLexer._LITERAL_NAMES, o7dLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return o7dLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(o7dLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "o7d.g4"; }

	// @Override
	public get ruleNames(): string[] { return o7dLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return o7dLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return o7dLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return o7dLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14\x91\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x07\x0Fe\n\x0F\f\x0F\x0E\x0Fh\v\x0F\x03\x10\x03\x10\x07\x10l\n\x10" +
		"\f\x10\x0E\x10o\v\x10\x03\x10\x03\x10\x03\x11\x06\x11t\n\x11\r\x11\x0E" +
		"\x11u\x03\x11\x03\x11\x06\x11z\n\x11\r\x11\x0E\x11{\x05\x11~\n\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\x89\n\x12\x03\x13\x06\x13\x8C\n\x13\r\x13\x0E\x13\x8D\x03\x13\x03" +
		"\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\x03" +
		"\x02\x07\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02))``\x03\x022;\x05\x02" +
		"\v\f\x0F\x0F\"\"\x02\x97\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x03\'\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x07/\x03\x02\x02" +
		"\x02\t1\x03\x02\x02\x02\v3\x03\x02\x02\x02\r6\x03\x02\x02\x02\x0F8\x03" +
		"\x02\x02\x02\x11;\x03\x02\x02\x02\x13?\x03\x02\x02\x02\x15E\x03\x02\x02" +
		"\x02\x17L\x03\x02\x02\x02\x19T\x03\x02\x02\x02\x1B]\x03\x02\x02\x02\x1D" +
		"b\x03\x02\x02\x02\x1Fi\x03\x02\x02\x02!s\x03\x02\x02\x02#\x88\x03\x02" +
		"\x02\x02%\x8B\x03\x02\x02\x02\'(\x07o\x02\x02()\x07q\x02\x02)*\x07f\x02" +
		"\x02*+\x07g\x02\x02+,\x07n\x02\x02,\x04\x03\x02\x02\x02-.\x07}\x02\x02" +
		".\x06\x03\x02\x02\x02/0\x07=\x02\x020\b\x03\x02\x02\x0212\x07\x7F\x02" +
		"\x022\n\x03\x02\x02\x0234\x07]\x02\x0245\x07_\x02\x025\f\x03\x02\x02\x02" +
		"67\x07?\x02\x027\x0E\x03\x02\x02\x0289\x07K\x02\x029:\x07F\x02\x02:\x10" +
		"\x03\x02\x02\x02;<\x07K\x02\x02<=\x07p\x02\x02=>\x07v\x02\x02>\x12\x03" +
		"\x02\x02\x02?@\x07H\x02\x02@A\x07n\x02\x02AB\x07q\x02\x02BC\x07c\x02\x02" +
		"CD\x07v\x02\x02D\x14\x03\x02\x02\x02EF\x07U\x02\x02FG\x07v\x02\x02GH\x07" +
		"t\x02\x02HI\x07k\x02\x02IJ\x07p\x02\x02JK\x07i\x02\x02K\x16\x03\x02\x02" +
		"\x02LM\x07D\x02\x02MN\x07q\x02\x02NO\x07q\x02\x02OP\x07n\x02\x02PQ\x07" +
		"g\x02\x02QR\x07c\x02\x02RS\x07p\x02\x02S\x18\x03\x02\x02\x02TU\x07F\x02" +
		"\x02UV\x07c\x02\x02VW\x07v\x02\x02WX\x07g\x02\x02XY\x07v\x02\x02YZ\x07" +
		"k\x02\x02Z[\x07o\x02\x02[\\\x07g\x02\x02\\\x1A\x03\x02\x02\x02]^\x07p" +
		"\x02\x02^_\x07w\x02\x02_`\x07n\x02\x02`a\x07n\x02\x02a\x1C\x03\x02\x02" +
		"\x02bf\t\x02\x02\x02ce\t\x03\x02\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02" +
		"fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\x1E\x03\x02\x02\x02hf\x03\x02\x02" +
		"\x02im\x07)\x02\x02jl\t\x04\x02\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02" +
		"mk\x03\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02" +
		"pq\x07)\x02\x02q \x03\x02\x02\x02rt\t\x05\x02\x02sr\x03\x02\x02\x02tu" +
		"\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02v}\x03\x02\x02\x02" +
		"wy\x070\x02\x02xz\t\x05\x02\x02yx\x03\x02\x02\x02z{\x03\x02\x02\x02{y" +
		"\x03\x02\x02\x02{|\x03\x02\x02\x02|~\x03\x02\x02\x02}w\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\"\x03\x02\x02\x02\x7F\x80\x07v\x02\x02\x80\x81\x07" +
		"t\x02\x02\x81\x82\x07w\x02\x02\x82\x89\x07g\x02\x02\x83\x84\x07h\x02\x02" +
		"\x84\x85\x07c\x02\x02\x85\x86\x07n\x02\x02\x86\x87\x07u\x02\x02\x87\x89" +
		"\x07g\x02\x02\x88\x7F\x03\x02\x02\x02\x88\x83\x03\x02\x02\x02\x89$\x03" +
		"\x02\x02\x02\x8A\x8C\t\x06\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8D\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03" +
		"\x02\x02\x02\x8F\x90\b\x13\x02\x02\x90&\x03\x02\x02\x02\n\x02fmu{}\x88" +
		"\x8D\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!o7dLexer.__ATN) {
			o7dLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(o7dLexer._serializedATN));
		}

		return o7dLexer.__ATN;
	}

}

