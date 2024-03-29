console.log('---------- Exercícios ----------');

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt');
    console.log(item, possuiAtributo);
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https"]');
linkExterno.setAttribute('href', 'https://www.google.com.br');