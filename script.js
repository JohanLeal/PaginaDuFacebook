document.addEventListener("DOMContentLoaded", function () {
    const nuevaCuentaLink = document.querySelector(".nueva");
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const cerrarButton = document.getElementById("cerrar");

    nuevaCuentaLink.addEventListener("click", function () {
        overlay.style.display = "block";
    });

    cerrarButton.addEventListener("click", function () {
        overlay.style.display = "none";
    });
});