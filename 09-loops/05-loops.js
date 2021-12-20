// for

// O for in é utilizado para casos onde queremos manipular as posições e valores de arrays, ele nos retorna apenas o valor da índice do valor atual.

// o for of nos retorna o valor em si da iteração atual.

const numeros = [10, 20, 30, 40, 50];

console.log("for...in");

for (numero in numeros) {
  console.log(numero);
}

console.log("for...of");

for(numero of numeros) {
  console.log(numero);
}
