const boolean1 = true
const boolean2 = false
const boolean3 = new Boolean(true)

// Condicionales If y else en Js
if(boolean1 == true){
    console.log("Si es true")
}
else{
    console.log("No es true")
}

// Cuando hay solo una linea de codigo en la condicional, no son necesarias las llaves, de lo contrario si son necesarias
if(boolean2 == true)
    console.log("Si es true")
else
    console.log("No es true")


// Cuando solo se necesita verificar una condicion, este es el metodo mas rapido 
console.log(boolean1 ? "Si es true" : "No es true")