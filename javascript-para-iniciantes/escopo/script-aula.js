console.log('--- Exercícios da aula abaixo ---');

// ----------------------------------------------

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'Preto';
    const marca = 'Fiat';
    let portas = 4;

    // console.log(cor, marca, portas); - Solução
}
// console.log(cor, marca, portas);
// Const e let não vazam do escopo de bloco e por isso não é possível utilizar

// ----------------------------------------------

// Como corrigir o erro abaixo?
// function somarDois(x) {
//     const dois = 2;
//     return x + dois;
// }

// function dividirDois(x) {
//     return x + dois;
// }
// console.log(somarDois(4));
// console.log(dividirDois(6));

// Solução


const dois = 2;
function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// ----------------------------------------------

// var numero = 50;

// for (var numero = 0; numero < 10; numero++) {
//     console.log(numero);
// }

// const total = 10 * numero;
// console.log(total);

// Solução

const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);