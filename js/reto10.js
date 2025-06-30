document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cedula = cedulaInput.value.trim();
        if (cedula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa una cédula antes de buscar.'
            });
        } else
        if (isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        } else
        if (validarCedula(cedula)) {
            mostrarInformacionEmpleado(cedula);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        }
    });

    function validarCedula(cedula) {
        return /^\d{9}$/.test(cedula);
    }

    function mostrarInformacionEmpleado(cedula) {
        const empleados = {
            '109110338': { nombre: 'Miranda', apellidos: 'Rodriguez', lugar: 'San José', foto: './img/reto10/1.jpg' },
            '209110338': { nombre: 'Karla', apellidos: 'Castro', lugar: 'Cartago', foto: './img/reto10/2.jpg' },
            '309110338': { nombre: 'Stephanie', apellidos: 'Soto', lugar: 'Heredia', foto: './img/reto10/3.jpg' },
            '409110338': { nombre: 'Rebeca', apellidos: 'Suarez', lugar: 'Alajuela', foto: './img/reto10/4.jpg' },
            '509110338': { nombre: 'Lucía', apellidos: 'Coto', lugar: 'Puntarenas', foto: './img/reto10/5.jpg' }
        };
        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario NO existe.'
            });
        }
    }

    function mostrarResultado(empleado) {
        resultadoContainer.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${empleado.foto}" class="card-img-top" alt="Foto del empleado">
                <div class="card-body">
                    <h5 class="card-title">${empleado.nombre} ${empleado.apellidos}</h5>
                    <p class="card-text">Lugar: ${empleado.lugar}</p>
                </div>
            </div>
        `;
    }
});

function limpiar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}