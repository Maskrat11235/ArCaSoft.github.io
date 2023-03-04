function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

function cambiarModo() {
    var cuerpo = document.body;
    var boton = document.querySelector(".modo");
  
    if (cuerpo.classList.contains("oscuro")) {
      cuerpo.classList.remove("oscuro");
      boton.innerHTML = "Modo Claro";
    } else {
      cuerpo.classList.add("oscuro");
      boton.innerHTML = "Modo Oscuro";
    }
  }