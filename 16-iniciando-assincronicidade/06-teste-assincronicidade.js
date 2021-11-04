function funcao6() {
    console.log('Primeira execução da stack');
}

function funcao5() {
    setTimeout(() => {
        console.log('setTimeOut');
    }, 2000); // Irá para a event queue e só irá ser executado quando o event loop perceber que a stack está vazia.

    funcao6();
}

function funcao4() {
    funcao5();
}

function funcao3() {
    funcao4();
}

function funcao2() {
    funcao3();
}

function funcao1() {
    funcao2();
}

funcao1();

console.log(
    'Última chamada da stack antes do event loop buscar os funções assíncronas no event queue'
);
