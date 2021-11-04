// Quando o código está sendo executado dentro de uma função e encontra um return, imediatamente ele para a execução bloco e faz o retorno de dados.

let num = 10;

function fazAlgo() {
    return 'Fiz algo';
    num = 70; // Linha não executada
}

fazAlgo();

console.log(num); // 10
