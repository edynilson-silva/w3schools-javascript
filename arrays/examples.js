var cars = ["Saab", "Volvo", "BMW"];

// Outra forma de criar...

var cars = new Array("Saab", "Volvo", "BMW");

// Acessar os elementos

var name = cars[0];

// ALterar elemento da matriz

cars[0] = "Opel";

/* Arrays usam indices numericos para acessar os elementos 

Objetos usam nomes para acessar seus "membros".

*/

var person = ["John", "Doe", 46];
person.firstName;


/* Exemplo de Objeto */

var person = {firstName:"John", lastName:"Doe", age:46};

/* Elementos da matriz, podem serem objetos */

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays