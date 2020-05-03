
window.onload = inicio;
// si quieres añadir más fotos, debes añadirlas en la siquiente linea:
var figuras = ['01', '02', '03', '04', '05', '06', '07', '08'];
var miniaturas = 3;
var imgVisor = figuras[0];
var tope = figuras.length - 1;
var contador = 0;

function mostrarPrincipal(i) {
  document.getElementById("divimgvisor").innerHTML =
      `<img src="img/${figuras[i]}.jpg" alt="Imagen ${figuras[i]}" class="img-fluid" id="imgvisor">`;
}

function inicio() {
  //mostrar imagen principal
  mostrarPrincipal(0);
  //mostrar imagenes de las 4 miniaturas
  for (var i = 1; i <= 4; i++) {
      document.getElementById("dmini01").innerHTML +=
          `<a href="#"><img src="img/${figuras[i]}.jpg" alt="Imagen ${figuras[i]}" class="img-fluid mini"></a>`;
  }
}

//pasa a la siguiente img en el array
function fotoDerecha() {
  contador = (contador == tope) ? 0 : ++contador;
  mostrarPrincipal(contador);
}
//pasa a la img anterior en el array
function fotoIzquierda() {
  contador = (contador == 0) ? tope : --contador;
  mostrarPrincipal(contador);
}
