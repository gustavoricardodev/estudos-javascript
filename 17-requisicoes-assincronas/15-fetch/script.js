// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const botaoPiada = document.querySelector('.botao-piada');

const textoPiada = document.querySelector('.texto-piada');

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(body => (textoPiada.innerText = body.value));
}

botaoPiada.addEventListener('click', getJoke);
