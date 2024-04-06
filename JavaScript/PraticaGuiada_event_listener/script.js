// capturando os elementos do DOM(variavel)
let quantidadeSubtotal = document.getElementById('quantidade-subtotal')
let valorSubtotal = document.getElementById('valor-subtotal')
let btnAdicionarProduto01 = document.getElementById('btn-adicionar-produto-01')
let qtdProduto01 = document.getElementById('quantidade-produto-01')

let subtotalInfo = {
    quantidade : 1,
    valor: 11.66
}

// definir a manipular os elementos capturados(funcoes)
quantidadeSubtotal.innerText = subtotalInfo.quantidade + 'itens'
valorSubtotal.innerText = subtotalInfo.valor

function adicionarUM(){
    qtdProduto01.value = Number(qtdProduto01.value) + 1
}

adicionarUM()
// definir quando devem ser manipulados oos elementos (evento)
btnAdicionarProduto01.addEventListener('click',adicionarUM)