"use strict";
class Matematica {
    static areaCirc(raio) {
        return this.pi * raio * raio;
    }
    static teste(...nums) {
        return nums.reduce((acumulador, total) => acumulador + total, 0);
    }
}
Matematica.pi = 3.1416;
console.log(Matematica.areaCirc(8));
console.log(Matematica.teste(1, 2, 3, 4, 5, 6));
//# sourceMappingURL=static.js.map