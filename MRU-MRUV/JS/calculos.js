
function calcularDistancia() {
    // Obtener los valores de los campos de entrada
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    // Verificar si alguno de los campos de entrada no es un número válido
    if (isNaN(velocidad) || isNaN(tiempo)) {
        // Mostrar un mensaje de error si uno de los valores no es válido
        document.getElementById("resultado").textContent = "Por favor, ingresa valores numéricos válidos en todos los campos.";
    } else {
        // Calcular la distancia solo si todos los valores son válidos
        const distancia = velocidad * tiempo;
        document.getElementById("resultado").textContent = `La distancia es: ${distancia.toFixed(2)} metros`;
    }
}

// Agregar un evento de escucha al formulario
document.getElementById("formulario-dis").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    calcularDistancia(); // Llamar a la función para calcular la distancia
});



function calcularAceleracion() {
    const velocidadInicial = parseFloat(document.getElementById("velocidadInicial").value);
    const velocidadFinal = parseFloat(document.getElementById("velocidadFinal").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;

    document.getElementById("resultado").textContent = `La aceleración es: ${aceleracion.toFixed(2)} m/s²`;
}

// Agregar un evento de escucha al formulario
document.getElementById("formulario-ac").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    calcularAceleracion(); // Llamar a la función para calcular la aceleración
});

