const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const path = require("path")
const v1 = require("./v1/routes/indexRoutes");
const utils = require("./utils/consoleInfo")
const auth = require("./utils/authentication")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, "views/landing")));

const miMiddle = (req, res, next) =>{
  console.log("EN MI MIDDLE")
  express.static(path.join(__dirname, "views/autorizado/index2.html"))
  next()
}

app.use(utils.infoBeginOfRequest);
app.use("/login", auth.authenticateUser);
app.use("/v1/api", v1, utils.infoEndOfRequest);

app.use((req, res, next) => {
  console.log("EN ULTIMO USE")
  res.status(202).send({mensaje: "LA AUTORISASIÓ"});
});

//FUNCION Genérica de gestión de errores
app.use((err, req, res, next) => {
  console.error("ERROR:" + err.stack);
  res.end();
});

app.listen(PORT, () => {
  console.log(
    "\x1b[41m%s\x1b[0m",
    `[start] 🚀 Server listening on port ${PORT} 🚀`
  );
});

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
