
class Fruta {
    constructor(tipo, peso){
        this.tipo = tipo;
        this.peso = peso;
    }

    present(){
        return `uma ${this.tipo} e pesa ${this.peso}Kg`;
    }
}

class FrutasVermelhas extends Fruta{
    constructor(tipo,peso,nome){
        super(tipo, peso);
        this.nome = nome;
    }

    show(){
        return `${this.nome} é ${this.present()}`
    }
}

var morango = new FrutasVermelhas('Fruta Vermelha', 2.00, 'Morango');
var cereja = new FrutasVermelhas('Fruta Vermelha', 2.00, 'Cereja');

console.log(cereja.show());