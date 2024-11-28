function conversor() {
    const valor = parseFloat(document.getElementById("valor").value);
    const conversao = document.getElementById("tipoConversao").value;
    const convertido = document.getElementById("tipoConvertido").value;

    let taxa = 1;

    const taxas = {
        "Real_Dolar": 0.2,
        "Real_Euro": 0.18,
        "Real_Libra": 0.16,
        "Dolar_Real": 5,
        "Euro_Real": 5.5,
        "Libra_Real": 6.2
    };

    const chave = `${conversao}_${convertido}`;

    if (valor <= 0) {
        alert("Valor inválido para conversão")
        return;
    }
    else {
        if (conversao === convertido) {
            alert("Escolha moedas diferentes para conversão.");
            return;
        } else if (taxas[chave]) {
            taxa = taxas[chave];
        }
    }

    const resultado = valor * taxa;

    document.getElementById("resultado").innerText =
        `O valor convertido é: ${resultado.toFixed(2)} ${convertido}`;
}

