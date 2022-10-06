// let x = 3;
// let y = 3;

// console.log("Usando o operador de potencia: ",y**x)

// for (let index = 0; index < 2; index++) {
//     x = x*y;
// }
// console.log("Fazendo o operador de potencia na mão:",x);

// x++;

// console.log("Valor incrementado: ",x);

var carros = [
                {modelo:'camaro',marca:'chevrolet',placa:'HPM-1771'},
                {modelo:'gol',marca:'volkswagen',placa:'MUY-7033'},
                {modelo:'camaro',marca:'chevrolet',placa:'HPM-1771'},
                {modelo:'panda',marca:'fiat',placa:'KDA-5643'},
                {modelo:'fiat 500',marca:'fiat',placa:'MWX-8361'},
                {modelo:'amarok',marca:'volkswagen',placa:'KAG-1594'},
                {modelo:'astra',marca:'chevrolet',placa:'HLF-1754'},
                {modelo:'celta',marca:'chevrolet',placa:'NFA-3266'},
                {modelo:'toyota',marca:'ford',placa:'MVB-5084'},
                {modelo:'escort',marca:'ford',placa:'LWI-1250'},
                {modelo:'celta',marca:'chevrolet',placa:'NFA-3266'}
            ]
var carroNovo = carros[6]

// console.log(carroNovo)

for (let index = 0; index < carros.length; index++) {
    // for (let index2 = index + 1; index2 < carros.length ; index2++) {
        // if (carros[index] === carros[index2]){
        //     console.log(carros[index], carros[index2])
        // } 
    // }
        // if (carros[index] === carroNovo){
        //     console.log(carros[index], carroNovo)
        //     console.log(carroNovo, carros[index])
        // } 
}
// console.log(carroNovo, carros)
console.log(carroNovo in carros)


let x = 16 + 4 + "Volvo";

console.log(typeof x, x)
// console.log(carro2.marca === carro3.marca)