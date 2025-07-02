function menu () {
    let seleccion = document.getElementById('opciones').value;

    const lottieHtml = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;">' +
        '<iframe src="https://lottie.host/embed/bd1a292d-cdca-4fe9-b114-01d78a188f3a/7HD8J1alhU.lottie" style="width:200px;height:200px;border:none;background:transparent;"></iframe>' +
        '<div style="margin-top:10px;font-size:1.2em;color:#d81b60;font-weight:bold;">Redirigiendo...</div>' +
        '</div>';

    switch (seleccion) {
        case 'A':
            Swal.fire({
                html: lottieHtml,
                title: "Recetas Nestlé",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://www.recetasnestlecam.com/";
            });
            return;

        case 'B':
            Swal.fire({
                html: lottieHtml,
                title: "Cookpad Costa Rica",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://cookpad.com/cr/buscar/costa%20rica";
            });
            return;

        case 'C':
            Swal.fire({
                html: lottieHtml,
                title: "Recetas de Postres",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://recetasdecocina.elmundo.es/recetas/postres";
            });
            return;

        case 'D':
            Swal.fire({
                html: lottieHtml,
                title: "My Switzerland",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://www.myswitzerland.com/es/";
            });
            return;

        case 'E':
            Swal.fire({
                html: lottieHtml,
                title: "National Geographic Suiza",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "https://viajes.nationalgeographic.com.es/p/suiza";
            });
            return;
    }
}