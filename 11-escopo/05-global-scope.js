// Global Scope:

// O escopo global é o maior escopo do JavaScript, ele engloba todos os outros escopos.

// Variáveis declaradas dentro do escopo global, na grande maioria dos casos são visíveis em todo o restante do código, isso ocorre devido ao Scope Chain.

// Exemplo com Block Scope:

const fruta = "Amora";

{
  console.log(fruta); // Amora
}

// Exemplo com Function Scope:

const animal = "Esquilo";

function retornaNome() {
  return animal;
}

console.log(retornaNome()); // Esquilo
