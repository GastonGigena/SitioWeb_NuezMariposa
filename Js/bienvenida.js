document.addEventListener("DOMContentLoaded", function () {
    const nombre = localStorage.getItem("nombreUsuario") || "usuario";
    const mensajeElemento = document.getElementById("mensaje");
  
    if (mensajeElemento) {
      mensajeElemento.innerHTML =
        "¡Hola,<br><strong>" + nombre + "</strong>!<br>Gracias por ingresar a nuestro sitio";
    }
  
    // Redirigir al home luego de 5 segundos
    setTimeout(() => {
      window.location.href = "index.html";
    }, 5000);
  });