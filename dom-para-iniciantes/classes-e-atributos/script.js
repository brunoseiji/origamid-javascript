const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
// menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

const animais = document.querySelector('.animais');
console.log(animais.attributes[0]);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src')

// const possuiAlt = img.hasAttribute('alt', 'É uma raposa');

// console.log(possuiAlt);

console.log(srcImg);