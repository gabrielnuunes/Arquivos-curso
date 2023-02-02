// Exercício 
// De acordo com a idade do usuário, mostrar em qual faixa etária ele se encontra
// 0 até 1 ano - bebê
// 2 até 11 anos - criança
// 12 até 17 anos - adolescente
// 18 até 59 anos - adulto
// 60 em diante - idoso

const idade = 42;

if (idade >= 0 && idade < 2)
    console.log("Bebê")

if (idade >= 2 && idade <= 11)
    console.log("Criança")

if (idade >= 12 && idade <= 17)
    console.log("Adolescente")

if (idade >= 18 && idade <= 59)   
    console.log("Adulto")
    
if (idade >= 60)
    console.log("Idoso")