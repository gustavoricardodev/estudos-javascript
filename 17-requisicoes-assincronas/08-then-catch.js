// Seguindo esta linha de raciocínio, vamos tentar resolver o exercício anterior utilizando o setTimeOut:

const limparACasa = 'Casa Suja';

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const limparACasa = 'Casa Limpa';

        resolve(limparACasa);
    }, 3000);
});

promessa.then(resposta => {
    console.log(resposta);
    console.log(promessa);
});

// Perceba como o then ficou perguntando a Promise se ela foi resolvida, e assim que ela foi resolvida, recebeu a resposta e printou no nosso console.

// Perceba também como o valor de [[PromiseResult]] agora passou a ser "Casa Limpa".
