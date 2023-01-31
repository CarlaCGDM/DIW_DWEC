const datos = require("./productos.json")

const getAllProduct = () => {
    return datos.productos
}

module.exports = {
    getAllProduct
}