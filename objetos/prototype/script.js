function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return ('Abraçou');
    }
}

Pessoa.prototype.andar = function() {
    return 'Pessoa andou';
}

Pessoa.prototype.nadar = function() {
    return 'Pessoa nadou';
}

const bruno = new Pessoa('Bruno', 23);

// console.log(Pessoa.prototype);

const pais = 'Brasil';

const lista = document.querySelectorAll('li');

//Transforma em array
const listaArray1 = Array.prototype.slice.call(lista);
// Ou
const listaArray2 = Array.from(lista);


const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

