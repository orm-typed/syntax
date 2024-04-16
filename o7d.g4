grammar o7d;

schema: header? modelDeclaration* EOF;

header:
	'header' '{' (fieldDeclaration)* (modelAttributeDeclaration)* '}';
modelDeclaration:
	'model' ID '{' (fieldDeclaration)* (
		modelAttributeDeclaration
	)* '}';
modelAttributeDeclaration:
	'@@' ID ('.' ID)? ('(' attributeValues? ')')?;
fieldDeclaration:
	ID ID ('?' | '[]')? fieldAttributeDeclaration*;
fieldAttributeDeclaration:
	'@' ID ('.' ID)? ('(' attributeValues? ')')?;
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
	ID ('(' expressions? ')')?
	| STRING
	| NUMBER
	| BOOLEAN
	| 'null'
	| ('[' expressions? ']');

ID: [a-zA-Z_] [a-zA-Z0-9_]*;
STRING: '"' (ESC_SEQ | ~["\\])* '"';
ESC_SEQ: '\\' (["\\/bfnrt] | UNICODE_ESC);
UNICODE_ESC: 'u' HEX HEX HEX HEX;
HEX: [0-9a-fA-F];
NUMBER: [0-9]+ ('.' [0-9]+)?;
BOOLEAN: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;
SINGLE_LINE_COMMENT: '//' ~[\r\n]* -> skip;
MULTI_LINE_COMMENT: '/*' .*? '*/' -> skip;