// Podemos declarar funções separadas e passá-las como argumento do foreach. As funções irão seguir as regras e ordem dos argumentos.

// Podemos fazer isso de várias formas, com function declarations ou functions expressions.

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

// Function Declaration:

function retornaPosicaoENome(currentValue, index) {
    console.log(`${currentValue} está na posição ${index}`);
}

// Function Expression Convencional:

var retornaApenasPosicao = function (currentValue, index) {
    console.log(`Posição ${index}`);
};

// Function Expression Arrow Function:

var retornaApenasNome = currentValue =>
    console.log(`O nome da fruta é ${currentValue}`);

// Executando foreach:

frutas.forEach(retornaPosicaoENome);
frutas.forEach(retornaApenasPosicao);
frutas.forEach(retornaApenasNome);
