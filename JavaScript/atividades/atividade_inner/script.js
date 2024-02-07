let elementoH1 = document.querySelector("#titulo")
elementoH1.innerText = "Atividade innerTEXT e InnerHTML"

let elementoA = document.querySelector("#link")
elementoA.innerText = "visite o site Proz educação"

let elementoUL = document.querySelector("#lista-nao-ordenada")
elementoUL.innerHTML = `
<ul>
    <li>elemento de lista nao ordenada 01</li>
    <li>elemento de lista nao ordenada 02</li>
    <li>elemento de lista nao ordenada 03</li>
</ul>

`
let elementoOL = document.querySelector("#lista-ordenada")
elementoOL.innerHTML = `
<ol>
    <li>elemento de lista  ordenada </li>
    <li>elemento de lista  ordenada </li>
    <li>elemento de lista  ordenada </li>
</ol>

`

console.log(elementoH1)
console.log(elementoH1.innerText)
console.log(elementoA)
console.log(elementoA.innerText)

console.log(elementoUL)
console.log(elementoUL.innerText)
console.log(elementoUL.innerHTML)

console.log(elementoOL)
console.log(elementoOL.innerText)
console.log(elementoOL.innerHTML)


