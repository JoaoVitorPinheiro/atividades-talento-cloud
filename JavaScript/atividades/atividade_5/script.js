let elementoH1 = document.querySelector("#titulo")
elementoH1.innerText = "produto:"

let elementoH2 = document.querySelector("#prod--titulo")
elementoH2.innerText = "POCO X6 PRO"

let elementoA = document.querySelector("#link")
elementoA.innerHTML =`
<a href="https://images.tcdn.com.br/img/img_prod/1182493/smartphone_xiaomi_poco_x6_pro_5g_12gb_512gb_nfc_281_2_1d36ae76d481d3dd92065b1d64dac897.jpg">poco x6 pro </a>
`
let elementoP = document.querySelector("#descricao")
elementoP.innerHTML = `<p>Smartphone Xiaomi POCO X6 5G 8GB+256GB Global Version NFC Snapdragon 7s Gen 2 Smartphone 120Hz FIow AMOLED 64MP Triple Camera With OIS (Black)</p>
`
let elementospan = document.querySelector("#preco")
elementospan.innerHTML = `<span>R$:1896</span> `

console.log(elementoH1)
console.log(elementoH1.innerText)

console.log(elementoH2)
console.log(elementoH2.innerText)

console.log(elementoA)
console.log(elementoA.innerText)
console.log(elementoA.innerHTML)

console.log(elementoP)
console.log(elementoP.innerText)
console.log(elementoP.innerHTML)

console.log(elementospan)
console.log(elementospan.innerText)
console.log(elementospan.innerHTML)
