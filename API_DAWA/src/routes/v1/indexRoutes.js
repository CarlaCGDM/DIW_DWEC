const express = require("express");
const router = express.Router()

router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.get("/productos", (req, res, next)=>{
    res.send("PRODUCTOS")
})

module.exports.router = router
