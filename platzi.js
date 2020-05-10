var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var x = 200;
var y = 200;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
    //console.log("fondo");
  }
  if (cerdo.cargaOK)
  {
       papel.drawImage(cerdo.imagen, x, y);
           console.log("cerdo");
           console.log(x);
           console.log(y);
  }
}

function aleatorio(min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}

function moverCerdo(evento)
{
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujar();
      y=y-movimiento
      //console.log("arriba")
    break;
    case teclas.DOWN:
      dibujar();
      y=y+movimiento
      //console.log("abajo")
    break;
    case teclas.LEFT:
      dibujar();
      x=x-movimiento
      //console.log("izquierda")
    break;
    case teclas.RIGHT:
    dibujar();
    x=x+movimiento
    //console.log("derecha")
    break;
  }
  //----------------------------------
}
