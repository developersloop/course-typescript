"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let currentista = {
    nome: 'Ana Silva',
    contaBancaria,
    contatos: ['34567890', '98765432']
};
currentista.contaBancaria.depositar(3000);
console.log(currentista);
//# sourceMappingURL=desafios2.js.map