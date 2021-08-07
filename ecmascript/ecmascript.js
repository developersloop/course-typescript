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
// console.log(peo)
//# sourceMappingURL=ecmascript.js.map