const productosModelo = require("../database/productosModelo");
const { v4: uuid } = require("uuid");
/*
SERVICIOS
En esta parte de la aplicación vamos a implementar toda la parte de interacción
con la base de datos.
Aquí implementaríamos la lógica del negocio. Es decir, las reglas que se aplican
a la hora de resolver "problemas reales".

https://stackoverflow.com/questions/4816692/what-is-a-good-example-of-a-service-layer-in-asp-net-mvc/4817935#4817935
*/
const getAllProducts = () => {
  const allProductos = productosModelo.getAllProducts();
  return allProductos;
};

const getOneProduct = (nombre) => {
  const producto = productosModelo.getOneProduct(nombre);
  return producto;
};

const createOneProduct = (newProduct) => {
  let today = new Date().toISOString();

  //"Construyo" el nuevo objeto, estableciendo un id
  newProduct = {
    ...newProduct,
    id: uuid(),
    createdAt: today,
    updatedAt: today,
  };

  return productosModelo.createOneProduct(newProduct);
};

const deleteOneProduct = (nombre) => {
    //Si ese producto no existe en la base de datos, devuelvo false
  const producto = productosModelo.getOneProduct(nombre);
  if (!producto) {
    return false;
  }

  //Elimino el producto
  productosModelo.deleteOneProduct(nombre);

  //Si en este punto ese producto ya no se encuentra en la BDD, entonces es que se ha eliminado bien
  if(!productosModelo.getOneProduct(nombre)){
    return producto
  } else {
    return false
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct
};
