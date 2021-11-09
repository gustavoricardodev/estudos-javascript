// Esse objeto do tipo Promise nos permite trabalhar com promessas dentro do JavaScript.

// Este objeto pode assumir, assim como toda promessa, 3 estados.

// O primeiro destes estados, é uma promessa cumprida, resolvida. O segundo estado é uma promessa que não foi cumprida, uma promessa rejeitada. O terceiro e último estado é onde temos uma promessa pendende, que ainda não foi cumprida e nem rejeitada

// Continuando com a estrutura sintática de uma Promise, temos por padrão que a função de callBack que passamos como argumento da função construtora Promise também recebe como argumento outras duas funções. Exemplo:

const promiseTeste = new Promise((resolve, reject) => {});

console.log(promiseTeste);
