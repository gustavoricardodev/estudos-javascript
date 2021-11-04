// Agora vamos adicionar um método ao prototype de uma funçao construtora:

function Veiculo(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Veiculo.prototype.andar = function () {
    return 'Andou';
};

console.log(Veiculo.prototype);

// Agora repare que dentro de prototype da função construtora Veiculo temos o método andar.

// Observe o que ocorre ao criarmos um novo objeto do tipo Veiculo:

const moto = new Veiculo('Hayabusa', 5000);

console.log(moto);

// Repare que dentro do objeto moto não temos o método andar, porém mesmo assim podemos acessá-lo:

console.log(moto.andar());

// A dúvida que fica é: Se não temos o método anda dentro de moto, como podemos acessá-lo?

// Antes de entender isso vamos entender que apenas com o prototype resolvemos os dois problemas de funções construtoras que vimos anteriormente:

// Não iremos ter mais métodos duplicados, já que os métodos estão dentro do prototype da função construtora

// E também resolvemos o problema de não conseguirm adicionar métodos e propriedades a funções construtoras depois que elas já foram criadas.
