//Exemplo 1
const nota = 7;
const fezAsProvas = false;

//       V    &&     F       =  F
if (nota >= 6 && fezAsProvas)
    console.log("Passou!");

//      F    ||     F       =  F    
if (nota < 6 || fezAsProvas)
    console.log("Não passou!")


//Exemplo 2
const media = 6;

if(media >= 5) {

    console.log("Olá")
    console.log("Tudo bem?")
    
    let nome = "João";
    console.log(nome)
}