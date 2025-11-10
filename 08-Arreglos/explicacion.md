Aquí tienes **tus notas completas, claras, profesionales y hermosas** sobre **Arreglos en JavaScript**, siguiendo exactamente el estilo que estás usando en tu repositorio ✅

Quedan divididas en **Arreglos 1, Arreglos 2 y Arreglos 3**, cada uno con explicaciones, tablas, notas y buenas prácticas.

---

# 08 - Arreglos en JavaScript

Los arreglos son estructuras que permiten almacenar múltiples valores en una sola variable.
Pueden contener números, cadenas, booleanos, objetos ¡e incluso otros arreglos!
Aquí aprenderás cómo acceder, recorrer y manipular arreglos básicos.

---

# 📂 Archivo

`08-Arreglos/arreglos.js`

---

# ✅ Arreglos 1 — Creación, acceso y ciclos básicos

---

## 📘 Creación de arreglos

```javascript
const numeros = [1,2,3,4,5,6,7,8,9,10]
const meses = ["enero","febrero","marzo","abril"]
const deTodo = [1, "enero", true, 3.4 , null , {numbre : "Alejandro"}, [1,2,3,4,5,5.1]]
```

### ✅ Características importantes

| Arreglo   | Contiene     | Destacado                                |
| --------- | ------------ | ---------------------------------------- |
| `numeros` | Solo números | Ideal para cálculos                      |
| `meses`   | Strings      | Útil para listas de texto                |
| `deTodo`  | Tipos mixtos | JavaScript permite arreglos heterogéneos |

---

## 🔎 Acceder a un elemento del arreglo

```javascript
console.log(meses[2])
```

✅ Muestra `"marzo"` (los índices empiezan en **0**).

---

## 📏 Saber cuántos elementos tiene un arreglo

```javascript
console.log(meses.length)
```

✅ Devuelve la cantidad de elementos.

---

## 🔄 Recorrer un arreglo con `for`

### Mostrar solo los índices:

```javascript
for (let i = 0; i < meses.length ; i++){
    console.log(i)
}
```

✅ Imprime: `0`, `1`, `2`, `3`

---

### Mostrar los valores del arreglo

```javascript
for (let i = 0; i < meses.length ; i++){
    console.log(meses[i])
}
```

✅ Imprime cada mes.

---

## ➕ Sumar todos los números de un arreglo

```javascript
let suma = 0;

for (let iterador = 0; iterador < numeros.length; iterador++) {
    suma += numeros[iterador];
}

console.log(suma);
```

✅ Resultado: **55**
✅ Recorre cada número y lo va sumando.

---

# ✅ Arreglos 2 — Push, Unshift y objetos dentro de arreglos

---

## 🛒 Crear un arreglo vacío

```javascript
const carrito = []
```

✅ El arreglo empieza sin elementos.

---

## 🧱 Objetos para el carrito

```javascript
let producto1 = { nombre : "Macbook Air M4", precio : 3900000 }
let producto2 = { nombre : "Ipad Pro Chip M4", precio : 4900000 }
```

---

## ➕ Agregar elementos al final (`push`)

```javascript
carrito.push(producto1, producto2)
console.log(carrito)
```

✅ `push()` agrega elementos al **final** del arreglo.
✅ Permite agregar uno o varios.

---

## ➕ Agregar elementos al inicio (`unshift`)

```javascript
let producto3 = { nombre : "Iphone 13 pro max", precio : 2000000 }

carrito.unshift(producto3)
console.log(carrito)
```

✅ `unshift()` agrega elementos al **inicio** del arreglo sin borrar los demás.

---

# ✅ Arreglos 3 — Recorridos y ForEach

---

## 🛍️ Arreglo de objetos (carrito de compras)

```javascript
const carrito = [
    { nombre : "Monitor 20 pulgadas" , precio : 500},    
    { nombre : "Televisor 50 pulgadas" , precio : 700},
    { nombre : "Tablet" , precio : 300},
    { nombre : "Audifonos" , precio : 200},
    { nombre : "Teclado" , precio : 50},
    { nombre : "Celular" , precio : 500}    
]
```

