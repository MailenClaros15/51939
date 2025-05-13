grammar SimpleLang;

// Reglas del parser
programa: instruccion+;

instruccion: bucle | salida;

bucle: 'mientras' condicion '{' instruccion* '}';

salida: 'imprimir' '(' cadena ')' ';';

condicion: 'verdadero'
         | 'falso';

cadena: '"' caracter* '"';

caracter: letra
        | digito
        | simbolo;

letra: LETRA;

digito: DIGITO;

simbolo: SIMBOLO;

// Reglas léxicas (tokens)
LETRA: [a-zA-Z];
DIGITO: [0-9];
SIMBOLO: ' ' | '!' | '?' | '.' | ',' | '"';

// Palabras clave y símbolos
MIENTRAS: 'mientras';
IMPRIMIR: 'imprimir';
VERDADERO: 'verdadero';
FALSO: 'falso';

LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
SEMI: ';';
QUOTE: '"';

// Ignorar espacios, tabs y saltos de línea
WS: [ \t\r\n]+ -> skip;
//
//
//
//
//