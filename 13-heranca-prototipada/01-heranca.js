// Antes de entender sobre herança prototipada devemos clarear algumas coisas.

// A primeira delas é que não é interessante criarmos métodos diretamente nas funções construtoras, e isso tem um motivo, segue um exemplo:

function Veiculo(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  this.andar = function () {
    return "Andou";
  };

  this.frear = function () {
    return "Freou";
  };
}

const carro = new Veiculo("Evoque", 50000);
const moto = new Veiculo("Hayabusa", 5000);

// Repare que ambos os objetos tem o método andar e frear que funcionam exatamente da mesma maneira:

console.log(carro);
console.log(moto);

// Quando criamos o método dentro da função construtora ele é implementado toda vez que criamos um novo objeto, ocupando mais um espaço na memória.

// Neste momento, temos o método andar implementado duas vezes no nosso código, bem como o método frear. Isso é inútil, já que ambos fazem a mesma coisa.

// Ter métodos duplicados também não é interessante, pois em códigos reais podemos ter funções construtoras muito maiores gerando milhares de objetos, que poderiam por sua vez gerar milhares de métodos repetidos.

// Isso sujaria a memória do nosso sistema e o deixaria muito mais pesado.