Cada elemento es un **objeto** con propiedades `nombre` y `precio`.

---

## 🔄 Recorrido tradicional con `for`

```javascript
for (let i = 0; i < carrito.length ; i++){
    console.log(carrito[i])
}
```

✅ Muestra cada objeto completo.

---

## 🎨 Recorrido con estilo personalizado

```javascript
for (let i = 0; i < carrito.length ; i++){
    console.log(`Articulo: ${carrito[i].nombre} ----- Precio: ${carrito[i].precio}`)
}
```

✅ Perfecto para mostrar datos formateados.

---

## ✅ Recorrer con `forEach` (más moderno)

```javascript
carrito.forEach( function (producto){
    console.log(`Articulo: ${producto.nombre} ----- Precio: ${producto.precio}`)
})
```

### ✅ Ventajas de `forEach`

* Más limpio
* No usa índices
* Ideal para recorrer arreglos de objetos
* Más legible y moderno

---

# ✅ Resumen general

| Tema               | Descripción                                          |
| ------------------ | ---------------------------------------------------- |
| Crear arreglos     | `[1,2,3]`, `["a","b"]`                               |
| length             | Devuelve cantidad de elementos                       |
| Acceder por índice | `arreglo[2]`                                         |
| Recorrer con for   | Control total del índice                             |
| forEach            | Recorrido más moderno                                |
| push               | Agrega al final                                      |
| unshift            | Agrega al inicio                                     |
| Arreglos mixtos    | JS permite diferentes tipos dentro del mismo arreglo |

---

# ✅ Buenas prácticas

✅ Usar `const` para arreglos (su contenido puede modificarse).
✅ Usar `forEach` para recorrer listas de objetos.
✅ Evitar arreglos desordenados o con tipos inesperados.
✅ Mantener nombres descriptivos (`carrito`, `numeros`, `meses`).

Perfecto, aquí tienes una **unidad completa, hermosa, clara y profesional** sobre los **métodos avanzados de arreglos en JavaScript**.
Este es uno de los temas más importantes y usados en la vida real como desarrollador.

Puedes copiarlo tal cual en tu repositorio ✅

---

# Métodos Avanzados de Arreglos en JavaScript

Los métodos avanzados permiten **transformar, filtrar, buscar, validar y reducir** arreglos de forma declarativa y elegante.
Son esenciales para trabajar con datos, especialmente cuando usas objetos dentro de arreglos (como carritos, usuarios, productos, etc).

# ✅ `map()` — Crear un nuevo arreglo transformado

---

## 🧠 ¿Qué hace?

Crea un **nuevo arreglo** aplicando una transformación a cada elemento del arreglo original.

✅ No modifica el arreglo original
✅ Devuelve un arreglo nuevo del mismo tamaño

---

## ✅ Ejemplo explicativo

```javascript
const precios = [100, 200, 300]

const preciosConIVA = precios.map(precio => precio * 1.19)

console.log(preciosConIVA)
// [119, 238, 357]
```

✅ Cada elemento es transformado
✅ Ideal para aplicar cambios o generar vistas basadas en datos

---

## ⭐ Cuándo usar `map`

* Crear una nueva versión del arreglo
* Aumentar valores
* Transformar objetos
* Formatear datos para mostrarlos en pantalla

---

# ✅ `filter()` — Filtrar elementos que cumplan una condición

---

## 🧠 ¿Qué hace?

Devuelve un **nuevo arreglo** con los elementos que cumplan una condición.

✅ No modifica el original
✅ El arreglo puede tener menos elementos

---

## ✅ Ejemplo explicativo

```javascript
const productos = [
    { nombre: "Celular", precio: 600 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "TV", precio: 800 }
]

const baratos = productos.filter(producto => producto.precio < 500)

console.log(baratos)
// [{ nombre: "Tablet", precio: 300 }]
```

