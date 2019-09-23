// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';

// console.log(carros);
// console.log(carros.length);

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li);

// const obj = {
//    0: 'Andre',
//    1: 'Rafael',
//    2: 'Teste',
//    length: 3,
// }

// const objArray = Array.from(obj);

// console.log(li)
// console.log(arrayLi);

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas.length);

// const letras = ['E', 'A', 'B', 'D', 'C'];

// letras.sort();
// console.log(letras);


// unshift adiciona um elemento no início e retorna o length
// push adiciona o elemento no final e retorna o length
// pop remove o último elemento do array e retorna
// shift remove o primeiro elemento do array e retorna
// reverse inverte a ordem o array

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// console.log(carros.pop());
// console.log(carros);
// console.log(carros.shift());
// console.log(carros);
// console.log(carros.reverse());

// console.log(carros);
// console.log(carros.splice(2,0, 'Fusca'));
// console.log(carros);

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];


const linguagens = ['html', 'css', 'js', 'php', 'python'];

// linguagens.includes('css'); // true
// linguagens.includes('ruby'); // false
// linguagens.indexOf('js'); // 2


// let htmlString = '<h2>Título Principal</h2>';
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('h3');

// console.log(htmlString);

console.log(linguagens.slice(2));

cloneLinguagens = linguagens.slice();
console.log(cloneLinguagens); // Tecnica comumente utilizada para clonar arrays