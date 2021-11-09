// Um ponto muito válido de início é não entender a utilizade das promises, já que todas as operações que foram feitas anteriormente poderiam ter sido feitas com um simples if else.

// As promises passam a fazer mais sentido quando tratamos de operações assíncronas. Exemplo:

let estado = "dormindo";

const promiseTeste = new Promise((resolve, reject) => {
  setTimeout(() => {
    estado = "acordado";
    resolve(estado);
  });
});

console.log(promiseTeste);

// Observe que no caso acima, no nosso console, a promise está como pendente, mesmo com o resolve sendo executado.

// O que ocorre é que resolve foi sim executado, porém, só depois do console.log. Isso ocorre pois o JavaScript não esperou os 3 segundos terminarem para só depois continuar a execução do código. (assincronicidade).

// Para ter acesso ao que for retornado da minha promise existem dois métodos do construtor Promise que nos ajudam a resolver este problema.
