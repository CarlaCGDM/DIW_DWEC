const express = require("express");
const router = express.Router();
const productosController = require("../../controllers/productosController")

//RUTA DE ENTRADA HASTA ESTE MÓDULO: /api/v1/productos/
router.route("/")
  .get(productosController.getAllProducts)
  .post(productosController.postOneProduct);

router.route("/:prod")
  .get(productosController.getOneProduct)
  .put(productosController.putOneProduct)
  .delete(productosController.deleteOneProduct);

module.exports = router;
