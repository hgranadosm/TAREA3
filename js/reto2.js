window.onload = function() {
    document.getElementById('btnCalcular').onclick = calcularConversion;
    document.getElementById('btnCalcular2').onclick = calcularConversionColones;
}

function calcularConversion() {
    const montoDolares = Number(document.getElementById('txtMontoDolares').value);
    const tipoCambio = Number(document.getElementById('txtTipoCambio').value);

    if (!montoDolares || !tipoCambio) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const montoColones = montoDolares * tipoCambio;

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
    const montoColones = Number(document.getElementById('txtMontoColones').value);
    const tipoCambio = Number(document.getElementById('txtTipoCambio2').value);

    if (!montoColones || !tipoCambio) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const montoDolares = montoColones / tipoCambio;

    document.getElementById('txtResultadoDolares2').value = montoDolares.toFixed(2);
}

function limpiarFormulario2() {
    document.getElementById('txtMontoColones').value = '';
    document.getElementById('txtTipoCambio2').value = '';
    document.getElementById('txtResultadoDolares2').value = '';
}