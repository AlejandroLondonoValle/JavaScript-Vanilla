// Funciones con parametros
// Funcion saludar con parametros que validan si esta vacio o no, si no lo reemplaza por lo campos que ocupa si si, pone lo que le pongamos
function saludar(nombre = "desconocido", apellido = "") {
    console.log(`Hola, bienvenido ${nombre} ${apellido} a mi archivito JS`);    
}

nombre = prompt("¿Cual es tu nombre?")
apellido = prompt("¿Cual es tu apellido?")

saludar(nombre , apellido)