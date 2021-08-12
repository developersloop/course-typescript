"use strict";
class Vitor extends Pessoa {
    constructor(cpf) {
        super(cpf); // obrigatoriamente chamando o constructor da classe pai
        this.cpf = cpf;
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
    setCpf() {
        if (!this.validCpf())
            return 'Cpf inválido';
        else
            return this.validCpf();
    }
}
const myName = new Vitor(2);
myName.idade = 24;
console.log(myName.idade);
//# sourceMappingURL=heranca.js.map