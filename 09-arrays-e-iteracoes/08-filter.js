// O filter também segue a mesma lógica de sintaxe do map e do foreach.

// O filter não é uma void-return function.

// Ao aplicarmos o filter em um array ele pode nos retornar um array do MESMO TAMANHO ou MENOR.

// O filter só retorna um valor quando o teste definido por nós é verdadeiro.

const alunos = [
    {
        nome: 'Gustavo',
        nota: 6,
    },
    {
        nome: 'Yasmim',
        nota: 10,
    },
    {
        nome: 'Nick',
        nota: 2,
    },
    {
        nome: 'Frederico',
        nota: 1.5,
    },
];

const alunosAprovados = alunos.filter(currentValue => currentValue.nota >= 6);

console.log(`Os alunos aprovaram foram ${alunosAprovados}`);
