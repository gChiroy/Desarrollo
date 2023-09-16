document.getElementById("mruForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    const distancia = velocidad * tiempo;

    document.getElementById("resultado").textContent = `La distancia es: ${distancia.toFixed(2)} metros`;
});