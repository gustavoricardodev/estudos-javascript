// Para pararmos a execução de um setInterval devemos utilizar o método clearInterval, porém, para que isso seja possível o setInterval deve estar atribuído a uma varíavel.

let contador = 0;

function contar() {
    contador++;

    console.log(contador);

    if (contador === 100) {
        clearInterval(contarAteCem);
    }
}

const contarAteCem = setInterval(contar, 100);
