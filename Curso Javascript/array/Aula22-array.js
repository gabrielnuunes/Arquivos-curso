//Exemplo 1 

//             0  1  2  3
const notas = [7, 6, 7, 8];

// console.log(notas) // Imprime todo o array
// console.log(notas[1]) // Imprime determinado indice
// console.log(`A nota desejada é: ${notas[3]}`) // Template String 
// console.log(notas[8]) // Esou tentando acessar um indice que não existe

notas[2] = 7.1

// console.log(`A nota corrigida é: ${notas}`)

//Exemplo 2 - exemplo com string

const nomes = ["Gabiel", "Gabriela", "João", "Maria"];

//console.log(nomes)

nomes[0] = "Gabriel"
//console.log(nomes)

// nomes = "Alguma coisa"

let nota1 = 10;
//console.log(nota1);

nota1 = 12
//console.log(nota1)

// Exemplo 3 - outra forma de criar um array

const numeros = []

numeros[0] = 20;
numeros[1] = 15;
numeros[2] = 7;
numeros[10] = 2;
numeros[5] = 12

// console.log(numeros)
// console.log(numeros[5])

// Exemplo 4

// Objeto seria uma mala que contem atributos e métodos
// Os métodos seriam as funções desses elementos
// Método é igual a função
// Os atributos são os dados desse objeto

const alunos = ["aluno1", "aluno2"] // Estrutura do Array
alunos.push() // É uma função do objeto array


console.log(typeof console) // Objeto
console.log(typeof console.log) // Função

console.log(typeof alunos) // Objeto

alunos.push(5) // Adiciona um elemento no final do Array
console.log(alunos)

console.log("Atributo length " + alunos.length) // Verifico o tamanho do Array



