// This  
// 

const reservacion = {
    nombre: 'Hiram',
    apellido: 'Granados',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Garcia',
    total: 10000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}


console.log(reservacion.informacion());
console.log(reservacion2.informacion());