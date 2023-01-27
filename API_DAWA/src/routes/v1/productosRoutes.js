const express = require("express");
const router = express.Router();

//    v1/api/productos/
router.get("/") //TODOS LOS PROD
router.post("/") //CREATE 1 PROD

router.get("/:prod") //OBTENER 1 PROD
router.delete("/:prod") //OBTENER
router.put("/:prod") //UPDATE


module.exports.router = router