// Generated from ./o7dLexer.g4 by ANTLR 4.9.0-SNAPSHOT


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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"HEADER", "MODEL", "ENUM", "SCALAR", "NULL", "AT", "LBRACE", "RBRACE", 
		"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COLON", "COMMA", "EQ", "QUESTION", 
		"DOT", "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", "HEX", "NUMBER16", "NUMBER10", 
		"NUMBER8", "NUMBER2", "NUMBER", "BOOLEAN", "WS", "NEWLINES", "SINGLE_LINE_COMMENT", 
		"MULTI_LINE_COMMENT",
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
	public get grammarFileName(): string { return "o7dLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return o7dLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return o7dLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return o7dLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return o7dLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\"\xF9\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13|\n\x13" +
		"\f\x13\x0E\x13\x7F\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\x84\n\x14\f\x14" +
		"\x0E\x14\x87\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x05\x15\x8E" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x06\x18\x9C\n\x18\r\x18\x0E\x18\x9D\x03" +
		"\x19\x03\x19\x07\x19\xA2\n\x19\f\x19\x0E\x19\xA5\v\x19\x03\x19\x05\x19" +
		"\xA8\n\x19\x03\x19\x03\x19\x06\x19\xAC\n\x19\r\x19\x0E\x19\xAD\x05\x19" +
		"\xB0\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xB5\n\x1A\x03\x1A\x06\x1A\xB8" +
		"\n\x1A\r\x1A\x0E\x1A\xB9\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x06\x1B\xC0\n" +
		"\x1B\r\x1B\x0E\x1B\xC1\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\xC8\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\xD3\n\x1D\x03\x1E\x06\x1E\xD6\n\x1E\r\x1E\x0E\x1E\xD7\x03\x1F" +
		"\x05\x1F\xDB\n\x1F\x03\x1F\x05\x1F\xDE\n\x1F\x03\x1F\x06\x1F\xE1\n\x1F" +
		"\r\x1F\x0E\x1F\xE2\x03 \x03 \x03 \x03 \x07 \xE9\n \f \x0E \xEC\v \x03" +
		"!\x03!\x03!\x03!\x07!\xF2\n!\f!\x0E!\xF5\v!\x03!\x03!\x03!\x03\xF3\x02" +
		"\x02\"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
		"\x1E;\x02\x1F=\x02 ?\x02!A\x02\"\x03\x02\r\x05\x02C\\aac|\x06\x022;C\\" +
		"aac|\x04\x02$$^^\n\x02$$11^^ddhhppttvv\x05\x022;CHch\x03\x023;\x03\x02" +
		"2;\x03\x0229\x03\x0223\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x02\u010E\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
		"\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
		"\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x03" +
		"C\x03\x02\x02\x02\x05J\x03\x02\x02\x02\x07P\x03\x02\x02\x02\tU\x03\x02" +
		"\x02\x02\v\\\x03\x02\x02\x02\ra\x03\x02\x02\x02\x0Fc\x03\x02\x02\x02\x11" +
		"e\x03\x02\x02\x02\x13g\x03\x02\x02\x02\x15i\x03\x02\x02\x02\x17k\x03\x02" +
		"\x02\x02\x19m\x03\x02\x02\x02\x1Bo\x03\x02\x02\x02\x1Dq\x03\x02\x02\x02" +
		"\x1Fs\x03\x02\x02\x02!u\x03\x02\x02\x02#w\x03\x02\x02\x02%y\x03\x02\x02" +
		"\x02\'\x80\x03\x02\x02\x02)\x8A\x03\x02\x02\x02+\x8F\x03\x02\x02\x02-" +
		"\x95\x03\x02\x02\x02/\x97\x03\x02\x02\x021\xA7\x03\x02\x02\x023\xB4\x03" +
		"\x02\x02\x025\xBB\x03\x02\x02\x027\xC7\x03\x02\x02\x029\xD2\x03\x02\x02" +
		"\x02;\xD5\x03\x02\x02\x02=\xE0\x03\x02\x02\x02?\xE4\x03\x02\x02\x02A\xED" +
		"\x03\x02\x02\x02CD\x07j\x02\x02DE\x07g\x02\x02EF\x07c\x02\x02FG\x07f\x02" +
		"\x02GH\x07g\x02\x02HI\x07t\x02\x02I\x04\x03\x02\x02\x02JK\x07o\x02\x02" +
		"KL\x07q\x02\x02LM\x07f\x02\x02MN\x07g\x02\x02NO\x07n\x02\x02O\x06\x03" +
		"\x02\x02\x02PQ\x07g\x02\x02QR\x07p\x02\x02RS\x07w\x02\x02ST\x07o\x02\x02" +
		"T\b\x03\x02\x02\x02UV\x07u\x02\x02VW\x07e\x02\x02WX\x07c\x02\x02XY\x07" +
		"n\x02\x02YZ\x07c\x02\x02Z[\x07t\x02\x02[\n\x03\x02\x02\x02\\]\x07p\x02" +
		"\x02]^\x07w\x02\x02^_\x07n\x02\x02_`\x07n\x02\x02`\f\x03\x02\x02\x02a" +
		"b\x07B\x02\x02b\x0E\x03\x02\x02\x02cd\x07}\x02\x02d\x10\x03\x02\x02\x02" +
		"ef\x07\x7F\x02\x02f\x12\x03\x02\x02\x02gh\x07]\x02\x02h\x14\x03\x02\x02" +
		"\x02ij\x07_\x02\x02j\x16\x03\x02\x02\x02kl\x07*\x02\x02l\x18\x03\x02\x02" +
		"\x02mn\x07+\x02\x02n\x1A\x03\x02\x02\x02op\x07<\x02\x02p\x1C\x03\x02\x02" +
		"\x02qr\x07.\x02\x02r\x1E\x03\x02\x02\x02st\x07?\x02\x02t \x03\x02\x02" +
		"\x02uv\x07A\x02\x02v\"\x03\x02\x02\x02wx\x070\x02\x02x$\x03\x02\x02\x02" +
		"y}\t\x02\x02\x02z|\t\x03\x02\x02{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02" +
		"}{\x03\x02\x02\x02}~\x03\x02\x02\x02~&\x03\x02\x02\x02\x7F}\x03\x02\x02" +
		"\x02\x80\x85\x07$\x02\x02\x81\x84\x05)\x15\x02\x82\x84\n\x04\x02\x02\x83" +
		"\x81\x03\x02\x02\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85" +
		"\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87" +
		"\x85\x03\x02\x02\x02\x88\x89\x07$\x02\x02\x89(\x03\x02\x02\x02\x8A\x8D" +
		"\x07^\x02\x02\x8B\x8E\t\x05\x02\x02\x8C\x8E\x05+\x16\x02\x8D\x8B\x03\x02" +
		"\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E*\x03\x02\x02\x02\x8F\x90\x07w\x02" +
		"\x02\x90\x91\x05-\x17\x02\x91\x92\x05-\x17\x02\x92\x93\x05-\x17\x02\x93" +
		"\x94\x05-\x17\x02\x94,\x03\x02\x02\x02\x95\x96\t\x06\x02\x02\x96.\x03" +
		"\x02\x02\x02\x97\x98\x072\x02\x02\x98\x99\x07z\x02\x02\x99\x9B\x03\x02" +
		"\x02\x02\x9A\x9C\x05-\x17\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E0\x03\x02" +
		"\x02\x02\x9F\xA3\t\x07\x02\x02\xA0\xA2\t\b\x02\x02\xA1\xA0\x03\x02\x02" +
		"\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02" +
		"\x02\xA4\xA8\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA8\x072\x02" +
		"\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAF\x03\x02\x02" +
		"\x02\xA9\xAB\x070\x02\x02\xAA\xAC\t\b\x02\x02\xAB\xAA\x03\x02\x02\x02" +
		"\xAC\xAD\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02" +
		"\xAE\xB0\x03\x02\x02\x02\xAF\xA9\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02" +
		"\xB02\x03\x02\x02\x02\xB1\xB2\x072\x02\x02\xB2\xB5\x07q\x02\x02\xB3\xB5" +
		"\x072\x02\x02\xB4\xB1\x03\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB7" +
		"\x03\x02\x02\x02\xB6\xB8\t\t\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03" +
		"\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA4\x03" +
		"\x02\x02\x02\xBB\xBC\x072\x02\x02\xBC\xBD\x07d\x02\x02\xBD\xBF\x03\x02" +
		"\x02\x02\xBE\xC0\t\n\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02" +
		"\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC26\x03\x02\x02" +
		"\x02\xC3\xC8\x05/\x18\x02\xC4\xC8\x051\x19\x02\xC5\xC8\x053\x1A\x02\xC6" +
		"\xC8\x055\x1B\x02\xC7\xC3\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02\xC7" +
		"\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC88\x03\x02\x02\x02\xC9" +
		"\xCA\x07v\x02\x02\xCA\xCB\x07t\x02\x02\xCB\xCC\x07w\x02\x02\xCC\xD3\x07" +
		"g\x02\x02\xCD\xCE\x07h\x02\x02\xCE\xCF\x07c\x02\x02\xCF\xD0\x07n\x02\x02" +
		"\xD0\xD1\x07u\x02\x02\xD1\xD3\x07g\x02\x02\xD2\xC9\x03\x02\x02\x02\xD2" +
		"\xCD\x03\x02\x02\x02\xD3:\x03\x02\x02\x02\xD4\xD6\t\v\x02\x02\xD5\xD4" +
		"\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8<\x03\x02\x02\x02\xD9\xDB\x05;\x1E\x02\xDA\xD9\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDE\x07" +
		"\x0F\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\xE1\x07\f\x02\x02\xE0\xDA\x03\x02\x02\x02\xE1\xE2\x03" +
		"\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3>\x03" +
		"\x02\x02\x02\xE4\xE5\x071\x02\x02\xE5\xE6\x071\x02\x02\xE6\xEA\x03\x02" +
		"\x02\x02\xE7\xE9\n\f\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02" +
		"\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB@\x03\x02\x02" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x071\x02\x02\xEE\xEF\x07,\x02\x02" +
		"\xEF\xF3\x03\x02\x02\x02\xF0\xF2\v\x02\x02\x02\xF1\xF0\x03\x02\x02\x02" +
		"\xF2\xF5\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02" +
		"\xF4\xF6\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x07,\x02\x02" +
		"\xF7\xF8\x071\x02\x02\xF8B\x03\x02\x02\x02\x17\x02}\x83\x85\x8D\x9D\xA3" +
		"\xA7\xAD\xAF\xB4\xB9\xC1\xC7\xD2\xD7\xDA\xDD\xE2\xEA\xF3\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!o7dLexer.__ATN) {
			o7dLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(o7dLexer._serializedATN));
		}

		return o7dLexer.__ATN;
	}

}

