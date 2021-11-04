const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais);

// Temos algumas propriedades muito comuns a serem utilizadas quando falamos de distâncias e dimensões.

// clientHeight
console.log(
    `A altura do elemento em height + padding é de ${listaAnimais.clientHeight}px.`
);

// offsetHeight
console.log(
    `O heigth + padding + border do element é de ${listaAnimais.offsetHeight}px.`
);

// scrollHeight
console.log(
    `O heigth total do elemento mesmo dentro do scroll com visibility hidden é de ${listaAnimais.scrollHeight}px.`
);

// Essas mesmas propriedades de height se aplicam ao width.

const section = document.querySelector('.animais');
console.log(section);

// offsetTop
console.log(
    `A distância entre e o elemento e o topo da página é de ${section.offsetTop}px.`
);

// offsetLeft
console.log(
    `A distância entre o canto esquerdo do elemento e o canto esquerdo da página é de ${section.offsetLeft}px.`
);

// Um método muito famoso quando falamos de dimensões e distâncias é o getBoundingClientRect() que nos retorna um objeto do tipo DOMRect com várias propriedades de dimensão e distância do elemento.

const section2 = document.querySelector('.animais');
const rect = section2.getBoundingClientRect();
console.log(rect);

console.log(rect.height);
console.log(rect.width);
console.log(rect.top);
console.log(rect.bottom);

// Também temos diversas propriedades relacionadas a própria window.

console.log(window.innerWidth); // width da janela.
console.log(window.outerWidth); // soma dev tools também.
console.log(window.innerHeight); // heigth da janela.
console.log(window.outerHeight); // soma a barra de endereço.
console.log(window.pageYOffset); // distância total do scroll horizontal.
console.log(window.pageXOffset); // distância total do scroll vertical.
