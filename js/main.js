// Funcion para mostrar u ocultar boton de volver a inicio.

botonInicio = document.getElementById("boton-inicio");
navbarHamburguesa = document.getElementById("navbar-hamburguesa");

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




botonHamburguesa = document.getElementById("boton-hamburguesa")
