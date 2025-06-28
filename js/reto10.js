//se ejecuta cuando el contenido esta cargado en el DOM
document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    //carga de la biblioteca de eventos submit
    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Trim para eliminar espacios en blanco al inicio y al final
        const cedula = cedulaInput.value.trim();
        // Verifica si el campo de cédula está vacío
        if (cedula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa una cédula antes de buscar.'
            });
        } else
        // Verifica si el valor ingresado no es un número
        if (isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        } else
        //cargar la función validarCedula
        if (validarCedula(cedula)) {
            //cargar la funcion que muestra los empleados por cedula
            mostrarInformacionEmpleado(cedula);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        }
    });


    //funcion que permite validar el campo cedula
    function validarCedula(cedula) {
        //expresion que verifica si la cédula tiene exactamente 9 dígitos numéricos
        return /^\d{9}$/.test(cedula);
    }

    //funcion que permite almacenar los datos de los empleados
    function mostrarInformacionEmpleado(cedula) {
        //objeto llamado empleados que guarda todos los datos del empleado
        const empleados = {
            '109110338': { nombre: 'Pedro Miranda', jornada: 'Diurna', salario: '$1500', foto: '../imagenes/usuario1.jpg', descripcion: 'Diseñador Web' },
            '209110338': { nombre: 'Karla Castro', jornada: 'Nocturna', salario: '$1200', foto: '../imagenes/usuario2.jpg', descripcion: 'Diseñadora UX-UI' },
            '309110338': { nombre: 'Oscar Soto', jornada: 'Diurna', salario: '$1600', foto: '../imagenes/usuario3.jpg', descripcion: 'Programador Web' },
            '409110338': { nombre: 'Rebeca Suarez', jornada: 'Mixta', salario: '$1400', foto: '../imagenes/usuario4.jpg', descripcion: 'Diseñadora gráfica' },
            '509110338': { nombre: 'Pablo Coto', jornada: 'Nocturna', salario: '$1300', foto: '../imagenes/usuario5.jpg', descripcion: 'Analista de sistemas' },
            '117650203': { nombre: 'Sofia Vargas', jornada: 'Mixta', salario: '$1600', foto: '../imagenes/usuario6.jpg', descripcion: 'Ingeniera en sistemas' },
            '184189251': { nombre: 'Daniel Ramirez', jornada: 'Diurna', salario: '$1200', foto: '../imagenes/usuario7.jpg', descripcion: 'Desarrollador Web' }
        };
        //condicional que permite validar si el usuario existe 
        if (empleados[cedula]) {
            //constante que almacena los datos del empleado 
            const empleado = empleados[cedula];
            //cargar funcion que muestra el resultado final de la busqueda
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no existe...'
            });
        }
    }

    //funcion que muestra el resultado final de la busqueda
    function mostrarResultado(empleado) {
        //permite crear contenido HTML usando la propiedad innerHTML
        resultadoContainer.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
                        <div class="card-body">
                            <h5 class="card-title">${empleado.nombre}</h5>
                            <p class="card-text">Descripción: ${empleado.descripcion}</p>
                            <p class="card-text">Jornada: ${empleado.jornada}</p>
                            <p class="card-text">Salario: ${empleado.salario}</p>
                        </div>
                    </div>
                `;
    }
});

function limpiar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}