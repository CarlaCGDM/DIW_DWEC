const productosModelo = require("../database/productosModelo")

const getAllProducts = () => {
    const allProducts = productosModelo.getAllProducts()
    //VA A LLAMAR AL MODELO, más concretamente, A LA FUNCION QUE OBTIENE TODOS LOS PRODUCTOS
    return allProducts 
}

const createOneProduct = (body) => {

    const productoNuevo = {
      ...body,
      id: "234678",
      fechaAlta: new Date().toLocaleDateString,
      fechaModificacion: new Date().toLocaleDateString,
    };
    
}

const getOneProduct = (nombre) => {

    const oneProduct = productosModelo.getOneProduct(nombre)
    return oneProduct
    
}

const updateOneProduct = () => {};

const deleteOneProduct = () => {};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
