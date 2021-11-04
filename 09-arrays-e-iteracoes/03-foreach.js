// Sempre que eu quiser fazer um forloop por todos os meus itens do meu array eu devo utilizar o foreach.

// Ele é vantajoso em relação ao for convencional pois elimina a responsabilidade de lidar com variáveis de controle.

// O foreach é uma void-return function, ou seja, sempre retorna undefined.

// O foreach recebe como parâmetro uma função de callback que recebe outros 3 parâmetros: currentValue, index, array.

// O currentValue corresponde ao item que está sendo iterado naquele momento.

// O index corresponde a posição daquele item no array.

// O array corresponde ao array que está sendo iterado. Utilizando o parâmetro para trabalhar o array original não é modificado.

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

frutas.forEach(function (currentValue, index, array) {
    console.log(`${currentValue} está na posição ${index}`);
});
