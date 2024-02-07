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
    <li><a href="https://img.freepik.com/fotos-premium/retrato-de-mulher-asiatica-compoe-fantasmacena-de-terror-assustadora-para-fundoconceito-de-festival-de-halloween-poster-de-filmes-fantasma-espirito-raivoso-no-apartamento_44277-22640.jpg">FILMES </a></li>
    <li><a href="https://st4.depositphotos.com/1022214/21838/i/450/depositphotos_218385028-stock-photo-closeup-frightening-evil-nun-wearing.jpg">nao clique</a></li>
    <li><a href="https://i.pinimg.com/236x/a4/b0/d2/a4b0d27861271076897ca1a69f2dbafc.jpg">diversao 1</a></li>
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


