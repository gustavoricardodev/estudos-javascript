// Comumente utilizamos o fetch para fazer requisições de APIs que nos retornam um dado para que possamos transformar em JSON.

// O JSON (JavaScript Object Notation), possui basicamente a mesma sintaxe que a de um objeto js. O método .json() transforma um dado requisitado em um objeto JavaScript.

fetch('https://viacep.com.br/ws/16201338/json/')
    .then(res => res.json())
    .then(res =>
        console.log(
            `Eu moro na ${res.logradouro} na cidade de ${res.localidade}`
        )
    );

// Existem diversos outros métodos que podem ser utilizados com a resposta de uma requisição.
