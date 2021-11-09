// do while

// O do while é uma estrutura de repetição com teste lógico no final.

// Sem estrutura de repetição:

console.log("Passo 1");
console.log("Passo 2");
console.log("Passo 3");
console.log("Passo 4");
console.log("Passo 5");

// com do while:

let contador = 1;

do {
  console.log(`Passo ${contador}`);
  contador++;
} while (contador <= 5);
