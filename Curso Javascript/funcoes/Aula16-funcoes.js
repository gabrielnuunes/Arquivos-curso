//Exemplo1

const nome1 = "Gabriel";
const sobreNome1 = "Nunes";
const turma1 = "A";

//console.log(`O nome é: ${nome}`);
//console.log(`O sobrenome é: ${sobreNome}`);
//console.log(`A turma é: ${turma}`);

const nome2 = "Gabriela";
const sobreNome2 = "Matias";
const turma2 = "B";

function exibirDadosAluno2() {

    console.log(`O nome é ${nome2} o sobrenome é ${sobreNome2} e a turma é ${turma2}.`);

}

//exibirDadosAluno2()
//exibirDadosAluno2()



function exibirDados(nome, sobreNome, turma) {

    console.log(`O nome é ${nome} o sobrenome é ${sobreNome} e a turma é ${turma}.`);

}

function exibirNome(nome){
    console.log(`O nome é ${nome}`)
}

function exibirSobreNome(sobreNome){
    console.log(sobreNome)
}

exibirNome("Gabriel");
exibirDados("Gabriel", "Nunes", "A");
exibirDados("Gabriela", "Matias", "B");
exibirDados("Maria", "Sousa", "C");
exibirDados("Pedro", "Silva", "D");

// Função que some dois valores