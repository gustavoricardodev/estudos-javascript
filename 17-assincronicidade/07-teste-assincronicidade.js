function travarStack(tempo) {
  let futuro = Date.now() + tempo;

  while (Date.now() < futuro) {
    // "Enquanto o tempo não passar, não faça nada".
  } // Vai bloquear a Stack enquanto a condição for verdadeira.

  console.log("Fim dessa linha de execução");
}

// Chamando duas funções assíncronas que vão para a event queue:

setTimeout(() => {
  console.log("Primeiro setInterval");
}, 3000);

setTimeout(() => {
  console.log("Segundo setInterval");
}, 2000); // Irá ter prioridade para o event loop pois termina primeiro.

// Chamando função que irá travar a stack principal:

travarStack(5000);

// Por conta de um JavaScript ter apenas uma thread de execução, quando declaramos um setTimeOut por exemplo, nada garante que aquele código irá ser executado EXATAMENTE depois daquele tempo, porém, pelo menos depois daquele tempo. Como sendo um método assíncrono o setTimeOut irá esperar toda a stack principal do JavaScript ficar vazia para só depois ser executado.
