const express = require("express")
const cookieParser = require("cookie-parser")
const {v4: uuid} = require("uuid")
const v1 = require("./v1/routes/indexRoutes")

const app = express()
const PORT = process.env.PORT || 3001


app.use(express.json())
app.use(cookieParser())
app.use((req,res,next)=>{
    let date = new Date().toLocaleTimeString()
    console.log("\x1b[41m%s\x1b[0m", `[info] ${date} peticion: ${req.method} ${req.originalUrl}`);
    next()
})

//MIDDLEWARE PARA AUTENTICAR USER ***AÚN EN DESARROLLO
let sessions = []
app.use((req, res, next) => {
  const {cookies} = req
  if(!cookies.sessionId){
    console.log("Sesion creada")
    const sessionId = uuid();
    sessions.push({sessionId})
    res.cookie("sessionId", sessionId, {httpOnly: true})
  } else {
    console.log(sessions.find(session=>session.sessionId === cookies.sessionId))
  }
  next()
});

app.use("/api/v1", v1)

//FUNCION Genérica de gestión de errores
app.use((err, req, res, next)=>{
  console.error("ERROR:"+err.stack)
  res.end()
})


app.listen(PORT, ()=>{
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] 🚀 Server listening on port ${PORT} 🚀`
    );
})

/*
TUTORIAL
https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

VIDEO YT
https://www.youtube.com/watch?v=qFmwRriNJWs&t=5s

SESSION VS COOKIE
https://stackoverflow.com/questions/47515991/how-to-setup-an-authentication-middleware-in-express-js
https://www.youtube.com/watch?v=o14rCK37RAY
https://www.youtube.com/watch?v=bywKD040J_o

SOAP VS REST
https://www.guru99.com/comparison-between-web-services.html

PUT VS POST
https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.4
https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.3

*/