const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];



//forEach   ITERAR SOBRE UN ARREGLO Y MOSTRAR LOS ELEMENTOS EN PANTALLA / ENVIARLOS A LA CONSOLA

//  carrito.forEach(function(producto) {
//      console.log(producto.nombre)
//  });

 carrito.forEach(producto =>console.log(producto.nombre));

//Map       PARA CREAR UN NUEVO ARREGLO

carrito.map(producto =>console.log(producto.nombre));