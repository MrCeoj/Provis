# Provis

### Temas Selectos - Final Project

Como proyecto final, se presenta la Landing Page de la empresa ProVis Publicidad (acrónimo para Proyectos Visuales).

Dentro del proyecto se encuentra un solo archivo de HTML, el cual contiene todas las secciones (a excepción de la sección de inicio) 
ocultas en un ``` display: none; ``` mientras que la sección principal se muestra con un ``` display: flex; ```

El intercambio de secciones se hace en el navbar utilizando JavaScript. Cada que se presiona un botón se activa una función llamada
render. Ésta función cambia su nombre dependiendo del botón que se presione, por lo tanto hay 3 funciones:

-``` renderinicio() ```
-``` renderabout() ```
-``` rendercontact() ```

Cada una de éstas funciones cambia el atributo del ``` display ``` las secciones no correspondientes a ``` none```, mientras que
cambia su propio display a ``` flex ```.

Se agregó una galería con imágenes en diagonal, utilizando JavaScript se detecta cuando el mouse entra y sale del div de la imagen
y agrega estilos para cambiar su apariencia según el mouse esté por encima.

Por último, el formulario contiene sólamente la función ``` Audio.play()```, que reproduce un sonido cuando se presiona el botón
de enviar. El cliente al sólamente pedir una propuesta de diseño para la página, no se implementó el backend para enviar correos.
