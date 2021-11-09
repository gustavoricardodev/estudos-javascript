// spread

// Como o nome já indica, o operador spread serve para que nós possamos espalhar itens de um array nos argumentos de uma função.

// Assim como o operador rest o spread utiliza dos três pontos na sua sintaxe, mas neste caso utilizamos o operador no momento de passar argumentos para função. Exemplo:

const nomes = ["Goku", "Saitama", "Xuxa", "Faustão", "Schrödinger"];

const roupas = ["Terno", "Chapéu", "Chinelo", "Gravata", "Armadura"];

// Primeiramente vamos utilizar o spread apenas para juntar esses dois arrays dentro de um único array.

const arrayNovo = [...nomes, ...roupas];

console.log(arrayNovo);

// Repare que fazendo desta forma eu não estou colocando dois novos arrays dentro de um array, onde nomes ficaria na posição 0 e roupas na posição 1. Na verdade estou espalhando os itens de cada array para o array novo.
