// Length

var texto = "Sport Club do Recife";
var qtd = texto.length;

// Localizar string dentro de outra

var pos = texto.indexOf("Club");

// lastIndexOf() - Retorna a última ocorrência

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// indexOf() e lastIndexOf() retornam -1 senão encontrar nada...

// Podemos usar um segundo parâmetro ("string", posicao-inicial)

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
var pos = str.lastIndexOf("locate", 15);

// Buscar string com search()

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

/*
    DIFERENÇA de indexOf() e search()

    O search()método não pode aceitar um segundo argumento de posição inicial.
    O indexOf()método não pode aceitar valores de pesquisa avançados (expressões regulares).

*/
