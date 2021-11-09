// O fetch API nada mais é do que uma interface do JavaScript que nos permite fazer requisições, e receber em troca a resolução de uma Promise.

// Por padrão o fetch pode receber dois argumentos, o primeiro sendo a url na qual eu irei fazer minha requisição, e a segunda sendo as opções e informações da minha requisição, que são passadas dentro de um objeto.

// É importante frisar que o segundo argumento não é obrigatório já que o JavaScript já tem algumas opções padrões de requisição.

const url = "./text.txt";

const options = {
  // method: "GET", ...
};

fetch(url, options) // Fetch retornou a resolução de uma promise.
  .then(retornoFetch => {
    console.log(retornoFetch);
  });

// Podemos observar que a o fetch nos retorna um objeto do tipo Response, com vários métodos e propriedades.
