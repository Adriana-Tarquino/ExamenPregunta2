import lista_Post from "./Lista";

const titulo = document.querySelector("#titulo_");
const detalle = document.querySelector("#detalle_");
const form = document.querySelector("#UCB-Twiter");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + titulo.value + "&nbsp" +detalle.value + "</p>";
  //div.innerHTML = "<p>" + lista_Post(titulo,detalle) + "</p>"
});
