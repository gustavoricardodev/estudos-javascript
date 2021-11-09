const quadrado2 = {
  area(lado) {
    return lado * lado;
  },
};

// Vejamos um exemplo simples de como utilizamos os métodos:

const pessoa = {
  saudacao: function (nome) {
    return `Olá, ${nome}.`;
  },
};

const resposta = pessoa.saudacao("Scooby Doo");

console.log(resposta);

// Podemos omitir a palavra function quando estamos criando um método dentro de um objeto.

const pessoa2 = {
  saudacao(nome) {
    return `Boa noite, ${nome}.`;
  },
};

const resposta2 = pessoa2.saudacao("Drácula");

console.log(resposta2);
