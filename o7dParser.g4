parser grammar o7dParser;

options {
	tokenVocab = o7dLexer;
}

schema: comment* header? modelOrEnumOrScalarDeclaration* EOF;

comment: SINGLE_LINE_COMMENT | MULTI_LINE_COMMENT;
header:
	'header' '{' (fieldDeclaration | comment)* (
		modelAttributeDeclaration
		| comment
	)* '}';
modelOrEnumOrScalarDeclaration:
	comment
	| modelDeclaration
	| enumDeclaration
	| scalarDeclaration;
modelDeclaration:
	'model' ID '{' (fieldDeclaration | comment)* (
		modelAttributeDeclaration
		| comment
	)* '}';
modelAttributeDeclaration:
	'@@' ID ('.' ID)* ('(' attributeValues? ')')?;
fieldDeclaration:
	ID ID ('?' | ('[' ']'))? fieldAttributeDeclaration*;
fieldAttributeDeclaration:
	'@' ID ('.' ID)* ('(' attributeValues? ')')?;
attributeValues: (
		attributeValuePositional (',' attributeValuePositional)* (
			',' attributeValueNamed
		)*
	)
	| (attributeValueNamed (',' attributeValueNamed)*);
attributeValuePositional: expression;
attributeValueNamed: ID ':' expression;
expressions: expression (',' expression)*;
expression:
	ID ('.' ID)* ('(' attributeValues? ')')?
	| STRING
	| NUMBER
	| BOOLEAN
	| 'null'
	| ('[' expressions? ']');
enumDeclaration:
	'enum' ID '{' STRING* modelAttributeDeclaration* '}';
scalarDeclaration:
	'scalar' ID '=' ID fieldAttributeDeclaration*;