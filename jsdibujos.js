document.addEventListener("DOMContentLoaded", () => {
  const imagenesNovia = [
    "2 (1).jpeg",
    "2 (2).jpeg",
    "2 (3).jpeg",
    "2 (4).jpeg",
    "2 (5).jpeg",
    "2 (6).jpeg",
    "2 (7).jpeg",
    "2 (8).jpeg",
    "2 (9).jpeg",
    "2 (10).jpeg",
    "2 (11).jpeg",
    "2 (12).jpeg",
    "2 (13).jpeg",
    "2 (14).jpeg",
    "2 (15).jpeg",
    "2 (16).jpeg",
    "2 (17).jpeg",
    "2 (18).jpeg",
    "2 (19).jpeg",
    "2 (20).jpeg",
    "2 (21).jpeg",
    "2 (22).jpeg",
    "2 (23).jpeg",
    "2 (24).jpeg",
    "2 (25).jpeg",
    "2 (26).jpeg",
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
