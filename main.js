document.addEventListener("DOMContentLoaded", function () {
    const convertTemperature = document.getElementById('convertTemperature');
    convertTemperature.addEventListener('click', mostrarTemperature);
});

function mostrarTemperature() {
    const inputNumber = document.getElementById('inputNumber').value;
    const isCelsius = document.getElementById('inputCelsius').checked;
    const resultElement = document.getElementById('result');

    if (inputNumber === '' || isNaN(inputNumber)) {
        resultElement.innerHTML = 'Por favor,<br> ingresa un número válido.';
        return;
    }

    let resultado;
    if (isCelsius) {
        resultado = (inputNumber * 9 / 5) + 32;
        resultElement.innerHTML = `${inputNumber} ºC = ${resultado.toFixed(2)} ºF`;
    } else {
        resultado = (inputNumber - 32) * 5 / 9;
        resultElement.innerHTML = `${inputNumber} ºF = ${resultado.toFixed(2)} ºC`;
    }
}

// let numero = 25.6789;
// let numeroFormateado = numero.toFixed(2);
// console.log(numeroFormateado); // Output: "25.68"