window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
            a = e.target.value;

            if (a == "Mac") {
                var imagen = "img/reto5/mac2019.jpg";
            } else if (a == "HP") {
                var imagen = "img/reto5/windows2019.jpg";
            } else if (a == "Huawei") {
                var imagen = "img/reto5/huawei2019.jpg";
            } 
            document.getElementById("imagen").src = imagen;
        }
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}
function calcular() {
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

    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".jpg";

    swal.fire({
        imageUrl: imagenDireccion,
        html: "<p> Mira la versión de la computadora " +
            n +  " " + a + 
            "<br><br> <strong>Cuota mensual:</strong></p> " +
            "$" +
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Vehiculo " + a,
    });
}