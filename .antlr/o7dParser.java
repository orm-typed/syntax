// Generated from /Users/user/workspace/orm-typed/syntax/o7d.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, ID=17, 
		STRING=18, ESC_SEQ=19, UNICODE_ESC=20, HEX=21, NUMBER=22, BOOLEAN=23, 
		WS=24;
	public static final int
		RULE_schema = 0, RULE_header = 1, RULE_modelDeclaration = 2, RULE_modelAttributeDeclaration = 3, 
		RULE_fieldDeclaration = 4, RULE_fieldAttributeDeclaration = 5, RULE_attributeValues = 6, 
		RULE_attributeValuePositional = 7, RULE_attributeValueNamed = 8, RULE_expressions = 9, 
		RULE_expression = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"schema", "header", "modelDeclaration", "modelAttributeDeclaration", 
			"fieldDeclaration", "fieldAttributeDeclaration", "attributeValues", "attributeValuePositional", 
			"attributeValueNamed", "expressions", "expression"
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

	@Override
	public String getGrammarFileName() { return "o7d.g4"; }

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
		public HeaderContext header() {
			return getRuleContext(HeaderContext.class,0);
		}
		public List<ModelDeclarationContext> modelDeclaration() {
			return getRuleContexts(ModelDeclarationContext.class);
		}
		public ModelDeclarationContext modelDeclaration(int i) {
			return getRuleContext(ModelDeclarationContext.class,i);
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
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(22);
				header();
				}
			}

			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(25);
				modelDeclaration();
				}
				}
				setState(30);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(31);
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
	public static class HeaderContext extends ParserRuleContext {
		public List<FieldDeclarationContext> fieldDeclaration() {
			return getRuleContexts(FieldDeclarationContext.class);
		}
		public FieldDeclarationContext fieldDeclaration(int i) {
			return getRuleContext(FieldDeclarationContext.class,i);
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
		enterRule(_localctx, 2, RULE_header);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			match(T__0);
			setState(34);
			match(T__1);
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(35);
				fieldDeclaration();
				}
				}
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(41);
				modelAttributeDeclaration();
				}
				}
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(47);
			match(T__2);
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
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public List<FieldDeclarationContext> fieldDeclaration() {
			return getRuleContexts(FieldDeclarationContext.class);
		}
		public FieldDeclarationContext fieldDeclaration(int i) {
			return getRuleContext(FieldDeclarationContext.class,i);
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
		enterRule(_localctx, 4, RULE_modelDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(T__3);
			setState(50);
			match(ID);
			setState(51);
			match(T__1);
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(52);
				fieldDeclaration();
				}
				}
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(58);
				modelAttributeDeclaration();
				}
				}
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(64);
			match(T__2);
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
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
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
		enterRule(_localctx, 6, RULE_modelAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(T__4);
			setState(67);
			match(ID);
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(68);
				match(T__5);
				setState(69);
				match(ID);
				}
			}

			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(72);
				match(T__6);
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13025280L) != 0)) {
					{
					setState(73);
					attributeValues();
					}
				}

				setState(76);
				match(T__7);
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
		public List<FieldAttributeDeclarationContext> fieldAttributeDeclaration() {
			return getRuleContexts(FieldAttributeDeclarationContext.class);
		}
		public FieldAttributeDeclarationContext fieldAttributeDeclaration(int i) {
			return getRuleContext(FieldAttributeDeclarationContext.class,i);
		}
		public FieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclaration; }
	}

	public final FieldDeclarationContext fieldDeclaration() throws RecognitionException {
		FieldDeclarationContext _localctx = new FieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_fieldDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(ID);
			setState(80);
			match(ID);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8 || _la==T__9) {
				{
				setState(81);
				_la = _input.LA(1);
				if ( !(_la==T__8 || _la==T__9) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(84);
				fieldAttributeDeclaration();
				}
				}
				setState(89);
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
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
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
		enterRule(_localctx, 10, RULE_fieldAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(T__10);
			setState(91);
			match(ID);
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(92);
				match(T__5);
				setState(93);
				match(ID);
				}
			}

			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(96);
				match(T__6);
				setState(98);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13025280L) != 0)) {
					{
					setState(97);
					attributeValues();
					}
				}

				setState(100);
				match(T__7);
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
		enterRule(_localctx, 12, RULE_attributeValues);
		int _la;
		try {
			int _alt;
			setState(126);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(103);
				attributeValuePositional();
				setState(108);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(104);
						match(T__11);
						setState(105);
						attributeValuePositional();
						}
						} 
					}
					setState(110);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__11) {
					{
					{
					setState(111);
					match(T__11);
					setState(112);
					attributeValueNamed();
					}
					}
					setState(117);
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
				setState(118);
				attributeValueNamed();
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__11) {
					{
					{
					setState(119);
					match(T__11);
					setState(120);
					attributeValueNamed();
					}
					}
					setState(125);
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
		enterRule(_localctx, 14, RULE_attributeValuePositional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
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
		enterRule(_localctx, 16, RULE_attributeValueNamed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(ID);
			setState(131);
			match(T__12);
			setState(132);
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
		public ExpressionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressions; }
	}

	public final ExpressionsContext expressions() throws RecognitionException {
		ExpressionsContext _localctx = new ExpressionsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expressions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			expression();
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__11) {
				{
				{
				setState(135);
				match(T__11);
				setState(136);
				expression();
				}
				}
				setState(141);
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
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public ExpressionsContext expressions() {
			return getRuleContext(ExpressionsContext.class,0);
		}
		public TerminalNode STRING() { return getToken(o7dParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(o7dParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(o7dParser.BOOLEAN, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_expression);
		int _la;
		try {
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(142);
				match(ID);
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__6) {
					{
					setState(143);
					match(T__6);
					setState(145);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13025280L) != 0)) {
						{
						setState(144);
						expressions();
						}
					}

					setState(147);
					match(T__7);
					}
				}

				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(150);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(151);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(152);
				match(BOOLEAN);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 5);
				{
				setState(153);
				match(T__13);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(154);
				match(T__14);
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13025280L) != 0)) {
					{
					setState(155);
					expressions();
					}
				}

				setState(158);
				match(T__15);
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

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u00a2\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0003\u0000"+
		"\u0018\b\u0000\u0001\u0000\u0005\u0000\u001b\b\u0000\n\u0000\f\u0000\u001e"+
		"\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001%\b\u0001\n\u0001\f\u0001(\t\u0001\u0001\u0001\u0005\u0001+\b\u0001"+
		"\n\u0001\f\u0001.\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u00026\b\u0002\n\u0002\f\u00029\t\u0002"+
		"\u0001\u0002\u0005\u0002<\b\u0002\n\u0002\f\u0002?\t\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"G\b\u0003\u0001\u0003\u0001\u0003\u0003\u0003K\b\u0003\u0001\u0003\u0003"+
		"\u0003N\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004S\b\u0004"+
		"\u0001\u0004\u0005\u0004V\b\u0004\n\u0004\f\u0004Y\t\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005_\b\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005c\b\u0005\u0001\u0005\u0003\u0005f\b\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0005\u0006k\b\u0006\n\u0006\f\u0006n\t"+
		"\u0006\u0001\u0006\u0001\u0006\u0005\u0006r\b\u0006\n\u0006\f\u0006u\t"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006z\b\u0006\n\u0006"+
		"\f\u0006}\t\u0006\u0003\u0006\u007f\b\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005\t\u008a\b\t\n"+
		"\t\f\t\u008d\t\t\u0001\n\u0001\n\u0001\n\u0003\n\u0092\b\n\u0001\n\u0003"+
		"\n\u0095\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u009d"+
		"\b\n\u0001\n\u0003\n\u00a0\b\n\u0001\n\u0000\u0000\u000b\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0000\u0001\u0001\u0000\t\n\u00b1"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0002!\u0001\u0000\u0000\u0000\u0004"+
		"1\u0001\u0000\u0000\u0000\u0006B\u0001\u0000\u0000\u0000\bO\u0001\u0000"+
		"\u0000\u0000\nZ\u0001\u0000\u0000\u0000\f~\u0001\u0000\u0000\u0000\u000e"+
		"\u0080\u0001\u0000\u0000\u0000\u0010\u0082\u0001\u0000\u0000\u0000\u0012"+
		"\u0086\u0001\u0000\u0000\u0000\u0014\u009f\u0001\u0000\u0000\u0000\u0016"+
		"\u0018\u0003\u0002\u0001\u0000\u0017\u0016\u0001\u0000\u0000\u0000\u0017"+
		"\u0018\u0001\u0000\u0000\u0000\u0018\u001c\u0001\u0000\u0000\u0000\u0019"+
		"\u001b\u0003\u0004\u0002\u0000\u001a\u0019\u0001\u0000\u0000\u0000\u001b"+
		"\u001e\u0001\u0000\u0000\u0000\u001c\u001a\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0001\u0000\u0000\u0000\u001d\u001f\u0001\u0000\u0000\u0000\u001e"+
		"\u001c\u0001\u0000\u0000\u0000\u001f \u0005\u0000\u0000\u0001 \u0001\u0001"+
		"\u0000\u0000\u0000!\"\u0005\u0001\u0000\u0000\"&\u0005\u0002\u0000\u0000"+
		"#%\u0003\b\u0004\u0000$#\u0001\u0000\u0000\u0000%(\u0001\u0000\u0000\u0000"+
		"&$\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000\',\u0001\u0000\u0000"+
		"\u0000(&\u0001\u0000\u0000\u0000)+\u0003\u0006\u0003\u0000*)\u0001\u0000"+
		"\u0000\u0000+.\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001"+
		"\u0000\u0000\u0000-/\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000"+
		"/0\u0005\u0003\u0000\u00000\u0003\u0001\u0000\u0000\u000012\u0005\u0004"+
		"\u0000\u000023\u0005\u0011\u0000\u000037\u0005\u0002\u0000\u000046\u0003"+
		"\b\u0004\u000054\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u000075\u0001"+
		"\u0000\u0000\u000078\u0001\u0000\u0000\u00008=\u0001\u0000\u0000\u0000"+
		"97\u0001\u0000\u0000\u0000:<\u0003\u0006\u0003\u0000;:\u0001\u0000\u0000"+
		"\u0000<?\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000=>\u0001\u0000"+
		"\u0000\u0000>@\u0001\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000@A\u0005"+
		"\u0003\u0000\u0000A\u0005\u0001\u0000\u0000\u0000BC\u0005\u0005\u0000"+
		"\u0000CF\u0005\u0011\u0000\u0000DE\u0005\u0006\u0000\u0000EG\u0005\u0011"+
		"\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GM\u0001"+
		"\u0000\u0000\u0000HJ\u0005\u0007\u0000\u0000IK\u0003\f\u0006\u0000JI\u0001"+
		"\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000"+
		"LN\u0005\b\u0000\u0000MH\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000"+
		"N\u0007\u0001\u0000\u0000\u0000OP\u0005\u0011\u0000\u0000PR\u0005\u0011"+
		"\u0000\u0000QS\u0007\u0000\u0000\u0000RQ\u0001\u0000\u0000\u0000RS\u0001"+
		"\u0000\u0000\u0000SW\u0001\u0000\u0000\u0000TV\u0003\n\u0005\u0000UT\u0001"+
		"\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000"+
		"WX\u0001\u0000\u0000\u0000X\t\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000"+
		"\u0000Z[\u0005\u000b\u0000\u0000[^\u0005\u0011\u0000\u0000\\]\u0005\u0006"+
		"\u0000\u0000]_\u0005\u0011\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001"+
		"\u0000\u0000\u0000_e\u0001\u0000\u0000\u0000`b\u0005\u0007\u0000\u0000"+
		"ac\u0003\f\u0006\u0000ba\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000"+
		"cd\u0001\u0000\u0000\u0000df\u0005\b\u0000\u0000e`\u0001\u0000\u0000\u0000"+
		"ef\u0001\u0000\u0000\u0000f\u000b\u0001\u0000\u0000\u0000gl\u0003\u000e"+
		"\u0007\u0000hi\u0005\f\u0000\u0000ik\u0003\u000e\u0007\u0000jh\u0001\u0000"+
		"\u0000\u0000kn\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001"+
		"\u0000\u0000\u0000ms\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000"+
		"op\u0005\f\u0000\u0000pr\u0003\u0010\b\u0000qo\u0001\u0000\u0000\u0000"+
		"ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001\u0000\u0000"+
		"\u0000t\u007f\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000v{\u0003"+
		"\u0010\b\u0000wx\u0005\f\u0000\u0000xz\u0003\u0010\b\u0000yw\u0001\u0000"+
		"\u0000\u0000z}\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000{|\u0001"+
		"\u0000\u0000\u0000|\u007f\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000"+
		"\u0000~g\u0001\u0000\u0000\u0000~v\u0001\u0000\u0000\u0000\u007f\r\u0001"+
		"\u0000\u0000\u0000\u0080\u0081\u0003\u0014\n\u0000\u0081\u000f\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0005\u0011\u0000\u0000\u0083\u0084\u0005\r\u0000"+
		"\u0000\u0084\u0085\u0003\u0014\n\u0000\u0085\u0011\u0001\u0000\u0000\u0000"+
		"\u0086\u008b\u0003\u0014\n\u0000\u0087\u0088\u0005\f\u0000\u0000\u0088"+
		"\u008a\u0003\u0014\n\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u008a\u008d"+
		"\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000\u0000\u0000\u008b\u008c"+
		"\u0001\u0000\u0000\u0000\u008c\u0013\u0001\u0000\u0000\u0000\u008d\u008b"+
		"\u0001\u0000\u0000\u0000\u008e\u0094\u0005\u0011\u0000\u0000\u008f\u0091"+
		"\u0005\u0007\u0000\u0000\u0090\u0092\u0003\u0012\t\u0000\u0091\u0090\u0001"+
		"\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u0093\u0001"+
		"\u0000\u0000\u0000\u0093\u0095\u0005\b\u0000\u0000\u0094\u008f\u0001\u0000"+
		"\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u00a0\u0001\u0000"+
		"\u0000\u0000\u0096\u00a0\u0005\u0012\u0000\u0000\u0097\u00a0\u0005\u0016"+
		"\u0000\u0000\u0098\u00a0\u0005\u0017\u0000\u0000\u0099\u00a0\u0005\u000e"+
		"\u0000\u0000\u009a\u009c\u0005\u000f\u0000\u0000\u009b\u009d\u0003\u0012"+
		"\t\u0000\u009c\u009b\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u00a0\u0005\u0010\u0000"+
		"\u0000\u009f\u008e\u0001\u0000\u0000\u0000\u009f\u0096\u0001\u0000\u0000"+
		"\u0000\u009f\u0097\u0001\u0000\u0000\u0000\u009f\u0098\u0001\u0000\u0000"+
		"\u0000\u009f\u0099\u0001\u0000\u0000\u0000\u009f\u009a\u0001\u0000\u0000"+
		"\u0000\u00a0\u0015\u0001\u0000\u0000\u0000\u0017\u0017\u001c&,7=FJMRW"+
		"^bels{~\u008b\u0091\u0094\u009c\u009f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}