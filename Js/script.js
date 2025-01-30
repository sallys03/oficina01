function calcularIMC() {
    const altura = document.getElementById('altura').value / 100;
    const peso = document.getElementById('peso').value;
    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc} (${classificacao})`;
}
