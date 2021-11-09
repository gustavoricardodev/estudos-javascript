// Outro pensamento muito comum é achar que para resolver esse problema basta criar novos objetos sempre que necessário, da seguinte forma:

const carro = {
  nome: "Evoque",
  preco: 50000,
};

const moto = {
  nome: "Hayabusa",
  preco: 5000,
};

const caminhonete = {
  nome: "Toro",
  preco: 10000,
};

// Isso pode soar interessante em um primeiro momento, mas se torna um trabalho complicado quando necessitamos de mais objetos.

// Para criar poucos objetos, com poucas propriedades e poucos métodos não temos tantos problemas, agora imagine o trabalho que teríamos para criar centenas de objetos, cada um com dezenas de propriedades e métodos.

// Para resolver esse problema existem as funções construtoras. Essas funções são responsáveis pela criação e NOVOS objetos sempre que as invocamos.
