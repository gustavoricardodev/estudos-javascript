// Dentro do conceito dos objetos temos um conceito denominado object short syntax, que assim como muitas outras já vistas é uma featura ES6+.

// Normalmente quando queremos que o valor de um objeto receba uma variável fazemos da seguinte forma:

const nome = 'Goku';
const idade = 19;

const pessoa = {
    nome: nome,
    idade: idade,
};

// Repare que está acontecendo uma coisa não muito legal na programação: a repetição.

// Por consequência do object short syntax podemos encurtar nossa atribuição.

// Essa feature define que quando o nome da propriedade é igual ao nome da chave do objeto, nós podemos mitigar o nome da propriedade e os dois pontos, segue um exemplo:

const nomeFruta = 'Morango';
const corFruta = 'Vermelho';

const fruta = {
    nomeFruta,
    corFruta,
};

// Observe que o código continua funcionando da mesma maneira.

console.log(fruta.nomeFruta, fruta.corFruta);
