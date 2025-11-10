# 10 - Funciones en JavaScript

Las funciones son bloques de código reutilizables que realizan una tarea específica.
Son fundamentales en JavaScript y existen **miles de funciones nativas** además de las que tú puedes crear.

---

# 📂 Archivo

`10-Funciones/funciones.js`

---

# ✅ Funciones 1 — Declaración, llamado y funciones nativas

---

## 🟡 Crear una función simple

```javascript
function suma() {
    console.log(2 + 8)
}
```

### ✅ ¿Qué hace?

* Define una función llamada `suma`
* No recibe parámetros
* Imprime el resultado de `2 + 8`

---

## ▶️ Llamar una función

```javascript
suma()
```

✅ Ejecuta el bloque de código que está dentro de la función.

---

## 🧩 Funciones nativas del navegador

```javascript
/*
alert("Esta es una alerta")
edad = prompt("¿Cual es su edad?")
console.log(`Tu tienes ${edad} años`);
console.log(parseInt(numero2));
*/
```

Estas son funciones **predefinidas**:

| Función      | ¿Qué hace?                       |
| ------------ | -------------------------------- |
| `alert()`    | Muestra una ventana emergente    |
| `prompt()`   | Pide un dato al usuario          |
| `parseInt()` | Convierte texto en número entero |

---

## 🔤 Métodos de strings (funciones internas)

```javascript
nombre = "micky";
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
```

✅ `.toLowerCase()` pasa todo a minúsculas
✅ `.toUpperCase()` pasa todo a mayúsculas

---

# ✅ Funciones 2 — Parámetros y valores por defecto

---

## 🟡 Declarar función con parámetros

```javascript
function saludar(nombre = "desconocido", apellido = "") {
    console.log(`Hola, bienvenido ${nombre} ${apellido} a mi archivito JS`);    
}
```

✅ Recibe dos parámetros: `nombre` y `apellido`
✅ Si no se envían, usa valores por defecto

---

## ▶️ Obtener datos del usuario

```javascript
nombre = prompt("¿Cual es tu nombre?")
apellido = prompt("¿Cual es tu apellido?")
```

---

## ▶️ Llamar la función

```javascript
saludar(nombre , apellido)
```

✅ Combina los datos y muestra un saludo personalizado.

---

# ✅ Funciones 3 — Llamado entre funciones

---

## ▶️ Flujo completo

```javascript
iniciarApp()

function iniciarApp(params) {
    console.log("Iniciando App");
    segundaFuncion()
}

function segundaFuncion(){
    console.log("Mensaje desde la segunda funcion");
    usuarioAutenticado("Nata")
}

function usuarioAutenticado(usuario) {
    console.log("Autenticando usuario...");
    console.log("Usuario autenticado con exito");
    console.log(`Bienvenid@ ${usuario}`);
}
```

---

## ✅ Explicación paso a paso

1. **Se ejecuta `iniciarApp()`**

   * Muestra "Iniciando App"
   * Llama a `segundaFuncion()`

2. **`segundaFuncion()` se ejecuta**

   * Muestra un mensaje
   * Llama a `usuarioAutenticado("Nata")`

3. **`usuarioAutenticado()` recibe el parámetro `usuario`**

   * Realiza pasos de autenticación
   * Da la bienvenida personalizada

✅ Ejemplo perfecto de **flujo lógico** entre funciones.

---

# ✅ Funciones 4 — Retornos, cálculos y composición de funciones

---

## 🟡 Función con retorno

```javascript
function suma(num1, num2){
    return num1 + num2
}
```

✅ Devuelve un valor en lugar de imprimirlo.

---

## ▶️ Guardar el resultado

```javascript
const resultado = suma(23,56)
console.log(resultado)
```

---

## 🛒 Carrito + Impuestos (ejemplo práctico)

### Función que acumula precios

```javascript
let total = 0
function agregarcarrito(precio) {
    return total += precio
}
```

---

### Función que calcula impuestos

```javascript
function calcularImpuestos(total) {
    return 1.15 * total
}
```

---

### Flujo completo

```javascript
total = agregarcarrito(200)
total = agregarcarrito(500)
total = agregarcarrito(300)

console.log(total)
const totalPagar = calcularImpuestos(total)

console.log(`Tu impuesto es de ${totalPagar - total}`);
console.log(`Tienes que pagar en total ${totalPagar}`);
```

✅ Perfecto uso de:

* Variables que cambian
* Funciones que devuelven valores
* Cálculo de impuestos
* Encadenamiento de funciones

---

# ✅ Funciones 5 — Métodos de propiedad (funciones dentro de objetos)

---

## 🟡 Objeto con funciones internas (métodos)

```javascript
const reproducir = {
    reproducir : function (id){
        console.log(`Reproducir la cancion con el id ${id}`);
    },
    pausar : function () {
        console.log("Pausando...");
    },
    borrar : function () {
        console.log(`Borrando la cancion con el id ${id}`);
    }
}
```

### ✅ ¿Qué es esto?

Un **método de propiedad** es una función guardada dentro de un objeto.

---

## ✅ Explicación de cada método

| Método           | Parámetros  | Acción                           |
| ---------------- | ----------- | -------------------------------- |
| `reproducir(id)` | id numérico | Muestra qué canción se reproduce |
| `pausar()`       | ninguno     | Pausa la reproducción            |
| `borrar()`       | ninguno     | Borra la canción                 |

⚠️ Nota:
El método `borrar()` intenta usar `id` pero **no lo recibe como parámetro**, lo cual generará un error.

Debe ser así:

```javascript
borrar : function(id) {
    console.log(`Borrando la cancion con el id ${id}`);
}
```

---

# ✅ Resumen general

| Tema                             | Concepto                       |
| -------------------------------- | ------------------------------ |
| Declaración de funciones         | `function nombre(){}`          |
| Parámetros y valores por defecto | `function(a = 0){}`            |
| Retorno                          | `return valor`                 |
| Flujo entre funciones            | Una función llama a otra       |
| Funciones + cálculos             | Sumatorias, impuestos, totales |
| Métodos de propiedad             | Funciones dentro de objetos    |

---

# ✅ Buenas prácticas

✅ Usar nombres descriptivos en funciones
✅ Mantener funciones pequeñas y específicas
✅ Siempre usar `return` si esperas un valor
✅ Evitar variables globales innecesarias
✅ Corregir métodos que usan parámetros sin recibirlos
✅ Preferir funciones flecha cuando sea posible

---

