// Formas de usar un string
let producto = "Celular Samsung"
let producto1 = String("Computador")
const producto2 = new String('Monitor') // New crea un nuevo objeto
// const producto3 = new String("Monitor') // No se puede hacer, con la comilla que abro con esa misma cierro

const precio = "20 USD"

console.log(`El producto ${producto} vale ${precio}`)

console.log(producto.length) // Cuenta los caracteres que tiene la variable en este no se usa el () despues de length como en python

// IndexOf
console.log(producto.indexOf("Samsung")) // es donde empieza la palabra "Samsung" en la variable producto, emepzando desde 0
// Si la palabra no esta dentro de la variable, va a aparecer siempre -1

// Includes
console.log(producto.includes("Celular")) // indica si la variable producto contiene o incluye o no la palabra "Celular" - True
console.log(producto.includes("Celular")) // indica si la variable producto contiene o incluye o no la palabra "celular" - False

// Concat
console.log(producto.concat(" En Desceunto")) // Concatena o agrega " En Desceunto" al final de la variable producto

//trimStart() - trimEnd() - trim()
const articulo = "     Articulo en venta    "
console.log(articulo.trimStart()) // Elimina los espacios al inicio
console.log(articulo.trimEnd() + " " + articulo.trimEnd().length) // Elimina los espacios al final y cuenta caracteres
console.log(articulo.trimStart().trimEnd()+ " " + articulo.trimStart().trimEnd().length) // Elimina los espacios al inicio y final concatenando funciones y cuenta caracteres
console.log(articulo.trim() + " " + articulo.trim().length) // Elimina los espacios al inicio y al final de una sola vez y cuenta caracteres


