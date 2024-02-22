const elementoClicado = document.getElementById('elemento-clicado')
const botaoTempo = document.getElementById('botao-tempo')
const tempo = document.getElementById('tempo')

botaoTempo.addEventListener('click',function(evento){
    
    console.log(evento.timeStamp)
    tempo.innerText = evento.timeStamp/1000
    
})

document.addEventListener('click',function(e){
    console.log(e.target)
    elementoClicado.innerText = e.target.id
})