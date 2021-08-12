class Matematica {
    static pi: number = 3.1416

    static areaCirc(raio: number) {
        return this.pi * raio * raio
    }

    static teste(...nums: number[]): number {
        return nums.reduce((acumulador, total) => acumulador + total, 0) 
    }
}

console.log(Matematica.areaCirc(8))
console.log(Matematica.teste(1,2,3,4,5,6))