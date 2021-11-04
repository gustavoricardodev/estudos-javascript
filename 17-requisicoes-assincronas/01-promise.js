// Dentro do JavaScript temos construtor chamado Promise, que por sua vez constrói objetos do tipo Promise.

// Sempre que estamos criando novos objetos do tipo Promise temos que passar como argumento da função construtora uma outra função:

const promessa = new Promise(function () {});

// Vamos observar o que por padrão tem dentro desse objeto do tipo Promise.

console.log(promessa);

// Podemos ver que temos 3 propriedades padrão:

// Antes cabe um parênteses de que isso é valido como padrão para implementação de JavaScript do Google Chrome.

// [[Protoype]] que aponta para o prototype da função construtora Promise.

// [[PromiseState]] que contém o estado da Promise atual, que neste caso está como pending, pois a promise não foi resolvida nem rejeitada.

// [[PromiseResult] que contém o resultado retornado da Promise.
