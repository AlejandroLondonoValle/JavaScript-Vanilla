# 07 - Objetos en JavaScript

En esta unidad trabajamos con **objetos**, una de las estructuras más importantes en JavaScript.
Aprendemos cómo crear, modificar, eliminar propiedades, anidar objetos, congelarlos, sellarlos y combinarlos.

---

# 📂 Archivo

`07-Objetos/objetos.js`

---

# 🧱 Objeto 1 — Creación, lectura, modificación y destructuring

---

## 🟡 Creación de un objeto básico

```javascript
const producto = {
    nombre : "Monitor de 20 pulgadas",
    valor : 30,
    marca: "Samsung",
    disponibilidad : true,
    calificacion : 4.6
}
```

### ✅ Explicación

Un objeto está compuesto por **pares llave–valor**, separados por comas:

| Llave          | Valor                    | Tipo    |
| -------------- | ------------------------ | ------- |
| nombre         | "Monitor de 20 pulgadas" | string  |
| valor          | 30                       | number  |
| marca          | "Samsung"                | string  |
| disponibilidad | true                     | boolean |
| calificacion   | 4.6                      | number  |

---

## 👀 Visualizar un objeto completo

```javascript
console.log(producto)
```

✅ Muestra todas las propiedades.

---

## 🔎 Acceder a una propiedad específica

```javascript
console.log(producto.nombre)
```

✅ Devuelve `"Monitor de 20 pulgadas"`.

---

## 🧵 Concatenación con template strings

```javascript
console.log(`Acabas de comprar el ${producto.nombre} de la marca ${producto.marca}, por un valor de ${producto.valor}`)
```

✅ Forma moderna, limpia y recomendada con `` ` ``.

---

## ➕ Concatenación tradicional con `+`

```javascript
console.log("Con una valoracion de " + producto.calificacion)
```

⚠️ Funciona, pero es menos práctico que template strings.

---

## ✨ Agregar una nueva propiedad

```javascript
producto.imagen = "imagen.png"
console.log(producto)
```

✅ Ahora el objeto incluye `"imagen.png"` como nueva propiedad.

---

## ❌ Eliminar una propiedad

```javascript
delete producto.marca
console.log(producto)
```

✅ Elimina la llave `marca` y su valor.

---

## 🎯 Destructuring (extraer propiedades)

```javascript
const {calificacion , nombre} = producto
```

### ✅ ¿Qué hace?

Extrae propiedades del objeto y las convierte en variables independientes:

* `calificacion` → 4.6
* `nombre` → "Monitor de 20 pulgadas"

Sin modificar el objeto original.

---

---

# 🟣 Objeto 2 — Objetos anidados, freeze y seal

---

## 🟡 Crear un objeto con otro objeto dentro

```javascript
const producto = {
    nombre : "Monitor de 20 pulgadas",
    valor : 30,
    marca: "Samsung",
    disponibilidad : true,
    calificacion : 4.6,
    informacion : {
        peso : "1 Kg",
        medida : "120 cm",
        hz : 144,
        tipoPantalla : "QLED"
    }
}
```

✅ `informacion` es un **objeto dentro de otro objeto**.

---

## 🔎 Acceso a propiedades internas

```javascript
console.log(producto.informacion)
console.log(producto.informacion.peso)
```

✅ Puedes acceder a niveles internos con puntos consecutivos.

---

## 🎯 Destructuring de un objeto anidado

```javascript
const {tipoPantalla} = producto.informacion
console.log(tipoPantalla)
```

✅ Extrae solo la propiedad deseada desde el objeto interno.

---

## 🧊 Object.freeze — No permite modificar absolutamente nada

```javascript
// Object.freeze(producto)
```

Si estuviera activo:

* ❌ No permite agregar propiedades
* ❌ No permite eliminar
* ❌ No permite modificar valores

---

## 🔒 Object.seal — Solo permite cambiar valores existentes

```javascript
Object.seal(producto)

producto.disponibilidad = false   // ✅ permitido
producto.precio = 23              // ❌ NO permitido
delete producto.nombre            // ❌ NO permitido

console.log(producto)
```

✅ Puedes reasignar valores
❌ No puedes crear propiedades nuevas
❌ No puedes eliminar propiedades

---

---

# 🔵 Objeto 3 — Unir objetos, keys, values y entries

---

## ✅ Objetos independientes

```javascript
const producto = {
    nombre : "Celular Samsung",
    precio : 120,
    disponibilidad : true
}

const medidas = {
    peso : "360 gr",
    dimensiones : "8 pulgadas"
}
```

---

## 🔗 Unir objetos (opción 1 — Object.assign)

```javascript
const union = Object.assign(producto , medidas)
```

✅ Asigna las propiedades de `medidas` dentro de `producto`.
⚠️ **Modifica el objeto original**.

---

## 🔗 Unir objetos (opción 2 — Spread Operator ⭐ recomendado)

```javascript
// const union = {...producto , ...medidas}
```

✅ Crea un **nuevo objeto** sin modificar los originales.

---

## 🗝️ Obtener las llaves (keys)

```javascript
console.log(Object.keys(producto))
```

✅ Devuelve un arreglo con:

```
["nombre", "precio", "disponibilidad"]
```

---

## 💰 Obtener los valores (values)

```javascript
console.log(Object.values(producto))
```

✅ Devuelve:

```
["Celular Samsung", 120, true]
```

---

## 🧩 Obtener pares [llave, valor] (entries)

```javascript
console.log(Object.entries(producto))
```

✅ Devuelve:

```
[
  ["nombre", "Celular Samsung"],
  ["precio", 120],
  ["disponibilidad", true]
]
```

Muy útil para recorrer objetos o convertirlos a estructuras más avanzadas.

---

# ✅ Resumen general

| Tema                    | Descripción                                    |
| ----------------------- | ---------------------------------------------- |
| Crear objetos           | Se definen con llaves `{}` y pares llave–valor |
| Acceso a propiedades    | Con `obj.propiedad`                            |
| Agregar propiedades     | `obj.nueva = valor`                            |
| Eliminar                | `delete obj.propiedad`                         |
| Destructuring           | Extrae propiedades en variables                |
| Objetos anidados        | Acceso mediante puntos múltiples               |
| Freeze                  | Congela totalmente un objeto                   |
| Seal                    | Permite modificar, pero no agregar o eliminar  |
| Merge                   | `Object.assign` o `{...spread}`                |
| Keys / Values / Entries | Métodos para inspeccionar el contenido         |

---
