function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
honda.marca = 'Honda';

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = '2000';

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new Carro2('mazda', 5000);