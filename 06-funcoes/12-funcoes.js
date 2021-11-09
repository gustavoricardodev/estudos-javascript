// Antes de tudo é importante entender rapidamente um objeto de funções, denominado arguments.

function formarFrase(nome, sobrenome, idade) {
  console.log(arguments);
  return `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;
}

console.log(formarFrase("Jackie", "Chan", 67));

// Como pudemos ver, arguments nada mais é do que um objeto que contém todos os argumentos da função.

// Ele pode ser utilizado da forma que quisermos para qualquer tipo de operação.
