class Vitor extends Pessoa {
    private _idade: number = 0

    constructor(public cpf: string | number) {
        super(cpf) // obrigatoriamente chamando o constructor da classe pai
    }
    
    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        this._idade = valor
    }
    setCpf(): boolean | string | number {
        if(!this.validCpf()) return 'Cpf inválido'
        else return this.validCpf()
    }
}

const myName = new Vitor(2)
myName.idade = 24
console.log(myName.idade)