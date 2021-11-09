// A atribuição via desestruturação é uma expressão JavaScript que nos permite extrair dados e arrays e objetos.

// Essa expressão funciona de uma forma quando trabalhamos com arrays e de outra forma quando trabalhamos com objetos.

// Desestruturação em arrays:

// Normalmente para acessar valores de arrays utilizamos a notação comum: nomeDoArray[índice], da seguinte forma:

const valores = [12, 24, 45, 67, 78, 89];

const primeiroValor = valores[0],
  segundoValor = valores[1];

console.log(primeiroValor, segundoValor);

// Com a sintaxe da destructuring assignment podemos acessar os dados e uma forma mais simples.

const carros = ["Mustang", "Ferrari", "Jaguar"];

const [primeiroCarro, segundoCarro] = carros;

console.log(primeiroCarro, segundoCarro); // Mustang Ferrari

// Repare que quando estamos trabalhando com arrays podemos dar o nome que quisermos para as variáveis as quais estamos atribuindo os dados extraídos.

// O valor atribuido as variáveis que utilizamos dentro dos colchetes irá seguir exatamente a ordem dos valores dos dados do array que estamos desestruturando.
