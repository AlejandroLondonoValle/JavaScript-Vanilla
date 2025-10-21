# 03 - Metodos y operacion de Strings en JavaScript
Excelente, Luis 💪 — este tema es **clave en JavaScript**, porque trabajar con *strings (cadenas de texto)* es una de las bases del lenguaje.
Aquí tienes tus **apuntes completos, claros y explicados paso a paso** 🧠👇


Un **string** es una cadena de caracteres encerrada entre comillas simples (`'`), dobles (`"`) o backticks (`` ` ``).

```js
let producto = "Celular Samsung"
let producto1 = String("Computador")
const producto2 = new String('Monitor')
```

🔸 `String()` → convierte a texto, útil si el valor viene de otro tipo (como un número).
🔸 `new String()` → crea un *objeto String* (rara vez necesario).
🔸 Siempre debes cerrar las comillas con el mismo tipo con el que abriste.

---

## 🧮 **Propiedades básicas**

### `.length`

Cuenta cuántos caracteres tiene el string.

```js
console.log(producto.length)
```

📖 *No lleva paréntesis porque es una propiedad, no un método.*

---

## 🔍 **Búsqueda dentro de cadenas**

### `.indexOf()`

Busca la posición donde aparece una palabra o carácter.

```js
console.log(producto.indexOf("Samsung"))
```

Devuelve la posición **empezando desde 0**.
Si no la encuentra, devuelve `-1`.

---

### `.includes()`

Verifica si el texto contiene una palabra o carácter.

```js
console.log(producto.includes("Celular")) // true
console.log(producto.includes("celular")) // false (distingue mayúsculas)
```

Devuelve `true` o `false`.

---

## 🔗 **Unir textos**

### `.concat()`

Une dos cadenas de texto.

```js
console.log(producto.concat(" En Descuento"))
```

También se puede usar con `+` o con *template literals* (`` `${}` ``).

---

## ✂️ **Eliminar espacios**

```js
const articulo = "     Articulo en venta    "
```

### `.trimStart()`

Elimina los espacios al **inicio**.

```js
console.log(articulo.trimStart())
```

### `.trimEnd()`

Elimina los espacios al **final**.

```js
console.log(articulo.trimEnd())
```

### `.trim()`

Elimina los espacios **al inicio y al final** de una sola vez.

```js
console.log(articulo.trim())
```

💡 Puedes **encadenar métodos**, por ejemplo:

```js
articulo.trimStart().trimEnd()
```

---

## ✏️ **Modificar o extraer texto**

### `.replace()`

Reemplaza un fragmento del texto por otro.

```js
const producto = "Monitor de 29 pulgadas"
console.log(producto.replace("29","50"))
```

➡️ Resultado: `"Monitor de 50 pulgadas"`

---

### `.slice(inicio, fin)`

Extrae una parte del texto **desde el índice `inicio` hasta antes del índice `fin`**.

```js
console.log(producto.slice(0,10))
console.log(producto.slice(5))
```

* Si solo se da un número, corta desde ahí hasta el final.
* Si el primer número es mayor que el segundo, **no corta nada**.

---

### `.substring(inicio, fin)`

Hace casi lo mismo que `slice()`, pero con una diferencia:

```js
console.log(producto.substring(2,1))
```

👉 Si el primer número es mayor, **invierte los valores** y aún así devuelve el texto.

---

## 🧍‍♂️ **Acceder a letras individuales**

```js
let primer_nombre = "Luis "
```

### Con `slice()` o `substring()`

```js
console.log(primer_nombre.slice(0,1)) // L
```

### Con `charAt()`

```js
console.log(primer_nombre.charAt(0)) // L
```

### Con índice directo

```js
console.log(primer_nombre[0]) // L
```

📌 Todos funcionan, pero `charAt()` es más seguro si el índice no existe (no lanza error).

---

## 🔁 **Repetir texto**

### `.repeat()`

Repite una cadena el número de veces que se indique.

```js
console.log(primer_nombre.repeat(3)) // Luis Luis Luis
```

También puede concatenarse dentro de otra cadena:

```js
const texto = " en promocion".repeat(3)
console.log(`El producto ${producto.repeat(5)} está${texto}`)
```

---

## 🧩 **Dividir texto en partes**

### `.split()`

Divide un string y lo convierte en un **array**, usando un separador.

```js
const actividad = "Estoy aprendiendo JavaScript Moderno en el Sena"
console.log(actividad.split(" ")) // separa por espacios
```

Otros ejemplos:

```js
console.log(actividad.split("e")) // separa por la letra e
console.log(actividad.split("S")) // separa por la S
```

También sirve para listas:

```js
const hobbies = "leer,comer,ir a cine,jugar futbol,dormir"
console.log(hobbies.split(",")) // separa por comas
```

---

## 🔠 **Cambiar entre mayúsculas y minúsculas**

```js
console.log(hobbies.toLowerCase()) // todo minúsculas
console.log(hobbies.toUpperCase()) // todo mayúsculas
```

También puedes encadenar con `split()`:

```js
console.log(hobbies.toUpperCase().split(","))
```

---

## 🧍‍♂️ **Poner solo la primera letra en mayúscula**

Como JavaScript no tiene una función `capitalize()` nativa:

```js
console.log(primer_nombre.charAt(0).toUpperCase() + primer_nombre.slice(1))
```

📖 Convierte la primera letra a mayúscula y deja el resto igual.

---

## 🔢 **Convertir números a texto**

```js
const cantidad = 2000
console.log(typeof cantidad) // number
console.log(typeof cantidad.toString()) // string
```

### `.toString()`

Convierte cualquier número a una cadena de texto.

---

# 🎯 **Resumen general**

| Método / Propiedad                  | Descripción                 | Ejemplo                   |
| ----------------------------------- | --------------------------- | ------------------------- |
| `.length`                           | Cuenta caracteres           | `"Hola".length`           |
| `.indexOf()`                        | Busca posición              | `"Hola".indexOf("o")`     |
| `.includes()`                       | Verifica existencia         | `"Hola".includes("Ho")`   |
| `.concat()`                         | Une cadenas                 | `"Hola".concat(" Mundo")` |
| `.trim()`                           | Quita espacios              | `" Hola ".trim()`         |
| `.replace()`                        | Reemplaza texto             | `"Hola".replace("H","M")` |
| `.slice()` / `.substring()`         | Extrae texto                | `"Hola".slice(0,2)`       |
| `.charAt()` / `[n]`                 | Devuelve letra por posición | `"Hola".charAt(1)`        |
| `.repeat()`                         | Repite texto                | `"Hola ".repeat(3)`       |
| `.split()`                          | Divide en array             | `"a,b,c".split(",")`      |
| `.toLowerCase()` / `.toUpperCase()` | Cambia may/min              | `"Hola".toUpperCase()`    |
| `.toString()`                       | Convierte número a texto    | `(123).toString()`        |

