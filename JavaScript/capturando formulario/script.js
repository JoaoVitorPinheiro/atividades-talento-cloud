
// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function togglePopup(input, label) {

}
function estilizarInputCorreto(input, helper){
}
function estilizarInputIncorreto(input, helper){
}

// Validar valor do input
usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value

    if(valor.length < 4){
        usernameHelper.innerText = 'usuario curto'
        console.log('Username muito curto!')
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameInput.classList.remove('correct')
        inputsCorretos.username = false

    } else {
        console.log('Usernamer válido!!')
        usernameInput.classList.remove('error')
        usernameInput.classList.add('correct')
        usernameHelper.classList.remove('visible')
        inputsCorretos.username = true
    }
})

// ---------- VALIDAÇÃO E-MAIL ---------- //
let emailInput = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById('email-helper')

emailInput.addEventListener('change', function(evento){

    let valor = evento.target.value

    if(valor.includes('@') && valor.includes('.com')){
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
        inputsCorretos.email = true

    } else {
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        inputsCorretos.email = false

    
    }
})

// ---------- FUNÇÃO CAMPO POPUP ---------- //
function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener('focus', function(){
        label.classList.add('required-popup')
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener('blur', function(){
        label.classList.remove('required-popup')
    })
}
// ---------- validação de senha ---------- //
let senhaInput = document.getElementById('senha')
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.getElementById('senha-helper')

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener('blur', (e) => {
    let valor = e.target.value
    
    if(valor == ''){
        senhaHelper.innerText = 'nao pode esta vazio'
        senhaInput.classList.add('error')
        senhaHelper.classList.add('visible')
        senhaInput.classList.remove('correct')
        // estilizarInputIncorreto(senhaInput, senhaHelper )
        inputsCorretos.senha = false 

    }else{
        senhaInput.classList.remove('error')
        senhaInput.classList.add('correct')
        senhaHelper.classList.remove('visible')
        // estilizarInputCorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = true

    }
});

let ConfirmaSenhaInput = document.getElementById('confirma-senha')
let ConfirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]')
let ConfirmaSenhaHelper = document.getElementById("confirma-senha-helper")

togglePopup(ConfirmaSenhaInput, ConfirmaSenhaLabel)
ConfirmaSenhaInput.addEventListener('change', (e) => {
    let valores = e.target.value

    

    if(valores == senhaInput.value){
        

        ConfirmaSenhaInput.classList.remove('error')
        ConfirmaSenhaInput.classList.add('correct')
        ConfirmaSenhaHelper.classList.remove('visible')
        estilizarInputCorreto(ConfirmaSenhaInput, ConfirmaSenhaHelper)
        inputsCorretos.confirmaSenha = true
        
    }
    else {
        ConfirmaSenhaHelper.innerText = 'Nao digitou igual a senha anterior'
        console.log('burro')
        ConfirmaSenhaInput.classList.add('error')
        ConfirmaSenhaHelper.classList.add('visible')
        ConfirmaSenhaInput.classList.remove('correct')
        estilizarInputIncorreto(ConfirmaSenhaInput,ConfirmaSenhaHelper)
        inputsCorretos.confirmaSenha = false

    }

})


// ---------- EVITAR ENVIO DO FORMULARIO ---------- //
 let btnSubmit = document.querySelector('button[type="submit"]')
 let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false 
 }
 btnSubmit.addEventListener('click', (e) =>{
    if(inputsCorretos.username == false ||
        inputsCorretos.email == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false){
        e.preventDefault()
        alert('Os Campos Obrigatorios precisam ser preenchidos corretamentes ')
    }else{
        alert('formulario enviado com sucesso ')
    }
 })



// senhaInput.addEventListener('change', function(evento){
//     let valor = evento.target.value

//     if(valor.length < 4){
//         console.log('Username muito curto!')
//         senhaInput.classList.add('error')
//         senhaHelper.classList.add('visible')
//         senhaInput.classList.remove('correct')

//     } else {
//         console.log('Usernamer válido!!')
//         senhaInput.classList.remove('error')
//         senhaInput.classList.add('correct')
//         senhaHelper.classList.remove('visible')
//     }
// })


mostrarPopup(usernameInput,usernameLabel)
mostrarPopup(emailInput,emailLabel)
mostrarPopup(senhaInput, senhaLabel)
mostrarPopup(ConfirmaSenhaInput, ConfirmaSenhaLabel)