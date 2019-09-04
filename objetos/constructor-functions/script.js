function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
honda.marca = 'Honda';

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = '2000';