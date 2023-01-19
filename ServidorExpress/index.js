//IMPORTAMOS MODULO EXPRESS
const express = require("express")
//CREAR UNA APLICACION EXPRESS
const app = express()

const datos = require("./Datos/personajes_es.json")
const datosArr = Object.entries(datos.data)

const today = new Date().toLocaleString();

//FUNC MIDDLEWARE
//request -> req -> Objeto que contiene la petición HTTP Cliente -> Servidor
//response -> res -> Objeto que contiene la respuesta HTTP Servidor -> Cliente
//next -> Función -> A la siguiente función en la lista de funciones a ejecutarse

app.use(
  //BINDEAR UNA FUNCION MIDDLEWARE
  (req, res, next) => {
    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Peticion recibida: ${today}`);

    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Metodo usado: ${req.method}`);
    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] URL usada: ${req.originalUrl}`);
    next()
  }
);

app.get("/", (req, res, next)=>{
  console.log(`\x1b[34m%s\x1b[0m`, `[GET] Dentro de peticion GET`);
  res.sendFile(__dirname+"/views/index.html")
})

app.get("/:pj", (req, res, next) => {
  let personaje = req.params.pj
  
  let personajeData = datosArr.find( pers => pers[0] === personaje)
  console.log(personajeData)
  
  res.send(
    `<h1>${personajeData[0]}</h1><h2>${personajeData[1].blurb}</h2><h3>${personajeData[1].tags[0]}</h3>`
  );
});

app.post("/", (req, res, next) => {
  console.log(`\x1b[34m%s\x1b[0m`, `[POST] Dentro de peticion POST`);
  res.end()
});

const PORT = 3001
app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
})