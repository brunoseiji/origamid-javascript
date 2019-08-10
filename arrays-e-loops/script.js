// ------------------------------------------
// Array

var videoGames = ['Switch', 'PS4','XBOX', '3DS'];
for(var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4') {
        break;
    }
}

// ------------------------------------------
// forEach
frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array);
});

// ------------------------------------------
// Loop For

// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

// ------------------------------------------
// While
// var numero = 0;
// while (numero < 10) {
//     console.log('numero');
//     numero++;
// }

// ------------------------------------------