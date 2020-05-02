window.onload = inicio;
// si quieres añadir más fotos, debes añadirlas en la siquiente linea:
var figuras = ['01', '02', '03', '04', '05', '06', '07', '08'];
var miniaturas = 3;
var imgVisor = figuras[0];
var tope = figuras.length;

function inicio() {
  //mostrar imagen principal
  document.getElementById("divimgvisor").innerHTML =
    `<img src="img/${figuras[0]}.jpg" alt="Imagen ${figuras[0]}" class="img-fluid" id="imgvisor">`;
  //mostrar imagenes de las 4 miniaturas
  for (var i = 1; i <= 4; i++) {
    document.getElementById("dmini01").innerHTML +=
      `<a href="#"><img src="img/${figuras[i]}.jpg" alt="Imagen ${figuras[i]}" class="img-fluid mini"></a>`;
  }
}

var contador = 0;
//pasa a la siguiente img en el array
function fotoDerecha() {
  do {
    contador++;
    document.getElementById("divimgvisor").innerHTML =
      `<img src="img/${figuras[contador]}.jpg" alt="Imagen ${figuras[contador]}" class="img-fluid" id="imgvisor">`;
  }
  while (contador >= tope);
}
//pasa a la img anterior en el array
function fotoIzquierda() {
  do {
    contador--;
    document.getElementById("divimgvisor").innerHTML =
      `<img src="img/${figuras[contador]}.jpg" alt="Imagen ${figuras[contador]}" class="img-fluid" id="imgvisor">`;
  }
  while (contador > 0);
}
