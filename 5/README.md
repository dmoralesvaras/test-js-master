# Test 5

Para simplificar la prueba a realizar hemos creado un proyecto base con toda la configuración y dependencias necesarias para la realización de la misma. 
A continuación, explicamos qué es lo que pedimos.

## Cómo realizar la prueba

**Qué pedimos**:

1. El primer ejercicio está dividido en tres partes y consiste en completar el código Javascript existente en el fichero `src/index.js`.
   Dado un contenedor, un HTMLElement que se encuentra a lo largo de una página web y que ya viene especificado en el fichero anteriomente mencionado, será necesario:

   a. Insertar un **HTMLVideoElement** `<video>` dentro de dicho contenedor cuando este sea visible en el **viewport**.
   b. El vídeo debe reproducirse de manera automática inmediatamente después de ser insertado. 
   c. Una vez el vídeo haya finalizado su reproducción, tendremos que eliminar el **HTMLVideoElement** del contenedor en el que se encuentra.

   Es necesario, que el código realizado en este ejercicio sea propio y no se utilicen librerías de terceros.

2. Modificar el fichero de configuración `webpack.es5.js` para generar un paquete compatible con **ECMAScript5**.
   Damos libertad a la hora de elegir las dependencias que se utilicen para conseguir este propósito.

3. En el fichero `public/index.html` se importa el código generado compatible para **ECMAScript6** sin tener encuenta navegadores antiguos que no son capaces de interpretar
   correctamente este código. 
   Queremos cambiar esto para que se utilice el que mejor convenga según el navegador.
   Es decir, si el navegador acepta código ES6 se debe utilizar nuestra versión para **ECMAScript6** (sunmedia-es6.js).
   En caso contrario, debemos utilizar la versión compilada para **ECMAScript5** (sunmedia-es5.js) que hemos conseguido realizar
   gracias al ejercicio 2. 

**Qué valoramos**:

- Que el código realizado esté cubierto por test unitarios.


**Estructura de la prueba**:

```
sdk-test-js/
|
|- public/
|  |- index.html
|  |- styles.css
|
|- src/
|  |- index.js
|
|- .eslintrc
|- .gitignore
|- package.json
|- webpack.common.js
|- webpack.es5.js
|- webpack.es6.js

```

**Comandos disponibles**:

*ESLint* para identificar patrones problemáticos encontrados en el código JavaScript.

```
npm run lint
```

*WebpackDevServer* para desarrollar y probar los cambios con mayor agilidad.

```
npm run server:start
```

*Webpack* para crear el directorio `dist` con la versión de producción del código JS desarrollado.  

```
npm run build:es5
npm run build:es6
```

## Cómo entregar la prueba

Para la entrega de la prueba realizada, será necesario que el código se suba a un repositorio con acceso público. 
Animamos al envío de la misma ya que valoraremos la prueba con independencia de si hay algún ejercicio no completado. 
