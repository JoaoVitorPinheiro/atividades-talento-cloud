// let elementoJavaScript = document.createElement('li')

// elementoJavaScript.innerText = "JavaScript"
// elementoJavaScript.id = "ling-js"

// let listaLinguagens = document.querySelector(".lista-linguagens")
// listaLinguagens.appendChild(elementoJavaScript)

// const postagemJavaScript = document.createElement("div")
// postagemJavaScript.innerHTML =`
// <h2 class="post-titulo">JavaScript</h2>
// <p class="post-texto">JavaScript é uma linguagem de programação
// </p>
// `
// const postagens =document.querySelector(".postagens")
// postagens.appendChild(postagemJavaScript)

// console.log(elementoJavaScript)
// console.log(postagemJavaScript)
const arrayPostagens = [
    {
        titulo: 'joao post',
        texto: 'o cara lindo'
    },
    {
        titulo: 'thais post',
        texto: 'meu amor'
    },
    {
        titulo: 'jorge post',
        texto: 'cantor'
    }
]
console.log(arrayPostagens[0].titulo)


for(let i = 0; i < arrayPostagens.length; i++){
    let article = document.createElement('article')


    article.innerHTML =`
    <h2 class="post-titulo">${arrayPostagens[i].titulo}</h2>
    <p class="post-texto">
        ${arrayPostagens[i].texto}
    </p>`
    article.id = `post-${i+1}`


    let section = document.querySelector('section')
    section.appendChild(article)


}

