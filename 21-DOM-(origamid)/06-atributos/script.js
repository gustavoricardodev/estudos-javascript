const img = document.querySelector('img');
console.log(animais);

// img é um objeto HTMLImageElement que possui propriedades como o attributes que retorna um objeto do tipo NamedNodeMap.

console.log(animais.attributes);

// attributes assim como todo objeto possui propriedades e métodos, os 3 mais utilizados são: getAttribute(), setAttribute() e hasAttribute()

// O método getAttribute() retorna o atributo passado como parâmetro, caso esse atributo não exista, ele retorna null

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt')); //null

// O método setAttribute() adiciona classes no elemento selecionado.

img.setAttribute('alt', 'Texto Alternativo');

// O método hasAttribute() verifica se o elemento tem como atributo o valor passado como parâmetro da função, retornando valores booleanos.

console.log(img.hasAttribute('src'));
