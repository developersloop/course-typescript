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