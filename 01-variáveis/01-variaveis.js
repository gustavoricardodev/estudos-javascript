// Variáveis são estruturas responsáveis por guardar dados na memória para que possam ser acessados e/ou manipulados em um momento futuro.

// Variáeis servem para que não haja tanta repetição dentro do código, esse é um conceito básico da programação denominado DRY (don't repeat yourself).

// Existem 3 formas diferentes de declarar uma variável no JavaScript, sendo com as palavras chave var, let ou const.

// Vale a pena ressaltar que as palavras chave let e const foram incluídas na linguagem a partir do ES6 (ECMAScript 6).

var nome = 'Goku';
let animal = 'Tigre';
const carro = 'Evoque';

// No JavaScript podemos criar várias variáveis de uma só vez colocando uma vírgula entre as declarações:

let fruta = 'Morango',
    cor = 'Azul',
    comida = 'Pizza';

// Podemos também inicializar uma variável e não atribuir nenhum valor a ela, deste modo ela assume o valor undefined.

var semValor;
console.log(semValor);
