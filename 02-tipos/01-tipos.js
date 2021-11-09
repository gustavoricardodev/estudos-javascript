// Existem 7 tipos de dados no JavaSript, todos são primitivos, exceto os objetos.

// number - infinity e NaN
// string
// boolean
// undefined
// function
// object - array
// null

// Usando o comando typeof e logo após o nome da variável ou do dado podemos saber o tipo dos mesmos. O dado null irá retornar object (resumindo a história, isso é um bug que ainda é mantido para não quebrar códigos legado).

const nome = "Faustão";
const idade = 12;
const time = null;
const simbolo = Symbol();
const dormindo = false;
const funcao = () => {};
let semValor;

console.log(
  typeof nome,
  typeof idade,
  typeof time,
  typeof simbolo,
  typeof semValor,
  typeof dormindo,
  typeof funcao
);
