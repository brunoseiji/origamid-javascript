console.log(Number.isNaN(5)); // false
console.log(Number.isInteger(10)); // true

console.log(parseFloat('100 reais')); // 100
console.log(parseInt('100.27')) // 100

const preco = 10.322;
console.log(preco.toFixed()); // 10
console.log(preco.toFixed(2)); // 10.32

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

let valor2 = 48.49
valor2 = valor2.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
console.log(valor2);


// Math.nome-da-propriedade possui diversos tipos de propriedades matemáticas
// Por exemplo: PI, arredondar pra cima / baixo, random entre outros

