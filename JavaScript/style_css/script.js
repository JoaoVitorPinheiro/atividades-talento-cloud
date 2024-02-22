const button = document.querySelector('button')

button.style.backgroundColor = 'green'
button.style.color = '#ffff'
button.style.borderRadius = '80px'
button.style.fontWeight = '800'

const login =document.querySelector('#login')
login.style.backgroundColor = '#8309b6'

const userName = document.querySelector("#login-usuario" )
userName.classList.remove('error')

const p = document.querySelectorAll('.error-text')[0]
p.classList.remove('visible')

const userSenha = document.querySelector('#login-senha')
userSenha.classList.add('error')

const erro = document.querySelectorAll('.error-text')[1]
erro.classList.add('visible')

const correct = document.querySelector('#login-usuario')
correct.classList.add('correct')