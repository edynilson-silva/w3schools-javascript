// Typeof considera um array como OBJETO, pois uma matriz js é um objeto

Array.isArray(fruits);   // returns true

// Para navegadores antigos

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

// Com instanceof

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true