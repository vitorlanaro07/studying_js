
class Carro{

    constructor(nome, modelo, ano, cor){
        this.nome = nome;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    informacoes(){
        return (`Nome:${this.nome} \nModelo:${this.modelo} \nAno de Lançamento:${this.ano} \nCor:${this.cor}`);
    }
}

var carrin = new Carro("Fusca", "Volkswagem", 1978, "Azul");

console.log(carrin.informacoes())

var var1 = 'ola', var2 = 'mundo';

console.log(`A mensagem é ${var1} ${var2}`);

let array = [`ola`,`mundo`,`que`,`isso`];
console.log(typeof array, array);

array.push('ola')
console.log(typeof array, array);