// O valor accumulator pode receber qualquer coisa, desde números simples até strings, arrays e objetos.

const fraseQuebrada = [
  {
    palavra: "Essa",
  },
  {
    palavra: "é",
  },
  {
    palavra: "uma",
  },
  {
    palavra: "frase",
  },
];

function montarFrase(accumulator, currentValue, index) {
  accumulator += currentValue.palavra;
  if (index != fraseQuebrada.length - 1) {
    accumulator += " ";
  } else {
    accumulator += ".";
  }
  return accumulator;
}

const valorRetornado = fraseQuebrada.reduce(montarFrase, "");

console.log(valorRetornado);
