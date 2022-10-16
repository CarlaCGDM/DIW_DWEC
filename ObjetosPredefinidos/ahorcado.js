var arrPalabraOculta = new Array();
var arrPalabraVisible = new Array();
var palabra;
var maxFallos;

function reiniciarElementosJuego(){
  eliminarImagen();
  arrPalabraOculta.length = 0;
  arrPalabraVisible.length = 0;
  maxFallos = 5;
}

function actualizarPalabra() {
  let pResultadoAhorcado = document.querySelector("#pResultadoAhorcado");
  let texto = arrPalabraOculta.join("");
  pResultadoAhorcado.innerHTML = texto;
}

function eliminarImagen() {
  let imagen = document.querySelector("div[id=divResultadoAhorcado] img");
  console.log(imagen);
  if (imagen !== null) {
    imagen.parentNode.removeChild(imagen);
  }
}

function comprobarSiGanador() {
  if (palabra === arrPalabraOculta.join("")) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", "media/notbad.gif");

    let divResultadoAhorcado = document.querySelector("#divResultadoAhorcado");
    divResultadoAhorcado.appendChild(imagen);
    ponerDisabled(true);
  } else if (maxFallos === 0) {
    let imagen = document.createElement("img");
    imagen.setAttribute("src", "media/ahorcado.jpg");

    let divResultadoAhorcado = document.querySelector("#divResultadoAhorcado");
    divResultadoAhorcado.appendChild(imagen);
    ponerDisabled(true);
  }

}

/**
 * Funcion para aceptar la palabra que se introduce en un input para iniciar el juego
 * @returns
 */
const aceptarPalabra = () => {
  
  const expReg = /^[a-z]+$/;
  palabra = document.querySelector("#palabraOculta").value;

  if(palabra.length === 0){
    alert("Introduzca algo para jugar");
    return
  }else if (!expReg.test(palabra)) {
    alert("No se admiten caracteres especiales ni numeros");
    document.querySelector("#palabraOculta").value = ""
    return;
  }

  reiniciarElementosJuego();

  for (let c of palabra) {
    arrPalabraOculta.push("_ ");
    arrPalabraVisible.push(c);
  }

  console.log(arrPalabraOculta);
  console.log(arrPalabraVisible);

  //Ponemos las letras de nuestro tablero a disabled = false
 ponerDisabled(false)

  //ESCRIBIR EN EL HTML LO QUE CONTIENE arrPalabraOculta
  actualizarPalabra();
};

/**
 * Funcion asociada al boton #comprobarLetra para añadirle un evento
 */
const comprobarLetra = (e) => {
  console.log("Entra en comprobar letra");

  const expReg = /^[a-zA-Z]{1}$/;
  let inputLetra = e.target.value.toString().toLowerCase();
  console.log(e.target.value);

  if (!expReg.test(inputLetra)) {
    alert("Introduce 1 solo caracter");
    return;
  }

  if (arrPalabraVisible.includes(inputLetra)) {
    //Cambiamos todas las coincidencias dentro del arrayPalabraOculta
    while (arrPalabraVisible.indexOf(inputLetra) != -1) {
      arrPalabraOculta.splice(
        arrPalabraVisible.indexOf(inputLetra),
        1,
        inputLetra
      );
      console.log(arrPalabraOculta);
      arrPalabraVisible.splice(arrPalabraVisible.indexOf(inputLetra), 1, "_");
      console.log(arrPalabraVisible);
    }

    //ESCRIBIR EN EL HTML LO QUE CONTIENE arrPalabraOculta
    actualizarPalabra();

    //Comprobamos si ha habido un ganador
    comprobarSiGanador();
  } else {
    console.log("Fallo");

    maxFallos--;
    comprobarSiGanador();
  }
};

const ponerDisabled = (bool = true) => {
  const inputLetra = document.querySelectorAll("div input[class=letra]");
  for (let i = 0; i < inputLetra.length; i++) {
    inputLetra[i].disabled = bool;
  }
}

/*
FUNCION USADA PARA INICIALIZAR DIFERENTES ELEMENTOS EN NUESTRA PAGINA
*/
function onIniciar() {
  console.log("Cargo script logicaAhorcado.js");

  //Inicializamos el boton calcular edad
  const botonCalcularEdad = document.querySelector("#aceptarPalabra");
  botonCalcularEdad.addEventListener("click", aceptarPalabra);

  //Inicializamos los botones que contienen las letras
  const inputLetra = document.querySelectorAll("div input[class=letra]");
  for (let i = 0; i < inputLetra.length; i++) {
    inputLetra[i].disabled = true;
    inputLetra[i].addEventListener("click", comprobarLetra);
  }
}

window.onload = onIniciar();
