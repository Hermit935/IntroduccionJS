// Promise

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth  = false ;
    
    if (auth) {
        resolve('Usuario autenticado'); // EL PROMISE SE CUMPLE
    }else {
        reject('Usuario no autenticado');  // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))

    .catch( error => console.log(error))


// EN LOS PROMISES EXISTEN 3 VALORES 
// PENDING : NO SE HA CUMPLIDO PERO TAMPOCO SE HA RECHAZADO
//FULLFILLED : YA SE CUMPLIO
//REJECT : NO SE PUDO CUMPLIR