//Exemplo 1

/*
while(true) {
    console.log("Amo javascript!");
}
*/

// 0, 0.0123, 0.1278,.....

//console.log( Math.random() );

let quantidade = 0;

while( Math.random() < 0.8 ) {
    console.log("Menor que 0.8")
    quantidade++
}

console.log(quantidade);
console.log("Fim!");