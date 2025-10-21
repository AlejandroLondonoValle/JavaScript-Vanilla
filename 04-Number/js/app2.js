let resultado

//PI
resultado = Math.PI

// Redondear 
resultado = Math.round(2.5) // Redondea hacia abajo desde 4 y arriba desde 5

// Redondear con Ceil
resultado = Math.ceil(2.1) // Solo redondea hacia arriba

// Raiz cuadrada
resultado = Math.sqrt(81)
resultado = 81 ** (1/3) // Raiz cubica 

// Valor Absoluto
resultado = Math.abs(-200)

// Potencia
resultado = Math.pow(8,3) // pow(numero base, numero al que vamos a elevar)
resultado = 8 ** 3

// Valor Minimo
resultado = Math.min(3,5,6,7,8,1,2,4,43,-9) // Retorna el valor minimo de una lista o arreglo de numeros

// Valor Maximo 
resultado = Math.max(3,5,6,7,8,1,2,4,43,-9) // Retorna el valor maximo de una lista o arreglo de numeros

// Numero Aleatorio
resultado = Math.random() // Solo entre 0 y 1

// Numero Aleatorio entre cierto rango
resultado = Math.floor(Math.random() * 10) // El rango va desde el 0 hasta el numero que se multiplica

resultado = (20 + 30 * 2)
resultado = (20 + 30) * 2

let nota1 = 4.3
let nota2 = 2.0
let nota3 = 5.0
let nota4 = 1.0

resultado = (nota1 + nota2 + nota3 + nota4) / 4
resultado = Math.round((nota1 + nota2 + nota3 + nota4) / 4)
resultado = Math.floor((nota1 + nota2 + nota3 + nota4) / 4)
resultado = Math.ceil((nota1 + nota2 + nota3 + nota4) / 4)
resultado = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1) // Numero de decimales que voy a mostrar pero convierte el numero en string

resultado = Number.parseFloat(resultado) // Convierte string a numero float
resultado = Number.parseInt(resultado) // Convierte string a numero entero

resultado = resultado.toString() // Convierte numero float o int a string

console.log(resultado)

