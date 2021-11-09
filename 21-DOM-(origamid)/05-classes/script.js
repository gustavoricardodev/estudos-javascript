const menu = document.querySelector('.menu');
console.log(menu);

// menu é um objeto HTMLElement que possui propriedades como o classList que retorna um objeto do tipo DOMTokenList.

console.log(menu.classList);

// classList assim como todo objeto possui propriedades e métodos, os 5 mais utilizados são: add(), remove(), toggle(), contains() e replace().

// O método add() adiciona classes ao elemento selecionado.

menu.classList.add('ativo', 'teste');

// O método remove() remove classes ao elemento selecionado.

menu.classList.remove('azul');

// O método toggle() remove a classe se o elemento tiver e adiciona caso ele não tiver.

menu.classList.toggle('vermelho');

// O método contains() verifica se a classe passada como parâmetro se encontra no elemento e retorna um valor booleano.

var temClasse = menu.classList.contains('menu');
console.log(temClasse);

// O método replace() substitui uma classe por outra

menu.classList.replace('vermelho', 'amarelo');
