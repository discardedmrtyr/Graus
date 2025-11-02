function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const unidadeEntrada = document.getElementById("unidadeEntrada").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.innerHTML = "Por favor, insira um número válido.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unidadeEntrada) {
    case "celsius":
      celsius = valor;
      fahrenheit = (valor * 9/5) + 32;
      kelvin = valor + 273.15;
      break;
    case "fahrenheit":
      celsius = (valor - 32) * 5/9;
      fahrenheit = valor;
      kelvin = celsius + 273.15;
      break;
    case "kelvin":
      kelvin = valor;
      celsius = valor - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      break;
  }

  resultado.innerHTML = `
    <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
  `;
}