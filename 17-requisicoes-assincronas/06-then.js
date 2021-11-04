// Como já vimos, um dos valores que temos como padrão em um objeto do tipo Promise é o [[Prototype]], que aponta para o prototype da função construtora Promise.

// Através dele temos acesso aos dois métodos mais importantes relacionados a Promises, o then e o catch.

// o then, por sua vez é uma função que também recebe como argumento outra função:

// O método then basicamente fica a todo momento perguntando a Promise se ela foi resolvida, caso ela for resolvida acionando a função resolve, o then também é acionado, recebendo uma resposta da promise, essa resposta por sua vez deve ser passada como argumento dentro de resolve:

const promessa = new Promise(function (resolve, reject) {
    const requisicaoOcorreuBem = true;

    if (requisicaoOcorreuBem) {
        resolve('Eu sou o argumento "resposta" do then');
    } else {
        reject();
    }
});

console.log(promessa);

promessa.then(function (resposta) {
    console.log(resposta);
});
