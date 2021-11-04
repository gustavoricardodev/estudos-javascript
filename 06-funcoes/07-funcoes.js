// Arrow Functions

// A versão do ECMA Script 2015 do JavaScript, trouxe uma nova forma de trabalhar com funções, as Arrow Functions, que recebem esse nome por causa da sintaxe que lembra uma flecha: () => {}.

// Arrow Functions são consideradas Functions Expressions por não possuírem nome, serem atribuídas a uma exmpressão e por ter propriedades iguais quando falamos de Hoisting.

// As Arrow Functions não tem o seu prórpio this, sendo o contrário de uma Function Expression regular. O valor de this dentro de um Arrow Function está sempre ligado ao valor de this da função ou objeto pai regular que esteja mais próximo.

// Existem diversas formas de escrever uma Arrow Function.

// Primeira maneira:

const funcaoExemplo = () => {
    return 'bloco';
};
funcaoExemplo();

// Segunda maneira: quando temos só uma linha, não precisamos de return e nem de chaves {}. Essa sintaxe é válida para qualquer tipo de dado sendo retornado exceto para objetos.

const funcaoExemplo2 = () => 'bloco';
funcaoExemplo2();

// Terceira maneira: quando a função recebe apenas um argumento, podemos omitir os parênteses.

const funcaoExemplo3 = value => value * 2;
funcaoExemplo3(5);
