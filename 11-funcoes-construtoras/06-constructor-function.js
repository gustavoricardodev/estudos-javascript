// Nós podemos criar propriedades e métodos protegidos dentro de nossas funções construtoras, observe:

function Fruta(nome, peso, quantidade) {
    this.nome = nome;
    this.peso = peso;
    this.quantidade = quantidade;

    const pesoTotal = this.peso * this.quantidade;

    this.pesoFinal = pesoTotal + ' kilos';
}

// Observe que na função construtora acima, a variável pesoTotal não está sendo exportada, isso ocorre pois não estamos utilizando a palavra chave this juntamente a ela. Desta forma ela não será atribuída a qualquer novo objeto criado a partir da função construtora Fruta.

// Mesmo assim, ainda podemos utilizar pesoTotal dentro da função construtora, para realizar cálculos  na hora de instanciar um novo objeto, observe:

const melancia = new Fruta('Melancia', 5, 3);

console.log(melancia);
