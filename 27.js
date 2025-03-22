// POO

// Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object contructor

function Cliente(nombre,apellido) {
    this.nombre =nombre;
    this.apellido =apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
}

//Crear funciones que solo se utilizan en un objeto en espesifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 1200);

const cliente = new Cliente('Hiram','Granados');

console.log(cliente);

function formatearProducto(producto ) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

