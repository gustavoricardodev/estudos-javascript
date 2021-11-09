// Vamos iniciar criando uma função simples:

function Veiculo() {}

// Vamos agora utilizar a palavra chave new para criar um novo objeto do TIPO Veiculo.

const carro = new Veiculo();

// A partir deste momento, carro é um objeto, que foi construído a partir da função construtora Veiculo:

console.log(carro);

// Vamos agora criar um outro objeto a partir do mesmo construtor Veiculo.

const moto = new Veiculo();

console.log(moto);

// Fazendo desta forma temos dois objetos diferentes, carro e moto. Logo, qualquer alteração que eu fizer em carro não será feita em moto e vice-versa.

console.log(carro === moto); // false

carro.nome = "Evoque";
moto.nome = "Hayabusa";

console.log(carro.nome);
console.log(moto.nome);
