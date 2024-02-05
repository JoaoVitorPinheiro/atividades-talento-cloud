numerosDaSorte = [37, 14, 26, 5, 94, 87]; 

for(let i = 0; i < numerosDaSorte.length; i++){
    let numeros = numerosDaSorte[i];
    console.log(numerosDaSorte[i]);
    if(numeros % 2 ===0 && numeros <50){
        console.log('O numero  é par e menor que 50');
    }
    else if(numeros < 50){
        console.log('O numero  é menor que 50');
    }
    else {
        console.log('O numero  é maior que  50');
    }
    
}