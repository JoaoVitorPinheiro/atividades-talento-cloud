let keyText = document.querySelector('#key-text');
let codeText = document.querySelector('#code-text');
let quadrado = document.querySelector('#quadrado');
let posicaoX = 0;
let posicaoY = 0;
let distanciaMovimento = 10;

document.addEventListener('keyup', (e) => {
    keyText.innerText = e.key;
    codeText.innerText = e.code;
});

document.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowRight') {
        posicaoX += distanciaMovimento;
    } else if (e.code == 'ArrowLeft') {
        posicaoX -= distanciaMovimento;
    } else if (e.code == 'ArrowDown') {
        posicaoY += distanciaMovimento;
    } else if (e.code == 'ArrowUp') {
        posicaoY -= distanciaMovimento;
    }

    quadrado.style.left = posicaoX + 'px';
    quadrado.style.top = posicaoY + 'px';
});
