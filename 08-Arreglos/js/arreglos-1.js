// Arreglo de numeros
const numeros = [1,2,3,4,5,6,7,8,9,10]

// Arreglo de strings
const meses = ["enero","febrero","marzo","abril"]

// Arreglo de todo tipo de datos incluyendo objetos y arreglos
const deTodo = [1, "enero", true, 3.4 , null , {numbre : "Alejandro"}, [1,2,3,4,5,5.1]]

// Asi se accede a un valor como tal desde su vector indicando su posicion empezando desde 0
console.log(meses[2])

// Asi se cuentan cuantos elementos tiene el arreglo
console.log(meses.length)

// Muestra los indices de el arreglo meses
for (let i = 0; i < meses.length ; i++){
    console.log(i)
}

// Muestra los valores de el arreglo meses
for (let i = 0; i < meses.length ; i++){
    console.log(meses[i])
}

let suma = 0;

// Sumar los datos del arreglo numeros 
for (let iterador = 0; iterador < numeros.length; iterador++) {
    suma += numeros[iterador];
}
console.log(suma); 
