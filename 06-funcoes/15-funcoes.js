// Existe um exemplo muito comum que exemplifica como se utiliza o operador spread juntamente com uma função.

// Suponha que você recebeu um array com os seguintes preços de uma API:

const precos = [
  15, 248, 165, 81, 21, 81, 5, 81, 812, 4, 98, 19, 8, 819, 81, 981, 651, 81,
  681, 8165, 18, 1, 68, 498, 1, 351, 8, 19, 151, 81, 51, 98, 1, 5, 49, 81, 51,
  98, 1, 1684, 168, 8446, 1781, 9193, 918, 91, 681, 7789, 1981, 519, 4, 918, 91,
];

// E queira utilizar o método max do objeto Math para saber qual é o maior preço.

// O método max não aceita arrays como argumetos, apenas numbers. Observe

const retornoTeste = Math.max(10, 20, 30);

console.log(`O maior número é ${retornoTeste}.`);

// Não faria sentido eu digitar cada item do meu array de preços dentro do método max, então, eu utilizo o operador spread para espalhar os argumentos:

const maiorPreco = Math.max(...precos);

console.log(`O maior preço é ${maiorPreco} reais.`);
