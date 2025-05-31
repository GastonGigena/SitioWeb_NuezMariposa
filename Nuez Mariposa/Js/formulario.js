/*Formulario de contacto*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');
    const mensajeEstado = document.getElementById('mensaje-estado');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzE8lhyWb8Ctg7v5jsusyXpldBwjfBa0LmOkwlyNKAzmcEPlHcAEVRAmyEFE4R5yaaWqQ/exec';

    const comproSi = document.getElementById('compro-si');
    const comproNo = document.getElementById('compro-no');
    const selectorContainer = document.getElementById('selector-container');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const datos = new FormData(form);

            // Si el usuario seleccionó "No", eliminar el campo del selector
            if (comproNo && comproNo.checked) {
                datos.delete('donde'); // Elimina el campo del <select name="donde">
            }

            fetch(scriptURL, { method: 'POST', body: datos })
                .then(response => {
                    alert("Formulario enviado correctamente.");
                    form.reset();
                    selectorContainer.style.display = 'none'; // Ocultar selector después del envío
                })
                .catch(error => {
                    console.error('Error:', error);
                    mostrarMensaje("Ocurrió un error. Intente nuevamente.", "red");
                });
        });
    }

    function mostrarMensaje(texto, color) {
        mensajeEstado.innerHTML = `<p style="color: ${color};">${texto}</p>`;
        setTimeout(() => { mensajeEstado.innerHTML = ""; }, 5000);
    }

    function toggleSelector() {
        selectorContainer.style.display = comproSi && comproSi.checked ? 'block' : 'none';
    }

    if (comproSi && comproNo) {
        comproSi.addEventListener('change', toggleSelector);
        comproNo.addEventListener('change', toggleSelector);
    }
});

const carrusel = document.getElementById("carruselHome");
const total = carrusel.children.length; // 10 imágenes
let indiceLoop = 0;

function moverCarrusel() {
  indiceLoop++;
  carrusel.style.transition = "transform 1s ease-in-out";
  carrusel.style.transform = `translateX(-${indiceLoop * 499}px)`;

  if (indiceLoop === total / 2) {
    carrusel.addEventListener('transitionend', resetCarrusel, { once: true });
  }
}

function resetCarrusel() {
  carrusel.style.transition = "none";
  carrusel.style.transform = "translateX(0)";
  indiceLoop = 0;

  carrusel.offsetHeight; // fuerza reflow

  setTimeout(() => {
    carrusel.style.transition = "transform 1s ease-in-out";
  }, 50);
}

setInterval(moverCarrusel, 4000);