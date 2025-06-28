window.onload = function() {
    document.getElementById('btnCalcular').addEventListener('click', calcularTotal);
}

function calcularTotal() {
    // Obtener valores del formulario
    const cliente = document.getElementById('txtCliente').value;
    const articulo = document.getElementById('txtArticulo').value;
    const cantidad = Number(document.getElementById('txtCantidad').value);
    const precio = Number(document.getElementById('txtPrecio').value);

    // Calcular valores
    const subtotal = cantidad * precio;
    const iva = subtotal * 0.13;
    const servicio = subtotal * 0.05;
    const total = subtotal + iva + servicio;

    // Mostrar resultados
    document.getElementById('txtResultadoCliente').value = cliente;
    document.getElementById('txtResultadoArticulo').value = articulo;
    document.getElementById('txtResultadoCantidad').value = cantidad;
    document.getElementById('txtResultadoPrecio').value = precio;
    document.getElementById('txtResultadoSubtotal').value = subtotal;
    document.getElementById('txtResultadoIVA').value = iva;
    document.getElementById('txtResultadoServicio').value = servicio;
    document.getElementById('txtResultadoTotal').value = total;
}

function limpiarFormulario() {
    document.getElementById('txtCliente').value = '';
    document.getElementById('txtArticulo').value = '';
    document.getElementById('txtCantidad').value = '';
    document.getElementById('txtPrecio').value = '';
    document.getElementById('txtResultadoCliente').value = '';
    document.getElementById('txtResultadoArticulo').value = '';
    document.getElementById('txtResultadoCantidad').value = '';
    document.getElementById('txtResultadoPrecio').value = '';
    document.getElementById('txtResultadoSubtotal').value = '';
    document.getElementById('txtResultadoIVA').value = '';
    document.getElementById('txtResultadoServicio').value = '';
    document.getElementById('txtResultadoTotal').value = '';
}