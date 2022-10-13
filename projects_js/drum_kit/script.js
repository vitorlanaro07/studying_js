var pratoEsquerda = document.querySelector('.prato-esquerda');
var pratoDireita = document.querySelector('.prato-direita');





document.addEventListener('keypress', (event) => {
    var code = event.key;
    const dataKey = document.querySelectorAll(`[data-key="${code}"]`);
    const key = dataKey[0];
    const audio = dataKey[1];
    console.log(key, audio)

    key.classList.add('keyboard--ativo')
    setTimeout( event => {
        key.classList.remove('keyboard--ativo')
    },100)
    
    if (code == 'e' || code == 'r'){
        pratoEsquerda.classList.add('prato-esquerda--ativo')
        setTimeout( event => {
            pratoEsquerda.classList.remove('prato-esquerda--ativo')
        },100)
    }

    if (code == 'k'){
        pratoDireita.classList.add('prato-direita--ativo')
        setTimeout( event => {
            pratoDireita.classList.remove('prato-direita--ativo')
        },100)
    }

    audio.currentTime = 0;
    audio.play();

  }, false);