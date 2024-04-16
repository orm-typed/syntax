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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, ID=20, STRING=21, ESC_SEQ=22, UNICODE_ESC=23, HEX=24, 
		NUMBER=25, BOOLEAN=26, WS=27, SINGLE_LINE_COMMENT=28, MULTI_LINE_COMMENT=29;
	public static final int
		RULE_schema = 0, RULE_header = 1, RULE_modelOrEnumOrScalarDeclaration = 2, 
		RULE_modelDeclaration = 3, RULE_modelAttributeDeclaration = 4, RULE_fieldDeclaration = 5, 
		RULE_fieldAttributeDeclaration = 6, RULE_attributeValues = 7, RULE_attributeValuePositional = 8, 
		RULE_attributeValueNamed = 9, RULE_expressions = 10, RULE_expression = 11, 
		RULE_enumDeclaration = 12, RULE_scalarDeclaration = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"schema", "header", "modelOrEnumOrScalarDeclaration", "modelDeclaration", 
			"modelAttributeDeclaration", "fieldDeclaration", "fieldAttributeDeclaration", 
			"attributeValues", "attributeValuePositional", "attributeValueNamed", 
			"expressions", "expression", "enumDeclaration", "scalarDeclaration"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'header'", "'{'", "'}'", "'model'", "'@@'", "'.'", "'('", "')'", 
			"'?'", "'[]'", "'@'", "','", "':'", "'null'", "'['", "']'", "'enum'", 
			"'scalar'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "ID", "STRING", "ESC_SEQ", 
			"UNICODE_ESC", "HEX", "NUMBER", "BOOLEAN", "WS", "SINGLE_LINE_COMMENT", 
			"MULTI_LINE_COMMENT"
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
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(28);
				header();
				}
			}

			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 393232L) != 0)) {
				{
				{
				setState(31);
				modelOrEnumOrScalarDeclaration();
				}
				}
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(37);
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
			setState(39);
			match(T__0);
			setState(40);
			match(T__1);
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(41);
				fieldDeclaration();
				}
				}
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(47);
				modelAttributeDeclaration();
				}
				}
				setState(52);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(53);
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
	public static class ModelOrEnumOrScalarDeclarationContext extends ParserRuleContext {
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
		enterRule(_localctx, 4, RULE_modelOrEnumOrScalarDeclaration);
		try {
			setState(58);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				modelDeclaration();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(56);
				enumDeclaration();
				}
				break;
			case T__17:
				enterOuterAlt(_localctx, 3);
				{
				setState(57);
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
		enterRule(_localctx, 6, RULE_modelDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(T__3);
			setState(61);
			match(ID);
			setState(62);
			match(T__1);
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(63);
				fieldDeclaration();
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(69);
				modelAttributeDeclaration();
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(75);
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
		enterRule(_localctx, 8, RULE_modelAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(T__4);
			setState(78);
			match(ID);
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(79);
				match(T__5);
				setState(80);
				match(ID);
				}
			}

			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(83);
				match(T__6);
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 103858176L) != 0)) {
					{
					setState(84);
					attributeValues();
					}
				}

				setState(87);
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
		enterRule(_localctx, 10, RULE_fieldDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(ID);
			setState(91);
			match(ID);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8 || _la==T__9) {
				{
				setState(92);
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

			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(95);
				fieldAttributeDeclaration();
				}
				}
				setState(100);
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
		enterRule(_localctx, 12, RULE_fieldAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(T__10);
			setState(102);
			match(ID);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(103);
				match(T__5);
				setState(104);
				match(ID);
				}
			}

			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(107);
				match(T__6);
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 103858176L) != 0)) {
					{
					setState(108);
					attributeValues();
					}
				}

				setState(111);
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
		enterRule(_localctx, 14, RULE_attributeValues);
		int _la;
		try {
			int _alt;
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(114);
				attributeValuePositional();
				setState(119);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(115);
						match(T__11);
						setState(116);
						attributeValuePositional();
						}
						} 
					}
					setState(121);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				}
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__11) {
					{
					{
					setState(122);
					match(T__11);
					setState(123);
					attributeValueNamed();
					}
					}
					setState(128);
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
				setState(129);
				attributeValueNamed();
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__11) {
					{
					{
					setState(130);
					match(T__11);
					setState(131);
					attributeValueNamed();
					}
					}
					setState(136);
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
		enterRule(_localctx, 16, RULE_attributeValuePositional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
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
		enterRule(_localctx, 18, RULE_attributeValueNamed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(ID);
			setState(142);
			match(T__12);
			setState(143);
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
		enterRule(_localctx, 20, RULE_expressions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			expression();
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__11) {
				{
				{
				setState(146);
				match(T__11);
				setState(147);
				expression();
				}
				}
				setState(152);
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
		enterRule(_localctx, 22, RULE_expression);
		int _la;
		try {
			setState(170);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(153);
				match(ID);
				setState(159);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__6) {
					{
					setState(154);
					match(T__6);
					setState(156);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 103858176L) != 0)) {
						{
						setState(155);
						expressions();
						}
					}

					setState(158);
					match(T__7);
					}
				}

				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(162);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(163);
				match(BOOLEAN);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 5);
				{
				setState(164);
				match(T__13);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(165);
				match(T__14);
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 103858176L) != 0)) {
					{
					setState(166);
					expressions();
					}
				}

				setState(169);
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

	@SuppressWarnings("CheckReturnValue")
	public static class EnumDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
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
		enterRule(_localctx, 24, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			match(T__16);
			setState(173);
			match(ID);
			setState(174);
			match(T__1);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(175);
				match(STRING);
				}
				}
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(181);
				modelAttributeDeclaration();
				}
				}
				setState(186);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(187);
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
	public static class ScalarDeclarationContext extends ParserRuleContext {
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
		public ScalarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalarDeclaration; }
	}

	public final ScalarDeclarationContext scalarDeclaration() throws RecognitionException {
		ScalarDeclarationContext _localctx = new ScalarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_scalarDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(T__17);
			setState(190);
			match(ID);
			setState(191);
			match(T__18);
			setState(192);
			match(ID);
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(193);
				fieldAttributeDeclaration();
				}
				}
				setState(198);
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
		"\u0004\u0001\u001d\u00c8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0003\u0000\u001e\b\u0000"+
		"\u0001\u0000\u0005\u0000!\b\u0000\n\u0000\f\u0000$\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001+\b\u0001"+
		"\n\u0001\f\u0001.\t\u0001\u0001\u0001\u0005\u00011\b\u0001\n\u0001\f\u0001"+
		"4\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002;\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0005\u0003A\b\u0003\n\u0003\f\u0003D\t\u0003\u0001\u0003\u0005\u0003"+
		"G\b\u0003\n\u0003\f\u0003J\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004R\b\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004V\b\u0004\u0001\u0004\u0003\u0004Y\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0003\u0005^\b\u0005\u0001\u0005\u0005"+
		"\u0005a\b\u0005\n\u0005\f\u0005d\t\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0003\u0006j\b\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006n\b\u0006\u0001\u0006\u0003\u0006q\b\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007v\b\u0007\n\u0007\f\u0007y\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007}\b\u0007\n\u0007\f\u0007\u0080\t\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u0085\b\u0007\n\u0007\f\u0007"+
		"\u0088\t\u0007\u0003\u0007\u008a\b\u0007\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0005\n\u0095\b\n\n\n\f\n\u0098"+
		"\t\n\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u009d\b\u000b\u0001"+
		"\u000b\u0003\u000b\u00a0\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00a8\b\u000b\u0001\u000b\u0003"+
		"\u000b\u00ab\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u00b1\b\f"+
		"\n\f\f\f\u00b4\t\f\u0001\f\u0005\f\u00b7\b\f\n\f\f\f\u00ba\t\f\u0001\f"+
		"\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00c3\b\r\n\r"+
		"\f\r\u00c6\t\r\u0001\r\u0000\u0000\u000e\u0000\u0002\u0004\u0006\b\n\f"+
		"\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0001\u0001\u0000\t\n"+
		"\u00d9\u0000\u001d\u0001\u0000\u0000\u0000\u0002\'\u0001\u0000\u0000\u0000"+
		"\u0004:\u0001\u0000\u0000\u0000\u0006<\u0001\u0000\u0000\u0000\bM\u0001"+
		"\u0000\u0000\u0000\nZ\u0001\u0000\u0000\u0000\fe\u0001\u0000\u0000\u0000"+
		"\u000e\u0089\u0001\u0000\u0000\u0000\u0010\u008b\u0001\u0000\u0000\u0000"+
		"\u0012\u008d\u0001\u0000\u0000\u0000\u0014\u0091\u0001\u0000\u0000\u0000"+
		"\u0016\u00aa\u0001\u0000\u0000\u0000\u0018\u00ac\u0001\u0000\u0000\u0000"+
		"\u001a\u00bd\u0001\u0000\u0000\u0000\u001c\u001e\u0003\u0002\u0001\u0000"+
		"\u001d\u001c\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000\u0000\u0000"+
		"\u001e\"\u0001\u0000\u0000\u0000\u001f!\u0003\u0004\u0002\u0000 \u001f"+
		"\u0001\u0000\u0000\u0000!$\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000"+
		"\u0000\"#\u0001\u0000\u0000\u0000#%\u0001\u0000\u0000\u0000$\"\u0001\u0000"+
		"\u0000\u0000%&\u0005\u0000\u0000\u0001&\u0001\u0001\u0000\u0000\u0000"+
		"\'(\u0005\u0001\u0000\u0000(,\u0005\u0002\u0000\u0000)+\u0003\n\u0005"+
		"\u0000*)\u0001\u0000\u0000\u0000+.\u0001\u0000\u0000\u0000,*\u0001\u0000"+
		"\u0000\u0000,-\u0001\u0000\u0000\u0000-2\u0001\u0000\u0000\u0000.,\u0001"+
		"\u0000\u0000\u0000/1\u0003\b\u0004\u00000/\u0001\u0000\u0000\u000014\u0001"+
		"\u0000\u0000\u000020\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u0000"+
		"35\u0001\u0000\u0000\u000042\u0001\u0000\u0000\u000056\u0005\u0003\u0000"+
		"\u00006\u0003\u0001\u0000\u0000\u00007;\u0003\u0006\u0003\u00008;\u0003"+
		"\u0018\f\u00009;\u0003\u001a\r\u0000:7\u0001\u0000\u0000\u0000:8\u0001"+
		"\u0000\u0000\u0000:9\u0001\u0000\u0000\u0000;\u0005\u0001\u0000\u0000"+
		"\u0000<=\u0005\u0004\u0000\u0000=>\u0005\u0014\u0000\u0000>B\u0005\u0002"+
		"\u0000\u0000?A\u0003\n\u0005\u0000@?\u0001\u0000\u0000\u0000AD\u0001\u0000"+
		"\u0000\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CH\u0001"+
		"\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000EG\u0003\b\u0004\u0000FE\u0001"+
		"\u0000\u0000\u0000GJ\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IK\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000"+
		"\u0000KL\u0005\u0003\u0000\u0000L\u0007\u0001\u0000\u0000\u0000MN\u0005"+
		"\u0005\u0000\u0000NQ\u0005\u0014\u0000\u0000OP\u0005\u0006\u0000\u0000"+
		"PR\u0005\u0014\u0000\u0000QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000"+
		"\u0000RX\u0001\u0000\u0000\u0000SU\u0005\u0007\u0000\u0000TV\u0003\u000e"+
		"\u0007\u0000UT\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000VW\u0001"+
		"\u0000\u0000\u0000WY\u0005\b\u0000\u0000XS\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000Y\t\u0001\u0000\u0000\u0000Z[\u0005\u0014\u0000\u0000"+
		"[]\u0005\u0014\u0000\u0000\\^\u0007\u0000\u0000\u0000]\\\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^b\u0001\u0000\u0000\u0000_a\u0003\f\u0006"+
		"\u0000`_\u0001\u0000\u0000\u0000ad\u0001\u0000\u0000\u0000b`\u0001\u0000"+
		"\u0000\u0000bc\u0001\u0000\u0000\u0000c\u000b\u0001\u0000\u0000\u0000"+
		"db\u0001\u0000\u0000\u0000ef\u0005\u000b\u0000\u0000fi\u0005\u0014\u0000"+
		"\u0000gh\u0005\u0006\u0000\u0000hj\u0005\u0014\u0000\u0000ig\u0001\u0000"+
		"\u0000\u0000ij\u0001\u0000\u0000\u0000jp\u0001\u0000\u0000\u0000km\u0005"+
		"\u0007\u0000\u0000ln\u0003\u000e\u0007\u0000ml\u0001\u0000\u0000\u0000"+
		"mn\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000oq\u0005\b\u0000\u0000"+
		"pk\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000q\r\u0001\u0000\u0000"+
		"\u0000rw\u0003\u0010\b\u0000st\u0005\f\u0000\u0000tv\u0003\u0010\b\u0000"+
		"us\u0001\u0000\u0000\u0000vy\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000"+
		"\u0000wx\u0001\u0000\u0000\u0000x~\u0001\u0000\u0000\u0000yw\u0001\u0000"+
		"\u0000\u0000z{\u0005\f\u0000\u0000{}\u0003\u0012\t\u0000|z\u0001\u0000"+
		"\u0000\u0000}\u0080\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000"+
		"~\u007f\u0001\u0000\u0000\u0000\u007f\u008a\u0001\u0000\u0000\u0000\u0080"+
		"~\u0001\u0000\u0000\u0000\u0081\u0086\u0003\u0012\t\u0000\u0082\u0083"+
		"\u0005\f\u0000\u0000\u0083\u0085\u0003\u0012\t\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0085\u0088\u0001\u0000\u0000\u0000\u0086\u0084\u0001"+
		"\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087\u008a\u0001"+
		"\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0089r\u0001\u0000"+
		"\u0000\u0000\u0089\u0081\u0001\u0000\u0000\u0000\u008a\u000f\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0003\u0016\u000b\u0000\u008c\u0011\u0001\u0000"+
		"\u0000\u0000\u008d\u008e\u0005\u0014\u0000\u0000\u008e\u008f\u0005\r\u0000"+
		"\u0000\u008f\u0090\u0003\u0016\u000b\u0000\u0090\u0013\u0001\u0000\u0000"+
		"\u0000\u0091\u0096\u0003\u0016\u000b\u0000\u0092\u0093\u0005\f\u0000\u0000"+
		"\u0093\u0095\u0003\u0016\u000b\u0000\u0094\u0092\u0001\u0000\u0000\u0000"+
		"\u0095\u0098\u0001\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000\u0000"+
		"\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u0015\u0001\u0000\u0000\u0000"+
		"\u0098\u0096\u0001\u0000\u0000\u0000\u0099\u009f\u0005\u0014\u0000\u0000"+
		"\u009a\u009c\u0005\u0007\u0000\u0000\u009b\u009d\u0003\u0014\n\u0000\u009c"+
		"\u009b\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d"+
		"\u009e\u0001\u0000\u0000\u0000\u009e\u00a0\u0005\b\u0000\u0000\u009f\u009a"+
		"\u0001\u0000\u0000\u0000\u009f\u00a0\u0001\u0000\u0000\u0000\u00a0\u00ab"+
		"\u0001\u0000\u0000\u0000\u00a1\u00ab\u0005\u0015\u0000\u0000\u00a2\u00ab"+
		"\u0005\u0019\u0000\u0000\u00a3\u00ab\u0005\u001a\u0000\u0000\u00a4\u00ab"+
		"\u0005\u000e\u0000\u0000\u00a5\u00a7\u0005\u000f\u0000\u0000\u00a6\u00a8"+
		"\u0003\u0014\n\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9\u00ab\u0005"+
		"\u0010\u0000\u0000\u00aa\u0099\u0001\u0000\u0000\u0000\u00aa\u00a1\u0001"+
		"\u0000\u0000\u0000\u00aa\u00a2\u0001\u0000\u0000\u0000\u00aa\u00a3\u0001"+
		"\u0000\u0000\u0000\u00aa\u00a4\u0001\u0000\u0000\u0000\u00aa\u00a5\u0001"+
		"\u0000\u0000\u0000\u00ab\u0017\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005"+
		"\u0011\u0000\u0000\u00ad\u00ae\u0005\u0014\u0000\u0000\u00ae\u00b2\u0005"+
		"\u0002\u0000\u0000\u00af\u00b1\u0005\u0015\u0000\u0000\u00b0\u00af\u0001"+
		"\u0000\u0000\u0000\u00b1\u00b4\u0001\u0000\u0000\u0000\u00b2\u00b0\u0001"+
		"\u0000\u0000\u0000\u00b2\u00b3\u0001\u0000\u0000\u0000\u00b3\u00b8\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000\u00b5\u00b7\u0003"+
		"\b\u0004\u0000\u00b6\u00b5\u0001\u0000\u0000\u0000\u00b7\u00ba\u0001\u0000"+
		"\u0000\u0000\u00b8\u00b6\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000"+
		"\u0000\u0000\u00b9\u00bb\u0001\u0000\u0000\u0000\u00ba\u00b8\u0001\u0000"+
		"\u0000\u0000\u00bb\u00bc\u0005\u0003\u0000\u0000\u00bc\u0019\u0001\u0000"+
		"\u0000\u0000\u00bd\u00be\u0005\u0012\u0000\u0000\u00be\u00bf\u0005\u0014"+
		"\u0000\u0000\u00bf\u00c0\u0005\u0013\u0000\u0000\u00c0\u00c4\u0005\u0014"+
		"\u0000\u0000\u00c1\u00c3\u0003\f\u0006\u0000\u00c2\u00c1\u0001\u0000\u0000"+
		"\u0000\u00c3\u00c6\u0001\u0000\u0000\u0000\u00c4\u00c2\u0001\u0000\u0000"+
		"\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000\u00c5\u001b\u0001\u0000\u0000"+
		"\u0000\u00c6\u00c4\u0001\u0000\u0000\u0000\u001b\u001d\",2:BHQUX]bimp"+
		"w~\u0086\u0089\u0096\u009c\u009f\u00a7\u00aa\u00b2\u00b8\u00c4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}