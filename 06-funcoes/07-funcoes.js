// Function declaration

// Quando uma função recebe nome na sua declaração ela é categorizada como function declaration.

function retornaNomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

const nomeCompleto = retornaNomeCompleto("Jackie", "Chan");

console.log(nomeCompleto);

// Podemos executar funções deste tipo mesmo antes da linha em que ela foi criada, isso acontece porque assim como variáveis as funçoes sofrem de Hoisting.

const dobroIdade = dobraIdade(19);

console.log(dobroIdade);

function dobraIdade(idade) {
  return idade * 2;
}
