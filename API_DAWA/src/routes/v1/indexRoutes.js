const express = require("express");
const router = express.Router()
const productosRoutes = require("./productosRoutes")

//URL AQUÍ: /v1/api
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.use("/productos", productosRoutes.router)

module.exports.router = router
