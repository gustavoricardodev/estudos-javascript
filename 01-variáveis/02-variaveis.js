// O JavaScript tem uma tipagem dinâmica, ou seja, nós não precisamos dizer a ele que tipo de dado estamos atribuindo a uma variável.

const profissao = 'Astronauta';
const idade = 19;
const acordado = true;

// Para nomear variáveis podemos começar com $, _ ou letras.

// Variáveis podem conter números mas não podem iniciar com eles.

// Não podemos utilizar palavras reservadas como function ou if para nomear variáveis.

// O JavaScript é case sensitive, letras maiúsculas e minúsculas são interpretadas de forma diferente.

// Seguem alguns exemplos de variáveis declaradas com as regras acima.

const bola50 = 50;
const $fruta = 'Goiaba';
const _numeroCasa = 180;
const dormindo = false;

console.log(bola50, $fruta, _numeroCasa, acordado);

// É uma boa prática escolher um padrão de nomenclatura para as variáveis.

const camelCase = 'camel case';
const PascalCase = 'pascal case';
const CONSTANT_CASE = 'constant case';
const snake_case = 'snake case';
const flatcase = 'flat case';

// O kebab case não é uma boa ideia em JavaScript já que ele entende o hífen como um sinal de menos.

// Exceto as regras de escopo e hoisting que serão vistas posteriormente, seguem as definições de cada tipo de declaração de variáveis:

// var: aceita reatribuições e redeclarações.

// let: aceita reatribuições mas não redeclarações.

// const: não aceita reatribuições nem redeclarações.
