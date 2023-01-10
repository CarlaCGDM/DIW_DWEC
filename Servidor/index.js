const express = require("express") //Tenemos la biblioteca cargada

const app = express() //Aquí tenemos una aplicación "express"

//VAMOS A VER LO QUE ES UNA FUNCIÓN MIDDLEWARE
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
