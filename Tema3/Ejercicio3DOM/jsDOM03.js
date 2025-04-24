function eliminarElemento() {
    const lista = document.getElementById("miLista");
    if (lista.hasChildNodes()) {
      lista.removeChild(lista.firstElementChild);
    } 
  }