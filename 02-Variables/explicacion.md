# 02 - Variables en JavaScript

## 📄 Archivo: `main.js`
Este archivo explica cómo **declarar, reasignar y utilizar variables** en JavaScript utilizando la palabra clave **`var`**.  
También se muestran los distintos **tipos de datos** y las **convenciones de nombres** más comunes.

---

## ⚙️ Código y explicación

### 🟩 Declaración con `var`
```javascript
var producto = "Monitor de 27 pulgadas"
console.log(`Producto Inicial: ${producto}`)
````

* Se crea una variable llamada `producto` y se le asigna un texto.
* Se usa **interpolación de cadenas** con **backticks** (``\`) y `${}` para insertar valores dentro del texto.
  👉 *(backtick = Alt Gr + } en teclado español)*

---

### 🔁 Reasignación de variable

```javascript
producto = "Computador Portatil"
console.log(`Producto Actualizado: ${producto}`)
```

* La variable `producto` cambia su valor sin necesidad de volver a declararla.
* Esto demuestra que las variables `var` **permiten reasignación y redeclaración.**

---

### 🔢 Tipos de datos básicos

```javascript
var numero = 25        // Número entero
var nota = 4.8         // Número flotante (decimal)
var disponible = True  // Booleano (Verdadero o falso)
```

🧩 En JavaScript, los tipos de datos comunes son:

* **String (cadena):** texto entre comillas.
* **Number:** enteros o decimales.
* **Boolean:** valores `true` o `false` *(ojo: se escriben en minúscula → `true` / `false`)*.

---

### 🧮 Declaración múltiple

```javascript
var 
nom = "Alejandro",
edad = 19,
calificacion = 4.8,
esInstructor = false,
esEstudiante = true
```

* Se pueden declarar **varias variables con un solo `var`**, separadas por comas.

---

## 📏 Reglas de las variables

```javascript
/*
Las Variables pueden tener: letras y números,
pero no pueden iniciar con un número ni contener caracteres especiales.

❌ var 99dias = 100
✅ var dias99 = 100
❌ var @hash = "error"
❌ var estad@ = false
❌ var 01_ = 1
*/
```

💡 **Reglas básicas:**

* No pueden empezar con un número.
* No pueden tener caracteres especiales (`@`, `-`, `/`, etc.).
* Son **case-sensitive** → `Producto` y `producto` son diferentes.

---

## ✍️ Estilos para nombrar variables

```javascript
var nombreProducto = "Celular"      // ✅ Camel Case (recomendado)
var nombre_producto = "Celular"     // Underscore o snake_case
var NombreProducto = "Celular"      // Pascal Case (para clases)
var nombreproducto = "Celular"      // minúscula (no recomendada)
```

| **Estilo**     | **Ejemplo**       | **Uso común**              |
| -------------- | ----------------- | -------------------------- |
| **camelCase**  | `nombreProducto`  | ✅ Variables y funciones    |
| **PascalCase** | `NombreProducto`  | ✅ Clases y componentes     |
| **snake_case** | `nombre_producto` | Python, bases de datos     |
| **minúscula**  | `nombreproducto`  | ❌ Evitar (difícil de leer) |

---

## 🧩 Archivos relacionados

### 📁 `main_1.js`

Este archivo contiene **el mismo código que `main.js`**, pero usando **`const`** en lugar de `var`.

```javascript
const producto = "Monitor de 27 pulgadas"
```

➡️ `const` crea una **constante**, es decir, una variable que **no puede reasignarse ni redeclararse**.
Ideal para valores fijos que no deben cambiar, como:

```javascript
const PI = 3.1416
```

---

### 📁 `main_2.js`

En este archivo se reemplaza `var` por **`let`**.

```javascript
let producto = "Monitor de 27 pulgadas"
```

➡️ `let` permite **reasignar** el valor, pero **no redeclarar** la variable dentro del mismo bloque.
Además, tiene **alcance de bloque `{ }`**, lo que lo hace más seguro y predecible.

---

## 🔍 Comparación rápida

| **Palabra clave** | **Reasignar valor** | **Redeclarar** | **Alcance**      | **Uso recomendado**      |
| ----------------- | ------------------- | -------------- | ---------------- | ------------------------ |
| `var`             | ✅ Sí                | ✅ Sí           | Global / Función | ❌ Obsoleta               |
| `let`             | ✅ Sí                | ❌ No           | Bloque `{}`      | ✅ Variables modificables |
| `const`           | ❌ No                | ❌ No           | Bloque `{}`      | ✅ Valores fijos          |

---

## 💡 En resumen

* `main.js` → usa `var`, permite cambios y es global.
* `main_1.js` → usa `const`, no permite modificar el valor.
* `main_2.js` → usa `let`, permite cambiar el valor, pero con control de alcance.
* Se estudiaron las reglas, estilos y tipos de variables más comunes en JavaScript.

---
