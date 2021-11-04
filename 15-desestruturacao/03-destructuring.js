// Exercício de fixação

class Pessoa {
    constructor(nome, telefone, nomeDoPet) {
        this.nome = nome;
        this.telefone = telefone;
        this.nomeDoPet = nomeDoPet;
    }
}

const pessoa01 = new Pessoa('Yasmim', 123456789, 'Nick');
const pessoa02 = new Pessoa('Gustavo', 987654321);

// Função que define como parâmetros a recepção de argumentos não desestruturados.

// Perceba que nesse caso estamos repetindo a palavra pessoa diversas vezes, em funções maiores isso pode poluir o código.

function imprimeDadosConvencional(pessoa) {
    let dados = `A pessoa se chama ${pessoa.nome}, para entrar em contato ligue em ${pessoa.telefone}`;
    if (pessoa.nomeDoPet) {
        dados += `, o nome do pet dessa pessoa é ${pessoa.nomeDoPet}`;
    }
    console.log(dados);
}

imprimeDadosConvencional(pessoa01);

// Já nesse caso, com os dados desestruturados, temos acesso direto ao nome dos valores que necessitamos.

function imprimeDadosDesestruturados({ nome, telefone, nomeDoPet }) {
    let dados = `A pessoa se chama ${nome}, para entrar em contato ligue em ${telefone}`;
    if (nomeDoPet) {
        dados += `, o nome do pet dessa pessoa é ${nomeDoPet}`;
    }
    console.log(dados);
}

imprimeDadosDesestruturados(pessoa02);
