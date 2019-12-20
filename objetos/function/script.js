//.lenght retorna a quantidade de argumentos');
//.name retorna o nome da função');


// function somar(n1, n2) {
//     return n1 + n2;
// }
// console.log(somar.length);
// console.log(somar.name);


// function darOi(nome, idade) {
//     console.log('Oi para você ' + nome + ' ' + idade);
// }

// darOi.call({}, 'Bruno', '24');

// function descricaoCarro() {
//     console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015});

// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach.call(carros, (item) => {
//     console.log(item);
// })


// function Dom(seletor) {
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//     this.element.classList.add(classe);
// }

// const ul = new Dom('ul');

// ul.ativo('ativar');

// console.log(ul.element)


const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas)


const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    lenght: 3,
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => { 
    return item.classList.contains('ativo')
})

console.log(filtro);



// .bind();
function imc (altura, peso) {
    return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70) // 21.6
imc180(70); //21.6;
