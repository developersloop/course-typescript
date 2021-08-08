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
const call = (callback: (a: number, b:number) => number ) => {
    return callback(20,2)
}

const somar: (a: number,b: number) => number = (a: number, b: number) => a + b 
const subtrair: (a: number,b: number) => number = (a: number, b: number) => a - b 
const multiplicar: (a: number,b: number) => number = (a: number, b: number) => a * b 
const dividir: (a: number,b: number) => number = (a: number, b: number) => a / b 

console.log(
    call((num: number, num2: number) => somar(num, num2)),
    call((num: number, num2: number) => subtrair(num, num2)),
    call((num: number, num2: number) => multiplicar(num, num2)),
    call((num: number, num2: number) => dividir(num, num2)),
)
