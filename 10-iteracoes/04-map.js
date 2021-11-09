// map

// O map é literalmente igual ao foreach quando falamos de sintaxe.

// A sua diferença do foreach é que ele não é uma void-return function.

// Sempre que utilizamos o map em um array ele nos retorna um array com o mesmo tamanho do array original.

// A ideia aqui, é que este novo array esteja modificado, pois caso ele não seja moficado, não faz sentido utilizar o map.

const frutas = [
  {
    nome: "Morango",
    cor: "Vermelho",
    quantidade: 5,
  },
  {
    nome: "Banana",
    cor: "Amarelo",
    quantidade: 15,
  },
  {
    nome: "Uva",
    cor: "Roxo",
    quantidade: 30,
  },
  {
    nome: "Limão",
    cor: "Verde",
    quantidade: 20,
  },
  {
    nome: "Melão",
    cor: "Amarelo",
    quantidade: 2,
  },
];

function formaFrase(currentValue, index) {
  const frase = `${currentValue.nome} está na posição ${index} do array, e tem a cor ${currentValue.cor}`;
  return frase;
}

const arrayModificado = frutas.map(formaFrase);

console.log(arrayModificado);
