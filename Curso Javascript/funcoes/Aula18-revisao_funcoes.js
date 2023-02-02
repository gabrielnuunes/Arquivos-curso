//Tipos de funções
// Primeiro tipo = funções com parâmetro(os) e com retorno

// Função para realizar a soma de dois valores
function somar(a, b) {
    return a + b;
}

let resultado = "A soma é: " +  somar(1 , 2);
console.log(resultado);

console.log("A soma é: " + somar(5, 3));

// Segundo tipo = funções com parâmetro(os) e sem retorno

function exibirSubtracao(x, y) {
    console.log(x - y);
}

exibirSubtracao(10, 6);

// Terceiro tipo = função sem parâmetro e com retorno

function retornaNumero() {

    return Math.random(); // Retorna um número entre 0 e 1 = 0.898987744
}

console.log(retornaNumero())

// Quarto tipo = função sem parâmetro e sem retorno

function digaOla() {
    console.log("Olá")
}

digaOla()

// Receber um valor e retornar um tipo de serviço 

function valorTipoServico(valor) {
    if(valor == 1){
        return "Lavagem do carro";
    } else if (valor == 2) {
        return "Trocar óleo";
    } else if (valor == 3) {
        return "Trocar pneu";
    } else if (valor == 4) {
        return "Polimento";
    } else {
        return "Favor informar um valor entre 1 e 4";
    }
}

console.log(valorTipoServico(1))
console.log(valorTipoServico(2))
console.log(valorTipoServico(3))
console.log(valorTipoServico(4))
console.log(valorTipoServico(0))
console.log(valorTipoServico(5))

// Sistema para escola

const nota1 = 5.2;
const nota2 = 3.8;

function media(nota1, nota2){
    return (nota1 + nota2) / 2;
}

console.log(media(nota1, nota2));