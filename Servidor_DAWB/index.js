//IMPORTAMOS MODULO EXPRESS
const express = require("express")
//CREAR UNA APLICACION EXPRESS
const app = express()

//FUNC MIDDLEWARE
//request -> req -> Objeto que contiene la petición HTTP Cliente -> Servidor
//response -> res -> Objeto que contiene la respuesta HTTP Servidor -> Cliente
//next -> Función -> A la siguiente función en la lista de funciones a ejecutarse

app.use(
  //BINDEAR UNA FUNCION MIDDLEWARE
  (req, res, next) => {
    console.log("Se ha realizado una petición");

    console.log(`[SERVER] Metodo usado: ${req.method}`);
    console.log(`[SERVER] URL usada: ${req.originalUrl}`);

    next();
  },
  (req, res, next) => {
    console.log("[SERVER] Siguiente func middleware. TODO OK");
    res.send("<h1>Hola Mundo</h1>");
  }
);

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})