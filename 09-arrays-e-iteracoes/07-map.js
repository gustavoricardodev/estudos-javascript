// O map é literalmente igual ao foreach quando falamos de sintaxe.

// A sua diferença do foreach é que ele não é uma void-return-function.

// Sempre que utilizamos o map em um array ele nos retorna um array COM O MESMO TAMANHO.

const frutas = [
    'Maça',
    'Banana',
    'Uva',
    'Pera',
    'Melancia',
    'Laranja',
    'Caju',
    'Amora',
    'Morango',
];

const retornoMap = frutas.map(currentValue => currentValue + ' é uma fruta');

console.log(retornoMap);

// Segundo exemplo:

const precos = [100, 230, 542, 120, 920];

const precosComDesconto = precos.map(
    (currentValue, index) =>
        `O preço do item ${index}, avaliado em ${currentValue} reais, com desconto, é de ${
            currentValue * 0.8
        } reais`
);

console.log(precosComDesconto);
