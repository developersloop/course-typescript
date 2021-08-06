"use strict";
// alias 
var funcionario;
var date = new Date();
var nomesSupervisores;
(function (nomesSupervisores) {
    nomesSupervisores["nome"] = "Vitor Silva";
    nomesSupervisores["nome1"] = "Maria Vit\u00F3ria";
})(nomesSupervisores || (nomesSupervisores = {}));
var batePonto = function (numero) {
    if (numero <= 8)
        return "Ponto normal";
    else
        return "Fora do horário";
};
funcionario = {
    nomes: [nomesSupervisores.nome, nomesSupervisores.nome1],
    baterPonto: function (numero) { return batePonto(12); },
};
console.log(funcionario.baterPonto(date.getHours()));
console.log(funcionario.nomes);
