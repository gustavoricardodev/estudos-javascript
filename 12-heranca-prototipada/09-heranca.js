// Finalmente, é muito importante é entender sempre com que tipo de dado estamos lidando, pois todos os métodos e propriedades que iremos utilizar ao trabalhar com este dado são herdados do prototype do seu construtor.

const carro = {
    nome: 'Evoque',
    preco: 50000,
    temCombustivel: true,

    andar() {
        return 'Andou';
    },
};

carro; // Construido a partir da função construtora Object, dessa forma, herda métodos e propriedades da cadeia de protótipo do seu construtor.

carro.nome; // Construido a partir da função construtora String.

carro.preco; // Construido a partir da função construtora Number.

carro.temCombustivel; // Construido a partir da função construtora Boolean.

carro.andar; // Construido a partir da função construtora Function.

carro.andar(); // Construido a partir da função construtora String.

// É importante frisar que não existe um constructor nem para null e nem para undefined.
