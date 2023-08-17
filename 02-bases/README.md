# Proyecto 02: Bases de Angular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Deploy link

[Proyecto 02: Bases de Angular](https://glittery-malabi-4189fc.netlify.app/)

## Temas aprendidos en esta sección

* **Crear un proyecto de Angular.** Los proyectos se crean accediendo a una carpeta raíz desde nuestra terminal o consola y ejecutamos el siguiente comando: `ng new my-app`. Al ejecutar este comando, Angular nos dará ciertas opciones como: agregar el enrutamiento de Angular y el tipo de editor de estilos que querramos utilizar (CSS, SCSS, Sass, Less). Una vez seleccionados los requerimientos para nuestra aplicacion, se comenzarán a instalar todos los paquetes necesarios para que la aplicación se pueda ejecutar.

*  **Ejecutar la aplicación.** Ir al directorio donde se encuentra la aplicación desde la terminal y ejecutar el comando: `npm start`. Automáticamente se abrirá un navegador con el puerto que el `localhost` asigne.

* **Componentes.** Son los bloques fundamentales de una aplicación Angular. Representan unidades de funcionalidad reutilizable y encapsulada. Cada componente consta de una plantilla (HTML), una clase (TypeScript) que define el comportamiento y propiedades del componente, y metadatos que indican cómo se debe tratar el componente. Los componentes se utilizan para construir la interfaz de usuario y la lógica de presentación en una aplicación Angular. Los componentes se crean ejecutando el siguiente comando: `ng g c directorio/segundo_directorio`.

* **ngIf.** Es una directiva estructural en Angular que se utiliza para condicionar la renderización de un elemento del DOM basándose en una expresión booleana. Si la expresión es verdadera, el elemento se renderiza; si es falsa, el elemento se elimina del DOM. Esto es útil para mostrar u ocultar partes de la interfaz de usuario según ciertas condiciones.

* **ngFor.** Es otra directiva estructural en Angular que se utiliza para iterar sobre una colección, como un arreglo, y generar elementos del DOM para cada elemento de la colección. Puedes usar `ngFor` para repetir elementos en una lista, tabla u otros elementos basados en los datos de tu componente.

* **Módulos.** Son contenedores que agrupan componentes, servicios y otros artefactos relacionados en una unidad funcional. Los módulos ayudan a organizar y modularizar tu aplicación, lo que facilita la reutilización y el mantenimiento del código. El módulo raíz se llama `AppModule`, y otros módulos se pueden crear para agrupar funcionalidades específicas. Los módulos también se utilizan para importar y configurar otras bibliotecas de Angular y servicios.

* **@Input().** Se utiliza para permitir la comunicación entre componentes padre e hijo. Permite que un componente padre pase datos a un componente hijo a través de propiedades de entrada. En el componente hijo, puedes usar estas propiedades de entrada como si fueran propiedades locales. Esto facilita la reutilización de componentes y la transmisión de datos desde componentes padres a componentes hijos.

* **`[(ngClass)]`.** es una directiva que te permite condicionar y aplicar dinámicamente clases CSS a un elemento del DOM. La sintaxis `[()]` se llama "enlace bidireccional" y se utiliza para enlazar datos entre el componente y la vista. Al usar `[(ngClass)]`, puedes cambiar las clases de un elemento basándote en ciertas condiciones o valores en el componente. Esto es útil para cambiar el estilo visual de un elemento en función del estado de la aplicación.

* **FormsModule.**  Es un módulo que proporciona directivas y funcionalidades para trabajar con formularios en la aplicación. Ofrece características como el enlace de datos bidireccional mediante ngModel, validación de formularios y manejo de eventos de formulario.

* **ngModel.** Es una directiva que se utiliza para habilitar el enlace bidireccional entre un elemento de formulario HTML (como un `<input>`, `<select>` o `<textarea>`) y una propiedad en el componente. Permite mantener sincronizados los valores del formulario y las propiedades del componente en ambos sentidos, lo que facilita la interacción entre la vista y el componente.

* **@Output().** Se utiliza para emitir eventos personalizados desde un componente hijo hacia su componente padre. Esto permite que el componente hijo notifique al componente padre sobre eventos o acciones que han ocurrido en su interior. El componente padre puede escuchar estos eventos utilizando la sintaxis del enlace de eventos en la plantilla `((evento)="manejadorDeEvento($event)")` y reaccionar en consecuencia.
