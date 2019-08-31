// slice - para extrair parte de uma sequência, e retorna essa parte extraída

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

/* Se os parametros for negativo, inicia-se do final da string */

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);

/* Se omitir o 2º parâmetro, o método cortará o restante da string */

var res = str.slice(7);
var res = str.slice(-12);

// substring - similar ao slice, só não aceita valores negativos

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

/* substr - similar ao slice, a diferença que parametro dois, 
se refere ao comprimento da peça extraida */

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);

// Se omitido o 2 parâmetro, resulta no corte da string.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);

// Se valor for negativo, será contado do final da string

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);