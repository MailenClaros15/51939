// Generated from c:/Users/Mailen/ssl-antlr-calculator-v2/SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,14,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,5,5,51,8,5,10,5,12,5,54,9,5,1,5,1,5,1,
6,1,6,1,6,3,6,61,8,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,
14,16,18,0,1,1,0,6,7,64,0,21,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,40,1,0,
0,0,8,46,1,0,0,0,10,48,1,0,0,0,12,60,1,0,0,0,14,62,1,0,0,0,16,64,1,0,0,0,
18,66,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,
24,1,0,0,0,24,1,1,0,0,0,25,28,3,4,2,0,26,28,3,6,3,0,27,25,1,0,0,0,27,26,
1,0,0,0,28,3,1,0,0,0,29,30,5,4,0,0,30,31,3,8,4,0,31,35,5,8,0,0,32,34,3,2,
1,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,
0,37,35,1,0,0,0,38,39,5,9,0,0,39,5,1,0,0,0,40,41,5,5,0,0,41,42,5,10,0,0,
42,43,3,10,5,0,43,44,5,11,0,0,44,45,5,12,0,0,45,7,1,0,0,0,46,47,7,0,0,0,
47,9,1,0,0,0,48,52,5,13,0,0,49,51,3,12,6,0,50,49,1,0,0,0,51,54,1,0,0,0,52,
50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,5,13,0,0,56,11,
1,0,0,0,57,61,3,14,7,0,58,61,3,16,8,0,59,61,3,18,9,0,60,57,1,0,0,0,60,58,
1,0,0,0,60,59,1,0,0,0,61,13,1,0,0,0,62,63,5,1,0,0,63,15,1,0,0,0,64,65,5,
2,0,0,65,17,1,0,0,0,66,67,5,3,0,0,67,19,1,0,0,0,5,23,27,35,52,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, null, null, null, "'mientras'", "'imprimir'", 
                            "'verdadero'", "'falso'", "'{'", "'}'", "'('", 
                            "')'", "';'", "'\"'" ];
    static symbolicNames = [ null, "LETRA", "DIGITO", "SIMBOLO", "MIENTRAS", 
                             "IMPRIMIR", "VERDADERO", "FALSO", "LBRACE", 
                             "RBRACE", "LPAREN", "RPAREN", "SEMI", "QUOTE", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "bucle", "salida", "condicion", 
                         "cadena", "caracter", "letra", "digito", "simbolo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.instruccion();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4 || _la===5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_instruccion);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.bucle();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(SimpleLangParser.MIENTRAS);
	        this.state = 30;
	        this.condicion();
	        this.state = 31;
	        this.match(SimpleLangParser.LBRACE);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 32;
	            this.instruccion();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this.match(SimpleLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(SimpleLangParser.IMPRIMIR);
	        this.state = 41;
	        this.match(SimpleLangParser.LPAREN);
	        this.state = 42;
	        this.cadena();
	        this.state = 43;
	        this.match(SimpleLangParser.RPAREN);
	        this.state = 44;
	        this.match(SimpleLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(SimpleLangParser.QUOTE);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 49;
	            this.caracter();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(SimpleLangParser.QUOTE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_caracter);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.letra();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.digito();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.simbolo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letra() {
	    let localctx = new LetraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_letra);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(SimpleLangParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	digito() {
	    let localctx = new DigitoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SimpleLangParser.RULE_digito);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(SimpleLangParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolo() {
	    let localctx = new SimboloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SimpleLangParser.RULE_simbolo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(SimpleLangParser.SIMBOLO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.LETRA = 1;
SimpleLangParser.DIGITO = 2;
SimpleLangParser.SIMBOLO = 3;
SimpleLangParser.MIENTRAS = 4;
SimpleLangParser.IMPRIMIR = 5;
SimpleLangParser.VERDADERO = 6;
SimpleLangParser.FALSO = 7;
SimpleLangParser.LBRACE = 8;
SimpleLangParser.RBRACE = 9;
SimpleLangParser.LPAREN = 10;
SimpleLangParser.RPAREN = 11;
SimpleLangParser.SEMI = 12;
SimpleLangParser.QUOTE = 13;
SimpleLangParser.WS = 14;

SimpleLangParser.RULE_programa = 0;
SimpleLangParser.RULE_instruccion = 1;
SimpleLangParser.RULE_bucle = 2;
SimpleLangParser.RULE_salida = 3;
SimpleLangParser.RULE_condicion = 4;
SimpleLangParser.RULE_cadena = 5;
SimpleLangParser.RULE_caracter = 6;
SimpleLangParser.RULE_letra = 7;
SimpleLangParser.RULE_digito = 8;
SimpleLangParser.RULE_simbolo = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_bucle;
    }

	MIENTRAS() {
	    return this.getToken(SimpleLangParser.MIENTRAS, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	LBRACE() {
	    return this.getToken(SimpleLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(SimpleLangParser.RBRACE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(SimpleLangParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleLangParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(SimpleLangParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(SimpleLangParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(SimpleLangParser.FALSO, 0);
	};


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_cadena;
    }

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.QUOTE);
	    } else {
	        return this.getToken(SimpleLangParser.QUOTE, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_caracter;
    }

	letra() {
	    return this.getTypedRuleContext(LetraContext,0);
	};

	digito() {
	    return this.getTypedRuleContext(DigitoContext,0);
	};

	simbolo() {
	    return this.getTypedRuleContext(SimboloContext,0);
	};


}



class LetraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_letra;
    }

	LETRA() {
	    return this.getToken(SimpleLangParser.LETRA, 0);
	};


}



class DigitoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_digito;
    }

	DIGITO() {
	    return this.getToken(SimpleLangParser.DIGITO, 0);
	};


}



class SimboloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_simbolo;
    }

	SIMBOLO() {
	    return this.getToken(SimpleLangParser.SIMBOLO, 0);
	};


}




SimpleLangParser.ProgramaContext = ProgramaContext; 
SimpleLangParser.InstruccionContext = InstruccionContext; 
SimpleLangParser.BucleContext = BucleContext; 
SimpleLangParser.SalidaContext = SalidaContext; 
SimpleLangParser.CondicionContext = CondicionContext; 
SimpleLangParser.CadenaContext = CadenaContext; 
SimpleLangParser.CaracterContext = CaracterContext; 
SimpleLangParser.LetraContext = LetraContext; 
SimpleLangParser.DigitoContext = DigitoContext; 
SimpleLangParser.SimboloContext = SimboloContext; 
