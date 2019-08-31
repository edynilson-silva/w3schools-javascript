var p = document.getElementById("demo");

function myReplace() {
    var string = p.innerHTML;
    var texto = string.replace("Microsoft", "W3Schools");
    document.getElementById("demo").innerHTML = texto;
}

// Replace diferencia maiúsculas de minúsculas.
// Para resolver isso, usamos expressões regulares, neste caso /i (sem distinção de caracteres)

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

/* Correspondência global /g  -- substitui logo tudo */ 

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");