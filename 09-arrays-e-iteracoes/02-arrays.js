// Exemplo de array de objetos:

const carros = [
    {nome: "Mustang", preco: 10},
    {nome: "Camaro", preco: 20},
    {nome: "Bugatti", preco: 30}
];

console.log(`O array de carros é: ${ carros }`);
console.log(`O nome do segundo carro é ${ carros[1].nome }`);

// Exemplo de arrays de objetos com outra formatação:

const pessoas = [ {nome: "Gustavo", idade: 19}, {nome: "Yasmim", idade: 17}, {nome: "Frederico", idade:90} ];

console.log(`O array de pessoas é: ${ pessoas }`);
console.log(`A idade da última pessoa é: ${ pessoas[pessoas.length - 1].idade } anos`);

// Exemplo de arrays de objetos com outra formatação (mais comum):

const linguagens = [
    {
        nome: "JavaScript",
        atua: "BackEnd & FrontEnd"
    },
    {
        nome: "PHP",
        atua: "BackEnd"
    },
    {
        nome: "Python",
        atua: "BackEnd"
    }
];

console.log(`O arrays de linguagens é: ${linguagens}`);
console.log(`A primeira linguagem de programação atua no ${linguagens[0].atua}`);
