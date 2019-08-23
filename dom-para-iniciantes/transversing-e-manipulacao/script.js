// const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

// h1.innerHTML = '<p>Novo título</p>'

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

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

// contato.insertBefore(animais, mapa);
// contato.removeChild(titulo);
// contato.replaceChild(lista, titulo)

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

const novoh1 = document.createElement('h1');

novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);


// Clona o h1
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1);