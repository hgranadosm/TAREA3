window.onload = function() {
    document.getElementById('btnCalcular').onclick = calcularConversion;
    document.getElementById('btnCalcular2').onclick = calcularConversionColones;
}

function calcularConversion() {
    // Obtener valores del formulario
    const montoDolares = Number(document.getElementById('txtMontoDolares').value);
    const tipoCambio = Number(document.getElementById('txtTipoCambio').value);

    // Validar que los campos no estén vacíos
    if (!montoDolares || !tipoCambio) {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Realizar conversiones
    const montoColones = montoDolares * tipoCambio;

    // Mostrar resultados
    document.getElementById('txtResultadoColones').value = montoColones.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('txtMontoDolares').value = '';
    document.getElementById('txtTipoCambio').value = '';
    document.getElementById('txtResultadoColones').value = '';
    document.getElementById('txtResultadoDolares').value = '';
}

function btnlimpiar(){
    document.getElementById('txtCodigo').value = "";
    document.getElementById('txtCant').value = "";
    document.getElementById('slttipogamer').value = "";
    document.getElementById('txtResultadoMontoFinal').value = "";
}


function calcularConversionColones() {
    // Obtener valores del formulario
    const montoColones = Number(document.getElementById('txtMontoColones').value);
    const tipoCambio = Number(document.getElementById('txtTipoCambio2').value);

    // Validar que los campos no estén vacíos
    if (!montoColones || !tipoCambio) {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Realizar conversión de colones a dólares
    const montoDolares = montoColones / tipoCambio;

    // Mostrar resultado
    document.getElementById('txtResultadoDolares2').value = montoDolares.toFixed(2);
}

function limpiarFormulario2() {
    document.getElementById('txtMontoColones').value = '';
    document.getElementById('txtTipoCambio2').value = '';
    document.getElementById('txtResultadoDolares2').value = '';
}