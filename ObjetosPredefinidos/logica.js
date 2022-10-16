var myHeader;
var sticky;

const ponerSticky = () => {
  if (window.pageYOffset > sticky) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
};

function onIniciar() {
  console.log("Cargo script logica.js");
  myHeader = document.querySelector("#myHeader");
  sticky = myHeader.offsetTop;

  window.onscroll = ponerSticky;
}

window.onload = onIniciar();
