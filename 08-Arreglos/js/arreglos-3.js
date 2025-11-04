const carrito = [
    { nombre : "Monitor 20 pulgadas" , precio : 500},    
    { nombre : "Televisor 5o pulgadas" , precio : 700},
    { nombre : "Tablet" , precio : 300},
    { nombre : "Audifonos" , precio : 200},
    { nombre : "Teclado" , precio : 50},
    { nombre : "Celular" , precio : 500}    
]

// Imprimir normal
for (let i = 0; i < carrito.length ; i++){
    console.log(carrito[i])
}

// Imprimir con estilo y orden
for (let i = 0; i < carrito.length ; i++){
    console.log(`Articulo: ${carrito[i].nombre} ----- Precio: ${carrito[i].precio}`)
}

console.log("")

// Imprimir con for each (producto es el nombre de una variable cualquiera)
carrito.forEach( function (producto){
    console.log(`Articulo: ${producto.nombre} ----- Precio: ${producto.precio}`)
})