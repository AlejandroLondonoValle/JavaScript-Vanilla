// Puedes meter un objeto dentro de un objeto
const producto = {
    nombre : "Monitor de 20 pulgadas",
    valor : 30,
    marca: "Samsung",
    disponibilidad : true,
    calificacion : 4.6,
    informacion : {
        peso : "1 Kg",
        medida : "120 cm",
        hz : 144,
        tipoPantalla : "QLED"
    }
}

// Me muestra solo el producto
console.log(producto)

// Me muestra la informacion del producto
console.log(producto.informacion)

// Me muestra el peso ubicado en la informacion ubicado en producto
console.log(producto.informacion.peso)

// Almacena el tipo de pantalla en una variable aparte (Importante ser muy especifico en la ruta)
const {tipoPantalla} = producto.informacion
console.log(tipoPantalla)

// // Freeze hace que no pueda ni eliminar ni añadir mas propiedades dentro del objeto
// Object.freeze(producto)

// // No permite eliminar ni modificar el objeto
// delete producto.nombre
// producto.disponibilidad = false

// console.log(producto)

// Seal solo permite reasignar valores no permite eliminar ni crear propiedades
Object.seal(producto)

producto.disponibilidad = false
producto.precio = 23
delete producto.nombre
console.log(producto)

