function agregarImagen() {
    const contenedor = document.getElementById('contenedor');

    let img = document.getElementById('miImagen');
    
    if (!img) {
      img = document.createElement('img');
      img.id = 'miImagen';
      img.src = 'https://www.w3schools.com/html/img_girl.jpg';
      img.alt = 'Imagen agregada dinámicamente';
      contenedor.appendChild(img);
    } else {
      img.style.display = 'block'; // Por si estaba oculta
    }
  }

  function ocultarImagen() {
    const img = document.getElementById('miImagen');
    if (img) {
      img.style.display = 'none';
    }
  }