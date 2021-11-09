// Agora respondendo a pergunta: Se não temos o método andar dentro de moto, como podemos acessá-lo?

// Todo objeto criado a partir de uma função construtora através da palavra chave new ou criado a partir da sintaxe literal, tem dentro dele uma propriedade chamada [[Prototype]], esta propriedade aponta para o objeto protoype da função que foi utilizada para criar este novo objeto.

// Não conseguimos acessar essa propriedade diretamente no JavaScript. Se você colocar moto.[[Prorotype]] no seu naveagor apenas um erro será retornado no seu console.

// No entando alguns navegadores mais modenos nos disponibilizam uma propriedade chamada __proto__ que aponta para essa propriedade [[Prototype]], que aponta para o prototype da função construtora.

// Então para fins didáticos cabe saber que __proto__ === [[Prototype]].

// É muito importante entender a diferença de __proto__/[[Prototype]] e a propriedade de funções, prototype.

// Exemplo prático:

function Veiculo(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Veiculo.prototype.andar = function () {
  return "Andou";
};

const moto = new Veiculo("Hayabusa", 5000);

console.log(Veiculo.prototype === moto.__proto__); // true

// Poderiamos acessar a função andar em moto usando a seguinte sintaxe:

console.log(moto.__proto__.andar());

// Isso também executaria a função, mas não precisamos falar diretamente com a propriedade __proto__ já que a engine JavaScript faz isso automaticamente. Fazer o acesso dessa forma também pode causar problemas de referência.
