class Pessoa{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    getName(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    getCpf(){
        return this.cpf;
    }
}

class Cliente extends Pessoa{
    #numCadastro;
    #saldo;
    constructor(nome, idade, cpf, numCadastro, saldo){
        super(nome, idade, cpf);
        this.#numCadastro = numCadastro;
        this.#saldo = saldo;
    }

    getCadastro(){
        return this.#numCadastro;
    }

    static getSaldo(){
        return this.#saldo;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    static transferir(contaDestino, valor){
        this.#saldo -= valor;
        contaDestino.depositar(valor);
    }
}

const vitor = new Cliente('Vitor', 22, '19222', '001', 0.0);
const lucas = new Cliente('Lucas', 30, '18720', '002', 0.0);

console.log(vitor.getSaldo());
vitor.depositar(200.00);
console.log(vitor.getSaldo());
vitor.transferir(lucas, 50);
console.log(vitor.getSaldo(), lucas.getSaldo());
console.log(vitor.getSaldo());