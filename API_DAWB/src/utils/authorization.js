const {v4: uuid} = require("uuid")
const authorizationServices = require("./../services/authorizationServices")

const checkUser = (req,res,next) => {

    //comprobar si el usuario intenta logearse, o si ya está logeado
    //y está realizando una petición con ese logeo activo

    const {cookies} = req
    const {email, password} = req.body

    if ( !email && !password && !cookies.sessionId) {
        res.status(401).send({mensaje:"NO AUTORIZADO"})
    }

    //suponemos que el usuario se quiere logear por primera vez
    if (email && password) {

        const credenciales = {
            email,
            password
        }

        const idUsuario = authorizationServices.checkUser(credenciales)

        if(!idUsuario) {
            res.status(401).send({mensaje:"NO AUTORIZADO"})
        }

        const sessionId = uuid()  //numero random
        authorizationServices.addSession(sessionId, idUsuario)
        next()
    }

}

module.exports = {
    checkUser
}