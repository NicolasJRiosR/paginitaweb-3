const imagen = document.getElementById("cartaInteractiva");

const imagenes = [
  "mine.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
];

let indice = 0;

imagen.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  imagen.src = imagenes[indice];
});
