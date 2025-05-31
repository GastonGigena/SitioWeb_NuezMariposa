/*Login*/
document.addEventListener("DOMContentLoaded", function () {
  const loginFormAside = document.getElementById("loginFormAside");
  if (loginFormAside) {
    loginFormAside.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombreUsuario = document.getElementById("usuario").value;
      alert(
        "¡Hola, " + nombreUsuario + "! Gracias por ingresar a nuestro sitio"
      );
      window.location.reload();
    });
  }
});

/*Carrusel*/

let indice = 0;

function moverCarrusel(direccion) {
  const carrusel = document.getElementById("carrusel");
  const total = carrusel.children.length;
  indice = (indice + direccion + total) % total;
  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}


function scrollSuaveArriba() {
  const duracion = 1000; // 2 segundos
  const inicio = window.scrollY;
  const startTime = performance.now();

  function pasoScroll(timestamp) {
    const tiempoPasado = timestamp - startTime;
    const progreso = Math.min(tiempoPasado / duracion, 1);
    const posicion = inicio * (1 - progreso);
    window.scrollTo(0, posicion);
    if (progreso < 1) {
      requestAnimationFrame(pasoScroll);
    }
  }

  requestAnimationFrame(pasoScroll);
}
