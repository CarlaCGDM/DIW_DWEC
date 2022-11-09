console.log(window.localStorage.getItem("inputPalabra"));

const resultado = document.querySelector("#resultadoRegExp");

function onIniciar() {
  //1º Añado el evento al boton
  const botonComprobarRegExp = document.querySelector("#botonComprobarRegExp");
  botonComprobarRegExp.addEventListener("click", comprobarRegExp);
}

function onClose(event) {
  event.preventDefault();
  const opc = confirm("Are u sure u want to exit?")
  if (opc) {
    const inputPalabra = document.querySelector("#inputPalabra").value;
    window.localStorage.setItem("inputPalabra", inputPalabra);
  } else {
    return "you have unsaved changes";
  }
  
}

const comprobarRegExp = () => {
  /*
    COMPROBACION DE UN EMAIL   
    */
  //1º Declaramos la expReg
  let expReg = /^(\w*|\d*|\.*)+@[a-zA-Z]+\.(com|es)$/;

  const inputPalabra = document.querySelector("#inputPalabra").value;

  if (!expReg.test(inputPalabra)) {
    alert("Nope");
    return;
  }

  resultado.innerHTML = "TUDO BEM";

  //window.localStorage.setItem("inputPalabra", inputPalabra)

  //window.location.href = "landing.html";
};
window.onbeforeunload = onClose;
window.onload = onIniciar;

