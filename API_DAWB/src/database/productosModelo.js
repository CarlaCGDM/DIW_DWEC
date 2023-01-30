const datos = require("./productos.json")

const getAllProducts = () => {

    return datos.productos
}

const getOneProduct = (nombre) => {
    const oneProduct = datos.productos[nombre]
    return oneProduct
}

module.exports = {
    getAllProducts,
    getOneProduct
}