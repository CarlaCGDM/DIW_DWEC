const express = require("express")
const router = express.Router()
const productos = require("./productosRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

router.route("/")
    .get((req, res, next)=>{
        res.send("<h1>Hola Mundo</h1>").end();
        res.locals.mensaje = "OK"
        next()
    });
router.use("/productos", productos);

    

module.exports = router