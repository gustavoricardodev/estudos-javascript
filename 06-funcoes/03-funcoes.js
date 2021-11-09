// As funções PODEM ou NÃO retornar um valor, muitas das vezes elas irão apenas executar alguns processo sem retornar nada.

// Funções que não tem um return definido, por padrão, são denominadas void-return functions e retornam undefined sempre que executadas.

let numero = 5;

function adicionaDois() {
  numero += 2;
}

const retorno = adicionaDois();

console.log(retorno);
console.log(numero);
