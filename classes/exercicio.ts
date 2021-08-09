// class Produto {
//     constructor(public nome: string, public preco: number, public desconto: number = 0.5) {
//         this.nome = nome
//         this.preco = preco
//         this.desconto = desconto

//     }

//     precoComDesconto() : number {
//         return this.preco * (this.desconto - 1)
//     }
//     resumo(): string {
//         return `Seu produto - ${this.nome} custa ${this.preco}, com desconto de ${this.precoComDesconto()}`
//     }
// }


// const produto = new Produto('Caneta pincel azul', 4.50, 1.50)
// console.log(produto.resumo())


// const produto1 = new Produto('Caixa de Lapis', 12.00)
// console.log(produto1.resumo())


class Pessoa {
    constructor(public cpf: string | number, private isValidCpf: boolean = false) {
        this.cpf = cpf
    }

    private validCpf(): boolean | string | number {
        if(this.cpf) {
            if(typeof this.cpf === 'number') {
                this.isValidCpf = false
                return this.isValidCpf
            }
            else return this.cpf
        }

        return this.cpf
        
    }

    setCpf(): boolean | string | number {
        if(!this.validCpf()) return 'Cpf inválido'
        else return this.validCpf()
    }
}

const pessoa = new Pessoa(2)
console.log(pessoa.setCpf())

const pessoa1 = new Pessoa('102.446.52-41')
console.log(pessoa1.setCpf())