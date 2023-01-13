const cors = require("cors")
const express = require("express") //Tenemos la biblioteca cargada

const app = express() //Aquí instanciamos una aplicación "express"

//OBJETOS DEL PROGRAMA
const fecha = new Date()
const datos = require("./Datos/productos.json")
const datosArr = Object.entries(datos.productos)

//VAMOS A VER LO QUE ES UNA FUNCIÓN MIDDLEWARE

//El primer ejemplo de middleware es el más sencillo.
//En este ejemplo se "bindea" una función a un método HTTP -> EN ESTE CASO CONCRETO, SE BINDEA A TODAS LAS PETICIONES
//Las funciones middleware de express en su uso más común reciben por parámetros request, response y next
//request: es la HTTP request, es decir, la petición http.
//response: es la respuesta que da el servidor al navegador
//next: es la siguiente función middleware que se ejecutaría
app.use(cors())
app.use(
    (req, res, next) => {
        console.log(
          "\x1b[34m%s\x1b[0m",
          `[SERVER_DIEGO] Se ha realizado una petición: [${fecha}]`
        );
        console.log("\x1b[41m%s\x1b[0m", `[SERVER] Al recurso ${req.url}`);
        next()
    },
    (req, res, next) => {
        console.log("Siguiente funcion middleware")

        if(req.method === "GET" || req.method === "POST"){
            res.header("Access-Control-Allow-Origin: *");
            next()
        } else {
            res.status(403)
            res.send("<h1>NO PERMITIDO</h1>");
        }
    }
)

app.get("/", (req, res, next) => {
  console.log("SE HA ENTRADO EN INDEX");
  res.send("<h1>BIENVENIDD@</h1>");
});


app.get("/productos", (req, res, next) => {
    console.log("Consultando productos...")
    res.send(datos.productos)
});

app.get("/productos/:producto", (req, res, next) => {
  console.log("Consultando prpoducto...");
  
  const parametro = req.params.producto
  const producto = datosArr.find(p => p[0] === parametro)
  res.send(producto)
  
});

//DEFINIMOS EL PUERTO POR DONDE ESCUCHARÁ NUESTRO SERVER
const PORT = 3001;
//PONEMOS EL SERVIDOR A ESCUCHAR
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
