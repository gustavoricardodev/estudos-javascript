// Junto com vários outros métodos e propriedades, dentro do [[Prototype]] do nosso objeto do tipo Response temos vários métodos que nos permitem tratar essa resposta. Exemplo:

const url = "./text.txt";

const options = {
  // method: "GET",
};

fetch(url, options)
  .then(response => response.text()) // Método text existe no [[Prototype]] de objetos do tipo Response.
  .then(responseText => document.write(responseText));
