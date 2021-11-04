// O reduce é um pouco diferente quando a regra de sintaxe dos outros métodos, ele se diferencia por receber um parâmetro a mais.

// O reduce irá receber então 4 parâmetros: accumulator, currentValue, index e array.

// O accumulator é o que se diferencia dos demais, ele sempre recebe como valor o RETORNO DA ÚLTIMA ITERAÇÃO.

// Como na primeira iteração ainda não temos retorno, definimos um valor inicial para o accumulator.

// Caso não seja definido um valor inicial para o accumulator ele PULA A PRIMEIRA ITERAÇÃO.

const precos = [25, 65, 45, 95, 20, 15];

const somaDosPrecos = precos.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

console.log(`A soma de todos os preços resulta em ${somaDosPrecos} reais`);
