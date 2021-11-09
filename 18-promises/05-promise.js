// Agora vamos executar um exemplo para vermos o que acontece com o objeto promiseTeste quando o reject é executado.

const roupas = ["Calça", "Chapéu", "Boné", "Camiseta", "Meias", "Cinto"];

const promiseTeste = new Promise((resolve, reject) => {
  const comprou = roupas.find(currentValue => currentValue === "Blusa");

  if (comprou) {
    resolve();
  } else {
    reject("Você não comprou a camisa");
  }
});

// Repare que um valor foi passado como argumento de reject.
