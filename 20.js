// Metodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    }, 
    pausar: function(){
     console.log('pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist: ${nombre}`)
    },
    reoroducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function (id){
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3840);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reoroducirPlaylist('Heavy Metal');