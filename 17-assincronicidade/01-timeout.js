// O setTimeOut é um método assíncrono que ativa uma função de callBack após um tempo determinado por nós.

// A partir do segundo parâmetro do nosso setTimeOut podemos passar os argumentos que a função de callBack irá receber:

function imprimirTempoDepois(texto) {
  console.log(texto);
}

setTimeout(imprimirTempoDepois, 2000, "Texto impresso após 2 segundos");

// Repare que o tempo é passado para a função em milissegundos.

// Se não passarmos nenhum tempo para o setTimeOut ele assume o valor 0.

// O valor de espera 0 não significa que o JavaScript irá automaticamente executar o código, pois como o setTimeout é um método assíncrono ele irá para event queue esperar toda a stack principal terminar para só depois ser executado.

// Neste caso em específico o texto está sendo executado exatamente após 2 segundos pois não há nenhum outro item para ser executado na stack.
