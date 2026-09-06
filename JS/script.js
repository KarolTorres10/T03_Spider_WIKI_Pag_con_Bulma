/*Abrir modal*/
function abrirModal(idModal) {
    document.getElementById(idModal).classList.add('is-active');
/*scroll off*/
    document.documentElement.classList.add('is-clipped');
}

/*Cerrar modal*/
function cerrarModal(idModal) {
    document.getElementById(idModal).classList.remove('is-active');
/*scroll on*/
    document.documentElement.classList.remove('is-clipped');
}
