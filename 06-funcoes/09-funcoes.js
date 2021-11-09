// Arrow functions.

// A versão do ECMA Script 2015 do JavaScript, trouxe uma nova forma de trabalhar com funções, as arrow functions, que recebem esse nome por causa da sintaxe que lembra muito uma flecha.

// Arrow functions são consideradas functions expressions por não possuírem nome, serem atribuídas a uma expressão e por terem propriedades iguais quando falamos de hoisting.

// O valor de this dentro de um arrow Function está sempre ligado ao valor de this da função ou objeto pai regular que esteja mais próximo.

// Existem diversas formas de se escrever uma arrow function:

// Primeira maneira:

const retornaGravidadeTerra = () => {
  return "9,807 m/s²";
};

const gravidadeTerra = retornaGravidadeTerra();

console.log(gravidadeTerra);

// Segunda maneira: quando temos só uma linha, não precisamos de return e nem de chaves {}. Essa sintaxe é válida para qualquer tipo de dado sendo retornado exceto para objetos.

const retornaGravidadeLua = () => "1,62 m/s²";

const gravidadeLua = retornaGravidadeLua();

console.log(gravidadeLua);

// Terceira maneira: quando a função recebe apenas um parâmetro, podemos omitir os parênteses.

const retornaDobro = value => value * 2;

const valor = retornaDobro(10);

console.log(valor);
