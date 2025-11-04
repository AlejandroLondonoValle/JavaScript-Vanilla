const producto = {
    nombre : "Celular Samsung",
    precio : 120,
    disponibilidad : true
}

const medidas = {
    peso : "360 gr",
    dimensiones : "8 pulgadas"
}

// Asi se pueden unir varios objetos opcion 1
const union = Object.assign(producto , medidas)

// opcion 2
// const union = {...producto , ... medidas}

console.log(union)

// Keys, Values y Entries

// Mostrar las llaves o indices del objeto en un arreglo (Objetos con llaves {} y arreglos con corchetes [])
console.log(Object.keys(producto))

// Mostrar los valores
console.log(Object.values(producto))

// Mostrar las matrices (llaves y valores) separados por arreglos
console.log(Object.entries(producto))