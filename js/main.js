// BOTON INICIO
botonInicio = document.getElementById("boton-inicio");

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




// MENU HAMBURGUESA
botonHamburguesa = document.getElementById("boton-hamburguesa");
opcionesHamburguesa = document.getElementById("navbar-hamburguesa-opciones");

function botonMenuHamburguesa() { 
    if (opcionesHamburguesa.style.display == "none"){
        opcionesHamburguesa.style.display = "block";
    }
    else{
        opcionesHamburguesa.style.display = "none";
    }
    

    console.log("La funcion se ejecuta");
}

botonHamburguesa.addEventListener("click",botonMenuHamburguesa)