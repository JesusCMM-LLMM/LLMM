var userName = "";
    var userAge = 0;

    function asignartexto() {
        Nombre = document.getElementById("Entnombre").value;
        document.getElementById("NombreIntroducido").innerHTML = "Nombre guardado: " + Nombre;
    }

    function asignarnumero() {
        Edad = document.getElementById("Entedad").value;
        document.getElementById("EdadIntroducida").innerHTML = "Edad guardada: " + Edad;
    }

    function combinar() {
        document.getElementById("todo").innerHTML =
            "Hola " + Nombre + ", tienes " + Edad + " años.";
    }