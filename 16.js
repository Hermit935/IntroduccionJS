
// Declaracoin de funcion 

function sumar () {
    console.log(10*10);
}

sumar ();

// Exprecion de la funcion
const sumar2 = function () {
    console.log(3+3);
}

sumar2 ();


// IIFE
(function() {
    console.log('Esto es una funcion');
})();