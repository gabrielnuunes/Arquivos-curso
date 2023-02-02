//Exemplo 1
const nota = 4;

if (nota >= 5) 
    console.log("Passou!")
else 
    console.log("Não passou!")

//Exemplo 2
const verdadeiro = true;
const falsa = false;

if (verdadeiro)
    console.log("Vai mostrar com variável")
else
    console.log("Não vai mostrar com variável")

if (true) {
    console.log("Vai mostrar com valor literal");
} else {
    console.log("Não vai mostrar com valor literal");
}

//Exemplo 3
const idade = 15;
let maiorDeIdade;

if (idade >= 18) {
    maiorDeIdade = "É maior de idade!";
} else {
    maiorDeIdade = "Não é maior de idade!";
}

console.log(maiorDeIdade);
