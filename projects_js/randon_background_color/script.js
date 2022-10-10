
var nomeColor = document.querySelector('.color');
var botao_nomes = document.querySelector('.way-name');
var botao_hex = document.querySelector('.way-hex');
var botao_rgb = document.querySelector('.way-rgb');
var botao_random = document.querySelector('.botao-randomizador');
var valoresHexa = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var namedColors = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua']
var randonHexa;
// 0123456789ABCDEF

botao_nomes.addEventListener('click', () => {
    botao_hex.classList.remove('way-ativo');
    botao_rgb.classList.remove('way-ativo');
    botao_nomes.classList.add('way-ativo');
})

botao_hex.addEventListener('click', () => {
    botao_nomes.classList.remove('way-ativo');
    botao_rgb.classList.remove('way-ativo');
    botao_hex.classList.add('way-ativo');
})

botao_rgb.addEventListener('click', () => {
    botao_nomes.classList.remove('way-ativo');
    botao_hex.classList.remove('way-ativo');
    botao_rgb.classList.add('way-ativo');
})

botao_random.addEventListener('click', () => {
    if (botao_rgb.classList.contains('way-ativo')) {
        let arrayRgb = [];

        for (let index = 0; index < 3; index++) {
            arrayRgb.push(Math.floor(Math.random() * 256));
        }
        document.body.style.backgroundColor = `rgb(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
        nomeColor.innerHTML = `RGB(${arrayRgb[0]}, ${arrayRgb[1]}, ${arrayRgb[2]})`
    } else if (botao_hex.classList.contains('way-ativo')){
        randonHexa = '#';
        for (let index = 0; index < 6; index++) {
            const random = Math.floor(Math.random() * valoresHexa.length);
            randonHexa += valoresHexa[random];
        }
        document.body.style.backgroundColor = randonHexa;
        nomeColor.innerHTML = randonHexa;
    } else{
        const random = Math.floor(Math.random() * namedColors.length);
        document.body.style.backgroundColor = namedColors[random];
        nomeColor.innerHTML = namedColors[random];
    }
})