✅ Devuelve solo los productos baratos

---

## ⭐ Cuándo usar `filter`

* Filtrar por precio
* Mostrar solo disponibles
* Buscar por categoría
* Eliminar elementos sin modificar el original

---

# ✅ `reduce()` — Reducir un arreglo a un solo valor

---

## 🧠 ¿Qué hace?

Toma todos los elementos del arreglo y los reduce a **un único valor**.

Puede ser:

* Un número
* Un objeto
* Un arreglo
* Un string

✅ Recorre todo el arreglo
✅ Muy usado para sumas, promedios y totales

---

## ✅ Ejemplo explicativo

```javascript
const carrito = [
    { nombre: "Celular", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audífonos", precio: 200 }
]

const total = carrito.reduce((acumulador, producto) => 
    acumulador + producto.precio
, 0)

console.log(total)
// 1000
```

---

## ⭐ Cuándo usar `reduce`

* Calcular totales
* Contar elementos
* Agrupar datos
* Crear estadísticas

---

# ✅ `find()` — Buscar un solo elemento

---

## 🧠 ¿Qué hace?

Devuelve **el primer elemento** que cumpla la condición.

✅ Solo devuelve uno
✅ Si no encuentra, devuelve `undefined`

---

## ✅ Ejemplo explicativo

```javascript
const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" }
]

const usuario = usuarios.find(u => u.id === 2)

console.log(usuario)
// { id: 2, nombre: "Luis" }
```

---

## ⭐ Cuándo usar `find`

* Buscar un usuario por ID
* Buscar un producto por nombre
* Localizar un elemento único

---

# ✅ `some()` — Verifica si *al menos uno* cumple la condición

---

## 🧠 ¿Qué hace?

Devuelve `true` si al menos **uno** de los elementos cumple la condición.

✅ No devuelve elementos
✅ Solo devuelve `true` o `false`

---

## ✅ Ejemplo explicativo

```javascript
const numeros = [1, 3, 5, 8]

const hayPares = numeros.some(num => num % 2 === 0)

console.log(hayPares)
// true
```

---

## ⭐ Cuándo usar `some`

* Preguntar si existe al menos un producto caro
* Verificar si alguien está registrado
* Validar al menos un elemento

---

# ✅ `every()` — Verifica si *todos* cumplen la condición

---

## 🧠 ¿Qué hace?

Devuelve `true` si **todos** los elementos cumplen la condición.

✅ Similar a `some`, pero exige que todos pasen

---

## ✅ Ejemplo explicativo

```javascript
const edades = [18, 19, 21, 22]

const sonAdultos = edades.every(edad => edad >= 18)

console.log(sonAdultos)
// true
```

---

## ⭐ Cuándo usar `every`

* Validar que todos los estudiantes aprobaron
* Validar que todos los productos tienen precio
* Validar que todos los elementos cumplen un estándar

---

# ✅ Comparación general de métodos

| Método   | Devuelve       | Recorre todo              | Uso principal        |
| -------- | -------------- | ------------------------- | -------------------- |
| `map`    | Nuevo arreglo  | ✅                         | Transformar          |
| `filter` | Nuevo arreglo  | ✅                         | Filtrar              |
| `reduce` | Un valor único | ✅                         | Calcular / reducir   |
| `find`   | Un elemento    | ❌ se detiene al encontrar | Buscar uno           |
| `some`   | true/false     | ❌ se detiene al encontrar | Verificar existencia |
| `every`  | true/false     | ❌ se detiene al fallar    | Validar reglas       |

---

# ✅ Buenas prácticas

✅ Usar `map`, `filter` y `reduce` para evitar ciclos manuales
✅ No modificar el arreglo original
✅ Preferir funciones flecha por claridad
✅ Usar nombres descriptivos para cada variable
✅ Recordar que estos métodos son *declarativos* y más legibles

