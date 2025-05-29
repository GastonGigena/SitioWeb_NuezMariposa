document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');
    const mensajeEstado = document.getElementById('mensaje-estado');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzNq1boHkIV4LF41beCKnphS9l_6iuTODAi3vBCAUTF-GeNmZ50SNcTq4Lzih-q_7WDIA/exec';

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

    const estudiaSi = document.getElementById('estudia-si');
    const estudiaNo = document.getElementById('estudia-no');
    const selectorContainer = document.getElementById('selector-container');

    function toggleSelector() {
        selectorContainer.style.display = estudiaSi.checked ? 'block' : 'none';
    }

    if (estudiaSi && estudiaNo) {
        estudiaSi.addEventListener('change', toggleSelector);
        estudiaNo.addEventListener('change', toggleSelector);
    }
});