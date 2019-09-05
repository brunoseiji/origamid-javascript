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

console.log(Pessoa.prototype);