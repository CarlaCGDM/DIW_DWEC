const express = require("express");
const router = express.Router();
const productosRoutes = require("./productosRoutes")

// localhost:3001/ o localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.use("/productos",  productosRoutes.router);


module.exports.router = router


