function calcularReajuste(salario) {
    let percentual = 0;
    let novoSalario = 0;

    if (salario <= 280) {
        percentual = 20;
    } else if (salario <= 700) {
        percentual = 15;
    } else if (salario <= 1500) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    novoSalario = salario + (salario * (percentual / 100));

    return {
        salarioAntes: salario,
        percentualAumento: percentual,
        novoSalario: novoSalario
    };
}

const calcularButton = document.getElementById("calcular");
const salarioInput = document.getElementById("salario");
const resultadoDiv = document.getElementById("resultado");
const salarioAntesSpan = document.getElementById("salarioAntes");
const percentualAumentoSpan = document.getElementById("percentualAumento");
const novoSalarioSpan = document.getElementById("novoSalario");

calcularButton.addEventListener("click", function() {
    const salarioInicial = parseFloat(salarioInput.value);

    if (!isNaN(salarioInicial)) {
        const resultado = calcularReajuste(salarioInicial);

        salarioAntesSpan.textContent = resultado.salarioAntes.toFixed(2);
        percentualAumentoSpan.textContent = resultado.percentualAumento;
        novoSalarioSpan.textContent = resultado.novoSalario.toFixed(2);

        resultadoDiv.style.display = "block";
    } else {
        resultadoDiv.style.display = "none";
        alert("Valor inválido. Por favor, digite um salário válido.");
    }
});