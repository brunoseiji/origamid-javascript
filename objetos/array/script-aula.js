const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift(); // Remove o primeiro
console.log(primeiroValor);
const ultimoValor = comidas.pop(); // Remove o último
console.log(ultimoValor);
console.log(comidas);
comidas.push('Arroz'); // Adiciona no final
console.log(comidas);
comidas.unshift('Peixe', 'Batata'); // Adiciona no início
console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort(); // Ordem alfabética
estudantes.reverse(); // Inverte a ordem
console.log(estudantes);
console.log(estudantes.includes('Joana'));   // Verifica se Joana existe na array
console.log(estudantes.includes('Juliana')); // Verifica se Juliana existe na array


let html = `
            <section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>
            `
// Substitua section por ul e div com li, utilizando split e joim

html = html.split('section').join('ul').split('div').join('li');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros.slice(); // Cria uma cópia da array
carros.pop();
console.log(carros);
console.log(carrosCopia);