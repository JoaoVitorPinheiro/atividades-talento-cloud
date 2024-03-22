var stars = document.querySelectorAll(".star-icon");

document.addEventListener("click", function(e){
    var classStar = e.target.classList;
    if(!classStar.contains("ativo")){
        stars.forEach(function(star){
            star.classList.remove("ativo");
        });
        classStar.add("ativo");
        console.log(e.target.getAttribute("data-avaliacao"))
    }
});

let logo = document.getElementById('logo1')
// console.log(logo)

let postAutos = document.getElementsByClassName('star-icon')
// console.log(postAutos)

let avaliacao = document.getElementsByClassName('avaliacao')
// console.log(avaliacao)


let texto02 = document.querySelector('#estrela01 .star-icon')
// console.log(texto02)

let texto03 = document.querySelectorAll('header .lista11 li')
// console.log(texto03)

let capturando = document.querySelectorAll('body .avaliacao li')
// console.log(capturando)
function percorrerArray(lista){
for(let i = 0; i < lista.length; i = i+1){
    console.log(lista[i]);
}
}
percorrerArray(capturando)