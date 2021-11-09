// O reduce é um pouco diferente quando a regra de sintaxe dos outros métodos, ele se diferencia por receber um parâmetro a mais.

// O reduce irá receber então 4 parâmetros: accumulator, currentValue, index e array.

// O accumulator é o que se diferencia dos demais, ele sempre recebe como valor o retorno da última iteração.

// Como na primeira iteração ainda não temos retorno, definimos um valor inicial para o accumulator.

// Caso não seja definido um valor inicial para o accumulator ele pula a primeira iteração.

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

function quantidadeTotal(accumulator, currentValue) {
  accumulator += currentValue.quantidade;
  return accumulator;
}

const valorRetornado = frutas.reduce(quantidadeTotal, 0);

console.log(valorRetornado);
