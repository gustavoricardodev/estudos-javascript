// Modules:

// Em JavaScript cada arquivo é considerado um módulo, esse arquivo main.js por exemplo, é um módulo.

// As variáveis e funções só ficam disponíveis dentro do módulo em que foram criadas.

// Para quebrar essa barreira, na atualização ES6 os modules foram introduzidos ao JavaScript.

// Segue um exemplo simples importanto uma variável do arquivo teste.js.

// Para que os modules funcionem com JavaScript puro, nós devemos adicionar uma propriedade no nosso html, dentro da tag script.

// Os modules só funcionam em servidores, sejam locais, ou externos.

import nome from "./teste.js";

console.log(nome);
