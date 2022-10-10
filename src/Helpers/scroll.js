  /*animado para la imagen*/
  let animadoImagen = document.getElementsByClassName("tarjeta")

  function mostrarAnimacion() {
      let ScrollTop = document.documentElement.scrollTop;
      for (var i = 0; i < animadoImagen.length; i++) { //cantidad de elementos
          let alturaAnimacion = animadoImagen[i].offsetTop //detectar la altura de la ventana 
          if (alturaAnimacion - 750 < ScrollTop) { //restamos 500 pixeles a la altura para asi saber cuando se hace el scrol
              animadoImagen[i].style.opacity = 1 //cambiamos el valor que tiene en CSS que es 0 a 1 asi podemos mostrarlo
  
          } else if (alturaAnimacion + 100 > ScrollTop) { // si la altura es mayor a el scroll limpiamos la imagen
              animadoImagen[i].style.opacity = 0
          }
      }
  }
    
  // nueva animacion
  window.addEventListener('scroll', mostrarAnimacion)

