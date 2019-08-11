// ----------------------------------------------

// var carro = 'Fusca'

function mostrarCarro() {
    const carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

// ----------------------------------------------

{
    var carro2 = 'Fusca 2';
    const ano = 2018;
}

console.log(carro2);
// console.log(ano); // ano is not defined

// ----------------------------------------------

// ----------------------------------------------

// for(let i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

// console.log(i); // Se declararmos a variável com var, o i escapa

// ----------------------------------------------

const semana = 'Sexta';
// semana = 'Quinta'; // Erro;
// const semana = 'Quinta'; // Erro
console.log(semana);

// ----------------------------------------------

const data = {
    ano: 2019,
    mes: 'Agosto',
}

data.ano = 2020; // Pode modificar
data.dia = 25;   // Pode modificar

console.log(data.ano, data.dia);

// ----------------------------------------------