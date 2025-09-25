const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function () {
  if (surpriseMessage.style.display === "none") {
    surpriseMessage.style.display = "block";
  } else {
    surpriseMessage.style.display = "none";
  }
});
