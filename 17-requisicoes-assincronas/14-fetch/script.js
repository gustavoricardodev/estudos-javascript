// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

const mostraPreco = document.querySelector('.campo-preco');

function getBitCoin() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(body => {
            mostraPreco.innerText =
                'O preço atual do bitcoin é de: ' +
                Number(body.BRL.last).toFixed(2) +
                ' reais';
            console.log('Atualizei!');
        });
}

getBitCoin();

setInterval(getBitCoin, 30000);
