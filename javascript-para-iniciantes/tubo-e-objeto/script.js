// ------------------------------------------

var nome = 'Bruno';
var nomeMinusculo = nome.toLocaleLowerCase();
console.log(nomeMinusculo);

// ------------------------------------------

var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'

// ------------------------------------------

var btn = document.querySelector('.btn');
btn.addEventListener('click', function (){
    console.log('Clicou');
});