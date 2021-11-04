// Quando estamos acessando uma propriedade de um objeto dentro do escopo dele, temos que usar a palavra chave this.

// this faz referência ao próprio objeto.

const objeto = {
    retornaThis() {
        return this;
    },
};

console.log(objeto.retornaThis());

const quadrado = {
    qtdDeLados: 4,
    perimetro(lado) {
        return this.qtdDeLados * lado;
    },
};

// Objetos servem para organizar o código em pequenas partes reutilizáveis. Temos diversos objetos, métodos e propriedades nativos do JavaScript, como por exemplo:

console.log(Math.PI);

console.log(Math.random());

console.log(Math);

console.log();
