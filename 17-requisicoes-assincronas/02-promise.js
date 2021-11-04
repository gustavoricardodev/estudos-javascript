// Mas afinal de contas, o que é uma Promise?

// Com nome muito autoexplicativo, uma Promise nada mais é do que uma promessa.

// Como toda promessa, aqui temos duas opções, a primeira é que ela cumprida (resolvida), e a segunda é que ela não seja cumprida (rejeitada).

// A função de callBack que passamos como argumento da função construtora Promise também recebe como argumento outras duas funções:

const promessa = new Promise(function (resolve, reject) {});

// Agora podemos dizer que: caso a promessa seja cumprida(resolvida), nós iremos executar a função resolve e caso a promessa não seja cumprida (rejeitada), nós iremos executar reject.

// resolve e reject não são métodos nativos do JavaScript, são apenas callBacks, estes nomes são utlizados por convenção, então podemos utilizar qualquer nome para representar essas funções. A única coisa que devemos sempre respeitar é a ordem dos parâmetros.
