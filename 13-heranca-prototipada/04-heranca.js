// Já que todas as opções anteriores são inviáveis, o JavaScript nos disponibiliza uma outra forma de adicionar métodos a funções construtoras, bem como adicionar métodos e propriedades a funções construtoras mesmo depois da sua criação, isso é feito através do prototype.

// O prototype nada mais é do que uma propriedade que toda função tem, sendo ela construtora ou não. Essa propriedade é um objeto.

// O objeto prototype nos permite anexar novas propriedades e métodos a uma função construtora de forma que estas propriedades e métodos serão herdados por todas os objetos criados por essa função.

// Ou seja, novos métodos criados a partir de uma função construtora irão herdar métodos e propriedades que estão dentro do objeto prototype da função construtora.

// Por padrão, o que tem dentro da propriedade prototype? A resposta é: uma outra propriedade chamada [[Prototype]] ou __proto__ que aponta para o prototype do seu construtor e uma propriedade chamada constructor que contém a própria função construtora.
