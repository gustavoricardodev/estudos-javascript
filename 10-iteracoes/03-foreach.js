// Podemos declarar as funções fora do foreach e passá-las como argumento da função de callback do mesmo. A única regra é que a funções irão seguir as regras e ordem dos parâmetros padrões do método.

// Também podemos utilizar qualquer tipo de declaração para fazer isso.

// Isso serve para todos os seguintes métodos, o foreach está sendo apenas um exemplo.

const frutas = [
  {
    nome: "Morango",
    cor: "Vermelho",
    quantidade: 5,
  },
  {
    nome: "Banana",
    cor: "Amarelo",
    quantidade: 15,
  },
  {
    nome: "Uva",
    cor: "Roxo",
    quantidade: 30,
  },
  {
    nome: "Limão",
    cor: "Verde",
    quantidade: 20,
  },
  {
    nome: "Melão",
    cor: "Amarelo",
    quantidade: 2,
  },
];

function retornaNome(currentValue) {
  console.log(currentValue.nome);
}

const retornaCor = function (currentValue) {
  console.log(currentValue.cor);
};

const retornaQuantidade = currentValue => console.log(currentValue.quantidade);

console.log("O array contem as seguintes frutas:");
frutas.forEach(retornaNome);

console.log("\nCom as respectivas cores:");
frutas.forEach(retornaCor);

console.log("\nNas respectivas quantidades:");
frutas.forEach(retornaQuantidade);
