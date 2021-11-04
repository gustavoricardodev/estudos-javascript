// Sempre que utilizamos o return dentro de um then ele retorna outra Promise, e isso nos leva a poder utilizar then's encadeados.

// É muito importante entender que o PRÓXIMO then da fila encadeada sempre recebe como argumento o RETORNO do seu then ANTECESSOR exceto o primeiro que recebe como argumento o argumento de resolve, neste caso que a promise está sendo resolvida.

const promessa = new Promise((resolve, reject) => {
    const requisicaoOcorreuBem = true;

    if (requisicaoOcorreuBem) {
        resolve('Eu serei o primeiro argumento do then');
    } else {
        reject('A requisição falhou');
    }
});

promessa
    .then(primeiroRetorno => {
        console.log(primeiroRetorno);
        return 'Eu serei o argumento do segundo then';
    })
    .then(segundoRetorno => {
        console.log(segundoRetorno);
        return 'Eu serei o argumento do terceiro then';
    })
    .then(terceiroRetorno => {
        console.log(terceiroRetorno);
    });

// Podemos utilizar essa funcionalidade de then's encadeados para tratar métodos assíncronos / o retorno de métodos assíncronos.
