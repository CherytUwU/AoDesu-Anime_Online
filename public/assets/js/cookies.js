/* ésto comprueba la localStorage si ya tiene la variable guardada */
function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies == 'true'){
      cajacookies.style.display = 'none';
    }else{
      cajacookies.style.display = 'block'
    }
  }
  
  /* aquí guardamos la variable de que se ha
  aceptado el uso de cookies así no mostraremos
  el mensaje de nuevo */
  function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
  }
  
  /* ésto se ejecuta cuando la web está cargada */
  $(document).ready(function () {
    compruebaAceptaCookies();
  });


function mostrarSearchInput(){
  document.getElementById('inputSearch').style.display = "block";
  document.getElementById('btnSearch1').style.display = "none";
  document.getElementById('btnSearch2').style.display = "block";
  document.getElementById('containerSearch').style.display = "block";
  document.getElementById('ocultar-search').style.display = "block";
  document.getElementById('input-container-search').style.display = "block";
}

function ocultarSearchInput(){
  document.getElementById('inputSearch').style.display = "none";
  document.getElementById('btnSearch1').style.display = "block";
  document.getElementById('btnSearch2').style.display = "none";
  document.getElementById('containerSearch').style.display = "none";
  document.getElementById('containerSearch').style.display = "block";
  document.getElementById('ocultar-search').style.display = "none";
  document.getElementById('input-container-search').style.display = "none";
}
