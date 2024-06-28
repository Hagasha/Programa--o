const PI = 3.14159;
let raio; 
let circunferencia;

document.getElementById("meuenvio").onclick = function() {
    raio = document.getElementById("meutexto").value;
    raio = Number(raio);
    circunferencia = 2 * PI * raio;
    document.getElementById("meuH3").textContent = circunferencia + "cm";
};