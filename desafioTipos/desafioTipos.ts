// alias 

type Funcionario = { 
    nomes: string[], 
    baterPonto: (numero: number) => any 
}

let funcionario: Funcionario 

const date: Date = new Date();

enum nomesSupervisores {
    nome = 'Vitor Silva',
    nome1 = 'Maria Vitória'
}

const batePonto: (numero: number) => any = (numero) => {
    if(numero <= 8) return "Ponto normal"
    else return "Fora do horário"
} 

funcionario = {
    nomes: [nomesSupervisores.nome, nomesSupervisores.nome1],
    baterPonto: (numero) => batePonto(numero),
}

console.log(funcionario.baterPonto(date.getHours()))
console.log(funcionario.nomes)




