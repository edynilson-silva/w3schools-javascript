var input = document.getElementById("numero");
var paragrafo = document.getElementById("resultado");
function aumentar(){
   input.value++;
        
}

function exponentes(){
    let calculo = input.value ** 2;
    paragrafo.innerHTML = calculo;
}

function diminuir(){
    input.value--;
}