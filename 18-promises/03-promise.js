// Essas duas funções, resolve e reject, serão posteriormente executadas dentro da nossa promise.

const promiseTeste = new Promise((resolve, reject) => {
  //caso a promessa for cumprida
  resolve();

  // caso algum erro acontecer e a promessa não for cumprida
  reject();
});

// Agora podemos dizer que: caso a promessa seja cumprida(resolvida), nós iremos executar a função resolve, e caso a promessa não seja cumprida (rejeitada), nós iremos executar a função reject.

// É importante falar que resolve e reject não são métodos nativos do JavaScript, são apenas callBacks, estes nomes são utlizados por convenção, então podemos utilizar qualquer nome para representar essas funções. A única coisa que devemos sempre respeitar é a ordem dos parâmetros.
