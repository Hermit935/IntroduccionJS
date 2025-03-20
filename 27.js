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
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 8000);

console.log(producto2);
console.log(producto3);