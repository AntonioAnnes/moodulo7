const form = document.getElementById('form-valida');



formEvalido = false;


function numerovalida (valorA, valorB){
    return valorB > valorA
}


form.addEventListener('submit', function(e){
    let valorA = parseFloat(document.getElementById('valor-compra').value)
    let valorB = parseFloat(document.getElementById('saldo-conta').value)


    e.preventDefault();
    const mensagemSucesso = "Compra feita com sucesso!";


    formEvalido = numerovalida(valorA, valorB);
    debugger
    if (formEvalido) {
        const containerMensagemSucesso = document.getElementById('sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'


        valorA.value = '';
        valorB.value = '';


    }
    else {
        const containerError = document.getElementById('error-message')
        containerError.innerHTML = "O valor do seu Saldo deve ser maior que o valor da Compra.";
        document.querySelector('.error-message').style.display = 'block'
    }
})