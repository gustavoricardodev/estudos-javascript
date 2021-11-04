// As funções PODEM ou NÃO retornar um valor, muitas das vezes elas irão apenas executar alguns processo sem retornar nada.

// Funções que não tem um return definido, por padrão, são denominadas void-return functions e retornam undefined sempre que executadas. Um exemplo muito claro desse tipo de função é a função log() do objeto console.

// É pelo motivo citado acima que sempre que executamos console.log('texto') no nosso browser, junto ao texto imprimido, também vemos um undefined.

let num = 4;

function somaDois() {
    num += 2;
}

// Pensando no contexto do console do browser:

somaDois(); // undefined

console.log(num); // 6 undefined

// É uma boa prática que funções retornem sempre o mesmo tipo de dado.
