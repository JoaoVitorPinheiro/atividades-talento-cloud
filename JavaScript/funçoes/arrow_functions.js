// Função anônima declarada de forma tradicional
const seguinteNum = function(n){
    return(n + 1)

}
// Arrow function
const proximoNum = (n) => {
    return(n + 1)
}

const outroNum = n => {return (n+1)} 

const maisNum = n => (n + 1)


const getRandomNumber = () => Math.random()
function cumprimentar(){return 'olaa'}
console.log(cumprimentar())
console.log(seguinteNum(1))
console.log(proximoNum(2))
console.log(outroNum(3))
console.log(maisNum(4))
console.log(Math.random())
