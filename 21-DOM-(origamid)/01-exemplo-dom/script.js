// Retorne o url da página atual utilizando o objeto window.

console.log(window.location.href);

// Selecione o primeiro elemento da página que possua a classe ativo.

var meuSpan = document.querySelector('.ativo');
console.log(meuSpan);

// Retorne a linguagem do navegador.

var linguagemNavegador = navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela.

console.log(
    `Altura de ${window.innerHeight}px e largura de ${window.innerWidth}px`
);
