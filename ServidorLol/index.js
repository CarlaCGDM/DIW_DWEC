//EXPLICACION DE LO QUE QUEDA POR HACER
//1º
//Hay que establecer endpoints para devolver al cliente:
//- Los archivos JS que se necesitan
//- Los archivos CSS que se necesitan
//- La imagen SVG del logo del League Of Legends
//2º
//Una vez hecho eso, tengo que modificar el JS para que se realice una petición al servidor
//pidiendo los datos en formato JSON con la información de todos los personajes
//3º
//Con eso hecho, al construir el <div> que contiene al personaje, modificar la url para que
//realice una petición al servidor pidiendo un recurso en concreto.
//Establecer endpoint para ese recurso, que es una imagen
//4º FUTURO
//Al construir el div, también se piden 2 archivos de audio... un joke y el laugh
//Establecer entrypoints para esos recursos
//5º FUTURO (AFINARLO MEJOR)
//Establecer endpoints para devolver una información en concreto sobre un personaje en concreto
//Así, cuando se construya el <div> con el pj, también se puede incluir cierta información del personaje


//IMPORTAMOS EXPRESS
const express = require("express")
const app = express()
//IMPORTAMOS CORS (Cross-Origin Resource Sharing)
const cors = require("cors")
//IMPORTAMOS PROCESS (propio de Node.js)
const process = require("process");

//Variables globales
const today = new Date().toLocaleString();

//Permitimos las peticiones cors
app.use(cors())

app.use((req, res, next)=>{
    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Peticion recibida: ${today}`);

    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Metodo usado: ${req.method}`);
    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] URL usada: ${req.originalUrl}`);
    next();
})

app.get("/", (req, res, next)=>{
  //http://expressjs.com/en/api.html#res.sendFile
  //https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed
  res.sendFile("/html/index.html", { root: __dirname });

  //https://stackoverflow.com/questions/14953792/how-src-attribute-of-img-tag-is-executed
  //Explicacion de como se ejecuta src de una img en html
})


//PONEMOS EL SERVIDOR A ESCUCHAR POR EL PUERTO 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
})
