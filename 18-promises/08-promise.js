// O catch por sua vez tem uma sintáxe muito parecida com o then, porém ao contrário do then, ele é acionado quando ocorre um erro na operação da promise e ela não é resolvida, onde neste caso iremos acionar o método reject.

// A resposta que catch recebe é o valor passado dentro de reject:

let estado = "dormindo";

const promiseTeste = new Promise((resolve, reject) => {
  function verificaEstado() {
    if (estado === "acordado") {
      resolve(estado);
    } else {
      reject(estado);
    }
  }

  setTimeout(() => {
    estado = "não conseguiu acordar";
    verificaEstado();
  }, 2000);
});

promiseTeste
  .then(resposta => {
    console.log(resposta);
    console.log(promiseTeste);
  })
  .catch(resposta => {
    console.log(resposta);
    console.log(promiseTeste);
  });
