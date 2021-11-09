// Vamos observar com mais calma como a palavra chave new funciona.

// A palavra chave new é responsável por criar um novo objeto baseado na função construtora que passamos na frente dele.

// Vamos utilizar de exemplo a criação do objeto carro a partir da função construtora Veiculo:

function Veiculo(nome, preco) {
  this.nome = nome
  this.preco = preco
}

const carro = new Veiculo("Evoque", 50000)

// O primeiro passo da palavra chave new é criar um novo objeto vazio e atribuir este objeto a variável carro:

carro = {}

//  O segundo passo é atribuir a carro.prototype o mesmo valor de Veiculo.prototype (prototype é um conceito que será visto posteriormente).

carro.__proto__ = Veiculo.prototype;

// O terceiro passo é apontar a variável this para o novo objeto. A partir deste momento, this e carro são a mesma coisa.

this = carro;

// O quarto passo é executar a função construtora, porém substituindo this pelo nome do novo objeto:

carro.nome = "Evoque";
carro.preco = 50000;

// No quinto e último passo o JavaScript nos retorna esse novo objeto, que normalmente atribuimos a uma variável:

return {
  nome: "Evoque",
  preco: 50000
};