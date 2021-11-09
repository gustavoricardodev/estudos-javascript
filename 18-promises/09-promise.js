// Sempre que utilizamos o return dentro de um then ele retorna outra Promise, e isso nos leva a poder utilizar then's encadeados.

// É muito importante entender que o próximo then da fila encadeada sempre recebe como argumento o retorno do seu then antecessor, exceto o primeiro que recebe como argumento o argumento de resolve, neste caso que a promise está sendo resolvida.

const estado = true;

const promiseTeste = new Promise((resolve, reject) => {
  function verificaEstado() {
    if (estado) {
      resolve("Eu serei o argumento do primeiro then");
    } else {
      reject("Promise não resolvida");
    }
  }

  setTimeout(() => {
    verificaEstado();
  }, 2000);
});

promiseTeste
  .then(primeiroRetornoThen => {
    console.log(primeiroRetornoThen);
    return "Eu serei o argumento do segundo then";
  })
  .then(segundoRetornoThen => {
    console.log(segundoRetornoThen);
    return "Eu serei o argumento do terceiro then";
  })
  .then(terceiroRetornoThen => {
    console.log(terceiroRetornoThen);
  })
  .catch(respostaReject => {
    console.log(respostaReject);
  });

// Podemos utilizar essa funcionalidade de then's encadeados para tratar métodos assíncronos / o retorno de métodos assíncronos.
