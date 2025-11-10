function suma(num1, num2){
    return num1 + num2
}

const resultado = suma(23,56)
console.log(resultado);

let total = 0
function agregarcarrito(precio) {
    return total += precio
}

function calcularImpuestos(total) {
    return 1.15 * total
}

total = agregarcarrito(200) // Valor 1 
total = agregarcarrito(500) // Valor 2
total = agregarcarrito(300) // Valor 3

console.log(total);
const totalPagar = calcularImpuestos(total)

console.log(`Tu impuesto es de ${totalPagar - total}`);
console.log(`Tienes que pagar en total ${totalPagar}`);

