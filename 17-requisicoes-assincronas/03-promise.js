// Por padrão uma promise pode assumir 3 valores (MDN):

// pending (pendente): estado inicial, que não foi realizada nem rejeitada. Nem o resolve e nem o reject foram executados.
// fulfilled (realizada): sucesso na operação. Neste caso o resolve foi executado.
// rejected (rejeitado): falha na operação. Neste caso o reject foi executado.

// Dentro de uma Promise nós podemos escrever o código que quisermos e chamar a função resolve ou reject dependendo do comportamento que quisermos que o código tenha.

// Neste caso, vamos ver o que ocorre com as propriedades do nosso objeto quando a promise é resolvida:

let ItensComprados = ['Camisa', 'Tênis', 'Calça', 'Boné', 'Meias'];

const promessa = new Promise((resolve, reject) => {
    const comprouCamisa = ItensComprados.find(
        currentValue => currentValue === 'Camisas'
    );

    if (comprouCamisa) {
        resolve('Obrigado por ter lembrado');
    } else {
        reject('Você não cumpriu a promessa');
    }
});

console.log(promessa);

// Repare que a partir do momento que executamos o resolve o valor de [[PromiseState]] passa a ser fulfilled, o que significa que a promisse foi resolvida com sucesso.

// Repare também que [[PromiseResult]] agora tem o valor que passamos como argumento para resolve.
