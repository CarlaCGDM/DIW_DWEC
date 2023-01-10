const express = require("express") //Tenemos la biblioteca cargada

const app = express() //Aquí tenemos una aplicación "express"

//VAMOS A VER LO QUE ES UNA FUNCIÓN MIDDLEWARE

//El primer ejemplo de middleware es el más sencillo.
//En este ejemplo se "bindea" una función a un método HTTP -> EN ESTE CASO CONCRETO, SE BINDEA A TODAS LAS PETICIONES
//Las funciones middleware de express en su uso más común reciben por parámetros request, response y next
//request: es la HTTP request, es decir, la petición http.
//response: es la respuesta que da el servidor al navegador
//next: es la siguiente función middleware que se ejecutaría
app.use((req, res, next) => {
        console.log("Se ha realizado una petición")
        console.log("Metodo utilizado", req.method)
        console.log("URL usada", req.originalUrl)
        console.log("CONEXION REALIZA CORRECTAMENTE");
        next()
    },
    (req, res, next) => {
        console.log("Siguiente funcion middleware")
        res.send("<h1>Bienvenid@</h1>")

    }
)

//DEFINIMOS EL PUERTO POR DONDE ESCUCHARÁ NUESTRO SERVER
const PORT = 3001;
//PONEMOS EL SERVIDOR A ESCUCHAR
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
