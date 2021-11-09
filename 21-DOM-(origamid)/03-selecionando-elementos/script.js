// Todos os exemplos abaixo retornarão null caso o elemento não exista.

// ID -> document.getElementById()
// const animaisSection = document.getElementById('animais')
// console.log(animaisSection)

// Class -> document.getElementByClassName() -> retorna uma HTMLCollection
// const gridSection = document.getElementsByClassName('grid-section')
// const contato = document.getElementsByClassName('grid-section, contato')
// console.log(gridSection)

// Tag -> document.querySelectorByTagName() -> retorna uma HTMLCollection
// const uls = document.getElementsByTagName('ul')
// console.log(uls)

// Seletor Geral Único -> document.querySelector()
// const animais = document.querySelector('.animais')
// console.log(animais)
// const contato = document.querySelector('#contato')
// console.log(contato)

// Seletor Geral Multiplo -> document.querySelectorAll() -> NodeList
// const gridSection = document.querySelectorAll('.grid-section')
// console.log(gridSection)
// const listas = document.querySelectorAll('ul')
// console.log(listas)

// HTMLCollections e NodeLists são objetos array-like, por isso podemos alguns métodos e propriedades que temos no array disponíveis.
