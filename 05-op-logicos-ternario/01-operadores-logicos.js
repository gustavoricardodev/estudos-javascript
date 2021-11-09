// Operadores lógicos:

// Os operadores lógicos também retornam um valores booleanos (true ou false).

// !  negação - não
// &&  conjunção - e
// ||  disjuçãos - ou

// Negação:

const teste01 = !false;
console.log(teste01); // true

const teste02 = !true; // false
console.log(teste02);

// Conjunção:

const teste03 = true && true;
console.log(teste03); // true

const teste04 = true && false;
console.log(teste04); // false

const teste05 = false && true;
console.log(teste05); // false

const teste06 = false && false;
console.log(teste06); // false

// Disjunção:

const teste07 = true || true;
console.log(teste07); // true

const teste08 = true || false;
console.log(teste08); // true

const teste09 = false || true;
console.log(teste09); // true

const teste10 = false || false;
console.log(teste10); // false

// Existe uma ordem de execução entre os operadores lógicos, sendo:

// !, &&, ||

// Então para finalizar o que se diz respeito a ordem de execuçao quando falamos de operadores no JavaScript temos:

// Aritmético
// Relacionais
// Lógicos

// Sendo que cada um respeita sua ordem interna de execução.
