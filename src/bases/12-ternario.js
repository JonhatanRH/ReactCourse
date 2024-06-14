

const activo = true;

/*
let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
*/
//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
//const mensaje = ( activo ) ? 'Activo' : null;';
//const mensaje = activo && 'Activo'; // Si activo es true, entonces regresa 'Activo'
const mensaje = !activo && 'Activo'; // Si activo es false, entonces regresa 'Activo'
console.log(mensaje);
