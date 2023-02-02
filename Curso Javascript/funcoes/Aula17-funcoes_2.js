//Resolução Soma

function soma(numero1, numero2) {
    //Template String
    console.log(`A soma é ${numero1 + numero2}` );
}

//soma(2, 3);
//soma(10, 5);

//Undefined = Indefinido

let a;
let numero = 10;
let carro = null;
let valor = 0;
let paciente = " "; // String vazia

//console.log(a)
//console.log(numero)
//console.log(carro)
//console.log(valor)
//console.log(paciente)

// Return = Retorno

function retornaOla(){

    return "Olá";
}

retornaOla()

//console.log("Olá com retorno: " + retornaOla())

// Exemplo 2

function retornaBomDia(valor) {
    
    if(valor == true) {
        return "Bom dia!";
    } else {
        return "Boa noite";
    }

}

let cumprimentar = retornaBomDia(true)

console.log(cumprimentar)