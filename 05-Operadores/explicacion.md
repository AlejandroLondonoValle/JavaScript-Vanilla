# 05 - Operadores en JavaScript 

Estas notas explican el contenido del archivo **`operadores.js`**, que muestra cómo comparar valores, tipos de datos, y las diferencias entre **igualdad flexible (`==`)**, **igualdad estricta (`===`)**, y operadores de desigualdad.

---

## 📂 Archivo

`05-Operadores/operadores.js`

---

## 📘 Variables iniciales

```javascript
var num1 = 11
var num2 = '11'
var num3 = 26
```

* **`num1`** → número entero (tipo `number`).
* **`num2`** → texto que contiene un número (tipo `string`).
* **`num3`** → número entero.

---

## 🔢 Operadores relacionales

### ▶️ Mayor que (`>`) y mayor o igual que (`>=`)

```javascript
console.log(num1 > num3)   // false → 11 no es mayor que 26
console.log(num2 >= num1)  // true  → '11' se convierte implícitamente a número
```

➡️ **Nota:**
Cuando se comparan valores de distintos tipos, JavaScript intenta **convertir** el `string` a `number` automáticamente (coerción de tipo).

---

### ▶️ Menor que (`<`) y menor o igual que (`<=`)

```javascript
console.log(num1 < num3)   // true  → 11 < 26
console.log(num2 <= num1)  // true  → '11' se convierte a número (11 <= 11)
```

➡️ **Importante:**
Las comparaciones con cadenas y números son posibles gracias a la conversión automática de tipos.
Esto puede generar errores si no se controla.

---

## ⚖️ Operadores de igualdad

### 🔹 Igualdad flexible (`==`)

```javascript
console.log(num1 == num2) // true → solo compara el valor
```

* `num1` es `number (11)`
* `num2` es `string ('11')`
* JavaScript **convierte** `'11'` → `11` para compararlos.

✅ Solo evalúa si **los valores** son iguales.
❌ No tiene en cuenta el **tipo de dato**.

---

### 🔹 Igualdad estricta (`===`)

```javascript
console.log(num1 === num2) // false
```

* `num1` es número, `num2` es cadena.
* **No son del mismo tipo**, por lo tanto el resultado es **false**.

✅ Evalúa **valor y tipo**.
💡 **Usa siempre `===` y `!==`** para evitar errores por coerción automática.

---

## 🚫 Operadores de desigualdad

```javascript
console.log(num1 != num3)   // true  → 11 ≠ 26
console.log(num1 != num2)   // false → '11' == 11 (solo valor)
console.log(num1 !== num2)  // true  → diferentes en tipo
```

| Operador | Significado             | Evalúa tipo |
| -------- | ----------------------- | ----------- |
| `!=`     | Diferente (solo valor)  | ❌ No        |
| `!==`    | Estrictamente diferente | ✅ Sí        |

---

## 🧱 Tipos de datos: `null` y `undefined`

```javascript
let valor            // undefined (sin asignar)
let valor1 = null     // valor intencionalmente vacío

console.log(typeof valor)  // "undefined"
console.log(typeof valor1) // "object" (comportamiento histórico de JS)
```

### 💡 Diferencias clave

| Valor       | Significado                           | Tipo devuelto |
| ----------- | ------------------------------------- | ------------- |
| `undefined` | Variable declarada sin valor asignado | `"undefined"` |
| `null`      | Valor vacío intencionalmente asignado | `"object"`    |

---

### Comparación entre `null` y `undefined`

```javascript
console.log(valor == valor1)  // true
console.log(valor === valor1) // false
```

* Con `==`, JavaScript **los considera iguales** (coerción).
* Con `===`, **son diferentes** (distinto tipo de dato).

---

## 📋 Resumen general de operadores

| Operador | Descripción             | Ejemplo     | Resultado |
| -------- | ----------------------- | ----------- | --------- |
| `>`      | Mayor que               | `5 > 3`     | ✅ `true`  |
| `<`      | Menor que               | `2 < 8`     | ✅ `true`  |
| `>=`     | Mayor o igual que       | `5 >= 5`    | ✅ `true`  |
| `<=`     | Menor o igual que       | `7 <= 4`    | ❌ `false` |
| `==`     | Igual (solo valor)      | `5 == '5'`  | ✅ `true`  |
| `===`    | Estrictamente igual     | `5 === '5'` | ❌ `false` |
| `!=`     | Diferente (solo valor)  | `5 != '5'`  | ❌ `false` |
| `!==`    | Estrictamente diferente | `5 !== '5'` | ✅ `true`  |

---

## ⚠️ Recomendaciones y buenas prácticas

✅ Usa siempre **`===`** y **`!==`** en lugar de `==` y `!=`.
✅ Declara variables con `let` o `const`, no con `var`.
✅ Evita depender de la conversión automática de tipos.
✅ Usa `typeof` para verificar el tipo de una variable antes de operar.
✅ Recuerda que `null` y `undefined` no son lo mismo.

