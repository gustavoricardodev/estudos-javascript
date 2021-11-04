// Exemplo simples de acesso a um método, ou seja, uma função dentro de um objeto.

const quadrado = {
    area: function (lado) {
        return lado * lado;
    },
};

console.log(quadrado.area(5));

// Podemos omitir a palavra function quando estamos criando um método dentro de um objeto.

const quadrado2 = {
    area(lado) {
        return lado * lado;
    },
};
