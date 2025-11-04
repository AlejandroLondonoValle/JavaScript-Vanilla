// Arreglo de carrito de compras
const carrito = []

// Objetos
let producto1 = {
    nombre : "Macbook Air M4",
    precio : 3900000 
}

let producto2 = {
    nombre : "Ipad Pro Chip M4",
    precio : 4900000 
}

// Guardar el o los datos en la ultima posicion del arreglo
carrito.push(producto1, producto2)

console.log(carrito)

let producto3 = {
    nombre : "Iphone 13 pro max",
    precio : 2000000 
}

// Guarda el o los productuos en la primera posicion del arreglo sin dañar el resto
carrito.unshift(producto3)

console.log(carrito)