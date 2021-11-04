// É pela existência de prototypes que sempre que criamos um novo objeto e colocamos um ponto na frente dele o browser ou a IDE nos recomenda diversos métodos e propriedades que não colocamos nele. Aqueles métodos e propriedades são herdados do prototype da função utilizada para criar o nosso objeto.

// Agora fica uma dúvida, o que acontece quando um método com mesmo nome existe tanto no objeto quando no prototype do seu construtor?

function Veiculo(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    this.andar = function () {
        return 'Andou do próprio objeto';
    };
}

Veiculo.prototype.andar = function () {
    return 'Andou do prototype da função construtora de objeto';
};

const moto = new Veiculo('Hayabusa', 5000);

console.log(Veiculo.prototype);
console.log(moto);

// Observe que neste caso o método andar existe tanto no próprio objeto, quanto no prototype do seu construtor.

// Vamos executar o método andar:

console.log(moto.andar()); // 'Andou do próprio objeto'

// Analisando o resultado podemos chegar a conclusão de que primeiro a engine do JavaScript procura o método no próprio objeto, e SÓ SE O MÉTODO NÃO FOR ENCONTRADO ele começa a procurar na cadeia de protótipos do objeto.
