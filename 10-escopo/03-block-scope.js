// Block Scope:

// Esse tipo de escopo é definido através de estruturas de comparação como o if, de repetição como o for ou simplesmente através da abertura de chaves dentro do código {}.

// Variáveis declaradas com var 'vazam' do escopo de bloco, sendo assim visíveis fora do bloco em que foram declaradas.

// Variáveis declaradas com let ou com const não são visíveis fora do escopo em que foram declaradas.

{
    var carro = 'Ferrari';
    let fruta = 'Amora';
    const animal = 'Leopardo';
}
console.log(carro, fruta, animal); // erro, pois apenas o carro é visível para função log.

// Exemplo com a estrutura if.

if (true) {
    var moto = 'Kawasaki';
    let bebida = 'Refrigerante';
    const lugar = 'Iglaterra';
}
console.log(moto, bebida, animal); // erro, pois apenas a moto é visível para função log

// Exemplo com uma estrutura for.

for (let letra of ['a', 'b', 'c']) {
    const cadaLetra = letra;
}
console.log(cadaLetra); // erro, pois cadaLetra não está visível para função log.
