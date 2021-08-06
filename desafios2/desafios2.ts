type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Currentista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let currentista: Currentista = {
    nome: 'Ana Silva',
    contaBancaria,
    contatos: ['34567890', '98765432']
}

currentista.contaBancaria.depositar(3000)
console.log(currentista)