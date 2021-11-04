// O fetch permite fazermos requisições HTTP. Este método retorna a resolução de uma Promise. Podemos então utilizar o then() para interagirmos com a resposta, que é um objeto do tipo Response.

fetch('./doc.txt').then(res => console.log(res));
