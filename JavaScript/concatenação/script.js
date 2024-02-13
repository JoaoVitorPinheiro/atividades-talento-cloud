// let nome = 'rafael'
// let sobrenome = 'pereira'
// let templateString = `Meu nome é: 
// ${nome} 
// ${sobrenome}`
// let nomeCompleto = "Meu nome é:"+ nome + " " +  sobrenome
// console.log(nomeCompleto)
// console.log(templateString)

function numeros (num1,num2){
    let adicao = `Adição dos numeros:${num1} e ${num2} è ${num1+num2}`
    
    let subtracao = `Subtracao dos numeros:${num1} e ${num2} é ${num1-num2}`
    
    let multiplicacao = `Multiplicação dos numeros:${num1} e ${num2} é ${num1*num2}`
    
    let divisao = `Divisão dos numeros:${num1} e ${num2} é ${num1/num2}`

    return{ adicao,subtracao,multiplicacao,divisao}
    
  }
  
  let resultado = numeros(4,5)
  
  console.log(resultado.adicao)
  console.log(resultado.subtracao)
  console.log(resultado.multiplicacao)
  console.log(resultado.divisao)