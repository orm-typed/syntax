// Generated from /Users/user/workspace/orm-typed/syntax/o7d.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class o7dLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, ID=17, 
		STRING=18, ESC_SEQ=19, UNICODE_ESC=20, HEX=21, NUMBER=22, BOOLEAN=23, 
		WS=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "ID", "STRING", 
			"ESC_SEQ", "UNICODE_ESC", "HEX", "NUMBER", "BOOLEAN", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'header'", "'{'", "'}'", "'model'", "'@@'", "'.'", "'('", "')'", 
			"'?'", "'[]'", "'@'", "','", "':'", "'null'", "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", 
			"HEX", "NUMBER", "BOOLEAN", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public o7dLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "o7d.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0018\u009c\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0005\u0010b\b\u0010\n\u0010\f\u0010e\t\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0005\u0011j\b\u0011\n\u0011\f\u0011m\t"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0003"+
		"\u0012t\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0004\u0015\u007f"+
		"\b\u0015\u000b\u0015\f\u0015\u0080\u0001\u0015\u0001\u0015\u0004\u0015"+
		"\u0085\b\u0015\u000b\u0015\f\u0015\u0086\u0003\u0015\u0089\b\u0015\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u0094\b\u0016\u0001\u0017\u0004"+
		"\u0017\u0097\b\u0017\u000b\u0017\f\u0017\u0098\u0001\u0017\u0001\u0017"+
		"\u0000\u0000\u0018\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015"+
		"+\u0016-\u0017/\u0018\u0001\u0000\u0007\u0003\u0000AZ__az\u0004\u0000"+
		"09AZ__az\u0002\u0000\"\"\\\\\b\u0000\"\"//\\\\bbffnnrrtt\u0003\u00000"+
		"9AFaf\u0001\u000009\u0003\u0000\t\n\r\r  \u00a4\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u0001"+
		"1\u0001\u0000\u0000\u0000\u00038\u0001\u0000\u0000\u0000\u0005:\u0001"+
		"\u0000\u0000\u0000\u0007<\u0001\u0000\u0000\u0000\tB\u0001\u0000\u0000"+
		"\u0000\u000bE\u0001\u0000\u0000\u0000\rG\u0001\u0000\u0000\u0000\u000f"+
		"I\u0001\u0000\u0000\u0000\u0011K\u0001\u0000\u0000\u0000\u0013M\u0001"+
		"\u0000\u0000\u0000\u0015P\u0001\u0000\u0000\u0000\u0017R\u0001\u0000\u0000"+
		"\u0000\u0019T\u0001\u0000\u0000\u0000\u001bV\u0001\u0000\u0000\u0000\u001d"+
		"[\u0001\u0000\u0000\u0000\u001f]\u0001\u0000\u0000\u0000!_\u0001\u0000"+
		"\u0000\u0000#f\u0001\u0000\u0000\u0000%p\u0001\u0000\u0000\u0000\'u\u0001"+
		"\u0000\u0000\u0000){\u0001\u0000\u0000\u0000+~\u0001\u0000\u0000\u0000"+
		"-\u0093\u0001\u0000\u0000\u0000/\u0096\u0001\u0000\u0000\u000012\u0005"+
		"h\u0000\u000023\u0005e\u0000\u000034\u0005a\u0000\u000045\u0005d\u0000"+
		"\u000056\u0005e\u0000\u000067\u0005r\u0000\u00007\u0002\u0001\u0000\u0000"+
		"\u000089\u0005{\u0000\u00009\u0004\u0001\u0000\u0000\u0000:;\u0005}\u0000"+
		"\u0000;\u0006\u0001\u0000\u0000\u0000<=\u0005m\u0000\u0000=>\u0005o\u0000"+
		"\u0000>?\u0005d\u0000\u0000?@\u0005e\u0000\u0000@A\u0005l\u0000\u0000"+
		"A\b\u0001\u0000\u0000\u0000BC\u0005@\u0000\u0000CD\u0005@\u0000\u0000"+
		"D\n\u0001\u0000\u0000\u0000EF\u0005.\u0000\u0000F\f\u0001\u0000\u0000"+
		"\u0000GH\u0005(\u0000\u0000H\u000e\u0001\u0000\u0000\u0000IJ\u0005)\u0000"+
		"\u0000J\u0010\u0001\u0000\u0000\u0000KL\u0005?\u0000\u0000L\u0012\u0001"+
		"\u0000\u0000\u0000MN\u0005[\u0000\u0000NO\u0005]\u0000\u0000O\u0014\u0001"+
		"\u0000\u0000\u0000PQ\u0005@\u0000\u0000Q\u0016\u0001\u0000\u0000\u0000"+
		"RS\u0005,\u0000\u0000S\u0018\u0001\u0000\u0000\u0000TU\u0005:\u0000\u0000"+
		"U\u001a\u0001\u0000\u0000\u0000VW\u0005n\u0000\u0000WX\u0005u\u0000\u0000"+
		"XY\u0005l\u0000\u0000YZ\u0005l\u0000\u0000Z\u001c\u0001\u0000\u0000\u0000"+
		"[\\\u0005[\u0000\u0000\\\u001e\u0001\u0000\u0000\u0000]^\u0005]\u0000"+
		"\u0000^ \u0001\u0000\u0000\u0000_c\u0007\u0000\u0000\u0000`b\u0007\u0001"+
		"\u0000\u0000a`\u0001\u0000\u0000\u0000be\u0001\u0000\u0000\u0000ca\u0001"+
		"\u0000\u0000\u0000cd\u0001\u0000\u0000\u0000d\"\u0001\u0000\u0000\u0000"+
		"ec\u0001\u0000\u0000\u0000fk\u0005\"\u0000\u0000gj\u0003%\u0012\u0000"+
		"hj\b\u0002\u0000\u0000ig\u0001\u0000\u0000\u0000ih\u0001\u0000\u0000\u0000"+
		"jm\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000"+
		"\u0000ln\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000no\u0005\"\u0000"+
		"\u0000o$\u0001\u0000\u0000\u0000ps\u0005\\\u0000\u0000qt\u0007\u0003\u0000"+
		"\u0000rt\u0003\'\u0013\u0000sq\u0001\u0000\u0000\u0000sr\u0001\u0000\u0000"+
		"\u0000t&\u0001\u0000\u0000\u0000uv\u0005u\u0000\u0000vw\u0003)\u0014\u0000"+
		"wx\u0003)\u0014\u0000xy\u0003)\u0014\u0000yz\u0003)\u0014\u0000z(\u0001"+
		"\u0000\u0000\u0000{|\u0007\u0004\u0000\u0000|*\u0001\u0000\u0000\u0000"+
		"}\u007f\u0007\u0005\u0000\u0000~}\u0001\u0000\u0000\u0000\u007f\u0080"+
		"\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080\u0081\u0001"+
		"\u0000\u0000\u0000\u0081\u0088\u0001\u0000\u0000\u0000\u0082\u0084\u0005"+
		".\u0000\u0000\u0083\u0085\u0007\u0005\u0000\u0000\u0084\u0083\u0001\u0000"+
		"\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000"+
		"\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087\u0089\u0001\u0000"+
		"\u0000\u0000\u0088\u0082\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000"+
		"\u0000\u0000\u0089,\u0001\u0000\u0000\u0000\u008a\u008b\u0005t\u0000\u0000"+
		"\u008b\u008c\u0005r\u0000\u0000\u008c\u008d\u0005u\u0000\u0000\u008d\u0094"+
		"\u0005e\u0000\u0000\u008e\u008f\u0005f\u0000\u0000\u008f\u0090\u0005a"+
		"\u0000\u0000\u0090\u0091\u0005l\u0000\u0000\u0091\u0092\u0005s\u0000\u0000"+
		"\u0092\u0094\u0005e\u0000\u0000\u0093\u008a\u0001\u0000\u0000\u0000\u0093"+
		"\u008e\u0001\u0000\u0000\u0000\u0094.\u0001\u0000\u0000\u0000\u0095\u0097"+
		"\u0007\u0006\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u0098"+
		"\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099"+
		"\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a\u009b"+
		"\u0006\u0017\u0000\u0000\u009b0\u0001\u0000\u0000\u0000\n\u0000ciks\u0080"+
		"\u0086\u0088\u0093\u0098\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}