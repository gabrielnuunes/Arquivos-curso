//Exemplo 1 

/*
for(let idade = 0; idade <= 17; idade++ ){
    console.log(idade)
}
*/

//               0  1  2  3
const numeros = [1, 2, 3, 4, 50, 60]

//      0      0 < 4  0++ = 1
//      1      1 < 4  1++ = 2      
//      2      2 < 4  2++ = 3      
for(let n = 0; n < 4; n++){
    //console.log(numeros[n]) // Ele não percorre todos os indices
}

const notas = [5.1, 4.8, 6.3, 5.7, 4.5, 7.4]

for(let x = 0; x < notas.length; x++){
    console.log(notas[x])
}
