import { getAjax } from "../helpers/getAjax.js";

export function Router() {
  let { hash } = location;
  const $main =  document.getElementById("main");

  console.log(hash);

  //*elemento vacio antes de cargar
  $main.innerHTML = null;

  //*Validaciones para el cambio entre secciones
  if (!hash || hash === "#/") {
    getAjax("WORLD");
  } 
  else if (hash === "#/sports") {
    getAjax("SPORTS");
  } 
  else if (hash === "#/technology") {
    getAjax("TECHNOLOGY");
  } 
  else if (hash === "#/entertainment") {
    getAjax("ENTERTAINMENT");
  } 
  else if (hash === "#/science") {
    getAjax("SCIENCE");
  } 
}
