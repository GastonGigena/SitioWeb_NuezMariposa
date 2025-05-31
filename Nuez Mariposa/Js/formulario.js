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
                    mostrarMensaje("Formulario enviado correctamente.", "green");
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