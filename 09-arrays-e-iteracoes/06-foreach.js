// Aplicando o método foreach em arrays de objetos.

const carros = [
    {
        nome: 'Mustang',
        preco: 10,
    },
    {
        nome: 'Camaro',
        preco: 20,
    },
    {
        nome: 'Bugatti',
        preco: 30,
    },
];

carros.forEach((currentValue, index) =>
    console.log(
        `O ${currentValue.nome} custa ${currentValue.preco} reais e está na posição ${index}`
    )
);
