// Function expression

// Quando uma função não recebe nome e é atribuida a uma expressão, é definida como function expression.

// Por não receberem nome também são chamadas de funções anônimas.

// Executamos esse tipo de função através do nome da variável a qual elas estão atribuidas.

const retornaNomeCompleto = function (nome, sobrenome) {
  return nome + " " + sobrenome;
};

const nomeCompleto = retornaNomeCompleto("Bruce", "Lee");

console.log(nomeCompleto);

// Não podemos executar este tipo de função antes de sua declaração, isso também ocorre por conta do Hoisting.
