// Vamos ver agora, p que valor [[PromiseState]] e [[PromiseResult]] assumem caso a Promise não seja resolvida e a função reject seja executada:

const itensDoMercado = ['Arroz', 'Tomate', 'Leite', 'Frutas'];

const promessa = new Promise((resolve, reject) => {
    const comprouChocolate = itensDoMercado.find(
        currentValue => currentValue === 'Chocolate'
    );

    if (comprouChocolate) {
        resolve('Obrigado, eu adoro chocolate');
    } else {
        reject('Você não deveria ter esquecido!');
    }
});

console.log(promessa);

// Repare que a partir do momento que executamos o reject o valor de [[PromiseState]] passa a ser rejected, o que significa que ocorreu uma falha ou erro na operação.

// Repare também que [[PromiseResult]] agora tem o valor que passamos como argumento para reject, que por sua vez é  tembém exibido no erro que aparece no nosso console.
