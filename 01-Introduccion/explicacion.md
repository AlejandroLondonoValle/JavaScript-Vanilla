## 01 - Introduccion JavaScript

Este archivo HTML sirve como una **introducción práctica a JavaScript**, mostrando cómo se puede integrar código JavaScript dentro de un documento HTML.  
Permite realizar interacciones básicas con el usuario mediante **mensajes en consola, alertas y entrada de datos**.

---

## 🧩 Estructura del documento
El código se compone de tres partes principales:

1. **Encabezado (`<head>`)**  
   Contiene la configuración básica del documento:
   - `<!DOCTYPE html>`: indica que el documento usa HTML5.
   - `<meta charset="UTF-8">`: define la codificación de caracteres.
   - `<meta name="viewport">`: permite que la página sea adaptable a diferentes dispositivos.
   - `<title>`: define el título que aparece en la pestaña del navegador.

2. **Cuerpo (`<body>`)**  
   Contiene el contenido visible:
   - Un título (`<h1>`) con el texto **“Hola Bienvenidos a Javascript 😎”**.
   - Un párrafo (`<p>`) con el texto **“Yo soy Alejandro Londoño”**.

3. **Script (`<script>`)**  
   Aquí se incluye el código JavaScript que se ejecuta al cargar la página.

---

## ⚙️ Explicación del código JavaScript

```javascript
var nombre = prompt("Digite Su nombre")
````

🟢 Muestra una ventana emergente que pide al usuario escribir su nombre y lo guarda en la variable `nombre`.

```javascript
console.log("Nataly 💙")
console.log("Hola bienvenido, ", nombre)
```

🟢 Envía mensajes a la **consola del navegador**, incluyendo el nombre que ingresó el usuario.

```javascript
alert("Alaska Cocktails Pai, bienvenido", nombre)
```

🟢 Muestra una **ventana de alerta** con un mensaje de bienvenida (aunque aquí `alert()` solo muestra el primer parámetro, así que el nombre no se visualiza correctamente).

```javascript
console.log(5 + 5)
console.log("5 + 5")
console.log('5 + 5')
console.log('5' + 5)
console.log('5' + '5')
```

🧩 Estos ejemplos muestran cómo JavaScript trata los **números y cadenas de texto (strings)**:

* `5 + 5` → realiza una suma (resultado: **10**)
* `"5 + 5"` o `'5 + 5'` → muestra el texto literal **“5 + 5”**
* `'5' + 5` → concatena texto con número (resultado: **"55"**)
* `'5' + '5'` → concatena dos cadenas (resultado: **"55"**)

---

## 💡 En resumen

* Se usó **JavaScript embebido** dentro de un HTML.
* Se practicó la **interacción con el usuario** (`prompt`, `alert`).
* Se exploraron **mensajes en consola** (`console.log`).
* Se demostraron diferencias entre **operaciones numéricas y concatenación de texto**.
* Sirve como **primer contacto** con el comportamiento básico del lenguaje.


---