const checkAuth = (e) => {
  e.preventDefault();

  console.log("Formulario enviado");
  const email = e.target[0].value;
  const password = e.target[1].value;
  const data = {
    email,
    password
  }

  console.log(email, password);
  const request = new Request("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respuesta = authPromise(request)
  console.log(respuesta)
  

};

const authPromise = async (request) => {
  await fetch(request)
    .then((response) => response.json())
    .then((data) => data);
};

function onIniciar() {
  console.log("Uso esta funcion para inicializar elementos de la pagina");

  const form_login = document.querySelector("#form_login");
  form_login.addEventListener("submit", checkAuth);
}

window.onload = onIniciar();
