"use strict";
// alias 
let funcionario;
const date = new Date();
var nomesSupervisores;
(function (nomesSupervisores) {
    nomesSupervisores["nome"] = "Vitor Silva";
    nomesSupervisores["nome1"] = "Maria Vit\u00F3ria";
})(nomesSupervisores || (nomesSupervisores = {}));
const batePonto = (numero) => {
    if (numero <= 8)
        return "Ponto normal";
    else
        return "Fora do horário";
};
funcionario = {
    nomes: [nomesSupervisores.nome, nomesSupervisores.nome1],
    baterPonto: (numero) => batePonto(numero),
};
console.log(funcionario.baterPonto(date.getHours()));
console.log(funcionario.nomes);
//# sourceMappingURL=desafioTipos.js.map