function muestraFtoC() {
    let f = document.getElementById("tbf").value;
    let c = toCelsius(f);
    document.getElementById("tbc").value = c.toFixed(2);
}

function muestraCtoF() {
    let c = document.getElementById("tbc").value;
    let f = toFahrenheit(c);
    document.getElementById("tbf").value = f.toFixed(2);
}

function toCelsius(f) {
    return (5/9) * (f - 32);
}

function toFahrenheit(c) {
    return (9/5) * c + 32;
}