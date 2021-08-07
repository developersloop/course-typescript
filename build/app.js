"use strict";
const canal = 'Gaveta';
const inscritos = 1001;
// debugger
console.log(canal, inscritos);
function saudar(IsManha) {
    let saudar;
    if (IsManha) {
        saudar = 'Bom dia';
    }
    else {
        saudar = 'boa noite';
    }
    return saudar;
}
// alert('ad')
let aa;
aa = 1;
aa = true;
alert(aa);
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
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let currentista = {
    nome: 'Ana Silva',
    contaBancaria,
    contatos: ['34567890', '98765432']
};
currentista.contaBancaria.depositar(3000);
console.log(currentista);
const a = 'Vitror Silva';
console.log(a);
let nome = 'João';
// nome = 1
let tody;
tody = 1;
// tody = 'chocolate'
let lastname = true;
let pi = 3.14;
console.log(tody, nome, lastname, pi);
let nomes = [
    {
        id: 1,
        nome: 2,
        lastname: 3
    }
];
// nomes = [100]
console.log(nomes);
// tuplas
// definir varios tipos de valors dentro de um array declarado
let tuplas = [{ id: 1, nome: 'vitor', lastname: 'vicente' }, 'vitor'];
let tup = [];
tup.push({
    id: 1,
    nome: 'vinicius',
    lastname: 'vicente'
});
console.log(tup);
console.log(tuplas);
// enums
var PalleteColors;
// enums
(function (PalleteColors) {
    PalleteColors["red"] = "red";
    PalleteColors["orange"] = "orange";
    PalleteColors["purple"] = "purple";
    PalleteColors["black"] = "black";
    PalleteColors["green"] = "green";
    PalleteColors["blue"] = "blue";
    PalleteColors["pink"] = "pink";
})(PalleteColors || (PalleteColors = {}));
let minhaCor = PalleteColors.red;
console.log(minhaCor);
function meuNome() {
    return nome;
}
function digaOi() {
    console.log('oi');
    // return 'ad'
}
// function multiplica(numA: number, numB: number): number {
//     return numA * numB
// }
// console.log(multiplica(4,2))
// console.log(digaOi())
// console.log(meuNome())
// variavel tipo função
let calculo = (x, y) => x * y;
// console.log(calculo(1,2))
// variavel do tipo objeto
// let usuario: object = {
//     name: 'vitor',
//     user: 'loop',
//     age: 30
// }
let usuario = {
    name: 'vitor',
    user: 'loop',
    age: 30
};
usuario = {
    name: 'asd',
    user: 'ad',
    age: 10,
};
console.log(usuario);
// union types
let nota = true;
console.log(nota);
nota = false;
console.log(nota);
let asac = (numero) => numero;
console.log(asac(20));
const conta = {
    nome: 'vitor',
    lastname: 'silva',
    idade: null
};
console.log(conta);
//# sourceMappingURL=app.js.map