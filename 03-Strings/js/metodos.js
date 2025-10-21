const producto = "Monitor de 29 pulgadas"

// Replace
console.log(producto.replace("29","50")) // Reemplaza el 29 de la variable producto por 50

// Slice 
console.log(producto.slice(0,10)) // Permite extraer una parte de una cadena en este caso desde el indice 0 al 10
console.log(producto.slice(5)) // Permite traer caracteres desde el indice 5 hasta el final
console.log(producto.slice(5,9)) // Permite traer caracteres desde el indice 5 hasta el 9
console.log(producto.slice(1,2)) // Permite traer caracteres desde el indice 1 hatsa el 2
// En este caso si el numero es mayor, no va a cortar hacia atras

// Substring
console.log(producto.substring(0,10)) //Hace lo mismo que slice
console.log(producto.substring(5,9)) // Hace lo mismo que slice
console.log(producto.substring(2,1)) // En este caso si el primer numero es mayor que el segundo, va a contar hacia atras

//Mostrar mi nombre
let primer_nombre = "Luis "
console.log(`Mi primer nombre es ${primer_nombre}`)

//Mostrar mi nombre letra por letra
console.log(`La primera letra de mi primer nombre es ${primer_nombre.slice(0,1)}`)
console.log(`La segunda letra de mi primer nombre es ${primer_nombre.substring(1,2)}`)
console.log(`La tercera letra de mi primer nombre es ${primer_nombre.slice(2,3)}`)
console.log(`La cuarta letra de mi primer nombre es ${primer_nombre.substring(3,4)}`)
console.log(`${primer_nombre.substring(4,5)}`)

// Mostrar mi nombre letra por letra mas facil
console.log(`La primera letra de mi primer nombre es ${primer_nombre.charAt(0)}`)
console.log(`La segunda letra de mi primer nombre es ${primer_nombre[1]}`)
console.log(`La tercera letra de mi primer nombre es ${primer_nombre.charAt(2)}`)
console.log(`La cuarta letra de mi primer nombre es ${primer_nombre[3]}`)
console.log(`${primer_nombre.charAt(4)}`)

// Repeat
console.log(primer_nombre.repeat(3))

const texto = " en promocion".repeat(3) // Repitiendo 3 veces en la misma const
console.log(`El producto ${producto.repeat(5)} esta${texto}`) //tambien se podria desde el mismo console log


// Split
const actividad = "Estoy aprendiendo JavaScript Moderno en el Sena"
console.log(actividad.split(" ")) // Convierte esta cadena en un array separandolas por espacios (" ")
console.log(actividad.split("e")) // Convierte esta cadena en un array separandolas por la letra ("e")
console.log(actividad.split("S")) // Convierte esta cadena en un array separandolas por la letra ("S")

const hobbies = "leer,comer,ir a cine,jugar futbol,dormir"
console.log(hobbies.split(",")) // Convierte esta cadena en un array separandolas por las comas (",")

// Convertir de minuscula a mayuscula
console.log(hobbies.toLowerCase()) //Convierte todo a minuscula
console.log(hobbies.toUpperCase()) //Convierte todo a mayuscula

//ahora separados
console.log(hobbies.toLowerCase().split(",")) //Convierte todo a minuscula
console.log(hobbies.toUpperCase().split(",")) //Convierte todo a mayuscula

// ahora solo la primera letra ya que no hay capitalize
console.log(primer_nombre.charAt(0).toUpperCase() + primer_nombre.slice(1))

// toString()
const cantidad = 2000
console.log(`${cantidad} tipo ${typeof cantidad}`) //Muestra el tipo de variable o dato que es
console.log(`${cantidad.toString()} tipo ${typeof cantidad.toString()}`) // lo convierte a string  y muestra que tipo de dato es
