/*
Los metodos de propiedad, es decir son funciones con una sintaxis similar a las de un metodo
*/

const reproducir = {
    reproducir : function (id){
        console.log(`Reproducir la cancion con el id ${id}`);
    },
    pausar : function () {
        console.log("Pausando...");
    },
    borrar : function () {
        console.log(`Borrando la cancion con el id ${id}`);
    }
}