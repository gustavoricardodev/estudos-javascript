// Um ponto muito válido de início é não entender a utilizade das promises já que todas as operações que foram feitas anteriormente poderiam ter sido feitas com um simples if else.

// As promises passam a fazer mais sentido quando tratamos de operações assíncronas, vamos ver um exemplo onde a assincronicidade nos atrapalha:

const limparACasa = 'Casa Suja';

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const limparACasa = 'Casa Limpa';

        resolve(limparACasa);
    }, 3000);
});

console.log(promessa);

// Observe que no caso acima o valor de [[PromiseState]] continua pending, ou seja, ela não foi resolvida. Por consequência disso o valor de [[PromiseResult]] continua undefined.

// O que ocorre é que resolve foi sim executado, porém, só depois do console.log. Isso ocorre pois o JavaScript não esperou os 3 segundos terminarem para só depois continuar a execução do código. (assincronicidade).

// Para ter acesso ao que for retornado da minha promise existem dois métodos do construtor Promise que nos ajudam a resolver este problema.
