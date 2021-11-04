// Utilizando a API https://viacep.com.br/ws/CEP/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

let respostaTratada;

const botaoBuscar = document.querySelector('.btn-buscar');

function retornaEndereco() {
    const resultado = document.querySelector('.resposta-busca');
    const inputCEP = document.querySelector('.input-cep');
    const CEP = inputCEP.value;

    if (CEP) {
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                resultado.innerText = `Você mora na cidade de ${response.localidade} na rua ${response.logradouro} e no ${response.bairro}`;
            });
    } else {
        window.alert('Digite um valor no campo do CEP');
    }
}

botaoBuscar.addEventListener('click', retornaEndereco);
