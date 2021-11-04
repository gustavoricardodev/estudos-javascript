// Ao criar funções construtoras, podemos assim como funções normais, definir parâmetros, para que futuramente possamos passar alguns argumentos para essa função.

function Veiculo(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const carro = new Veiculo('Evoque', 50000);

const moto = new Veiculo('Hayabusa', 5000);

// Observe que aqui utilizamos a palavra chave this para fazer referência ao novo objeto que estamos criando.

// Veja também que criamos dois novos objetos do tipo Veiculo, separadamente.

console.log(carro);
console.log(moto);
