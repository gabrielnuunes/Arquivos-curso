//Exemplo 1

//console.log( Math.random() * 10 ); // Entre 0 e 10

let idade = (Math.random() * 3 ); // Entre 0 e 3 anos
let quantidade = 0;

while(( Math.random() * 3 ) < idade){ // Entre 0 e 1
    quantidade++
}

//console.log("A idade é: " + idade.toFixed(1) + " anos");
//console.log("Quantidade de vezes executadas: " + quantidade);

//Exemplo 2

let controle = 0;

while(controle <= 3){
    console.log(controle)
    controle++
}

// 1 -> "1"