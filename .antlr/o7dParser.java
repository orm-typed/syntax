// Generated from /Users/user/workspace/orm-typed/syntax/o7dParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class o7dParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		HEADER=1, MODEL=2, ENUM=3, SCALAR=4, NULL=5, AT=6, ATAT=7, LBRACE=8, RBRACE=9, 
		LBRACKET=10, RBRACKET=11, LPAREN=12, RPAREN=13, COLON=14, COMMA=15, EQ=16, 
		QUESTION=17, DOT=18, ID=19, STRING=20, ESC_SEQ=21, UNICODE_ESC=22, HEX=23, 
		NUMBER16=24, NUMBER10=25, NUMBER8=26, NUMBER2=27, NUMBER=28, BOOLEAN=29, 
		WS=30, SINGLE_LINE_COMMENT=31, MULTI_LINE_COMMENT=32;
	public static final int
		RULE_schema = 0, RULE_comment = 1, RULE_header = 2, RULE_modelOrEnumOrScalarDeclaration = 3, 
		RULE_modelDeclaration = 4, RULE_modelAttributeDeclaration = 5, RULE_fieldDeclaration = 6, 
		RULE_fieldAttributeDeclaration = 7, RULE_attributeValues = 8, RULE_attributeValuePositional = 9, 
		RULE_attributeValueNamed = 10, RULE_expressions = 11, RULE_expression = 12, 
		RULE_enumDeclaration = 13, RULE_scalarDeclaration = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"schema", "comment", "header", "modelOrEnumOrScalarDeclaration", "modelDeclaration", 
			"modelAttributeDeclaration", "fieldDeclaration", "fieldAttributeDeclaration", 
			"attributeValues", "attributeValuePositional", "attributeValueNamed", 
			"expressions", "expression", "enumDeclaration", "scalarDeclaration"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'header'", "'model'", "'enum'", "'scalar'", "'null'", "'@'", "'@@'", 
			"'{'", "'}'", "'['", "']'", "'('", "')'", "':'", "','", "'='", "'?'", 
			"'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "HEADER", "MODEL", "ENUM", "SCALAR", "NULL", "AT", "ATAT", "LBRACE", 
			"RBRACE", "LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COLON", "COMMA", 
			"EQ", "QUESTION", "DOT", "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", "HEX", 
			"NUMBER16", "NUMBER10", "NUMBER8", "NUMBER2", "NUMBER", "BOOLEAN", "WS", 
			"SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT"
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

	@Override
	public String getGrammarFileName() { return "o7dParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public o7dParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SchemaContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(o7dParser.EOF, 0); }
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public HeaderContext header() {
			return getRuleContext(HeaderContext.class,0);
		}
		public List<ModelOrEnumOrScalarDeclarationContext> modelOrEnumOrScalarDeclaration() {
			return getRuleContexts(ModelOrEnumOrScalarDeclarationContext.class);
		}
		public ModelOrEnumOrScalarDeclarationContext modelOrEnumOrScalarDeclaration(int i) {
			return getRuleContext(ModelOrEnumOrScalarDeclarationContext.class,i);
		}
		public SchemaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_schema; }
	}

	public final SchemaContext schema() throws RecognitionException {
		SchemaContext _localctx = new SchemaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_schema);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(30);
					comment();
					}
					} 
				}
				setState(35);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HEADER) {
				{
				setState(36);
				header();
				}
			}

			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6442450972L) != 0)) {
				{
				{
				setState(39);
				modelOrEnumOrScalarDeclaration();
				}
				}
				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(45);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommentContext extends ParserRuleContext {
		public TerminalNode SINGLE_LINE_COMMENT() { return getToken(o7dParser.SINGLE_LINE_COMMENT, 0); }
		public TerminalNode MULTI_LINE_COMMENT() { return getToken(o7dParser.MULTI_LINE_COMMENT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			_la = _input.LA(1);
			if ( !(_la==SINGLE_LINE_COMMENT || _la==MULTI_LINE_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HeaderContext extends ParserRuleContext {
		public TerminalNode HEADER() { return getToken(o7dParser.HEADER, 0); }
		public TerminalNode LBRACE() { return getToken(o7dParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(o7dParser.RBRACE, 0); }
		public List<FieldDeclarationContext> fieldDeclaration() {
			return getRuleContexts(FieldDeclarationContext.class);
		}
		public FieldDeclarationContext fieldDeclaration(int i) {
			return getRuleContext(FieldDeclarationContext.class,i);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public List<ModelAttributeDeclarationContext> modelAttributeDeclaration() {
			return getRuleContexts(ModelAttributeDeclarationContext.class);
		}
		public ModelAttributeDeclarationContext modelAttributeDeclaration(int i) {
			return getRuleContext(ModelAttributeDeclarationContext.class,i);
		}
		public HeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header; }
	}

	public final HeaderContext header() throws RecognitionException {
		HeaderContext _localctx = new HeaderContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_header);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(HEADER);
			setState(50);
			match(LBRACE);
			setState(55);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(53);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
						{
						setState(51);
						fieldDeclaration();
						}
						break;
					case SINGLE_LINE_COMMENT:
					case MULTI_LINE_COMMENT:
						{
						setState(52);
						comment();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(57);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(62);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6442451072L) != 0)) {
				{
				setState(60);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ATAT:
					{
					setState(58);
					modelAttributeDeclaration();
					}
					break;
				case SINGLE_LINE_COMMENT:
				case MULTI_LINE_COMMENT:
					{
					setState(59);
					comment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(65);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModelOrEnumOrScalarDeclarationContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public ModelDeclarationContext modelDeclaration() {
			return getRuleContext(ModelDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public ScalarDeclarationContext scalarDeclaration() {
			return getRuleContext(ScalarDeclarationContext.class,0);
		}
		public ModelOrEnumOrScalarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modelOrEnumOrScalarDeclaration; }
	}

	public final ModelOrEnumOrScalarDeclarationContext modelOrEnumOrScalarDeclaration() throws RecognitionException {
		ModelOrEnumOrScalarDeclarationContext _localctx = new ModelOrEnumOrScalarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_modelOrEnumOrScalarDeclaration);
		try {
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SINGLE_LINE_COMMENT:
			case MULTI_LINE_COMMENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(67);
				comment();
				}
				break;
			case MODEL:
				enterOuterAlt(_localctx, 2);
				{
				setState(68);
				modelDeclaration();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(69);
				enumDeclaration();
				}
				break;
			case SCALAR:
				enterOuterAlt(_localctx, 4);
				{
				setState(70);
				scalarDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModelDeclarationContext extends ParserRuleContext {
		public TerminalNode MODEL() { return getToken(o7dParser.MODEL, 0); }
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public TerminalNode LBRACE() { return getToken(o7dParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(o7dParser.RBRACE, 0); }
		public List<FieldDeclarationContext> fieldDeclaration() {
			return getRuleContexts(FieldDeclarationContext.class);
		}
		public FieldDeclarationContext fieldDeclaration(int i) {
			return getRuleContext(FieldDeclarationContext.class,i);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public List<ModelAttributeDeclarationContext> modelAttributeDeclaration() {
			return getRuleContexts(ModelAttributeDeclarationContext.class);
		}
		public ModelAttributeDeclarationContext modelAttributeDeclaration(int i) {
			return getRuleContext(ModelAttributeDeclarationContext.class,i);
		}
		public ModelDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modelDeclaration; }
	}

	public final ModelDeclarationContext modelDeclaration() throws RecognitionException {
		ModelDeclarationContext _localctx = new ModelDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_modelDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(MODEL);
			setState(74);
			match(ID);
			setState(75);
			match(LBRACE);
			setState(80);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(78);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
						{
						setState(76);
						fieldDeclaration();
						}
						break;
					case SINGLE_LINE_COMMENT:
					case MULTI_LINE_COMMENT:
						{
						setState(77);
						comment();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(82);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6442451072L) != 0)) {
				{
				setState(85);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ATAT:
					{
					setState(83);
					modelAttributeDeclaration();
					}
					break;
				case SINGLE_LINE_COMMENT:
				case MULTI_LINE_COMMENT:
					{
					setState(84);
					comment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(89);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(90);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModelAttributeDeclarationContext extends ParserRuleContext {
		public TerminalNode ATAT() { return getToken(o7dParser.ATAT, 0); }
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public List<TerminalNode> DOT() { return getTokens(o7dParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(o7dParser.DOT, i);
		}
		public TerminalNode LPAREN() { return getToken(o7dParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(o7dParser.RPAREN, 0); }
		public AttributeValuesContext attributeValues() {
			return getRuleContext(AttributeValuesContext.class,0);
		}
		public ModelAttributeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modelAttributeDeclaration; }
	}

	public final ModelAttributeDeclarationContext modelAttributeDeclaration() throws RecognitionException {
		ModelAttributeDeclarationContext _localctx = new ModelAttributeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_modelAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(ATAT);
			setState(93);
			match(ID);
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(94);
				match(DOT);
				setState(95);
				match(ID);
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(101);
				match(LPAREN);
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 806880288L) != 0)) {
					{
					setState(102);
					attributeValues();
					}
				}

				setState(105);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldDeclarationContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public TerminalNode QUESTION() { return getToken(o7dParser.QUESTION, 0); }
		public List<FieldAttributeDeclarationContext> fieldAttributeDeclaration() {
			return getRuleContexts(FieldAttributeDeclarationContext.class);
		}
		public FieldAttributeDeclarationContext fieldAttributeDeclaration(int i) {
			return getRuleContext(FieldAttributeDeclarationContext.class,i);
		}
		public TerminalNode LBRACKET() { return getToken(o7dParser.LBRACKET, 0); }
		public TerminalNode RBRACKET() { return getToken(o7dParser.RBRACKET, 0); }
		public FieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclaration; }
	}

	public final FieldDeclarationContext fieldDeclaration() throws RecognitionException {
		FieldDeclarationContext _localctx = new FieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fieldDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(ID);
			setState(109);
			match(ID);
			setState(113);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case QUESTION:
				{
				setState(110);
				match(QUESTION);
				}
				break;
			case LBRACKET:
				{
				{
				setState(111);
				match(LBRACKET);
				setState(112);
				match(RBRACKET);
				}
				}
				break;
			case AT:
			case ATAT:
			case RBRACE:
			case ID:
			case SINGLE_LINE_COMMENT:
			case MULTI_LINE_COMMENT:
				break;
			default:
				break;
			}
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT) {
				{
				{
				setState(115);
				fieldAttributeDeclaration();
				}
				}
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldAttributeDeclarationContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(o7dParser.AT, 0); }
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public List<TerminalNode> DOT() { return getTokens(o7dParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(o7dParser.DOT, i);
		}
		public TerminalNode LPAREN() { return getToken(o7dParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(o7dParser.RPAREN, 0); }
		public AttributeValuesContext attributeValues() {
			return getRuleContext(AttributeValuesContext.class,0);
		}
		public FieldAttributeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldAttributeDeclaration; }
	}

	public final FieldAttributeDeclarationContext fieldAttributeDeclaration() throws RecognitionException {
		FieldAttributeDeclarationContext _localctx = new FieldAttributeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fieldAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(AT);
			setState(122);
			match(ID);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(123);
				match(DOT);
				setState(124);
				match(ID);
				}
				}
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(130);
				match(LPAREN);
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 806880288L) != 0)) {
					{
					setState(131);
					attributeValues();
					}
				}

				setState(134);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttributeValuesContext extends ParserRuleContext {
		public List<AttributeValuePositionalContext> attributeValuePositional() {
			return getRuleContexts(AttributeValuePositionalContext.class);
		}
		public AttributeValuePositionalContext attributeValuePositional(int i) {
			return getRuleContext(AttributeValuePositionalContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(o7dParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(o7dParser.COMMA, i);
		}
		public List<AttributeValueNamedContext> attributeValueNamed() {
			return getRuleContexts(AttributeValueNamedContext.class);
		}
		public AttributeValueNamedContext attributeValueNamed(int i) {
			return getRuleContext(AttributeValueNamedContext.class,i);
		}
		public AttributeValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeValues; }
	}

	public final AttributeValuesContext attributeValues() throws RecognitionException {
		AttributeValuesContext _localctx = new AttributeValuesContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_attributeValues);
		int _la;
		try {
			int _alt;
			setState(160);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(137);
				attributeValuePositional();
				setState(142);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(138);
						match(COMMA);
						setState(139);
						attributeValuePositional();
						}
						} 
					}
					setState(144);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				}
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(145);
					match(COMMA);
					setState(146);
					attributeValueNamed();
					}
					}
					setState(151);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(152);
				attributeValueNamed();
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(153);
					match(COMMA);
					setState(154);
					attributeValueNamed();
					}
					}
					setState(159);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttributeValuePositionalContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AttributeValuePositionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeValuePositional; }
	}

	public final AttributeValuePositionalContext attributeValuePositional() throws RecognitionException {
		AttributeValuePositionalContext _localctx = new AttributeValuePositionalContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_attributeValuePositional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttributeValueNamedContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public TerminalNode COLON() { return getToken(o7dParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AttributeValueNamedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeValueNamed; }
	}

	public final AttributeValueNamedContext attributeValueNamed() throws RecognitionException {
		AttributeValueNamedContext _localctx = new AttributeValueNamedContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_attributeValueNamed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(ID);
			setState(165);
			match(COLON);
			setState(166);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(o7dParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(o7dParser.COMMA, i);
		}
		public ExpressionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressions; }
	}

	public final ExpressionsContext expressions() throws RecognitionException {
		ExpressionsContext _localctx = new ExpressionsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_expressions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			expression();
			setState(173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(169);
				match(COMMA);
				setState(170);
				expression();
				}
				}
				setState(175);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public List<TerminalNode> DOT() { return getTokens(o7dParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(o7dParser.DOT, i);
		}
		public TerminalNode LPAREN() { return getToken(o7dParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(o7dParser.RPAREN, 0); }
		public AttributeValuesContext attributeValues() {
			return getRuleContext(AttributeValuesContext.class,0);
		}
		public TerminalNode STRING() { return getToken(o7dParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(o7dParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(o7dParser.BOOLEAN, 0); }
		public TerminalNode NULL() { return getToken(o7dParser.NULL, 0); }
		public TerminalNode LBRACKET() { return getToken(o7dParser.LBRACKET, 0); }
		public TerminalNode RBRACKET() { return getToken(o7dParser.RBRACKET, 0); }
		public ExpressionsContext expressions() {
			return getRuleContext(ExpressionsContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_expression);
		int _la;
		try {
			setState(200);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(176);
				match(ID);
				setState(181);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==DOT) {
					{
					{
					setState(177);
					match(DOT);
					setState(178);
					match(ID);
					}
					}
					setState(183);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(189);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(184);
					match(LPAREN);
					setState(186);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 806880288L) != 0)) {
						{
						setState(185);
						attributeValues();
						}
					}

					setState(188);
					match(RPAREN);
					}
				}

				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(191);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(192);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(193);
				match(BOOLEAN);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 5);
				{
				setState(194);
				match(NULL);
				}
				break;
			case LBRACKET:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(195);
				match(LBRACKET);
				setState(197);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 806880288L) != 0)) {
					{
					setState(196);
					expressions();
					}
				}

				setState(199);
				match(RBRACKET);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumDeclarationContext extends ParserRuleContext {
		public TerminalNode ENUM() { return getToken(o7dParser.ENUM, 0); }
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public TerminalNode LBRACE() { return getToken(o7dParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(o7dParser.RBRACE, 0); }
		public List<TerminalNode> STRING() { return getTokens(o7dParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(o7dParser.STRING, i);
		}
		public List<ModelAttributeDeclarationContext> modelAttributeDeclaration() {
			return getRuleContexts(ModelAttributeDeclarationContext.class);
		}
		public ModelAttributeDeclarationContext modelAttributeDeclaration(int i) {
			return getRuleContext(ModelAttributeDeclarationContext.class,i);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			match(ENUM);
			setState(203);
			match(ID);
			setState(204);
			match(LBRACE);
			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(205);
				match(STRING);
				}
				}
				setState(210);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ATAT) {
				{
				{
				setState(211);
				modelAttributeDeclaration();
				}
				}
				setState(216);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(217);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScalarDeclarationContext extends ParserRuleContext {
		public TerminalNode SCALAR() { return getToken(o7dParser.SCALAR, 0); }
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public TerminalNode EQ() { return getToken(o7dParser.EQ, 0); }
		public List<FieldAttributeDeclarationContext> fieldAttributeDeclaration() {
			return getRuleContexts(FieldAttributeDeclarationContext.class);
		}
		public FieldAttributeDeclarationContext fieldAttributeDeclaration(int i) {
			return getRuleContext(FieldAttributeDeclarationContext.class,i);
		}
		public ScalarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalarDeclaration; }
	}

	public final ScalarDeclarationContext scalarDeclaration() throws RecognitionException {
		ScalarDeclarationContext _localctx = new ScalarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_scalarDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(SCALAR);
			setState(220);
			match(ID);
			setState(221);
			match(EQ);
			setState(222);
			match(ID);
			setState(226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT) {
				{
				{
				setState(223);
				fieldAttributeDeclaration();
				}
				}
				setState(228);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001 \u00e6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001\u0000\u0005\u0000"+
		" \b\u0000\n\u0000\f\u0000#\t\u0000\u0001\u0000\u0003\u0000&\b\u0000\u0001"+
		"\u0000\u0005\u0000)\b\u0000\n\u0000\f\u0000,\t\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0005\u00026\b\u0002\n\u0002\f\u00029\t\u0002\u0001\u0002\u0001"+
		"\u0002\u0005\u0002=\b\u0002\n\u0002\f\u0002@\t\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003H\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005"+
		"\u0004O\b\u0004\n\u0004\f\u0004R\t\u0004\u0001\u0004\u0001\u0004\u0005"+
		"\u0004V\b\u0004\n\u0004\f\u0004Y\t\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005a\b\u0005\n\u0005"+
		"\f\u0005d\t\u0005\u0001\u0005\u0001\u0005\u0003\u0005h\b\u0005\u0001\u0005"+
		"\u0003\u0005k\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0003\u0006r\b\u0006\u0001\u0006\u0005\u0006u\b\u0006\n\u0006"+
		"\f\u0006x\t\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007~\b\u0007\n\u0007\f\u0007\u0081\t\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u0007\u0085\b\u0007\u0001\u0007\u0003\u0007\u0088\b\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0005\b\u008d\b\b\n\b\f\b\u0090\t\b\u0001\b\u0001\b"+
		"\u0005\b\u0094\b\b\n\b\f\b\u0097\t\b\u0001\b\u0001\b\u0001\b\u0005\b\u009c"+
		"\b\b\n\b\f\b\u009f\t\b\u0003\b\u00a1\b\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00ac"+
		"\b\u000b\n\u000b\f\u000b\u00af\t\u000b\u0001\f\u0001\f\u0001\f\u0005\f"+
		"\u00b4\b\f\n\f\f\f\u00b7\t\f\u0001\f\u0001\f\u0003\f\u00bb\b\f\u0001\f"+
		"\u0003\f\u00be\b\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003"+
		"\f\u00c6\b\f\u0001\f\u0003\f\u00c9\b\f\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0005\r\u00cf\b\r\n\r\f\r\u00d2\t\r\u0001\r\u0005\r\u00d5\b\r\n\r\f\r"+
		"\u00d8\t\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0005\u000e\u00e1\b\u000e\n\u000e\f\u000e\u00e4\t\u000e\u0001"+
		"\u000e\u0000\u0000\u000f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u0000\u0001\u0001\u0000\u001f \u00fe\u0000"+
		"!\u0001\u0000\u0000\u0000\u0002/\u0001\u0000\u0000\u0000\u00041\u0001"+
		"\u0000\u0000\u0000\u0006G\u0001\u0000\u0000\u0000\bI\u0001\u0000\u0000"+
		"\u0000\n\\\u0001\u0000\u0000\u0000\fl\u0001\u0000\u0000\u0000\u000ey\u0001"+
		"\u0000\u0000\u0000\u0010\u00a0\u0001\u0000\u0000\u0000\u0012\u00a2\u0001"+
		"\u0000\u0000\u0000\u0014\u00a4\u0001\u0000\u0000\u0000\u0016\u00a8\u0001"+
		"\u0000\u0000\u0000\u0018\u00c8\u0001\u0000\u0000\u0000\u001a\u00ca\u0001"+
		"\u0000\u0000\u0000\u001c\u00db\u0001\u0000\u0000\u0000\u001e \u0003\u0002"+
		"\u0001\u0000\u001f\u001e\u0001\u0000\u0000\u0000 #\u0001\u0000\u0000\u0000"+
		"!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000\u0000\"%\u0001\u0000"+
		"\u0000\u0000#!\u0001\u0000\u0000\u0000$&\u0003\u0004\u0002\u0000%$\u0001"+
		"\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&*\u0001\u0000\u0000\u0000"+
		"\')\u0003\u0006\u0003\u0000(\'\u0001\u0000\u0000\u0000),\u0001\u0000\u0000"+
		"\u0000*(\u0001\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+-\u0001\u0000"+
		"\u0000\u0000,*\u0001\u0000\u0000\u0000-.\u0005\u0000\u0000\u0001.\u0001"+
		"\u0001\u0000\u0000\u0000/0\u0007\u0000\u0000\u00000\u0003\u0001\u0000"+
		"\u0000\u000012\u0005\u0001\u0000\u000027\u0005\b\u0000\u000036\u0003\f"+
		"\u0006\u000046\u0003\u0002\u0001\u000053\u0001\u0000\u0000\u000054\u0001"+
		"\u0000\u0000\u000069\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u0000"+
		"78\u0001\u0000\u0000\u00008>\u0001\u0000\u0000\u000097\u0001\u0000\u0000"+
		"\u0000:=\u0003\n\u0005\u0000;=\u0003\u0002\u0001\u0000<:\u0001\u0000\u0000"+
		"\u0000<;\u0001\u0000\u0000\u0000=@\u0001\u0000\u0000\u0000><\u0001\u0000"+
		"\u0000\u0000>?\u0001\u0000\u0000\u0000?A\u0001\u0000\u0000\u0000@>\u0001"+
		"\u0000\u0000\u0000AB\u0005\t\u0000\u0000B\u0005\u0001\u0000\u0000\u0000"+
		"CH\u0003\u0002\u0001\u0000DH\u0003\b\u0004\u0000EH\u0003\u001a\r\u0000"+
		"FH\u0003\u001c\u000e\u0000GC\u0001\u0000\u0000\u0000GD\u0001\u0000\u0000"+
		"\u0000GE\u0001\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000H\u0007\u0001"+
		"\u0000\u0000\u0000IJ\u0005\u0002\u0000\u0000JK\u0005\u0013\u0000\u0000"+
		"KP\u0005\b\u0000\u0000LO\u0003\f\u0006\u0000MO\u0003\u0002\u0001\u0000"+
		"NL\u0001\u0000\u0000\u0000NM\u0001\u0000\u0000\u0000OR\u0001\u0000\u0000"+
		"\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QW\u0001\u0000"+
		"\u0000\u0000RP\u0001\u0000\u0000\u0000SV\u0003\n\u0005\u0000TV\u0003\u0002"+
		"\u0001\u0000US\u0001\u0000\u0000\u0000UT\u0001\u0000\u0000\u0000VY\u0001"+
		"\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000"+
		"XZ\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000Z[\u0005\t\u0000\u0000"+
		"[\t\u0001\u0000\u0000\u0000\\]\u0005\u0007\u0000\u0000]b\u0005\u0013\u0000"+
		"\u0000^_\u0005\u0012\u0000\u0000_a\u0005\u0013\u0000\u0000`^\u0001\u0000"+
		"\u0000\u0000ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001"+
		"\u0000\u0000\u0000cj\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000"+
		"eg\u0005\f\u0000\u0000fh\u0003\u0010\b\u0000gf\u0001\u0000\u0000\u0000"+
		"gh\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ik\u0005\r\u0000\u0000"+
		"je\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000k\u000b\u0001\u0000"+
		"\u0000\u0000lm\u0005\u0013\u0000\u0000mq\u0005\u0013\u0000\u0000nr\u0005"+
		"\u0011\u0000\u0000op\u0005\n\u0000\u0000pr\u0005\u000b\u0000\u0000qn\u0001"+
		"\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000"+
		"rv\u0001\u0000\u0000\u0000su\u0003\u000e\u0007\u0000ts\u0001\u0000\u0000"+
		"\u0000ux\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000vw\u0001\u0000"+
		"\u0000\u0000w\r\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000yz\u0005"+
		"\u0006\u0000\u0000z\u007f\u0005\u0013\u0000\u0000{|\u0005\u0012\u0000"+
		"\u0000|~\u0005\u0013\u0000\u0000}{\u0001\u0000\u0000\u0000~\u0081\u0001"+
		"\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000"+
		"\u0000\u0000\u0080\u0087\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000"+
		"\u0000\u0000\u0082\u0084\u0005\f\u0000\u0000\u0083\u0085\u0003\u0010\b"+
		"\u0000\u0084\u0083\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000"+
		"\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0088\u0005\r\u0000\u0000"+
		"\u0087\u0082\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000"+
		"\u0088\u000f\u0001\u0000\u0000\u0000\u0089\u008e\u0003\u0012\t\u0000\u008a"+
		"\u008b\u0005\u000f\u0000\u0000\u008b\u008d\u0003\u0012\t\u0000\u008c\u008a"+
		"\u0001\u0000\u0000\u0000\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u008c"+
		"\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000\u008f\u0095"+
		"\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0092"+
		"\u0005\u000f\u0000\u0000\u0092\u0094\u0003\u0014\n\u0000\u0093\u0091\u0001"+
		"\u0000\u0000\u0000\u0094\u0097\u0001\u0000\u0000\u0000\u0095\u0093\u0001"+
		"\u0000\u0000\u0000\u0095\u0096\u0001\u0000\u0000\u0000\u0096\u00a1\u0001"+
		"\u0000\u0000\u0000\u0097\u0095\u0001\u0000\u0000\u0000\u0098\u009d\u0003"+
		"\u0014\n\u0000\u0099\u009a\u0005\u000f\u0000\u0000\u009a\u009c\u0003\u0014"+
		"\n\u0000\u009b\u0099\u0001\u0000\u0000\u0000\u009c\u009f\u0001\u0000\u0000"+
		"\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d\u009e\u0001\u0000\u0000"+
		"\u0000\u009e\u00a1\u0001\u0000\u0000\u0000\u009f\u009d\u0001\u0000\u0000"+
		"\u0000\u00a0\u0089\u0001\u0000\u0000\u0000\u00a0\u0098\u0001\u0000\u0000"+
		"\u0000\u00a1\u0011\u0001\u0000\u0000\u0000\u00a2\u00a3\u0003\u0018\f\u0000"+
		"\u00a3\u0013\u0001\u0000\u0000\u0000\u00a4\u00a5\u0005\u0013\u0000\u0000"+
		"\u00a5\u00a6\u0005\u000e\u0000\u0000\u00a6\u00a7\u0003\u0018\f\u0000\u00a7"+
		"\u0015\u0001\u0000\u0000\u0000\u00a8\u00ad\u0003\u0018\f\u0000\u00a9\u00aa"+
		"\u0005\u000f\u0000\u0000\u00aa\u00ac\u0003\u0018\f\u0000\u00ab\u00a9\u0001"+
		"\u0000\u0000\u0000\u00ac\u00af\u0001\u0000\u0000\u0000\u00ad\u00ab\u0001"+
		"\u0000\u0000\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae\u0017\u0001"+
		"\u0000\u0000\u0000\u00af\u00ad\u0001\u0000\u0000\u0000\u00b0\u00b5\u0005"+
		"\u0013\u0000\u0000\u00b1\u00b2\u0005\u0012\u0000\u0000\u00b2\u00b4\u0005"+
		"\u0013\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b4\u00b7\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001"+
		"\u0000\u0000\u0000\u00b6\u00bd\u0001\u0000\u0000\u0000\u00b7\u00b5\u0001"+
		"\u0000\u0000\u0000\u00b8\u00ba\u0005\f\u0000\u0000\u00b9\u00bb\u0003\u0010"+
		"\b\u0000\u00ba\u00b9\u0001\u0000\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000"+
		"\u0000\u00bb\u00bc\u0001\u0000\u0000\u0000\u00bc\u00be\u0005\r\u0000\u0000"+
		"\u00bd\u00b8\u0001\u0000\u0000\u0000\u00bd\u00be\u0001\u0000\u0000\u0000"+
		"\u00be\u00c9\u0001\u0000\u0000\u0000\u00bf\u00c9\u0005\u0014\u0000\u0000"+
		"\u00c0\u00c9\u0005\u001c\u0000\u0000\u00c1\u00c9\u0005\u001d\u0000\u0000"+
		"\u00c2\u00c9\u0005\u0005\u0000\u0000\u00c3\u00c5\u0005\n\u0000\u0000\u00c4"+
		"\u00c6\u0003\u0016\u000b\u0000\u00c5\u00c4\u0001\u0000\u0000\u0000\u00c5"+
		"\u00c6\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7"+
		"\u00c9\u0005\u000b\u0000\u0000\u00c8\u00b0\u0001\u0000\u0000\u0000\u00c8"+
		"\u00bf\u0001\u0000\u0000\u0000\u00c8\u00c0\u0001\u0000\u0000\u0000\u00c8"+
		"\u00c1\u0001\u0000\u0000\u0000\u00c8\u00c2\u0001\u0000\u0000\u0000\u00c8"+
		"\u00c3\u0001\u0000\u0000\u0000\u00c9\u0019\u0001\u0000\u0000\u0000\u00ca"+
		"\u00cb\u0005\u0003\u0000\u0000\u00cb\u00cc\u0005\u0013\u0000\u0000\u00cc"+
		"\u00d0\u0005\b\u0000\u0000\u00cd\u00cf\u0005\u0014\u0000\u0000\u00ce\u00cd"+
		"\u0001\u0000\u0000\u0000\u00cf\u00d2\u0001\u0000\u0000\u0000\u00d0\u00ce"+
		"\u0001\u0000\u0000\u0000\u00d0\u00d1\u0001\u0000\u0000\u0000\u00d1\u00d6"+
		"\u0001\u0000\u0000\u0000\u00d2\u00d0\u0001\u0000\u0000\u0000\u00d3\u00d5"+
		"\u0003\n\u0005\u0000\u00d4\u00d3\u0001\u0000\u0000\u0000\u00d5\u00d8\u0001"+
		"\u0000\u0000\u0000\u00d6\u00d4\u0001\u0000\u0000\u0000\u00d6\u00d7\u0001"+
		"\u0000\u0000\u0000\u00d7\u00d9\u0001\u0000\u0000\u0000\u00d8\u00d6\u0001"+
		"\u0000\u0000\u0000\u00d9\u00da\u0005\t\u0000\u0000\u00da\u001b\u0001\u0000"+
		"\u0000\u0000\u00db\u00dc\u0005\u0004\u0000\u0000\u00dc\u00dd\u0005\u0013"+
		"\u0000\u0000\u00dd\u00de\u0005\u0010\u0000\u0000\u00de\u00e2\u0005\u0013"+
		"\u0000\u0000\u00df\u00e1\u0003\u000e\u0007\u0000\u00e0\u00df\u0001\u0000"+
		"\u0000\u0000\u00e1\u00e4\u0001\u0000\u0000\u0000\u00e2\u00e0\u0001\u0000"+
		"\u0000\u0000\u00e2\u00e3\u0001\u0000\u0000\u0000\u00e3\u001d\u0001\u0000"+
		"\u0000\u0000\u00e4\u00e2\u0001\u0000\u0000\u0000!!%*57<>GNPUWbgjqv\u007f"+
		"\u0084\u0087\u008e\u0095\u009d\u00a0\u00ad\u00b5\u00ba\u00bd\u00c5\u00c8"+
		"\u00d0\u00d6\u00e2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}