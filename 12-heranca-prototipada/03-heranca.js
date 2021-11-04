// Agora vamos tentar a mesma coisa com métodos:

// Veja o que acontece se tentarmos adicionar novos métodos a uma função construtora da mesma forma que adicionamos métodos em objetos já existentes:

function Veiculo(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const caminhonete = new Veiculo('Toro', 2000);

console.log(caminhonete);

Veiculo.andar = () => 'Andou';

console.log(Veiculo);

console.log(caminhonete);

// Repare que o método andar não foi adicionado na função construtora Veiculo e também não foi adicionado no objeto caminhonete.

// Neste caso, se quiséssemos adicionar o método andar no objeto caminhonete deveríamos adicionar o método diretamente no objeto após a sua criação da seguinte forma:

caminhonete.andar = () => 'Andou';

console.log(caminhonete);

// De qualquer maneira não seria uma boa ideia já que novos objetos criados a partir de Veiculo não receberiam o método andar, e teríamos que adicioná-lo em cada novo objeto criado.

// Outra forma de fazer isso seria adicionando o método diretamente na função construtora, o que neste caso não seria uma boa ideia, já que teríamos métodos duplicados que fazem exatamente a mesma coisa, como já vimos anteriormente.
