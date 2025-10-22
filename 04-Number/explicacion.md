# 04 - Números en JavaScript

Estas notas explican **`app1.js`** y **`app2.js`**, mostrando qué hace cada línea, conceptos importantes, operadores y funciones de `Math`. Está organizado para que lo uses como referencia rápida.

---

## 📂 Archivos

* `04-numbers/app1.js` — ejemplos básicos de tipos numéricos y operadores aritméticos.
* `04-numbers/app2.js` — uso de `Math`, redondeos, generación de números aleatorios y conversiones.

---

# `app1.js` — Variables numéricas y operadores

### 📌 Código de ejemplo (resumido)

```javascript
let edad = 19              // entero
let numero1 = '30'        // string que contiene un número
let nota = 4.2            // flotante
let dato = 5.324423523532443243243244 // precisión limitada por IEEE-754
let numero2 = .36         // se interpreta como 0.36
let numero3 = -45         // número negativo
const numero4 = new Number(20) // objeto Number (no recomendado)
let resultado             // variable sin valor (undefined)

console.log(typeof resultado) // "undefined"
```

### 🧾 Explicación de cada concepto

* `let edad = 19` → número entero (tipo primitivo `number`).
* `let numero1 = '30'` → texto (string). Si lo usas en operaciones con `+` y otro número, puede concatenar.
* `let nota = 4.2` → número con decimales (float). En JS todos los números son del mismo tipo (`number`) con representación IEEE-754.
* `let dato = 5.3244...` → JS tiene **precisión limitada**; números muy largos o decimales repetidos pueden perder exactitud.
* `let numero2 = .36` → forma abreviada; JS lo interpreta como `0.36`.
* `const numero4 = new Number(20)` → crea un **objeto** `Number` (wrapper). Normalmente NO se usa `new Number()`. Mejor `const numero4 = 20`.
* `let resultado` → variable declarada pero sin valor → valor `undefined`. `typeof resultado` devuelve `"undefined"`.

---

### 🔢 Operadores aritméticos y ejemplos

```javascript
// Suma (nota: numero1 es '30' (string) → concatenación con + si hay string)
resultado = numero1 + edad
console.log(typeof resultado) // si numero1 es string => "string"
console.log(resultado)        // "3019" si numero1 es '30'

// Resta
resultado = numero2 - edad
// Multiplicación
resultado = numero2 * edad
// División
resultado = numero2 / edad

// División por 0
resultado = numero2 / 0
// => tipo "number", valor Infinity (o -Infinity según signo)

// Módulo
resultado = numero2 % edad

// Potencia
resultado = numero2 ** edad
```

#### Notas importantes sobre operadores

* `+` hace **suma** si ambos operandos son numéricos; si uno es `string`, hace **concatenación**.
* `-`, `*`, `/`, `%`, `**` intentan convertir operandos a números y luego realizan la operación.
* `numero2 / 0` no lanza error; produce `Infinity` (o `-Infinity`) y `typeof` sigue siendo `"number"`.
* Las operaciones pueden producir `NaN` si algún operando no es convertible a número (`Number("abc")` → `NaN`). Comprueba con `Number.isNaN()`.

---

# `app2.js` — `Math`, redondeos, aleatorios y conversiones

### 📌 Código de ejemplo (resumido)

```javascript
let resultado

resultado = Math.PI
resultado = Math.round(2.5)
resultado = Math.ceil(2.1)
resultado = Math.sqrt(81)
resultado = 81 ** (1/3)
resultado = Math.abs(-200)
resultado = Math.pow(8,3)
resultado = Math.min(3,5,6,7,8,1,2,4,43,-9)
resultado = Math.max(3,5,6,7,8,1,2,4,43,-9)
resultado = Math.random()
resultado = Math.floor(Math.random() * 10)

resultado = (20 + 30 * 2)
resultado = (20 + 30) * 2

// Promedio de notas con varios métodos de redondeo y toFixed
let nota1 = 4.3, nota2 = 2.0, nota3 = 5.0, nota4 = 1.0
resultado = (nota1 + nota2 + nota3 + nota4) / 4
resultado = Math.round((nota1 + ...)/4)
resultado = Math.floor(...)
resultado = Math.ceil(...)
resultado = ((...)/4).toFixed(1) // devuelve string con 1 decimal
resultado = Number.parseFloat(resultado)
resultado = Number.parseInt(resultado)
resultado = resultado.toString()

console.log(resultado)
```

### 🧠 Explicación de funciones y comportamientos

