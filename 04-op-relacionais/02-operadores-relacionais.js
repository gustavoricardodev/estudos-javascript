// Ao negar uma sentença duas vezes o JavaScript nos retorna se ela é true ou false.

const resultado = !!{};
console.log(resultado); // true

// Existem alguns casos que sempre retornarão FALSO, sendo eles:

const testeFalse01 = false;
console.log(!!testeFalse01); // false

const testeFalse02 = 0;
console.log(!!testeFalse02); // false

const testeFalse03 = -0;
console.log(!!testeFalse03); // false

const testeFalse04 = NaN;
console.log(!!testeFalse04); // false

const testeFalse05 = null;
console.log(!!testeFalse05); // false

const testeFalse06 = undefined;
console.log(!!testeFalse06); // false

const testeFalse07 = '';
console.log(!!testeFalse07); // false

const testeFalse08 = "";
console.log(!!testeFalse08); // false

const testeFalse09 = ``;
console.log(!!testeFalse09); // false

// E alguns casos que sempre retornarão VERDADEIRO, sendo eles:

const testeTrue01 = true;
console.log(!!testeTrue01); // true

const testeTrue02 = {};
console.log(!!testeTrue02); // true

const testeTrue03 = [];
console.log(!!testeTrue03); // true

const testeTrue04 = 42;
console.log(!!testeTrue04); // true

const testeTrue05 = "algo";
console.log(!!testeTrue05); // true

const testeTrue06 = new Date();
console.log(!!testeTrue06); // true

const testeTrue07 = -42;
console.log(!!testeTrue07); // true

const testeTrue08 = 3.14;
console.log(!!testeTrue08); // true

const testeTrue09 = -3.14;
console.log(!!testeTrue09); // true

const testeTrue10 = Infinity;
console.log(!!testeTrue10); // true

const testeTrue11 = -Infinity;
console.log(!!testeTrue11); // true