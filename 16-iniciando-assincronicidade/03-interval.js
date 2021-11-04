// O setInterval é um método que ativa uma função de callBack repetidamente respeitando um intervalo definido por nós.

// A partir do terceiro parâmetro do nosso setInterval podemos passar os argumentos que a função de callBack irá receber:

function imprimindoEmLoop(texto) {
    console.log(texto);
}

setInterval(imprimindoEmLoop, 2000, '2 segundos se passaram');
