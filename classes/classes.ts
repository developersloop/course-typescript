class Data {
    // atributes do tipo publico
    // dia: number
    // mes: number
    // data: number

    constructor (public dia: number = 28, public mes: number = 7, public data: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.data = data
    }
}


const vacation = new Data
vacation.dia = 3
vacation.mes = 8
vacation.data = 1970

console.log(vacation)