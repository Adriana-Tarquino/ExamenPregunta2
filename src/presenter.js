import sumar from "./sumador";

const titulo = document.querySelector("#titulo_");
const detalle = document.querySelector("#detalle_");
const form = document.querySelector("#UCB-Twiter");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" +  + "</p>";
});
