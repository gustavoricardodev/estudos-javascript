// Function Expression:

// Quando uma função não recebe nome e é atribuida a uma expressão, é definida como Function Expression. Por não receberem nome também são chamadas de funções anônimas.

// Executamos esse tipo de função através do nome da variável a qual elas estão atribuidas.

const funcaoExemplo = function (bloco) {
    return bloco;
};
funcaoExemplo();

// Quando tentamos executar uma função declarada como Function Declaration antes da sua declaração elas nos retornam erro, isso também ocorre por conta do Hoisting.

funcaoExemplo2(); // erro, a funcaoExemplo2 ainda não é uma função e sim uma variável com o valor undefined.

var funcaoExemplo2 = function (bloco) {
    return bloco;
};

// Neste contexto é importante falar que a mensagem de erro irá depeneder da forma que a variável que recebe a função foi declarada, seja com var, let ou const.
