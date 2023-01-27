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

app.use(express.static("views"))

const PORT = 3001
app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
})