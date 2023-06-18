
    let agrandarImagen = document.getElementsByClassName("clickMobile");

    agrandarImagen.addEventListener("click", function() {
      console.log('hicisteclick')
      agrandarImagen.classList.toggle('agrandar');
    });
