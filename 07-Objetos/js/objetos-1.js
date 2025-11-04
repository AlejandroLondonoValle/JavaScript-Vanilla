// Se instancia el objeto y se le asignan propiedades que son variables con un valor dado, y son almacenadas en el objeto seguidas de comas
const producto = {
    nombre : "Monitor de 20 pulgadas",
    valor : 30,
    marca: "Samsung",
    disponibilidad : true,
    calificacion : 4.6
}

// Asi lo visualizo en consola
console.log(producto)

// Y asi visualizo solo una propiedad especifica de una consola
console.log(producto.nombre)

// Asi la concateno con `` para mostrarlas en consola
console.log(`Acabas de comprar el ${producto.nombre} de la marca ${producto.marca}, por un valor de ${producto.valor}`)

// Conctenacion simple con +
console.log("Con una valoracion de " + producto.calificacion)

// Asi agrego una nueva propiedad a mi objeto
producto.imagen = "imagen.png"

// Asi lo visualizo en consola con la nueva propiedad
console.log(producto)

// Eliminar una propiedad
delete producto.marca

// Asi lo visualizo en consola con la eliminacion de la propiedad marca
console.log(producto)

// Saca una o mas propiedes del objeto y las convierte en unas variables apartes para ser llamada despues sin alterar el objeto como tal
const {calificacion , nombre} = producto
console.log(calificacion)
console.log(nombre)

console.log(producto)

