// while

// O while é uma estrutura de repetição com teste lógico no início.

// Sem estrutura de repetição:

console.log("Passo 1");
console.log("Passo 2");
console.log("Passo 3");
console.log("Passo 4");
console.log("Passo 5");

// Com while:

let contador = 1;

while (contador <= 5) {
  console.log(`Passo ${contador}`);
  contador++;
}
