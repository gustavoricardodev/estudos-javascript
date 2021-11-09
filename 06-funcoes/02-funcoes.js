// Quando o código dentro de uma função está sendo executado e o JavaScript encontra um return, ele para a execução da função naquele momento e faz o retorno dos dados.

let numero = 10;

function exemplo() {
  numero += 10;
  return "Return encontrado";
  numero += 10;
}

const retorno = exemplo();

console.log(numero);
console.log(retorno);
