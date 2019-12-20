// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     console.log(item.toUpperCase(), index, array);
// })

// const li = document.querySelectorAll('li');

// // Antes do ES6
// li.forEach(function(item) {
//     item.classList.add('ativa');
// })

// // ES6+ | Arrow Function
// li.forEach((item) => item.classList.add('ativa'));

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//     console.log(item.toUpperCase(), index, array)
//     return item;
// })

// const numeros = [2, 4, 5, 6, 78];
// const numerosx2 = numeros.map(n => n * 2);

// console.log(numerosx2);

// console.log(novaArray);



// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'Javascript 1',
//         min: 25
//     }
// ]

// // Puxar o tempo das aulas
// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas);

// // Reduce
// const aulas2 = [10, 25, 30];

// const reduceAulas = aulas2.reduce((acumulador, item) => {
//     return acumulador + item;
// }, 0) // É necessário inserir o valor inicial para não pular a primeira interação

// console.log(reduceAulas);


// const numeros2 = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros2.reduce((anterior, atual) => {
//     if(anterior > atual) {
//         return anterior;
//     } else {
//         return atual;
//     }
// }, 0);

// console.log(maiorNumero);

// // Utilizando o método ternário

// const maiorNumero2 = numeros2.reduce((anterior, atual) => {
//     return anterior > atual ? anterior : atual;
// },0)

// console.log(maiorNumero2);

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'Javascript 1',
        min: 25
    }
]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     acumulador[index] = aula.nome;
//     return acumulador;
// }, {});





// Some

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => {
//     return item === 'Uva';
// });

// console.log(temUva);





//Every - Verifica se possui algum item false, se sim, retorna

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const every = frutas.every((fruta) => {
//     return fruta;
// })

// console.log(every); //true

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every((n) => {
//     return n >= 6;
// });

// console.log(maiorQue3); //true





// Find e FindIndex
/*
    .find(), retorna o valor atual da primeira iteração que retornar um valor truthy
    .findIndex(), retorna o index deste valor na array
*/
const frutas = ['Banana', 'Pêra', 'Maçã', 'Uva'];

const indexUva = frutas.findIndex((item) => {
    return item === 'Uva';
})

console.log(indexUva); //posição onde encontrou o true = 3

const findUva = frutas.find((item) => {
    return item === 'Uva';
})

console.log(findUva);






// Filter
/*
 .filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
*/
const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
    console.log(item);
    return item;
});
console.log(arrayFrutas);


// Aulas que são maiores que 15 minutos
const maiores15 = aulas.filter((aula) => {
    return aula.min >= 15;
})
console.log(maiores15);