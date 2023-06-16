
// Função que permite o pulo

// Acesso ao CSS.
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// adiciono a class .jump dentro do CSS .mario para possibilitar o pulo.
const jump = () => {
    mario.classList.add('jump');

    // Reseto a animação do pulo removendo o CSS e dando o tempo de 500ms setados no arquivo CSS.
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700);
}

// Mapeo as teclas apertadas e envio para variavel jump
document.addEventListener('keydown', jump);

// Mapeo as teclas apertadas e envio para variavel jump
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imgs/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)

