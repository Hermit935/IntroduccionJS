function obtenerEmpleado() {

    const archivo = 'empleados.json';

    fetch(archivo)
        .then( resultado => {
        console.log(resultado)
    })
}
obtenerEmpleado();