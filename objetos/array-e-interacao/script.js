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