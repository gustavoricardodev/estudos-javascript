// Vamos retormar a criação de objetos:

const carro = {
    nome: 'Evoque',
    preco: 20000,
};

// Observe o que acontecerá se eu tentar criar um novo objeto igual a carro utilizando a sintaxe abaixo:

const moto = carro;
moto.nome = 'Hayabusa';
moto.preco = 5000;

console.log(moto);
console.log(carro);

// Perceba que fazendo da forma acima não estamos criando um novo objeto igual a carro, estamos apenas fazendo a variável moto apontar para carro, a partir disso moto e carro são exatamente a mesma coisa e não objetos diferentes, logo:

console.log(moto === carro); // true

// Seguindo essa linha de raciocínio qualquer alteração que fizermos em carro também será feita em moto e vice-versa.
