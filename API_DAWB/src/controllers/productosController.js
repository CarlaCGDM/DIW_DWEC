const productosServices = require("../services/productosServices")

const getAllProducts = (req, res, next) => {
    const allProducts = productosServices.getAllProducts()
    if (Object.keys(allProducts).length === 0) {
      res.send(allProducts);
    } else {
      res.status(404).end();
    }
    
};

const createOneProduct = (req, res, next) => {

    const {body} = req
    console.log(body)

    if(body.nombre === "" || body.precio === "" || body.categoria === "")
        res.status(400).end()
    else{
        const ok = productosServices.createOneProduct(body)
        if(ok) res.status(200).send("CREADO")
        else res.status(406).end();
    }

    res.end()
};

const getOneProduct = (req, res, next) => {

    //PRIMERO
    const { prod } = req.params

    const oneProduct = productosServices.getOneProduct(prod)

    if(oneProduct){
        res.send(oneProduct)
    } else {
        res.status(404)
    }
};

const updateOneProduct = (req, res, next) => {
  res.send("UPDATE ONE PRODUCT");
};

const deleteOneProduct = (req, res, next) => {
  res.send("DELETE ONE PRODUCT");
};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
