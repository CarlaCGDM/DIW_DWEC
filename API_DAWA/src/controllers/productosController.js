const productosServices = require("../services/productosServices")

//SE IMPLEMENTA LA LOGICA DE LA APLICACION
const getAllProduct = (req, res, next) => {
    const allProducts = productosServices.getAllProduct()
    if(!allProducts){
        res.status(404).send("NO HAY PRODUCTOS")
        return
    }
    res.send(allProducts)
}
const insertOneProduct = (req, res, next) => {
  res.send("Insert PRODUCT");
};
const getOneProduct = (req, res, next) => {
  res.send("GET ONE PRODUCT");
};
const deleteOneProduct = (req, res, next) => {
  res.send("delete PRODUCTS");
};
const updateOneProduct = (req, res, next) => {
  res.send("update PRODUCTS");
};

module.exports = {
    getAllProduct,
    insertOneProduct,
    getOneProduct,
    deleteOneProduct,
    updateOneProduct
}
