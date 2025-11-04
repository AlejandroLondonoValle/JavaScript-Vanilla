// -------------------------------------------------------------------------------
// (1) Crea un array con 5 valores

const datosPersonales = [
    { primerNombre: "Luis" },
    { segundoNombre: "Alejandro" },
    { primerApellido: "Londoño" },
    { segundoApellido: "Valle" },
    { edad: 19 }
]
console.log(datosPersonales)

// -------------------------------------------------------------------------------
// (2) Crea un array pidiendole datos al usuario y agregarlos al array

const datosUsuario = []
let nombreUsuario = prompt("¿Cual es su nombre?"); datosUsuario.push(nombreUsuario)
let apellidoUsuario = prompt("¿Cual es su apellido?"); datosUsuario.push(apellidoUsuario)
let telefonoUsuario = prompt("¿Cual es su telefono?"); datosUsuario.push(telefonoUsuario)
let estadoUsuario = prompt("¿Cual es su estado?"); datosUsuario.push(estadoUsuario)
let ciudadUsuario = prompt("¿Cual es su ciudad?"); datosUsuario.push(ciudadUsuario)
console.log(datosUsuario)

// -------------------------------------------------------------------------------
// (2.1). Crea un array pidiendole datos al usuario y agregarlos al array

let datos = []
for (let i = 0; i < 5; i++) {
    let dato = prompt("Ponga cualquier cosa")
    datos.push(dato) //Cada dato va al final
}
console.log(datos)

// -------------------------------------------------------------------------------
// (3) Crea un array de los primeros 50 numeros pares

const pares = []
for (let i = 0; i < 100; i += 2) {
    pares.push(i)
}
console.log(pares)

// -------------------------------------------------------------------------------
//  (4) Crear un array de 10 numeros y validar que solo se ingresen valores positivos en cada posicion 

const array = []
for (let i = 0; i < 10; i++) {

    let valorPositivo = prompt("Ingrese un numero positivo")
    if (valorPositivo < 0) {
        alert("Solo se permiten valores positivos, intentelo nuevamente desde 0")
        i--
    }
    else
        array.push(valorPositivo)
}
console.log(array)