// Scope Chain:

// Antes de falar dos escopos em si temos que falar de scope chain. Quando uma função tenta executar uma ação que pede uma variável que não se encontra dentro do seu escopo, ela começa a buscar por essa variável em todos os escopos mais EXTERNOS, até chegar no escopo GLOBAL.

// Ressaltando que não é possível acessar qualquer variável que tenha sido declarada dentro do escopo de uma função, caso você esteja fora deste escopo.

// Porém devido Scope Chain podemos acessar qualquer variável declarada em um escopo mais EXTERNO ao que nos encontramos no momento.

const animal = 'Esquilo';

function retornaNome() {
    return animal;
}

console.log(retornaNome()); // Esquilo
