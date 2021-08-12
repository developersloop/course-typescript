abstract class Teste{
    protected _IMC = 0

    abstract calculaPeso(altura: number, peso: number): void // abstract na frente da função ou atributo, é obrigatório(reescrever)
    // na classe herdada

    get IMC(): number {
        return this._IMC
    }
}

class Teste1 extends Teste {
    _IMC = 0
    calculaPeso(altura: number, peso: number): void{
        this._IMC = altura * peso
    }
}

const objeto  = new Teste1
objeto.calculaPeso(94, 1.60)
console.log(objeto.IMC)