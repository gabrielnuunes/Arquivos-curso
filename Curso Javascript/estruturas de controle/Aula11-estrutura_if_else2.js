//Exemplo 1 

/*
if (nota >= 6) {
    resultado = "Passou!";
} else {
    if (nota >= 3) {
        resultado = "Recuperação";
    } else {
        resultado = "Reprovado(a)!";    
    }
}
*/

const nota = 2;
let resultado;

/*
if (nota >= 6) {
    resultado = "Passou!";
} else if (nota >= 3) {
    resultado = "Recuperação";
} else {
    resultado = "Reprovado(a)!";    
}

*/

//console.log(resultado);

//Exercicio Calculadora
// Operadores aritméticos = +, -, /, *, %
// IF, ELFE IF, ELSE

let a = 9;
let b = 2;
const operador = "+";
let valorFinal;

if (operador === "+") {
    valorFinal = "Soma: " + (a + b);
} else if (operador === "-") {
    valorFinal = a - b;
} else if (operador === "/") {
    valorFinal = a / b;
} else if (operador == "*") {
    valorFinal = a * b;
} else if (operador === "%"){
    valorFinal = a % b;
} else {
    valorFinal = "Valor inválido, informe outro valor."
}

console.log(valorFinal);