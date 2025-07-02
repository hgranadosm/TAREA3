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
        return;
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Debes seleccionar el modelo y la versión de la computadora",
        });
        return;
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
            break;
        case "Huawei":
            if (n == "2019")
                montoCuota = 75;
            else
                montoCuota = 130;
            break;
        default:
            break;
    }

    let imagenDireccion = "img/reto5/";
    if (a == "Mac") {
        imagenDireccion += "mac2019.jpg";
    } else if (a == "HP") {
        imagenDireccion += "windows2019.jpg";
    } else if (a == "Huawei") {
        imagenDireccion += "huawei2019.jpg";
    } else {
        imagenDireccion += "compu.jpg";
    }

    swal.fire({
        imageUrl: imagenDireccion,
        html: `<div style="font-size: 1.3rem; color: #e75480; font-weight: bold; margin-bottom: 10px;">¡Detalles de tu selección!</div>
               <div style="font-size: 1.1rem; color: #333;">Has elegido la computadora <span style='color:#e75480;'>${a}</span> versión <span style='color:#e75480;'>${n}</span>.<br><br><strong>Cuota mensual:</strong> <span style='color:#e75480;'>$${montoCuota}</span></div>`,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Computadora " + a,
    });
}