const datos = require("./productos.json")
const fs = require("fs")

const getAllProduct = () => {
    return datos.productos
}

const getOneProduct = (nombreProducto) => {
    return datos.productos[nombreProducto]
}

const insertOneProduct = (newProduct)=>{


  datos.productos[newProduct.nombreProducto] = newProduct;

  //Escribo el producto nuevo en el fichero JSON
  fs.writeFile(
    "./src/database/productos.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL ESCRIBIR");
    }
  );

  return newProduct;
}

module.exports = {
    getAllProduct,
    getOneProduct,
    insertOneProduct
}