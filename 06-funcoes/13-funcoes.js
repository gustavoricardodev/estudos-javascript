// rest

// O operador rest é basicamente um parânetro que nos permite dizer para a função que ela pode receber um número indefinido de argumentos.

// Ele agrupa todos esses argumentos remanescentes em um array para que possa ser utilizado da forma que quisermos.

// É importante falar que cada função só pode ter um operador rest, como também o operador reste sempre tem que ser o último parâmetro da função.

// Este operador é indicado a partir de três pontos.

function testeRest(...dados) {
  return dados;
}

const retorno = testeRest("Jackie Chan", 80, { fruta: "Cereja" });

console.log(retorno);

// Vejamos mais um exemplo básico:

function somarSalarios(...salarios) {
  const totalAPagar = salarios.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  });
  return totalAPagar;
}

const totalAPagar = somarSalarios(1000, 1500, 2000, 1250, 4000, 7000, 5500);

console.log(totalAPagar);

// É importante entender a diferença entre o rest e o objeto arguments:

// Arguments contém todos os argumetos da função, enquanto o rest apenas os argumentos remanescentes.

// O objeto arguments não é um array, já o rest sim, o que nos permite trabalhar com todos os métodos de array.
