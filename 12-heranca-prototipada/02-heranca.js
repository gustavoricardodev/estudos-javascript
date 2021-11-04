// Outra coisa que devemos entender é que depois de criadas, as funções construtoras não aceitam atribuição de novos métodos ou propriedades.

// Veja o que acontece se tentarmos adicionar novas propriedades a uma função construtora da mesma forma que adicionamos propriedades em objetos já existentes:

function Veiculo(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const caminhonete = new Veiculo('Toro', 2000);

console.log(caminhonete);

Veiculo.cor = 'Azul';

const carro = new Veiculo('Evoque', 50000);

console.log(Veiculo);

console.log(caminhonete);

console.log(carro);

// Repare que a propriedade cor não foi adicionada na função construtora Veiculo, também não foi adicionada no objeto caminhonete e muito menor no objeto carro.

// Neste caso, se quiséssemos adicionar a propriedade cor no objeto caminhonete deveríamos adicionar a propriedade diretamente no objeto após a sua criação, da seguinte forma:

caminhonete.cor = 'Branco';

console.log(caminhonete);

// De qualquer maneira não seria uma boa ideia já que novos objetos criados a partir de Veiculo não receberiam a propriedade cor, e teríamos que adicioná-la em cada novo objeto criado, o que geraria um enorme trabalho

// Outra forma de fazer isso seria adicionando a propriedade diretamente na função construtora, o que seria mais inteligente.
