// O catch por sua vez tem um comportamento muito parecido com o then, porém ao contrário do then, ele é acionado quando ocorre um erro na operação da promise e ela não é resolvida, onde neste caso iremos acionar o método reject.

// A resposta que catch recebe é o valor passado dentro de reject:

const promessa = new Promise(function (resolve, reject) {
    const requisicaoOcorreuBem = false;

    if (requisicaoOcorreuBem) {
        resolve();
    } else {
        reject('Eu sou o argumento "resposta" do catch');
    }
});

console.log(promessa);

promessa.catch(function (response) {
    console.log(response);
});
