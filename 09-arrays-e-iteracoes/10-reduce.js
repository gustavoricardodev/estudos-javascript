// O valor accumulator pode receber qualquer coisa, desde números simples até strings, arrays e objetos.

const fraseQuebrada = [
    {
        palavra: 'Essa',
    },
    {
        palavra: 'é',
    },
    {
        palavra: 'uma',
    },
    {
        palavra: 'frase',
    },
];

const fraseInteira = fraseQuebrada.reduce(
    (accumulator, currentValue) => accumulator + ' ' + currentValue.palavra,
    ''
);

console.log(fraseInteira);
