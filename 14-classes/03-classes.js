// Existe mais uma palavra chave que faz parte do contexto das classes no JavaScript, static.

// Métodos estáticos são chamados sem que haja a necessidade da criação de um objeto, já que eles estão ligados diretamente a classe que estamos criando

class Veiculo {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    andar() {
        return 'Andou';
    }
    static frear() {
        return 'Freou';
    }
}

// Agora vamos criar um novo objeto to tipo Veiculo:

const caminhonete = new Veiculo('Toro', 20000);

// Agora observe que a função andar está dentro do protoype da função, mas caminhonete não tem acesso a frear

console.log(caminhonete);

// Mas agora observe que o método faz parte exclusivamente do construtor Veiculo:

console.log(Veiculo.frear());

// Um método muito famoso implementado dessa forma é o from da função construtora Array: Array.from().
