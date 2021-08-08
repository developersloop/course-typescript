"use strict";
function testandoComThis() {
    console.log(this);
}
// const testComThis = testandoComThis()
var people;
(function (people) {
    people["aluno1"] = "Michael";
    people["aluno2"] = "Rafael";
    people["alunos3"] = "Abner";
    people["aluno4"] = "Victor";
})(people || (people = {}));
const testeSemThis = testandoComThis.bind(people);
testeSemThis();
const testThis = () => this;
console.log(testThis());
const peo = () => alert('ad');
let tp;
tp = ['ss', 1, false];
function aa(...params) {
    return params;
}
const vet = ['tata', 364, 24];
// destructuring array
const [marry, numero, idade] = vet;
console.log(marry);
console.log(numero);
console.log(idade);
console.log(aa(...tp)); // spread
// destructuring obj
const obj = {
    nome: 'vitor',
    idade: 24
};
const { nome: n, idade: idd } = obj; // definindo alias para os objetos de destruvting
console.log(n);
console.log(idd);
//# sourceMappingURL=ecmascript.js.map