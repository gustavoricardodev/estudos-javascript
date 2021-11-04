// Observe a função abaixo:

function retornarSaudacao(nome) {
    return `Olá, ${nome}, seja bem vindo!`;
}

// Se não passarmos um argumento para essa função, sempre que a executarmos, no meio da nossa frase iremos ter o valor undefined.

console.log(retornarSaudacao());

// Para burlar esse comportamento que pode ser indesejado, podemos definir valores padrão para que a nossa função nunca retorne undefined:

function retornarSaudacao2(nome = 'Goku') {
    return `Olá, ${nome}, seja bem vindo!`;
}

console.log(retornarSaudacao2());

// Isso funciona para todos os tipos de declaração de função.
