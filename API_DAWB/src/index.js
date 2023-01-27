const express = require("express")
const app = express()
const rutasV1 = require("./routes/v1/indexRoutes")



app.use("/api/v1", rutasV1.router)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] 🚀 Server listening on port ${PORT} 🚀`
    );
})