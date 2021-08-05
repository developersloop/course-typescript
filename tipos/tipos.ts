let nome: string = 'João'
// nome = 1
let tody: number
tody = 1
// tody = 'chocolate'

let lastname: boolean = true
let pi: number = 3.14
console.log(tody, nome, lastname, pi)

let nomes: object[] = [
    {
        id: 1,
        nome: 2,
        lastname: 3
    }
]
// nomes = [100]
console.log(nomes)

// tuplas
// definir varios tipos de valors dentro de um array declarado
let tuplas: [object, string] = [{ id:1, nome: 'vitor', lastname: 'vicente'}, 'vitor']
let tup: object[] = []
tup.push(
    {
        id: 1,
        nome: 'vinicius',
        lastname: 'vicente'
    }
)
console.log(tup)
console.log(tuplas)

// enums

enum PalleteColors { 
    red = 'red',
    orange = 'orange',
    purple = 'purple',
    black = 'black',
    green = 'green',
    blue = 'blue',
    pink = 'pink',
}


let minhaCor: PalleteColors = PalleteColors.red
console.log(minhaCor)

function meuNome(): string {
    return nome
}

function digaOi(): void {
    console.log('oi')
    // return 'ad'
}

// function multiplica(numA: number, numB: number): number {
//     return numA * numB
// }

// console.log(multiplica(4,2))
// console.log(digaOi())
// console.log(meuNome())

// variavel tipo função

let calculo: (numA: number, numB: number) => number = (x: number, y: number) => x * y 

// console.log(calculo(1,2))


// variavel do tipo objeto

// let usuario: object = {
//     name: 'vitor',
//     user: 'loop',
//     age: 30
// }

let usuario: { 
        name: string, 
        user: string, 
        age: number
    } = 
    {
        name: 'vitor',
        user: 'loop',
        age: 30
    }

usuario = {
    name: 'asd',
    user: 'ad',
    age: 10,
}

console.log(usuario)