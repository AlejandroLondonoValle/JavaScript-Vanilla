iniciarApp()

function iniciarApp(params) {
    console.log("Iniciando App");
    segundaFuncion()
}

function segundaFuncion(){
    console.log("Mensaje desde la segunda funcion");
    usuarioAutenticado("Nata")
}

function usuarioAutenticado(usuario) {
    console.log("Autenticando usuario...");
    console.log("Usuario autenticado con exito");
    console.log(`Bienvenid@ ${usuario}`);
}