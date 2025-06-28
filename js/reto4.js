// evento que carga la funcion automaticamente

window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/reto4/perros.jpg' class='img-fluid rounded' alt='perro' />";

    //evento que permite cambiar el objeto onchange
    document.getElementById("razas").onchange = function(e) {
        //destino del valor seleccionado por el usuario
        let n = e.target.value;
        //expresiones que guardan las imagenes de los estadios y la informacionde cada uno
        let imagen = "<img src='img/reto4/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='estadio' />";
        let text = ["Labrador Retriever",
            "Pastor Alemán",
            "Golden Retriever",
            "Husky Siberiano",
            "Chihuahua",
        ];
        // salida de las imagenes y los textos informativos ...
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n-1];
    };
};

//funcion del boton Reiniciar

document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
    //limpia los textos informativos de los estadios...
     document.getElementById("output-txt").innerHTML = "";
    // dejar el select con el texto por defecto ...
     document.getElementById("razas").value = "";
}