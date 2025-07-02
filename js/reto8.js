
const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value,
        apellidoEstudiante = document.getElementById('apellidos').value,
        nota1 = parseFloat(document.getElementById('nota1').value),
        nota2 = parseFloat(document.getElementById('nota2').value),
        nota3 = parseFloat(document.getElementById('nota3').value);

    if (nombre === '' || apellidoEstudiante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    } else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
        Swal.fire({
            icon: "error",
            title: "Las evaluaciones deben estar entre 0 y 100",
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        estudiantes.push({ nombre, apellidoEstudiante, promedio });

        const selectEstudiantes = document.getElementById('seleccionarEstudiante');
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellidoEstudiante;
        option.text = nombre + ' ' + apellidoEstudiante;
        selectEstudiantes.appendChild(option);

        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Evaluación registrada exitosamente",
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    }
}

function calcularPromedioSeleccionado() {
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;
    const resultado = document.getElementById('resultado');

    if (nombreSeleccionado === 'Seleccione un profesor') {
        resultado.textContent = '';
        return;
    }

    let profesorSeleccionado = estudiantes.find(estudiante => 
        estudiante.nombre + ' ' + estudiante.apellidoEstudiante === nombreSeleccionado
    );

    if (profesorSeleccionado) {
        const promedioFormateado = profesorSeleccionado.promedio.toFixed(2);
        resultado.textContent = `El promedio de evaluación de ${nombreSeleccionado} es: ${promedioFormateado}%`;
    } else {
        resultado.textContent = '';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}

const profesores = [];

function agregarProfesor() {
    const nombre = document.getElementById('nombre').value,
        apellidoProfesor = document.getElementById('apellidos').value,
        nota1 = parseFloat(document.getElementById('nota1').value),
        nota2 = parseFloat(document.getElementById('nota2').value),
        nota3 = parseFloat(document.getElementById('nota3').value);

    if (nombre === '' || apellidoProfesor === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    } else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
        Swal.fire({
            icon: "error",
            title: "Las evaluaciones deben estar entre 0 y 100",
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        profesores.push({ nombre, apellidoProfesor, promedio });

        const selectProfesores = document.getElementById('seleccionarEstudiante');
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellidoProfesor;
        option.text = nombre + ' ' + apellidoProfesor;
        selectProfesores.appendChild(option);

        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Evaluación registrada",
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    }
}

function calcularPromedioSeleccionado() {
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;
    const resultado = document.getElementById('resultado');

    if (nombreSeleccionado === 'Seleccione un profesor') {
        resultado.textContent = '';
        return;
    }

    let profesorSeleccionado = profesores.find(profesor => 
        profesor.nombre + ' ' + profesor.apellidoProfesor === nombreSeleccionado
    );

    if (profesorSeleccionado) {
        const promedioFormateado = profesorSeleccionado.promedio.toFixed(2);
        resultado.textContent = `El promedio de evaluación de ${nombreSeleccionado} es: ${promedioFormateado}%`;
    } else {
        resultado.textContent = '';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}

