const datos = require("./productos.json")

const getAllProducts = () => {

    return datos.productos
}

const getOneProduct = (nombre) => {
    const oneProduct = datos.productos[nombre]
    return oneProduct
}

const insertProduct = (producto) => {
    //meto el producto en el objeto productos

    //Escribo el fichero con esos nuevos datos
}

module.exports = {
    getAllProducts,
    getOneProduct
}