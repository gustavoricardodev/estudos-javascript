// Como já vimos uma promise pode assumir 3 estados:

// pending (pendente): estado inicial, que não foi realizada nem rejeitada. Nem o resolve e nem o reject foram executados.

// fulfilled (realizada): sucesso na operação. Neste caso o resolve foi executado.

// rejected (rejeitada): falha na operação. Neste caso o reject foi executado.

// Vamos primeiramente executar o resolve em um exeplo simples para que a promise assuma o estado fullfilled.

const convidados = [
  "Tony Stark",
  "Lady Gaga",
  "Scooby Doo",
  "Baianinho de Mauá",
  "O incrível Hulk",
];

const promiseTeste = new Promise((resolve, reject) => {
  const naLista = convidados.find(currentValue => currentValue === "Lady Gaga");

  if (naLista) {
    resolve("Shallow Now");
  } else {
    reject();
  }
});

console.log(promiseTeste);

// Repare que um valor foi passado como argumento de resolve.
