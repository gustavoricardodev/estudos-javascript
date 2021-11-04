// Exercícios de fixação:

// Transforme o objeto abaixo em uma Constructor Function:

const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    },
};

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        return nome + ' andou';
    };
}

// Crie 3 pessoas, João: 20 anos, Maria: 25 anos, Gabriel: 15 anos.

const Joao = new Pessoa('Joao', 20);
const Maria = new Pessoa('Maria', 25);
const Gabriel = new Pessoa('Gabriel', 15);

console.log(Joao.idade, Joao.andar());

// Crie uma Constructor Function chamada Dom para manipulação de listas de elementos do dom. Ela deve conter as seguintes propriedades e métodos:

// elements() -> retorna NodeList com os elementos selecionados.
// addClass() -> adiciona a classe a todos os elementos.
// removeClass -> remove a classe a todos os elementos.

function ManipulaElemento(elemento) {
    this.elements = function () {
        return document.querySelectorAll(elemento);
    };

    this.addClass = function (classe) {
        this.elements().forEach(cadaElemento => {
            cadaElemento.classList.add(classe);
        });
        return 'classes adicionadas';
    };

    this.removeClass = function (classe) {
        this.elements().forEach(cadaElemento => {
            cadaElemento.classList.remove(classe);
        });
        return 'classes removidas';
    };
}

const lis = new ManipulaElemento('li');
console.log(lis.elements());
lis.addClass('teste');
