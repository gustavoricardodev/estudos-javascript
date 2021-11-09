// Quando estamos acessando uma propriedade de um objeto dentro do escopo dele, temos que usar a palavra chave this.

// this faz referência ao próprio objeto.

const objetoPadrao = {
  retornaThis() {
    return this;
  },
};

const retorno = objetoPadrao.retornaThis();

console.log(retorno);

// Exemplo

const pessoa = {
  nome: "Jackie",
  sobrenome: "Chan",
  retornaNomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

const nomeCompleto = pessoa.retornaNomeCompleto();

console.log(nomeCompleto);
