'use strict';
// Obejtos 
const producto = {
    nombreProducto : 'Monitor 20 Pulgadas', 
    precio: 300,
    disponible: true,
}

Object.seal(producto); // .Freeze .Seal (Seal permite modificar)

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);