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
		HEADER=1, MODEL=2, ENUM=3, SCALAR=4, NULL=5, AT=6, LBRACE=7, RBRACE=8, 
		LBRACKET=9, RBRACKET=10, LPAREN=11, RPAREN=12, COLON=13, COMMA=14, EQ=15, 
		QUESTION=16, DOT=17, ID=18, STRING=19, ESC_SEQ=20, UNICODE_ESC=21, HEX=22, 
		NUMBER16=23, NUMBER10=24, NUMBER8=25, NUMBER2=26, NUMBER=27, BOOLEAN=28, 
		WS=29, NEWLINES=30, SINGLE_LINE_COMMENT=31, MULTI_LINE_COMMENT=32;
	public static final int
		RULE_schema = 0, RULE_anyComment = 1, RULE_lineEnding = 2, RULE_commentLine = 3, 
		RULE_header = 4, RULE_modelOrEnumOrScalarDeclarationOrComment = 5, RULE_modelDeclaration = 6, 
		RULE_modelAttributeDeclarationLine = 7, RULE_fieldDeclarationLine = 8, 
		RULE_fieldAttributeDeclaration = 9, RULE_attributeValues = 10, RULE_attributeValuePositional = 11, 
		RULE_attributeValueNamed = 12, RULE_expressions = 13, RULE_expression = 14, 
		RULE_idWithDot = 15, RULE_enumMemberLine = 16, RULE_enumDeclaration = 17, 
		RULE_scalarDeclaration = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"schema", "anyComment", "lineEnding", "commentLine", "header", "modelOrEnumOrScalarDeclarationOrComment", 
			"modelDeclaration", "modelAttributeDeclarationLine", "fieldDeclarationLine", 
			"fieldAttributeDeclaration", "attributeValues", "attributeValuePositional", 
			"attributeValueNamed", "expressions", "expression", "idWithDot", "enumMemberLine", 
			"enumDeclaration", "scalarDeclaration"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'header'", "'model'", "'enum'", "'scalar'", "'null'", "'@'", "'{'", 
			"'}'", "'['", "']'", "'('", "')'", "':'", "','", "'='", "'?'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "HEADER", "MODEL", "ENUM", "SCALAR", "NULL", "AT", "LBRACE", "RBRACE", 
			"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COLON", "COMMA", "EQ", "QUESTION", 
			"DOT", "ID", "STRING", "ESC_SEQ", "UNICODE_ESC", "HEX", "NUMBER16", "NUMBER10", 
			"NUMBER8", "NUMBER2", "NUMBER", "BOOLEAN", "WS", "NEWLINES", "SINGLE_LINE_COMMENT", 
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
		public List<CommentLineContext> commentLine() {
			return getRuleContexts(CommentLineContext.class);
		}
		public CommentLineContext commentLine(int i) {
			return getRuleContext(CommentLineContext.class,i);
		}
		public HeaderContext header() {
			return getRuleContext(HeaderContext.class,0);
		}
		public List<ModelOrEnumOrScalarDeclarationOrCommentContext> modelOrEnumOrScalarDeclarationOrComment() {
			return getRuleContexts(ModelOrEnumOrScalarDeclarationOrCommentContext.class);
		}
		public ModelOrEnumOrScalarDeclarationOrCommentContext modelOrEnumOrScalarDeclarationOrComment(int i) {
			return getRuleContext(ModelOrEnumOrScalarDeclarationOrCommentContext.class,i);
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
			setState(41);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(38);
					commentLine();
					}
					} 
				}
				setState(43);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HEADER) {
				{
				setState(44);
				header();
				}
			}

			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6979321884L) != 0)) {
				{
				{
				setState(47);
				modelOrEnumOrScalarDeclarationOrComment();
				}
				}
				setState(52);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(53);
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
	public static class AnyCommentContext extends ParserRuleContext {
		public TerminalNode SINGLE_LINE_COMMENT() { return getToken(o7dParser.SINGLE_LINE_COMMENT, 0); }
		public TerminalNode MULTI_LINE_COMMENT() { return getToken(o7dParser.MULTI_LINE_COMMENT, 0); }
		public AnyCommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anyComment; }
	}

	public final AnyCommentContext anyComment() throws RecognitionException {
		AnyCommentContext _localctx = new AnyCommentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_anyComment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
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
	public static class LineEndingContext extends ParserRuleContext {
		public TerminalNode NEWLINES() { return getToken(o7dParser.NEWLINES, 0); }
		public List<AnyCommentContext> anyComment() {
			return getRuleContexts(AnyCommentContext.class);
		}
		public AnyCommentContext anyComment(int i) {
			return getRuleContext(AnyCommentContext.class,i);
		}
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public LineEndingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lineEnding; }
	}

	public final LineEndingContext lineEnding() throws RecognitionException {
		LineEndingContext _localctx = new LineEndingContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_lineEnding);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6979321856L) != 0)) {
				{
				{
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(57);
					match(WS);
					}
				}

				setState(60);
				anyComment();
				}
				}
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(66);
			match(NEWLINES);
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
	public static class CommentLineContext extends ParserRuleContext {
		public AnyCommentContext anyComment() {
			return getRuleContext(AnyCommentContext.class,0);
		}
		public LineEndingContext lineEnding() {
			return getRuleContext(LineEndingContext.class,0);
		}
		public TerminalNode WS() { return getToken(o7dParser.WS, 0); }
		public CommentLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commentLine; }
	}

	public final CommentLineContext commentLine() throws RecognitionException {
		CommentLineContext _localctx = new CommentLineContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_commentLine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(68);
				match(WS);
				}
			}

			setState(71);
			anyComment();
			setState(72);
			lineEnding();
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
		public List<LineEndingContext> lineEnding() {
			return getRuleContexts(LineEndingContext.class);
		}
		public LineEndingContext lineEnding(int i) {
			return getRuleContext(LineEndingContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(o7dParser.RBRACE, 0); }
		public TerminalNode WS() { return getToken(o7dParser.WS, 0); }
		public List<FieldDeclarationLineContext> fieldDeclarationLine() {
			return getRuleContexts(FieldDeclarationLineContext.class);
		}
		public FieldDeclarationLineContext fieldDeclarationLine(int i) {
			return getRuleContext(FieldDeclarationLineContext.class,i);
		}
		public List<CommentLineContext> commentLine() {
			return getRuleContexts(CommentLineContext.class);
		}
		public CommentLineContext commentLine(int i) {
			return getRuleContext(CommentLineContext.class,i);
		}
		public List<ModelAttributeDeclarationLineContext> modelAttributeDeclarationLine() {
			return getRuleContexts(ModelAttributeDeclarationLineContext.class);
		}
		public ModelAttributeDeclarationLineContext modelAttributeDeclarationLine(int i) {
			return getRuleContext(ModelAttributeDeclarationLineContext.class,i);
		}
		public HeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header; }
	}

	public final HeaderContext header() throws RecognitionException {
		HeaderContext _localctx = new HeaderContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_header);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(HEADER);
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(75);
				match(WS);
				}
			}

			setState(78);
			match(LBRACE);
			setState(79);
			lineEnding();
			setState(84);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(82);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						setState(80);
						fieldDeclarationLine();
						}
						break;
					case 2:
						{
						setState(81);
						commentLine();
						}
						break;
					}
					} 
				}
				setState(86);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6979321920L) != 0)) {
				{
				setState(89);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(87);
					modelAttributeDeclarationLine();
					}
					break;
				case 2:
					{
					setState(88);
					commentLine();
					}
					break;
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
			match(RBRACE);
			setState(95);
			lineEnding();
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
	public static class ModelOrEnumOrScalarDeclarationOrCommentContext extends ParserRuleContext {
		public CommentLineContext commentLine() {
			return getRuleContext(CommentLineContext.class,0);
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
		public ModelOrEnumOrScalarDeclarationOrCommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modelOrEnumOrScalarDeclarationOrComment; }
	}

	public final ModelOrEnumOrScalarDeclarationOrCommentContext modelOrEnumOrScalarDeclarationOrComment() throws RecognitionException {
		ModelOrEnumOrScalarDeclarationOrCommentContext _localctx = new ModelOrEnumOrScalarDeclarationOrCommentContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_modelOrEnumOrScalarDeclarationOrComment);
		try {
			setState(101);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WS:
			case SINGLE_LINE_COMMENT:
			case MULTI_LINE_COMMENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(97);
				commentLine();
				}
				break;
			case MODEL:
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				modelDeclaration();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(99);
				enumDeclaration();
				}
				break;
			case SCALAR:
				enterOuterAlt(_localctx, 4);
				{
				setState(100);
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
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public TerminalNode LBRACE() { return getToken(o7dParser.LBRACE, 0); }
		public List<LineEndingContext> lineEnding() {
			return getRuleContexts(LineEndingContext.class);
		}
		public LineEndingContext lineEnding(int i) {
			return getRuleContext(LineEndingContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(o7dParser.RBRACE, 0); }
		public List<FieldDeclarationLineContext> fieldDeclarationLine() {
			return getRuleContexts(FieldDeclarationLineContext.class);
		}
		public FieldDeclarationLineContext fieldDeclarationLine(int i) {
			return getRuleContext(FieldDeclarationLineContext.class,i);
		}
		public List<CommentLineContext> commentLine() {
			return getRuleContexts(CommentLineContext.class);
		}
		public CommentLineContext commentLine(int i) {
			return getRuleContext(CommentLineContext.class,i);
		}
		public List<ModelAttributeDeclarationLineContext> modelAttributeDeclarationLine() {
			return getRuleContexts(ModelAttributeDeclarationLineContext.class);
		}
		public ModelAttributeDeclarationLineContext modelAttributeDeclarationLine(int i) {
			return getRuleContext(ModelAttributeDeclarationLineContext.class,i);
		}
		public ModelDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modelDeclaration; }
	}

	public final ModelDeclarationContext modelDeclaration() throws RecognitionException {
		ModelDeclarationContext _localctx = new ModelDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_modelDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(MODEL);
			setState(104);
			match(WS);
			setState(105);
			match(ID);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(106);
				match(WS);
				}
			}

			setState(109);
			match(LBRACE);
			setState(110);
			lineEnding();
			setState(115);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(113);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						setState(111);
						fieldDeclarationLine();
						}
						break;
					case 2:
						{
						setState(112);
						commentLine();
						}
						break;
					}
					} 
				}
				setState(117);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6979321920L) != 0)) {
				{
				setState(120);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(118);
					modelAttributeDeclarationLine();
					}
					break;
				case 2:
					{
					setState(119);
					commentLine();
					}
					break;
				}
				}
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(125);
			match(RBRACE);
			setState(126);
			lineEnding();
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
	public static class ModelAttributeDeclarationLineContext extends ParserRuleContext {
		public List<TerminalNode> AT() { return getTokens(o7dParser.AT); }
		public TerminalNode AT(int i) {
			return getToken(o7dParser.AT, i);
		}
		public IdWithDotContext idWithDot() {
			return getRuleContext(IdWithDotContext.class,0);
		}
		public LineEndingContext lineEnding() {
			return getRuleContext(LineEndingContext.class,0);
		}
		public TerminalNode WS() { return getToken(o7dParser.WS, 0); }
		public TerminalNode LPAREN() { return getToken(o7dParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(o7dParser.RPAREN, 0); }
		public AttributeValuesContext attributeValues() {
			return getRuleContext(AttributeValuesContext.class,0);
		}
		public ModelAttributeDeclarationLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modelAttributeDeclarationLine; }
	}

	public final ModelAttributeDeclarationLineContext modelAttributeDeclarationLine() throws RecognitionException {
		ModelAttributeDeclarationLineContext _localctx = new ModelAttributeDeclarationLineContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_modelAttributeDeclarationLine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(128);
				match(WS);
				}
			}

			setState(131);
			match(AT);
			setState(132);
			match(AT);
			setState(133);
			idWithDot();
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(134);
				match(LPAREN);
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 940311072L) != 0)) {
					{
					setState(135);
					attributeValues();
					}
				}

				setState(138);
				match(RPAREN);
				}
			}

			setState(141);
			lineEnding();
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
	public static class FieldDeclarationLineContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public LineEndingContext lineEnding() {
			return getRuleContext(LineEndingContext.class,0);
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
		public FieldDeclarationLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclarationLine; }
	}

	public final FieldDeclarationLineContext fieldDeclarationLine() throws RecognitionException {
		FieldDeclarationLineContext _localctx = new FieldDeclarationLineContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_fieldDeclarationLine);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(143);
				match(WS);
				}
			}

			setState(146);
			match(ID);
			setState(147);
			match(WS);
			setState(148);
			match(ID);
			setState(152);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case QUESTION:
				{
				setState(149);
				match(QUESTION);
				}
				break;
			case LBRACKET:
				{
				{
				setState(150);
				match(LBRACKET);
				setState(151);
				match(RBRACKET);
				}
				}
				break;
			case WS:
			case NEWLINES:
			case SINGLE_LINE_COMMENT:
			case MULTI_LINE_COMMENT:
				break;
			default:
				break;
			}
			setState(158);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(154);
					match(WS);
					setState(155);
					fieldAttributeDeclaration();
					}
					} 
				}
				setState(160);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			}
			setState(161);
			lineEnding();
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
		public IdWithDotContext idWithDot() {
			return getRuleContext(IdWithDotContext.class,0);
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
		enterRule(_localctx, 18, RULE_fieldAttributeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(AT);
			setState(164);
			idWithDot();
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(165);
				match(LPAREN);
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 940311072L) != 0)) {
					{
					setState(166);
					attributeValues();
					}
				}

				setState(169);
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
		enterRule(_localctx, 20, RULE_attributeValues);
		int _la;
		try {
			int _alt;
			setState(195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(172);
				attributeValuePositional();
				setState(177);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(173);
						match(COMMA);
						setState(174);
						attributeValuePositional();
						}
						} 
					}
					setState(179);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				}
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(180);
					match(COMMA);
					setState(181);
					attributeValueNamed();
					}
					}
					setState(186);
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
				setState(187);
				attributeValueNamed();
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(188);
					match(COMMA);
					setState(189);
					attributeValueNamed();
					}
					}
					setState(194);
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
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public AttributeValuePositionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeValuePositional; }
	}

	public final AttributeValuePositionalContext attributeValuePositional() throws RecognitionException {
		AttributeValuePositionalContext _localctx = new AttributeValuePositionalContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_attributeValuePositional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(197);
				match(WS);
				}
			}

			setState(200);
			expression();
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(201);
				match(WS);
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
	public static class AttributeValueNamedContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public TerminalNode COLON() { return getToken(o7dParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public AttributeValueNamedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeValueNamed; }
	}

	public final AttributeValueNamedContext attributeValueNamed() throws RecognitionException {
		AttributeValueNamedContext _localctx = new AttributeValueNamedContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_attributeValueNamed);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(204);
				match(WS);
				}
			}

			setState(207);
			match(ID);
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(208);
				match(WS);
				}
			}

			setState(211);
			match(COLON);
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(212);
				match(WS);
				}
			}

			setState(215);
			expression();
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(216);
				match(WS);
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
	public static class ExpressionsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
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
		enterRule(_localctx, 26, RULE_expressions);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(219);
				match(WS);
				}
			}

			setState(222);
			expression();
			setState(233);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(224);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==WS) {
						{
						setState(223);
						match(WS);
						}
					}

					setState(226);
					match(COMMA);
					setState(228);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==WS) {
						{
						setState(227);
						match(WS);
						}
					}

					setState(230);
					expression();
					}
					} 
				}
				setState(235);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
			}
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(236);
				match(WS);
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
	public static class ExpressionContext extends ParserRuleContext {
		public IdWithDotContext idWithDot() {
			return getRuleContext(IdWithDotContext.class,0);
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
		enterRule(_localctx, 28, RULE_expression);
		int _la;
		try {
			setState(256);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(239);
				idWithDot();
				setState(245);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(240);
					match(LPAREN);
					setState(242);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 940311072L) != 0)) {
						{
						setState(241);
						attributeValues();
						}
					}

					setState(244);
					match(RPAREN);
					}
				}

				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(247);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(248);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(249);
				match(BOOLEAN);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 5);
				{
				setState(250);
				match(NULL);
				}
				break;
			case LBRACKET:
				enterOuterAlt(_localctx, 6);
				{
				{
				setState(251);
				match(LBRACKET);
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 940311072L) != 0)) {
					{
					setState(252);
					expressions();
					}
				}

				setState(255);
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
	public static class IdWithDotContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public List<TerminalNode> DOT() { return getTokens(o7dParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(o7dParser.DOT, i);
		}
		public IdWithDotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idWithDot; }
	}

	public final IdWithDotContext idWithDot() throws RecognitionException {
		IdWithDotContext _localctx = new IdWithDotContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_idWithDot);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(ID);
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(259);
				match(DOT);
				setState(260);
				match(ID);
				}
				}
				setState(265);
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
	public static class EnumMemberLineContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(o7dParser.STRING, 0); }
		public LineEndingContext lineEnding() {
			return getRuleContext(LineEndingContext.class,0);
		}
		public TerminalNode WS() { return getToken(o7dParser.WS, 0); }
		public EnumMemberLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumMemberLine; }
	}

	public final EnumMemberLineContext enumMemberLine() throws RecognitionException {
		EnumMemberLineContext _localctx = new EnumMemberLineContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_enumMemberLine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(266);
				match(WS);
				}
			}

			setState(269);
			match(STRING);
			setState(270);
			lineEnding();
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
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public TerminalNode ID() { return getToken(o7dParser.ID, 0); }
		public TerminalNode LBRACE() { return getToken(o7dParser.LBRACE, 0); }
		public List<LineEndingContext> lineEnding() {
			return getRuleContexts(LineEndingContext.class);
		}
		public LineEndingContext lineEnding(int i) {
			return getRuleContext(LineEndingContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(o7dParser.RBRACE, 0); }
		public List<EnumMemberLineContext> enumMemberLine() {
			return getRuleContexts(EnumMemberLineContext.class);
		}
		public EnumMemberLineContext enumMemberLine(int i) {
			return getRuleContext(EnumMemberLineContext.class,i);
		}
		public List<CommentLineContext> commentLine() {
			return getRuleContexts(CommentLineContext.class);
		}
		public CommentLineContext commentLine(int i) {
			return getRuleContext(CommentLineContext.class,i);
		}
		public List<ModelAttributeDeclarationLineContext> modelAttributeDeclarationLine() {
			return getRuleContexts(ModelAttributeDeclarationLineContext.class);
		}
		public ModelAttributeDeclarationLineContext modelAttributeDeclarationLine(int i) {
			return getRuleContext(ModelAttributeDeclarationLineContext.class,i);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_enumDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(ENUM);
			setState(273);
			match(WS);
			setState(274);
			match(ID);
			setState(276);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(275);
				match(WS);
				}
			}

			setState(278);
			match(LBRACE);
			setState(279);
			lineEnding();
			setState(284);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(282);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
					case 1:
						{
						setState(280);
						enumMemberLine();
						}
						break;
					case 2:
						{
						setState(281);
						commentLine();
						}
						break;
					}
					} 
				}
				setState(286);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6979321920L) != 0)) {
				{
				setState(289);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
				case 1:
					{
					setState(287);
					modelAttributeDeclarationLine();
					}
					break;
				case 2:
					{
					setState(288);
					commentLine();
					}
					break;
				}
				}
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(294);
			match(RBRACE);
			setState(295);
			lineEnding();
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
		public List<TerminalNode> WS() { return getTokens(o7dParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(o7dParser.WS, i);
		}
		public List<TerminalNode> ID() { return getTokens(o7dParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(o7dParser.ID, i);
		}
		public TerminalNode EQ() { return getToken(o7dParser.EQ, 0); }
		public LineEndingContext lineEnding() {
			return getRuleContext(LineEndingContext.class,0);
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
		enterRule(_localctx, 36, RULE_scalarDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(SCALAR);
			setState(298);
			match(WS);
			setState(299);
			match(ID);
			setState(301);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(300);
				match(WS);
				}
			}

			setState(303);
			match(EQ);
			setState(305);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(304);
				match(WS);
				}
			}

			setState(307);
			match(ID);
			setState(312);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(308);
					match(WS);
					setState(309);
					fieldAttributeDeclaration();
					}
					} 
				}
				setState(314);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			}
			setState(315);
			lineEnding();
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
		"\u0004\u0001 \u013e\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0001\u0000\u0005\u0000(\b\u0000\n\u0000\f\u0000+\t\u0000\u0001\u0000"+
		"\u0003\u0000.\b\u0000\u0001\u0000\u0005\u00001\b\u0000\n\u0000\f\u0000"+
		"4\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0003\u0002;\b\u0002\u0001\u0002\u0005\u0002>\b\u0002\n\u0002\f\u0002"+
		"A\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0003\u0003F\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0003\u0004M\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004S\b"+
		"\u0004\n\u0004\f\u0004V\t\u0004\u0001\u0004\u0001\u0004\u0005\u0004Z\b"+
		"\u0004\n\u0004\f\u0004]\t\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005f\b\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006l\b\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006r\b\u0006\n\u0006"+
		"\f\u0006u\t\u0006\u0001\u0006\u0001\u0006\u0005\u0006y\b\u0006\n\u0006"+
		"\f\u0006|\t\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0003"+
		"\u0007\u0082\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0003\u0007\u0089\b\u0007\u0001\u0007\u0003\u0007\u008c\b\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0003\b\u0091\b\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0003\b\u0099\b\b\u0001\b\u0001\b\u0005\b\u009d"+
		"\b\b\n\b\f\b\u00a0\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t"+
		"\u0003\t\u00a8\b\t\u0001\t\u0003\t\u00ab\b\t\u0001\n\u0001\n\u0001\n\u0005"+
		"\n\u00b0\b\n\n\n\f\n\u00b3\t\n\u0001\n\u0001\n\u0005\n\u00b7\b\n\n\n\f"+
		"\n\u00ba\t\n\u0001\n\u0001\n\u0001\n\u0005\n\u00bf\b\n\n\n\f\n\u00c2\t"+
		"\n\u0003\n\u00c4\b\n\u0001\u000b\u0003\u000b\u00c7\b\u000b\u0001\u000b"+
		"\u0001\u000b\u0003\u000b\u00cb\b\u000b\u0001\f\u0003\f\u00ce\b\f\u0001"+
		"\f\u0001\f\u0003\f\u00d2\b\f\u0001\f\u0001\f\u0003\f\u00d6\b\f\u0001\f"+
		"\u0001\f\u0003\f\u00da\b\f\u0001\r\u0003\r\u00dd\b\r\u0001\r\u0001\r\u0003"+
		"\r\u00e1\b\r\u0001\r\u0001\r\u0003\r\u00e5\b\r\u0001\r\u0005\r\u00e8\b"+
		"\r\n\r\f\r\u00eb\t\r\u0001\r\u0003\r\u00ee\b\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0003\u000e\u00f3\b\u000e\u0001\u000e\u0003\u000e\u00f6\b"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0003\u000e\u00fe\b\u000e\u0001\u000e\u0003\u000e\u0101\b\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f\u0106\b\u000f\n\u000f"+
		"\f\u000f\u0109\t\u000f\u0001\u0010\u0003\u0010\u010c\b\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0003\u0011\u0115\b\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0005\u0011\u011b\b\u0011\n\u0011\f\u0011\u011e\t\u0011\u0001\u0011\u0001"+
		"\u0011\u0005\u0011\u0122\b\u0011\n\u0011\f\u0011\u0125\t\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0003\u0012\u012e\b\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0132\b"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u0137\b\u0012\n"+
		"\u0012\f\u0012\u013a\t\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0000"+
		"\u0000\u0013\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$\u0000\u0001\u0001\u0000\u001f \u0167\u0000"+
		")\u0001\u0000\u0000\u0000\u00027\u0001\u0000\u0000\u0000\u0004?\u0001"+
		"\u0000\u0000\u0000\u0006E\u0001\u0000\u0000\u0000\bJ\u0001\u0000\u0000"+
		"\u0000\ne\u0001\u0000\u0000\u0000\fg\u0001\u0000\u0000\u0000\u000e\u0081"+
		"\u0001\u0000\u0000\u0000\u0010\u0090\u0001\u0000\u0000\u0000\u0012\u00a3"+
		"\u0001\u0000\u0000\u0000\u0014\u00c3\u0001\u0000\u0000\u0000\u0016\u00c6"+
		"\u0001\u0000\u0000\u0000\u0018\u00cd\u0001\u0000\u0000\u0000\u001a\u00dc"+
		"\u0001\u0000\u0000\u0000\u001c\u0100\u0001\u0000\u0000\u0000\u001e\u0102"+
		"\u0001\u0000\u0000\u0000 \u010b\u0001\u0000\u0000\u0000\"\u0110\u0001"+
		"\u0000\u0000\u0000$\u0129\u0001\u0000\u0000\u0000&(\u0003\u0006\u0003"+
		"\u0000\'&\u0001\u0000\u0000\u0000(+\u0001\u0000\u0000\u0000)\'\u0001\u0000"+
		"\u0000\u0000)*\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000,.\u0003\b\u0004\u0000-,\u0001\u0000\u0000\u0000-.\u0001"+
		"\u0000\u0000\u0000.2\u0001\u0000\u0000\u0000/1\u0003\n\u0005\u00000/\u0001"+
		"\u0000\u0000\u000014\u0001\u0000\u0000\u000020\u0001\u0000\u0000\u0000"+
		"23\u0001\u0000\u0000\u000035\u0001\u0000\u0000\u000042\u0001\u0000\u0000"+
		"\u000056\u0005\u0000\u0000\u00016\u0001\u0001\u0000\u0000\u000078\u0007"+
		"\u0000\u0000\u00008\u0003\u0001\u0000\u0000\u00009;\u0005\u001d\u0000"+
		"\u0000:9\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000;<\u0001\u0000"+
		"\u0000\u0000<>\u0003\u0002\u0001\u0000=:\u0001\u0000\u0000\u0000>A\u0001"+
		"\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000"+
		"@B\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000BC\u0005\u001e\u0000"+
		"\u0000C\u0005\u0001\u0000\u0000\u0000DF\u0005\u001d\u0000\u0000ED\u0001"+
		"\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000"+
		"GH\u0003\u0002\u0001\u0000HI\u0003\u0004\u0002\u0000I\u0007\u0001\u0000"+
		"\u0000\u0000JL\u0005\u0001\u0000\u0000KM\u0005\u001d\u0000\u0000LK\u0001"+
		"\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000"+
		"NO\u0005\u0007\u0000\u0000OT\u0003\u0004\u0002\u0000PS\u0003\u0010\b\u0000"+
		"QS\u0003\u0006\u0003\u0000RP\u0001\u0000\u0000\u0000RQ\u0001\u0000\u0000"+
		"\u0000SV\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000"+
		"\u0000\u0000U[\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000WZ\u0003"+
		"\u000e\u0007\u0000XZ\u0003\u0006\u0003\u0000YW\u0001\u0000\u0000\u0000"+
		"YX\u0001\u0000\u0000\u0000Z]\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000"+
		"\u0000[\\\u0001\u0000\u0000\u0000\\^\u0001\u0000\u0000\u0000][\u0001\u0000"+
		"\u0000\u0000^_\u0005\b\u0000\u0000_`\u0003\u0004\u0002\u0000`\t\u0001"+
		"\u0000\u0000\u0000af\u0003\u0006\u0003\u0000bf\u0003\f\u0006\u0000cf\u0003"+
		"\"\u0011\u0000df\u0003$\u0012\u0000ea\u0001\u0000\u0000\u0000eb\u0001"+
		"\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ed\u0001\u0000\u0000\u0000"+
		"f\u000b\u0001\u0000\u0000\u0000gh\u0005\u0002\u0000\u0000hi\u0005\u001d"+
		"\u0000\u0000ik\u0005\u0012\u0000\u0000jl\u0005\u001d\u0000\u0000kj\u0001"+
		"\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000"+
		"mn\u0005\u0007\u0000\u0000ns\u0003\u0004\u0002\u0000or\u0003\u0010\b\u0000"+
		"pr\u0003\u0006\u0003\u0000qo\u0001\u0000\u0000\u0000qp\u0001\u0000\u0000"+
		"\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001\u0000"+
		"\u0000\u0000tz\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000vy\u0003"+
		"\u000e\u0007\u0000wy\u0003\u0006\u0003\u0000xv\u0001\u0000\u0000\u0000"+
		"xw\u0001\u0000\u0000\u0000y|\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000"+
		"\u0000z{\u0001\u0000\u0000\u0000{}\u0001\u0000\u0000\u0000|z\u0001\u0000"+
		"\u0000\u0000}~\u0005\b\u0000\u0000~\u007f\u0003\u0004\u0002\u0000\u007f"+
		"\r\u0001\u0000\u0000\u0000\u0080\u0082\u0005\u001d\u0000\u0000\u0081\u0080"+
		"\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0005\u0006\u0000\u0000\u0084\u0085"+
		"\u0005\u0006\u0000\u0000\u0085\u008b\u0003\u001e\u000f\u0000\u0086\u0088"+
		"\u0005\u000b\u0000\u0000\u0087\u0089\u0003\u0014\n\u0000\u0088\u0087\u0001"+
		"\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000\u0000\u0089\u008a\u0001"+
		"\u0000\u0000\u0000\u008a\u008c\u0005\f\u0000\u0000\u008b\u0086\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000"+
		"\u0000\u0000\u008d\u008e\u0003\u0004\u0002\u0000\u008e\u000f\u0001\u0000"+
		"\u0000\u0000\u008f\u0091\u0005\u001d\u0000\u0000\u0090\u008f\u0001\u0000"+
		"\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000"+
		"\u0000\u0000\u0092\u0093\u0005\u0012\u0000\u0000\u0093\u0094\u0005\u001d"+
		"\u0000\u0000\u0094\u0098\u0005\u0012\u0000\u0000\u0095\u0099\u0005\u0010"+
		"\u0000\u0000\u0096\u0097\u0005\t\u0000\u0000\u0097\u0099\u0005\n\u0000"+
		"\u0000\u0098\u0095\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000"+
		"\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u009e\u0001\u0000\u0000"+
		"\u0000\u009a\u009b\u0005\u001d\u0000\u0000\u009b\u009d\u0003\u0012\t\u0000"+
		"\u009c\u009a\u0001\u0000\u0000\u0000\u009d\u00a0\u0001\u0000\u0000\u0000"+
		"\u009e\u009c\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000"+
		"\u009f\u00a1\u0001\u0000\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000"+
		"\u00a1\u00a2\u0003\u0004\u0002\u0000\u00a2\u0011\u0001\u0000\u0000\u0000"+
		"\u00a3\u00a4\u0005\u0006\u0000\u0000\u00a4\u00aa\u0003\u001e\u000f\u0000"+
		"\u00a5\u00a7\u0005\u000b\u0000\u0000\u00a6\u00a8\u0003\u0014\n\u0000\u00a7"+
		"\u00a6\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8"+
		"\u00a9\u0001\u0000\u0000\u0000\u00a9\u00ab\u0005\f\u0000\u0000\u00aa\u00a5"+
		"\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000\u0000\u0000\u00ab\u0013"+
		"\u0001\u0000\u0000\u0000\u00ac\u00b1\u0003\u0016\u000b\u0000\u00ad\u00ae"+
		"\u0005\u000e\u0000\u0000\u00ae\u00b0\u0003\u0016\u000b\u0000\u00af\u00ad"+
		"\u0001\u0000\u0000\u0000\u00b0\u00b3\u0001\u0000\u0000\u0000\u00b1\u00af"+
		"\u0001\u0000\u0000\u0000\u00b1\u00b2\u0001\u0000\u0000\u0000\u00b2\u00b8"+
		"\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b4\u00b5"+
		"\u0005\u000e\u0000\u0000\u00b5\u00b7\u0003\u0018\f\u0000\u00b6\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b7\u00ba\u0001\u0000\u0000\u0000\u00b8\u00b6\u0001"+
		"\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9\u00c4\u0001"+
		"\u0000\u0000\u0000\u00ba\u00b8\u0001\u0000\u0000\u0000\u00bb\u00c0\u0003"+
		"\u0018\f\u0000\u00bc\u00bd\u0005\u000e\u0000\u0000\u00bd\u00bf\u0003\u0018"+
		"\f\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00bf\u00c2\u0001\u0000\u0000"+
		"\u0000\u00c0\u00be\u0001\u0000\u0000\u0000\u00c0\u00c1\u0001\u0000\u0000"+
		"\u0000\u00c1\u00c4\u0001\u0000\u0000\u0000\u00c2\u00c0\u0001\u0000\u0000"+
		"\u0000\u00c3\u00ac\u0001\u0000\u0000\u0000\u00c3\u00bb\u0001\u0000\u0000"+
		"\u0000\u00c4\u0015\u0001\u0000\u0000\u0000\u00c5\u00c7\u0005\u001d\u0000"+
		"\u0000\u00c6\u00c5\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000"+
		"\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000\u00c8\u00ca\u0003\u001c\u000e"+
		"\u0000\u00c9\u00cb\u0005\u001d\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000"+
		"\u0000\u00ca\u00cb\u0001\u0000\u0000\u0000\u00cb\u0017\u0001\u0000\u0000"+
		"\u0000\u00cc\u00ce\u0005\u001d\u0000\u0000\u00cd\u00cc\u0001\u0000\u0000"+
		"\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000"+
		"\u0000\u00cf\u00d1\u0005\u0012\u0000\u0000\u00d0\u00d2\u0005\u001d\u0000"+
		"\u0000\u00d1\u00d0\u0001\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000\u0000"+
		"\u0000\u00d2\u00d3\u0001\u0000\u0000\u0000\u00d3\u00d5\u0005\r\u0000\u0000"+
		"\u00d4\u00d6\u0005\u001d\u0000\u0000\u00d5\u00d4\u0001\u0000\u0000\u0000"+
		"\u00d5\u00d6\u0001\u0000\u0000\u0000\u00d6\u00d7\u0001\u0000\u0000\u0000"+
		"\u00d7\u00d9\u0003\u001c\u000e\u0000\u00d8\u00da\u0005\u001d\u0000\u0000"+
		"\u00d9\u00d8\u0001\u0000\u0000\u0000\u00d9\u00da\u0001\u0000\u0000\u0000"+
		"\u00da\u0019\u0001\u0000\u0000\u0000\u00db\u00dd\u0005\u001d\u0000\u0000"+
		"\u00dc\u00db\u0001\u0000\u0000\u0000\u00dc\u00dd\u0001\u0000\u0000\u0000"+
		"\u00dd\u00de\u0001\u0000\u0000\u0000\u00de\u00e9\u0003\u001c\u000e\u0000"+
		"\u00df\u00e1\u0005\u001d\u0000\u0000\u00e0\u00df\u0001\u0000\u0000\u0000"+
		"\u00e0\u00e1\u0001\u0000\u0000\u0000\u00e1\u00e2\u0001\u0000\u0000\u0000"+
		"\u00e2\u00e4\u0005\u000e\u0000\u0000\u00e3\u00e5\u0005\u001d\u0000\u0000"+
		"\u00e4\u00e3\u0001\u0000\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000\u0000"+
		"\u00e5\u00e6\u0001\u0000\u0000\u0000\u00e6\u00e8\u0003\u001c\u000e\u0000"+
		"\u00e7\u00e0\u0001\u0000\u0000\u0000\u00e8\u00eb\u0001\u0000\u0000\u0000"+
		"\u00e9\u00e7\u0001\u0000\u0000\u0000\u00e9\u00ea\u0001\u0000\u0000\u0000"+
		"\u00ea\u00ed\u0001\u0000\u0000\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000"+
		"\u00ec\u00ee\u0005\u001d\u0000\u0000\u00ed\u00ec\u0001\u0000\u0000\u0000"+
		"\u00ed\u00ee\u0001\u0000\u0000\u0000\u00ee\u001b\u0001\u0000\u0000\u0000"+
		"\u00ef\u00f5\u0003\u001e\u000f\u0000\u00f0\u00f2\u0005\u000b\u0000\u0000"+
		"\u00f1\u00f3\u0003\u0014\n\u0000\u00f2\u00f1\u0001\u0000\u0000\u0000\u00f2"+
		"\u00f3\u0001\u0000\u0000\u0000\u00f3\u00f4\u0001\u0000\u0000\u0000\u00f4"+
		"\u00f6\u0005\f\u0000\u0000\u00f5\u00f0\u0001\u0000\u0000\u0000\u00f5\u00f6"+
		"\u0001\u0000\u0000\u0000\u00f6\u0101\u0001\u0000\u0000\u0000\u00f7\u0101"+
		"\u0005\u0013\u0000\u0000\u00f8\u0101\u0005\u001b\u0000\u0000\u00f9\u0101"+
		"\u0005\u001c\u0000\u0000\u00fa\u0101\u0005\u0005\u0000\u0000\u00fb\u00fd"+
		"\u0005\t\u0000\u0000\u00fc\u00fe\u0003\u001a\r\u0000\u00fd\u00fc\u0001"+
		"\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe\u00ff\u0001"+
		"\u0000\u0000\u0000\u00ff\u0101\u0005\n\u0000\u0000\u0100\u00ef\u0001\u0000"+
		"\u0000\u0000\u0100\u00f7\u0001\u0000\u0000\u0000\u0100\u00f8\u0001\u0000"+
		"\u0000\u0000\u0100\u00f9\u0001\u0000\u0000\u0000\u0100\u00fa\u0001\u0000"+
		"\u0000\u0000\u0100\u00fb\u0001\u0000\u0000\u0000\u0101\u001d\u0001\u0000"+
		"\u0000\u0000\u0102\u0107\u0005\u0012\u0000\u0000\u0103\u0104\u0005\u0011"+
		"\u0000\u0000\u0104\u0106\u0005\u0012\u0000\u0000\u0105\u0103\u0001\u0000"+
		"\u0000\u0000\u0106\u0109\u0001\u0000\u0000\u0000\u0107\u0105\u0001\u0000"+
		"\u0000\u0000\u0107\u0108\u0001\u0000\u0000\u0000\u0108\u001f\u0001\u0000"+
		"\u0000\u0000\u0109\u0107\u0001\u0000\u0000\u0000\u010a\u010c\u0005\u001d"+
		"\u0000\u0000\u010b\u010a\u0001\u0000\u0000\u0000\u010b\u010c\u0001\u0000"+
		"\u0000\u0000\u010c\u010d\u0001\u0000\u0000\u0000\u010d\u010e\u0005\u0013"+
		"\u0000\u0000\u010e\u010f\u0003\u0004\u0002\u0000\u010f!\u0001\u0000\u0000"+
		"\u0000\u0110\u0111\u0005\u0003\u0000\u0000\u0111\u0112\u0005\u001d\u0000"+
		"\u0000\u0112\u0114\u0005\u0012\u0000\u0000\u0113\u0115\u0005\u001d\u0000"+
		"\u0000\u0114\u0113\u0001\u0000\u0000\u0000\u0114\u0115\u0001\u0000\u0000"+
		"\u0000\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u0117\u0005\u0007\u0000"+
		"\u0000\u0117\u011c\u0003\u0004\u0002\u0000\u0118\u011b\u0003 \u0010\u0000"+
		"\u0119\u011b\u0003\u0006\u0003\u0000\u011a\u0118\u0001\u0000\u0000\u0000"+
		"\u011a\u0119\u0001\u0000\u0000\u0000\u011b\u011e\u0001\u0000\u0000\u0000"+
		"\u011c\u011a\u0001\u0000\u0000\u0000\u011c\u011d\u0001\u0000\u0000\u0000"+
		"\u011d\u0123\u0001\u0000\u0000\u0000\u011e\u011c\u0001\u0000\u0000\u0000"+
		"\u011f\u0122\u0003\u000e\u0007\u0000\u0120\u0122\u0003\u0006\u0003\u0000"+
		"\u0121\u011f\u0001\u0000\u0000\u0000\u0121\u0120\u0001\u0000\u0000\u0000"+
		"\u0122\u0125\u0001\u0000\u0000\u0000\u0123\u0121\u0001\u0000\u0000\u0000"+
		"\u0123\u0124\u0001\u0000\u0000\u0000\u0124\u0126\u0001\u0000\u0000\u0000"+
		"\u0125\u0123\u0001\u0000\u0000\u0000\u0126\u0127\u0005\b\u0000\u0000\u0127"+
		"\u0128\u0003\u0004\u0002\u0000\u0128#\u0001\u0000\u0000\u0000\u0129\u012a"+
		"\u0005\u0004\u0000\u0000\u012a\u012b\u0005\u001d\u0000\u0000\u012b\u012d"+
		"\u0005\u0012\u0000\u0000\u012c\u012e\u0005\u001d\u0000\u0000\u012d\u012c"+
		"\u0001\u0000\u0000\u0000\u012d\u012e\u0001\u0000\u0000\u0000\u012e\u012f"+
		"\u0001\u0000\u0000\u0000\u012f\u0131\u0005\u000f\u0000\u0000\u0130\u0132"+
		"\u0005\u001d\u0000\u0000\u0131\u0130\u0001\u0000\u0000\u0000\u0131\u0132"+
		"\u0001\u0000\u0000\u0000\u0132\u0133\u0001\u0000\u0000\u0000\u0133\u0138"+
		"\u0005\u0012\u0000\u0000\u0134\u0135\u0005\u001d\u0000\u0000\u0135\u0137"+
		"\u0003\u0012\t\u0000\u0136\u0134\u0001\u0000\u0000\u0000\u0137\u013a\u0001"+
		"\u0000\u0000\u0000\u0138\u0136\u0001\u0000\u0000\u0000\u0138\u0139\u0001"+
		"\u0000\u0000\u0000\u0139\u013b\u0001\u0000\u0000\u0000\u013a\u0138\u0001"+
		"\u0000\u0000\u0000\u013b\u013c\u0003\u0004\u0002\u0000\u013c%\u0001\u0000"+
		"\u0000\u00006)-2:?ELRTY[ekqsxz\u0081\u0088\u008b\u0090\u0098\u009e\u00a7"+
		"\u00aa\u00b1\u00b8\u00c0\u00c3\u00c6\u00ca\u00cd\u00d1\u00d5\u00d9\u00dc"+
		"\u00e0\u00e4\u00e9\u00ed\u00f2\u00f5\u00fd\u0100\u0107\u010b\u0114\u011a"+
		"\u011c\u0121\u0123\u012d\u0131\u0138";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}