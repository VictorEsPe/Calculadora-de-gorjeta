function calcularGorjeta(event) {
    // impedindo que a página recarregue e limpe os dados
    event.preventDefault();

    var valorConta = document.getElementById('bill').value;
    var avaliacao = document.getElementById('serviceQual').value;
    var numPessoas = document.getElementById('people').value;

    if (valorConta == '' | avaliacao == '') {
        alert("Por favor, preencha todos os campos")
        return
    }

    if (numPessoas == '' | numPessoas <= 1) {
        numPessoas = 1
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    var gorjeta = (valorConta * avaliacao) / numPessoas
    gorjeta = gorjeta.toFixed(2)

    document.getElementById('tip').innerHTML = gorjeta
    document.getElementById('finalTip').style.display = 'block'

}

// tirando o texto do reultado da tela para que ele só apareça quando a função for chamada 
document.getElementById("finalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calcularGorjeta);
