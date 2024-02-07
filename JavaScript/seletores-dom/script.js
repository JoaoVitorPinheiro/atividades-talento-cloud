console.log('ola mundo !')
// const titulo = document.getElementById('titulo')
// const textos = document.getElementsByClassName('texto-simples')
// const segundoTitulo = document.querySelector('div h2')
// const textosPorClasse = document.querySelectorAll('.texto-simples')


// console.log(textosPorClasse)
// console.log(segundoTitulo)
// console.log(textos)
// console.log(titulo)

let elementoH1 = document.querySelector("h1")
elementoH1.innerText = "Novo titulo com js"

let elementoMain = document.querySelector("main")
elementoMain.innerHTML = `
<h2> novo subtitulo</h2>
<ul>
    <li>elemento de lista sj 01</li>
    <li>elemento de lista sj 02</li>
    <li>elemento de lista sj 03</li>


`

console.log(elementoH1)
console.log(elementoH1.innerText)

console.log(elementoMain)
console.log(elementoMain.innerText)
console.log(elementoMain.innerHTML)