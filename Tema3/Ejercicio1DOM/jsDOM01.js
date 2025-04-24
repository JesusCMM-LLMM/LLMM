function mostrarParrafos() {
    const parrafos = document.getElementsByTagName('p');
    let contenido = '';
    for (let i = 0; i < parrafos.length; i++) {
      contenido += `<strong>Párrafo ${i + 1}:</strong> ${parrafos[i].innerText}<br>`;
    }
    document.getElementById('output').innerHTML = contenido;
  }