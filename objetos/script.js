var pessoa = {
    nome: 'Bruno',
    idade: '23',
}
console.log(pessoa.nome, pessoa.idade);

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function() {
        return this.lados * 4;
    }
}
console.log(quadrado.lados, quadrado.area(5), quadrado.perimetro());

// Novo modo ES6

var quadrado2 = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro() {
        return this.lados * 4;
    }
}
console.log(quadrado2.lados, quadrado2.area(5), quadrado2.perimetro());


console.log(Math.PI);
console.log(Math.random());