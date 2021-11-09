// foreach

// É uma void-return function, ou seja, sempre retorna undefined.

// Recebe como parâmetro padrão uma função de callback.

// Essa função de callback recebe outros 3 parâmetros padrões:

// currentValue: diz respeito ao valor que está sendo iterado naquele momento.

// index: diz respeito a posição do item no array.

// array: é o próprio array, ele existe para que possamos modificar o array da iteração sem modificar o original.

const frutas = [
  {
    nome: "Morango",
    cor: "Vermelho",
    quantidade: 5,
  },
  {
    nome: "Banana",
    cor: "Amarelo",
    quantidade: 15,
  },
  {
    nome: "Uva",
    cor: "Roxo",
    quantidade: 30,
  },
  {
    nome: "Limão",
    cor: "Verde",
    quantidade: 20,
  },
  {
    nome: "Melão",
    cor: "Amarelo",
    quantidade: 2,
  },
];

frutas.forEach((currentValue, index, array) => {
  console.log(`${currentValue.nome} está na posição ${index}`);
});
