var setaEsquerda = window.document.getElementById("seta-esquerda");
var setaDireita = window.document.getElementById("seta-direita");

var bruna = window.document.getElementById("bruna");
var samantha = window.document.getElementById("samantha");
var leonardo = window.document.getElementById("leonardo");

function clickSetaEsquerda() {
    setaDireita.style = "display:flex";
    setaEsquerda.style = "display:none";
    bruna.style = "display:flex";
    leonardo.style = "display:none";
}

function clickSetaDireita() {
    setaEsquerda.style = "display:flex";
    setaDireita.style = "display:none";
    bruna.style = "display:none";
    leonardo.style = "display:flex";
}