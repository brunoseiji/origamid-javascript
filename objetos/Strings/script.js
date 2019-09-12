// const comida = 'Pizza';
// const agua = new String('Água');
// const frase = 'A melhor comida';

// console.log(comida.length);
// console.log(frase[0]); // A
// console.log(frase[4]); // l

// console.log(frase.charAt(0)); // A
// console.log(frase.charAt(frase.length - 1)); // Retorna o último caractere

const frase = 'A melhor linguagem é ';
const linguagem = 'Javascript';

// CONCATENAR STRINGS

// 1º Opção:
// const fraseFinal = frase + linguagem;
// console.log(fraseFinal);

// 2º Opção:
const fraseFinal = frase.concat(linguagem, '!!');
console.log(fraseFinal);


// INCLUDES
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 2));

console.log(fruta.startsWith('Ba')) // True
console.log(fruta.startsWith('ba')) // False
console.log(fruta.endsWith('na')) // True


// str.slice(start, end)
// Corta a string de acordo com os valores de start e end

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3)); // Dep
console.log(transacao3.slice(4)); // Recorta os primeiros 4 caracteres


// indexOf
// Procura o índice ou a posição da palavra ou caractere

console.log(fruta.indexOf('B')); // 0
console.log(fruta.indexOf('na')); // 2
console.log(fruta.lastIndexOf('a')); // Último 'na' // 5


// str.padStart(n, str) e str.padEnd(n, str)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ele passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const preco = 'R$ 99.00';
console.log(preco.padStart(20, '.'));

const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPreco.forEach((item) => {
   console.log(item.padStart(10, '.'));
});

const frase2 = 'Ta';
frase.repeat(5); //TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(novoHtml);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo2.toUpperCase());
console.log(sexo3.toLowerCase());