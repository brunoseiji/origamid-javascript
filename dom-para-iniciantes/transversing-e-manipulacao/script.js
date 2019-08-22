const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML = '<p>Novo título</p>'

// console.log(animaisLista.innerHTML);


const lista = document.querySelector('.animais-lista')
console.log(lista.parentElement);

// lista.parentElement // pai
// lista.parentElement.parentElement // pai do pai
// lista.previousElementSibling // elemento acima
// lista.nextElementSibling // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // útlimo filho

console.log(lista.childNodes);