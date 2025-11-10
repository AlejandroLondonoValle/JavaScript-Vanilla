# 06 - Booleanos y Condicionales en JavaScript

Estas notas explican el contenido del archivo **`booleanos.js`**, donde se trabaja con valores booleanos, estructuras condicionales y el uso del operador ternario. Además, se muestra la diferencia entre booleanos primitivos y booleanos creados con objetos.

---

## 📂 Archivo

`06-Booleanos/booleanos.js`

---

## 🧠 Declaración de booleanos

```javascript
const boolean1 = true
const boolean2 = false
const boolean3 = new Boolean(true)
```

### ✅ Explicación

| Variable   | Valor               | Tipo                        | Descripción                                               |
| ---------- | ------------------- | --------------------------- | --------------------------------------------------------- |
| `boolean1` | `true`              | `boolean` (primitivo)       | Un valor booleano real.                                   |
| `boolean2` | `false`             | `boolean` (primitivo)       | Valor booleano falso.                                     |
| `boolean3` | `new Boolean(true)` | **object** (objeto Boolean) | Un envoltorio basado en objeto, *no es un booleano real*. |

### ⚠️ Nota importante

Usar `new Boolean()` crea un **objeto**, no un booleano primitivo.
Esto puede provocar resultados inesperados:

```javascript
if (boolean3) console.log("Esto siempre será true, incluso si es Boolean(false)")
```

---

## ✅ Condicionales `if` y `else`

### ▶️ Ejemplo básico

```javascript
if(boolean1 == true){
    console.log("Si es true")
}
else{
    console.log("No es true")
}
```

### 🔍 Explicación paso a paso

1. Se evalúa la condición: `boolean1 == true`.
2. Como `boolean1` contiene `true`, la condición se cumple.
3. Se ejecuta el bloque del `if`.
4. Si hubiera sido `false`, entonces JavaScript entraría al `else`.

### 💡 Buenas prácticas

✅ Usa **`===`** en lugar de `==` siempre que sea posible:

```javascript
if (boolean1 === true) { ... }
```

✅ Incluso más limpio:

```javascript
if (boolean1) { ... }
```

---

## ✅ If sin llaves (cuando hay una sola línea)

```javascript
if(boolean2 == true)
    console.log("Si es true")
else
    console.log("No es true")
```

### 🔍 Explicación

Cuando el bloque del `if` o del `else` contiene **solo una línea**, las llaves (`{}`) son opcionales.

### ⚠️ Advertencia

Aunque es válido, puede causar errores si más adelante se agregan líneas sin volver a poner llaves.
Lo más recomendable para proyectos grandes:

✅ **Siempre usar llaves**, incluso para una sola línea.

---

## ✅ Operador ternario (condición rápida)

```javascript
console.log(boolean1 ? "Si es true" : "No es true")
```

### 🔍 Explicación

El operador ternario funciona así:

```
condición ? valor_si_true : valor_si_false
```

En este caso:

* Si `boolean1` es `true` → imprime `"Si es true"`
* Si es `false` → imprime `"No es true"`

### ✅ Ventajas del ternario

* Más corto y más expresivo.
* Perfecto para condiciones simples.
* Útil dentro de `console.log`, expresiones y asignaciones.

---

## 📌 Resumen general

| Concepto            | Descripción                                     |
| ------------------- | ----------------------------------------------- |
| `boolean` primitivo | Valor real: `true` / `false`.                   |
| `Boolean()` objeto  | Evitar su uso; siempre es truthy.               |
| `if` / `else`       | Permiten ejecutar código según una condición.   |
| If sin llaves       | Permitido solo para una línea (no recomendado). |
| Operador ternario   | Forma corta de evaluar una condición.           |

---

## ✅ Recomendaciones finales

✅ Preferir **booleanos primitivos**
✅ Evitar `new Boolean()`
✅ Usar `if (variable)` cuando ya es booleano
✅ Usar **operador ternario** para casos simples
✅ Mantener llaves para evitar errores futuros

---
