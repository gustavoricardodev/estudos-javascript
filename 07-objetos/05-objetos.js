// Dentro do conceito dos objetos temos um conceito denominado object short syntax, que assim como muitas outras já vistas é uma feature ES6+.

// Normalmente quando queremos que o valor de um objeto receba uma variável fazemos da seguinte forma:

const nome = "Jackie Chan";
const idade = 67;

const pessoa = {
  nome: nome,
  idade: idade,
};

console.log(pessoa.nome, pessoa.idade);

// Repare que está acontecendo uma coisa não muito legal: a repetição.

// Por consequência do object short syntax podemos encurtar nossa atribuição.

// Essa feature define que quando o nome da propriedade é igual ao nome da chave do objeto, nós podemos mitigar o nome da propriedade e os dois pontos. Exemplo:

const nomeFruta = "Morango";
const corFruta = "Vermelho";

const fruta = {
  nomeFruta,
  corFruta,
};

// Observe que o código continua funcionando da mesma maneira.

console.log(fruta.nomeFruta, fruta.corFruta);
