const usuariosRegistrados = [
  { user: "diego", email: "diego@g.educaand.es", pass: "1234567890" },
  { user: "demonSlayer_xX", email: "fulanita@g.educaand.es", pass: "shurmana69" },
  { user: "javi_2000", email: "jsm.berja.2000@g.educaand.es", pass: "tiranosaurusRex1999" },
  { user: "sofi_guirao", email: "sofi_guirao@g.educaand.es", pass: "sofi_guirao" },
  { user: "Aman_Ortiga", email: "erTitoAmanci@g.educaand.es", pass: "iLuvExploitingPple" },
];

//Variable global con direcciones válidas
const dirValidas = [
  "C/SENDA PERDIDA,88",
  "C/ALFARERIAS,56,1,A",
  "C/PINTOR ZULOAGA,56,4,D"
];


/*
Crear una función que compruebe si el usuario y el email ya está registrado en el sistema
Mostrar por pantalla si:
 - El usuario ya existe
 - El email ya existe

 ANTES de realizar tal comprobación, primero se ha de comprobar el formato del email:
 Email-> debe terminar con "@g.educaand.es" No se especifica nada más.

 Si todo va bien, almacenar las variables comprobadas junto con la contraseña en el objeto predefinido LocalStorage
*/
const checkUserEmail = () => {
  console.log("checkUserEmail");

}


/*
Implementar una función que compruebe los datos relativos a la dirección
Calle-> El formato debe seguir un formato tipo C/xxxxx, donde las x pueden ser sólo letras.
Nota* los carácteres "C/" pueden aparecer o no. Si no aparecen entonces la función se los debe añadir al principio
Numero y Piso -> Deben ser sólo números. No se especifica longitud máxima
Puerta-> Puede estar compuesto únicamente por 1 letra.

TODA la información relativa a la dirección debe estar en MAYÚSCULAS

Si la validación va correctamente, se deben concatenar todos los campos, separándose con ","
y añadirse al principio del array de direcciones (dirValidas) que es una variable global

Finalmente, si todo va bien, almacenar el string creado en el paso anterior en el objeto predefinido LocalStorage
*/
const checkDirInfo = () => {
  console.log("Check dir info")

}


/*
Se especifica que la aplicación debe mantener los datos introducidos por el usuario
aunque este cierre y abra la ventana del navegador.
Para ello se debe usar el objeto LocalStorage.
Poner el valor de la key específica para cada uno de los inputs en cada input.
Ejemplo:
  Para el input Usuario -> Se debe poner el valor de la key "user"

KEYS para el objeto LocalStorage
Usuario -> "user"
Password -> "password"
Email -> "email"
Direccion Válida -> "direction"
*/
const putInfo = () => {
  console.log("putInfo")

}


const checkForm = (e) => {
  e.preventDefault()
  checkUserEmail()
  checkDirInfo()
}

function onIniciar() {
  console.log("Uso esta funcion para inicializar elementos de la pagina");
  const formulario = document.querySelector("#formularioEjercicio");
  formulario.addEventListener("submit", checkForm);

  putInfo()

}

window.onload = onIniciar();
