// Os operadores relacionais retornam valores booleanos (true ou false):

// >   Maior
// <   Menor
// >=  Maior ou igual
// <=  Menor ou igual
// ==  Comparação não estrita
// !=  Diferente
// === Comparação estrita

const teste01 = 5 > 2; // true
const teste02 = 7 < 4; // false
const teste03 = 8 >= 8; // true
const teste04 = 9 <= 7; // false
const teste05 = 5 == 5; // true
const teste06 = 5 == '5'; // true
const teste07 = 5 === '5'; // false
const teste08 = 5 === 5; // true
const teste09 = !!{} == true; // true
const teste10 = !!' ' == true; // true

console.log(
    teste01,
    teste02,
    teste03,
    teste04,
    teste05,
    teste06,
    teste07,
    teste08,
    teste09,
    teste10
);

// Ao comparar diferentes tipos o JavaScript tenta converter tudo para number, nas comparações acima isso é possível, já que a string "5" contém apenas um número e consegue ser convertida pelo JavaScript.

// Caso essa conversão não seja possível o JavaScript irá comprarar dois tipos distintos (number com string), essa comparação ocorre de uma forma diferente ao convencioal, através do dicionário de codificação Unicode.
