// Exemplo 1 - Foreach

const notas = [5, 4, 3, 5, 6]

for(let indice in notas){ // IN = INDICE
    //console.log(indice)
}

let espaco = '';

for(let nota of notas){ // OF = os valores
    espaco += nota + ' '
}

//console.log(espaco)

// Exemplo 2 - Percorrer um array de trás para frente

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = numeros.length - 1; i >= 0; i--){
    //console.log(numeros[i])
}

for(let i = numeros.length - 1; i >= 0; i -= 2){ // De trás para frente de 2 em 2
    //console.log(numeros[i])
}

for(let x = 0; x < numeros.length; x++) {
    console.log(numeros[x])
}

for(let numero of numeros){
    console.log(numero)
}