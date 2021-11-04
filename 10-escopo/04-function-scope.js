// Function Scope:

// Variáveis declaradas dentro do escopo de uma função, só existem dentro do escopo daquela função. É impossível acessar qualquer variável foi declarada dentro de uma função se estivermos em um escopo mais EXTERNO.

// Isso serve para os 3 tipos de declaração: var, let e const.

function imprimeDados() {
    var carro = 'Ferrari';
    let fruta = 'Banana';
    const animal = 'Tigre';
}
console.log(carro, fruta, animal); // erro, pois nenhuma dessas variáveis é visível para a função log
