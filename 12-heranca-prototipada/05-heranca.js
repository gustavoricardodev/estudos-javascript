// Vamos observar o que existe dentro do prototype de uma função pura:

function pular() {}

console.log(pular.prototype);

// Agora vamos criar uma função construtora com algumas propriedades e ver o que existe dentro de prototype:

function Veiculo(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

console.log(Veiculo.prototype);

// Podemos ver que ambas as funções tem a mesma coisa dentro de prototype, já que ainda não adicionamos nada ao prototype dessas funções

// Agora vamos criar um novo objeto e ver o que tem no prototype desste objeto:

const carro = new Veiculo('Evoque', 50000);

console.log(carro.prototype); // undefined

// Vemos que não tem nada, pois como já foi dito anteriormente a propriedade prototype existe somente em funções.
