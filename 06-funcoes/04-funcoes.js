// Quando falamos de funções é muito importante entender a diferença entre PARÂMETROS e ARGUMENTOS. Ao CRIAR uma função você pode definir PARÂMETROS. Ao EXECUTAR uma função, você pode passar ARGUMENTOS. Segue um exemplo:

function areaQuadrado(lado) {
    return lado * lado;
}
console.log(areaQuadrado(4));

// Neste caso lado é um PARÂMETRO e 4 é um ARGUMENTO.

// Não é obrigatório você definir parâmetros para uma função, mas por outro lado você pode definir mais de um parâmetro.

// Para definir mais de um parâmetro para uma função devemos os separar por vírgulas.

function retornaNomeCompleto(nome, sobrenome, idade) {
    return `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade.`;
}

console.log(retornaNomeCompleto('Jackie', 'Chan', 67));

// Qualquer tipo de dado pode ser definido como parâmetro de uma função, por exemplo um objeto, um number, uma string, outras funções e etc.

// Quando passamos funções como argumento para outras funções, NORMALMENTE utilizamos funções anônimas, que neste contexto são chamadas de funções de callBack.
