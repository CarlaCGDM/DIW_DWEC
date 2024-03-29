const express = require("express")
const app = express()
const rutasV1 = require("./routes/v1/indexRoutes")
const auth = require("./utils/authorization")

app.use(express.json())
app.use(auth.checkUser)
app.use("/api/v1", rutasV1.router)


app.use((err, req, res, next) => {
  console.log("Esta funcion captura todos los erroes de express")
  console.log(err.stack)
  res.status(500).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] 🚀 Server listening on port ${PORT} 🚀`
    );
})