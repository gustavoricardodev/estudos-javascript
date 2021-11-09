// Em algumas situções, podemos ter alguns erros no nosso código caso algum argumento falte quando executamos uma função.

// Perceba que no caso abaixo, temos como retorno da função o valor undefined, pois o valor b não foi informado na execução da função.

function somar(a, b) {
  return a + b;
}

const resultadoSoma = somar(5);

console.log(resultadoSoma);

// Erros como esse podem ser evitados com um método que nos permite passar valores padrão para os parâmetros de uma função, que serão utilizados caso o usuário não os informe.

function subtrair(a, b = 2) {
  return a - b;
}

const resultadoSub = subtrair(10);

console.log(resultadoSub);

// Perceba agora que se passarmos os argumentos corretos para a função, ela desconsidera o valor padrão e utiliza nosso argumento.

function dividir(a, b = 10) {
  return a / b;
}

const resultadoDiv = dividir(10, 2);

console.log(resultadoDiv);
