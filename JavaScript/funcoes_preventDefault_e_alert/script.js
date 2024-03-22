let linkProz = document.getElementById('link-proz')
let btnSubmit = document.querySelector('button[type=submit]')

linkProz.addEventListener('click',(e)=>{
    e.preventDefault()
    alert('nao foi possivel acessar o link')
})

btnSubmit.addEventListener('click',(e)=>{
    alert('nao foi possivel enviar os dados do formulario ')
    e.preventDefault()
})