// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam a resolução de outras promises que teremos que tratar com o then.

fetch('./doc.txt')
    .then(response => response.text())
    .then(response => document.write(response));
