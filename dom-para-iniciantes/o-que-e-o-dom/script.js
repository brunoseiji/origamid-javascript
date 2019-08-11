// window.alert('Isso mesmo');

console.log(window.location.href);

const titulo = document.querySelector('h1');
const h1Classes = titulo.classList;

console.log(titulo);
console.log(h1Classes);

titulo.innerText; // Retorna o texto
titulo.classList; // Retorna as classes
titulo.id; // Retorna o id
titulo.offsetHeight; // Retorna a altura do elemento;

function callbackh1() {
    console.log('Clicou em', titulo.innerText);
}

titulo.addEventListener('click', callbackh1);