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
		T__9=10, T__10=11, T__11=12, T__12=13, ID=14, STRING=15, NUMBER=16, BOOLEAN=17, 
		WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "ID", "STRING", "NUMBER", "BOOLEAN", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'model'", "'{'", "';'", "'}'", "'[]'", "'='", "'ID'", "'Int'", 
			"'Float'", "'String'", "'Boolean'", "'Datetime'", "'null'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "ID", "STRING", "NUMBER", "BOOLEAN", "WS"
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
		"\u0004\u0000\u0012\u008f\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0005\rc\b\r\n\r\f\rf\t\r\u0001"+
		"\u000e\u0001\u000e\u0005\u000ej\b\u000e\n\u000e\f\u000em\t\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0004\u000fr\b\u000f\u000b\u000f\f\u000f"+
		"s\u0001\u000f\u0001\u000f\u0004\u000fx\b\u000f\u000b\u000f\f\u000fy\u0003"+
		"\u000f|\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u0087"+
		"\b\u0010\u0001\u0011\u0004\u0011\u008a\b\u0011\u000b\u0011\f\u0011\u008b"+
		"\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012\u0001\u0000\u0005\u0003\u0000AZ__az\u0004\u000009AZ__az\u0002"+
		"\u0000\'\'^^\u0001\u000009\u0003\u0000\t\n\r\r  \u0095\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003+"+
		"\u0001\u0000\u0000\u0000\u0005-\u0001\u0000\u0000\u0000\u0007/\u0001\u0000"+
		"\u0000\u0000\t1\u0001\u0000\u0000\u0000\u000b4\u0001\u0000\u0000\u0000"+
		"\r6\u0001\u0000\u0000\u0000\u000f9\u0001\u0000\u0000\u0000\u0011=\u0001"+
		"\u0000\u0000\u0000\u0013C\u0001\u0000\u0000\u0000\u0015J\u0001\u0000\u0000"+
		"\u0000\u0017R\u0001\u0000\u0000\u0000\u0019[\u0001\u0000\u0000\u0000\u001b"+
		"`\u0001\u0000\u0000\u0000\u001dg\u0001\u0000\u0000\u0000\u001fq\u0001"+
		"\u0000\u0000\u0000!\u0086\u0001\u0000\u0000\u0000#\u0089\u0001\u0000\u0000"+
		"\u0000%&\u0005m\u0000\u0000&\'\u0005o\u0000\u0000\'(\u0005d\u0000\u0000"+
		"()\u0005e\u0000\u0000)*\u0005l\u0000\u0000*\u0002\u0001\u0000\u0000\u0000"+
		"+,\u0005{\u0000\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005;\u0000\u0000"+
		".\u0006\u0001\u0000\u0000\u0000/0\u0005}\u0000\u00000\b\u0001\u0000\u0000"+
		"\u000012\u0005[\u0000\u000023\u0005]\u0000\u00003\n\u0001\u0000\u0000"+
		"\u000045\u0005=\u0000\u00005\f\u0001\u0000\u0000\u000067\u0005I\u0000"+
		"\u000078\u0005D\u0000\u00008\u000e\u0001\u0000\u0000\u00009:\u0005I\u0000"+
		"\u0000:;\u0005n\u0000\u0000;<\u0005t\u0000\u0000<\u0010\u0001\u0000\u0000"+
		"\u0000=>\u0005F\u0000\u0000>?\u0005l\u0000\u0000?@\u0005o\u0000\u0000"+
		"@A\u0005a\u0000\u0000AB\u0005t\u0000\u0000B\u0012\u0001\u0000\u0000\u0000"+
		"CD\u0005S\u0000\u0000DE\u0005t\u0000\u0000EF\u0005r\u0000\u0000FG\u0005"+
		"i\u0000\u0000GH\u0005n\u0000\u0000HI\u0005g\u0000\u0000I\u0014\u0001\u0000"+
		"\u0000\u0000JK\u0005B\u0000\u0000KL\u0005o\u0000\u0000LM\u0005o\u0000"+
		"\u0000MN\u0005l\u0000\u0000NO\u0005e\u0000\u0000OP\u0005a\u0000\u0000"+
		"PQ\u0005n\u0000\u0000Q\u0016\u0001\u0000\u0000\u0000RS\u0005D\u0000\u0000"+
		"ST\u0005a\u0000\u0000TU\u0005t\u0000\u0000UV\u0005e\u0000\u0000VW\u0005"+
		"t\u0000\u0000WX\u0005i\u0000\u0000XY\u0005m\u0000\u0000YZ\u0005e\u0000"+
		"\u0000Z\u0018\u0001\u0000\u0000\u0000[\\\u0005n\u0000\u0000\\]\u0005u"+
		"\u0000\u0000]^\u0005l\u0000\u0000^_\u0005l\u0000\u0000_\u001a\u0001\u0000"+
		"\u0000\u0000`d\u0007\u0000\u0000\u0000ac\u0007\u0001\u0000\u0000ba\u0001"+
		"\u0000\u0000\u0000cf\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000"+
		"de\u0001\u0000\u0000\u0000e\u001c\u0001\u0000\u0000\u0000fd\u0001\u0000"+
		"\u0000\u0000gk\u0005\'\u0000\u0000hj\u0007\u0002\u0000\u0000ih\u0001\u0000"+
		"\u0000\u0000jm\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001"+
		"\u0000\u0000\u0000ln\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000"+
		"no\u0005\'\u0000\u0000o\u001e\u0001\u0000\u0000\u0000pr\u0007\u0003\u0000"+
		"\u0000qp\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000sq\u0001\u0000"+
		"\u0000\u0000st\u0001\u0000\u0000\u0000t{\u0001\u0000\u0000\u0000uw\u0005"+
		".\u0000\u0000vx\u0007\u0003\u0000\u0000wv\u0001\u0000\u0000\u0000xy\u0001"+
		"\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000"+
		"z|\u0001\u0000\u0000\u0000{u\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000"+
		"\u0000| \u0001\u0000\u0000\u0000}~\u0005t\u0000\u0000~\u007f\u0005r\u0000"+
		"\u0000\u007f\u0080\u0005u\u0000\u0000\u0080\u0087\u0005e\u0000\u0000\u0081"+
		"\u0082\u0005f\u0000\u0000\u0082\u0083\u0005a\u0000\u0000\u0083\u0084\u0005"+
		"l\u0000\u0000\u0084\u0085\u0005s\u0000\u0000\u0085\u0087\u0005e\u0000"+
		"\u0000\u0086}\u0001\u0000\u0000\u0000\u0086\u0081\u0001\u0000\u0000\u0000"+
		"\u0087\"\u0001\u0000\u0000\u0000\u0088\u008a\u0007\u0004\u0000\u0000\u0089"+
		"\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b"+
		"\u0089\u0001\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c"+
		"\u008d\u0001\u0000\u0000\u0000\u008d\u008e\u0006\u0011\u0000\u0000\u008e"+
		"$\u0001\u0000\u0000\u0000\b\u0000dksy{\u0086\u008b\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}