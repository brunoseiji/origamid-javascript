const img = document.querySelector('img');

function callback() {
    console.log('Clicou')
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbacklista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

animaisLista.addEventListener('click', callbacklista);

console.log(animaisLista)

const linkExterno = document.querySelector('a[href^="http"');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard() {
    if(event.key === 'f') {
        document.body.classList.toggle('fullscreen');
    }
    console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);