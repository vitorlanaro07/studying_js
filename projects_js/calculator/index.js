let botao = document.querySelectorAll('.botao');
let botaoIgualdade = document.querySelector('.botao-igualdade');
let botaoLimpar = document.querySelector('.limpar');
var acumulador = '';
var operacao = '';

botao.forEach(element => {
    element.addEventListener('click', () => {
        acumulador += element.textContent;
        document.querySelector('.tela').innerHTML = acumulador;
    })
});

botaoIgualdade.addEventListener('click', () => {
    operacao = acumulador.split('=')[0];
    document.querySelector('.tela').innerHTML = eval(operacao);
    acumulador = eval(operacao);
})

botaoLimpar.addEventListener('click', () => {
    document.querySelector('.tela').innerHTML = '';
    acumulador = '';
    operacao = '';
})


// var operador = '';
// var operando = '';
// var sinalOp = '';
// var operacao = '';
// var jaOperando = false;
// var resultadoOp = '';
// var continuaComResultado = false;



// function resetaResultado(){
//     operador = '';
//     operando = '';
//     sinalOp = '';
//     operacao = '';
//     continuaComResultado = false;
//     jaOperando = false;
// }

// function continuarConta(valor){
//     console.log(valor);
//     continuaComResultado = True
// }

// function acumulador(valor){
//     if (!continuaComResultado){
//       if(!jaOperando){
//           operando += valor;
//           operacao += valor;
//           document.querySelector('.tela').innerHTML = operando;
//       }else{
//         operador += valor;
//         operacao += valor;
//         document.querySelector('.tela').innerHTML = operacao;
//       }
//     } else {
//         console.log('continuou');
//     }
// }

// function sinal(sinalParametro){
//     jaOperando = true;
//     operacao += sinalParametro;
//     document.querySelector('.tela').innerHTML += sinalParametro
// }

// function imprimeResultado(){
//     document.querySelector('.tela').innerHTML = eval(operacao);
// }