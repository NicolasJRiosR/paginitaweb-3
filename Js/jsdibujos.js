document.addEventListener("DOMContentLoaded", () => {
  const imagenesNovia = [
    "..//Imagenes/2 (1).jpeg",
    "..//Imagenes/2 (2).jpeg",
    "..//Imagenes/2 (3).jpeg",
    "..//Imagenes/2 (4).jpeg",
    "..//Imagenes/2 (5).jpeg",
    "..//Imagenes/2 (6).jpeg",
    "..//Imagenes/2 (7).jpeg",
    "..//Imagenes/2 (8).jpeg",
    "..//Imagenes/2 (9).jpeg",
    "..//Imagenes/2 (10).jpeg",
    "..//Imagenes/2 (11).jpeg",
    "..//Imagenes/2 (12).jpeg",
    "..//Imagenes/2 (13).jpeg",
    "..//Imagenes/2 (14).jpeg",
    "..//Imagenes/2 (15).jpeg",
    "..//Imagenes/2 (16).jpeg",
    "..//Imagenes/2 (17).jpeg",
    "..//Imagenes/2 (18).jpeg",
    "..//Imagenes/2 (19).jpeg",
    "..//Imagenes/2 (20).jpeg",
    "..//Imagenes/2 (21).jpeg",
    "..//Imagenes/2 (22).jpeg",
    "..//Imagenes/2 (23).jpeg",
    "..//Imagenes/2 (24).jpeg",
    "..//Imagenes/2 (25).jpeg",
    "..//Imagenes/2 (26).jpeg",
  ];

  let contador = 0;
  const imagenNoviaElement = document
    .getElementById("imagen-novia")
    .getElementsByTagName("img")[0];

  const cambiarImagen = () => {
    imagenNoviaElement.style.opacity = 0;

    setTimeout(() => {
      contador = (contador + 1) % imagenesNovia.length;
      imagenNoviaElement.src = imagenesNovia[contador];

      imagenNoviaElement.style.opacity = 1;
    }, 1000);
  };

  setInterval(cambiarImagen, 5000);
});
