"use strict";
class Teste {
    constructor() {
        this._IMC = 0;
    }
    // na classe herdada
    get IMC() {
        return this._IMC;
    }
}
class Teste1 extends Teste {
    constructor() {
        super(...arguments);
        this._IMC = 0;
    }
    calculaPeso(altura, peso) {
        this._IMC = altura * peso;
    }
}
const objeto = new Teste1;
objeto.calculaPeso(94, 1.60);
console.log(objeto.IMC);
//# sourceMappingURL=abstrata.js.map