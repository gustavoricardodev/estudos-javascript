//Desestruturação em Objetos

// A desestruturação de objetos contém detalhes diferentes da desestruturação de arrays.

// Normalmente quando iremos acessar dados de objetos usamos a notação nomeDoObjeto.valor, da seguinte forma:

const pessoa01 = {
    nome: 'Yasmim',
    telefone: 12345678,
    nomeDoPet: 'Nick',
};

const nomePessoa01 = pessoa01.nome;
const telefonePessoa01 = pessoa01.telefone;

console.log(nomePessoa01, telefonePessoa01);

// Podemos também desestruturar os objetos para ter acesso as informações de forma mais fácil

const pessoa02 = {
    nome: 'Gustavo',
    telefone: 987654321,
    nomeDoPet: null,
};

const { nome, telefone } = pessoa02;
console.log(nome, telefone);

// Repare que diferentemente dos arrays o nome das minhas variáveis tem que ser exatamente o nome da propriedade ou função que eu estou tentando acessar dentro do meu objeto

// Por outra via não precisamos que estes valores estejam na mesma ordem emque são declarados dentro do objeto.
