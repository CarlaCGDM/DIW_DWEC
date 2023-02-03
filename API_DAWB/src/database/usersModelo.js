const datos = require("./users.json")
const fs = require("fs")

const getAllProducts = () => {

    return datos.users
}

const getOneUser = (email) => {
    const oneProduct = datos.users.find(
        (user) => user.email === email
    )
    return oneProduct
}

const insertUser = (producto) => {
    //meto el producto en el objeto users
    const nombre = producto.nombre
    datos.users[nombre] = producto

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );

    return getOneUser(nombre)
}

module.exports = {
    getAllProducts,
    getOneUser,
    insertUser
}