parser grammar o7dParser;

options {
	tokenVocab = o7dLexer;
}

schema:
	commentLine* header? modelOrEnumOrScalarDeclarationComment* EOF;

anyComment: SINGLE_LINE_COMMENT | MULTI_LINE_COMMENT;
lineEnding: (WS? anyComment)* NEWLINES;
commentLine: WS? anyComment lineEnding;
header:
	'header' WS? '{' lineEnding (
		fieldDeclarationLine
		| commentLine
	)* (modelAttributeDeclarationLine | commentLine)* '}' lineEnding;
modelOrEnumOrScalarDeclarationComment:
	commentLine
	| modelDeclaration
	| enumDeclaration
	| scalarDeclaration;
modelDeclaration:
	'model' WS ID WS? '{' lineEnding (
		fieldDeclarationLine
		| commentLine
	)* (modelAttributeDeclarationLine | commentLine)* '}' lineEnding;
modelAttributeDeclarationLine:
	WS? '@' '@' idWithDot ('(' attributeValues? ')')? lineEnding;
fieldDeclarationLine:
	WS? ID WS ID ('?' | ('[' ']'))? (
		WS fieldAttributeDeclaration
	)* lineEnding;
fieldAttributeDeclaration:
	'@' idWithDot ('(' attributeValues? ')')?;
attributeValues:
	(
		attributeValuePositional (',' attributeValuePositional)* (
			',' attributeValueNamed
		)*
	)
	| (attributeValueNamed (',' attributeValueNamed)*);
attributeValuePositional: WS? expression WS?;
attributeValueNamed: WS? ID WS? ':' WS? expression WS?;
expressions: WS? expression (WS? ',' WS? expression)* WS?;
expression:
	idWithDot ('(' attributeValues? ')')?
	| STRING
	| NUMBER
	| BOOLEAN
	| 'null'
	| ('[' expressions? ']');
idWithDot: ID ('.' ID)*;
enumDeclaration:
	'enum' WS ID WS? '{' lineEnding (
		(WS? STRING lineEnding)
		| commentLine
	)* (modelAttributeDeclarationLine | commentLine)* '}' lineEnding;
scalarDeclaration:
	'scalar' WS ID WS? '=' WS? ID (WS fieldAttributeDeclaration)* lineEnding;