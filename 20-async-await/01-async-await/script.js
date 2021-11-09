// Teste Async

// Primeiramente falando de regras de sintaxe, o async sempre tem que ser colocado antes de uma função que contém dentro do seu bloco de execução métodos assíncronos.

// Por sua vez palavra chave await sempre tem que ser colocada antes de um método que retorne uma Promise.

// Async e await nada mais são do que uma maneira mais "clean" de tratar de Promises no JavaScript.

// Segue um exemplo:

async function getPokemonAbilities(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson.abilities.map(
    (currentValue) => currentValue.ability.name
  );
}

async function searchPokeByName(pokemonName) {
  try {
    const result = await getPokemonAbilities(pokemonName);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

searchPokeByName("suicune");
