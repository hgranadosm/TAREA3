function mostrarInfo(opcion) {
    const info = document.getElementById("info");
    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");
  
    switch(opcion) {
      case 1:
        titulo.textContent = "Tienda de Campaña";
        descripcion.textContent = "Proporciona refugio y protección contra el clima durante tus aventuras al aire libre.";
        break;
      case 2:
        titulo.textContent = "Saco de Dormir";
        descripcion.textContent = "Ideal para mantener el calor y descansar cómodamente durante la noche.";
        break;
      case 3:
        titulo.textContent = "Mochila";
        descripcion.textContent = "Perfecta para transportar todo tu equipo esencial durante tus caminatas.";
        break;
      case 4:
        titulo.textContent = "Linterna";
        descripcion.textContent = "Indispensable para iluminar tu camino o el interior de la tienda durante la noche.";
        break;
      case 5:
        titulo.textContent = "Botiquín de Primeros Auxilios";
        descripcion.textContent = "Contiene los elementos básicos para atender pequeñas emergencias y cortes.";
        break;
    }
  
    info.style.display = "block";
  }