const quotes = [
    "Hasta que no hayas amado a un animal, una parte de tu alma permanecerá dormida",
    "Los animales hablan, pero solo para aquellas personas que saben escuchar",
    "Los animales son como la música: es inútil tratar de explicar su valor a aquellos que no saben apreciarla",
    "Los ojos de un animal tienen el poder de hablar un gran lenguaje",
    "Sé la persona que tu perro cree que eres",
    "Que mi corazón esté siempre lleno de huellas",
    "No hay mejor regalo que la mirada de un animal agradecido",
    "Es maravilloso ver a los animales porque no tienen una opinión sobre sí mismos, no se critican. Simplemente son"
];
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    return quotes[randomIndex]; 
}

const button = document.getElementById("generate-btn");
    const quoteDisplay = document.getElementById("randomQuote");

button.addEventListener("click", function () {
        quoteDisplay.textContent = getRandomQuote();
});