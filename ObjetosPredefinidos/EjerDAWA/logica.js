//Variable global con direcciones válidas
const dirValidas = [
  "C/SENDA PERDIDA,88",
  "C/ALFARERIAS,56,1,A",
  "C/PINTOR ZULOAGA,56,4,D",
];

//EXP REGULARES
const regCalle = /^((C|c)\/)?[a-zA-Z\s]+$/;
const regC = /^(C|c)\//;
const regNumPiso = /^\d+$/;
const regLetra = /^[a-zA-Z]$/;

//INPUTS
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPassword");
const inputEmail = document.querySelector("#inputEmail");
const inputCalle = document.querySelector("#inputCalle");
const inputPiso = document.querySelector("#inputPiso");
const inputNum = document.querySelector("#inputNumero");
const inputPuerta = document.querySelector("#inputPuerta");
const inputFecha = document.querySelector("#inputFechaNac");

//ZONA ERRORES
const zonaMensajesDir = document.querySelector("#zonaMensajesDir");
const zonaMensajesFecha = document.querySelector("#zonaMensajesFecha");

/*
************************************
************EJERCICIO 1*************
************************************
Implementar una función que compruebe los datos relativos a la dirección
Calle-> El formato debe seguir un formato tipo C/xxxxx, donde las x pueden ser sólo letras.
  Nota*. Si los caracteres “C/” no aparecen, el programa se lo concatena al principio de la cadena
Numero y Piso -> Deben ser sólo números. No se especifica longitud máxima
Puerta-> Puede estar compuesto únicamente por 1 letra.

TODA la información relativa a la dirección debe estar en MAYÚSCULAS

Si la validación va correctamente, se deben concatenar todos los campos, separándose con ","
y añadirse al principio del array de direcciones (dirValidas) que es una variable global

Finalmente, si todo va bien, almacenar el string creado en el paso anterior en el objeto predefinido LocalStorage
*/
const checkDirInfo = () => {
  
  console.log("Ejer 1. Método check Direccion");
  //Actualizo la zona de los mensajes de error para los campos direccion
  zonaMensajesDir.innerHTML = "";

  let calle = inputCalle.value;
  let piso = inputPiso.value;
  let num = inputNum.value;
  let letra = inputPuerta.value;

  if (
    regCalle.test(calle.trim()) &&
    regNumPiso.test(num.trim()) &&
    regNumPiso.test(piso.trim()) &&
    regLetra.test(letra.trim())
  ) {

    //Compruebo si no existen los caracteres C/ en la calle
    if(!regC.test(calle.trim())){
      //Concateno a calle los caracteres C/
      calle = "C/"+calle     
    }

    let dirValida = `${calle.trim()},${num.trim()},${piso.trim()},${letra.trim()}`;
    //Aniado la calle creada al array de dirValidas
    dirValidas.unshift(dirValida.toUpperCase());
    console.table(dirValidas);

    //Aniado la informacion a localStorage
    window.localStorage.setItem("direction", dirValida.toUpperCase());

    //Como no se especifica nada para el usuario, email y contraseña, pillo el valor de los inputs
    //y lo meto en localStorage
    const user = inputUser.value
    const email = inputEmail.value
    const pass = inputPass.value
    window.localStorage.setItem("user", user.trim());
    window.localStorage.setItem("email", email.trim());
    window.localStorage.setItem("password", pass.trim());
  
  } else {
    alert("Validacion Incorrecta")

    let texto = document.createTextNode(
      "Ha habido un error de validación en los campos de direccion"
    );
    zonaMensajesDir.appendChild(texto);
  }
};

/*
************************************
************EJERCICIO 2*************
************************************
Implementar una función que compruebe que la fecha de nacimiento es una fecha válida.
El año de la fecha introducida debe ser menor o igual que el año en el que estamos.
Si no fuera así, se debe mostrar un mensaje advirtiendo que el año introducido no es correcto.

Si todo va bien, almacenar la fecha completa en el objeto predefinido LocalStorage
*/
const checkYear = () => {
  console.log("Ejer 2. Método checkYear");
  //Actualizo la zona de los mensaje de error para fecha
  zonaMensajesFecha.innerHTML = "";

  let dBirth = new Date(inputFecha.value)
  let dHoy = new Date()

  if (!dBirth.getFullYear() || dBirth.getFullYear() > dHoy.getFullYear()) {
    alert("Error en la fecha");

    let texto = document.createTextNode(
      "La fecha debe ser menor o igual a la actual"
    );
    zonaMensajesFecha.appendChild(texto);

  } else {
    //Guardo la fecha en LocalStorage
    window.localStorage.setItem("dBirth", inputFecha.value);
  }
};

/*
************************************
************EJERCICIO 3*************
************************************
Se especifica que la aplicación debe mantener los datos introducidos por el usuario
aunque este cierre y abra la ventana del navegador.
Para ello se debe usar el objeto LocalStorage.
Poner el valor, de la key específica para cada uno de los inputs, en cada input.
Ejemplo:
  Para el input Usuario -> Se debe poner el valor de la key "user"

KEYS para el objeto LocalStorage
Usuario -> "user"
Password -> "password"
Email -> "email"
Fecha de Nacimiento -> "dBirth"
Direccion Válida -> "direction"
*/
const putInfo = () => {
  console.log("Ejer 3. Método putInfo");

  if (window.localStorage.getItem("user")) {
    inputUser.value = window.localStorage.getItem("user");
  }

  if (window.localStorage.getItem("pass")) {
    inputPass.value = window.localStorage.getItem("pass");
  }

  if (window.localStorage.getItem("email")) {
    inputEmail.value = window.localStorage.getItem("email");
  }

  if (window.localStorage.getItem("dBirth")) {
    inputFecha.value = window.localStorage.getItem("dBirth");
  }

  if (window.localStorage.getItem("direction")) {
    const direction = window.localStorage.getItem("direction").split(",");
    
    for(var i in direction){
      switch (i) {
        case "0": {
          inputCalle.value = direction[0];
          break;
        }
        case "1": {
          inputNum.value = direction[1];
          break;
        }
        case "2": {
          inputPiso.value = direction[2];
          break;
        }
        case "3": {
          inputPuerta.value = direction[3];
          break;
        }
      }
    }
  }
  
};

/**
 * No modificar este método. Permite la ejecución del programa de forma correcta.
 * Para la resolución de los ejercicios, simplemente codifica lo que se pide dentro
 * de la función correspondiente.
 * @param {*} e
 */
const checkForm = (e) => {
  e.preventDefault();

  checkDirInfo();
  checkYear();
};

function onIniciar() {
  const formulario = document.querySelector("#formularioEjercicio");
  formulario.addEventListener("submit", checkForm);
  putInfo();
}

window.onload = onIniciar();
