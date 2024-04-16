grammar o7d;

prog: model* EOF;

model: 'model' ID '{' (field ';')* '}';
field: type ID ('[]')? (('=' expression)? ';');
type:
	'ID'
	| 'Int'
	| 'Float'
	| 'String'
	| 'Boolean'
	| 'Datetime';
expression: STRING | NUMBER | BOOLEAN | 'null';

ID: [a-zA-Z_] [a-zA-Z0-9_]*;
STRING: '\'' [^']* '\'';
NUMBER: [0-9]+ ('.' [0-9]+)?;
BOOLEAN: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;
