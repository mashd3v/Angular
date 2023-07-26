# Introducción a TypeScript

## Crear un proyecto de `vite`
Los pasos son:
* Ir a la terminal de nuestro sistema operativo y ubicarnos en la carpeta que querramos trabajar
* Ejecutar el comando `npm create vite`. Al ejecutar este comando, la terminal nos preguntará algunas cosas, la configuración correcta es la siguiente:
  * Seleccionar la opción `Vanilla` para el framework
  * Seleccionar la opción `TypeScript` para la variante
  * Ponerle un nombre a nuestro proyecto
* Una vez creado nuestro proyecto necesitamos acceder a la carpeta de nuestro proyecto y ejecutar los siguientes comandos en la terminal:
  * `npm install` sirve para instalar todas las dependencias necesarias para poder trabajar en nuestro proyecto
  * `npm run dev` sirve para habilitar el entorno de desarrollo. Al ejecutarlo, nos dará la ubicación del puerto en el que podremos trabajar. Ejemplo:
  ```
  VITE v4.4.7  ready in 458 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
  ```
* Accedemos al puerto que nos habilito desde nuestro navegador.
* Nuestro proyecto de TypeScript se encontrará en `nombre-proyecto/src/main.ts`




`package.json` no es mas que una descripción de como está compuesto nuestro proyecto.