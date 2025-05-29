document.addEventListener("DOMContentLoaded", function () {
    const loginFormAside = document.getElementById("loginFormAside");
    if (loginFormAside) {
        loginFormAside.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombreUsuario = document.getElementById("usuario").value;
            alert("¡Hola, " + nombreUsuario + "! Gracias por ingresar a nuestro sitio");
            window.location.reload();
        });
    }
});