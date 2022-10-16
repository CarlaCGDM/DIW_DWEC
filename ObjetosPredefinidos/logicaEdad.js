//Declaramos una variable constante que sea una función
const calcularEdad = () => {
    
    const valorInput = new Date(document.querySelector("#fechaNac").value);
    console.log(valorInput)

    const anioInput = valorInput.getFullYear();

    //Para conocer el anio en el que estamos
    const anioActual = new Date().getFullYear()

    console.log(anioInput);

    console.log(anioActual);

    if(anioActual-anioInput < 18){
        var src = "media/gandalf.jpg"
    } else {
        var src = "media/acceso.jpg"
    }

    //Crear ese algo. Ese elemento
    var imagen = document.createElement("img")
    imagen.setAttribute("src", src);

    var nodoDiv = document.querySelector("div[id=pResultadoEdad]");
    nodoDiv.innerHTML = ""
    nodoDiv.appendChild(imagen)

};


function onIniciar() {
  console.log("Cargo script logicaEdad.js");

  //Obtener el botón para poder así añadirle un evento
  const botonCalucularEdad = document.querySelector("#calcularEdad");
  //El evento que le vamos a añadir es un "click" y la funcion es una constante
  //Las variables, pueden ser de muchos tipos... entre ellos... pueden ser funciones
  botonCalucularEdad.addEventListener("click", calcularEdad);
}

window.onload = onIniciar();
