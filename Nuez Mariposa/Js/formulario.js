/*Formulario de contacto*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');
    const mensajeEstado = document.getElementById('mensaje-estado');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzE8lhyWb8Ctg7v5jsusyXpldBwjfBa0LmOkwlyNKAzmcEPlHcAEVRAmyEFE4R5yaaWqQ/exec';

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const datos = new FormData(form);
            fetch(scriptURL, { method: 'POST', body: datos })
                .then(response => {
                    mostrarMensaje("Formulario enviado correctamente.", "green");
                    form.reset();
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

    const comproSi = document.getElementById('compro-si');
    const comproNo = document.getElementById('compro-no');
    const selectorContainer = document.getElementById('selector-container');

    function toggleSelector() {
        selectorContainer.style.display = comproSi.checked ? 'block' : 'none';
    }

    if (comproSi && comproNo) {
        comproSi.addEventListener('change', toggleSelector);
        comproNo.addEventListener('change', toggleSelector);
    }
});