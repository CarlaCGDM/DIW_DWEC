const express = require("express")
const router = express.Router()
const productos = require("./productosRoutes")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1

router.route("/")
    .get((req, res, next)=>{
        res.send("<h1>Hola Mundo</h1>").end();
        console.log("\x1b[34m%s\x1b[0m", `[GET /] - OK`);
    });
router.use("/productos", productos);

    

module.exports = router