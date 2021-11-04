// Em JavaScript existe mais de uma forma de declararmos funções, através das definições de Function Declaration e Function Expression. A Function Expression engloba a Arrow Function. O tipo de declaração difere muito o comportamento da função.

// Function Declaration:

// Quando uma função recebe um nome na sua declaração ela é categorizada como Function Declaration.

function funcaoExemplo(parametros) {
    return parametros;
}
funcaoExemplo();

// Podemos chamar a função mesmo antes da sua criação, isso acontece porque assim como variáveis as funçoes sofrem de Hoisting, logo, as suas declarações são elevadas so topo do codigo assim que ele é executado.

funcaoExemplo2();

function funcaoExemplo2(parametros) {
    return parametros;
}
