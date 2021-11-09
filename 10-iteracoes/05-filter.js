// filter

// O filter também segue a mesma lógica de sintaxe do map e do foreach.

// O filter não é uma void-return function.

// Ao aplicarmos o filter em um array ele pode nos retornar um array do mesmo tamanho ou menor que o original.

// O filter só retorna um valor quando o teste definido por nós é verdadeiro.

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

function validaCor(currentValue) {
  return currentValue.cor === "Amarelo";
}

const arrayModificado = frutas.filter(validaCor);

console.log(arrayModificado);
