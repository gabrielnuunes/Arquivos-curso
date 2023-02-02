//Exemplo 1

function nome() {

    return "Gabriel Nunes"; // Retorno é uma string
}

// console.log(nome())

function retornaFuncao(){

    function meuNome() { // Não está acessível

        return "Retorno da função de dentro"; // Valor que será retornado
    }

    return meuNome; // Retorno da função mais externa

}

//console.log(retornaFuncao) // O nome da função mais externa
//console.log(retornaFuncao()) // O nome da função mais interna
//console.log(retornaFuncao()()) // Aqui estou chamando a função mais interna


// Estou chamando a função de fora e atribuindo a uma variavel
let retorno = retornaFuncao(); 
//console.log(retorno()); // Imprimindo no console e chamando a função interna

// Exemplo 2 - Retorno de uma função anônima 

function funcaoAnonima() {
    return function () {
        return function () {
            return "Olá da função mais interna ainda"
        }
    }
}

//console.log(funcaoAnonima)
//console.log(funcaoAnonima())
//console.log(funcaoAnonima()())
//console.log(funcaoAnonima()()())

// Exemplo 3 - Passando parâmetro para função externa e interna

function multiplicacao(x, y) {
    return x * y;
}

function multiplica() {
    return function(a, b) {
        return a * b;
    }
}

//console.log(multiplica()(2, 4))

function multi (n1) {
    return function (n2) {
        return n1 * n2;
    }
}

console.log(multi(3)(2))