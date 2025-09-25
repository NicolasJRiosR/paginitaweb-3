const imagen = document.getElementById("cartaInteractiva");

const imagenes = [
  "..//Imagenes/1.png",
  "..//Imagenes/2.png",
  "..//Imagenes/3.png",
  "..//Imagenes/4.png",
  "..//Imagenes/5.png",
  "..//Imagenes/6.png",
  "..//Imagenes/7.png",
  "..//Imagenes/8.png",
  "..//Imagenes/9.png",
  "..//Imagenes/10.png",
  "..//Imagenes/11.png",
];

let indice = 0;

imagen.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  imagen.src = imagenes[indice];
});
