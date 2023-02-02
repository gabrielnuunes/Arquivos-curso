// Sistema para escola

const nota1 = 1.2;
const nota2 = 2.8;

function media(n1, n2){
    return (n1 + n2) / 2;
}

console.log(media(nota1, nota2));

function menor(n1, n2) {

   return n1 <= n2 ? n1 : n2
}

console.log(menor(nota1, nota2));

function resultado(n1, n2){

    let resultadoMedia = media(n1, n2);

    if( resultadoMedia >= 6 ) {
        return "Aprovado(a)!";
    } else if(resultadoMedia >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado(a)."
    }

}

console.log(resultado(nota1, nota2))

