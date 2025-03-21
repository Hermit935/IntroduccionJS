// POO

// Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object contructor

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
}

function Cliente (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 8000);

const cliente = new Cliente('Hiram','Granados');

console.log(cliente);

function formatearProducto(producto ) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2));
console.log(formatearProducto(cliente));


//Crear funciones que solo se utilizan en un objeto en espesifico

Producto.prototype.formatearProducto = function() {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}