window.onload = inicio;
// si quieres añadir más fotos, debes añadirlas en la siquiente linea:
var figuras = ['01', '02', '03', '04', '05', '06', '07', '08'];
var miniaturas = 3;
var imgVisor = figuras[0];

function inicio() {
  //mostrar imagen principal
  document.getElementById("divimgvisor").innerHTML =
    `<img src="img/${figuras[0]}.jpg" alt="Imagen ${figuras[0]}" class="img-fluid" id="imgvisor">`;
  //mostrar imagenes de las 4 miniaturas
  for (var i = 0; i <= 4; i++) {
    document.getElementById("dmini01").innerHTML =
      `<img src="img/${figuras[i]}.jpg" alt="Imagen ${figuras[i]}" class="img-fluid mini">`;
  }
}
