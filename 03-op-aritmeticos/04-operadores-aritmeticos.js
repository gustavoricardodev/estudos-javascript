// Concatenação e NaN.

// No caso abaixo o JavaScript está concatenando valores:

const soma = "100" + 50;
console.log(soma); // 10050

// No caso abaixo o JavaScript força a conversão da string "100" para um  dado do tipo number já que não é possível subtrair strings. O mesmo serve para multiplicação e divisão.

const subtracao = "100" - 50;
console.log(subtracao); // 50

// No caso abaixo a string contém algo além de um número, por isso a conversão para um dado do tipo number não é possível. Não sendo possível subtrair um number de uma string o JavaScript nos retorna o valor NaN (Not a Number). O mesmo serve para multiplicação e divisão.

const testeNaN = "100texto" - 50;
console.log(testeNaN);

// É possível verificar se uma variável é NaN com a função isNaN.

console.log(isNaN(testeNaN));
