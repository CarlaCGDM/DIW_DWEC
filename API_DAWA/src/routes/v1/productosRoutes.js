const express = require("express")
const router = express.Router()
const productosController = require("../../controllers/productosController")

//URL AQUí: /v1/api/productos

router
  .route("/")
  .get(productosController.getAllProduct) //GET ALL PRODUCTS
  .post(); //INSERT ONE PRODUCT

router.route("/:prod")
    .get() //GET ONE PRODUCT
    .delete() //DELETE ONE PRODUCT
    .put() //UPDATE ONE PRODUT



module.exports.router = router