var dni;
var dniSinLetra;
var letrasValidas = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const comprobarDNI = () => {
  /*Primero debemos comprobar que el formato del dni es el correcto
  Para ello podemos usar expresiones regulares
  Para declarar una expresión regular podemos instanciar el objeto RegExp...
  O simplemente crear la expresion regular entre barras
  */
  let expRegDni = /^\d{8}(-|\s)?[a-zA-Z]{1}$/;

  dni = document.querySelector("#inputDNI").value;
  dni.trim();
  console.log(dni);

  //Para comprobar la expresion regular que hemos creado, recurrimos al metodo test()
  //expresionRegular.test(cadena a testear)
  //Nos devuelve true o false si se ha encontrado ese patrón o no
  var dniValido = expRegDni.test(dni);
  console.assert(expRegDni.test(dni), "formato no valido");

  if (!dniValido) {
    alert("Introduzca un DNI valido");
    return
  }

  //Si todo ha ido bien, podemos continuar
  //Parecido a test() tenemos exec()
  //exec() hace lo mismo, pero en vez de devolver true o false,
  //devuelve un array con las cadenas que ha encontrado.
  const expRegParteNumerica = /\d{8}/;
  const expRegParteCaracter = /[a-zA-Z]{1}/;

  const parteNumericaDNI = expRegParteNumerica.exec(dni);
  const parteCaracterDNI = expRegParteCaracter.exec(dni);

  //Comprobamos con un console log lo que hemos introducido
  console.log(
    `La parte numerica es ${parteNumericaDNI[0]} y la parte del caracter es ${parteCaracterDNI[0]}`
  );

  //Mostramos un mensaje por consola en caso de que algo haya ido mal
  console.assert(
    letrasValidas[parteNumericaDNI[0] % 23] === parteCaracterDNI[0],
    "La letra no es correcta"
  );

  if (letrasValidas[parteNumericaDNI[0] % 23] !== parteCaracterDNI[0]) {
    alert("DNI no válido");
  } else {
    alert("DNI válido");
  }
};

const generarLetraDNI = () => {
  let expRegDni = /^\d{8}$/;
   dniSinLetra = document.querySelector("#inputDNIGenerator").value;
   dniSinLetra.trim();
   console.log(dniSinLetra);

   let dniValido = expRegDni.test(dniSinLetra);
   console.assert(expRegDni.test(dniSinLetra), "formato no valido");

   if (!dniValido) {
     alert("Introduzca un DNI valido");
     return
   }

   let h3DNIConletra = document.querySelector("#h3DNIConletra");
   h3DNIConletra.innerHTML =
     dniSinLetra + "-" + letrasValidas[Number(dniSinLetra) % 23];

}

function onIniciar() {
  console.log("Cargo script de logicaDNI.js");

  //console.assert para comprobar que existe el id #inputDNI
  console.assert(
    document.querySelector("#inputDNI") !== null,
    "inputDNI no existe, ojito"
  );

  const botonValidarDni = document.querySelector("#botonValidarDni");
  botonValidarDni.addEventListener("click", comprobarDNI);

  const botonGenerarLetra = document.querySelector("#botonGenerarLetra");
  botonGenerarLetra.addEventListener("click", generarLetraDNI);
}

window.onload = onIniciar();
