function testandoComThis() {
    console.log(this)
}

// const testComThis = testandoComThis()
enum people {
    aluno1 = 'Michael',
    aluno2 = 'Rafael',
    alunos3 = 'Abner',
    aluno4 = 'Victor',
}


const testeSemThis = testandoComThis.bind(people)

testeSemThis()


const testThis = () => this

console.log(testThis())


const peo = () => alert('ad')

// console.log(peo)
type spreda = [string,number, boolean] 
let tp: spreda
tp = ['ss', 1, false]

function aa(...params:[string,number,boolean]): spreda {
    return params
}

const vet = ['tata',364,24]
// destructuring array
const [marry, numero, idade] = vet

console.log(marry)
console.log(numero)
console.log(idade)

 console.log(aa(...tp)); // spread

 // destructuring obj

 const obj = {
     nome: 'vitor',
     idade: 24
 }

 const { nome: n, idade: idd } = obj // definindo alias para os objetos de destruvting

 console.log(n)
 console.log(idd)
