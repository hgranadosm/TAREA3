window.onload = function() {
    //combo llamado modelo ID usando el evento onchange que se usa en combos dinamicos...
    document.getElementById("modelo").onchange = function(e) {
            //destino del valor seleccionado combo1
            a = e.target.value;

            if (a == "Mac") {
                var imagen = "img/reto5/mac2019.jpg";
            } else if (a == "HP") {
                var imagen = "img/reto5/windows2019.jpg";
            } else if (a == "Huawei") {
                var imagen = "img/reto5/huawei2019.jpg";
            } 
            //agrega la imagen del carro modelo 
            document.getElementById("imagen").src = imagen;
        }
        //combo llamado version ID
    document.getElementById("version").onchange = function(es) {
        //destino del valor seleccionado combo2
        n = es.target.value;
    }
}
function calcular() {
    //validacion de los 2 combos
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar el modelo y la versión de la computadora",
        });
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar el modelo y la versión de la computadora",
        })
    }

    //ciclo switch
    var montoCuota = 0;
    switch (a) {
        case "Mac":
            if (n == "2019")
                montoCuota = 200;
            else
                montoCuota = 300;
            break;
        case "HP":
            if (n == "2019")
                montoCuota = 50;
            else
                montoCuota = 100;
            break
        case "Huawei":
            if (n == "2019")
                montoCuota = 75;
            else
                montoCuota = 130;
            break;
        default:
            break;
    }

    //variable que almacena la ruta de las imagenes en formato PNG
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".jpg";

    //Resultado en desplegable

    swal.fire({
        //la variable imageUrl permite cargar la imagen del carro dentro del desplegabla 
        //a es el target modelo y n es el target de la version del carro
        imageUrl: imagenDireccion,
        html: "<p> Mira la versión de la computadora " +
            n +  " " + a + 
            "<br><br> <strong>Cuota mensual:</strong></p> " +
            "$" +
            //variable que trae el dato de su monta de cuota mensual
            montoCuota,
        //ancho y altura de la imagen del carro
        imageWidth: 600,
        imageHeight: 250,
        //accesibilidad de la imagen
        imageAlt: "Vehiculo " + a,
    });
}