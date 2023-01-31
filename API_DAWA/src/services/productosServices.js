const productosModelo = require("../database/productosModelo")

//LOGICA DE NEGOCIO
const getAllProduct = () => {
  const productos = productosModelo.getAllProduct()
  return productos
};
const insertOneProduct = () => {
  
};
const getOneProduct = () => {
  
};
const deleteOneProduct = () => {
  
};
const updateOneProduct = () => {
  
};

module.exports = {
  getAllProduct,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
};