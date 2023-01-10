const personajes = require("./datos/personajes_es.json")
const datos = require("./datos/productos.json")


console.log(typeof datos.productos);

//console.log(datos.data.Aatrox.tags[1]);

//Para poder hacer uso de express primero tenemos que cargar la biblioteca
const express = require("express")
const app = express() //Crea una aplicación express.

//El primer ejemplo de middleware es el más sencillo.
//En este ejemplo se "bindea" una función a un método HTTP -> EN ESTE CASO CONCRETO, SE BINDEA A TODAS LAS PETICIONES
app.use(
  (request, response, next) => {
    //Las funciones middleware de express en su uso más común reciben por parámetros request, response y next
    //request: es la HTTP request, es decir, la petición http.
    //response: es la respuesta que da el servidor al navegador
    //next: es la siguiente función middleware que se ejecutaría
    console.log("Primera funcion middleware [Peticion recibida]");
    next();
  },
  (request, response, next) => {
    //Las funciones middleware de express en su uso más común reciben por parámetros request, response y next
    //request: es la HTTP request, es decir, la petición http.
    //response: es la respuesta que da el servidor al navegador
    //next: es la siguiente función middleware que se ejecutaría
    console.log("Segunda funcion middleware:", "[Metodo Peticion:"+ request.method+ "]");
    console.log("[URL Peticion:" + request.url + "]");
    const metodo = request.method
    const url = request.originalUrl
    /*
    if (url === "/") {
      //response.send("<h1>Bienvenido<h1>");
    } else {
      response.status(404);
      response.send("<h1>404 page not found</h1>");
      return;
    }
    */
    next();
  }
);

app.use(
  (request, response, next) => {
    //Las funciones middleware de express en su uso más común reciben por parámetros request, response y next
    //request: es la HTTP request, es decir, la petición http.
    //response: es la respuesta que da el servidor al navegador
    //next: es la siguiente función middleware que se ejecutaría
    console.log("Tercera funcion middleware: [TODO OK]", request.originalUrl);
    next()
  }
);

app.get("/", (req, res, next)=>{
    const producto = datos.productos.cereales.nombre;
    const precio = datos.productos.cereales.precio;
    res.send(`<h1>${producto}</h1><h3>${precio}€</h3>`);
})

/*
app.get("/cereales", (req, res, next) => {
  res.send(datos.productos.cereales);
});
app.get("/colacao", (req, res, next) => {
  res.send(datos.productos.colacao);
});
app.get("/agua", (req, res, next) => {
  res.send(datos.productos.agua);
});
*/

app.get("/:prod", (req, res, next) => {
  
    const param = req.params.prod
    const producto = datos.productos
    res.send(producto)
    //https://stackoverflow.com/questions/5726729/how-to-parse-json-using-node-js
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

