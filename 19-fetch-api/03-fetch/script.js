// Muitas das vezes utilizamos o fetch para fazer requisições para API's externas, que podem ter dados que queremos utilizar no nosso projeto.

// Ao invés de transformas esses arquivos em texto ou qualquer outro tipo, o transformamos em um arquivo JSON (JavaScript Object Notation). Exemplo

const cep = 16201338;

fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData);
    console.log(`O bairro ${jsonData.logradouro} fica na cidade de ${jsonData.localidade}`);
  });
