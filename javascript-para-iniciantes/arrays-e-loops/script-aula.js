// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilGanhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, 'O brasil ganhou a copa de ${ano}'
for(let i = 0; i < brasilGanhou.length; i++) {
    console.log(`O Brasil ganhou a copa de ${brasilGanhou[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância'];

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') {
        break;
    }
}
// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);