// He intentado crear una página HTML donde ingresar una URL y que me la analizara con estos scripts
// Pero no se puede, por seguridad, así que te dejo el código de los scripts aquí:

// Título de la página
console.log("El título de la página es", document.title);

// Las imágenes
const imagenes = document.images;
console.log(`Número de imágenes: ${imagenes.length}`);
for (let i = 0; i < imagenes.length; i++) {
  console.log(`Imagen ${i + 1}:`, imagenes[i].src);
}

// Los enlaces
const enlaces = document.links;
console.log(`Número de enlaces: ${enlaces.length}`);
for (let i = 0; i < enlaces.length; i++) {
  console.log(`Enlace ${i + 1}:`, enlaces[i].href);
}
