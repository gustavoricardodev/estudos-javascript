// O método especial constructor recebe todos os parâmetros que definirmos na criação da classe e o restante das propriedades que vão ser exportadas ou não. Segue um exemplo:

// Tirando o método especial constructor, todos os outros dados que passamos dentro uma classe são adicionados ao prototype da função construtora que está sendo utilizada por baixo dos panos, o que nos adianta muito tempo e ajuda a evitar erros.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    retornaFrase() {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`;
    }
}

const eu = new Pessoa('Gustavo', 19);

console.log(eu.retornaFrase());

// Mesmo que já tenha sido falado é importante explicitar que para classes this funciona da mesma maneira que em funções construtoras. Ele aponta sempre para o novo objeto que está sendo criado com a palavra chave new.
