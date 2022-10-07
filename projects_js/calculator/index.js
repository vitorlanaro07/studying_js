var operador = '';
var operando = '';
var sinalOp = '';
var jaOperando = false;
var resultadoOp = '';

function limpaTela(){
    document.querySelector('.tela').innerHTML = '';
    resetaResultado();
}

function resetaResultado(){
    operador = "";
    operando = '';
    sinalOp = '';
    jaOperando = false;
}

function continuarConta(valor){
    console.log(valor);
}

function acumulador(valor){
    if(!jaOperando){
        operando += valor;
        console.log(operando);
        document.querySelector('.tela').innerHTML = operando;
    }else{
        operador += valor;
        console.log(operador);
        document.querySelector('.tela').innerHTML = operador;
    }

}

function sinal(sinalParametro){
    sinalOp = sinalParametro;
    jaOperando = true;
    console.log(sinalOp);
}

function imprimeResultado(){
    resultadoOp = operando + sinalOp + operador
    document.querySelector('.tela').innerHTML = eval(resultadoOp);
    continuarConta(eval(resultadoOp));
}