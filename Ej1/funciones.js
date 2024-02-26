let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");

document.getElementById("verificar").addEventListener("click", function () {
  let numero = document.getElementById("numero").value;

  if (!isNaN(numero) && numero >= 1 && numero <= 100) {
    mensaje.textContent = "El número " + numero + " es válido.";
  } else {
    mensaje.textContent = "Por favor, ingrese un número válido entre 1 y 100.";
  }
});
