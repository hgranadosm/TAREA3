function menu () {
    let seleccion = document.getElementById('opciones').value;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: "Recetas Nestlé",
                text: "Redirigiendo...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://www.recetasnestlecam.com/";
            });
            return;

        case 'B':
            Swal.fire({
                icon: "success",
                title: "Cookpad Costa Rica",
                text: "Redirigiendo...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://cookpad.com/cr/buscar/costa%20rica";
            });
            return;

        case 'C':
            Swal.fire({
                icon: "success",
                title: "Recetas de Postres",
                text: "Redirigiendo...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://recetasdecocina.elmundo.es/recetas/postres";
            });
            return;

        case 'D':
            Swal.fire({
                icon: "success",
                title: "My Switzerland",
                text: "Redirigiendo...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://www.myswitzerland.com/es/";
            });
            return;

        case 'E':
            Swal.fire({
                icon: "success",
                title: "National Geographic Suiza",
                text: "Redirigiendo...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://viajes.nationalgeographic.com.es/p/suiza";
            });
            return;
    }
}