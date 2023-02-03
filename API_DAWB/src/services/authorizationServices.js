const usersModelo = require("../database/usersModelo");



const checkUser = (credenciales) => {
    // se utiliza algunna funcionalidad del modelo para comprobar si existe el usuario
    const oneUser = usersModelo.getOneUser(credenciales.email);
    if (oneUser.password == credenciales.password) {
        return oneUser.id
    } else {
        return null
    }
}

const addSession = (sessionId, idUsuario) => {
    // se añade una sesion junto con el id del user a la tabla de sesiones
}

module.exports = {
    checkUser,
    addSession
}