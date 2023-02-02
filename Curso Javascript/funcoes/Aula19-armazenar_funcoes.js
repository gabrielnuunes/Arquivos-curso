// Exemplo 1

const nome = "Gabriel"; // String
let nota = 10; // Inteiro
let media = 5.9; // Decimal
const estaSol = false; // Booleano

let soma = function (a, b) {
    return a + b;
}

// console.log(soma(10, 2));

//Exemplo 2

function subtrair(a, b) {
    return a - b;
}

const menos = subtrair;

// console.log(subtrair(6, 4)); // Chamei a função
// console.log(menos(5, 4)); // Chamei a constante que faz referência a função 

// Exemplo 3 - Passar função como parâmetro

function multiplicar(a, b) {
    return a * b;
}


//fazer(10) // Aqui eu passei um número inteiro e não uma função

// typeof - ele verifica o tipo de dado que estamos utilizando

// console.log(typeof fazer)
// console.log(typeof fazer === "function")

function fazer(funcao) {
    if(typeof funcao === "function"){        
        console.log(funcao())
    } 
}

function ola() {
    return "Olá" // é uma string
}

//fazer(ola()) // fazer("Olá")

//fazer("Olá") // Aqui estamos passando uma string retornada pela função

// Forma correta
//fazer(ola)

// Exemplo 4

function falaNome(funcao){ // Aqui eu recebo como parêmtro a função
    funcao() // Aqui eu chamdo a função recebida como parâmetro
}

function meuNome(){
    console.log("Vindo da função: Gabriel Nunes")
}

console.log("Vindo do console: Gabriel Nunes")
meuNome()
falaNome(meuNome)