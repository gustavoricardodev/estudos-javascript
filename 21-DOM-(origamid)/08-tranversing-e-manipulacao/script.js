// Antes de prosseguir com transversing e manipulação é muito importante entender 3 propriedades do dom, o outerHTML, innerHTML e o innerText.

const menu = document.querySelector('.menu');

const testeOuterHtml = menu.outerHTML; // Retorna todo o HTML do elemento selecionado
console.log(testeOuterHtml);

const testeInnerHtml = menu.innerHTML; // HTML interno do elemento selecionado
console.log(menu.innerHTML);

const testeInnerText = menu.innerText; // Apenas o texto do elemento selecionado, sem as tags.
console.log(testeInnerText);

// Agora partindo para TRANVERSING

// Transversing nada mais é do que navegar pelo DOM utilizando suas propriedades e métodos de parentesco.

const lista = document.querySelector('.animais-lista');

const pai = lista.parentElement; // retorna o pai.

const paiDoPai = lista.parentElement.parentElement; // retorna o pai do pai.

const elementoAcima = lista.previousElementSibling; // retorna o elemento acima.

const elementoAbaixo = lista.nextElementSibling; // retorna o elemento abaixo.

const filhos = lista.children; // retorna um HTMLCollection com os filhos.

const primeiroFilho = lista.children[0]; // retorna o primeiro filho utilizando um tipo de seleção de array.

const ultimoFilho = lista.children[--lista.children.length]; // retorna o úlitmo filho.

const todasLi = lista.querySelectorAll('li'); // busca os 'li's' apenas dentro de lista. Retorna uma NodeList.

const ultimoFilho2 = lista.querySelector('li:last-child'); // retorna o último filho mas utilizando seletor .

console.log(lista);

console.log(pai);

console.log(paiDoPai);

console.log(elementoAcima);

console.log(elementoAbaixo);

console.log(filhos);

console.log(primeiroFilho);

console.log(ultimoFilho);

console.log(todasLi);

console.log(ultimoFilho2);
