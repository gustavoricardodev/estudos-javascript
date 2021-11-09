// Exemplo de arrays de objetos:

const frutas = [
  {
    nome: "Morango",
    cor: "Vermelho",
  },
  {
    nome: "Banana",
    cor: "Amarelo",
  },
  {
    nome: "Limão",
    cor: "Verde",
  },
  {
    nome: "Uva",
    cor: "Roxo",
  },
];

console.log(`O array é ${frutas}.`);

console.log(`O item na primeira posição é ${frutas[0]}.`);

console.log(`O nome da primeira fruta é ${frutas[0].nome}.`);

console.log(`A cor da última fruta é ${frutas[frutas.length - 1].cor}.`);
