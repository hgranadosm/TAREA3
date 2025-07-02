let votos = [];

function validarCedula(cedula) {
    return /^\d{9}$/.test(cedula); 
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad >= 18;
}

function yaVoto(cedula) {
    return votos.some(voto => voto.cedula === cedula);
}

document.getElementById('votacionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const cedula = document.getElementById('cedula').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const candidatoSeleccionado = document.querySelector('input[name="candidato"]:checked');

    if (!validarCedula(cedula)) {
        Swal.fire('Error', 'La cédula debe tener 9 dígitos', 'error');
        return;
    }

    if (!validarEmail(email)) {
        Swal.fire('Error', 'El correo electrónico no es válido', 'error');
        return;
    }

    if (!validarEdad(fechaNacimiento)) {
        Swal.fire('Error', 'Debe ser mayor de 18 años para votar', 'error');
        return;
    }

    if (yaVoto(cedula)) {
        Swal.fire('Error', 'Ya ha emitido su voto anteriormente', 'error');
        return;
    }

    const voto = {
        nombreCompleto,
        cedula,
        email,
        fechaNacimiento,
        candidato: candidatoSeleccionado.value,
        fecha: new Date()
    };

    votos.push(voto);

    Swal.fire({
        title: '¡Voto Registrado!',
        text: 'Su voto ha sido registrado',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        this.reset();
    });
});

document.getElementById('verResultados').addEventListener('click', function() {
    const resultados = {
        'Candidato 1': votos.filter(v => v.candidato === 'Candidato 1').length,
        'Candidato 2': votos.filter(v => v.candidato === 'Candidato 2').length,
        'Candidato 3': votos.filter(v => v.candidato === 'Candidato 3').length
    };

    let mensaje = 'Resultados actuales:\n\n';
    for (const [candidato, cantidad] of Object.entries(resultados)) {
        mensaje += `${candidato}: ${cantidad} votos\n`;
    }
    mensaje += `\nTotal de votos: ${votos.length}`;

    Swal.fire({
        title: 'Resultados de la Votación',
        text: mensaje,
        icon: 'info'
    });
});