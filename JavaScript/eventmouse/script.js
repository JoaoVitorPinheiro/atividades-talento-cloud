const button = document.querySelector('button')
const span = document.querySelector('span')
const section = document.querySelector('section')

function mostrarSpan(){
    span.style.opacity = '100'
}
button.addEventListener('mouseover',mostrarSpan)

function ocultarSpan(){
    span.style.opacity = '0'
}
button.addEventListener('mouseout',ocultarSpan)

function fazerUmClik(){
    section.innerText = 'Fez um click simples!'
}
button.addEventListener('click',fazerUmClik)

function fazerDoisClicks(){
    section.innerText = 'Fez um duplo click!'
}
button.addEventListener('dblclick',fazerDoisClicks)