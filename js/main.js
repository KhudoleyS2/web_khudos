// BOTON INICIO____________________________________
var botonInicio = document.getElementById("boton-inicio");

var scrollBotonInicio = function () {
    var y = window.scrollY;
    if (y >= 150){
        botonInicio.style.display = "grid";
    }
    else{
        botonInicio.style.display = "none";
    }
}

window.addEventListener("scroll", scrollBotonInicio);




// MENU HAMBURGUESA_________________________________
// Abrir o cerrar el menu.
var botonHamburguesa = document.getElementById("boton-hamburguesa");
var opcionesHamburguesa = document.getElementById("navbar-hamburguesa-opciones");

function botonMenuHamburguesa() { 
    if (opcionesHamburguesa.style.display == "none"){
        opcionesHamburguesa.style.display = "block";
    }
    else{
        opcionesHamburguesa.style.display = "none";
    }
}
botonHamburguesa.addEventListener("click",botonMenuHamburguesa)

// Cerrar el menu si se selecciona una opcion.
function cerrarMenuHamburguesa() {
    opcionesHamburguesa.style.display = "none";
}

opcionesHamburguesa.addEventListener("click",cerrarMenuHamburguesa)

