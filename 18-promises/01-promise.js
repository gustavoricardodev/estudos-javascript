// Primeiramente, antes de entender qual a finalidade do uso de promises, vamos entender sua estrutura sintática.

// No JavaScript temos uma função construtora chamada Promise, que por sua vez, contrói objetos do tipo Promise.

// Sempre que vamos instanciar um novo objeto do tipo Promise, devemos passar como parâmetro da função construtora uma outra função. Exemplo:

const promiseTeste = new Promise(() => {});

// Agora, podemos observar todos os métodos e propriedades do objeto que criamos.

console.log(promiseTeste);
