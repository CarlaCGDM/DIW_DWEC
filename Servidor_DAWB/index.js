//IMPORTAMOS MODULO EXPRESS
const express = require("express")
//CREAR UNA APLICACION EXPRESS
const app = express()

const datos = require("./Datos/productos.json")

//FUNC MIDDLEWARE
//request -> req -> Objeto que contiene la petición HTTP Cliente -> Servidor
//response -> res -> Objeto que contiene la respuesta HTTP Servidor -> Cliente
//next -> Función -> A la siguiente función en la lista de funciones a ejecutarse
const today = new Date()
app.use(
  //BINDEAR UNA FUNCION MIDDLEWARE
  (req, res, next) => {
    console.log(`Peticion realizada en ${today}`);

    console.log(`\x1b[34m%s\x1b[0m`, `[SERVER] Metodo usado: ${req.method}`);
    console.log(`\x1b[34m%s\x1b[0m`, `[SERVER] URL usada: ${req.originalUrl}`);
    next()
  }
);

app.get("/" , (req, res, next)=>{
  console.log(`\x1b[34m%s\x1b[0m`, `[GET] Dentro de peticion GET`)
  res.end()
})

app.post("/", (req, res, next) => {
  console.log(`\x1b[34m%s\x1b[0m`, `[POST] Dentro de peticion POST`);
  res.end()
});

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})