#### `Math`

* `Math.PI` → constante π (~3.14159).
* `Math.round(x)` → redondea al entero más cercano (0.5 hacia arriba).
* `Math.ceil(x)` → redondea **hacia arriba** al entero siguiente.
* `Math.floor(x)` → redondea **hacia abajo**.
* `Math.sqrt(x)` → raíz cuadrada. También se puede usar `x ** (1/2)`.
* `x ** (1/3)` → raíz cúbica (exponente fraccionario).
* `Math.abs(x)` → valor absoluto.
* `Math.pow(a, b)` o `a ** b` → potencia.
* `Math.min(...)` / `Math.max(...)` → mínimo / máximo de una lista.
* `Math.random()` → número pseudoaleatorio en `[0, 1)` (incluye 0, excluye 1).

  * Para obtener entero en rango `0..(n-1)`:

    ```js
    Math.floor(Math.random() * n)
    ```
  * Si quieres rango `min..max`:

    ```js
    Math.floor(Math.random() * (max - min + 1)) + min
    ```

#### Conversiones y formatos

* `(a + b + ...)/4` → promedio.
* `.toFixed(n)` → devuelve una **cadena** con `n` decimales; **redondea** según reglas normales.
  Ejemplo: `3.456.toFixed(1)` → `"3.5"`.
* `Number.parseFloat(str)` → convierte string a número de punto flotante.
* `Number.parseInt(str)` → convierte string a entero (cuidado con decimales; corta la parte decimal).
* `resultado.toString()` → convierte número a string.
* Siempre confirma el tipo con `typeof` si necesitas distinguir string/number.

---

## ⚠️ Advertencias y detalles útiles

* **Precisión**: JS usa doble precisión (IEEE-754). Operaciones con decimales pueden producir resultados inesperados:

  ```js
  0.1 + 0.2 === 0.30000000000000004
  ```

  Usa redondeo (`toFixed`, `Math.round`) o librerías de precisión si necesitas exactitud financiera.
* **`toFixed()` devuelve string**: si luego necesitas operar numéricamente, parsea con `Number(...)` o `parseFloat`.
* **`new Number(20)` devuelve un objeto**; evita usar `new Number()` porque `typeof new Number(20)` es `"object"`.
* **`Math.random()` no es criptográficamente seguro**. Para casos de seguridad/criptografía, usa APIs específicas (Web Crypto).
* **Operaciones con strings**: `'30' + 5` → `"305"` (concatenación). Convertir explícitamente: `Number('30') + 5` → `35`.

---

## 🧾 Resumen de funciones clave (`Math` y conversión)

| Función / método                  | Qué hace                                                        |
| --------------------------------- | --------------------------------------------------------------- |
| `Math.PI`                         | Constante π                                                     |
| `Math.round(x)`                   | Redondea al entero más cercano                                  |
| `Math.ceil(x)`                    | Redondea hacia arriba                                           |
| `Math.floor(x)`                   | Redondea hacia abajo                                            |
| `Math.sqrt(x)`                    | Raíz cuadrada                                                   |
| `x ** (1/3)`                      | Raíz cúbica                                                     |
| `Math.abs(x)`                     | Valor absoluto                                                  |
| `Math.pow(a,b)` / `a ** b`        | Potencia                                                        |
| `Math.min(...)` / `Math.max(...)` | Mínimo / máximo                                                 |
| `Math.random()`                   | Aleatorio en [0,1)                                              |
| `toFixed(n)`                      | Formatea a `n` decimales → devuelve **string**                  |
| `Number.parseFloat(str)`          | String → float                                                  |
| `Number.parseInt(str)`            | String → entero                                                 |
| `Number(x)`                       | Convierte a número (más seguro que `parseInt` en algunos casos) |
| `x.toString()`                    | Número → string                                                 |

---

## ✅ Buenas prácticas recomendadas

* Evita `new Number(...)`; usa literales: `const n = 20`.
* Usa `let` para variables que cambian y `const` para valores que no.
* Convierte explícitamente cadenas a números antes de operaciones aritméticas: `Number('30')`.
* Comprueba `Number.isNaN(val)` y `isFinite(val)` cuando recibes entradas externas.
* Para redondeos precisos en cálculos financieros, considera librerías como `decimal.js` o trabajar en centavos (enteros).

---

## ✍️ Ejemplo rápido: número aleatorio entre 5 y 15 (inclusive)

```javascript
const min = 5
const max = 15
const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
```

