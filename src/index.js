import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.onload = detectarCarga;
function detectarCarga(){
  var elems = document.getElementsByClassName('background');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'none';
}
}

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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
