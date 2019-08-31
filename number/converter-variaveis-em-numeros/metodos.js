// Number()

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN 
Number("John");        // returns NaN

/**
  Se o número não puder ser convertido, NaN(Não é um número) será retornado.
  Number() também pode converter uma data em um número:
  
    Number(new Date("2017-09-30"));    // returns 1506729600000
**/

// parsetInt() retorna um número inteiro. Espaços são permitidos. 
//Somente o primeiro número é retornado

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


// parseFloat()
// retorna um número. Espaços são permitidos. 
// Somente o primeiro número é retornado

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

// Propriedades de número

var x = Number.MAX_VALUE;
var y = Number.MIN_VALUE;
var i = Number.POSITIVE_INFINITY;
var a = Number.NEGATIVE_INFINITY;
var b = Number.NaN;