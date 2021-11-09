// Scope chan:

// Antes de falar dos escopos em si temos que falar de scope chain. Quando uma função tenta executar uma ação que pede uma variável que não se encontra dentro do seu escopo, ela começa a buscar por essa variável em todos os escopos mais externos, até chegar no escopo global.

// Ressaltando que não é possível acessar qualquer variável que tenha sido declarada dentro do escopo de uma função, caso você esteja fora deste escopo.

// Porém devido scope chain podemos acessar qualquer variável declarada em um escopo mais externo ao que nos encontramos no momento.

const animal = "Esquilo";

function retornaAnimal() {
  return animal;
}

console.log(retornaAnimal());
