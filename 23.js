const metodoPago = 'efectivo'

switch (metodoPago) {
    case 'tajeta':
        console.log('Pagaste con tajeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque');
        break  
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break      
    default: 
    console.log('Aun no haz pagado');
    break;
}