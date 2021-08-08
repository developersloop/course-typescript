"use strict";
// var dobro = function(valor: number): number {
//     return valor * 2
// }
// console.log(dobro(10))
// var dizerOla = function (nome: any = undefined): void {
// if (nome === undefined) { nome = "Pessoa" }
//     console.log(`Ola ${nome}`)
// }
// console.log(dizerOla())
// console.log(dizerOla("Anna"))
// var nums = [-3, 33, 38, 5]
// console.log(...nums)
// var nums = [-3, 33, 38, 5]
// var array = [...nums]
// console.log(array)
// var notas = [8.5, 6.3, 9.4]
// const [nota1, nota2, nota3] = notas
// console.log(nota1, nota2, nota3)
// var cientista = {primeiroNome: "Will", experiencia: 12}
// const { primeiroNome, experiencia } = cientista
// console.log(primeiroNome, experiencia)
// exemplos de callback
const call = (callback) => {
    return callback(20, 2);
};
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
console.log(call((num, num2) => somar(num, num2)), call((num, num2) => subtrair(num, num2)), call((num, num2) => multiplicar(num, num2)), call((num, num2) => dividir(num, num2)));
//# sourceMappingURL=exercicio.js.map