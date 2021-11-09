// Não é obrigatório você definir parâmetros para uma função, mas por outro lado você pode definir mais de um parâmetro.

// Para definir mais de um parâmetro para uma função devemos os separar por vírgulas.

// Qualquer tipo de dado pode ser definido como parâmetro de uma função, por exemplo um objeto, um number, uma string, outras funções e etc.

// Quando passamos funções como argumento para outras funções, NORMALMENTE utilizamos funções anônimas, que neste contexto são chamadas de funções de callBack.

function retornaApresentacao(nome, sobrenome, idade) {
  return `Meu nome é ${nome} ${sobrenome}, eu tenho ${idade} anos de idade`;
}

const pessoa = retornaApresentacao("Jackie", "Chan", 67);

console.log(pessoa);
