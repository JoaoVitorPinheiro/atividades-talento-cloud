const numero = document.querySelector('h1')
const botton = document.querySelector('button')
let contagem = 0
// function adicionaUm(){
//     contagem =contagem + 1
//     numero.innerText = contagem
// }
// botton.addEventListener('click',adicionaUm)
botton.addEventListener('click',function(){
    contagem =contagem + 1
    numero.innerText = contagem
})