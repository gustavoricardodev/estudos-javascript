// for

// O for in nos retorna sempre o índice referente ao item que está sendo iterado.

// O for of nos retorna o valor da iteração atual.

console.log("\n");

const pessoas = [
  {
    nome: "Gustavo",
    sobrenome: "Ricardo"
  },
  {
    nome: "Yasmim",
    sobrenome: "Novais"
  },
  {
    nome: "Nick",
    sobrenome: "Bicho Gato"
  }
]

for(testeForIn in pessoas) {
  console.log(` teste for...in: ${ testeForIn } `);
}

console.log("\n");

for(testeForOf of pessoas) {
  console.log(` teste for...of: ${ testeForOf.nome } ${ testeForOf.sobrenome }`);
}

console.log("\n");
